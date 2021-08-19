const mongoose = require("mongoose");
const Records = mongoose.model("records");

exports.getRequestedData = async (req, res, next) => {
  const { startDate, endDate, minCount, maxCount } = req.body;
  console.log("input parameters", startDate, endDate, minCount, maxCount);

  try {
    const data = await Records.aggregate([
      {
        $match: {
          createdAt: { $gt: new Date(startDate), $lt: new Date(endDate) },
        },
      },
      {
        $project: {
          totalCount: { $sum: "$counts" },
          key: 1,
          createdAt: 1,
        },
      },
      {
        $match: {
          totalCount: { $gte: minCount, $lte: maxCount },
        },
      },
    ]);

    console.log(data);

    res.status(200).json({
      code: 0,
      message: "Success",
      records: data,
    });
  } catch (err) {
    console.log("err", err);
    res.status(400).json({
      code: 10, // database retreive error
      message: "Error while retreiving from database",
    });
  }
};
