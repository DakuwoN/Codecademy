const assert = require('chai').assert;
const { describe, it } = require('mocha');

describe('When a user visits the projects root', () => {
  describe('posting a quote', () => {
    it('saves quote and metadata submitted by user', () => {
      const quote = "Under the sky, under the heavens, there is but one family. It just so happens that people are different";
      const attributed = "Bruce Lee";
      const source = "https://en.wikiquote.org/wiki/Bruce_Lee";

      browser.url('/');
      browser.setValue('textarea[id=quote]', quote);
      browser.setValue('input[id=attributed]', attributed);
      browser.setValue('input[id=source]', source);
      browser.click('input[type=submit]');

      const displayedText = browser.getText('#quote');

      assert.include(displayedText, quote);
      assert.include(displayedText, attributed);
      assert.include(displayedText, source);
    });
  });
});
