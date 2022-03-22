// 01fe3484c2641765522126c94f868748b00f8141

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    userName = e.target.value;

    if(userName){
        console.log(1);
    }
})