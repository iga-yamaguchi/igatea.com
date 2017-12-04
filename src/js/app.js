import anime from 'animejs';

const elements = document.querySelectorAll('ul.main-link-list a');
const animated = [];

elements.forEach((element, index) => {
    animated[index] = false;

    element.onclick = (event) => {

        if (!animated[index]) {
            event.preventDefault();
            animated[index] = true;
        }

        const target = event.target;
        const width = target.getBoundingClientRect().x;

        anime({
            targets: target,
            translateX: [
                {
                    value: window.innerWidth - width - target.offsetWidth - 5,
                    duration: 500,
                },
            ],
            easing: [.91, -0.67, .33, 1.5],
            rotate: {
                value: '0.75turn',
                delay: 700
            },
            scale: {
                value: 20,
                delay: 1700
            },
            backgroundColor: {
                value: '#5f5f5f',
                delay: 1300,
            },
            complete() {
                event.target.click();
            },
        });
    };
});