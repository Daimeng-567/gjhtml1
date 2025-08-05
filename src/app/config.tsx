const siteModules: {
  [key: string]: {
    emoji: string;
    items: { name: string; url: string }[];
  };
} = {
  游戏: {
    emoji: "🎮",
    items: [
      { name: "躲避陨石1.5", url: "/module/game/1.5.html" },
      { name: "躲避陨石1.6", url: "/module/game/1.6.html" },
    ]
  },
  工具: {
    emoji: "🛠️",
    items: [
      { name: "CyberChef", url: "/module/Tool/CyberChef/index.html" },
      { name: "Redis", url: "https://download.redis.io/releases/" },
      { name: "阿里云控制台", url: "https://home.console.aliyun.com/" },
    ]
  },
  视频: {
    emoji: "🎬",
    items: [
      { name: "樱花-动漫", url: "https://www.yinghuadm.cn/" },
      { name: "夜幕解析", url: "https://www.yemu.xyz/shouye/" },
      { name: "我爱月亮解析", url: "https://z.woaimoon.com/label/v.html?url=" }
    ]
  },
  音乐: {
    emoji: "🎵",
    items: [
      { name: "播放器", url: "/music/" },
    ]
  },
  AI集合: {
    emoji: "🧰",
    items: [
      { name: "DeepSeek", url: "https://chat.deepseek.com/" },
      { name: "即梦AI", url: "https://jimeng.jianying.com/ai-tool/home/?utm_medium=aitools&utm_source=360&utm_campaign=null&utm_content=hw_jm_360" },
      { name: "笔灵AI", url: "https://ibiling.cn/template" },
      { name: "扣子空间", url: "https://space.coze.cn/?utm_medium=daohang&utm_source=aibot&utm_content=&utm_id=&utm_campaign=&utm_term=49156769m&utm_source_platform=&category=7524912604796485641&skill=ppt" },
      { name: "Figma", url: "https://www.figma.com/" }
    ]
  },
  前端: {
    emoji: "🖥️",
    items: [
      { name: "React", url: "https://zh-hans.react.dev/learn/describing-the-ui" },
      { name: "NodeJS", url: "https://nodejs.cn/api/" },
      { name: "Ant-Design", url: "https://ant-design.antgroup.com/docs/react/introduce-cn" },
      { name: "MaterialUI", url: "https://v6.mui.com/material-ui/getting-started/" },
      { name: "React-Bits", url: "https://www.reactbits.dev/text-animations/split-text" },
      { name: "SwiperJS", url: "https://www.swiperjs.net/react/" },
      { name: "VideoJS", url: "https://videojs.moyutime.cn/2022/02/13/course/%E5%AE%89%E8%A3%85/" },
      { name: "NextJS", url: "https://www.nextjs.cn/docs/getting-started" },
      { name: "NestJS", url: "https://nest.nodejs.cn/first-steps" },
    ]
  }
};

export default siteModules;