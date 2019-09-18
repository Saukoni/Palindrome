// Функция палиндром

// palindrome('racecar') true
// palindrome('window') false

function palindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');    
}

console.log(palindrome('Racecar'));