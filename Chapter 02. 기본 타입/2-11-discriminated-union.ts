{
    // function: login -> success, fail
    // distriminated union
    // 공통 필드를 만들고 필드의 값으로 구분
    // 하지만 이 또한 외부에서 그게 무슨 객체인지 너무 많은 정보를 알아야한다.

    type SuccessResponse = {

        result: 'success';
    };

    type FailureResponse = {
        result: 'failure',
        cause: string;
    }

    type LoginResponse = SuccessResponse | FailureResponse;

    function login(id: string, password: string): LoginResponse {
        if (id === 'ttasjwi' && password === '1234') {
            return {
                result: 'success'
            };
        }
        return {
            result: 'failure',
            cause: '아이디 또는 패스워드가 맞지 않습니다.'
        };
    }

    function printLoginResponse(response: LoginResponse): void {
        return (response.result === 'success')
            ? console.log(`😄 ${response.result}`)
            : console.log(`😢 ${response.result}, ${response.cause}`);
    }

    printLoginResponse(login('ttasjwi', "2345"));
}
