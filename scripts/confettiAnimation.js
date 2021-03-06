// confetti
const confettiLoop = (container) => {
    let total = 200;
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let confetti;

    for (let i=0; i<total; i++){ 
       container.innerHTML += '<div class="confetti"></div>';
       confetti = document.querySelectorAll('.confetti');
         
       TweenMax.set(confetti[i], {
           x: randomizeMax(width),
           y: randomize(-500, 500),
           scale: randomize(.5, 1),
           backgroundColor: `rgb(${randomize(0, 255)}, ${randomize(0, 255)}, ${randomize(0, 255)})`});
        };

        confetti.forEach(item => {
            animateConfetti(item, height)
        })
    }

const animateConfetti = (el, h) => {
    TweenMax.to(el, randomizeMax(5)+4,{
        y: h,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -5 });
    TweenMax.to(el, randomizeMax(5)+1,{
        x: '+=70', 
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut })
     TweenMax.to(el, randomizeMax(5)+1,{
         scaleX: .2,
         rotation: randomizeMax(360), repeat:-1,
         yoyo: true,
         ease: Sine.easeInOut })
    TweenMax.to(el, randomizeMax(1)+.5,{
        opacity: 0, 
        repeat: -1,
        yoyo: true, 
        ease: Sine.easeInOut})
}

const randomizeMax = (max) => {
    return Math.random()*max;
}
const randomize = (min, max) => {
    return min + Math.floor( Math.random() * (max - min));
}

export default confettiLoop;