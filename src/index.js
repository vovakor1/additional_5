module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig[0];
  let brackets = str.split("");
  for (let i = 0; i < config.length; i++) {
      let a = 0;
      let b = 0;
      let c = config[i];
      let d = config[i+1];

      for (let j = 0; j < brackets.length; j++) {
          if (brackets[j] === c) a++;
          if (brackets[j] === d) b++;
          if (b > a) return false;
      }
      return a === b;
  }
}
