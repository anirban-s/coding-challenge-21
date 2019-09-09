
function longestCommonPrefix(arr){
  //as per the problem statement, assuming all the elements will be string only.
  //so removing all the integer value
  const newArr = removeInteger(arr);
  //createing character hash table with the first letter of each word
  const charMap = createCharMap(newArr);
  //this is the resultant array
  let prefixs = [];

  //looping throug each key in hash table and createing sub array with the key
  //which is the first character of the each sub array
  for(let key in charMap){
    let subArray = newArr.filter(word => word.startsWith(key));
    if(subArray.length > 1)
      prefixs.push(commonPrefixInArray(subArray)); //inserting each prefix from each sub array into prefixs array
  }
  // returning the prefixs array if the length is greater than 0 else -1.
  return prefixs.length > 0 ? prefixs : -1 ;
}

function createCharMap(arr){
  let map = {};
  for(let word of arr){
    if(map[word.charAt(0)]){
      map[word.charAt(0)]++;
    }else{
      map[word.charAt(0)] = 1;
    }
  }
  return map;
}

function removeInteger(arr){
  let onlyStringArray = [];
  for(let item of arr){
    if(typeof item === 'string'){
      onlyStringArray.push(item);
    }
  }
  return onlyStringArray;
}

function commonPrefixInArray(subArr){
  let firstElement = subArr[0];
  let longestPrefix = '';

  for(let i = 1; i< subArr.length; i++){
    longestPrefix = commonPrefix(firstElement, subArr[i]);
  }
  return longestPrefix;
}

function commonPrefix(str1, str2){
  let prefix = '';
  for(let i = 0; i< str1.length; i++){
    if(str1[i] !== str2[i]){
      return prefix;
    }
    prefix += str1[i]
  }
  return prefix;
}


const array = ['pear', 'apple', 'for', 'april', 'apendix', 'peace', 1];
console.log(longestCommonPrefix(array));
