{
    /**
     * Type Alias (타입을 정의할 수 있음)
     */

    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'korea';

    type Num = number;
    type Student = {
        name: string,
        age: number,
    }
    const student: Student = {
        // animal: 'dog'
        name: 'ttasjwi',
        age: 12,
    };

    /**
     * String Literal Types (타입을 문자열 리터럴로 지정할 수도 있다.)
     */
    type Name = 'name';
    let ttasjwiName: Name;
    ttasjwiName = 'name';

    type JSON = 'json';
    // const json: JSON = 'd';
    const json: JSON = 'json';

    /**
     * boolean Literal Types
     */
    type Bool = true;
    // const isCat: Bool = false;
}
