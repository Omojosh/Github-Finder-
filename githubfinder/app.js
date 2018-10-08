const git = new gitHub;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keydown', (e)=>{
    const userText = e.target.value;
    
    if(userText !== ''){
        //make http call
    git.getUser(userText).
    then(data => {
    if(data.profile.message === 'Not Found'){
        //show alert
        ui.showAlert('User Not Found', 'alert alert-danger');
    }else{
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
    }
});
    }else{
        //clear profile
        ui.clearProfile();
    }
})