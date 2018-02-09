
function piglatin(list) {
  return _.map(list, function (word) {
    return `${word}-ay`;
  });
}

console.log(piglatin(['apple', 'pear']));
