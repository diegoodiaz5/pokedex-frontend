const statsValidator = (value) => {
  return value >= 0 && value <= 999;
};

export { statsValidator };
