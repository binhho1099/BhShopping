const btnShow = document.getElementById('btn-show'),
sideBarBtn = document.getElementById('side-bar_btn'),
sideBar = document.getElementById('side-bar');

btnShow.addEventListener('click',()=>{
    sideBar.classList.toggle('show-side-bar');
})
sideBarBtn.addEventListener('click',()=>{
    sideBar.classList.toggle('show-side-bar');
})
