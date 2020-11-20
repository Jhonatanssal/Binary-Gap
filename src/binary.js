const binary = number => {
  if (number) {
    const ans = number.toString(2);
    return ans;
  }
  return 'Please enter a Number';
};

export default binary;