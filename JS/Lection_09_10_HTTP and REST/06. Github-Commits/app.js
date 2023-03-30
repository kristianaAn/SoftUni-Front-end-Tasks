function loadCommits() {
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const BASE_URL = 'https://api.github.com/repos/';
    const listContainer = document.getElementById('commits');

    fetch(`${BASE_URL}${username.value}/${repo.value}/commits`, {method: 'GET'})
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        // data
        //  .forEach(({ commit }) => {
        //     let authorName = commit.author.name;
        //     let message = commit.message;
        //     const li = document.createElement('li');
        //     li.textContent = `${authorName}: ${message}`;
        //     listContainer.appendChild(li);
        // })
    })
    .catch((err) => {
        const liErr = document.createElement('li');
        liErr.textContent = `Error: ${err} (Not Found)`;
        listContainer.appendChild(liErr);
    })
}