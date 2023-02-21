const app = new Vue({
    el: "#app",
    data: {
        titleWord: {
            title: [["Hello,"], ["This", "is", "KYLN24"]],
            subTitle: [
                ["Welcome", "to", "my", "homepage!"],
                ["Have", "a", "nice", "day!"],
            ],
        },
        mainNav: [
            {
                id: 1,
                title: "GitHub",
                subTitle: "看看我的 GitHub 首页",
                link: "https://github.com/KYLN24",
            },
        ],
    },
});
