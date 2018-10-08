class gitHub{
    constructor(){
   this. client_id= '4a76fc83abe36425a1ed';
   this.client_secret= '6c0ba5f203f9d208ba8365009453478a54fb7d17';
   this.repos_count = '5';
   this.repos_sort = 'created: asc';
    }

 async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return{
        profile,
        repos
    }
}
}
