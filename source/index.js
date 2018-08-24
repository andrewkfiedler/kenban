import './index.scss';

function decorateThePage() {
    
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