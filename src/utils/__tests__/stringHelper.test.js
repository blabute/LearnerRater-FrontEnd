import { removeSpaces } from '../stringHelper';
import { expect } from 'chai';

describe('stringHelper', () => {

  describe('removeSpaces', () => {

    describe('string is undefined, null, or not a string', () => {

      const testData = [
        { string: undefined },
        { string: null },
        { string: 10 },
        { string: 3.14 },
        { string: {} },
        { string: [] }
      ];

      testData.forEach((data) => {
        it('returns null', () => {
          // Arrange
          const { string } = data;

          // Act
          const result = removeSpaces(string);

          // Assert
          expect(result).to.be.null;
        });
      });
    });

    describe('string is a string', () => {

      const testData = [
        { string: "", expectedResult: "" },
        { string: '', expectedResult: '' },
        { string: "hello world", expectedResult: "helloworld" },
        { string: "HOW ARE YOU TODAY???", expectedResult: "HOWAREYOUTODAY???" }
      ];

      testData.forEach((data) => {
        it('returns the average of the items in the list to the closes whole number', () => {
          // Arrange
          const { string, expectedResult } = data;

          // Act
          const result = removeSpaces(string);

          // Assert
          expect(result).to.be.equal(expectedResult);
        });
      });
    });
  });
});
