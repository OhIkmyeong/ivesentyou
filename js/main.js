const TIME = 2000;

async function init(URL) {
    await change_text();
    await change_url(URL);
}//init

function change_text() {
    return new Promise(res => {
        setTimeout(() => {
            const $text = document.querySelector('.text');
            $text.textContent = '요청 성공';
            res();
        }, TIME);
    });
}//change_text

function change_url(URL) {
    setTimeout(() => {
        location.href = URL;
        res();
    }, TIME / 2);
}//change_url
