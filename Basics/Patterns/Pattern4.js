// 1
// 22    N = 5
// 333
// 4444
// 55555

function pattern4(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write((i + 1).toString());
    }
    console.log();
  }
}
let n = 5;
pattern4(n);
