import React, {Component} from 'react';
let quizData = require('./quiz_data.json');
class Quiz extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
        <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
        );
    }
}
export default Quiz;