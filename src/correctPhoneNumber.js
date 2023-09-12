function correctPhoneNumber(number) {
  // удаляем все символы кроме цифр и +
  let correctNumber = number.replace(/[^\d+]/g, '');
  if (/^\d{10}$/.test(correctNumber)) {
    // если номер задан без 8 и без +7
    correctNumber = `+7${correctNumber}`;
  } else {
    // если номер начинается с 8
    correctNumber = correctNumber.replace(/^8/, '+7');
  }

  if (!/^\+[1-9]\d{10,11}$/.test(correctNumber)) {
    throw new Error('Не корректно введен номер');
  }
  return correctNumber;
}

module.exports = {
  correctPhoneNumber,
};
