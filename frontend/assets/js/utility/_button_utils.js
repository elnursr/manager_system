export function setTextContent(timerElements, callBack) {
    if (timerElements.dataset.state === 'start') {
        timerElements.textContent = 'Pause';
        timerElements.dataset.state = 'pause';
        callBack();
    }
    else if (timerElements.dataset.state === 'resume') {
        timerElements.textContent = 'Pause';
        timerElements.dataset.state = 'pause';
    }
    else {
        timerElements.textContent = 'Resume';
        timerElements.dataset.state = 'resume';
    }
}