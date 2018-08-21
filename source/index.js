import './index.scss';

function decorateThePage() {
    document.querySelectorAll('#additional-content li, #all-info').forEach((element) => {
        element.tabIndex = 0;
        element.onkeydown = (e) => {
            e.stopPropagation();
            if (e.keyCode === 32 || e.keyCode === 13) {
                element.click();
            }
        } 
    })
    document.querySelectorAll('#information').forEach((element) => {
        element.onkeydown = (e) => {
            if (e.target.href !== undefined) {
                e.stopPropagation();
                if (e.keyCode === 32 || e.keyCode === 13) {
                    e.target.click();
                }
            }
        } 
    })
    document.querySelector('.audio-btn').tabIndex = '-1';  // can already select the li now
}

function waitForPageLoad() {
    if (document.querySelectorAll('#information').length === 0) {
        setTimeout(() => {
            waitForPageLoad();
        }, 1000);
    } else {
        decorateThePage();
    }
}

waitForPageLoad();