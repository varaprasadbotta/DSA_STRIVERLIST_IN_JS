//  ---*
//  --***     N = 4
//  -*****
//  *******

function pattern7(n) {
  for (let i = 1; i <= n; i++) {
    //spaces
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }
    //stars
    for (let j = 1; j <= 2 * i - 1; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

pattern7(4);
