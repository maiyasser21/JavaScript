
function countString(str) {

   for (let i = 0; i < str.length; i++) {
      let count = 0;
      for (let j = 0; j < str.length; j++) {
         if (str[i] == str[j] && i > j) {
            break;
         }
         if (str[i] == str[j]) {
            count++;
         }
      }
      if (count > 0)

      console.log(`${str[i]} occurs ${count} times`);

   }

}


var input = 'abbflmffchocC19 ieqvh';
countString(input);