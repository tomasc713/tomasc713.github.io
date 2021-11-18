const btnSwitch = document.querySelector('.navbar__switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('navbar__switch--active');
  
    //local storage
    if (document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

//modo actual
if (localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('navbar__switch--active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('navbar__switch--active');
}