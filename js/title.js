var titleTime, OriginTitile = document.title;
document.addEventListener("visibilitychange", (function() {
        document.hidden ? (document.title = " (っ°Д°;)っ不要走！",
            clearTimeout(titleTime)) : (document.title = "♪(^∇^*)欢迎回来！",
            titleTime = setTimeout((function() {
                    document.title = OriginTitile
                }
            ), 2e3))
    }
));
