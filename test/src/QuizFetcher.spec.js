const assert = require('power-assert');
const QuizFetcher = require('../../src/QuizFetcher.js');

describe('QuizFetcherのクラス', () => {
    describe('fetchメソッドの挙動確認', () => {
        it('fetchメソッドという名前のクラスメソッドを持つ', () => {
            assert.strictEqual(typeof QuizFetcher.fetch, 'function');
        });

        it('【async/await版】fetchメソッドの戻り値の型チェック', async () => {
            const response = await QuizFetcher.fetch();
            const results = response.results;

            assert.ok(Array.isArray(results));
            assert.strictEqual(results.length, 10);

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

        it('【Promise版】fetchメソッドの戻り値の型チェック', () => {
            QuizFetcher
                .fetch()
                .then(response => {
                    const results = response.results;

                    assert.ok(Array.isArray(results));
                    assert.strictEqual(results.length, 10);

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
    });
});