let visitorCounter = 0;

function logger(req, res, next) {
  visitorCounter = visitorCounter + 1;
  console.log(`Current visitor count - ${visitorCounter}`);
  console.log(req.path);

  //   logic can be implement in middleware
  if (visitorCounter % 2 === 0) {
    return res.json({
      message: "The process is stopper because of even number",
    });
  } else {
    return next();
  }
}

export default logger;
