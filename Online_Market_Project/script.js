const dark_mode_btn=document.getElementById("dark_mode");
dark_mode_btn.addEventListener("click", ()=>{
    document.body.classList.toggle('dark');
});
const menu_icon=document.getElementById("menu_icon");
const navlinks=document.getElementById("links_menu");
menu_icon.addEventListener("click", ()=>{
    navlinks.classList.toggle('active');
})

