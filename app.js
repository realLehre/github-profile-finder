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
                } else {
                    console.log(data);
                    // ui.showUser(data.profile);
                }
            })    
    } else {

    }
})