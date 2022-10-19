{
    /**
     * 관련 상수를 한 곳에 모아서 관리
     */

        // JavaScript에서는 enum이 제공되지 않는다.
        // 객체를 얼려서 사용하면 유사하게 구현할 수 있음...
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    console.log(Days.Friday);
    let day: Days = Days.Saturday;
    day = 10; // 다른 숫자로 재할당이 가능해서 문제다.
    console.log(day);

    // 다른 방법 : Union Type
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'
    let day2: DaysOfWeek = 'Monday';
    // day2 = 'Fire Punch'; // 다른 타입으로 할당 불가능하다

    // 한계 : Java처럼 enum을 static한 객체처럼 사용할 수 없다.
    // enum의 value에는 숫자 또는 문자만 할당 가능하다.
    // 해결안 : https://jojoldu.tistory.com/621 (외부 라이브러리를 통해, enum처럼 사용)
}
