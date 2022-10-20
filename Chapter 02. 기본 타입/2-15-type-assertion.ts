{
    /**
     * Type Assertions 💩 : 개발자 스스로 그 객체의 타입을 명시
     */
    function jsStrFunc(): any {
        // return 2;
        return 'hello';
    }

    const result = jsStrFunc(); // 무슨 타입인지 알기 힘들다.
    const resultStr1: string = result as string; // 뜻한대로 작동하지 않는다.
    const resultStr2: string = <string>result; // 명시적인 형변환 방법
    console.log(resultStr1.length); // string이 아닌 경우 예상치 못한 반환값이 나올 수 있다

    // const wrong: any = 5;
    // const maybeNumberArr: number[] = <number[]>wrong;
    // console.log(maybeNumberArr.push(1)); // 💩

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = <number[] | undefined> findNumbers();
    // numbers!.push(2); // 값이 있음을 단언하는 표현법

    const button = document.querySelector('class')!; // 뒤에 !를 단언할 수 있음.
    button.nodeValue;
}
