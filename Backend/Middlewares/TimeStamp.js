

const timeStamp = async (req, res, next) => {
  const time = req.query.timeStamp;
  let startDate = new Date();
  let endDate = new Date();
  endDate.setHours(23, 59, 59, 999); 

  if (time === "Today") {
    startDate.setHours(0, 0, 0, 0);
  } else if (time === "Weekly") {
    startDate.setDate(startDate.getDate() - 7);
    startDate.setHours(0, 0, 0, 0);
  } else if (time === "Monthly") {
    startDate.setMonth(startDate.getMonth() - 1);
    startDate.setHours(0, 0, 0, 0);
  } else if (time === "Last 6 Months") {
    startDate.setMonth(startDate.getMonth() - 6);
    startDate.setHours(0, 0, 0, 0);
  } else if (time === "Yearly") {
    startDate.setFullYear(startDate.getFullYear() - 1);
    startDate.setHours(0, 0, 0, 0);
  } else {
    return res.status(400).json({ error: "Invalid timeStamp parameter" });
  }

  console.log(startDate, endDate);
    req.startDate = startDate;
    req.endDate = endDate;
    next();
 
};

export default timeStamp;


 