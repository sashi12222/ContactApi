import { constant } from "../constant.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  switch (statusCode) {
    case constant.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constant.VALIDATION_ERROR:
      res.json({
        title: "Validation Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constant.FORBIDDEN:
      res.json({
        title: "Forbidden Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constant.UNAUTHORIZED:
      res.json({
        title: "Unauthorized Error",
        message: err.message,
        stackTrace: err.stack ,
      });
      break;
      case constant.SERVER_ERROR:
        res.json({
          title: "Server Error",
          message: err.message,
          stackTrace: err.stack,
        });
        break;  

      default:
        console.log(err.message);
        break;
  }
};

export default errorHandler;
