{
    /**
     * JavaScript
     * Primitive : number, String, boolean, bigint, symbol, null, undefined
     * Object : function, array, ...
     */


    // number
    const num: number = -6;
    console.log(num);

    // string
    const str: string = '안녕';
    console.log(str);

    // boolean
    const bool: boolean = false;

    // undefined
    let name: undefined; //💩
    let age: number | undefined;
    age = undefined;
    age = 10;

    function find(): number | undefined {
        return undefined;
    }

    // null : 아무 것도 반환하지 않음. 주로 null 가능성이 있는 것들과 묶어서 타입에 선언
    let person: null; //💩
    let person2: string | null;

    // unknown 💩 무슨 타입이 올지 몰라...
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩 난 모든 타입이 올 수 있어!
    let anything: any = 0;
    anything = 'hello';
    anything = false;

    // void : 아무것도 반환하지 않는 함수에 주로 사용
    function print() : void {
        console.log('hello');
        return;
    }

    let unusable: void = undefined; // 💩 void를 변수 타입으로 선언하는 경우는 거의 없음

    // never (에러를 던지거나, 무한 반복)
    function throwError(message : string) : never {
        // message -> server (log)
        throw new Error(message);
    }

    function endless() : never {
        while(true) {
            console.log('fire Punch!');
        }
        // return; // 무언가를 절대 던질 수 없음.
    }

    let neverEnding: never; // 💩 never 타입으로 반환하는 경우가 거의 없음.

    // object : 원시 타입을 제외한 모든 타입을 할당할 수 있음
    let obj: object; // 💩 타입이 불분명함.
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name: 'ttasjwi'});
    acceptSomeObject({animal: 'dog'});

}
