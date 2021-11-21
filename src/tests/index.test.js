import sortArray from '../index';

const arr = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const sortedArr = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test(('Сортировка по здоровью'), () => {
  expect(sortArray(arr)).toEqual(sortedArr);
});

test(('Сортировка по здоровью с toBe, которая должна упасть'), () => {
  expect(sortArray(arr)).not.toBe(sortedArr);
});
