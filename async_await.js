console.log('Before');

//When using async/await, must be within a function declared async

async function display() {
    let user = await getUser(1);
    let repos = await getRepositories(user.gitHubUsername);
    let commits = await getCommits(repos[0]);
    console.log(commits);
}

display();

console.log('After');

//these are the asynchronous functions, using Promises
//`resolve` handles the eventual result of the Promise
//unlike async/await, asynchronous functions using Promises don't need to be declared async

function getUser(id) {
 return new Promise((resolve,reject) => {
 setTimeout(() => {
    console.log('Reading a user from a database...');
    resolve({ id: id, gitHubUsername: 'mosh' });
  }, 2000);
 })
}
 
function getRepositories(username) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log('Calling GitHub API...');
    resolve(['repo1', 'repo2', 'repo3']);
  }, 2000);
  })
}

function getCommits(repo) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
    console.log('Calling GitHub API...');
    resolve(['commit']);
  }, 2000);
  })
}
