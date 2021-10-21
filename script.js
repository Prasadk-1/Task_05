// IIFE Function
//1.Odd NO
      let array = [1,2,3,4,5,6,7,8,9,10];

      (function(arr){
           let oddNumbers = arr.filter(number => number%2 !== 0)
           console.log(oddNumbers);
       })(array);



//2.Title caps
let arr = ["ENgineer", "prasad" , "kasar"];

(function() {
            let lowerArr = arr.map(name => name.toLowerCase());
         for(var i = 0 ; i < lowerArr.length ; i++){
            let newArr = lowerArr[i].charAt(0).toUpperCase()+ lowerArr[i].slice(1);
          console.log(newArr);
}
 
})();



//3.sum of numbers in an array
let arr = [1,2,3,4,5,6,7,8,9,10];

 (function () {
	let total = 0;
	for (let i in arr) {
      total += arr[i];
    }
  console.log(total);
})();



//4.Palindromes
const random = ['madam', 12321, 'abcba','acs'];
const newArr = [];

(function (abc) {
    
    for(let i=0; i < abc.length; i++) {
        let rev = String(abc[i]).split('').reverse().join('');
         if (rev == abc[i]){
            newArr.push(abc[i]);    
        }       
    }
    console.log(newArr);
})(random);


//5.remove duplicates

const arr1 = [1,2,3,3,'a',1,'a','b'];


(function(duplicateArray) {
           let newArr = [...new Set(duplicateArray)];
           console.log(newArr);
})(arr1);



//6.Rotate an Array K times
      let array = [1,2,3,4,5,6,7,8,9,10];

    (function() {
        return {
            rotate1: function(nums, k) {
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop()) 
        }
            console.log(nums);
        }
        } 
    })();

    rotate.rotate1(array,1); 

