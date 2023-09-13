console.log("test");
const notify = (fn, handler) => e => {
    fn(handler(e));
};

const logEvent = x => {
    alert(`event handler has returned "${x}"`);
};
const make_red = e => {
    e.target.style.backgroundColor = 'red';
    return 42;
};

const make_green = e => {
    e.target.style.backgroundColor = 'green';
    return 84;
};

console.log(document);
let test = document.querySelector('#text').textContent;
console.log(test);
document.querySelector('#id1').addEventListener('click', notify(logEvent, make_red));
document.querySelector('#id2').addEventListener('click', notify(logEvent, make_green));