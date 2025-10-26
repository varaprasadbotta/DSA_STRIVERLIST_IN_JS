// *****
// *****  N = 5
// *****
// *****
// *****

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
pattern1(5);
