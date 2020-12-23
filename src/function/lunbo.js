function roll(t) {
    // console.log("In roll");
    let ul1 = document.querySelectorAll("#comment1");
    let ul2 = document.querySelectorAll("#comment2");
    let ulbox = document.querySelectorAll(".gundong");
    for (let i = 0; i < ul1.length; i++)
        ul2[i].innerHTML = ul1[i].innerHTML;
    // ulbox.scrollTop = 0; // 开始无滚动时设为0
    for (let i = 0; i < ulbox.length; i++)
        ulbox[i].scrollTop = 0;
    let timer = setInterval(rollStart, t); // 设置定时器，参数t用在这为间隔时间（单位毫秒），参数t越小，滚动速度越快
    // 鼠标移入div时暂停滚动
    for (let i = 0; i < ulbox.length; i++) {
        ulbox[i].onmouseover = function () {
            clearInterval(timer);
        }
        // 鼠标移出div后继续滚动
        ulbox[i].onmouseout = function () {
            timer = setInterval(rollStart, t);
        }
    }

}

// 开始滚动函数
function rollStart() {
    // console.log("In rollStart");
    // 上面声明的DOM对象为局部对象需要再次声明
    let ul1 = document.querySelectorAll("#comment1");
    let ul2 = document.querySelectorAll("#comment2");
    let ulbox = document.querySelectorAll(".gundong");
    // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
    // for (let i = 0; i < ulbox.length; i++) {
    //     if (ulbox[i].scrollTop >= ul1[i].scrollHeight) {
    //         ulbox[i].scrollTop = 0;
    //     } else {
    //         ulbox[i].scrollTop++;
    //     }
    //     console.log("ulbox[i]:");
    //     console.log(i);
    //     console.log("scrollTop:");
    //     console.log(ulbox[i].scrollTop);
    // }
    if (ulbox[0].scrollTop >= 86) {
        ulbox[0].scrollTop = 0;
    } else {
        ulbox[0].scrollTop++;
    }
    // console.log("scrollTop:");
    // console.log(ulbox[0].scrollTop);

}

export default roll;
