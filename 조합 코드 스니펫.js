function combinations(arr, num) {
  const result = [];

  if (num === 1) {
    return arr.map((v) => [v]);
  }
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combiArr = combinations(rest, num - 1);
    const attached = combiArr.map((v) => [fixed, ...v]);
    result.push(...attached);
  });
  return result;
}
