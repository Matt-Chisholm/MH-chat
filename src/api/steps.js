const steps = [
  {
    id: "1",
    message: "Hello, Welcome to the mental health support app!",
    trigger: "2",
  },
  {
    id: "2",
    message: "What's on your mind today?",
    trigger: "userInput",
  },
  {
    id: "userInput",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "I'm glad you reached out. Let's talk about it.",
    end: true,
  },
  {
    id: "4",
    message: "What kind of support are you looking for today?",
    trigger: "support",
  },
  {
    id: "support",
    options: [
      {
        value: "help with stress",
        label: "Help with stress",
        trigger: "stress",
      },
      {
        value: "help with depression",
        label: "Help with depression",
        trigger: "depression",
      },
      {
        value: "help with anxiety",
        label: "Help with anxiety",
        trigger: "anxiety",
      },
    ],
  },
  {
    id: "5",
    message: "Have you ever sought help for your mental health before?",
    trigger: "help",
  },
  {
    id: "help",
    user: true,
    validator: (value) => {
      if (value.toLowerCase() === "yes" || value.toLowerCase() === "no") {
        return true;
      }
      return "Please answer yes or no";
    },
    trigger: (value) => {
      if (value.toLowerCase() === "yes") {
        return "6a";
      }
      return "6b";
    },
  },
  {
    id: "6a",
    message:
      "Great, I can provide you with some resources that may be helpful to you.",
    trigger: "6a-resources",
  },
  {
    id: "6a-resources",
    message:
      "Here are a few resources that may be helpful for you: 1) National Alliance on Mental Illness (NAMI): https://www.nami.org/ 2) Mental Health America: https://www.mentalhealthamerica.net/ 3) American Psychological Association: https://www.apa.org/",
    end: true,
  },
  {
    id: "6b",
    message:
      "Thats okay. Seeking help for mental health is important and can be difficult. Im here to support you and provide you with some resources.",
    trigger: "6b-resources",
  },
  {
    id: "6b-resources",
    message:
      "Here are a few resources that may be helpful for you: 1) National Alliance on Mental Illness (NAMI): https://www.nami.org/ 2) Mental Health America: https://www.mentalhealthamerica.net/ 3) American Psychological Association: https://www.apa.org/",
    end: true,
  },
];

export default steps;
