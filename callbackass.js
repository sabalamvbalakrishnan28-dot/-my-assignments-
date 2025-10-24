
let browser = "Chrome";


function checkBrowserVersion(callback) {
   
    setTimeout(() => {
      
        callback(browser);
    }, 2000);
 console.log("browser version after the 2-second delay")   
}


function logBrowserVersion(version) {
    console.log("Browser version is:", version);
}


checkBrowserVersion(logBrowserVersion);

