const formatNumber = (num) => {
  if (num < 1000) {
    return num;
  }
  const formattedNum = Math.round(num / 100) / 10;
  return `${formattedNum}k`;
};

export default formatNumber;
