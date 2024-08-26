let btn = document.querySelectorAll('.buttons')
let body = document.querySelector('body')

btn.forEach(function (mybtn)  {
    mybtn.addEventListener("mouseenter", function (niggaman) {
       console.log(niggaman.target);
       console.log(niggaman);
       
       if (niggaman.target.id === "black") {
        body.style.backgroundColor = niggaman.target.id
    }if (niggaman.target.id === "yellow") {
        body.style.backgroundColor = niggaman.target.id
    }if (niggaman.target.id === "grey") {
        body.style.backgroundColor = niggaman.target.id
    }if (niggaman.target.id === "red") {
        body.style.backgroundColor = niggaman.target.id
    }if (niggaman.target.id === "blue") {
        body.style.backgroundColor = niggaman.target.id
        
    }if (niggaman.target.id === "purple") {
        body.style.backgroundColor = niggaman.target.id
        
    }if (niggaman.target.id === "green") {
        body.style.backgroundColor = niggaman.target.id
        
    }
   })
    
})