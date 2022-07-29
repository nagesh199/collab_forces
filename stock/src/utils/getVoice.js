const getVoice = (text) => {
  if ("speechSynthesis" in window) {
    let utterance = new SpeechSynthesisUtterance("");
    speechSynthesis.speak(utterance);
    let voices = speechSynthesis.getVoices();
    let speech = new SpeechSynthesisUtterance("");
    speech.text = text;
    speech.rate = 1;
    speech.voice = voices[17] || voices[0];
    speechSynthesis.speak(speech);
  }
  else {
    console.log('cant process voiceover');
  }
};

export default getVoice;