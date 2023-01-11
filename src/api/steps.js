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
];

export default steps;
