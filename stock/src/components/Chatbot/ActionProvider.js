class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
  getVoice(text) {
    if ("speechSynthesis" in window) {
      let utterance = new SpeechSynthesisUtterance("");
      speechSynthesis.speak(utterance);
      let voices = speechSynthesis.getVoices();
      let speech = new SpeechSynthesisUtterance("");
      speech.text = text;
      speech.rate = 1;
      speech.voice = voices[17];
      speechSynthesis.speak(speech);
    }
  }

  updateChatbotMsg(msg) {
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, msg] }));
  }
  updateStateId(Id) {
    this.setState((prev) => ({ ...prev, id: Id }));
  }
  greet() {
    const greetingMsg = this.createChatBotMessage("Hi, friend");
    this.updateChatbotMsg(greetingMsg);
    this.getVoice(greetingMsg.message);
  }
  handleReportAnswer() {
    const answer = this.createChatBotMessage("I hope this may help you!", {
      widget: "reportQuery",
    });
    this.updateChatbotMsg(answer);
    this.getVoice(answer.message);
  }
  handleTpinAnswer() {
    const answer = this.createChatBotMessage(
      "Generation of TPIN is required to sell your Stocks.",
      {
        widget: "tpinQuery",
      }
    );
    this.updateChatbotMsg(answer);
    this.getVoice(answer.message);
  }
  handleCardAnswer() {
    const answer = this.createChatBotMessage(
      "No, it is not possible using a credit/debit card on Real Trade.",
      {
        widget: "cardQuery",
      }
    );
    this.updateChatbotMsg(answer);
    this.getVoice(answer.message);
  }
  handleWithdrawAnswer() {
    const answer = this.createChatBotMessage("Kindly follow these steps!", {
      widget: "withdrawQuery",
    });
    this.updateChatbotMsg(answer);
    this.getVoice(answer.message);
  }
}

export default ActionProvider;
