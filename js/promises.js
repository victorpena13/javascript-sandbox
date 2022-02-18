const btnRepos = document.getElementById('repoBtn');
    btnRepos.addEventListener('click', getLastUpdated);
async function getLastUpdated(githubUsername) {
    const url = 'https://api.github.com/users/victorpena13';
    const response = await fetch(url, {'Authorization': githubAPI_key});
    const result = await response.json()
    console.log(result.items);
}
getLastUpdated();


