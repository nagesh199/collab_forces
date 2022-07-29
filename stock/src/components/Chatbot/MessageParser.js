class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  parse(message) {
    const lowercase = message.toLowerCase();
    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowercase.includes("tpin")) {
      this.actionProvider.handleTpinAnswer();
    }
    if (lowercase.includes("report")) {
      this.actionProvider.handleReportAnswer();
    }
    if (lowercase.includes("card")) {
      this.actionProvider.handleCardAnswer();
    }
    if (lowercase.includes("withdraw")) {
      this.actionProvider.handleWithdrawAnswer();
    }
  }
}

export default MessageParser;
