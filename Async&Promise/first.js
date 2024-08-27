function hello() {
    console.log('hello');
    
}

setTimeout(hello, 5000) // 5 sec delay
setTimeout(() => console.log('world'), 1000) // 1 sec delay