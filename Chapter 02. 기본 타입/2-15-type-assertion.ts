{
    /**
     * Type Assertions π© : κ°λ°μ μ€μ€λ‘ κ·Έ κ°μ²΄μ νμμ λͺμ
     */
    function jsStrFunc(): any {
        // return 2;
        return 'hello';
    }

    const result = jsStrFunc(); // λ¬΄μ¨ νμμΈμ§ μκΈ° νλ€λ€.
    const resultStr1: string = result as string; // λ»νλλ‘ μλνμ§ μλλ€.
    const resultStr2: string = <string>result; // λͺμμ μΈ νλ³ν λ°©λ²
    console.log(resultStr1.length); // stringμ΄ μλ κ²½μ° μμμΉ λͺ»ν λ°νκ°μ΄ λμ¬ μ μλ€

    // const wrong: any = 5;
    // const maybeNumberArr: number[] = <number[]>wrong;
    // console.log(maybeNumberArr.push(1)); // π©

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = <number[] | undefined> findNumbers();
    // numbers!.push(2); // κ°μ΄ μμμ λ¨μΈνλ ννλ²

    const button = document.querySelector('class')!; // λ€μ !λ₯Ό λ¨μΈν  μ μμ.
    button.nodeValue;
}
