"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Shield,
  ChevronRight,
  ArrowRight,
  Copy,
  Check,
  Lock,
  Play,
  Hammer,
  Bug,
  Globe,
  Bot,
  Eye,
  Database,
  Terminal,
  Cpu,
  Zap,
  Search,
  Activity,
} from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("one-liner");

  const commands = {
    "one-liner": "curl -fsSL https://openclaw.ai/install.sh | bash",
    npm: "npm install @openclaw/core",
    hackable: "git clone https://github.com/openclaw/core.git",
    macos: "brew install openclaw",
  };

  const siemTools = [
    {
      name: "Splunk",
      icon: <Activity size={18} className="text-[#3B82F6]" />,
      category: "SIEM",
    },
    {
      name: "Wireshark",
      icon: <Search size={18} className="text-[#3B82F6]" />,
      category: "Traffic",
    },
    {
      name: "Microsoft Sentinel",
      icon: <Shield size={18} className="text-[#3B82F6]" />,
      category: "Cloud SIEM",
    },
    {
      name: "Elasticsearch",
      icon: <Database size={18} className="text-[#3B82F6]" />,
      category: "Log Management",
    },
    {
      name: "IBM QRadar",
      icon: <Lock size={18} className="text-[#3B82F6]" />,
      category: "SIEM",
    },
    {
      name: "CrowdStrike",
      icon: <Zap size={18} className="text-[#3B82F6]" />,
      category: "EDR",
    },
    {
      name: "Burp Suite",
      icon: <Globe size={18} className="text-[#3B82F6]" />,
      category: "Penetration",
    },
    {
      name: "Fortinet",
      icon: <Cpu size={18} className="text-[#3B82F6]" />,
      category: "Firewall",
    },
    {
      name: "Metasploit",
      icon: <Terminal size={18} className="text-[#3B82F6]" />,
      category: "Exploit",
    },
    {
      name: "Nessus",
      icon: <Shield size={18} className="text-[#3B82F6]" />,
      category: "Vulnerability",
    },
  ];

  const whatItDoes = [
    {
      title: "Automated Log Analysis",
      desc: "วิเคราะห์ Log มหาศาลจาก SIEM และ EDR ได้ทันที พร้อมระบุความผิดปกติด้วย AI ที่ถูกฝึกสอนมาเพื่อสาย Cyber โดยเฉพาะ",
      icon: <Database className="text-[#3B82F6]" size={24} />,
    },
    {
      title: "Real-time Threat Hunting",
      desc: "ค้นหาภัยคุกคามเชิงรุก (Threat Hunting) ใน Network ของคุณแบบ 24/7 และแจ้งเตือนเมื่อพบพฤติกรรมที่น่าสงสัย",
      icon: <Eye className="text-[#3B82F6]" size={24} />,
    },
    {
      title: "Incident Response AI",
      desc: "ช่วยสรุปเหตุการณ์ (Incident) และแนะนำขั้นตอน Remediation ให้กับ SOC Analyst เพื่อยับยั้งการโจมตีได้ทันท่วงที",
      icon: <Bot className="text-[#3B82F6]" size={24} />,
    },
    {
      title: "Browser Isolation Control",
      desc: "ควบคุมและตรวจสอบพฤติกรรมการใช้งาน Web Browser ภายในองค์กร เพื่อป้องกัน Malicious Script และ Phishing",
      icon: <Globe className="text-[#3B82F6]" size={24} />,
    },
    {
      title: "Vulnerability Assessment",
      desc: "ตรวจสอบช่องโหว่ของระบบและเรียงลำดับความสำคัญตามความเสี่ยงจริง (Risk-based) พร้อมวิธีแก้ไขแบบ Step-by-step",
      icon: <Bug className="text-[#3B82F6]" size={24} />,
    },
    {
      title: "Custom Security Skills",
      desc: "สร้าง Skill หรือ Plugin เพิ่มเติมเพื่อเชื่อมต่อกับเครื่องมือเฉพาะทางในองค์กรของคุณผ่าน Low-code Interface",
      icon: <Hammer className="text-[#3B82F6]" size={24} />,
    },
  ];

  // ข้อมูลตัวละครหลัก (ACTIVE HEROES) - อัปเดต Image Prompt ตามสไตล์ใหม่
  const [mainCharacters, setMainCharacters] = useState([
    {
      id: 1,
      name: "RED PACKAGE",
      title: "Offensive security & attack simulation",
      level: 15,
      team: "Insurgency",
      theme: "bg-[#C8102E]",
      textColor: "text-white",
      circleColor: "bg-black/15",
      imageUrl: "/assets/redteam-none-bg.png",
      packageName: "RED PACKAGE",
      tagline: "Pentest • Attack Simulation • Reporting",
      version: "v1.3.2",
      priceTHB: 9900,
      originalPriceTHB: 12900,
      discountLabel: "-23% LIMITED",
      details: [
        "จำลองการโจมตีเพื่อหา Weak Points",
        "รายงานช่องโหว่พร้อมหลักฐาน",
        "Remediation แนะนำแบบ Step-by-step",
      ],
    },
    {
      id: 2,
      name: "BLUE PACKAGE",
      title: "SOC operations & detection engineering",
      level: 17,
      team: "Insurgency",
      theme: "bg-[#002366]",
      textColor: "text-white",
      circleColor: "bg-black/35",
      imageUrl: "/assets/purpleteam-none-bg.png",
      packageName: "BLUE PACKAGE",
      tagline: "SOC Triage • Detection Engineering",
      version: "v2.1.0",
      priceTHB: 12900,
      originalPriceTHB: 15900,
      discountLabel: "BEST VALUE",
      details: [
        "สรุป Incident + Triage อัตโนมัติ",
        "ช่วยเขียน/ปรับ SIEM Rules ลด False Positive",
        "Root cause + Timeline จาก Log",
      ],
    },
    {
      id: 3,
      name: "PURPLE PACKAGE",
      title: "Attack ↔ Defense collaboration",
      level: 25,
      team: "Insurgency",
      theme: "bg-[#6A0DAD]",
      textColor: "text-white",
      circleColor: "bg-white/30",
      imageUrl: "/assets/blueteam-none-bg.png",
      packageName: "PURPLE PACKAGE",
      tagline: "MITRE Mapping • Tabletop Simulation",
      version: "v1.8.4",
      priceTHB: 14900,
      originalPriceTHB: 17900,
      discountLabel: "TEAM PLAY",
      details: [
        "Mapping TTPs ↔ Detection ตาม MITRE",
        "ออกแบบ Simulation ให้ทีมซ้อมร่วมกัน",
        "KPI/Report สำหรับผู้บริหาร",
      ],
    },
  ]);

  // ข้อมูล Game Cards (POPULAR GAMES) - อัปเดต Image Prompt ตามสไตล์ใหม่
  const [gameCards, setGameCards] = useState([
    {
      id: 7,
      packageName: "RED PACKAGE",
      helpsWith: "Attack simulation + Pentest reporting",
      currentVersion: "v1.3.2",
      theme: "bg-[#C8102E]",
      glow: "#C8102E",
      imageUrl: "/assets/redteam-none-bg.png",
    },
    {
      id: 8,
      packageName: "BLUE PACKAGE",
      helpsWith: "SOC triage + Detection engineering",
      currentVersion: "v2.1.0",
      theme: "bg-[#002366]",
      glow: "#002366",
      imageUrl: "/assets/blueteam-none-bg.png",
    },
    {
      id: 9,
      packageName: "PURPLE PACKAGE",
      helpsWith: "Attack ↔ Defense collaboration",
      currentVersion: "v1.8.4",
      theme: "bg-[#6A0DAD]",
      glow: "#6A0DAD",
      imageUrl: "/assets/purpleteam-none-bg.png",
    },
  ]);

  const [hoveredGameId, setHoveredGameId] = useState<number | null>(null);

  const hexToRgb = (hex: string) => {
    const cleaned = hex.replace("#", "");
    const full =
      cleaned.length === 3
        ? cleaned
            .split("")
            .map((c) => c + c)
            .join("")
        : cleaned;
    const n = parseInt(full, 16);
    return {
      r: (n >> 16) & 255,
      g: (n >> 8) & 255,
      b: n & 255,
    };
  };

  const cardShadow = (
    glowHex: string,
    isHover: boolean,
    isFeatured: boolean,
  ) => {
    const { r, g, b } = hexToRgb(glowHex);

    // Base shadow: subtle and clean
    const base = "0 18px 45px rgba(2,6,23,0.12), 0 0 0 1px rgba(15,23,42,0.08)";

    if (!isHover) return base;

    // Hover glow: sharper (less blur) + clearer rim
    const glowA = isFeatured ? 0.36 : 0.28;
    const rimA = isFeatured ? 0.55 : 0.45;
    return `${base}, 0 14px 34px rgba(${r},${g},${b},${glowA}), 0 0 0 1px rgba(${r},${g},${b},${rimA})`;
  };

  const handleCopy = () => {
    const command = commands[activeTab];
    const textArea = document.createElement("textarea");
    textArea.value = command;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="h-dvh bg-[#FDFBF7] font-sans overflow-x-hidden overflow-y-auto text-slate-900 snap-y snap-mandatory scroll-smooth">
      {/* SECTION 1: HERO BANNER */}
      <section className="relative w-full h-dvh overflow-hidden snap-start snap-always">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: `url('/assets/hero-banner.png')`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-blue-500/10 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full h-full flex items-stretch">
          <div className="w-full md:w-1/2 lg:md:w-1/3 h-full px-5 sm:px-8 lg:md:px-16 py-10 sm:py-12 md:py-0 bg-slate-900/55 backdrop-blur-sm border border-blue-500/20 shadow-2xl flex flex-col justify-center rounded-xs">
            <h1 className="text-4xl sm:text-5xl lg:md:text-6xl font-black text-white leading-tight mb-4 tracking-tighter up">
              Cyber Duck <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
                SOC AI
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium mb-4">
              SOC AI automation works for analysts from start to finish
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button className="animate-bounce px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm tracking-widest transition-all flex items-center gap-2 group shadow-lg shadow-blue-500/20">
                FREE TRIAL
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black text-sm tracking-widest transition-all backdrop-blur-md flex items-center gap-2">
                <Play size={18} className="fill-white" />
                DEMO
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-10 sm:py-12 relative z-20 md:space-y-8 sm:space-y-4">
        {/* SECTION 2: OVERVIEWS */}
        <section className="snap-start snap-always relative z-20 h-full md:h-[50dvh] mb-6 md:mb-0 flex flex-col">
          <div className="flex items-center gap-3 py-4 md:pb-4">
            <div className="bg-blue-600 p-1.5 rounded-xl">
              <ChevronRight className="text-white" size={20} strokeWidth={3} />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tighter uppercase text-slate-900">
              Overviews
            </h2>
          </div>

          <div className="md:mt-auto grid grid-cols-3 items-end gap-0 sm:gap-0 md:gap-6 md:pt-4">
            {gameCards.map((g) => (
              <div
                key={g.id}
                onMouseEnter={() => setHoveredGameId(g.id)}
                onMouseLeave={() => setHoveredGameId(null)}
                className={`relative w-full max-w-none origin-bottom scale-[0.78] sm:scale-[0.9] md:scale-100 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2 ${
                  g.id === 8
                    ? "-translate-y-4 md:-translate-y-6 z-10 hover:-translate-y-6 md:hover:-translate-y-8"
                    : ""
                }`}
              >
                <div
                  style={{
                    boxShadow: cardShadow(
                      g.glow ?? "#3B82F6",
                      hoveredGameId === g.id,
                      g.id === 8,
                    ),
                  }}
                  className={`${g.theme} h-44 sm:h-60 md:h-64 w-full rounded-2xl flex flex-col justify-end p-2 sm:p-7 md:p-6 relative overflow-hidden transition-shadow duration-300 will-change-[box-shadow]`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-white text-[12px] sm:text-xl lg:text-2xl font-black tracking-tight">
                      {g.packageName}
                    </h4>
                    <p className="text-white/70 text-[8px] sm:text-xs lg:text-xs font-bold uppercase tracking-wider">
                      {g.helpsWith}
                    </p>
                    <p className="text-white/60 text-[7px] sm:text-[11px] font-black tracking-widest uppercase mt-1">
                      VERSION
                      <span className="text-yellow-300 ml-2">
                        {g.currentVersion}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="absolute -top-20 sm:-top-22 md:-top-24 left-1/2 -translate-x-1/2 w-full h-56 sm:h-60 md:h-64 flex items-center justify-center pointer-events-none">
                  <Image
                    src={g.imageUrl || "/assets/redteam-none-bg.png"}
                    alt={g.packageName}
                    width={600}
                    height={600}
                    className="h-full w-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)] bg-transparent"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: QUICK START */}
        <section className="snap-start snap-always relative z-20 h-full md:h-[50dvh] mb-6 md:mb-0 flex flex-col">
          <div className="flex items-center gap-3 py-4 md:pb-4">
            <div className="bg-blue-600 p-1.5 rounded-xl">
              <ChevronRight className="text-white" size={20} strokeWidth={3} />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tighter uppercase text-slate-900">
              Quick Start
            </h2>
          </div>

          <div className="bg-transparent rounded-xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex flex-1 items-center md:flex-row md:items-center justify-between p-2 sm:px-8 sm:py-4 bg-white border-b border-slate-200">
              <div className="flex gap-2 sm:mb-4 md:mb-0">
                <div className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27C93F]"></div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
                {["one-liner", "npm", "hackable", "macos"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2 md:px-5 md:py-2 rounded-xl text-[8px] md:text-xs font-black uppercase tracking-widest transition-all ${
                      activeTab === tab
                        ? "bg-blue-600 text-white"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {tab === "one-liner" ? "One-liner" : tab}
                  </button>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-slate-500 uppercase">
                    OS:
                  </span>
                  <span className="text-[10px] font-black text-slate-900 uppercase">
                    macOS/Linux
                  </span>
                  <span className="text-[10px] font-black text-blue-400 cursor-pointer hover:underline uppercase ml-1">
                    change
                  </span>
                </div>
                <div className="bg-blue-600/10 text-blue-700 px-3 py-1 rounded-lg text-[10px] font-black border border-blue-600/20">
                  β BETA
                </div>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-8 lg:p-10 bg-white relative group">
              <div className="font-mono text-[8px] sm:text-base lg:md:text-xl leading-relaxed">
                <p className="text-slate-500 italic mb-6">
                  #{" "}
                  {activeTab === "one-liner"
                    ? "Works everywhere. Installs everything. You're welcome."
                    : activeTab === "npm"
                      ? "Install as a dependency in your security project."
                      : activeTab === "hackable"
                        ? "Ready to customize? Clone the full source here."
                        : "Dedicated Homebrew formula for macOS users."}
                </p>
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold mt-0.5 select-none animate-pulse">
                    $
                  </span>
                  <span className="text-slate-900 break-all font-semibold tracking-tight">
                    {commands[activeTab]}
                  </span>
                </div>
              </div>
              <button
                onClick={handleCopy}
                className={`absolute right-2 bottom-2 sm:right-8 sm:bottom-8 lg:right-12 lg:bottom-12 p-2 md:p-4 rounded-xl border transition-all active:scale-90 flex items-center justify-center gap-3 ${copied ? "bg-blue-600/10 border-blue-600/20 text-blue-700" : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300"}`}
              >
                {copied ? (
                  <Check size={20} strokeWidth={3} />
                ) : (
                  <Copy size={20} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          <p className="text-center mt-4 sm:mt-6 text-slate-500 text-[8px] sm:text-sm font-medium">
            Works on macOS, Windows & Linux. The one-liner installs Node.js and
            everything else for you.
          </p>
        </section>

        {/* SECTION 4: WORKS WITH SIEM */}
        <section className="snap-start snap-always relative z-20 h-full md:h-[40dvh] mb-6 md:mb-0">
          <div className="flex items-center gap-3 py-4 md:pb-4">
            <div className="bg-blue-600 p-1.5 rounded-xl">
              <ChevronRight className="text-white" size={20} strokeWidth={3} />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tighter uppercase text-slate-900">
              Works With Tools
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 justify-start">
            {siemTools.map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-1.5 sm:px-6 sm:py-4 bg-white border border-slate-200 rounded-full shadow-sm hover:bg-slate-50 hover:border-blue-500/30 transition-all cursor-pointer group"
              >
                <div className="p-1 md:p-2 bg-slate-100 rounded-full group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <span className="text-[8px] sm:text-sm font-black text-slate-700 group-hover:text-slate-900 transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center md:justify-start gap-6 sm:gap-8 mt-4 sm:mt-12 px-2">
            <button className="text-blue-500 text-[8px] sm:text-sm font-black flex items-center gap-2 hover:gap-3 transition-all">
              View all 100+ integrations <ArrowRight size={16} />
            </button>
            <button className="text-slate-600 text-[8px] sm:text-sm font-black flex items-center gap-2 hover:text-slate-400 transition-all">
              See what community built <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* SECTION 5: WHAT IT DOES */}
        <section className="snap-start snap-always relative z-20 h-full  md:h-[55dvh] mb-6 md:mb-0">
          <div className="flex items-center gap-3 py-4 md:pb-4">
            <div className="bg-blue-600 p-1.5 rounded-xl">
              <ChevronRight className="text-white" size={20} strokeWidth={3} />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tighter uppercase text-slate-900">
              What It Does
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-5 md:gap-6 items-stretch">
            {whatItDoes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl shadow-sm hover:bg-slate-50 hover:border-blue-500/30 transition-all duration-300 group h-full flex flex-col"
              >
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xs sm:text-lg lg:text-xl font-black text-slate-900 mb-1 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-[8px] sm:text-sm leading-relaxed font-medium flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: PACKAGE */}
        <section className="snap-start snap-always relative z-20 h-full md:h-dvh">
          <div className="flex items-center gap-3 pt-4 pb-6 md:pb-8">
            <div className="bg-blue-600 p-1.5 rounded-xl">
              <ChevronRight className="text-white" size={20} strokeWidth={3} />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tighter uppercase text-slate-900">
              PACKAGE
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-2.5 sm:gap-5 md:gap-6 items-stretch">
            {mainCharacters.map((char) => (
              <div
                key={char.id}
                className={`${char.theme} w-full min-w-0 max-w-none rounded-2xl md:rounded-4xl overflow-hidden shadow-2xl relative flex flex-col h-full origin-bottom scale-100 ${
                  char.id === 2 ? "scale-[1.04]" : ""
                }`}
              >
                <div className="relative h-36 xs:h-82 sm:h-98 md:h-105 flex items-center justify-center mt-2 xs:mt-3 sm:mt-4 shrink-0">
                  <div
                    className={`${char.circleColor} w-24 h-24 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full absolute z-0`}
                  ></div>
                  <Image
                    src={char.imageUrl || "/assets/redteam-none-bg.png"}
                    alt={char.name}
                    width={500}
                    height={600}
                    className="z-10 h-full xs:h-70 sm:h-88 md:h-95 w-auto object-contain drop-shadow-2xl bg-transparent"
                  />
                </div>
                <div className="px-3 xs:px-5 sm:px-6 md:px-8 pb-4 xs:pb-5 sm:pb-6 md:pb-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-start justify-between gap-2 md:gap-4">
                    <div>
                      <h2
                        className={`text-[12px] sm:text-xl md:text-2xl lg:text-3xl font-black leading-none ${char.textColor}`}
                      >
                        {char.packageName}
                      </h2>
                    </div>

                    <span className="shrink-0 rounded-full bg-black/25 px-2 py-1 text-[6px] sm:text-[10px] font-black tracking-widest uppercase text-white">
                      {char.discountLabel}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-start justify-between md:gap-4">
                    <p
                      className={`mt-2 text-[6px] sm:text-[9px] font-bold uppercase tracking-wider ${char.textColor} opacity-80`}
                    >
                      {char.tagline}
                    </p>
                    <p
                      className={`mt-2 text-[6px] sm:text-[9px] font-black tracking-widest uppercase ${char.textColor} opacity-70`}
                    >
                      VERSION
                      <span className="text-yellow-300 ml-2">
                        {char.version}
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-col mt-2 sm:mt-4 bg-neutral-950/90 rounded-2xl p-3 xs:p-4 shadow-lg">
                    <div className="flex flex-wrap items-end justify-between gap-2 md:gap-4">
                      <div>
                        <p className="text-white/60 text-[6px] sm:text-[10px] font-black uppercase tracking-widest">
                          PRICE
                        </p>
                        <div className="flex flex-wrap items-baseline gap-1 md:gap-3">
                          <p className="text-white text-[9px] sm:text-xl lg:text-2xl font-black tracking-tight">
                            ฿{char.priceTHB.toLocaleString()}
                          </p>
                          <p className="text-white/35 text-[9px] sm:text-sm font-black line-through">
                            ฿{char.originalPriceTHB.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <button className="bg-white text-black text-[4px] sm:text-[11px] font-black px-1 py0.5 sm:px-2 sm:py-1 md:px-3 md:py-2 rounded-xl items-center uppercase">
                        Select
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-2">
                      {char.details?.map((t: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-white/80"
                        >
                          <span className="inline-block w-0.5 h-0.5 sm:w-2 sm:h-2 rounded-full bg-yellow-300/90" />
                          <span className="text-[6px] sm:text-[12px] font-semibold">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* SECTION 8: FOOTER */}
      <footer className="snap-start snap-always relative w-full mt-8 border-t border-slate-200 overflow-hidden">
        {/* Blurred background image */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md scale-110"
          style={{ backgroundImage: "url('/assets/hero-banner.png')" }}
        />
        {/* Soft overlay for readability */}
        <div aria-hidden className="absolute inset-0 bg-[#FDFBF7]/50" />

        <div className="relative w-full px-6 py-14 text-center flex flex-col items-center gap-2">
          <p className="text-slate-900 font-black tracking-tight text-lg">
            CYBER DUCK
          </p>
          <p className="text-slate-700 text-sm font-semibold">
            Autonomous SOC AI for modern security teams
          </p>
          <p className="text-slate-700 text-sm font-semibold">
            Contact:{" "}
            <span className="text-blue-600 font-black">hello@cyberduck.ai</span>
          </p>
          <p className="text-slate-600 text-xs font-bold tracking-wider uppercase">
            © {new Date().getFullYear()} Cyber Duck. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
