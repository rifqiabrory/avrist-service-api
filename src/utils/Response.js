const CommonResponse = require("./CommonResponse");
const Constant = require("../constant/Constant");

function Success(
  res,
  content,
  status = Constant.RESPONSE_CODE_SUCCESS,
  message = Constant.RESPONSE_SUCCESS
) {
  let response = new CommonResponse();
  response.status = status;
  response.message = message;
  response.path = res.req.originalUrl;
  response.timestamp = new Date().toISOString();
  response.content = content;
  res.json(response);
}

function Failed(
  res,
  content,
  status = Constant.RESPONSE_CODE_FAILED,
  message = Constant.RESPONSE_FAILED_MESSAGE
) {
  return Success(res, content, status, message);
}

function Exists(
  res,
  content,
  status = Constant.RESPONSE_CODE_EXIST,
  message = Constant.RESPONSE_EXIST_MESSAGE
) {
  return Success(res, content, status, message);
}

function NotFound(
  res,
  content,
  status = Constant.RESPONSE_CODE_NOT_FOUND,
  message = Constant.RESPONSE_NOT_FOUND_MESSAGE
) {
  return Success(res, content, status, message);
}

module.exports = {
  Success: Success,
  Failed: Failed,
  NotFound: NotFound,
  Exist: Exists,
};
