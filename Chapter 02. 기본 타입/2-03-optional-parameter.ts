{
    // JavaScript => TypeScript
    // Optional Parameter
    function printName(firstName: string, lastName?: string){
        // ? : 전달하지 않아도 되는 파라미터. 전달하지 않으면 undefined로 전달됨. 명시적으로 undefined로 전달될 수 있다.
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('ttasjwi');
    printName('Ellie', undefined);

    // (cf) string | undefined : 전달하지 않을 시 오류가 뜬다.
}
