{
    // Tuple => ð©  ? Ellieëì interface, type alias, class ë¡ ëì²´íë ê²ì ê¶ì¥
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
