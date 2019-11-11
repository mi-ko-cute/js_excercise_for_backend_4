const assert = require('power-assert');
const QuizFetcher = require('../../src/QuizFetcher.js');

describe('QuizFetcherのクラス', () => {
    describe('fetchメソッドの挙動確認', () => {
        it('fetchメソッドという名前のクラスメソッドを持つ', () => {
            const quizfetcher = new QuizFetcher();
            assert.strictEqual(typeof quizfetcher.fetch, 'function');
        });

        describe('【async/await版】fetchメソッドの戻り値の型チェック', () => {
            it('resultsプロパティを持つ', async () => {
                const quizfetcher = new QuizFetcher();
                const response = await quizfetcher.fetch();
                const results = response.results;

                assert.ok(Array.isArray(results));
            });

            it('results プロパティはは10件データをもつ配列である', async () => {
                const quizfetcher = new QuizFetcher();
                const response = await quizfetcher.fetch();
                const results = response.results;

                assert.strictEqual(results.length, 10);
            });

            it('results プロパティの配列の中身は全てオブジェクトで、次のプロパティを持つ', async () => {
                const quizfetcher = new QuizFetcher();
                const response = await quizfetcher.fetch();
                const results = response.results;

                results.forEach((result) => {
                    assert.strictEqual(typeof result.category, 'string');
                    assert.strictEqual(typeof result.type, 'string');
                    assert.strictEqual(typeof result.difficulty, 'string');
                    assert.strictEqual(typeof result.question, 'string');
                    assert.strictEqual(typeof result.correct_answer, 'string');
                    assert.ok(Array.isArray(result.incorrect_answers));
                    assert.strictEqual(result.incorrect_answers.length, 3);
                    result.incorrect_answers.forEach((incorrect_answer) => {
                        assert.strictEqual(typeof incorrect_answer, 'string');
                    });
                });
            });
        });

        describe('【promise版】fetchメソッドの戻り値の型チェック', () => {
            it('resultsプロパティを持つ', () => {
                const quizfetcher = new QuizFetcher();
                quizfetcher
                    .fetch()
                    .then(response => {
                        const results = response.results;

                        assert.ok(Array.isArray(results));
                    })
            });

            it('results プロパティはは10件データをもつ配列である', () => {
                const quizfetcher = new QuizFetcher();
                quizfetcher
                    .fetch()
                    .then(response => {
                        const results = response.results;

                        assert.strictEqual(results.length, 10);
                    })
            });

            it('results プロパティの配列の中身は全てオブジェクトで、次のプロパティを持つ', () => {
                const quizfetcher = new QuizFetcher();
                quizfetcher
                    .fetch()
                    .then(response => {
                        const results = response.results;

                        results.forEach((result) => {
                            assert.strictEqual(typeof result.category, 'string');
                            assert.strictEqual(typeof result.type, 'string');
                            assert.strictEqual(typeof result.difficulty, 'string');
                            assert.strictEqual(typeof result.question, 'string');
                            assert.strictEqual(typeof result.correct_answer, 'string');
                            assert.ok(Array.isArray(result.incorrect_answers));
                            assert.strictEqual(result.incorrect_answers.length, 3);
                            result.incorrect_answers.forEach((incorrect_answer) => {
                                assert.strictEqual(typeof incorrect_answer, 'string');
                            });
                        })
                    });

            });
        });

        describe('【コールバック（done）版】fetchメソッドの戻り値の型チェック', () => {
            it('resultsプロパティを持つ', (done) => {
                const quizfetcher = new QuizFetcher();
                quizfetcher
                    .fetch()
                    .then(response => {
                        const results = response.results;

                        assert.ok(Array.isArray(results));
                    })

                done();
            });

            it('results プロパティはは10件データをもつ配列である', (done) => {
                const quizfetcher = new QuizFetcher();
                quizfetcher
                    .fetch()
                    .then(response => {
                        const results = response.results;

                        assert.strictEqual(results.length, 10);
                    })
                done();
            });

            it('results プロパティの配列の中身は全てオブジェクトで、次のプロパティを持つ', (done) => {
                const quizfetcher = new QuizFetcher();
                quizfetcher
                    .fetch()
                    .then(response => {
                        const results = response.results;

                        results.forEach((result) => {
                            assert.strictEqual(typeof result.category, 'string');
                            assert.strictEqual(typeof result.type, 'string');
                            assert.strictEqual(typeof result.difficulty, 'string');
                            assert.strictEqual(typeof result.question, 'string');
                            assert.strictEqual(typeof result.correct_answer, 'string');
                            assert.ok(Array.isArray(result.incorrect_answers));
                            assert.strictEqual(result.incorrect_answers.length, 3);
                            result.incorrect_answers.forEach((incorrect_answer) => {
                                assert.strictEqual(typeof incorrect_answer, 'string');
                            });
                        })
                    });

                done();
            });
        });
    });
});