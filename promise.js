// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.

const myInterest = ()=>{
    console.log("I enjoy learning javascript");
}
setTimeout(myInterest,1000)

// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given 
// a user ID.Write an asynchronous function that fetches and logs the data for each user ID one by one, 
// in sequence.
const userIds = [2,3,4,5,6,7,7]

async function getUserData(){
    for (const id of userIds){
        const userData = await userIds(id);
        console.log(userData);
    }
}

getUserData()












// You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the 
// task is successful and rejects if there's an error. Write a function that calls performTask() and logs
// a custom success message if the task is successful, and a custom error message if there's an error.
let data=[{}];
let performTask= new Promise((resolve,reject)=>{
    if(data){
        setTimeout(()=>{resolve("task is successful")},5000);
    }
    else{
      setTimeout(()=> {reject("The task has an error")},5000);
    }
});
async function performesTasks(){
    let response=await performTask; 
    console.log({response});
}
performesTasks();