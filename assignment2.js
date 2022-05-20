function getData(uid){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Feteched data");
            resolve("skc@gmail.com");
        }, 3000);
    });
    return promise;
}

console.log("start");
getData("skc").then(email=>{
    console.log("Email id of the user id is: " +email);
    console.log("end");
}).catch(err=> console.log(err));
