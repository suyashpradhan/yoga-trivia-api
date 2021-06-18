const triviaData = {
  trivia: {
    questions: [
      {
        question: "Yoga Means?",
        correctPoints: 5,
        negativePoints: 2,
        timeInSeconds: 15,
        options: [
          {
            text: "Anger",
            isRight: false,
          },
          {
            text: "Body",
            isRight: false,
          },
          {
            text: "Mind",
            isRight: true,
          },
          {
            text: "Hair",
            isRight: false,
          },
        ],
        showAnswer: "Yoga means mind",
      },
      {
        question: "Yoga is bad for health",
        correctPoints: 5,
        negativePoints: 2,
        timeInSeconds: 15,

        options: [
          {
            text: "Yes",
            isRight: false,
          },
          {
            text: "Maybe",
            isRight: false,
          },
          {
            text: "No",
            isRight: true,
          },
          {
            text: "50-50%",
            isRight: false,
          },
        ],
        showAnswer: "Any kind of exercise is good for health",
      },
      {
        question: "The word 'yoga' comes from which language?",
        correctPoints: 5,
        negativePoints: 2,
        timeInSeconds: 15,

        options: [
          {
            text: "English",
            isRight: false,
          },
          {
            text: "Sanskrit",
            isRight: true,
          },
          {
            text: "Roman",
            isRight: false,
          },
          {
            text: "Hindi",
            isRight: false,
          },
        ],
        showAnswer:
          "The word 'Yoga' is derived from the Sanskrit root 'Yuj', meaning 'to join' or 'to yoke' or 'to unite.",
      },
      {
        question: "What is the best day to perform yoga?",
        correctPoints: 5,
        negativePoints: 2,
        timeInSeconds: 15,

        options: [
          {
            text: "Mondays",
            isRight: false,
          },
          {
            text: "Saturdays",
            isRight: false,
          },
          {
            text: "Any day is a great day for yoga!",
            isRight: true,
          },
          {
            text: "I am not sure",
            isRight: false,
          },
        ],
        showAnswer:
          "Studies have shown that doing yoga at anytime is good which helps individuals get more quality sleep at night.",
      },
      {
        question: "To do Yoga, you need a .....",
        correctPoints: 5,
        negativePoints: 2,
        timeInSeconds: 15,
        options: [
          {
            text: "Clean Mat, With flat Surface",
            isRight: true,
          },
          {
            text: "Clean Chair",
            isRight: false,
          },
          {
            text: "Treadmill",
            isRight: false,
          },
          {
            text: "Table",
            isRight: false,
          },
        ],
        showAnswer:
          "A yoga mat: this needs to be stretchy, comfortable but also reasonably sticky, so you don't slip while stretching",
      },
    ],
    totalScore: 50,
    totalTimeInMinutes: 1.5,
  },
};

module.exports = triviaData;
