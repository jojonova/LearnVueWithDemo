import { createStore, storeKey } from 'vuex'

export default createStore({
  state: {
    uiState: 'start',
    characterChoice: ['baker', 'mechanic', 'artist'],
    character: '',
    questions: [
      {
        question: `What's your dog's name?`,
        baker: 'Woofgang Puck',
        mechanic: 'Alf',
        artist: 'Salvador Dogi',
      },
      {
        question: `What's your favorite hobby?`,
        baker: 'Extreme ironing',
        mechanic: 'Bacon santa cosplay',
        artist: 'Mimosas',
      },
      {
        question: `What's your favorite color?`,
        baker: 'turquoise',
        mechanic: 'yellow',
        artist: 'transparent',
      },
      {
        question: `Is cereal soup?`,
        baker: "You can't be serieal",
        mechanic: 'Yes, I am Jason Lengstorf',
        artist: 'wut',
      },
      {
        question: `What’s the most imaginative insult you can come up with?`,
        baker: "You're a substitute teacher with no lesson plan",
        mechanic: 'Yer face is a melted welly',
        artist: 'You eat buttons off the remote',
      },
      {
        question: `If peanut butter wasn’t called peanut butter, what would it be called?`,
        baker: 'legoome',
        mechanic: 'brown paste',
        artist: 'groundnut smoosh',
      },
    ],
    questionIndex: 0,
    score: 0,
  },
  mutations: {
    pickCharacter(state, character) {
      state.character = character
    },
    updateUiState(state, uiState) {
      state.uiState = uiState
    },
    nextQuestion(state) {
      if (state.questionIndex < state.questions.length) {
        state.questionIndex++
        if (state.questionIndex === state.questions.length) {
          state.uiState = 'finish'
        }
      }
    },
    updateScore(state, tag) {
      if (tag) {
        state.score += 13
      } else {
        state.score -= 13
      }
    },
    reStartGame(state) {
      ;(state.uiState = 'start'), (state.score = 0), (state.questionIndex = 0)
    },
  },
  actions: {},
  modules: {},
})
