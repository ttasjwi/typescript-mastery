{
    // Array
    const fruits: string[] = ['tomato', 'banana'];
    const scores: Array<number> = [1, 3, 4]; // 차이점 : readonly Array<string> 형태로 선언이 불가능하다...

    function printArray(strArray: readonly string[]) {
        console.log(strArray);
    }

    printArray(fruits);
}
