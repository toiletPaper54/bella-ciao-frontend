class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) { // can be complexed or simple..
      console.log(message);
      const lowercased = message.toLowerCase();
  
      if (lowercased.includes("שלום")) {
        this.actionProvider.greet();
      }
  
      else if (lowercased.includes("יאשה") || lowercased.includes("יעקב פיזנברג")) {
        
        this.actionProvider.handleYasha();
      }
    }
  }
  
  export default MessageParser;