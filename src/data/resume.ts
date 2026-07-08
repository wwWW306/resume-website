import { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  basics: {
    name: "李思齐",
    label: "三维动画专业 · UI 设计与前端开发",
    email: "1420251964@qq.com",
    phone: "15677991252",
    avatar: "/photo.jpg",
    summary:
      "三维动画专业在读，兼具视觉设计、动画制作与全栈开发能力。获即梦创作者大赛优秀奖、大学生心理大赛市级奖等多项荣誉。独立完成多个 Web 应用的设计与开发。",
    location: {
      city: "河北唐山",
      country: "CN",
    },
    profiles: [
      { network: "GitHub", url: "https://github.com/wwWW306", icon: "github" },
      { network: "Email", url: "mailto:1420251964@qq.com", icon: "mail" },
    ],
  },
  experience: [
    {
      company: "", // 待补充公司名
      position: "AI 短剧动画师",
      startDate: "", // 待补充
      endDate: "",
      current: true,
      summary: "负责 AI 短剧的动画制作，运用 AI 工具进行角色动画、场景合成和后期处理。",
      highlights: [
        "运用 AI 动画工具完成短剧角色动作设计与场景动画",
        "参与短剧从分镜到成片的完整制作流程",
        "结合动画专业知识优化 AI 生成效果，提升画面质量",
      ],
    },
    {
      company: "北海艺术设计学院",
      position: "动画短片《红豆》· 分镜制作",
      startDate: "2024",
      endDate: "2025",
      summary: "参与学院自制动画短片项目，负责分镜设计与制作。",
      highlights: [
        "根据剧本完成关键场景的分镜绘制",
        "与动画组协作确保分镜到成片的流畅衔接",
      ],
    },
    {
      company: "北海艺术设计学院",
      position: "学院贺岁片 · 灯光师",
      startDate: "2024",
      endDate: "2025",
      summary: "参与学院贺岁短片拍摄，担任灯光设计与执行。",
      highlights: [
        "根据场景需求设计布光方案，营造符合剧情的氛围",
        "配合导演和摄影完成现场灯光调度",
      ],
    },
    {
      company: "大创项目组",
      position: "文创 AI Agent 开发",
      startDate: "2025",
      endDate: "",
      summary: "为大创项目组开发文创方向的 AI 智能体应用。",
      highlights: [
        "基于 AI Agent 架构搭建文创内容生成工具",
        "结合动画与设计背景优化 Agent 输出质量",
      ],
    },
  ],
  projects: [
    {
      slug: "campus-wall",
      name: "北海校园墙",
      image: "/campus-wall-hero.png",
      description:
        "面向北海高校学生的校园社区 Web 应用，支持动态发布、实时消息、兴趣分区和用户系统。",
      detail:
        "独立完成从设计到开发到部署的全流程。前端采用 Vue 3 + Vite 构建 SPA，使用 Pinia 管理状态，Vue Router 实现多页面路由。\n\n"
        + "首页使用 Three.js 实现 WebGL 3D 动画背景，增强视觉冲击力。实现了完整的用户认证系统、实时消息推送、动态发布（支持图片上传和链接预览）、兴趣分区浏览、搜索、通知、暗色模式切换、后台管理等模块。\n\n"
        + "移动端适配完善，使用响应式布局 + 底部标签栏，确保手机浏览体验。通过 GitHub Actions 自动部署到 GitHub Pages。",
      techStack: ["Vue 3", "Vite", "Pinia", "Vue Router", "Three.js", "Axios"],
      url: "https://wwWW306.github.io/beihai-campus-wall-portal/",
      github: "https://github.com/wwWW306/beihai-campus-wall-portal",
    },
    {
      slug: "3d-modeling",
      name: "三维模型作品",
      image: "/3d-ocean/ocean-02.png",
      images: [
        "/3d-ocean/ocean-02.png",
        "/3d-ocean/ocean-01.png",
        "/3d-ocean/ocean-03.png",
        "/3d-ocean/ocean-04.png",
      ],
      description:
        "三维动画专业作品集，包含角色建模、海洋场景、海底生态等三维创作。",
      detail:
        "运用 C4D、ZBrush 等专业三维软件完成角色和场景建模。作品涵盖角色设计、海洋场景构建、海底生态模拟等多个方向。\n\n"
        + "包含完整的模型文件（.c4d / .fbx / .obj），支持多格式导出。贴图纹理均独立制作，注重材质质感和光影表现。",
      techStack: ["C4D", "ZBrush", "3D Modeling", "角色建模", "场景设计"],
    },
    {
      slug: "ai-animation",
      name: "AI 动画短片",
      video: "/ai-animation.mp4",
      description:
        "运用 AI 工具完成的动画短片作品，结合动画专业知识优化 AI 生成效果。",
      detail:
        "运用 AI 动画生成工具，结合三维动画专业知识进行角色动作设计、场景合成和后期处理。从分镜设计到成片输出，完整实践 AI 辅助动画创作流程。\n\n"
        + "在 AI 生成基础上进行精细调优，包括角色一致性控制、动作流畅度优化和画面质感提升。",
      techStack: ["AI 动画生成", "分镜设计", "后期合成", "角色动画"],
    },
    {
      slug: "film-agent",
      name: "AI 漫剧智能体",
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
        "基于 Claude Code 架构的 AI 影视创作工具，集成 25+ 专业创作技能，覆盖从剧本到成片的完整管线。",
      detail:
        "在 free-code 开源项目基础上进行二次开发，构建面向漫剧创作的 AI 智能体系统。内置角色设计、分镜生成、剧本改编、场景提取、对话提取、道具清单、风格圣经、视频生成等 25 个专业技能模块。\n\n"
        + "支持从小说到分镜的端到端创作流程：小说 → 角色提取 → 场景拆解 → 分镜提示词 → 视频生成。每个技能可独立调用或串联为完整创作管线。\n\n"
        + "技术栈基于 Bun + Electron，使用 TypeScript 开发，Agent 架构支持工具链编排和上下文管理。",
      techStack: ["TypeScript", "Bun", "Electron", "AI Agent", "Claude Code SDK"],
      github: "https://github.com/win4r/free-code",
    },
    {
      slug: "techflow",
      name: "AI 工作流画布",
      image: "/techflow.jpg",
      description:
        "AI 工作流可视化构建器，支持拖拽编排 AI 模型节点，前后端分离架构。",
      detail:
        "前端使用 React 19 + TypeScript + Vite 构建可视化画布界面，支持节点拖拽、连线编辑和实时预览。后端使用 Python FastAPI 提供 API 服务，集成多种 AI 模型调用。\n\n"
        + "采用 Supabase 作为数据存储，支持工作流的保存、加载和分享。画布交互参考了主流工作流工具的设计模式。",
      techStack: ["React 19", "TypeScript", "FastAPI", "Python", "Supabase"],
      github: "https://github.com/wwWW306/TechFlow",
    },
    {
      slug: "shift-scheduler",
      name: "智能排班工具",
      image: "/shift-scheduler.png",
      description:
        "面向小型企业的员工排班管理 SPA，支持多角色、班次配置和自动调度。",
      detail:
        "纯前端 SPA 应用，使用原生 JavaScript 实现完整的排班管理系统。支持老板端和员工端双视角，配置工作日、班次、排班规则等参数后自动生成排班表。\n\n"
        + "集成 Supabase 实现用户认证和数据持久化，使用 Resend API 发送排班通知邮件。采用 Hash Router 实现多页面无刷新导航。",
      techStack: ["JavaScript", "Supabase", "Resend API", "SPA", "HTML/CSS"],
      github: "https://github.com/wwWW306/paibanxiaogongju",
    },
  ],
  skills: [
    {
      category: "设计",
      items: ["Figma", "UI Design", "动画设计", "视觉设计", "Three.js"],
    },
    {
      category: "前端",
      items: ["Vue 3", "React 19", "TypeScript", "Tailwind CSS", "Vite", "Next.js"],
    },
    {
      category: "后端 & 数据",
      items: ["Python", "FastAPI", "Supabase", "Node.js", "REST API"],
    },
    {
      category: "AI & 工具",
      items: ["AI Agent 开发", "Claude Code SDK", "AI 动画制作", "分镜设计", "Electron"],
    },
  ],
  education: [
    {
      institution: "北海艺术设计学院",
      area: "动画",
      studyType: "本科",
      startDate: "2023-09",
      endDate: "2027-06",
    },
  ],
};
