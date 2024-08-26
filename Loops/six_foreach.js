const arr = ['js', 'java', 'python'];

arr.forEach((value) => {
    // console.log(value);
    
})



const coding = [
    {
        languageName: "Javascript",
        fileName: ".js"
    },
    {
        languageName: "Java",
        fileName: ".java"
    },
    {
        languageName: "Python",
        fileName: ".py"
    },
]

coding.forEach((item) => {
    console.log(`${item.languageName} : ${item.fileName}`)
    
})
