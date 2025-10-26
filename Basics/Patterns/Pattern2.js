// *
// **      N = 5
// ***
// ****
// *****

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

let n = 5;
pattern2(n);
