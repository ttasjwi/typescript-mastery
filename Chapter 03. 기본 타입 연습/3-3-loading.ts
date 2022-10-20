{
    /**
     * Print Loading State
     */
    type LoadingState = {
        state: 'loading';
    };

    type SuccessState = {
        state: 'success';
        response: {
            body: string;
        };
    };

    type FailState = {
        state: 'fail';
        reason: string;
    };

    type ResourceLoadState = LoadingState | SuccessState | FailState;

    function printLoginState(loginState: ResourceLoadState): void {
        switch(loginState.state) {
            case 'loading':
                console.log(`👀 ${loginState.state}...`);
                return;
            case 'success':
                console.log(`😃 ${loginState.response.body}`);
                return;
            case 'fail':
                console.log(`😱 ${loginState.reason}`);
                return;
            default:
                throw new Error(`Unknown state Error : ${loginState}`);
        }

    }
    printLoginState({ state: 'loading' }); // 👀 loading...
    printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
    printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
