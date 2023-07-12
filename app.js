const input = {
  data: `C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup`,
};

const originalSymbols = (text) => {
  const textArr = text.split(/[^a-zA-Z]+/).filter(Boolean); //розділяю текст на слова, відаляю зайві символи і записую в масив
  const originalSymbolArray = textArr.map((word) => {
    //проходжусь по кожному слову
    for (let i = 0; i <= word.length - 1; i++) {
      const wordWithoutNonOriginalLetter = word.slice(i + 1, word.length); //видаляю із слова перевірюваний символ
      if (!wordWithoutNonOriginalLetter.includes(word[i])) {
        //якщо в обрізаному слові немає перевірюваного символа отже він не повторюється
        return word[i]; //повертаю першу букву яка не повторюється
      }
    }
  });
  const originalSymbolsFromEveryWord = originalSymbolArray.join(""); //склеюю масив в слово щоб перевірити вже це слово

  if (originalSymbolsFromEveryWord.length === 1) {
    //перевіряю довжину слова щоб повернути лише в випадку якщо буде одна буква
    console.log(originalSymbolsFromEveryWord); //виводжу в консоль
    return originalSymbolsFromEveryWord; // повертаю першу оригінальну букву
  }
  return originalSymbols(originalSymbolsFromEveryWord); //рекурсивно викликаю функцію з новою строкою
};

originalSymbols(input.data); //викликаю функцію з вхідними данними
