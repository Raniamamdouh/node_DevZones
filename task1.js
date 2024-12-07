
const users = [{ id: 1, name: "Rania" }, { id: 2, name: "Nada" }];
const tasks = [
  { userId: 1, task: "Do task1" },
  { userId: 1, task: "Do task2" },
  { userId: 2, task: "Do task3" },
];

//using callback
function getUserById(userId, callback) {
    setTimeout(() => {
      const user = users.find((u) => u.id === userId);
      if (user) {
        callback(null, user);
      } else {
        callback("User not found");
      }
    }, 1000); 
  }
  
  //using callback
  function getTasksByUserId(userId, callback) {
    setTimeout(() => {
      const userTasks = tasks.filter((t) => t.userId === userId);
      if (userTasks.length > 0) {
        callback(null, userTasks);
      } else {
        callback("Tasks not found ");
      }
    }, 1000); 
  }
  
  // handle with Callbacks
  getUserById(1, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log("User:", user);
      getTasksByUserId(user.id, (err, userTasks) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Tasks:", userTasks);
        }
      });
    }
  });
  

  // ID using Promise
function getUserByIdPromise(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find((u) => u.id === userId);
        if (user) {
          resolve(user);
        } else {
          reject("User not found");
        }
      }, 1000); 
    });
  }
  
  function getTasksByUserIdPromise(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userTasks = tasks.filter((t) => t.userId === userId);
        if (userTasks.length > 0) {
          resolve(userTasks);
        } else {
          reject("Tasks not found ");
        }
      }, 1000); 
    });
  }
  
  // Usage with Promises
  getUserByIdPromise(2)
    .then((user) => {
      console.log("User:", user);
      return getTasksByUserIdPromise(user.id);
    })
    .then((userTasks) => {
      console.log("Tasks:", userTasks);
    })
    .catch((err) => {
      console.log(err);
    });

    
    // Async function 
async function fetchUserAndTasks(userId) {
    try {
      const user = await getUserByIdPromise(userId);
      console.log("User:", user);
  
      const userTasks = await getTasksByUserIdPromise(user.id);
      console.log("Tasks:", userTasks);
    } catch (err) {
      console.log(err);
    }
  }
  
  // Usage  Async/Await
  fetchUserAndTasks(1);

  
