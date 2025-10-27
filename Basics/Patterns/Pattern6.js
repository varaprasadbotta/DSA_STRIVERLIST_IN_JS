// 12345    N = 5
// 1234
// 123
// 12
// 1

function pattern6(n) {
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j.toString());
    }
    console.log();
  }
}

pattern6(5);
