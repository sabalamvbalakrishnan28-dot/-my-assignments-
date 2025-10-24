// Create a function that returns a Promise
function fetchDataFromDatabase() {
    return new Promise((resolve, reject) => {
        // Simulate a 3-second delay
        setTimeout(() => {
            const data = true; // Simulate data availability

            if (data) {
                resolve("Data fetched successfully!");
            } else {
                reject("Data not found!");
            }
        }, 3000);
    });
}

// Call the function and handle the Promise
fetchDataFromDatabase()
    .then((message) => {
        console.log(message); // Logs: "Data fetched successfully!"
    })
    .catch((error) => {
        console.log(error); // Logs: "Data not found!"
    });
