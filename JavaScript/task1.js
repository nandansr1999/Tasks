function displayElements() {
    let char = document.getElementById("userinput").value;
    console.log(char);
}

function SumofTwo() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let sum = num1 + num2;
    document.getElementById("out").innerHTML = sum
}

function simpleInterest() {
    let P = parseInt(document.getElementById("princ").value)
    let R = parseFloat(document.getElementById("inter").value)
    let n = parseFloat(document.getElementById('year').value)

    let SI = (P * R * n) / 100
    document.getElementById("out").innerHTML = SI
}

function Result() {
    let mark = parseFloat(document.getElementById("mark").value)

    if (mark >= 0 && mark <= 50) {
        document.getElementById("out").innerHTML = 'Failed'
    } else if (mark >= 51 && mark <= 100) {
        document.getElementById("out").innerHTML = 'Passed'
    }
    else {
        document.getElementById("out").innerHTML = 'Enter a Valid Mark'
    }
}

function Grade() {
    let percentage = parseFloat(document.getElementById("per").value)

    if (percentage < 50) {
        document.getElementById("out").innerHTML = 'Failed'
    } else if (percentage >= 50 && percentage <= 60) {
        document.getElementById("out").innerHTML = 'E'
    } else if (percentage >= 60 && percentage <= 70) {
        document.getElementById("out").innerHTML = 'D'
    } else if (percentage >= 70 && percentage <= 80) {
        document.getElementById("out").innerHTML = 'C'
    } else if (percentage >= 80 && percentage <= 90) {
        document.getElementById("out").innerHTML = 'B'
    } else if (percentage >= 90 && percentage <= 100) {
        document.getElementById("out").innerHTML = 'A'
    } else {
        document.getElementById("out").innerHTML = 'Please Enter a valid percentage'
    }


}

function Day() {
    let dayNum = parseInt(document.getElementById("daynum").value)
    switch (dayNum) {
        case 1:
            document.getElementById("out").innerHTML = 'Sunday'
            break;
        case 2:
            document.getElementById("out").innerHTML = 'Monday'
            break;
        case 3:
            document.getElementById("out").innerHTML = 'Tueday'
            break;
        case 4:
            document.getElementById("out").innerHTML = 'Wednesday'
            break;
        case 5:
            document.getElementById("out").innerHTML = 'Thursday'
            break;
        case 6:
            document.getElementById("out").innerHTML = 'Friday'
            break;
        case 7:
            document.getElementById("out").innerHTML = 'Saturday'
            break;
        default:
            document.getElementById("out").innerHTML = 'Enter a valid number '
            break;
    }
}

function multiplication() {
    let num = parseInt(document.getElementById("num").value)
    let output = ""

    for (let i = 1; i < 11; i++) {
        output += i + " x " + num + " = " + (i * num) + "<br>"

    }
    document.getElementById("out").innerHTML = output
}

function SumofOdd() {
    let num = parseInt(document.getElementById("num").value)
    sum = 0

    for (let i = 1; i < num; i += 2) {
        sum += i
    }
    document.getElementById("out").innerHTML = sum
}

function patternPrint() {
    let row = parseInt(document.getElementById("row").value)

    for (let i = 1; i <= row; i++) {
        output = ''
        for (let j = 1; j <= i; j++) {
            output += j

        }
        document.getElementById("out").innerHTML += output + "<br>"
    }
}



function evenNumbers() {
    let arr = document.getElementById("arrval").value.split(',').map(Number);
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    document.getElementById("out").innerHTML = "Number of even numbers in the given array is: " + count;
}

function descOrder() {
    let arr = document.getElementById("arrval").value.split(',').map(Number);
    arr.sort((a, b) => b - a);
    document.getElementById("out").innerHTML = arr.join(",");
}

function palindrome() {
    let string = document.getElementById("string").value;
    let lowerCase = string.toLowerCase();
    let rev = lowerCase.split('').reverse().join('');

    if (lowerCase === rev) {
        document.getElementById("out").innerHTML = "Given string is a Palindrome ";
    } else {
        document.getElementById("out").innerHTML = "Given string is not a Palindrome ";
    }
}

