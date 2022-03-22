// Init github
const github = new GitHub();

// init UI
const ui = new UI();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    userName = e.target.value;

    if(userName) {
        github.getUser(userName)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // show error
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showUser(data.profile);
                }
            })    
    } else {
        ui.clearUser();
    }
})