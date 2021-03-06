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
                title: "Project",
                subTitle: "一些有趣的小玩意儿～",
                link: "/project",
            },
            {
                id: 2,
                title: "learnSpace",
                subTitle: "KYLN 的技术博客",
                link: "/learnSpace",
            },
            {
                id: 3,
                title: "Elsewhere",
                subTitle: "KYLN 的一隅小站",
                link: "/Elsewhere",
            },
            {
                id: 4,
                title: "GitHub",
                subTitle: "看看我的 GitHub 首页",
                link: "https://github.com/KYLN24",
            },
        ],
    },
});
