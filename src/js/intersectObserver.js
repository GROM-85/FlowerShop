const titles = document.querySelectorAll(".title");

const observer = new IntersectionObserver((entries,observer) =>{
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        console.log(entry)
        entry.target.classList.toggle("animate__slideInLeft",entry.isIntersecting);
        entry.target.nextElementSibling.classList.toggle("animate__slideInRight",entry.isIntersecting);
    })
},{
    threshold:1,
})

titles.forEach(title => {
    observer.observe(title);
})
