const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

const getRandomPanel = () => {
    const panels = [
    green,
    red,
    yellow,
    blue
];
return panels[parseInt(Math.random() * panels.length)];
};


const sequence = [
    getRandomPanel(),
    getRandomPanel(),
    getRandomPanel(),
    getRandomPanel()
];

const flash = panel => {
    return new Promise((resolve, reject) => {
        panel.className += ' active';
        setTimeout(() => {
            panel.className = panel.className.replace(
                ' active',
                ''
            );
            resolve();
        }, 1000);
    });
};

let canClick = false;
const panelClicked = panel => {
    console.log(panel);
};

const main = async () => {
    for (const panel of sequence) {
        await flash(panel);
    }
};

main();