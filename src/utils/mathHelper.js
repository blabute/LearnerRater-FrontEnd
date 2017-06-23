export function computeAverage(items) {

  let sumOfItems = 0;
  let numberOfItems = 0;

  if(!items || !Array.isArray(items) || items.length === 0 ) {
    return null;
  }

  for(; numberOfItems < items.length; ++numberOfItems) {
    sumOfItems += items[numberOfItems];
  }

  return Math.round(sumOfItems / numberOfItems);
}
