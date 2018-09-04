import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import { connect } from 'react-redux';

import { makeGuess, restartGame, auralUpdate } from './actions/index'

export class Game extends React.Component {
  

  restartGame() { 
    return this.props.dispatch(restartGame());
  }

  makeGuess(guess) {
    return this.props.dispatch(makeGuess(guess))
  }

  generateAuralUpdate() {
    return this.props.dispatch(auralUpdate());
  }

  render() {
    
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;
    
    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  
  }
}

Game.defaultProps = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
}
export const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game)