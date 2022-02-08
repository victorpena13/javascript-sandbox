const btnRepos = document.getElementById('repoBtn');
    btnRepos.addEventListener('click', getLastCommit);
async function getLastCommit() {
    const url = 'https://api.github.com/users/victorpena13'
    const response = await fetch(url, {'Authorization': githubAPI_key});
    const result = await response.json()
    console.log(result.updated_at);
}


