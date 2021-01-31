class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    handleTakala = () => {
        const message = this.createChatBotMessage(
            "תזרמו עם העולמות תוכן תבחרו את המערכת שלכם תראו האם יש פתרון לתקלה שלכם והאם היא לכם על הבעיה, במידה וכן מדהים! אם לא אז תבחרו משהו ויופיע לכם שם כפתור של פתיחת תקלה",
            );
        this.addMessageToState(message);
    };
  
    greet = () => {
      const message = this.createChatBotMessage("שלום חבר.");
      this.addMessageToState(message);
    };

    handleYasha = () => {
      const message = this.createChatBotMessage(
        "מה תרצו לדעת על הרש\"צ שלנו?",
        {
          widget: "Second options",
        }
      );
      this.addMessageToState(message);
    };

    handleThinkers = () => {
      const message = this.createChatBotMessage("יש אנשים שחושבים שיאשה מכוער. אבל חברי הצוות מעולם לא אמרו זאת. (חוץ מאופיר)")
      this.addMessageToState(message);
    };

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;