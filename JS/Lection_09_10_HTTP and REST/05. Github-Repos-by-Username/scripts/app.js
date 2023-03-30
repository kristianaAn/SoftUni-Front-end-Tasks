function loadRepos() {
	//'https://api.github.com/users/k1r1L/repos';
	const BASE_LINK = 'https://api.github.com/users/';
	const userName = document.getElementById('username');
	const userNameValue = userName.value;
	const parentUl = document.getElementById('repos');

	fetch(`${BASE_LINK}${userNameValue}/repos`, {method: 'GET'})
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		data.forEach(({ ...repo }) => {
			const repoLink = repo.html_url;
			const repoFullName = repo.full_name;
			console.log(repoLink);
			console.log(repoFullName);
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.textContent = repoFullName;
			a.setAttribute('href', repoLink);
			li.appendChild(a);
			parentUl.appendChild(li);
		})
	})
	.catch((err) => {
		const liCreated = document.createElement('li');
		liCreated.textContent = err;
		parentUl.appendChild(liCreated);
	})
}