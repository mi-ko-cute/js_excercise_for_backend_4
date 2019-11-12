const axios = require('axios');

class QuizFetcher {
    static async fetch() {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
        const quizData = response.data;
        return quizData;
    }
}

module.exports = QuizFetcher;