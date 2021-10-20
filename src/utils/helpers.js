export const capitalizeString = (string) => {
  const dividedWords = string.split(' ');
  const capitalized = [];
  for (let word of dividedWords) {
    capitalized.push(word.charAt(0).toUpperCase() + word.substring(1));
  }
  return capitalized.join(' ');
};
