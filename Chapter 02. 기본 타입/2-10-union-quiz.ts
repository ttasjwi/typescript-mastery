{
    // function: login -> success, fail

    type SuccessResponse = {
        message: string
    };

    type FailureResponse = {
        cause: string
    };

    type LoginResponse = SuccessResponse | FailureResponse;

    function login(id: string, password: string): LoginResponse {
        if (id === 'ttasjwi' && password === '1234') {
            return {
                message: '로그인 성공!'
            };
        }
        return {
            cause: '아이디 또는 비밀번호가 맞지 않습니다.'
        };
    }

    function printLoginResponse(response: LoginResponse): void {
        if ('cause' in response) {
            // 안티 패턴 1 : 클라이언트 입장에서 서버 객체의 너무 많은 것을 알고 있음. 객체가 자율적이지 않음
            // 안티 패턴 2 : 두 타입이 서로 표준화되지 않아있다.
            console.log('😢', response.cause);
            return;
        }
        console.log('😊', response.message);
        return;
    }

    printLoginResponse(login('ttasjwi', "1234"));
    printLoginResponse(login('ttasjwi', "2345"));
}
