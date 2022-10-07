function pyramid(s,n) {
  let res = "";
  for (let i = 1; i <= n; i++) {
     let str = ' '.repeat(n - i).repeat(s.length);
     let str2 = s.repeat(i * 2 - 1);
     res += str + str2 + '\n';
  }
  return res.slice(0,res.length-1); 
}
