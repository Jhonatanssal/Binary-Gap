const zerosGap = (string) => {
  const arr = string.split(/1+/);
  const longest = arr.reduce((a, b) => (a.length > b.length ? a : b)).length;
  return longest;
};

export default zerosGap;