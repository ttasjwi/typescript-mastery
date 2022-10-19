{
    // rest parameter
    function addNumbers(...numbers: number[]) : number {
        return numbers.reduce((sum, number) => sum + number, 0);
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5));
}
