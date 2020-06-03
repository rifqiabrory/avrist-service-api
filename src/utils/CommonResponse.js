class CommonResponse {
  constructor(status, message, path, content, timestamp) {
    this.status = status;
    this.message = message;
    this.path = path;
    this.content = content;
    this.timestamp = timestamp;
  }
}

module.exports = CommonResponse;
