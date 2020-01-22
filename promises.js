console.log('Before');

//consuming the results of asynchronous functions
//each Promise has the methods: .then (for results) and .catch (for errors)

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log(commits))

console.log('After');

//these are the asynchronous functions, using Promises
//`resolve` handles the eventual result of the Promise

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
