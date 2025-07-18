// 切换搜索引擎的核心逻辑
const form = document.getElementById('searchForm');
const input = document.getElementById('in');
const side1 = document.getElementById('side1');
const side2 = document.getElementById('side2');
const side3 = document.getElementById('side3');

side1.addEventListener('click', function () {
    form.action = 'https://cn.bing.com/search';
    input.name = 'q';
    input.value = "";
    input.placeholder = '使用Bing搜索引擎';
    input.focus();
});
side2.addEventListener('click', function () {
    form.action = 'https://search.bilibili.com/all';
    input.name = 'keyword';
    input.value = "";
    input.placeholder = '在Bilibili里搜索';
    input.focus();
});
side3.addEventListener('click', function () {
    form.action = 'https://warframe.huijiwiki.com/index.php';
    input.name = 'search';
    input.value = "";
    input.placeholder = '在Warframe Wiki里搜索';
    input.focus();
});