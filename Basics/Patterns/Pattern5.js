// *****
// ****    N = 5
// ***
// **
// *

function pattern5(n) {
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

let n = 5;
pattern5(n);
