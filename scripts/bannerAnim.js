let title = document.querySelector('.home-banner__title')
let initials = document.querySelector('.initials')


const easeInTimeLine = (a, b) => {
    let tl = gsap.timeline()
    tl.from(a, { duration: 2, opacity:0, scale:0, ease: " power3.out" });
    tl.from(b, { duration: 1.5, opacity:0, scale:0, ease: " power3.out" });
}
easeInTimeLine(title, initials)