const games = [
  {
    "id": "meridian",
    "name": "Meridian Sound Racing",
    "author": "OpenAI · Bhavani",
    "genre": "未来城市竞速",
    "note": "驾驶反重力赛车穿过夜城，选择冲刺或大奖赛，用加速冲击更短圈速。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "entry",
    "rights": "仅按原作者入口试玩。源码、素材与再发布授权未见声明。",
    "authorUrl": "https://x.com/Bhavani_00007",
    "play": "https://meridian-futuristic-race.openai.chatgpt.site/",
    "demo": "https://openai.com/index/introducing-gpt-6-2-astra-sol/",
    "evidence": "OpenAI 发布公告直接将可玩的未来赛车归因于 GPT-6.2 Astra。Bhavani 也发了演示。",
    "refs": [
      [
        "OpenAI 公告与实机视频",
        "https://openai.com/index/introducing-gpt-6-2-astra-sol/"
      ],
      [
        "Bhavani 原帖",
        "https://x.com/Bhavani_00007/status/2122767429193646141"
      ],
      [
        "作者演示录影出处",
        "https://dropday.ai/c/meridian-sound-racing"
      ],
      [
        "预告片与车库画面转载出处",
        "https://vibegamer.io/game/meridian"
      ]
    ],
    "image": "captures/meridian-race.jpg",
    "imageLabel": "静音实机截图",
    "access": "独立 Chrome 已从车库启动冲刺赛并进入赛道，图鉴封面为本次实机截图。",
    "license": "许可证未声明",
    "reviewOrder": 1
  },
  {
    "id": "santa",
    "name": "Santa Express: Chimney Panic!",
    "author": "thestringtheories",
    "genre": "3D 投递街机",
    "note": "60 秒内驾雪橇掠过北欧雪村，把礼物投进发亮的烟囱并维持连击。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "project",
    "rights": "仓库根目录未见项目许可证。随包提供 Three.js、Barlow 与 Press Start 2P 的第三方许可说明。",
    "authorUrl": "https://github.com/thestringtheories",
    "play": "https://thestringtheories.github.io/Santa-Game/",
    "evidence": "作者 README 记载先用 GPT-6.2 Astra 做可玩原型，再要求模型调整镜头与角色细节。源码树含 src、public、Vite 配置和锁文件。",
    "access": "网页需 WebGL 2。本地用 Node.js 24 LTS，执行 npm ci 和 npm run dev。",
    "refs": [
      [
        "作者 README 与源码树",
        "https://github.com/thestringtheories/Santa-Game#readme"
      ],
      [
        "依赖和字体许可",
        "https://github.com/thestringtheories/Santa-Game/tree/main/public/licenses"
      ],
      [
        "发行页",
        "https://github.com/thestringtheories/Santa-Game/releases"
      ]
    ],
    "image": "captures/santa.jpg",
    "imageLabel": "静音实机截图",
    "license": "项目未声明 · 依赖有授权",
    "reviewOrder": 2,
    "repoUrl": "https://github.com/thestringtheories/Santa-Game"
  },
  {
    "id": "saltwake",
    "name": "Saltwake: The Drowned Abbey",
    "author": "chojondocho",
    "genre": "3D 地牢 · 海洋恐怖",
    "note": "潜入被淹没的修道院，寻找丢失的钟舌并在昏暗中探索。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "single",
    "rights": "仓库 README 声明 MIT。再分发代码时保留版权与许可声明。",
    "authorUrl": "https://github.com/chojondocho",
    "play": "https://chojondocho.github.io/single-html-game-bench/codex-gpt-6-2-astra-max.html",
    "evidence": "单 HTML 游戏基准把这一产物明确标为 Codex · GPT-6.2 Astra Max，并列明统一提示词与无人工玩法改动。",
    "refs": [
      [
        "作者基准、提示词及许可证",
        "https://chojondocho.github.io/single-html-game-bench/"
      ],
      [
        "游戏条目与控制说明",
        "https://aigamelib.com/games/saltwake-the-drowned-abbey"
      ]
    ],
    "image": "captures/saltwake.jpg",
    "imageLabel": "静音实机截图",
    "license": "MIT",
    "reviewOrder": 3,
    "repoUrl": "https://github.com/chojondocho/single-html-game-bench/blob/main/codex-gpt-6-2-astra-max.html"
  },
  {
    "id": "dot-rumble",
    "name": "Dot Rumble",
    "author": "Chaow Wu · OpenAI",
    "genre": "3D 平台格斗",
    "note": "从六位毛绒角色中选择，练习跳跃与连招，再挑战对手。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "entry",
    "rights": "仅按原作者入口试玩。源码、素材与再发布授权未见声明。",
    "authorUrl": "https://developers.openai.com/showcase/dot-rumble",
    "play": "https://dot-rumble-arcade.openai.chatgpt.site/",
    "demo": "https://developers.openai.com/showcase/dot-rumble",
    "evidence": "OpenAI Showcase 标明 GPT-6.2 Astra，展示将角色外形变成骨骼动画和可操作阵容的阶段。",
    "refs": [
      [
        "OpenAI 构建记录与画面",
        "https://developers.openai.com/showcase/dot-rumble"
      ],
      [
        "操作与对战说明",
        "https://aigamelib.com/games/dot-rumble"
      ]
    ],
    "image": "captures/dot-rumble.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 4
  },
  {
    "id": "tidepost",
    "name": "潮邮局 · Tidepost",
    "author": "Thweki（发布）",
    "genre": "像素航海 · 投递与解谜",
    "note": "航行至港口抛索投递，在另一模式用海图解回合制谜题。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "project",
    "rights": "原创源码与素材无项目级授权。Godot 为 MIT，Noto 字体为 OFL 1.1。",
    "authorUrl": "https://github.com/Thweki",
    "demo": "https://github.com/Thweki/tidepost/releases",
    "image": "https://raw.githubusercontent.com/Thweki/tidepost/main/docs/browser-smoke-2026-11-18/tidepost-gameplay-pulse.png",
    "imageLabel": "发布者实机截图",
    "evidence": "发布者 README 把 Godot 4.7.2 源码与桌面包标为 GPT-6.2 Astra 测试交付，并保留原说明。提示词、耗时和推理参数未公开。",
    "access": "发行页提供 Windows、macOS、Linux 桌面包、Web 包及一分钟演示；桌面包无需安装 Godot。",
    "refs": [
      [
        "发布者 README 和源码树",
        "https://github.com/Thweki/tidepost"
      ],
      [
        "发行文件和演示",
        "https://github.com/Thweki/tidepost/releases"
      ],
      [
        "浏览器测试记录及同一处截图",
        "https://github.com/Thweki/tidepost/blob/main/TESTING.md"
      ]
    ],
    "license": "原创未授权 · 引擎和字体另有许可",
    "reviewOrder": 5,
    "repoUrl": "https://github.com/Thweki/tidepost",
    "url": "https://github.com/Thweki/tidepost/releases",
    "local": "发行页提供 Windows、macOS、Linux 桌面包、Web 包及一分钟演示；桌面包无需安装 Godot。"
  },
  {
    "id": "sunset-mail",
    "name": "夕阳邮航",
    "author": "jambocoder159",
    "genre": "猫咪飞行 · 投递",
    "note": "驾驶猫咪邮机穿过晚霞，完成短程投递。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "project",
    "rights": "仓库根目录未见许可文件。原创图像和代码的再使用许可待核。",
    "authorUrl": "https://github.com/jambocoder159",
    "play": "https://jambocoder159.github.io/ai-game-duel/#r1-astra",
    "evidence": "作者把第一回合的 Astra 版本单独标注，记录用时 13 分 44 秒，模型先生成五张图再编写 game.js。",
    "access": "页内选第一回合与 GPT-6.2 Astra。",
    "refs": [
      [
        "作者 README · 第一回合",
        "https://github.com/jambocoder159/ai-game-duel#readme"
      ],
      [
        "仓库版本目录",
        "https://github.com/jambocoder159/ai-game-duel/tree/main/versions"
      ]
    ],
    "image": "captures/sunset-mail.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 6,
    "repoUrl": "https://github.com/jambocoder159/ai-game-duel"
  },
  {
    "id": "alpine-rush",
    "name": "Alpine Rush",
    "author": "Mia 码上 AI",
    "genre": "3D 弹球台",
    "note": "靠左右挡板维持弹球，空格蓄力发射。手机可点按屏幕两侧。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "entry",
    "rights": "仅按原作者入口试玩。源码、素材与再发布授权未见声明。",
    "authorUrl": "https://miaainow.com/zh/",
    "play": "https://miaainow.com/zh/lab/gpt-62-pinball/",
    "demo": "https://miaainow.com/zh/gpt-62-day-one/",
    "evidence": "作者的三版本实测明确将 Alpine Rush 标为 GPT-6.2 Astra，并分别公布三台的用时和价格。",
    "access": "试玩页默认选中 Alpine Rush。",
    "refs": [
      [
        "作者视频与制作笔记",
        "https://miaainow.com/zh/gpt-62-day-one/"
      ],
      [
        "带模型标签的试玩台",
        "https://miaainow.com/zh/lab/gpt-62-pinball/"
      ],
      [
        "Mia 作者 YouTube 视频",
        "https://www.youtube.com/watch?v=0wuC9d-zrBE"
      ]
    ],
    "image": "captures/alpine-rush.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 7
  },
  {
    "id": "mall-action",
    "name": "Mall Action",
    "author": "rlorca",
    "genre": "8 位潜入 · 商场电梯",
    "note": "乘电梯、搜遍商店、避开追兵，收齐六个包裹后开旅行车脱身。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "project",
    "rights": "项目代码和素材的授权未见声明。可使用作者提供的入口。",
    "authorUrl": "https://github.com/rlorca",
    "play": "https://rlorca.github.io/mall-action/gpt-6.2-astra-xhigh/",
    "image": "https://raw.githubusercontent.com/rlorca/mall-action/gpt-6-2-astra-xhigh/docs/mall.png",
    "evidence": "作者同题一次生成基准将此版本标记为 GPT-6.2 Astra xhigh，单独保留项目分支、测试与 Pages。",
    "refs": [
      [
        "模型、分支与试玩对照",
        "https://github.com/rlorca/mall-action"
      ],
      [
        "Astra 专属分支与实机截图",
        "https://github.com/rlorca/mall-action/tree/gpt-6-2-astra-xhigh"
      ],
      [
        "该版本评估",
        "https://rlorca.github.io/mall-action/reviews/index.html"
      ]
    ],
    "demo": "https://github.com/rlorca/mall-action/tree/gpt-6-2-astra-xhigh",
    "license": "许可证未声明",
    "reviewOrder": 8,
    "repoUrl": "https://github.com/rlorca/mall-action/tree/gpt-6-2-astra-xhigh"
  },
  {
    "id": "lantern-drift",
    "name": "Lantern Drift · 天灯漂流",
    "author": "jambocoder159",
    "genre": "木刻风 · 天灯街机",
    "note": "左右漂移控制天灯，收集火星维持灯焰，穿过平溪天灯节的木刻风夜景。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "build",
    "rights": "作者说明版本目录存放解包后的部署文件。根目录未见许可证。",
    "authorUrl": "https://github.com/jambocoder159",
    "play": "https://jambocoder159.github.io/ai-game-duel/#r2-astra",
    "evidence": "作者明确标注第二回合的 GPT-6.2 Astra 版本，注明 GG-skills v4.0、React 19、TypeScript、42 分 11 秒和零人工介入。",
    "access": "页内选第二回合与 GPT-6.2 Astra。",
    "refs": [
      [
        "作者 README · 第二回合",
        "https://github.com/jambocoder159/ai-game-duel#readme"
      ],
      [
        "仓库版本目录",
        "https://github.com/jambocoder159/ai-game-duel/tree/main/versions"
      ]
    ],
    "image": "captures/lantern-drift.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 9,
    "repoUrl": "https://github.com/jambocoder159/ai-game-duel"
  },
  {
    "id": "black-mass",
    "name": "Black Mass — Cathedral of Ash",
    "author": "Thomas Ricouard",
    "genre": "哥特生存 · 第一人称战斗",
    "note": "在哥特教堂抵挡敌群，同时管理血量、护甲、弹药和存活时间。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "entry",
    "rights": "仅按原作者入口试玩。源码、素材与再发布授权未见声明。",
    "authorUrl": "https://x.com/Dimillian",
    "play": "https://black-mass-survivor.openai.chatgpt.site/",
    "demo": "https://x.com/Dimillian/status/2122920777276162489",
    "evidence": "作者发布实机演示。归档记录作者把游戏交给 GPT-6.2 Astra 构建，并链接同一作品的原试玩。Chrome 已进入第一人称战斗，确认了弹药、血量和计时。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/Dimillian/status/2122920777276162489"
      ],
      [
        "带模型标签、实机片段的归档",
        "https://dropday.ai/c/black-mass-cathedral-of-ash"
      ]
    ],
    "image": "captures/black-mass.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 10
  },
  {
    "id": "undertow-fm",
    "name": "逆潮电台 · Undertow FM",
    "author": "Thweki（发布）",
    "genre": "中文像素 · 横版动作",
    "note": "在海边小城的维修铺起步，边推进横版关卡边拾回广播接力。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "project",
    "rights": "原创代码、故事和素材未声明项目许可。引擎为 MIT，Fusion Pixel 为 SIL OFL，第三方文件随包附声明。",
    "authorUrl": "https://github.com/Thweki",
    "play": "https://page.thweki.com:8443/undertow-fm/",
    "image": "https://raw.githubusercontent.com/Thweki/undertow-fm/main/docs/browser-review/gameplay-movement.png",
    "imageLabel": "发布者实机截图",
    "evidence": "源码快照公开注明 GPT-6.2 Astra 测试系列，Godot Web 导出与兼容补丁在快照之后加入。仓库有完整 GDScript、场景和图像、音频资源。",
    "access": "独立 Chrome 已加载网页主菜单。作者记录了浏览器中的移动与教程校频，另有便携发行包。",
    "refs": [
      [
        "完整 Godot 源码与贡献说明",
        "https://github.com/Thweki/undertow-fm"
      ],
      [
        "便携包与 Web 导出",
        "https://github.com/Thweki/undertow-fm/releases"
      ],
      [
        "发布者实机截图和局限",
        "https://github.com/Thweki/undertow-fm/tree/main/docs/browser-review"
      ]
    ],
    "license": "原创未授权 · 引擎和字体另有许可",
    "reviewOrder": 11,
    "repoUrl": "https://github.com/Thweki/undertow-fm",
    "url": "https://github.com/Thweki/undertow-fm/releases",
    "local": "独立 Chrome 已加载网页主菜单。作者记录了浏览器中的移动与教程校频，另有便携发行包。"
  },
  {
    "id": "operation-fracture",
    "name": "断环行动 · 寂静花园",
    "author": "Thweki（发布）",
    "genre": "第一人称 · 战区街机",
    "note": "进入分波次战区，控制角色移动与使用脉冲能力。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "project",
    "rights": "原创源码、页面和资源无项目许可证。Three.js 与 esbuild 依各自 MIT 条款。",
    "authorUrl": "https://github.com/Thweki",
    "demo": "https://github.com/Thweki/operation-fracture/releases/tag/v1.0.0",
    "image": "https://raw.githubusercontent.com/Thweki/operation-fracture/main/docs/browser-smoke-2026-11-18/fracture-gameplay-pulse.webp",
    "imageLabel": "发布者实机截图",
    "evidence": "发布者把源码、单页离线构建和原测试演示明确归因于 GPT-6.2 Astra。仓库保留 Three.js 源码与原运行说明。",
    "access": "发行页解压离线 Web ZIP，用支持 WebGL 2 的 Chrome 打开 dist/index.html。发布者确认进入战区和特效按键，移动与后续关卡未核。",
    "refs": [
      [
        "发布者 README 与源码树",
        "https://github.com/Thweki/operation-fracture"
      ],
      [
        "离线试玩包、一分钟录像与校验和",
        "https://github.com/Thweki/operation-fracture/releases/tag/v1.0.0"
      ],
      [
        "测试记录",
        "https://github.com/Thweki/operation-fracture/blob/main/TESTING.md"
      ]
    ],
    "license": "原创未授权 · 依赖另有许可",
    "reviewOrder": 12,
    "repoUrl": "https://github.com/Thweki/operation-fracture",
    "url": "https://github.com/Thweki/operation-fracture/releases",
    "local": "发行页解压离线 Web ZIP，用支持 WebGL 2 的 Chrome 打开 dist/index.html。发布者确认进入战区和特效按键，移动与后续关卡未核。"
  },
  {
    "id": "sandlot",
    "name": "Sandlot Social",
    "author": "Pat Simmons",
    "genre": "街坊棒球",
    "note": "在街坊球场投球、挥棒和跑垒，完成一场棒球对决。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "entry",
    "rights": "仅按原作者入口试玩。源码、素材与再发布授权未见声明。",
    "authorUrl": "https://www.aiformortals.co/",
    "play": "https://www.aiformortals.co/builds/backyard-baseball-gpt-6-2-astra",
    "demo": "https://www.aiformortals.co/built-by-pat/a-backyard-baseball-video-game-yrwzne",
    "image": "captures/sandlot.jpg",
    "evidence": "作者在 Codex 用明确的 GPT-6.2 Astra 进行首轮构建，并把该模型的产物与旧版 Astra、Fable 及 Opus 分开展示。",
    "refs": [
      [
        "作者模型对照与实机画面",
        "https://www.aiformortals.co/built-by-pat/a-backyard-baseball-video-game-yrwzne"
      ],
      [
        "原始制作记录",
        "https://www.aiformortals.co/blog/gpt-6-2-astra"
      ]
    ],
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 13
  },
  {
    "id": "pocket-roads",
    "name": "Pocket Roads: Midnight Pass",
    "author": "aartiles24",
    "genre": "夜间拉力 · 计时",
    "note": "在瑞士阿尔卑斯山夜路独跑 3.20 公里，通过四个检查点。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "project",
    "rights": "GitHub 公布了静态项目文件，目录与仓库根未找到独立许可证。辅助生成的美术和车模复用许可需单独核对。",
    "authorUrl": "https://x.com/aartiles24",
    "play": "https://aartiles.github.io/local-model-benchmarks-site/demos/pocket-roads/",
    "demo": "https://x.com/aartiles24/status/2122811749019824368",
    "evidence": "作者的原帖把游戏代码归于 Codex 的 GPT-6.2 Astra，并分别注明美术用 Qwen-Image、车辆建模用 TRELLIS.2。版本说明经收录页转录。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/aartiles24/status/2122811749019824368"
      ],
      [
        "制作归因、操控与原试玩链接",
        "https://aigamelib.com/games/pocket-roads-midnight-pass"
      ],
      [
        "原仓库与静态项目文件",
        "https://github.com/aartiles/local-model-benchmarks-site/tree/main/demos/pocket-roads"
      ]
    ],
    "image": "captures/pocket-roads.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 14,
    "repoUrl": "https://github.com/aartiles/local-model-benchmarks-site/tree/main/demos/pocket-roads"
  },
  {
    "id": "ax-ball",
    "name": "AX Ball",
    "author": "goyozi",
    "genre": "打砖块 · 关卡编辑",
    "note": "通过球拍、道具和反弹清除砖块，提供战役、街机分数和关卡编辑。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "entry",
    "rights": "仅按原作者入口试玩。源码、素材与再发布授权未见声明。",
    "authorUrl": "https://news.ycombinator.com/user?id=goyozi",
    "play": "https://goyozi.github.io/ax-ball/",
    "evidence": "作者在 Hacker News 上直接给出各模型的独立试玩地址，将 AX Ball 标为 Astra 6.2，另一个 SX Ball 属于 Sol 6.2。",
    "refs": [
      [
        "作者 Hacker News 发布评论",
        "https://news.ycombinator.com/item?id=50537589"
      ]
    ],
    "image": "captures/ax-ball.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 15
  },
  {
    "id": "flying-anglia",
    "name": "Flying Anglia",
    "author": "baturyilmaz",
    "genre": "ESP32 · 体感飞行",
    "note": "倾斜两英寸屏幕的 ESP32 开发板驾车飞行，在火车进隧道前追进金环。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "project",
    "rights": "仓库根目录无项目许可证；作品使用既有虚构角色相关元素，名称和素材权利需单独核对。",
    "authorUrl": "https://github.com/baturyilmaz",
    "demo": "https://www.reddit.com/r/codex/comments/1xziri2/tested_62_astra_by_having_it_build_a_game_for_a_2/",
    "image": "https://raw.githubusercontent.com/baturyilmaz/flying-anglia/main/docs/screenshots/chase.png",
    "evidence": "作者 README 明示 GPT-6.2 Astra 和 GeaStack，并在 Reddit 提供硬件实拍、项目地址。仓库含 TypeScript、原生画面播放与固件构建脚本。",
    "access": "需 Waveshare ESP32-S3 Touch AMOLED 2.06、Node.js 24 和 ESP-IDF 6，按 README 经 USB 烧录。",
    "refs": [
      [
        "作者操作、构建命令与实机截图",
        "https://github.com/baturyilmaz/flying-anglia"
      ],
      [
        "作者硬件演示及归因",
        "https://www.reddit.com/r/codex/comments/1xziri2/tested_62_astra_by_having_it_build_a_game_for_a_2/"
      ]
    ],
    "license": "许可证未声明",
    "reviewOrder": 16,
    "repoUrl": "https://github.com/baturyilmaz/flying-anglia",
    "url": "https://github.com/baturyilmaz/flying-anglia#build-and-flash",
    "local": "需 Waveshare ESP32-S3 Touch AMOLED 2.06、Node.js 24 和 ESP-IDF 6，按 README 经 USB 烧录。"
  },
  {
    "id": "pacbench",
    "name": "Bitcade Pac-Man",
    "author": "jonclegg",
    "genre": "迷宫追逐 · 模型对照",
    "note": "在霓虹迷宫收集豆子，躲开幽灵，并用能量豆反击。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "single",
    "rights": "项目许可未见声明。Pac-Man 名称与既有游戏资产权利另行核对。",
    "authorUrl": "https://github.com/jonclegg",
    "play": "https://jonclegg.github.io/pacman-bakeoff/entries/gpt-6.2-astra.html",
    "evidence": "PacBench 的逐条模型与 harness 记录把此 HTML 标为 GPT-6.2 Astra · Codex High。",
    "refs": [
      [
        "作者跑分、提示词及各模型入口",
        "https://jonclegg.github.io/pacman-bakeoff/"
      ],
      [
        "项目源码树",
        "https://github.com/jonclegg/pacman-bakeoff"
      ]
    ],
    "image": "captures/pacbench.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 17,
    "repoUrl": "https://github.com/jonclegg/pacman-bakeoff"
  },
  {
    "id": "aphelion",
    "name": "Aphelion: Ardennes Grand Prix",
    "author": "monokern",
    "genre": "方程式赛车 · 三圈赛",
    "note": "在斯帕赛道与五位对手比拼，留意每圈用时、碰撞损伤和弯道提示。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "entry",
    "rights": "仅按原作者入口试玩。源码、素材与再发布授权未见声明。",
    "authorUrl": "https://x.com/monokern",
    "play": "https://race-sepia.vercel.app/",
    "evidence": "作者在发布帖归因 GPT-6.2 Astra，并在后续回复分享原版试玩。AIGameLib 转录了这两条出处。",
    "refs": [
      [
        "作者发布帖",
        "https://x.com/monokern/status/2122804984349696477"
      ],
      [
        "作者分享试玩回复",
        "https://x.com/monokern/status/2122805083582918959"
      ],
      [
        "作者发布帖和追加试玩链接",
        "https://aigamelib.com/games/aphelion-ardennes-grand-prix"
      ]
    ],
    "image": "captures/aphelion.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 18
  },
  {
    "id": "spillway",
    "name": "Spillway Run",
    "author": "KostiKoNeuro",
    "genre": "迷你高尔夫 · 3D",
    "note": "选择风险更高的吊桥捷径，或走有保险障碍的长路线，拖动球以调整推杆力度。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "project",
    "rights": "项目代码和素材的授权未见声明。可使用作者提供的入口。",
    "authorUrl": "https://www.youtube.com/@kosti_neuro",
    "play": "https://kostikoneuro.github.io/astra-6-2-solo/4-minigolf/game/",
    "evidence": "作者在 GitHub 逐题记载 Codex 的 GPT-6.2 Astra（xhigh）运行，每题一次提示且无手工修订。高尔夫用时 42 分 23 秒。",
    "refs": [
      [
        "作者五题、耗时与模型记录",
        "https://github.com/KostiKoNeuro/astra-6-2-solo"
      ],
      [
        "高尔夫源码目录",
        "https://github.com/KostiKoNeuro/astra-6-2-solo/tree/main/4-minigolf"
      ],
      [
        "作者测试含画面与球道说明",
        "https://kostikoneuro.github.io/astra-6-2-solo/4-minigolf/?lang=en"
      ]
    ],
    "image": "captures/spillway.jpg",
    "imageLabel": "静音实机截图",
    "access": "Chrome 已打开实际球道；拖拽球后释放，声音默认关闭。",
    "license": "许可证未声明",
    "reviewOrder": 19,
    "repoUrl": "https://github.com/KostiKoNeuro/astra-6-2-solo/tree/main/4-minigolf"
  },
  {
    "id": "aa-pinball",
    "name": "High Tide — Undertow Arcade",
    "author": "Artificial Analysis · AA-3D",
    "authorUrl": "https://artificialanalysis.ai/evaluations/aa-3d",
    "kind": "game",
    "genre": "3D 弹球 · 海洋街机",
    "note": "用三颗球维持比赛，打上 Curl Ramp、触发目标并拉高倍率。",
    "status": "target",
    "version": "GPT-6.2 Astra Max",
    "source": "single",
    "rights": "Explorer 以单 HTML 嵌入评测产物。未见原仓库、独立授权文件或再发布许可。",
    "play": "https://artificialanalysis.ai/3d/explorer?task=playable-pinball&model=gpt-6-2-astra",
    "image": "captures/aa-pinball.jpg",
    "imageLabel": "静音实机截图",
    "evidence": "AA-3D Explorer 在此具体任务上明确标注 GPT-6.2 Astra (max)，Chrome 已复核页面、产物标题、操作说明和真实渲染画面。与独立发布的作品为不同的评测任务样本。",
    "refs": [
      [
        "带任务和模型标注的 AA-3D 作品页",
        "https://artificialanalysis.ai/3d/explorer?task=playable-pinball&model=gpt-6-2-astra"
      ],
      [
        "Artificial Analysis 评测方法",
        "https://artificialanalysis.ai/methodology/aa-3d"
      ]
    ],
    "license": "产物许可未声明",
    "reviewOrder": 20
  },
  {
    "id": "aa-solitaire",
    "name": "Solstice Card Club",
    "author": "Artificial Analysis · AA-3D",
    "authorUrl": "https://artificialanalysis.ai/evaluations/aa-3d",
    "kind": "game",
    "genre": "纸牌 · 克朗代克接龙",
    "note": "拖动纸牌按红黑间隔叠放，集齐四个花色。种子可复玩同一牌局。",
    "status": "target",
    "version": "GPT-6.2 Astra Max",
    "source": "single",
    "rights": "Explorer 以单 HTML 嵌入评测产物。未见原仓库、独立授权文件或再发布许可。",
    "play": "https://artificialanalysis.ai/3d/explorer?task=playable-solitaire&model=gpt-6-2-astra",
    "image": "captures/aa-solitaire.jpg",
    "imageLabel": "静音实机截图",
    "evidence": "AA-3D Explorer 在此具体任务上明确标注 GPT-6.2 Astra (max)，Chrome 已复核页面、产物标题、操作说明和真实渲染画面。与独立发布的作品为不同的评测任务样本。",
    "refs": [
      [
        "带任务和模型标注的 AA-3D 作品页",
        "https://artificialanalysis.ai/3d/explorer?task=playable-solitaire&model=gpt-6-2-astra"
      ],
      [
        "Artificial Analysis 评测方法",
        "https://artificialanalysis.ai/methodology/aa-3d"
      ]
    ],
    "license": "产物许可未声明",
    "reviewOrder": 21
  },
  {
    "id": "aa-mountain-bike",
    "name": "Ridgeline — Hemlock Ridge",
    "author": "Artificial Analysis · AA-3D",
    "authorUrl": "https://artificialanalysis.ai/evaluations/aa-3d",
    "kind": "game",
    "genre": "山地骑行 · 技术赛道",
    "note": "控制踏板、刹车和转向，在树林坡道上通过弯墙和地形障碍。",
    "status": "target",
    "version": "GPT-6.2 Astra Max",
    "source": "single",
    "rights": "Explorer 以单 HTML 嵌入评测产物。未见原仓库、独立授权文件或再发布许可。",
    "play": "https://artificialanalysis.ai/3d/explorer?task=mountain-bike-trail&model=gpt-6-2-astra",
    "image": "captures/aa-mountain-bike.jpg",
    "imageLabel": "静音实机截图",
    "evidence": "AA-3D Explorer 在此具体任务上明确标注 GPT-6.2 Astra (max)，Chrome 已复核页面、产物标题、操作说明和真实渲染画面。与独立发布的作品为不同的评测任务样本。",
    "refs": [
      [
        "带任务和模型标注的 AA-3D 作品页",
        "https://artificialanalysis.ai/3d/explorer?task=mountain-bike-trail&model=gpt-6-2-astra"
      ],
      [
        "Artificial Analysis 评测方法",
        "https://artificialanalysis.ai/methodology/aa-3d"
      ]
    ],
    "license": "产物许可未声明",
    "reviewOrder": 22
  },
  {
    "id": "aa-dodgeball",
    "name": "Sideline — Dockside Yard",
    "author": "Artificial Analysis · AA-3D",
    "authorUrl": "https://artificialanalysis.ai/evaluations/aa-3d",
    "kind": "game",
    "genre": "躲避球 · 6 对 6",
    "note": "加入第一人称球赛，投球、接球、跳跃及躲闪，以淘汰对方六人为目标。",
    "status": "target",
    "version": "GPT-6.2 Astra Max",
    "source": "single",
    "rights": "Explorer 以单 HTML 嵌入评测产物。未见原仓库、独立授权文件或再发布许可。",
    "play": "https://artificialanalysis.ai/3d/explorer?task=dodgeball-match&model=gpt-6-2-astra",
    "image": "captures/aa-dodgeball.jpg",
    "imageLabel": "静音实机截图",
    "evidence": "AA-3D Explorer 在此具体任务上明确标注 GPT-6.2 Astra (max)，Chrome 已复核页面、产物标题、操作说明和真实渲染画面。与独立发布的作品为不同的评测任务样本。",
    "refs": [
      [
        "带任务和模型标注的 AA-3D 作品页",
        "https://artificialanalysis.ai/3d/explorer?task=dodgeball-match&model=gpt-6-2-astra"
      ],
      [
        "Artificial Analysis 评测方法",
        "https://artificialanalysis.ai/methodology/aa-3d"
      ]
    ],
    "license": "产物许可未声明",
    "reviewOrder": 23
  },
  {
    "id": "aa-jigsaw",
    "name": "Piecework — The Starry Night",
    "author": "Artificial Analysis · AA-3D",
    "authorUrl": "https://artificialanalysis.ai/evaluations/aa-3d",
    "kind": "game",
    "genre": "3D 拼图 · 500 片",
    "note": "拖动、旋转和拼合《星夜》的 500 块拼片，也可让示范继续拼装。",
    "status": "target",
    "version": "GPT-6.2 Astra Max",
    "source": "single",
    "rights": "Explorer 以单 HTML 嵌入评测产物。未见原仓库、独立授权文件或再发布许可。",
    "play": "https://artificialanalysis.ai/3d/explorer?task=starry-night-puzzle&model=gpt-6-2-astra",
    "image": "captures/aa-jigsaw.jpg",
    "imageLabel": "静音实机截图",
    "evidence": "AA-3D Explorer 在此具体任务上明确标注 GPT-6.2 Astra (max)，Chrome 已复核页面、产物标题、操作说明和真实渲染画面。与独立发布的作品为不同的评测任务样本。",
    "refs": [
      [
        "带任务和模型标注的 AA-3D 作品页",
        "https://artificialanalysis.ai/3d/explorer?task=starry-night-puzzle&model=gpt-6-2-astra"
      ],
      [
        "Artificial Analysis 评测方法",
        "https://artificialanalysis.ai/methodology/aa-3d"
      ]
    ],
    "license": "产物许可未声明",
    "reviewOrder": 24
  },
  {
    "id": "aa-glider",
    "name": "Liftline — Alpine Soaring Simulator",
    "author": "Artificial Analysis · AA-3D",
    "authorUrl": "https://artificialanalysis.ai/evaluations/aa-3d",
    "kind": "game",
    "genre": "滑翔模拟 · 阿尔卑斯山",
    "note": "脱离拖缆、寻找热气流与山脊升力，利用襟翼和空气制动维持航线。",
    "status": "target",
    "version": "GPT-6.2 Astra Max",
    "source": "single",
    "rights": "Explorer 以单 HTML 嵌入评测产物。未见原仓库、独立授权文件或再发布许可。",
    "play": "https://artificialanalysis.ai/3d/explorer?task=glider-soaring&model=gpt-6-2-astra",
    "image": "captures/aa-glider.jpg",
    "imageLabel": "静音实机截图",
    "evidence": "AA-3D Explorer 在此具体任务上明确标注 GPT-6.2 Astra (max)，Chrome 已复核页面、产物标题、操作说明和真实渲染画面。与独立发布的作品为不同的评测任务样本。",
    "refs": [
      [
        "带任务和模型标注的 AA-3D 作品页",
        "https://artificialanalysis.ai/3d/explorer?task=glider-soaring&model=gpt-6-2-astra"
      ],
      [
        "Artificial Analysis 评测方法",
        "https://artificialanalysis.ai/methodology/aa-3d"
      ]
    ],
    "license": "产物许可未声明",
    "reviewOrder": 25
  },
  {
    "id": "aa-detective",
    "name": "The Gilded Rook",
    "author": "Artificial Analysis · AA-3D",
    "authorUrl": "https://artificialanalysis.ai/evaluations/aa-3d",
    "kind": "game",
    "genre": "交互推理 · 密室搜证",
    "note": "在书房内查看展品与线索，使用探案日志追踪案件。",
    "status": "target",
    "version": "GPT-6.2 Astra Max",
    "source": "single",
    "rights": "Explorer 以单 HTML 嵌入评测产物。未见原仓库、独立授权文件或再发布许可。",
    "play": "https://artificialanalysis.ai/3d/explorer?task=detective-murder-room&model=gpt-6-2-astra",
    "image": "captures/aa-detective.jpg",
    "imageLabel": "静音实机截图",
    "evidence": "AA-3D Explorer 在此具体任务上明确标注 GPT-6.2 Astra (max)，Chrome 已复核页面、产物标题、操作说明和真实渲染画面。与独立发布的作品为不同的评测任务样本。",
    "refs": [
      [
        "带任务和模型标注的 AA-3D 作品页",
        "https://artificialanalysis.ai/3d/explorer?task=detective-murder-room&model=gpt-6-2-astra"
      ],
      [
        "Artificial Analysis 评测方法",
        "https://artificialanalysis.ai/methodology/aa-3d"
      ]
    ],
    "license": "产物许可未声明",
    "reviewOrder": 26
  },
  {
    "id": "mia-bath",
    "name": "Fault in the Bath",
    "author": "MiaAI Lab",
    "genre": "瓷砖拼图",
    "note": "旋转错位的浴室瓷砖，使钴蓝环形花纹连续。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "single",
    "rights": "仓库可查看产物，项目复用条款未见声明。",
    "authorUrl": "https://github.com/MiaAI-Lab",
    "play": "https://miaai-lab.github.io/GPT-6.2-Astra-100-HTML-Files/009-tile-fault.html",
    "image": "captures/mia-bath.jpg",
    "imageLabel": "静音实机截图",
    "evidence": "MiaAI Lab 的 100 HTML 样本用明确的 GPT-6.2 Astra 生成，每题保留原提示词与自包含 HTML。该项包含独立的操作目标。 Chrome 已打开玩法界面并核对操作目标。",
    "refs": [
      [
        "作者原始提示词",
        "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files/blob/main/009-tile-fault.txt"
      ],
      [
        "模型与画面记录",
        "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files"
      ]
    ],
    "license": "许可证未声明",
    "reviewOrder": 27,
    "repoUrl": "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files/blob/main/009-tile-fault.html"
  },
  {
    "id": "mia-chalk",
    "name": "The Chalk Yard",
    "author": "MiaAI Lab",
    "genre": "时机 · 堆叠街机",
    "note": "从轨道落下白垩石板，保住层间重叠，以尽量少的裁切叠得更高。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "single",
    "rights": "仓库可查看产物，项目复用条款未见声明。",
    "authorUrl": "https://github.com/MiaAI-Lab",
    "play": "https://miaai-lab.github.io/GPT-6.2-Astra-100-HTML-Files/042-chalk-quarry.html",
    "image": "captures/mia-chalk.jpg",
    "imageLabel": "静音实机截图",
    "evidence": "MiaAI Lab 的 100 HTML 样本用明确的 GPT-6.2 Astra 生成，每题保留原提示词与自包含 HTML。该项包含独立的操作目标。 Chrome 已打开玩法界面并核对操作目标。",
    "refs": [
      [
        "作者原始提示词",
        "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files/blob/main/042-chalk-quarry.txt"
      ],
      [
        "模型与画面记录",
        "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files"
      ]
    ],
    "license": "许可证未声明",
    "reviewOrder": 28,
    "repoUrl": "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files/blob/main/042-chalk-quarry.html"
  },
  {
    "id": "mia-egg",
    "name": "The Patient Egg",
    "author": "MiaAI Lab",
    "genre": "物理 · 平衡控制",
    "note": "反向倾斜横梁，减慢蛋的滚动，再让它停稳在中间的巢位。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "single",
    "rights": "仓库可查看产物，项目复用条款未见声明。",
    "authorUrl": "https://github.com/MiaAI-Lab",
    "play": "https://miaai-lab.github.io/GPT-6.2-Astra-100-HTML-Files/074-egg-balance.html",
    "image": "captures/mia-egg.jpg",
    "imageLabel": "静音实机截图",
    "evidence": "MiaAI Lab 的 100 HTML 样本用明确的 GPT-6.2 Astra 生成，每题保留原提示词与自包含 HTML。该项包含独立的操作目标。 Chrome 已打开玩法界面并核对操作目标。",
    "refs": [
      [
        "作者原始提示词",
        "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files/blob/main/074-egg-balance.txt"
      ],
      [
        "模型与画面记录",
        "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files"
      ]
    ],
    "license": "许可证未声明",
    "reviewOrder": 29,
    "repoUrl": "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files/blob/main/074-egg-balance.html"
  },
  {
    "id": "mia-clock",
    "name": "The Keyless Works",
    "author": "MiaAI Lab",
    "genre": "齿轮 · 机械解谜",
    "note": "逐齿推进右侧转轮，等待两个红色标记对准、锁销落下。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "single",
    "rights": "仓库可查看产物，项目复用条款未见声明。",
    "authorUrl": "https://github.com/MiaAI-Lab",
    "play": "https://miaai-lab.github.io/GPT-6.2-Astra-100-HTML-Files/097-lockstep.html",
    "image": "captures/mia-clock.jpg",
    "imageLabel": "静音实机截图",
    "evidence": "MiaAI Lab 的 100 HTML 样本用明确的 GPT-6.2 Astra 生成，每题保留原提示词与自包含 HTML。该项包含独立的操作目标。 Chrome 已打开玩法界面并核对操作目标。",
    "refs": [
      [
        "作者原始提示词",
        "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files/blob/main/097-lockstep.txt"
      ],
      [
        "模型与画面记录",
        "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files"
      ]
    ],
    "license": "许可证未声明",
    "reviewOrder": 30,
    "repoUrl": "https://github.com/MiaAI-Lab/GPT-6.2-Astra-100-HTML-Files/blob/main/097-lockstep.html"
  },
  {
    "id": "space-2601",
    "name": "Space 2601AE",
    "author": "Adrian · AJankovic234",
    "genre": "太空经济 · 货运与舰船",
    "note": "在六个星区停靠与交易，接货运任务、升级船体并遭遇封锁战。",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "source": "project",
    "rights": "仓库可查看产物，项目复用条款未见声明。",
    "authorUrl": "https://github.com/AJankovic234",
    "image": "https://raw.githubusercontent.com/AJankovic234/fable-space-engine/main/artifacts/sektorflug/flugoptik.jpg",
    "imageLabel": "作者实机截图",
    "evidence": "作者变更日志逐项列出 GPT-6.2 Astra 对货运、交易、船坞、升级与测试的贡献。项目初版由 Claude Fable 5.2 制作，后续还使用其他模型。",
    "access": "用 Node.js 22.12+ 和 .NET SDK 10；按 README 安装依赖、恢复工具再启动 Vite，或通过 Docker 运行。无发布包。",
    "refs": [
      [
        "作者逐项模型贡献记录",
        "https://github.com/AJankovic234/fable-space-engine#personal-benchmark"
      ],
      [
        "代码与启动说明",
        "https://github.com/AJankovic234/fable-space-engine#quick-start"
      ],
      [
        "现场画面目录",
        "https://github.com/AJankovic234/fable-space-engine/tree/main/artifacts/sektorflug"
      ]
    ],
    "license": "许可证未声明",
    "reviewOrder": 31,
    "repoUrl": "https://github.com/AJankovic234/fable-space-engine",
    "url": "https://github.com/AJankovic234/fable-space-engine#quick-start",
    "local": "用 Node.js 22.12+ 和 .NET SDK 10；按 README 安装依赖、恢复工具再启动 Vite，或通过 Docker 运行。无发布包。"
  },
  {
    "id": "void-explorer",
    "name": "Void Explorer",
    "author": "Thomas Ricouard · OpenAI",
    "authorUrl": "https://developers.openai.com/showcase/void-explorer",
    "genre": "程序化太空探索",
    "note": "驾驶飞船从星际空间进入大气层并降落，之后可以步行考察。",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "source": "entry",
    "rights": "OpenAI 提供浏览器体验。项目源码和素材的独立复用授权未见声明。",
    "play": "https://void-explorer.openai.chatgpt.site/",
    "demo": "https://developers.openai.com/blog/how-to-build-games-with-astra",
    "evidence": "OpenAI Developers 的该作品构建记录明确标注 GPT-6 Astra，并提供构建步骤和试听或实机画面。",
    "refs": [
      [
        "作者制作教程及实机剪辑",
        "https://developers.openai.com/blog/how-to-build-games-with-astra"
      ],
      [
        "OpenAI 构建记录",
        "https://developers.openai.com/showcase/void-explorer"
      ]
    ],
    "image": "captures/void-explorer.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 32
  },
  {
    "id": "sunwake",
    "name": "Sunwake — The Last Light",
    "author": "Thomas Ricouard · OpenAI",
    "authorUrl": "https://developers.openai.com/showcase/sunwake",
    "genre": "航海 · 灯塔",
    "note": "掌舵穿过风浪，并根据灯塔确定航线。",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "source": "entry",
    "rights": "OpenAI 提供浏览器体验。项目源码和素材的独立复用授权未见声明。",
    "play": "https://sunwake-the-last-light.openai.chatgpt.site/",
    "demo": "https://developers.openai.com/showcase/sunwake",
    "evidence": "OpenAI Developers 的该作品构建记录明确标注 GPT-6 Astra，并提供构建步骤和试听或实机画面。",
    "refs": [
      [
        "OpenAI 构建记录与原始画面",
        "https://developers.openai.com/showcase/sunwake"
      ]
    ],
    "image": "captures/sunwake.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 33
  },
  {
    "id": "hollowflux",
    "name": "Hollowflux — The Living Vein",
    "author": "Thomas Ricouard · OpenAI",
    "authorUrl": "https://developers.openai.com/showcase/hollowflux",
    "genre": "程序化地牢 · 水流战斗",
    "note": "在程序化地牢中探索和战斗，流动的水会参与遭遇机制。",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "source": "entry",
    "rights": "OpenAI 提供浏览器体验。项目源码和素材的独立复用授权未见声明。",
    "play": "https://tideglass-drowned-vein.openai.chatgpt.site/",
    "demo": "https://developers.openai.com/showcase/hollowflux",
    "evidence": "OpenAI Developers 的该作品构建记录明确标注 GPT-6 Astra，并提供构建步骤和试听或实机画面。",
    "refs": [
      [
        "OpenAI 构建记录与原始画面",
        "https://developers.openai.com/showcase/hollowflux"
      ]
    ],
    "image": "captures/hollowflux.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 34
  },
  {
    "id": "velocity-loop",
    "name": "Velocity Loop",
    "author": "OpenAI Showcase（发布）",
    "authorUrl": "https://developers.openai.com/showcase/velocity-loop",
    "genre": "玩具赛车 · 计时",
    "note": "用微缩小车在工作台和手工搭建的道路上挑战最短圈速。",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "source": "entry",
    "rights": "OpenAI 提供浏览器体验。项目源码和素材的独立复用授权未见声明。",
    "play": "https://velocity-loop.openai.chatgpt.site/",
    "demo": "https://developers.openai.com/showcase/velocity-loop",
    "evidence": "OpenAI Developers 的该作品构建记录明确标注 GPT-6 Astra，并提供构建步骤和试听或实机画面。",
    "refs": [
      [
        "OpenAI 构建记录与原始画面",
        "https://developers.openai.com/showcase/velocity-loop"
      ]
    ],
    "image": "captures/velocity-loop.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 35
  },
  {
    "id": "little-ritual",
    "name": "Little Ritual",
    "author": "OpenAI Showcase（发布）",
    "genre": "小行星咖啡 · 投递",
    "note": "在小型球形世界穿梭，把咖啡送到等候的顾客手中。",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "source": "entry",
    "rights": "未见项目代码和素材授权。观看作者公开的演示或按作者提供的入口体验。",
    "play": "https://little-ritual.openai.chatgpt.site/",
    "authorUrl": "https://developers.openai.com/showcase/little-ritual",
    "demo": "https://developers.openai.com/showcase/little-ritual",
    "evidence": "官方构建页明确标注 GPT-6 Astra，展示咖啡配送原型。",
    "refs": [
      [
        "OpenAI 构建记录与实机画面",
        "https://developers.openai.com/showcase/little-ritual"
      ]
    ],
    "image": "captures/little-ritual-scene.jpg",
    "imageLabel": "静音实机截图",
    "access": "独立 Chrome 从终端启动后进入 3D 咖啡街区并显示冲煮和投递操作。",
    "license": "许可证未声明",
    "reviewOrder": 36
  },
  {
    "id": "portside",
    "name": "Portside — A Little Open World",
    "author": "Cryptopiy",
    "genre": "开放街区 · 驾驶与送货",
    "note": "在小型城市里步行或开车，完成送货，避开交通和追逐。",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "source": "project",
    "rights": "项目代码 MIT。仓库作者自有美术、关卡及音效为 CC BY 4.0，需保留署名。第三方素材按 NOTICE 和各自条款。",
    "authorUrl": "https://github.com/Cryptopiy",
    "play": "https://cryptopiy.github.io/GPT-6-Astra-AI-Games/games/01-portside/dist/",
    "demo": "https://github.com/Cryptopiy/GPT-6-Astra-AI-Games#english",
    "evidence": "原作者 README 把该产物标为 GPT-6 Astra，提供原项目树、提示词和浏览器入口。",
    "refs": [
      [
        "作者模型标注与原始游戏",
        "https://github.com/Cryptopiy/GPT-6-Astra-AI-Games#english"
      ],
      [
        "第三方署名与商标说明",
        "https://github.com/Cryptopiy/GPT-6-Astra-AI-Games/blob/main/NOTICE.md"
      ]
    ],
    "image": "captures/portside.jpg",
    "imageLabel": "静音实机截图",
    "license": "MIT",
    "reviewOrder": 37,
    "repoUrl": "https://github.com/Cryptopiy/GPT-6-Astra-AI-Games/tree/main/games/01-portside",
    "licenseLabel": "MIT 代码 · CC BY 4.0 原创素材"
  },
  {
    "id": "emberwild",
    "name": "EMBERWILD — Under the Roots of the World",
    "author": "Cryptopiy",
    "genre": "2D 沙盒生存 · 挖掘与建造",
    "note": "在地下挖掘、搭建并维持生存。",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "source": "project",
    "rights": "项目代码 MIT。仓库作者自有美术、关卡及音效为 CC BY 4.0，需保留署名。第三方素材按 NOTICE 和各自条款。",
    "authorUrl": "https://github.com/Cryptopiy",
    "play": "https://cryptopiy.github.io/GPT-6-Astra-AI-Games/games/06-emberwild/dist/",
    "demo": "https://github.com/Cryptopiy/GPT-6-Astra-AI-Games#english",
    "evidence": "原作者 README 把该产物标为 GPT-6 Astra，提供原项目树、提示词和浏览器入口。",
    "refs": [
      [
        "作者模型标注与原始游戏",
        "https://github.com/Cryptopiy/GPT-6-Astra-AI-Games#english"
      ],
      [
        "第三方署名与商标说明",
        "https://github.com/Cryptopiy/GPT-6-Astra-AI-Games/blob/main/NOTICE.md"
      ]
    ],
    "image": "captures/emberwild.jpg",
    "imageLabel": "静音实机截图",
    "license": "MIT",
    "reviewOrder": 38,
    "repoUrl": "https://github.com/Cryptopiy/GPT-6-Astra-AI-Games/tree/main/games/06-emberwild",
    "licenseLabel": "MIT 代码 · CC BY 4.0 原创素材"
  },
  {
    "id": "bellwake",
    "name": "Bellwake: Pinball Boss Rush",
    "author": "Nil Ni",
    "genre": "像素弹球 · 首领战",
    "note": "抓住菱形闪光窗口敲钟，用挡板和出球时机应对三名守卫。",
    "kind": "game",
    "status": "family",
    "version": "GPT-6 Astra / GPT-6.2 Astra，具体版本标签冲突",
    "source": "entry",
    "rights": "仅按原作者入口试玩。源码、素材与再发布授权未见声明。",
    "authorUrl": "https://x.com/_nilni",
    "play": "https://www.aigameshare.com/games/bellwake-pinball-boss-rush?mode=fullscreen&play=1",
    "demo": "https://x.com/_nilni/status/2122780062823129307",
    "evidence": "AIGameLib 转录作者原帖归因为 GPT-6.2 Astra，而 AIGameShare 试玩页写 GPT-6 Astra。原帖当前未能直接读取。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/_nilni/status/2122780062823129307"
      ],
      [
        "转录与独立归因",
        "https://aigamelib.com/games/bellwake-pinball-boss-rush"
      ],
      [
        "托管页的模型标签",
        "https://www.aigameshare.com/games/bellwake-pinball-boss-rush"
      ]
    ],
    "image": "captures/bellwake.jpg",
    "imageLabel": "静音实机截图",
    "license": "许可证未声明",
    "reviewOrder": 39
  },
  {
    "id": "ruby-kart",
    "name": "Mario Kart 8 · Ruby Tour",
    "author": "N1n3VASthR33H",
    "genre": "浏览器 · 卡丁车",
    "note": "在七条赛道上选计时、对战或大奖赛，可换配件、漂移蓄力，切换三种掌机外壳。",
    "kind": "game",
    "status": "family",
    "version": "GPT-6.2 Astra 灰度测试（作者自述）",
    "source": "project",
    "rights": "MIT 只覆盖作者有权授权的原创代码和文档。任天堂及其他第三方角色、美术、音乐、商标及打包 HTML 中的受权利保护内容不在许可范围内。",
    "authorUrl": "https://x.com/N1n3VASthR33H",
    "demo": "https://x.com/N1n3VASthR33H/status/2117988488041890064",
    "evidence": "已追到原作者 README、源码树和可启动试玩，README 自述 Astra 6.2 灰度测试。11 月 4 日发帖早于正式发布，未见可独立核对的模型路由记录。",
    "refs": [
      [
        "作者原始发布帖",
        "https://x.com/N1n3VASthR33H/status/2117988488041890064"
      ],
      [
        "作者 README、离线包与制作说明",
        "https://github.com/vvvvvvvvvashhh/ruby-kart"
      ],
      [
        "仅原创部分 MIT 许可",
        "https://github.com/vvvvvvvvvashhh/ruby-kart/blob/main/LICENSE"
      ]
    ],
    "play": "https://ruby-kart-eight-circuits.vvvvvvvvvashhh.chatgpt.site/",
    "access": "Chrome 已进入对战赛并加速。原仓库另有约 51.3 MB 的离线打包 HTML。",
    "image": "captures/ruby-kart.jpg",
    "imageLabel": "静音实机截图",
    "license": "仅原创代码与文档 MIT",
    "reviewOrder": 40,
    "repoUrl": "https://github.com/vvvvvvvvvashhh/ruby-kart"
  },
  {
    "id": "borrowed-shadow",
    "name": "借影 / Borrowed Shadow",
    "author": "BPCKeeeeeepOn",
    "authorUrl": "https://github.com/BPCKeeeeeepOn",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "剪影动作",
    "note": "靠近油灯放大影子、延长长矛，缩小影身躲开横扫。",
    "play": "https://borrowed-shadow-opera.epic-tetra-9787.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者在提交记录里明确记录 GPT-6 Astra 参与任务设计、灯影战斗和键盘及模拟触屏测试。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/141"
      ]
    ],
    "image": "https://borrowed-shadow-opera.epic-tetra-9787.chatgpt.site/press/gameplay-rain-stage.png",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 41
  },
  {
    "id": "amagiri",
    "name": "雨切 · AMAGIRI",
    "author": "murphy / mafeis",
    "authorUrl": "https://github.com/mafeis",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "雨夜剑斗",
    "note": "在雨中神社斩击和格挡，积累专注发动绝技，并在幕间升级剑术。",
    "play": "https://mafeis.github.io/amagiri/",
    "source": "single",
    "rights": "原仓库提供游戏源码。未见明确适用的项目级复用许可。",
    "evidence": "作者的提交明确写出 GPT-6 Astra 生成 Canvas 2D、弹反、升级和内嵌素材，作者继续试玩调手感。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/137"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/amagiri/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/amagiri/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 42,
    "repoUrl": "https://github.com/mafeis/amagiri"
  },
  {
    "id": "surge-oinja",
    "name": "SURGE for Oinja",
    "author": "Olivia",
    "authorUrl": "https://github.com/Olivia295",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "生存动作",
    "note": "组合电系能力和支援机械，修复设施，为首领战准备。",
    "play": "https://oinja-game.vercel.app/",
    "source": "project",
    "rights": "原仓库提供游戏源码。未见明确适用的项目级复用许可。",
    "evidence": "作者提交明确写出 GPT-6 Astra 在 Codex 协作设计战斗、组合技和界面。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/106"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/surge-for-oinja/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/surge-for-oinja/cover.png",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 43,
    "repoUrl": "https://github.com/Olivia295/SURGE-for-Oinja"
  },
  {
    "id": "clock-out",
    "name": "Clock Out Unseen / 准点下班，别被发现",
    "author": "Ryan-fm",
    "authorUrl": "https://github.com/Ryan-fm",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "潜行计时",
    "note": "在办公室三个限时关卡里用掩体、咖啡和文件夹伪装避开同事。",
    "source": "project",
    "rights": "原仓库提供作者的本地运行说明与游戏源码。项目级复用许可未见公开声明。",
    "evidence": "作者 README 确认 GPT-6 Astra 在 Codex 迭代玩法代码，美术使用单独的图像生成工具。B 站 V1 访问要求登录，使用作者开放的 V2 项目与启动说明。",
    "refs": [
      [
        "作者制作记录",
        "https://github.com/Ryan-fm/clockout-unseen/blob/main/docs/DEVELOPMENT.md"
      ],
      [
        "作者旧版发布页",
        "https://www.bilibili.com/toy/clockout-unseen/index.html"
      ]
    ],
    "image": "https://raw.githubusercontent.com/Ryan-fm/clockout-unseen/main/docs/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "access": "按作者说明在 V2 仓库执行 `npm ci` 与 `npm run dev -- --host 127.0.0.1 --port 4186 --strictPort`。",
    "license": "许可证未声明",
    "reviewOrder": 44,
    "repoUrl": "https://github.com/Ryan-fm/clockout-unseen",
    "url": "https://github.com/Ryan-fm/clockout-unseen#readme",
    "local": "按作者说明在 V2 仓库执行 `npm ci` 与 `npm run dev -- --host 127.0.0.1 --port 4186 --strictPort`。"
  },
  {
    "id": "last-beacon",
    "name": "Last Beacon / 最后的灯塔",
    "author": "stackloomdev",
    "authorUrl": "https://github.com/stackloomdev",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "塔防",
    "note": "在岛上接通电网，在有限供电下升级防御塔并守住灯塔。",
    "play": "https://last-beacon.pjstack.dev",
    "source": "project",
    "rights": "原创项目采用 MIT，随附的 Three.js 独立保留 MIT 许可。",
    "evidence": "作者制作记录明确写出 GPT-6 Astra 在 Codex 参与玩法规则、程序画面和测试。",
    "refs": [
      [
        "作者制作记录",
        "https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md"
      ],
      [
        "原作品核对和画面说明",
        "https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/last-beacon/gameplay-en.png",
    "imageLabel": "有出处的实机画面",
    "license": "MIT",
    "reviewOrder": 45,
    "repoUrl": "https://github.com/stackloomdev/last-beacon"
  },
  {
    "id": "silent-meridian",
    "name": "Silent Meridian / 静默子午线",
    "author": "stackloomdev",
    "authorUrl": "https://github.com/stackloomdev",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "点击解谜",
    "note": "在现实与回声间切换，解开四章里相互关联的道具和机关。",
    "play": "https://silent-meridian.stackloom.org/",
    "source": "project",
    "rights": "作者明确将原创代码和游戏内容用 MIT 许可发布，并记录了生成美术来源。",
    "evidence": "作者制作记录明确写出 GPT-6 Astra 在 Codex 参与剧情、谜题、双语文本、存档和 3D 视效。",
    "refs": [
      [
        "作者制作记录",
        "https://github.com/stackloomdev/silent-meridian/blob/main/docs/CREATION.md"
      ],
      [
        "原作品核对和画面说明",
        "https://github.com/stackloomdev/silent-meridian/blob/main/docs/ART.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/silent-meridian/gameplay.png",
    "imageLabel": "有出处的实机画面",
    "license": "MIT",
    "reviewOrder": 46,
    "repoUrl": "https://github.com/stackloomdev/silent-meridian"
  },
  {
    "id": "magic-carpet",
    "name": "Magic Carpet Wizard — A Thousand Skies",
    "author": "threapchills",
    "authorUrl": "https://github.com/threapchills",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "飞行冒险",
    "note": "骑魔毯穿过飞环，施法与敌人交锋，在球形世界探索关卡。",
    "play": "https://threapchills.github.io/MagicCarpetWizard/",
    "source": "project",
    "rights": "原仓库提供游戏源码。未见明确适用的项目级复用许可。",
    "evidence": "作者项目、官方示例或发布平台的记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者制作记录",
        "https://github.com/threapchills/MagicCarpetWizard"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/magic-carpet/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/magic-carpet/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-04",
    "license": "许可证未声明",
    "reviewOrder": 47,
    "repoUrl": "https://github.com/threapchills/MagicCarpetWizard"
  },
  {
    "id": "tidehook",
    "name": "Tidehook",
    "author": "Emile du Toit / Mafuta Games",
    "authorUrl": "https://mafuta.itch.io/",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "拖船打捞",
    "note": "操纵拖船完成三次沿岸航行，拖带不同重量的沉物并控制转向。",
    "play": "https://tidehook-mallow.vercel.app/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者提交确认用 GPT-6 Astra 在 Codex 反复打磨拖船物理、吊机交付、天气和操作。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/74"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/tidehook/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/tidehook/gameplay.png",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 48
  },
  {
    "id": "citymaker",
    "name": "CityMaker",
    "author": "Derek Wang",
    "authorUrl": "https://github.com/derek-wangpch",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "合并益智",
    "note": "在 4×4 城市方格合并相同建筑，解锁更高等级建筑。",
    "play": "https://citymaker.0to1app.com",
    "source": "project",
    "rights": "作者将项目源码和原创程序化模型用 MIT 发布，第三方依赖保留各自许可证。",
    "evidence": "作者制作记录明确把 132 个地标的程序化模型几何归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者制作记录",
        "https://github.com/derek-wangpch/OpenCityMaker/blob/master/docs/CREATION.md"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/citymaker/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/citymaker/gameplay.png",
    "imageLabel": "有出处的实机画面",
    "license": "MIT",
    "reviewOrder": 49,
    "repoUrl": "https://github.com/derek-wangpch/OpenCityMaker"
  },
  {
    "id": "desi-mayhem",
    "name": "Desi Mayhem",
    "author": "Kishore",
    "authorUrl": "https://x.com/GetKishore",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "街头竞速",
    "note": "驾驶摩托穿越印度城市道路，躲避客车、三轮车并用加速争领先。",
    "play": "https://desimayhem.com/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/GetKishore/status/2097906401159102811"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/desi-mayhem/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/desi-mayhem/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 50
  },
  {
    "id": "vector-dive",
    "name": "Vector Dive — Beyond the Signal",
    "author": "Thomas Ricouard",
    "authorUrl": "https://x.com/Dimillian",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "飞行竞速",
    "note": "穿过不断加速的霓虹航道，把握加速与相位切换的时机。",
    "play": "https://vector-dive.openai.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/Dimillian/status/2097188900888322323"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/vector-dive/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/vector-dive/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 51
  },
  {
    "id": "hypoxia",
    "name": "缺氧 · 小小星球",
    "author": "dudu",
    "authorUrl": "https://hypoxia-6tu.pages.dev/",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "经营生存",
    "note": "挖掘地下基地，为三名殖民者安排供氧、食物和供电。",
    "play": "https://hypoxia-6tu.pages.dev/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "提交作者明确声明全程用 GPT-6 Astra 开发。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/28"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/hypoxia/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/hypoxia/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 52
  },
  {
    "id": "bonkshot",
    "name": "Bonkshot",
    "author": "edmund5",
    "authorUrl": "https://x.com/edmund5",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "弹射解谜",
    "note": "用弹弓发射小怪物，击倒支架，清除各关目标。",
    "play": "https://bonkshot.com/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/edmund5/status/2097603093819261002"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/bonkshot/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/bonkshot/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-09",
    "license": "许可证未声明",
    "reviewOrder": 53
  },
  {
    "id": "thunderfall",
    "name": "THUNDERFALL / 雷霆战机 · 天穹远征",
    "author": "jackroc",
    "authorUrl": "https://github.com/jackroc",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra Ultra",
    "genre": "纵向弹幕",
    "note": "驾驶不同战机穿越五个战区，避开弹幕并挑战多阶段首领。",
    "play": "https://thunderfall.vercel.app/",
    "source": "project",
    "rights": "游戏 README 明确将原创代码、程序生成画面和合成音频适用仓库的 CC0 1.0。",
    "evidence": "作者的项目说明记录 GPT-6 Astra Ultra 参与多轮程序实现、合成声音和测试。",
    "refs": [
      [
        "项目 CC0 声明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/tree/main/works/thunderfall#创作与许可"
      ],
      [
        "作者制作记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/works/thunderfall/README.md#创作与许可"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/thunderfall/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/thunderfall/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "CC0-1.0",
    "reviewOrder": 54,
    "repoUrl": "https://github.com/MartinDelophy/awesome-gpt-6-astra/tree/main/works/thunderfall"
  },
  {
    "id": "sandline",
    "name": "SANDLINE / 沙线行动",
    "author": "xilinnihao-afk / 一海千寻的AI实验室",
    "authorUrl": "https://github.com/xilinnihao-afk",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "战术竞技",
    "note": "带 AI 队友进行 3v3 回合，在两个目标点间选择攻守。",
    "play": "https://ihca.cn/sandline/",
    "source": "project",
    "rights": "MIT 仅覆盖原创代码。地图、模型、贴图和音频未随原仓库发布，完整玩法走在线部署。",
    "evidence": "原作者提交记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/109"
      ],
      [
        "作者制作记录",
        "https://zhuanlan.zhihu.com/p/2085289080955352314"
      ],
      [
        "原作品核对和画面说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/docs/issue-submissions-2026-09-29.md#sandline--109"
      ],
      [
        "作者资源与本地运行说明",
        "https://github.com/xilinnihao-afk/sandline-threejs-fps/blob/main/ASSETS.md"
      ]
    ],
    "image": "https://github.com/user-attachments/assets/0443c8e4-4060-49f2-af31-175138c4e6ab",
    "imageLabel": "有出处的实机画面",
    "partialLicense": true,
    "licenseLabel": "MIT · 原创代码",
    "access": "独立 Chrome 首次加载较慢，约三分钟后进入含地图选择与「突入战场」的行动菜单。",
    "license": "MIT",
    "reviewOrder": 55,
    "repoUrl": "https://github.com/xilinnihao-afk/sandline-threejs-fps"
  },
  {
    "id": "stadium-elite",
    "name": "Stadium Elite — El Clásico",
    "author": "Mindblown / @mind",
    "authorUrl": "https://mindblown.ai/@mind",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "足球",
    "note": "在 3D 球场踢十一人制比赛，切换球员、传球和射门。",
    "play": "https://stadium-elite.mindblown.ai/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "Mindblown 的发布归因经来源记录转录为 GPT-6 Astra，试玩为其公开内嵌游戏。",
    "refs": [
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/stadium-elite/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/stadium-elite/gameplay.png",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-09",
    "access": "独立 Chrome 已核到内嵌游戏的启动或玩法画面。",
    "license": "许可证未声明",
    "reviewOrder": 56
  },
  {
    "id": "foe-to-fleet",
    "name": "FOE TO FLEET",
    "author": "miya",
    "authorUrl": "https://x.com/miya00907380",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra / GPT-5 Luna · Astra 细分版本待核",
    "genre": "弹幕街机",
    "note": "让被击败的敌机加入编队，用队友挡弹或反击，撑过七波。",
    "play": "https://foe-to-fleet.miya333.chatgpt.site",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者原帖的公开核对记录称 Astra 负责主要实现，GPT-5 Luna 辅助。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/miya00907380/status/2105055020106252543"
      ],
      [
        "原作品核对和画面说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/docs/x-games-2026-10-06.md#foe-to-fleet"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/foe-to-fleet/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 57
  },
  {
    "id": "hollowmark",
    "name": "HOLLOWMARK",
    "author": "Mindblown",
    "authorUrl": "https://mindblown.ai/",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra / Claude Fable 5.1",
    "genre": "第一人称冒险",
    "note": "搜寻工厂地下世界里的通行物品，在战役中管理弹药和路线。",
    "play": "https://hollowmark.mindblown.ai/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布经公开核对记录转录为 GPT-6 Astra 与 Claude Fable 5.1。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/mindblown_ai/status/2102040812569944136"
      ],
      [
        "原作品核对和画面说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/docs/x-games-2026-10-06.md#hollowmark"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/hollowmark/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "access": "独立 Chrome 已核到内嵌游戏的启动或玩法画面。",
    "license": "许可证未声明",
    "reviewOrder": 58
  },
  {
    "id": "flight1073",
    "name": "Flight 1073",
    "author": "Guy Eshel",
    "authorUrl": "https://x.com/GuyEshel_",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "限时任务",
    "note": "躲避服务车，完成一串限时航空任务后尝试着陆。",
    "play": "https://flight1073.pages.dev/play/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/GuyEshel_/status/2106292470438822143"
      ],
      [
        "原作品核对和画面说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/docs/x-games-2026-10-06.md#flight-1073"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/flight-1073/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 59
  },
  {
    "id": "moxride",
    "name": "MoxRide",
    "author": "Moxazza / Moxazza Games",
    "authorUrl": "https://www.moxride.com/",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "滑板计分",
    "note": "沿城市街道加速下坡，用磨杆和空中动作维持连击。",
    "play": "https://www.moxride.com/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者提交附开发会话线索，说明多轮制作滑板动作和画面，具体型号未进一步核实。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/114"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/moxride/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/moxride/gameplay.png",
    "imageLabel": "有出处的实机画面",
    "access": "独立 Chrome 已核到内嵌游戏的启动或玩法画面。",
    "license": "许可证未声明",
    "reviewOrder": 60
  },
  {
    "id": "jellyblob",
    "name": "JellyBlob.win",
    "author": "kvickan",
    "authorUrl": "https://buymeacoffee.com/kvickan",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "多人竞技",
    "note": "收集水滴，走位绕过对手的轨迹，并在危险靠近时跳跃。",
    "play": "https://jellyblob.win/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "原作者提交记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/103"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/jellyblob/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/jellyblob/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 61
  },
  {
    "id": "flop-club",
    "name": "FLOP CLUB",
    "author": "BubuAi",
    "authorUrl": "https://x.com/BubuStd",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra Pro",
    "genre": "运动计分",
    "note": "从三个高度起跳，翻转身体并尝试落在水面目标圈中。",
    "play": "https://bubucn.com/ai-model-evals/flop-club/game/index.html",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/BubuStd/status/2096402783805354091"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/flop-club/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/flop-club/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-06",
    "license": "许可证未声明",
    "reviewOrder": 62
  },
  {
    "id": "blackwater",
    "name": "BLACKWATER · Silent Harbor",
    "author": "hiraeth",
    "authorUrl": "https://x.com/WoahWurdz",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "第一人称潜入",
    "note": "在雨夜码头寻找路径，避开或清除分布在货站的敌人。",
    "play": "https://blackwater-roan.vercel.app/",
    "source": "project",
    "rights": "原创代码和程序生成素材采用 MIT，原仓库另附第三方依赖许可。",
    "evidence": "作者原帖归因于 Astra，原仓库公开程序美术、合成音频和关卡代码，原帖细分版本待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/WoahWurdz/status/2095958882732355908"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/blackwater/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/blackwater/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-04",
    "license": "MIT",
    "reviewOrder": 63,
    "repoUrl": "https://github.com/Hiraeth010/blackwater"
  },
  {
    "id": "aura-farming",
    "name": "Aura Farming: Unbothered",
    "author": "nilni / @nil",
    "authorUrl": "https://www.aigameshare.com/profile/nil",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "平衡节奏",
    "note": "帮龙舟上的水豚在浪中站稳，在 40 秒内完成六个舞步。",
    "play": "https://www.aigameshare.com/games/aura-farming-game",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者平台页将制作归因于 GPT-6 Astra、Codex，并列出 Three.js、Blender、图像及音频工具。",
    "refs": [
      [
        "作者制作记录",
        "https://www.aigameshare.com/games/aura-farming-game"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/aura-farming/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/aura-farming/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "access": "独立 Chrome 已核到内嵌游戏的启动或玩法画面。",
    "license": "许可证未声明",
    "reviewOrder": 64
  },
  {
    "id": "thornwake",
    "name": "Thornwake",
    "author": "Lehiem / LiamTodd98",
    "authorUrl": "https://github.com/LiamTodd98",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "昆虫动作",
    "note": "以针为武器穿过树根洞穴，用跳跃、冲刺和丝线抵挡敌人。",
    "play": "https://thornwake-moth-descent.ltodd.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者提交确认在 Astra 中发起制作并用后续提示调整实机，细分版本待核。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/92"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/thornwake/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/thornwake/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 65
  },
  {
    "id": "komorebi",
    "name": "こもれびの木の実あつめ / Komorebi Nut Gathering",
    "author": "Kazumi",
    "authorUrl": "https://x.com/Kazumib0",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "收集街机",
    "note": "横向移动森林精灵，在 60 秒内接住果实，躲开落叶。",
    "play": "https://komorebi-kinomi-0916.inu03550.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者原帖的公开核对记录说明由作者提供角色美术，并使用 GPT-6 Astra 在 Codex 制作游戏。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/Kazumib0/status/2100129970236334179"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/komorebi-kinomi/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/komorebi-kinomi/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 66
  },
  {
    "id": "patch-agent",
    "name": "PATCH",
    "author": "Drakoniux",
    "authorUrl": "https://agentgames.dev/u/Drakoniux",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "领地争夺",
    "note": "走出安全区并闭合路径夺取地盘，同时避开电脑对手的截击。",
    "play": "https://play.agentgames.dev/g/g_2DEErq70zcP587l4/index.html#ag=480c28a0a6b8ee09",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者项目、官方示例或发布平台的记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者制作记录",
        "https://agentgames.dev/play/patch"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/patch/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/patch/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 67
  },
  {
    "id": "dropzone",
    "name": "Dropzone Royale",
    "author": "Drakoniux",
    "authorUrl": "https://agentgames.dev/u/Drakoniux",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "俯视生存",
    "note": "落地搜寻装备，在持续缩小的风暴圈内与电脑对手周旋。",
    "play": "https://play.agentgames.dev/g/g_hKzF6CmAeOw3R--B/index.html#ag=b8c668de4fe340b3",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者项目、官方示例或发布平台的记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者制作记录",
        "https://agentgames.dev/play/dropzone-royale"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/dropzone-royale/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/dropzone-royale/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-23",
    "license": "许可证未声明",
    "reviewOrder": 68
  },
  {
    "id": "voidbound",
    "name": "VOIDBOUND — The Choir of Ash",
    "author": "Alexey Fateev",
    "authorUrl": "https://x.com/superalesha",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "第三人称战斗",
    "note": "在教堂竞技场组合轻重攻击、闪避与范围技能。",
    "play": "https://alesha-pro.github.io/bench-portal/games/voidbound-choir-of-ash/",
    "source": "project",
    "rights": "原仓库提供游戏源码。未见明确适用的项目级复用许可。",
    "evidence": "作者项目的 game.json 标注 GPT-6 Astra，发布原帖也把剑斗实现归因于该模型。",
    "refs": [
      [
        "作者的模型记录",
        "https://github.com/alesha-pro/bench-portal/blob/main/games/voidbound-choir-of-ash/game.json"
      ],
      [
        "作者原帖",
        "https://x.com/superalesha/status/2095988972879335792"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/voidbound/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/voidbound/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-04",
    "license": "许可证未声明",
    "reviewOrder": 69,
    "repoUrl": "https://github.com/alesha-pro/bench-portal/tree/main/games/voidbound-choir-of-ash"
  },
  {
    "id": "universe-duel",
    "name": "u/NIVERSE — Orbital Duel",
    "author": "ハヤシモン",
    "authorUrl": "https://x.com/hayashimon1",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "机甲对决",
    "note": "挑选机甲，借掩体和冲刺躲过追踪攻击并反击。",
    "play": "https://universe-duel.vercel.app/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/hayashimon1/status/2096255665778069957"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/universe-duel/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/universe-duel/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-05",
    "license": "许可证未声明",
    "reviewOrder": 70
  },
  {
    "id": "astra-2048",
    "name": "Astra 2048",
    "author": "Eddy",
    "authorUrl": "https://x.com/ieddysun",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "数字益智",
    "note": "滑动和合并方块，让数字逐步达到 2048。",
    "play": "https://jianfan.app/2048/gpt/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者公开说明为单轮生成，采用现有发布记录追溯。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/ieddysun/status/2105147777777041494"
      ],
      [
        "原作品核对和画面说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/docs/x-games-2026-10-06.md#astra-2048-eddy"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/astra-2048-eddy/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 71
  },
  {
    "id": "vesper-last-light",
    "name": "Vesper: The Last Light",
    "author": "kvickan",
    "authorUrl": "https://buymeacoffee.com/kvickan",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · Codex medium、high、extra-high · 细分版本待核",
    "genre": "机关冒险",
    "note": "在淹没的花园找机关，把有限的光用于生命、攻击和解谜。",
    "play": "https://vesper.mansgullberg.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者提交记录 40–50 小时的 Astra 协作，注明 Codex 推理档位，没有可确认的细分型号。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/82"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/vesper/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/vesper/gameplay.png",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 72
  },
  {
    "id": "melon-lab",
    "name": "瓜体实验室 / Melon Lab",
    "author": "Ayi1337",
    "authorUrl": "https://github.com/Ayi1337",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "物理益智",
    "note": "放下并合并水果，利用软体形变和碰撞争取更大水果。",
    "play": "https://melon-game.jack-514.chatgpt.site/",
    "source": "project",
    "rights": "原仓库提供游戏源码。未见明确适用的项目级复用许可。",
    "evidence": "作者项目、官方示例或发布平台的记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者制作记录",
        "https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/melon-lab/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/melon-lab/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 73,
    "repoUrl": "https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src"
  },
  {
    "id": "greenhouse",
    "name": "Greenhouse Escape Room: The Last Seed",
    "author": "nilni / @nil",
    "authorUrl": "https://www.aigameshare.com/profile/nil",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "密室解谜",
    "note": "在封闭温室修好水管，调整植物与反射光，救回最后一颗种子。",
    "play": "https://www.aigameshare.com/games/greenhouse-escape-room",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者项目、官方示例或发布平台的记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者制作记录",
        "https://www.aigameshare.com/games/greenhouse-escape-room"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/greenhouse-escape-room/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/greenhouse-escape-room/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "access": "独立 Chrome 已核到内嵌游戏的启动或玩法画面。",
    "license": "许可证未声明",
    "reviewOrder": 74
  },
  {
    "id": "infinite-garden",
    "name": "无限庭院 · Infinite Garden — Atlas of Echoes",
    "author": "lin_ye / lin ye",
    "authorUrl": "https://linux.do/u/lin_ye",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "重力解谜",
    "note": "在会改变重力方向的花园中将彩色果实搬到配对插槽。",
    "play": "https://infinite-garden.yelin8130.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者公开提示词和游戏迭代记录，确认使用 Astra 将游戏从六座庭院扩到 48 座。",
    "refs": [
      [
        "作者制作记录",
        "https://linux.do/t/topic/2857449"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/infinite-garden/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/infinite-garden/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 75
  },
  {
    "id": "pixel-orchard",
    "name": "Pixel Orchard — Memory Harvest",
    "author": "MiaAI-Lab",
    "authorUrl": "https://github.com/MiaAI-Lab",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "记忆翻牌",
    "note": "翻开种子袋找出六对相同图案，并尝试减少移动次数。",
    "play": "https://miaai-lab.github.io/GPT-6-Astra-100-HTML-Files/013-pixel-orchard.html",
    "source": "single",
    "rights": "原仓库提供游戏源码。未见明确适用的项目级复用许可。",
    "evidence": "作者仓库明确标注此单 HTML 系列使用 GPT-6 Astra，关卡规则和游戏逻辑均在对应作品文件。",
    "refs": [
      [
        "作者原文件",
        "https://github.com/MiaAI-Lab/GPT-6-Astra-100-HTML-Files/blob/main/013-pixel-orchard.html"
      ],
      [
        "作者制作记录",
        "https://github.com/MiaAI-Lab/GPT-6-Astra-100-HTML-Files/blob/main/README.md"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/pixel-orchard/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/pixel-orchard/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 76,
    "repoUrl": "https://github.com/MiaAI-Lab/GPT-6-Astra-100-HTML-Files/blob/main/013-pixel-orchard.html"
  },
  {
    "id": "lantern-cove",
    "name": "Lantern Cove — The Borrowed Light",
    "author": "AK / akartit",
    "authorUrl": "https://x.com/akartit",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "叙事解谜",
    "note": "跟着玛拉寻找港口灯塔失去的光，在对话和道具之间串联线索。",
    "play": "https://lantern-cove.akartit.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/akartit/status/2096520784449613981"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/lantern-cove/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/lantern-cove/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 77
  },
  {
    "id": "junk-run",
    "name": "JUNK RUN",
    "author": "TheLabGuy",
    "authorUrl": "https://x.com/hermesailab",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "组装竞速",
    "note": "在回收场挑选零件搭车，靠重力冲下坡道比较表现。",
    "play": "https://junk-run.pages.dev/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/hermesailab/status/2097508053901840850"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/junk-run/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/junk-run/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-09",
    "license": "许可证未声明",
    "reviewOrder": 78
  },
  {
    "id": "spy-or-lie",
    "name": "Spy or Lie",
    "author": "Nate Lorenzen",
    "authorUrl": "https://x.com/NateLorenzen",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "六角策略",
    "note": "在六角棋盘隐藏探员、进行虚张声势并包围对方棋子。",
    "play": "https://spyorlie.com/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/NateLorenzen/status/2097504974683152559"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/spy-or-lie/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/spy-or-lie/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 79
  },
  {
    "id": "three-kingdoms",
    "name": "三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes",
    "author": "MartinDelophy",
    "authorUrl": "https://github.com/MartinDelophy",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "回合策略",
    "note": "指挥魏蜀吴之一经营城池，分配金银、粮草并安排武将。",
    "play": "https://sanguo-jiangshan.vercel.app",
    "source": "project",
    "rights": "原作者收录完整项目源码。索引声明 CC0 适用于原创整理文字和美术，未见对本游戏全量源码与素材的单独许可。",
    "evidence": "原作者维护的制作记录确认 GPT-6 Astra 参与规则、界面和 AI，头像与地形另用图像生成工具。",
    "refs": [
      [
        "作者制作记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/works/three-kingdoms/CREATION.md"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/three-kingdoms/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/three-kingdoms/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 80,
    "repoUrl": "https://github.com/MartinDelophy/awesome-gpt-6-astra/tree/main/works/three-kingdoms"
  },
  {
    "id": "no-moat",
    "name": "No Moat",
    "author": "Peter Yang",
    "authorUrl": "https://x.com/petergyang",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "牌组构筑",
    "note": "招募团队，用卡牌应对竞品、漏洞和云账单。",
    "play": "https://no-moat.petergyang.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/petergyang/status/2096297378584375672"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/no-moat/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/no-moat/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-05",
    "license": "许可证未声明",
    "reviewOrder": 81
  },
  {
    "id": "agi-empires",
    "name": "AGI of Empires — The Compute Wars",
    "author": "timour kosters",
    "authorUrl": "https://x.com/timourxyz",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "即时战略",
    "note": "收集资金与算力，在发展科技和直接攻击对手之间取舍。",
    "play": "https://agiofempires.com/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者在公开帖中称与 Astra 协作两天实现该浏览器策略游戏。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/timourxyz/status/2096662786692776293"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/agi-of-empires/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/agi-of-empires/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-06",
    "license": "许可证未声明",
    "reviewOrder": 82
  },
  {
    "id": "atlas-go",
    "name": "Atlas Go",
    "author": "Boris Power",
    "authorUrl": "https://x.com/BorisMPower",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "变体围棋",
    "note": "在街区线路和其他不规则图形上对弈，支持同机轮流下。",
    "play": "https://atlas-go.borisxp.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/BorisMPower/status/2096784808399843582"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/atlas-go/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/atlas-go/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 83
  },
  {
    "id": "ironwood",
    "name": "Ironwood — The Art of Industry",
    "author": "Dan",
    "authorUrl": "https://x.com/aidaniil",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "自动化经营",
    "note": "采集原料，给机器供电并安排输送带，逐步扩大生产线。",
    "play": "https://ironwood.sparkles.dev/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布的公开记录把建造和联机体验归因于 Astra 与 Blender MCP 辅助。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/aidaniil/status/2096426970930106530"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/ironwood/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/ironwood/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 84
  },
  {
    "id": "mintfall",
    "name": "Coin Pusher Roguelite: Mintfall",
    "author": "nilni / @nil",
    "authorUrl": "https://www.aigameshare.com/profile/nil",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra / GPT-5.6 Sol",
    "genre": "推币策略",
    "note": "在掉币次数限制下搭配特殊硬币和遗物，完成六轮计分目标。",
    "play": "https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者项目、官方示例或发布平台的记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者制作记录",
        "https://www.aigameshare.com/games/coin-pusher-roguelite-mintfall"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/mintfall/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/mintfall/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "access": "独立 Chrome 已核到内嵌游戏的启动或玩法画面。",
    "license": "许可证未声明",
    "reviewOrder": 85
  },
  {
    "id": "westward",
    "name": "Westward — The Oregon Trail",
    "author": "Biswas",
    "authorUrl": "https://x.com/bis_waz",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "旅途生存",
    "note": "带领车队西行，分配粮食、维修车辆并应对途中抉择。",
    "play": "https://biswaz.me/westward/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/bis_waz/status/2098023593468907747"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/westward/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/westward/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 86
  },
  {
    "id": "chess-cubed",
    "name": "Chess Cubed",
    "author": "Matthew Lebo / digitalml",
    "authorUrl": "https://www.reddit.com/user/digitalml/",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "立体象棋",
    "note": "在立方体相连的六个面上下棋，切换立体和平面视图分析走法。",
    "play": "https://playchesscubed.com/play/?world=lunar",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者项目、官方示例或发布平台的记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者制作记录",
        "https://www.reddit.com/r/ChatGPT/comments/1wbor8j/i_built_chess_cubed_with_gpt6_astra_in_4_days/"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/chess-cubed/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/chess-cubed/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 87
  },
  {
    "id": "minimum-rage",
    "name": "Minimum Rage",
    "author": "fastandlucid",
    "authorUrl": "https://x.com/FastandLucid",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "餐厅经营",
    "note": "接单取餐，在太多顾客离开前完成八份服务。",
    "play": "https://minimum-rage.fastandlucid.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/FastandLucid/status/2100594128547704950"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/minimum-rage/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/minimum-rage/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 88
  },
  {
    "id": "dash-dinner",
    "name": "DASH / DINNER",
    "author": "Drakoniux",
    "authorUrl": "https://agentgames.dev/u/Drakoniux",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "送餐计时",
    "note": "接限时送餐单，在城市中规划路线并管理体力与载具。",
    "play": "https://play.agentgames.dev/g/g_Gkna3a8DsdOR3NCL/index.html",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者项目、官方示例或发布平台的记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者制作记录",
        "https://agentgames.dev/play/dash-dinner"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/dash-dinner/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/dash-dinner/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 89
  },
  {
    "id": "aegis-flora",
    "name": "Aegis Flora",
    "author": "Joshua Ray / murderszn",
    "authorUrl": "https://x.com/jahflyx",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "塔防",
    "note": "布置防御设施改变敌人走向，阻止一波波敌人抵达核心。",
    "play": "https://murderszn.github.io/aegis-flora/game.html",
    "source": "project",
    "rights": "作者 README 明示游戏为专有项目；第三方依赖、音频和素材遵循各自声明。",
    "evidence": "作者发布及所附公开核对记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/jahflyx/status/2101774133121958000"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/aegis-flora/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/aegis-flora/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "保留所有权利",
    "reviewOrder": 90,
    "repoUrl": "https://github.com/murderszn/aegis-flora"
  },
  {
    "id": "fourth-knock",
    "name": "The Fourth Knock",
    "author": "Nikhil Desai",
    "authorUrl": "https://x.com/NikhilDesai_007",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra / Claude Opus 5.5",
    "genre": "侦探冒险",
    "note": "在雪松宅调查人物与空间，通过线索推理出密室案的经过。",
    "play": "https://nikhilsatishdesai.github.io/the-fourth-knock/play/",
    "source": "project",
    "rights": "原仓库提供游戏源文件。字体附 SIL Open Font License，未见游戏整体许可证。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/NikhilDesai_007/status/2104495667284677078"
      ],
      [
        "原作品核对和画面说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/docs/x-games-2026-10-06.md#the-fourth-knock"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/the-fourth-knock/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 91,
    "repoUrl": "https://github.com/nikhilsatishdesai/the-fourth-knock"
  },
  {
    "id": "sunlandia",
    "name": "Sunlandia — The Forgotten Shore",
    "author": "Ramon Linares / Small Web Lab",
    "authorUrl": "https://github.com/RamonLinares",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra / GPT-5.6 Sol / Claude Fable",
    "genre": "环境解谜",
    "note": "在船难后的岛上搜索线索，依次完成环境机关。",
    "play": "https://sunlandia.smallweblab.com/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者开发日志说明从 GPT-5.6 Sol 开始，经 Claude Fable 协助后用 GPT-6 Astra 完成。",
    "refs": [
      [
        "作者制作记录",
        "https://smallweblab.com/posts/sunlandia/"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/sunlandia/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/sunlandia/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 92
  },
  {
    "id": "nacar",
    "name": "NÁCAR",
    "author": "Marcio Lima / @Preda2005",
    "authorUrl": "https://x.com/Preda2005",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "成长模拟",
    "note": "在积水蜗牛壳里搜集养分，成长并解锁新的身体结构。",
    "play": "https://nacar-microcosmo.preda2005.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/Preda2005/status/2097954217180921928"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/nacar/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/nacar/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 93
  },
  {
    "id": "barrelbound",
    "name": "Barrelbound: The Lost Cargo",
    "author": "Emile du Toit / Mafuta Games",
    "authorUrl": "https://mafuta.itch.io/",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "平台闯关",
    "note": "在三道丛林关利用二段跳、投桶和矿车找回货物。",
    "play": "https://barrelbound.vercel.app/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "原作者提交记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/73"
      ],
      [
        "画面出处",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/barrelbound/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/barrelbound/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 94
  },
  {
    "id": "storm-race",
    "name": "STORM RACE",
    "author": "BubuAi",
    "authorUrl": "https://x.com/BubuStd",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "迷你车竞速",
    "note": "在车库配置赛车，适应干地、雨地和风暴赛道。",
    "play": "https://storm-race.vercel.app/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/BubuStd/status/2096587056755638553"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/storm-race/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/storm-race/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-06",
    "license": "许可证未声明",
    "reviewOrder": 95
  },
  {
    "id": "fang-starlight",
    "name": "FANG STARLIGHT RUN",
    "author": "FANGプラス最強伝説🐺",
    "authorUrl": "https://x.com/FANGsaikyou",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "平台收集",
    "note": "帮狼穿过三段月夜关卡，用二段跳、冲刺收集金币和星片。",
    "play": "https://fang-starlight-run.yosshy666.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/FANGsaikyou/status/2096192022596194588"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/fang-starlight-run/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/fang-starlight-run/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 96
  },
  {
    "id": "tidal-rush",
    "name": "TIDAL RUSH — Paradise GP",
    "author": "Pietro Schirano",
    "authorUrl": "https://x.com/skirano",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "卡丁车竞速",
    "note": "在热带赛道转弯漂移，用道具争夺三圈比赛名次。",
    "play": "https://tidal-rush-paradise-gp.skirano.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "OpenAI 的 GPT-6 Astra 发布页直接收录了 Pietro Schirano 的可玩竞速作品。",
    "refs": [
      [
        "作者制作记录",
        "https://openai.com/index/gpt-6-astra/"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/tidal-rush/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/tidal-rush/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-03",
    "license": "许可证未声明",
    "reviewOrder": 97
  },
  {
    "id": "luna-crimson",
    "name": "LUNA — Crimson Requiem / 紅月のレクイエム",
    "author": "音羽ぽんすけ",
    "authorUrl": "https://x.com/ponsuke_otowa",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "横版动作",
    "note": "穿过哥特像素关，用斩击、踩踏和召唤对付敌人。",
    "play": "https://luna-crimson-requiem.ponsuke.chatgpt.site/play/index.html",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/ponsuke_otowa/status/2096531744933425299"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/luna-crimson-requiem/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/luna-crimson-requiem/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-06",
    "license": "许可证未声明",
    "reviewOrder": 98
  },
  {
    "id": "one-more-vine",
    "name": "One More Vine — Into the Wild",
    "author": "Ben Nash",
    "authorUrl": "https://x.com/bennash",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "丛林平台",
    "note": "跑跳并借藤蔓荡过四关，收集宝物并躲开鳄鱼。",
    "play": "https://onemorevine.bennash.dev/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/bennash/status/2096282758930645170"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/one-more-vine/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/one-more-vine/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-05",
    "license": "许可证未声明",
    "reviewOrder": 99
  },
  {
    "id": "dual-realms",
    "name": "旧城区 · 放学路 / Dual Realms",
    "author": "serein",
    "authorUrl": "https://x.com/you1873118",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra · 细分版本待核",
    "genre": "双人切换 · 平台动作",
    "note": "切换两名主角，用空中跳跃和连击跨过街头与屋顶障碍。",
    "play": "https://sgyno09-source.github.io/dual-realms/",
    "source": "project",
    "rights": "原仓库提供游戏源码。未见明确适用的项目级复用许可。",
    "evidence": "作者发布及所附公开核对记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/you1873118/status/2098421955296931931"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/dual-realms/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/dual-realms/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 100,
    "repoUrl": "https://github.com/sgyno09-source/dual-realms"
  },
  {
    "id": "duck-off",
    "name": "Duck Off",
    "author": "swarnim.eth",
    "authorUrl": "https://x.com/swarnimodi",
    "kind": "game",
    "status": "family",
    "version": "作者称 Astra / Claude Fable · Astra 细分版本待核",
    "genre": "河流闪避",
    "note": "控制小鸭划过河道，避开原木和漩涡并攒加速。",
    "play": "https://duckoff.fun/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录确认 Astra 参与制作，细分版本仍待核。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/swarnimodi/status/2100196454367437275"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/duck-off/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/duck-off/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 101
  },
  {
    "id": "voidrunner",
    "name": "VOIDRUNNER — Orbital Combat League",
    "author": "Alexey Fateev",
    "authorUrl": "https://x.com/superalesha",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "反重力竞速",
    "note": "与七辆悬浮赛车同场比拼，灵活使用加速和空气制动。",
    "play": "https://alesha-pro.github.io/bench-portal/games/voidrunner-astra/",
    "source": "project",
    "rights": "原仓库提供游戏源码。未见明确适用的项目级复用许可。",
    "evidence": "作者项目的 game.json 明确标注 GPT-6 Astra，附实机部署、赛道代码和本地模型目录。",
    "refs": [
      [
        "作者的模型记录",
        "https://github.com/alesha-pro/bench-portal/blob/main/games/voidrunner-astra/game.json"
      ],
      [
        "作者原帖",
        "https://x.com/superalesha/status/2095967568825582044"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/voidrunner/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/voidrunner/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-04",
    "license": "许可证未声明",
    "reviewOrder": 102,
    "repoUrl": "https://github.com/alesha-pro/bench-portal/tree/main/games/voidrunner-astra"
  },
  {
    "id": "paperroute",
    "name": "PaperRoute",
    "author": "Emm Tee / BuiltBySketch",
    "authorUrl": "https://x.com/builtbysketch",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "送报街机",
    "note": "骑车向街道两侧订户投递报纸，避开车辆、行人和坑洞。",
    "play": "https://www.paperroute.lol/play/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者发布及所附公开核对记录将此游戏归因于 GPT-6 Astra。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/builtbysketch/status/2098777028078211283"
      ],
      [
        "模型出处与核对记录",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/blob/main/assets/screenshots/paperroute/SOURCE.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/MartinDelophy/awesome-gpt-6-astra/main/assets/screenshots/paperroute/gameplay.jpg",
    "imageLabel": "有出处的实机画面",
    "attributionDate": "2026-09-12",
    "license": "许可证未声明",
    "reviewOrder": 103
  },
  {
    "id": "snowball-arena",
    "name": "雪球大作战 / Snowball Arena",
    "author": "BPCKeeeeeepOn",
    "authorUrl": "https://github.com/BPCKeeeeeepOn",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra",
    "genre": "冰面淘汰",
    "note": "驾驶雪橇在会坍塌的冰面滚雪球，把对手逼出场地。",
    "play": "https://snowball-arena-workbuddy.epic-tetra-9787.chatgpt.site/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者提交明确记录 GPT-6 Astra 参与从滚雪球原型到浮冰淘汰赛的规则和手感迭代。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/143"
      ]
    ],
    "image": "https://github.com/user-attachments/assets/1af21a5c-a96a-4ddf-a306-7909f5ae13ab",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 104
  },
  {
    "id": "toon-tank",
    "name": "泡泡坦克大作战联机版 / Toon Tank Arena",
    "author": "SteveZhang / jay6697117",
    "authorUrl": "https://github.com/jay6697117",
    "kind": "game",
    "status": "other",
    "version": "GPT-6 Astra Pro / GPT-6 Astra",
    "genre": "合作守点",
    "note": "用会反弹的弹丸和道具守住核心，支持单人和合作模式。",
    "play": "https://toon-tank-arena.jay6697117.deno.net/",
    "source": "entry",
    "rights": "可从作者入口试玩。项目级源码及素材复用许可未见公开声明。",
    "evidence": "作者提交称首版为 GPT-6 Astra Pro，后续实现继续使用 Codex 中的 GPT-6 Astra。",
    "refs": [
      [
        "作者提交与制作说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/52"
      ]
    ],
    "image": "https://github.com/user-attachments/assets/713d44f3-a77c-452c-ba6d-1231882dc670",
    "imageLabel": "有出处的实机画面",
    "license": "许可证未声明",
    "reviewOrder": 105
  },
  {
    "kind": "game",
    "status": "target",
    "id": "glasswake-pinball",
    "name": "Glasswake Pinball",
    "author": "_nilni",
    "authorUrl": "https://x.com/_nilni",
    "genre": "弹珠台 · 首领挑战",
    "version": "GPT-6.2 Astra",
    "source": "entry",
    "play": "https://www.aigameshare.com/games/glasswake-pinball?mode=fullscreen&play=1",
    "image": "https://aigamelib.com/_a/glasswake-pinball.c7126c7e65.webp",
    "imageSource": "https://aigamelib.com/games/glasswake-pinball",
    "note": "击亮彩窗上的宝石印记，唤醒三位守护者并解锁 Nightglass 双倍计分台。",
    "refs": [
      [
        "作者原帖",
        "https://x.com/_nilni/status/2122771233616060902"
      ],
      [
        "游戏和操作说明",
        "https://aigamelib.com/games/glasswake-pinball"
      ]
    ],
    "quality": 79
  },
  {
    "kind": "game",
    "status": "target",
    "id": "sunward-coast",
    "name": "Sunward",
    "author": "yjrocks712",
    "authorUrl": "https://github.com/yjrocks712",
    "genre": "开放世界竞速",
    "version": "GPT-6 Astra",
    "source": "project",
    "license": "MIT",
    "repo": "yjrocks712/Sunward-by-GPT-6-Astra",
    "local": "Apple 芯片 Mac 下载试玩",
    "url": "https://github.com/yjrocks712/Sunward-by-GPT-6-Astra/releases/tag/v0.1.0",
    "image": "https://raw.githubusercontent.com/yjrocks712/Sunward-by-GPT-6-Astra/main/docs/images/driving.png",
    "imageSource": "https://github.com/yjrocks712/Sunward-by-GPT-6-Astra",
    "note": "在海岸公路漂移和冲刺，挑战三条计时路线。作者提供 Apple 芯片 Mac 版和 Unity 源工程。",
    "refs": [
      [
        "作者制作说明和 MIT 授权",
        "https://github.com/yjrocks712/Sunward-by-GPT-6-Astra#readme"
      ]
    ],
    "quality": 85
  },
  {
    "kind": "game",
    "status": "target",
    "id": "outerstead-first-light",
    "name": "Outerstead · First Light",
    "author": "Lance Edward",
    "authorUrl": "https://lance.name/",
    "genre": "太空殖民生存",
    "version": "GPT-6 Astra",
    "source": "entry",
    "play": "https://outerstead.com/",
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/outerstead/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/blob/main/assets/screenshots/outerstead/SOURCE.md",
    "note": "为四名幸存者安排工作，平衡食物和殖民地资源，并探索 Hollow-7。",
    "refs": [
      [
        "作者发布",
        "https://x.com/LanceBlah/status/2098370893164785761"
      ]
    ],
    "quality": 83
  },
  {
    "kind": "game",
    "status": "target",
    "id": "wildwake-rally",
    "name": "Wildwake Rally",
    "author": "DefyEntropyV",
    "authorUrl": "https://x.com/DefyEntropyV",
    "genre": "山路拉力计时",
    "version": "GPT-6 Astra",
    "source": "entry",
    "play": "https://wildwake-rally.vercel.app/",
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/wildwake-rally/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/blob/main/assets/screenshots/wildwake-rally/SOURCE.md",
    "note": "驾驶低多边形拉力车绕山道跑两圈，练习过弯并挑战单圈成绩。",
    "refs": [
      [
        "作者发布",
        "https://x.com/DefyEntropyV/status/2100226359649820721"
      ]
    ],
    "quality": 78
  },
  {
    "kind": "game",
    "status": "target",
    "id": "icy-tower-frostbound",
    "name": "Icy Tower — Frostbound",
    "author": "SafaElmali",
    "authorUrl": "https://x.com/SafaElmali",
    "genre": "跳跃跑酷",
    "version": "GPT-6 Astra",
    "source": "entry",
    "play": "https://icy-tower-frostbound.netlify.app/",
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/frostbound/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/blob/main/assets/screenshots/frostbound/SOURCE.md",
    "note": "用连续跳跃和蹬墙积累动量，在不断上升的霜线追上之前爬得更高。",
    "refs": [
      [
        "作者发布",
        "https://x.com/SafaElmali/status/2100562918937165996"
      ]
    ],
    "quality": 77
  },
  {
    "kind": "game",
    "status": "target",
    "id": "glider-paper-flight",
    "name": "Glider",
    "author": "mrtwizzles",
    "authorUrl": "https://www.reddit.com/user/mrtwizzles/",
    "genre": "纸飞机竞速与探索",
    "version": "GPT-6 Astra",
    "source": "entry",
    "play": "https://glider.game/",
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/glider-game/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/blob/main/assets/screenshots/glider-game/SOURCE.md",
    "note": "发射纸飞机，穿越圆环连击、收集金币，在不同地形挑战距离和特技成绩。",
    "refs": [
      [
        "制作归因",
        "https://www.reddit.com/r/ChatGPT/comments/1we6ws0/glidergame_gpt6_astra_xhigh_with_34_hours_of_my/"
      ]
    ],
    "quality": 82
  },
  {
    "kind": "game",
    "status": "target",
    "id": "race-jimothy",
    "name": "Race Jimothy",
    "author": "rayttm",
    "authorUrl": "https://github.com/rayttm",
    "genre": "涂鸦竞速",
    "version": "GPT-6 Astra",
    "source": "project",
    "repo": "rayttm/race-jimothy",
    "play": "https://rayttm.github.io/race-jimothy/",
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/race-jimothy/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/blob/main/assets/screenshots/race-jimothy/SOURCE.md",
    "note": "用画布涂鸦做出参赛者，和浣熊 Jimothy 跑一场 30 米对决。仓库提供实际运行的 Canvas 源码。",
    "refs": [
      [
        "作者发布",
        "https://x.com/YutingM84881/status/2099737945414750718"
      ],
      [
        "可运行源码",
        "https://github.com/rayttm/race-jimothy"
      ]
    ],
    "quality": 81
  },
  {
    "id": "blackburn-type-d",
    "name": "Blackburn Type D",
    "repo": "Dun4ev/blackburn-flight",
    "repoUrl": "https://github.com/Dun4ev/blackburn-flight",
    "genre": "飞行挑战",
    "note": "驾驶早期 Blackburn Type D 飞机，操纵方向和高度穿过四个环。",
    "play": "https://blackburn-flight.pages.dev/",
    "source": "project",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "refs": [
      [
        "作者源码与模型记录",
        "https://github.com/Dun4ev/blackburn-flight"
      ]
    ],
    "added": "2026-11-21",
    "author": "Andrej Dunaev"
  },
  {
    "id": "hamster-colony",
    "name": "Burrow — Sunflower Hollow（仓鼠群落）",
    "repo": "KostiKoNeuro/astra-6-2-solo",
    "repoUrl": "https://github.com/KostiKoNeuro/astra-6-2-solo/tree/main/5-hamsters",
    "genre": "群落模拟",
    "note": "观察仓鼠觅食、饮水、社交和繁殖，调节速度并查看个体状态。",
    "play": "https://kostikoneuro.github.io/astra-6-2-solo/5-hamsters/game/",
    "source": "single",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "refs": [
      [
        "作者源码与模型记录",
        "https://github.com/KostiKoNeuro/astra-6-2-solo"
      ]
    ],
    "added": "2026-11-21"
  },
  {
    "id": "dusk-runner-rooftop-time-trial",
    "name": "Dusk Runner — Rooftop Time Trial",
    "repo": "clockendbader/model-arena",
    "repoUrl": "https://github.com/clockendbader/model-arena/tree/main/astra-6.2/parkour",
    "genre": "3D 屋顶跑酷",
    "note": "跳过屋顶障碍并缩短通关时间。同提示词对照中的 Astra 版。",
    "play": "https://clockendbader.github.io/model-arena/astra-6.2/parkour/",
    "source": "project",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "refs": [
      [
        "作者源码与模型记录",
        "https://github.com/clockendbader/model-arena"
      ]
    ],
    "added": "2026-11-21"
  },
  {
    "id": "uno-com-escada-astra",
    "name": "Uno com escada · Astra 版",
    "repo": "viktorkav/uno-com-escada",
    "repoUrl": "https://github.com/viktorkav/uno-com-escada/tree/main/astra",
    "genre": "山路竞速",
    "note": "驾驶车顶绑梯子的 Fiat Uno 跑山路赛道。这里是同一需求下的 Astra 版本。",
    "play": "https://viktorkav.com.br/apoio/uno-com-escada/astra/",
    "source": "project",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "refs": [
      [
        "作者源码与模型记录",
        "https://github.com/viktorkav/uno-com-escada"
      ],
      [
        "代码许可",
        "https://github.com/viktorkav/uno-com-escada/blob/main/LICENSE.md"
      ]
    ],
    "added": "2026-11-21",
    "license": "PolyForm Noncommercial 1.0.0",
    "image": "https://raw.githubusercontent.com/viktorkav/uno-com-escada/main/.github/screenshots/astra-largada.jpg",
    "imageSource": "https://github.com/viktorkav/uno-com-escada/blob/main/.github/screenshots/astra-largada.jpg",
    "imageLabel": "作者实机截图"
  },
  {
    "id": "faultline-cold-relay",
    "name": "FAULTLINE — Cold Relay",
    "repo": "Yari-tuber/gpt62-vs-opus55-tests",
    "repoUrl": "https://github.com/Yari-tuber/gpt62-vs-opus55-tests/tree/main/05_%E4%B8%80%E5%8F%A5%E8%AF%9D3A%E5%B0%84%E5%87%BB/gpt-6.2-astra",
    "genre": "第一人称射击",
    "note": "在冷色调的无线电站关卡探索与交火。",
    "local": "在本地 Chrome 或 Edge 打开 index.html",
    "url": "https://github.com/Yari-tuber/gpt62-vs-opus55-tests/tree/main/05_%E4%B8%80%E5%8F%A5%E8%AF%9D3A%E5%B0%84%E5%87%BB/gpt-6.2-astra",
    "source": "single",
    "kind": "game",
    "status": "target",
    "version": "GPT-6.2 Astra",
    "refs": [
      [
        "作者源码与模型记录",
        "https://github.com/Yari-tuber/gpt62-vs-opus55-tests"
      ],
      [
        "代码许可",
        "https://github.com/Yari-tuber/gpt62-vs-opus55-tests/blob/main/LICENSE"
      ]
    ],
    "added": "2026-11-21",
    "license": "MIT"
  },
  {
    "id": "mosswing",
    "name": "Mosswing",
    "author": "Ayi1337",
    "authorUrl": "https://github.com/Ayi1337",
    "genre": "3D 反应街机",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "project",
    "repo": "Ayi1337/gpt6-astra-one-shot-games",
    "repoUrl": "https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing",
    "play": "https://mosswing-quiet-flight.jack-514.chatgpt.site/",
    "note": "点按控制飞行高度，穿过成排石柱并刷新分数。",
    "refs": [
      [
        "作者模型说明",
        "https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/mosswing/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/mosswing",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "mystery-town",
    "name": "Mystery Town",
    "author": "EggOrbit Games",
    "authorUrl": "https://playableworld.itch.io/",
    "genre": "场景解谜",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://playableworld.itch.io/mystery-town",
    "note": "观察微缩场景并调整物品，找到让事件依次发生的顺序。",
    "refs": [
      [
        "作者模型说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/80"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/mystery-town/gameplay.png",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/mystery-town",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "little-kingdom-chess",
    "name": "Little Kingdom Chess / 작은 왕국 체스",
    "author": "에코_eco",
    "authorUrl": "https://x.com/echo3042",
    "genre": "3D 棋类",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://little-kingdom-chess.echo3042.chatgpt.site/",
    "note": "在可旋转的微缩棋盘上和电脑下棋，支持回看棋步与悔棋。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/echo3042/status/2096123409029886250"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/little-kingdom-chess/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/little-kingdom-chess",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "canteen-crashers",
    "name": "Canteen Crashers",
    "author": "Chong-U / chongdashu",
    "authorUrl": "https://x.com/chongdashu",
    "genre": "合作潜行",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://wavedash.com/games/canteen-crashers",
    "note": "搜集三张食谱并送回厨房，利用道具和滑行躲开厨师。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/chongdashu/status/2100207494375285029"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/canteen-crashers/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/canteen-crashers",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "above-the-rooftops",
    "name": "Above the Rooftops",
    "author": "Tushar / @TusharXo",
    "authorUrl": "https://x.com/TusharXo",
    "genre": "风筝模拟",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://app.usecrayon.ai/play/d09bb865-2259-42e2-86cc-fb609a9d6f28",
    "note": "为风筝上色，在屋顶上方控制线的张力，尝试限时飞行。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/TusharXo/status/2098156783181467801"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/above-the-rooftops/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/above-the-rooftops",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "starship-foundry",
    "name": "Starship Foundry — Isometric Flight Lab",
    "author": "Aaron Wacker",
    "authorUrl": "https://x.com/Aaron_Wacker",
    "genre": "组装与飞行",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://allaiinc.org/Starship-Foundry-Isometric-Flight-Lab.html",
    "note": "拼装模块飞船，检查部件连接，驾驶它穿过特技圆环。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/Aaron_Wacker/status/2100382539697254828"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/starship-foundry/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/starship-foundry",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "neon-wake",
    "name": "Neon Wake — Dubai Coast",
    "author": "Captain M1K / Ethra",
    "authorUrl": "https://x.com/captain_m1k",
    "genre": "快艇竞速",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://neonwake.ethraship.com/",
    "note": "沿迪拜海岸驾驶快艇，通过八个区段，利用跳台和加速缩短圈速。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/captain_m1k/status/2098310479714369926"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/neon-wake/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/neon-wake",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "skicross",
    "name": "SKICROSS — Alpine Downhill",
    "author": "Sonic的奇思妙想",
    "authorUrl": "https://x.com/sonic0828",
    "genre": "滑雪竞速",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://iamsonic.net/2026/mini-games/skicross.html",
    "note": "在雪坡上穿过旗门和障碍，与滑手竞争并避开雪崩。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/sonic0828/status/2097601232877781344"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/skicross/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/skicross",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "hot-wheeler",
    "name": "Hot Wheeler",
    "author": "Varun Arora",
    "authorUrl": "https://x.com/varavibes",
    "genre": "玩具车特技",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://hot-wheeler.vercel.app/",
    "note": "驾驶玩具车驶过环形轨道、跳台和加速垫。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/varavibes/status/2099269587401580886"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/hot-wheeler/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/hot-wheeler",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "bengaluru-orr-rush",
    "name": "Bengaluru ORR Rush",
    "author": "Ravi Theja",
    "authorUrl": "https://x.com/ravithejads",
    "genre": "公路竞速",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://orr-rush-bengaluru.ravitheja.chatgpt.site/",
    "note": "穿过班加罗尔车流，躲避坑洼与配送车，利用加速争取空间。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/ravithejads/status/2097181044625887392"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/bengaluru-orr-rush/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/bengaluru-orr-rush",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "mog-mode",
    "name": "Mog Mode",
    "author": "Dylan Elder / Yesterday Arcade",
    "authorUrl": "https://x.com/YesterdayArcade",
    "genre": "节奏街机",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://yesterdayarcade.com/games/mog-mode/",
    "note": "选择角色参加合影，在正确时机完成四次握手挑战。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/YesterdayArcade/status/2100510743422734658"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/mog-mode/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/mog-mode",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "drone-io",
    "name": "DRONE.IO — Proving Grounds",
    "author": "Angello",
    "authorUrl": "https://x.com/OMASMohamad",
    "genre": "无人机竞技",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://drone-io.vercel.app/",
    "note": "驾驶无人机在竞技场与电脑对手比拼，利用雷达并解锁升级。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/OMASMohamad/status/2101830659358478516"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/drone-io/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/drone-io",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "asteroids-deepfield",
    "name": "ASTEROIDS · Deepfield",
    "author": "Eyes Wide Open",
    "authorUrl": "https://x.com/DantesClown",
    "genre": "太空街机",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://asteroids-deepfield-cockpit.dan200200.chatgpt.site/",
    "note": "驾驶惯性飞船，通过雷达和多视角观察，用双炮清理小行星。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/DantesClown/status/2096085439052452064"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/asteroids-deepfield/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/asteroids-deepfield",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "astra-floor",
    "name": "Astra Floor",
    "author": "BEROCHLU",
    "authorUrl": "https://github.com/BEROCHLU",
    "genre": "生存射击",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://astrafloor.berochlu.workers.dev/",
    "note": "在不断增多的僵尸中生存，管理体力与武器，并挑战首领。作者披露 Antigravity 2.0 参与后续实现与优化。",
    "refs": [
      [
        "作者模型说明",
        "https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/96"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/astra-floor/gameplay.png",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/astra-floor",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "canyon-overdrive",
    "name": "Canyon Overdrive",
    "author": "Marco van Hylckama Vlieg / AI & Design",
    "authorUrl": "https://x.com/AIandDesign",
    "genre": "飞行射击",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://canyonoverdrive.ai-created.com/",
    "note": "驾驶战机钻过霓虹峡谷，闪避来袭攻击并突破封锁。作者同时使用了 GPT-6.1 Sol。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/AIandDesign/status/2105465838946140499"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/canyon-overdrive/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/canyon-overdrive",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "ascii-district",
    "name": "ASCII DISTRICT",
    "author": "Acker Code",
    "authorUrl": "https://x.com/acker_code",
    "genre": "字符风射击",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://ascii-district.vercel.app/",
    "note": "在 ASCII 字符绘制的竞技场中跳跃、滑铲并抵御不断来袭的敌人。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/acker_code/status/2097542957070975286"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/ascii-district/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/ascii-district",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "chrono-raid",
    "name": "CHRONO RAID · SUZUNE & AOI",
    "author": "SZOU / @szounft",
    "authorUrl": "https://x.com/szounft",
    "genre": "首领战",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://suzune-aoi-fighters.szou2003.chatgpt.site/",
    "note": "在近战和远程角色间选择，躲开机械首领的攻击并发动特殊招式。作者使用 Seedance 和 H3 生成角色动画。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/szounft/status/2098310992770007365"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/chrono-raid/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/chrono-raid",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "loulous-apartment",
    "name": "Loulou’s Apartment",
    "author": "Louise de Sadeleer",
    "authorUrl": "https://x.com/LouiseDSadeleer",
    "genre": "互动探索",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://loulous-apartment.vercel.app/",
    "note": "游览温馨公寓，与家具互动，还可以摸摸狗狗 Maggie。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/LouiseDSadeleer/status/2098340442500653368"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/loulous-apartment/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/loulous-apartment",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "underground-boxing",
    "name": "UNDERGROUND — Underground Boxing",
    "author": "Sonic的奇思妙想",
    "authorUrl": "https://x.com/sonic0828",
    "genre": "拳击",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://iamsonic.net/2026/mini-games/underground-boxing.html",
    "note": "参加三回合地下拳赛，在出拳、格挡、闪躲和体力之间取舍。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/sonic0828/status/2097601232877781344"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/underground-boxing/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/underground-boxing",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "zero-district-shells-3d",
    "name": "Zero District — Shells 3D",
    "author": "Sonic的奇思妙想",
    "authorUrl": "https://x.com/sonic0828",
    "genre": "限时生存",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://iamsonic.net/2026/mini-games/shells-3d/play.html",
    "note": "在城市围攻中坚持三分钟，拾取经验并选择升级。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/sonic0828/status/2097601232877781344"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/zero-district-shells-3d/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/zero-district-shells-3d",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "crayon-space-bike",
    "name": "Strange Orbit",
    "author": "Crayon",
    "authorUrl": "https://x.com/usecrayon",
    "genre": "太空竞速",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://app.usecrayon.ai/play/47df78e2-1410-45d1-833c-196e1161c0b8",
    "note": "骑车绕行行星环，收集星尘并借助尾流和加速超越对手。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/usecrayon/status/2097468975995302167"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/crayon-space-bike/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/crayon-space-bike",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "the-crownless",
    "name": "The Crownless",
    "author": "Izkimar",
    "authorUrl": "https://x.com/Izkimar",
    "genre": "动作 Roguelite",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://www.spawn.co/@izkimar/the-crownless/play",
    "note": "向砂岩堡垒高处推进，连招战斗并用收集的灵魂解锁能力。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/Izkimar/status/2100753871903855095"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/the-crownless/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/the-crownless",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "cosmic-tides",
    "name": "Cosmic Tides",
    "author": "Aniket J",
    "authorUrl": "https://x.com/aniketjart",
    "genre": "太空竞速",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://app.usecrayon.ai/play/362ae1e7-29bd-4fbc-9103-00649265d942",
    "note": "驾驶飞行器沿发光门穿越星海，参加计时赛或自由漂移。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/aniketjart/status/2098207146647433534"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/cosmic-tides/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/cosmic-tides",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "neural-sight",
    "name": "Neural Sight",
    "author": "Earl Cameron",
    "authorUrl": "https://x.com/monstercameron",
    "genre": "第一人称冒险",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "project",
    "repo": "monstercameron/Neural-Sight",
    "play": "https://monstercameron.github.io/Neural-Sight/",
    "note": "在高斯溅射构建的场景中探索并对付来袭敌人。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/monstercameron/status/2097117275127959629"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/neural-sight/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/neural-sight",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  },
  {
    "id": "duskline-canyon-circuit",
    "name": "DUSKLINE — Canyon Circuit",
    "author": "Abu Hadi",
    "authorUrl": "https://x.com/1banke",
    "genre": "山谷竞速",
    "version": "GPT-6 Astra",
    "kind": "game",
    "status": "target",
    "source": "entry",
    "play": "https://duskline-canyon-run.abdulhadi-ai.chatgpt.site/",
    "note": "在日落峡谷赛道挑战圈速，可切换追车视角。",
    "refs": [
      [
        "作者模型说明",
        "https://x.com/1banke/status/2096394721115390301"
      ]
    ],
    "image": "https://raw.githubusercontent.com/fatasia/awesome-gpt-6-astra-games/main/assets/screenshots/duskline-canyon-circuit/gameplay.jpg",
    "imageSource": "https://github.com/fatasia/awesome-gpt-6-astra-games/tree/main/assets/screenshots/duskline-canyon-circuit",
    "imageLabel": "实机截图",
    "added": "2026-11-21"
  }
];
