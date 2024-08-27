let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; 

        if (success) {
            resolve("Operation completed successfully!");
        } else {
            reject("Operation failed!");
        }
    }, 2000); // Simulate a 2-second delay
});
