const FAKE_URL = 'https://namu.wiki/w/보내드렸습니다%5E%5E';
const TIME = 1000;

async function init() {
    await change_text();
    await change_url();
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

function change_url() {
    setTimeout(() => {
        location.href = FAKE_URL;
        res();
    }, TIME / 2);
}//change_url

/* 실행 */
init();