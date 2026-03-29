// 1. Factorial
function factorialOf(num: number): number{
    let fact: number = 1;
    
    for(let i=2; i<=num; i++){
        fact *= i;
    }

    return fact;
}

const factorial = factorialOf(5);
console.log(`Factorial of given number: ${factorial}`);


// 2. Fibonacci
function fibonacciSeries(fiboNum: number): [number[], number]{

    if(fiboNum === 0) return [[0] , 0]

    let fibonacciSequence: number[] = [0, 1];
    let a = 0;
    let b = 1;

    for(let i=2; i<=fiboNum; i++){
        let temp = a + b;
        a = b;
        b = temp;
        fibonacciSequence.push(b);
    }

    return [fibonacciSequence, b];

}

const [fibSequence, fibonacciNum]: [number[], number] = fibonacciSeries(5);
console.log(`Fibonacci sequence of given number : ${fibSequence} and Fibonacci Number : ${fibonacciNum}`)


// 3. Prime 
function isPrime(givenNum : number): boolean {
    if(givenNum === 0 || givenNum === 1) return false

    for(let i=2; i<=Math.sqrt(givenNum); i++){
        if(givenNum % i === 0){
            return false;
        }
    }

    return true;
}

const primeResult: boolean = isPrime(46);
console.log(`Given number is prime : ${primeResult}`);


// 4. Max number in array
function maxNumInArray(arr : number[]): number | string{
    let maxNum: number | string = arr[0] ?? "Array is null";

    for(let i=0; i<=arr.length; i++){
        if(arr[i] !== undefined && arr[i+1] !== undefined){
            if(arr[i]! < arr[i+1]!){
                maxNum = arr[i+1]!;
            }
        }
    }

    return maxNum;
}

const maxNum: number | string = maxNumInArray([]);
console.log(`Maximum number in Array : ${maxNum}`);


// 5. Bubble sorting
function sortArray(sArr: number[]): number[]{
    let temp: number;

    for(let i=0; i < sArr.length; i++){
        for(let j = 0; j < sArr.length - i; j++){
            if(sArr[j] !== undefined && sArr[j+1] !== undefined){
                if(sArr[j]! > sArr[j+1]!){
                    temp = sArr[j+1]!;
                    sArr[j+1] = sArr[j]!;
                    sArr[j] = temp;
                }
            }
        }
    }
    return sArr;
}

let arr: number[] = [6, 2, 4, 7, 1];
console.log(`Array : ${arr}, Sorted Array : ${sortArray(arr)}`);


// 6. Reverse string
function reverseString(str: string): string {
    if(str.length === 0) return "Empty String";

    let reverseStr : string = "";

    for(let i = str.length-1; i >= 0; i--){
        reverseStr += str[i]!;
    }

    if(str === reverseStr) console.log(`"${str}" is Palindrome`);

    return reverseStr;
}

const givenString: string = "madam";
let reverseByArray = givenString.split("").reverse().join(""); // By splitting into array, reverse and join
const reversedString: string = reverseString(givenString);
console.log(`Given String : ${givenString}, Reversed String : ${reversedString}, By Array: ${reverseByArray}`);


// 7. Bank Account
class BankAccount{

    constructor(balance: number){
        this.balance = balance;
    }

    balance: number;

    deposit(amount: number){
        this.balance += amount;
        console.log(`Deposited ${amount}, Balance : ${this.balance}`);
    }

    withdraw(amount: number){
        if(this.balance >= amount){
            this.balance -= amount;
            console.log(`Withdrew ${amount}, Balance: ${this.balance}`);
        }
        else
            console.log("Insufficient funds");
    }

    getBalancedetails(){
        console.log(`Balance: ${this.balance}`);
    }

}

const bankAccount = new BankAccount(500);
bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.getBalancedetails();


// 8. Remove duplicates from Array
function removeDuplicates(rArr: number[]): number[]{
    if(rArr.length === 0) return [];

    let uniqueArray: number[] = [];

    for(let i=0; i < rArr.length; i++){
        if(!uniqueArray.includes(rArr[i]!)){
            uniqueArray.push(rArr[i]!);
        }
    }

    return uniqueArray;
}

const numArr: number[] = [2, 5, 6, 6, 7, 2];
const usingSetRemovedDuplicatesInArray = new Set(numArr);
const uniqueArr: number[] = removeDuplicates(numArr);
console.log(`Given Array: ${numArr}, Duplicates removed: ${uniqueArr}`);
console.log("Using Set: ");
console.log(usingSetRemovedDuplicatesInArray);


// 9. FizzBuzz
function fizzBuzz(num : number) {

    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0)
            console.log("FizzBuzz");
        else if(i % 3 === 0)
            console.log("Fizz");
        else if(i % 5 === 0)
            console.log("Buzz");
        else
            console.log(i);
    }


    // switch(true){
    //     case (num % 3 === 0 && num % 5 ===0) : return "FizzBuzz";
    //     case num % 3 === 0 : return "Fizz";
    //     case num % 5 === 0 : return "Buzz";
    //     default: return num;
    // }

}

fizzBuzz(15);


// 10. vowels in string
function vowelsInString(str: string){
    const vowels: string = "aeiouAEIOU";
    let count = 0;

    for(let character of str){
        if(vowels.includes(character)){
            console.log(character);
            count++;
        }
    }

    console.log(`Count of Vowels in given string ${count}`);
}

vowelsInString("hello world!!");