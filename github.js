class GitHub{
    constructor(){
        this.client_id = 'e6964645203ba172a0a2';
        this.client_secret = '01fe3484c2641765522126c94f868748b00f8141';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const profileRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repos = await profileRepos.json();

        return{
            profile,
            repos
        }
    }
}