// Функция для проверки длины строки
const checkStringLenght = (string, maxLength) => (string.length <= maxLength);

// Функция для проверки, является ли строка палиндромом
const isPalidrome = (string) => {
  const cleaned = string.toLowerCase().replaceAll(' ', '');

  let reversed = '';

  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }

  return cleaned === reversed.toLowerCase().replaceAll(' ', '');
};


checkStringLenght();
isPalidrome();
