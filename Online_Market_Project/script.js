
 /*dark_mode_btn */
    const dark_mode_btn=document.getElementById("dark_mode");
    dark_mode_btn.addEventListener("click", ()=>{
        document.body.classList.toggle('dark');
    });
    /*menu_btn*/
    const menu_icon=document.getElementById("menu_icon");
    const navlinks=document.getElementById("links_menu");
    menu_icon.addEventListener("click", ()=>{
        navlinks.classList.toggle('active')
    })
    const timer = setInterval(() => {
    const now = new Date().getTime();
    const eventDate = new Date("2025-07-17 00:00:00").getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      clearInterval(timer);
      document.getElementById("days").innerText = "0 J";
      document.getElementById("hours").innerText = "0 H";
      document.getElementById("minutes").innerText = "0 M";
      document.getElementById("seconde").innerText = "0 S";
      return;
    }

    const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
    const heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = jours + " J";
    document.getElementById("hours").innerText = heures + " H";
    document.getElementById("minutes").innerText = minutes + " M";
    document.getElementById("seconde").innerText = secondes + " S";
  }, 1000);