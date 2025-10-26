// 1
// 12   N = 5
// 123
// 1234
// 12345

function pattern3(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write((j + 1).toString());
    }
    console.log();
  }
}

let n = 5;
pattern3(n);
