{
    // Tuple => 💩  ? Ellie님은 interface, type alias, class 로 대체하는 것을 권장
    let student: [string, number];
    student = ['name', 123];
    console.log(student[0]); // name
    console.log(student[1]); // 123
    console.log();

    // Destructuring Assignment
    const [name, age] : [string, number] = student;
    console.log(name);
    console.log(age);
}
