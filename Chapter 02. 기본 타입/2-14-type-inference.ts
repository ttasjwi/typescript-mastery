{
    /**
     * 타입 추론 (Type Inference)
     */
    let text = 'hello'; // 타입 추론에 의해 string 타입으로 유추된다.
    //text = 1; // 타입 추론에 의해 숫자 할당 불가

    //function print(message) { 타입을 명시해야한다.
    function print(message = 'hello') { // default parameter를 지정하면 타입추론에 의해 파라미터 타입을 유추한다.
        console.log(message);
    }

    function add(x: number, y: number) { // 결과 타입이 추론됨
        return x + y;
    }

    const result = add(1,2); // 타입이 추론됨.

    // 꼬박꼬박 타입을 명시하지 않아도 되지만, 타입을 정확히 명시하는 것이 좋다.

}
