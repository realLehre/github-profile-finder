// Init github
const github = new GitHub();

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    userName = e.target.value;

    if(userName) {
        github.getUser(userName)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                console.log(1);
                } else {

                }
            })    
    } else {

    }
})