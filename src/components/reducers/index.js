import { MAKE_GUESS, RESTART_GAME, AURAL_UPDATE } from './../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const hotColdReducer = (state=initialState, action) => {
   if (action.type === MAKE_GUESS) {
    let guess;
    guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
      feedback = 'Please enter a valid number.';

      return Object.assign({}, state, {
        feedback,
        guesses: [ ...state.guesses, guess ]
      });
    }

    const difference = Math.abs(guess - state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }
    return Object.assign({}, state, {
      feedback,
      guesses: [...state.guesses, guess]
    });
  }
  else if (action.type === RESTART_GAME) {
    return Object.assign({},state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  } else if (action.type === AURAL_UPDATE) {
      const { guesses, feedback } = this.state;
  
      const pluralize = guesses.length !== 1;
  
      let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
  
      if (guesses.length > 0) {
        auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
      }
      return Object.assign({}, state, {auralStatus});
    }
    else {
      
    return state;
  }
   
}