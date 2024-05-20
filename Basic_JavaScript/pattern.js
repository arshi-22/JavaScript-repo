/*
    #
   ##
  ###
 ####
#####

*/

function printPattern(outPut, limit, item) {
  for (let i = 1; i <= limit; i++) {
    outPut += item;
  }
  return outPut;
}

function showPattern(n) {
  for (let i = 1; i <= n; i++) {
    let space = n - i;
    let outPut = "";
    outPut = printPattern(outPut, space, " ");
    outPut = printPattern(outPut, i, "#");
    console.log(outPut);
  }
}

showPattern(5);
