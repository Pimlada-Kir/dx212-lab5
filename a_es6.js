function greet(name, faculty) {
    return "สวัสดี" + name + "จากคณะ" + faculty + "!" ;
}

const greet_modern = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;

console.log(greet("Aom", "IT"));
console.log(greet_modern("Aom", "IT"));

const student = { name: "ฟ้า", faculty: "CITU", year: 2 };
const { name, faculty } = student;
const updated = { ...student, year: 3 };    // copy แล้วแก้บางค่าconst

//console.log( student, updated);

console.log(name, faculty, updated);