function hello() {
    console.log('hello');
    
}

setTimeout(hello, 1000) // 5 sec delay
setTimeout(() => console.log('world'), 3000) // 1 sec delay