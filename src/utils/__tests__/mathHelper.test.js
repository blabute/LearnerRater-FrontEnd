import { computeAverage } from '../mathHelper';
import { expect } from 'chai';

describe('mathHelper', () => {

  describe('computeAverage', () => {

    describe('items are undefined, null, not an array, or empty array', () => {

      const testData = [
        { items: undefined },
        { items: null },
        { items: "I AM A STRING" },
        { items: 10 },
        { items: 3.14 },
        { items: {} },
        { items: [] }
      ];

      testData.forEach((data) => {
        it('returns null', () => {
          // Arrange
          const { items } = data;

          // Act
          const result = computeAverage(items);

          // Assert
          expect(result).to.be.null;
        });
      });
    });

    describe('items is a non-empty array', () => {

      const testData = [
        { items: [0], expectedAverage: 0 },
        { items: [10], expectedAverage: 10 },
        { items: [1, 2, 3, 4, 5], expectedAverage: 3 },
        { items: [-1, -2, -3, -4, -5], expectedAverage: -3 },
        { items: [20, -100, 67, 42, 12], expectedAverage: 8 }
      ];

      testData.forEach((data) => {
        it('returns the average of the items in the list to the closes whole number', () => {
          // Arrange
          const { items, expectedAverage } = data;

          // Act
          const result = computeAverage(items);

          // Assert
          expect(result).to.be.equal(expectedAverage);
        });
      });
    });
  });
});
