window.addEventListener("scroll",function(){
    const navbar = this.document.quarySelection(".navbar");
    if(this.window.scrollY>50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
})