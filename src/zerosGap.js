const zerosGap = (string) => {
  if (string) {
    const arr = string.toString(2).split(/1+/);
    const longest = arr.reduce((a, b) => (a.length > b.length ? a : b)).length;
    return longest;
  }
  return '';
};

export default zerosGap;