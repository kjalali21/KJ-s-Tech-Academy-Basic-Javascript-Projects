let numbersFound = 0;

while (numbersFound < 100) {
    if (currentNumber % 13 === 0){
        console.log(currentNumber);
        numbersFound++;
    }
    currentNumber++;
}