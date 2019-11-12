const assert = require('power-assert');
const QuizFetcher = require('../../src/QuizFetcher.js');

describe('QuizFetcherのクラス', () => {
    describe('fetchメソッドの挙動確認', () => {
        it('fetchメソッドという名前のクラスメソッドを持つ', () => {
            assert.strictEqual(typeof QuizFetcher.fetch, 'function');
        });

        describe('【async/await版】fetchメソッドの戻り値の型チェック', () => {
            it('resultsプロパティを持つ', async () => {
                const response = await QuizFetcher.fetch();
                const results = response.results;

                assert.ok(Array.isArray(results));

                // results プロパティはは10件データをもつ配列である
                assert.strictEqual(results.length, 10);

                // results プロパティの配列の中身は全てオブジェクトで、次のプロパティを持つ
                results.forEach((result) => {
                    // category プロパティ : 文字列型
                    assert.strictEqual(typeof result.category, 'string');
                    // type プロパティ : 文字列型
                    assert.strictEqual(typeof result.type, 'string');
                    // difficulty プロパティ : 文字列型
                    assert.strictEqual(typeof result.difficulty, 'string');
                    // question プロパティ : 文字列型
                    assert.strictEqual(typeof result.question, 'string');
                    // correct_answer プロパティ : 文字列型
                    assert.strictEqual(typeof result.correct_answer, 'string');
                    // incorrect_answers プロパティ : 3件の文字列を含む配列
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