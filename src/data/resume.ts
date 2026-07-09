import { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  basics: {
    name: "李思齐",
    label: "三维动画 · AIGC 创作者",
    email: "1420251964@qq.com",
    phone: "15677991252",
    avatar: "/photo.jpg",
    summary:
      "三维动画专业，具备扎实的影视制作基础与丰富的 AIGC 实践经验。熟练运用 AI 视频生成工具（可灵、即梦等），擅长镜头语言描述、光影分析和风格识别。有 AI 短剧从分镜到成片的完整制作经验。",
    location: {
      city: "河北唐山",
      country: "CN",
    },
    profiles: [
      { network: "GitHub", url: "https://github.com/wwWW306", icon: "github" },
      { network: "Email", url: "mailto:1420251964@qq.com", icon: "mail" },
      { network: "Web", url: "https://wwWW306.github.io/resume-website/", icon: "link" },
    ],
  },
  experience: [
    {
      company: "AI 短剧项目",
      position: "AI 短剧动画师（可灵/即梦工具）",
      startDate: "2024",
      endDate: "",
      current: true,
      summary:
        "负责 AI 短剧的动画制作全流程，运用可灵、即梦等 AIGC 工具进行角色动画生成、场景合成和后期处理，累计完成多部 AI 短剧作品。",
      highlights: [
        "使用可灵 AI 等视频生成工具完成角色动作设计与场景动画，对生成视频进行精细化 Caption 标注和质量把控",
        "独立完成从分镜设计到成片输出的完整 AIGC 动画管线，涵盖镜头语言设计、光影效果调优、风格统一性控制",
        "结合三维动画专业背景，对 AI 生成视频进行艺术质量评估，包括构图、色彩、服化道风格一致性检查",
        "针对不同风格（古风、赛博朋克、写实等）优化 Prompt 和生成参数，提升画面质量与风格准确性",
      ],
    },
    {
      company: "北海艺术设计学院",
      position: "动画短片《红豆》· 分镜师",
      startDate: "2024",
      endDate: "2025",
      summary:
        "参与学院自制动画短片项目，负责全片分镜设计与镜头语言规划。",
      highlights: [
        "根据剧本完成 30+ 关键场景的分镜绘制，涵盖远景、中景、特写等多机位设计",
        "标注每个镜头的景别、运镜方式、光影方向和情绪基调，输出标准分镜表",
        "与动画组协作确保分镜到成片的流畅衔接，积累了丰富的镜头描述经验",
      ],
    },
    {
      company: "北海艺术设计学院",
      position: "学院贺岁片 · 灯光师",
      startDate: "2024",
      endDate: "2025",
      summary:
        "参与学院贺岁短片拍摄，独立负责灯光设计与现场执行。",
      highlights: [
        "根据场景氛围需求设计布光方案，熟练运用主光、辅光、轮廓光等多光源组合",
        "配合导演和摄影完成现场灯光调度，对不同时段、不同场景的光影效果有深入理解",
        "积累了影视拍摄现场的实战经验，熟悉影视工业化流程",
      ],
    },
    {
      company: "大创项目组",
      position: "文创 AI Agent 开发",
      startDate: "2025",
      endDate: "",
      summary:
        "为大创项目组开发文创方向的 AI 智能体应用，探索 AIGC 在内容创作领域的落地。",
      highlights: [
        "基于 AI Agent 架构搭建文创内容生成工具，集成多种 AIGC 模型能力",
        "对 AI 生成内容进行质量评估和标注反馈，优化生成效果",
      ],
    },
  ],
  projects: [
    {
      slug: "ai-animation",
      name: "AI 动画短片作品",
      video: "/ai-animation.mp4",
      description:
        "运用可灵、即梦等 AIGC 工具完成的动画短片，展示从分镜到成片的 AI 辅助创作能力。",
      detail:
        "运用 AI 视频生成工具（可灵、即梦等），结合三维动画专业知识进行角色动作设计、场景合成和后期处理。从分镜设计到成片输出，完整实践 AI 辅助动画创作流程。\n\n"
        + "在 AI 生成基础上进行精细调优：包括角色一致性控制、动作流畅度优化、光影效果校正和画面质感提升。每帧画面均经过 Caption 标注和质量自检。\n\n"
        + "展示了古风、现代、科幻等多种风格的 AI 视频生成能力，对不同风格的 Prompt 工程有深入理解。",
      techStack: ["可灵 AI", "即梦", "AI 视频生成", "分镜设计", "后期合成"],
    },
    {
      slug: "film-agent",
      name: "AI 漫剧创作智能体",
      image: "/agent-screenshots/agent-01.png",
      images: [
        "/agent-screenshots/agent-01.png",
        "/agent-screenshots/agent-02.png",
        "/agent-screenshots/agent-03.png",
        "/agent-screenshots/agent-04.png",
        "/agent-screenshots/agent-05.png",
        "/agent-screenshots/agent-06.png",
      ],
      description:
        "基于 AI Agent 架构的影视创作工具，集成 25+ 专业技能模块，覆盖从剧本到视频生成的完整管线。",
      detail:
        "构建面向漫剧/短剧创作的 AI 智能体系统。内置角色设计、分镜生成、剧本改编、场景提取、对话提取、道具清单、风格圣经、视频生成等 25 个专业技能模块。\n\n"
        + "支持从小说到分镜的端到端创作流程：小说 → 角色提取 → 场景拆解 → 分镜提示词 → 视频生成。每个技能可独立调用或串联为完整创作管线。\n\n"
        + "技术栈基于 Bun + Electron，使用 TypeScript 开发，Agent 架构支持工具链编排和上下文管理。",
      techStack: ["AI Agent", "视频生成", "分镜系统", "TypeScript", "Claude Code SDK"],
      github: "https://github.com/win4r/free-code",
    },
    {
      slug: "3d-modeling",
      name: "三维模型与美术作品",
      image: "/3d-ocean/ocean-02.png",
      images: [
        "/3d-ocean/ocean-02.png",
        "/3d-ocean/ocean-01.png",
        "/3d-ocean/ocean-03.png",
        "/3d-ocean/ocean-04.png",
      ],
      description:
        "三维动画专业作品集，展示角色建模、场景设计、材质光影等美术基础能力。",
      detail:
        "运用 C4D、ZBrush 等专业三维软件完成角色和场景建模。作品涵盖角色设计、海洋场景构建、海底生态模拟等多个方向。\n\n"
        + "包含完整的模型文件（.c4d / .fbx / .obj），贴图纹理均独立制作，注重材质质感、光影表现和艺术风格统一性。\n\n"
        + "对古风、写实、卡通等多种美术风格有深入理解，能够快速识别和区分不同艺术流派特征。",
      techStack: ["C4D", "ZBrush", "3D Modeling", "角色设计", "材质光影"],
    },
    {
      slug: "campus-wall",
      name: "北海校园墙",
      image: "/campus-wall-hero.png",
      description:
        "面向北海高校学生的校园社区 Web 应用，支持动态发布、实时消息、兴趣分区和用户系统。",
      detail:
        "独立完成从设计到开发到部署的全流程。前端采用 Vue 3 + Vite 构建 SPA，使用 Pinia 管理状态，Vue Router 实现多页面路由。\n\n"
        + "首页使用 Three.js 实现 WebGL 3D 动画背景，增强视觉冲击力。实现了完整的用户认证系统、实时消息推送、动态发布、兴趣分区浏览、搜索、通知、暗色模式切换等模块。\n\n"
        + "移动端适配完善，通过 GitHub Actions 自动部署到 GitHub Pages。",
      techStack: ["Vue 3", "Vite", "Pinia", "Three.js", "Axios"],
      url: "https://wwWW306.github.io/beihai-campus-wall-portal/",
      github: "https://github.com/wwWW306/beihai-campus-wall-portal",
    },
  ],
  skills: [
    {
      category: "AIGC 创作",
      items: ["可灵 AI", "即梦", "AI 视频生成", "AI 动画制作", "Prompt 工程", "Caption 标注"],
    },
    {
      category: "影视制作",
      items: ["分镜设计", "镜头语言", "灯光设计", "布光方案", "影视后期", "风格识别"],
    },
    {
      category: "美术设计",
      items: ["C4D", "ZBrush", "角色建模", "场景设计", "材质光影", "视觉设计"],
    },
    {
      category: "技术工具",
      items: ["TypeScript", "Python", "Vue 3", "React", "AI Agent 开发"],
    },
  ],
  education: [
    {
      institution: "北海艺术设计学院",
      area: "动画（三维方向）",
      studyType: "本科",
      startDate: "2023-09",
      endDate: "2027-06",
    },
  ],
};
