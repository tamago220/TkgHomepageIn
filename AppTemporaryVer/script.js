let img = document.getElementsByClassName("whenDisplay");
let options = {
    threshold: 1,
};

console.log(img.length);
for (let i = 0; i < img.length; i++) {
    let observer = new IntersectionObserver(view, options);
    
    function view(entries) {
        if (entries[0].intersectionRatio == 0) {
            return;
        } else {
            img[i].classList.add("alpha");
        }
    }
    observer.observe(img[i]);
}
