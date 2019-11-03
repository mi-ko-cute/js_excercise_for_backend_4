const axios = require('axios');

class QuizFetcher {
    async fetch() {
        const result = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
        const quizData = await result.data;
        return quizData;
    }
}

module.exports = QuizFetcher;