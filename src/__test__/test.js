const { correctPhoneNumber } = require('../correctPhoneNumber');

test.each([
  ['+7905350000'],
  ['+8600000000000'],
])('test function correctPhoneNumber with %s namber', (number) => {
  function correctBadNumber() {
    correctPhoneNumber(number);
  }
  expect(correctBadNumber).toThrow(new Error('Не корректно введен номер'));
});

test.each([
  ['9053500000', '+79053500000'],
  ['89053500000', '+79053500000'],
  ['8(905)3500000', '+79053500000'],
  ['8-905-350-00-00', '+79053500000'],
  ['+7 905 350 00 00', '+79053500000'],
])('test function correctPhoneNumber with %s namber', (number, expected) => {
  const result = correctPhoneNumber(number);
  expect(result).toEqual(expected);
});
