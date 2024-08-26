const course = {
    courseName : 'javascript',
    price: "free",
    courseInstructor : "Hitesh Sir"
}

// console.log(course);

// de strusture 

const { courseInstructor: teacher, courseName: sub } = course
console.log(teacher);
console.log(sub);

