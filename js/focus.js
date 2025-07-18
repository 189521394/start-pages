// 解决自动聚焦这个奇怪的小问题
document.addEventListener("DOMContentLoaded", function() {
    const searchbox = document.getElementById('box');
    const input = document.getElementById('in');

    //检查输入框是否已聚焦（由autofocus引起）
    if (document.activeElement === input) {
        applyFocusStyles(searchbox);
    }

    //添加事件监听器
    input.addEventListener('focus', () => applyFocusStyles(searchbox));
    input.addEventListener('blur', () => resetStyles(searchbox));
});

function applyFocusStyles(element) {
    element.style.borderRadius = '10px';
    element.style.borderStyle = 'solid';
    element.style.borderColor = '#00a1d6';
    element.style.backgroundColor = '#1F2128';
    element.style.boxShadow = '0px 0px 0px 3px #00a1d6,0px 0px 20px -3px #00a1d6,0px 0px 10px -3px #00a1d6 inset';
}

function resetStyles(element) {
    element.style = '';
    element.classList.remove('focused');
}