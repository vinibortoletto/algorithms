module.exports = (size: number) => {
  return Array.from({ length: size }, () => Array(size).fill("1"));
};
