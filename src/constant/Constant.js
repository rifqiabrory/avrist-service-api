const Constant = Object.freeze({
  RESPONSE_CODE_SUCCESS: 200,
  RESPONSE_CODE_FAILED: 501,
  RESPONSE_CODE_NOT_FOUND: 401,
  RESPONSE_CODE_EXIST: 402,
  RESPONSE_SUCCESS: "Success",
  RESPONSE_SUCCESS_CREATED: "New data successfully created.",
  RESPONSE_SUCCESS_UPDATED: "Existing data successfully modified.",
  RESPONSE_FAILED_UPDATED: "Existing data failed to modify.",
  RESPONSE_SUCCESS_DELETED: "Data successfully removed.",
  RESPONSE_FAILED_DELETED: "Data failed to remove.",
  RESPONSE_FAILED_CREATED: "New data failed to create.",
  RESPONSE_SUCCESS_MESSAGE: "All data has been loaded.",
  RESPONSE_FAILED_MESSAGE: "Data failed to load.",
  RESPONSE_NOT_FOUND_MESSAGE: "Data not found.",
  RESPONSE_EXIST_MESSAGE: "No data exist.",
});

module.exports = Constant;
