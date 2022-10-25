const revert = (word) => {
     const regex = /[\.,\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+«»"]/g;
      let i = 0;
      let j = word.length - 1;
      while (i < j) {
        if (regex.test(word[i])) {
          i += 1;
        } else if (regex.test(word[j])) {
          j -= 1;
        } else {
          if (word[i] === word[i].toUpperCase()) {
            const temp = word[i].toLowerCase();
            word[i] = word[j].toUpperCase();
            word[j] = temp;
            i += 1;
            j -= 1;
          } else if (word[j] === word[j].toUpperCase()) {
            const temp = word[i];
            word[i] = word[j].toLowerCase();
            word[j] = temp.toUpperCase();
            i += 1;
            j -= 1;
          } else {
            const temp = word[i];
            word[i] = word[j];
            word[j] = temp;
            i += 1;
            j -= 1;
          }
        }
      }
      return word;
  }

const revertCharacters = (text) => {
    const result = [];
    const words = text.split(' ');
    for (let item of words) {
      const word = item.split('');
      if (word.includes('-')) {
        const temp = [];
        const splitted = word.join('').split('-');
        splitted.forEach((chunk) => {
          const reverted = revert(chunk.split('')).join('');
          temp.push(reverted);
        });
        result.push(temp.join('-'))
      } else 
      result.push(revert(word).join(''));
      }
    return result.join(' ');
  };
  export default revertCharacters;
