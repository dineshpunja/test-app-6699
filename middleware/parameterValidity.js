const moment = require("moment");

exports.getReqData = (req, res, next) => {
  const { startDate, endDate, minCount, maxCount } = req.body;

  if (!moment(startDate, "YYYY-MM-DD", true).isValid()) {
    return res.status(400).json({
      code: 20, // invalid parameter
      message: "Please enter right start date",
    });
  }

  if (!moment(endDate, "YYYY-MM-DD", true).isValid()) {
    return res.status(400).json({
      code: 20, // invalid parameter
      message: "Please enter right end date",
    });
  }

  if (typeof minCount != "number") {
    return res.status(400).json({
      code: 20, // invalid parameter
      message: "Please enter right minCount",
    });
  }

  if (typeof maxCount != "number") {
    return res.status(400).json({
      code: 20, // invalid parameter
      message: "Please enter right maxCount",
    });
  }

  next();
};
