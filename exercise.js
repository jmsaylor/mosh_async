
//the async declaration allows use of asynchronous functions, like the ones below using Promises
//try/catch is for error handling

async function display() {
  try {
    let customer = await getCustomer(1);
    console.log('Customer', customer);
    if (customer.isGold) {
      let movies = await getTopMovies();
      console.log('Movies', movies);
      await sendEmail(customer.email, movies)
      console.log('Email sent to:', customer.email);
    }
  } catch (error) {
      console.log('Error', error);
  }
}

display()

function getCustomer(id) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve({ 
      id: 1, 
      name: 'George Washington', 
      isGold: true, 
      email: 'gw@gmail.com' 
    });
  }, 4000);  
  })
  
}

function getTopMovies() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve(['movie1', 'movie2']);
  }, 4000);
  })
}


function sendEmail(email, movies) {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
    resolve();
  }, 4000);
  })
}
