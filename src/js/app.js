import anime from 'animejs';

const elements = document.querySelectorAll('ul.main-link-list a');
const animated = [];
const easing = [.91, -0.67, .33, 1.5];

elements.forEach((element, index) => {
    animated[index] = false;

    element.onclick = (event) => {

        if (!animated[index]) {
            event.preventDefault();
            animated[index] = true;
        }

        const target = event.target;
        const width = target.getBoundingClientRect().x;
        const color = target.getAttribute('data-color') || '#5f5f5f';
        const colorProperty = {
            value: color,
            // value: '#5f5f5f',
            delay: 1700,
        };

        anime({
            targets: target,
            translateX: [
                {
                    value: window.innerWidth - width - target.offsetWidth - 5,
                    duration: 500,
                    easing,
                },
            ],
            rotate: {
                value: '0.75turn',
                delay: 700,
                easing,
            },
            scale: {
                value: 20,
                delay: 1700
            },
            direction: 'alternative',
            color: colorProperty,
            // backgroundColor: colorProperty,
            begin() {
                document.getElementById('over')
                    .style
                    .display = 'block';
                anime({
                    targets: '#over',
                    // display: 'block'
                    backgroundColor: color,
                    delay: 1800,
                });
                // event.target.click();
            },
            complete(animeObj) {
                console.log(animeObj);
                console.log(animeObj.animatables[0].target);
                const element = animeObj.animatables[0].target;
                element.style.display = 'none';
            }
        });
    };
});