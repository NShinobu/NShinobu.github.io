var now = new Date;
function createtime() {
    now.setTime(now.getTime() + 1e3);
    var e = new Date("05/19/2023 12:33:02")
        , t = Math.trunc(234e8 + (now - e) / 1e3 * 17)
        , a = (t / 1496e5).toFixed(6)
        , n = new Date("05/19/2023 12:33:02")
        , r = (now - n) / 1e3 / 60 / 60 / 24
        , s = Math.floor(r)
        , o = (now - n) / 1e3 / 60 / 60 - 24 * s
        , b = Math.floor(o);
    1 == String(b).length && (b = "0" + b);
    var i = (now - n) / 1e3 / 60 - 1440 * s - 60 * b
        , l = Math.floor(i);
    1 == String(l).length && (l = "0" + l);
    var p = (now - n) / 1e3 - 86400 * s - 3600 * b - 60 * l
        , c = Math.round(p);
    1 == String(c).length && (c = "0" + c);
    let d = "";
    d = b < 18 && b >= 9 ? `<span class='textTip'><b>本站居然运行了 ${s} 天</span><span id='runtime'> ${b} 小时 ${l} 分 ${c} 秒 </b></span> <i id="heartbeat" class='fas fa-heartbeat' style='color:red'></i> ` : `<span class='textTip'> <b>本站居然运行了 ${s} 天</span><span id='runtime'> ${b} 小时 ${l} 分 ${c} 秒 </b></span>  `,
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = d)
}
setInterval((()=>{
        createtime()
    }
), 1e3);
