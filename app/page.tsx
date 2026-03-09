"use client";

import React, { useState } from 'react';

const guideData = [
    {
        id: 1,
        title: "윈도우 환경에서 WSL 설치하기",
        desc: "WSL(Windows Subsystem for Linux)은 윈도우 안에서 개발자들에게 필수적인 '리눅스' 환경을 쓸 수 있게 해주는 마법 같은 도구입니다.",
        tasks: [
            "윈도우 시작 버튼을 누르고 <strong>powershell</strong>을 검색합니다.",
            "'Windows PowerShell'을 우클릭하여 <strong>[관리자 권한으로 실행]</strong>을 클릭합니다.",
            "아래 명령어를 복사하여 붙여넣고 Enter를 누릅니다.",
            "설치가 완료되면 컴퓨터를 재부팅합니다.",
            "재부팅 후 까만 창이 뜨면, 사용자 이름(영어)과 비밀번호를 설정합니다."
        ],
        code: "wsl --install",
        isCodeMultiple: false
    },
    {
        id: 2,
        title: "Google Antigravity 설치 및 연동",
        desc: "Google Antigravity는 우리가 AI와 대화하며 코드를 작성할 '스마트 편집기'입니다.",
        tasks: [
            "Google Antigravity 공식 홈페이지에서 윈도우용을 설치합니다.",
            "Antigravity를 실행합니다.",
            "키보드에서 <strong>Ctrl + Shift + P</strong>를 누릅니다.",
            "검색창에 <strong>WSL</strong>을 입력하고 <strong>[WSL: Connect to WSL]</strong>을 찾아 클릭합니다.",
            "왼쪽 하단에 'WSL: Ubuntu'가 표시되면 성공입니다. 이제 [폴더 열기]로 리눅스 내부를 바로 볼 수 있습니다."
        ],
        code: null
    },
    {
        id: 3,
        title: "WSL에서 Gemini CLI 설치하기",
        desc: "Gemini CLI는 까만 터미널 창에서도 AI(Gemini)에게 명령을 내릴 수 있게 해주는 도구입니다.",
        tasks: [
            "Antigravity 상단 메뉴에서 <strong>[터미널] -> [새 터미널]</strong>을 엽니다.",
            "아래의 기본 도구 설치 명령어를 실행합니다. (비밀번호 요구 시 입력)",
            "설치가 끝나면 Gemini CLI를 설치하는 명령어를 이어서 실행합니다."
        ],
        code: "sudo apt update\nsudo apt install -y curl nodejs npm\n\nsudo npm install -g @google/gemini-cli",
        isCodeMultiple: true
    },
    {
        id: 4,
        title: "Gemini CLI 최초 구동 및 기본 설정",
        desc: "설치한 Gemini를 처음 실행하여 초기 설정을 진행하고 내 구글 계정과 연결합니다.",
        tasks: [
            "터미널 창에 <code>gemini</code> 명령어를 입력합니다.",
            "방향키를 이용해 <strong>[Google Account (구글 계정 인증)]</strong>을 선택하고 Enter를 누릅니다.",
            "나머지 설정은 기본값으로 두고 Enter를 칩니다.",
            "브라우저가 열리면 구글 로그인 후 <strong>[허용]</strong>을 누릅니다.",
            "터미널에 성공 메시지가 뜨면 완료입니다!"
        ],
        code: "gemini",
        isCodeMultiple: false
    },
    {
        id: 5,
        title: "Github 가입 절차",
        desc: "Github(깃허브)는 우리가 만든 앱의 코드를 안전하게 보관해 주는 전 세계 개발자들의 클라우드 저장소입니다.",
        tasks: [
            "<a href='https://github.com' target='_blank' class='text-indigo-600 underline'>github.com</a> 에 접속합니다.",
            "우측 상단의 <strong>[Sign up]</strong>을 클릭합니다.",
            "이메일, 비밀번호, 닉네임을 차례로 입력합니다.",
            "이메일로 온 인증 코드 6자리를 입력하여 가입을 완료합니다."
        ],
        code: null
    },
    {
        id: 6,
        title: "Supabase 가입 절차",
        desc: "Supabase(수파베이스)는 우리 앱의 데이터를 저장할 '데이터베이스(DB)'를 매우 쉽게 만들어주는 서비스입니다.",
        tasks: [
            "<a href='https://supabase.com' target='_blank' class='text-indigo-600 underline'>supabase.com</a> 에 접속합니다.",
            "<strong>[Start your project]</strong> 버튼을 클릭합니다.",
            "<strong>[Continue with GitHub]</strong>를 클릭하여 깃허브 계정으로 가입합니다.",
            "<strong>[New Project]</strong>를 클릭하고 이름과 비밀번호를 설정하여 프로젝트를 생성합니다."
        ],
        code: null
    },
    {
        id: 7,
        title: "Vercel 가입 절차",
        desc: "Vercel(버셀)은 우리가 만든 앱을 전 세계 사람들이 접속할 수 있도록 인터넷에 띄워주는 배포 서비스입니다.",
        tasks: [
            "<a href='https://vercel.com' target='_blank' class='text-indigo-600 underline'>vercel.com</a> 에 접속합니다.",
            "<strong>[Sign Up]</strong>을 클릭합니다.",
            "여기서도 <strong>[Continue with GitHub]</strong>를 선택하여 로그인/연동을 진행합니다."
        ],
        code: null
    },
    {
        id: 8,
        title: "Git 설치 및 Github 계정 연동",
        desc: "코드를 깃허브에 보관하기 위해 Git을 설치하고 연결합니다.",
        tasks: [
            "아래 명령어 박스의 1번 블록을 실행하여 Git을 설치하고 본인의 정보로 설정합니다.",
            "2번 블록을 실행하여 Github CLI를 설치합니다.",
            "<code>gh auth login</code>을 입력하고 지시에 따라 브라우저 연동을 완료합니다. (8자리 코드 복사 필수)"
        ],
        code: "# 1번: Git 설치 및 설정 (이름/이메일 변경 필수)\nsudo apt install git\ngit config --global user.name \"내 깃허브 닉네임\"\ngit config --global user.email \"내 깃허브 이메일\"\n\n# 2번: Github CLI 설치\ncurl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg\necho \"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main\" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null\nsudo apt update && sudo apt install gh\n\n# 3번: 로그인 명령어\ngh auth login",
        isCodeMultiple: true
    },
    {
        id: 9,
        title: "앱 생성 ➔ DB 연동 ➔ 배포",
        desc: "바이브 코딩의 시작! AI와 대화하며 앱을 만들고 인터넷에 띄웁니다.",
        tasks: [
            "터미널에서 <code>npx create-next-app@latest my-todo-app</code> 명령어로 앱을 생성합니다.",
            "AI 채팅창에 <strong>Next.js/Tailwind로 스케줄 앱을 만들어줘</strong>라고 요청하고 코드를 적용합니다.",
            "<code>npm run dev</code>로 로컬에서 확인합니다.",
            "Supabase 키를 복사한 뒤 AI에게 DB 연동 코드를 요청하여 적용합니다.",
            "아래 명령어로 Github에 코드를 올립니다.",
            "Vercel 대시보드에서 깃허브 저장소를 Import하고 환경변수를 넣은 뒤 Deploy합니다."
        ],
        code: "git add .\ngit commit -m \"첫 번째 일정 관리 앱 완성!\"\ngit branch -M main\ngit remote add origin [내깃허브주소]\ngit push -u origin main",
        isCodeMultiple: true
    },
    {
        id: 10,
        title: "코드 수정 후 자동 배포",
        desc: "이제 코드를 수정하고 깃허브에 올리기만 하면 자동으로 업데이트 됩니다.",
        tasks: [
            "편집기에서 코드를 수정하고 저장(Ctrl+S)합니다.",
            "아래 명령어 세 줄을 복사하여 실행하거나, Gemini에게 올려달라고 요청합니다.",
            "Vercel이 스스로 감지하여 1~2분 뒤 웹사이트를 자동 업데이트 합니다!"
        ],
        code: "git add .\ngit commit -m \"앱 제목 디자인 수정\"\ngit push origin main",
        isCodeMultiple: true
    }
];

export default function VibeCodingDashboard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const toggleCompletion = () => {
    setCompletedSteps(prev => {
      const isCompleted = prev.includes(currentStep);
      const newSteps = isCompleted ? prev.filter(id => id !== currentStep) : [...prev, currentStep];
      
      if (!isCompleted && currentStep < 10) {
        setTimeout(() => {
          setCurrentStep(currentStep + 1);
        }, 600);
      }
      
      return newSteps;
    });
  };

  const navigate = (direction: number) => {
    const nextStep = currentStep + direction;
    if (nextStep >= 1 && nextStep <= 10) {
      setCurrentStep(nextStep);
    }
  };

  const copyCode = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedText(" copied!");
        setTimeout(() => setCopiedText(null), 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopiedText(" copied!");
          setTimeout(() => setCopiedText(null), 2000);
        }
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    }
  };

  const step = guideData.find(s => s.id === currentStep)!;
  const isCompleted = completedSteps.includes(step.id);
  const completeCount = completedSteps.length;
  const percentage = Math.round((completeCount / 10) * 100);

  let motiText = "시작이 반입니다! 첫 번째 단계를 진행해 보세요.";
  if (completeCount > 0 && completeCount < 5) motiText = "순조로운 출발입니다! 계속 진행해 볼까요?";
  else if (completeCount >= 5 && completeCount < 9) motiText = "절반 이상 오셨네요! 멋진 앱이 곧 탄생합니다.";
  else if (completeCount === 9) motiText = "거의 다 왔습니다! 마지막 배포만 남았어요.";
  else if (completeCount === 10) motiText = "🎉 완벽합니다! 바이브 코딩 마스터가 되셨습니다.";

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen flex flex-col">
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-indigo-900 flex items-center gap-2">
              <span>🚀</span> 바이브 코딩 입문을 위한 초보자용 설정 가이드
            </h1>
            <p className="text-sm text-slate-500 mt-1">AI의 도움을 받아 나만의 웹 앱을 만들고 서비스하는 완벽한 환경 구축하기</p>
            <p className="text-xs text-indigo-400 mt-1 font-mono">작성자: miraepa77@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
            <span className="text-xl">🏆</span>
            <div className="flex flex-col">
              <span className="text-xs text-indigo-600 font-bold uppercase tracking-wider">진행률</span>
              <span className="text-lg font-bold text-indigo-900">{percentage}%</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col items-center">
            <h2 className="text-lg font-bold text-slate-800 mb-4 text-center">나의 여정 달성도</h2>
            
            <div className="relative w-48 h-48 flex items-center justify-center my-4">
              <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#e2e8f0"
                  strokeWidth="20"
                  fill="none"
                />
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#10b981"
                  strokeWidth="20"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 ease-in-out"
                />
              </svg>
              <div className="absolute flex items-center justify-center flex-col">
                <span className="text-3xl font-extrabold text-slate-800">{percentage}%</span>
              </div>
            </div>

            <p className="text-center text-sm text-slate-500 mt-4 font-medium">{motiText}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex-grow flex flex-col">
            <h2 className="text-lg font-bold text-slate-800 mb-4 px-2">전체 단계 (10 Steps)</h2>
            <nav className="flex flex-col gap-1 overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
              {guideData.map((s) => {
                const isActive = currentStep === s.id;
                const isItemCompleted = completedSteps.includes(s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrentStep(s.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                      isActive 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'hover:bg-indigo-50 text-slate-600 hover:text-indigo-900'
                    }`}
                  >
                    <span className="text-sm font-semibold truncate pr-2">
                      {s.id}. {s.title}
                    </span>
                    <span className={`text-lg transition-opacity ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`}>
                      {isItemCompleted ? '✅' : '⏳'}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        <section className="w-full lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 md:p-10 min-h-[600px] flex flex-col relative h-full">
            <div className="mb-6 pb-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-2">학습 영역에 오신 것을 환영합니다.</h2>
              <p className="text-slate-600 leading-relaxed">
                이 공간은 <span className="font-semibold text-indigo-600">선택된 단계의 핵심 설명과 실행해야 할 명령어</span>를 보여줍니다. 
                좌측 메뉴에서 단계를 선택하여 내용을 확인하고, 검은색 터미널 박스 안의 코드를 복사하여 여러분의 컴퓨터에 적용해 보세요. 
                완료 후 '완료 표시' 버튼을 누르면 전체 진행률이 업데이트되어 성취감을 느낄 수 있습니다.
              </p>
            </div>

            <div key={step.id} className="animate-fade-in flex-grow flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-indigo-500 tracking-wider uppercase">Step {step.id}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 mb-8 text-lg bg-indigo-50/50 p-4 rounded-lg border-l-4 border-indigo-400">
                {step.desc}
              </p>
              
              <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">🎯 해야 할 일</h4>
              <ul className="mb-6 flex-grow space-y-3">
                {step.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: task }} />
                  </li>
                ))}
              </ul>

              {step.code && (
                <div className="mt-8 bg-[#1e1e1e] rounded-xl overflow-hidden shadow-inner border border-slate-700">
                  <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-slate-600">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">Terminal (WSL)</span>
                    <button 
                      onClick={() => copyCode(step.code as string)} 
                      className={`text-xs text-white px-3 py-1 rounded transition-colors flex items-center gap-1 ${copiedText ? 'bg-emerald-600' : 'bg-slate-700 hover:bg-slate-600'}`}
                    >
                      {copiedText ? `✨ 복사됨!` : `📋 복사하기`}
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto text-sm font-mono text-green-400 whitespace-pre leading-relaxed custom-scrollbar-terminal">
                    {step.code}
                  </div>
                </div>
              )}

              <div className="mt-auto pt-8 flex justify-between items-center border-t border-slate-100">
                <button 
                  onClick={() => navigate(-1)} 
                  className={`text-slate-500 hover:text-indigo-600 font-medium px-4 py-2 flex items-center gap-1 ${step.id === 1 ? 'invisible' : ''}`}
                >
                  <span>⬅️</span> 이전
                </button>
                
                <button 
                  onClick={toggleCompletion} 
                  className={`flex-grow max-w-[200px] mx-4 py-3 rounded-xl font-bold text-white transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 ${
                    isCompleted ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30'
                  }`}
                >
                  {isCompleted ? '✅ 완료 취소' : '🎉 완료 표시'}
                </button>

                <button 
                  onClick={() => navigate(1)} 
                  className={`text-slate-500 hover:text-indigo-600 font-medium px-4 py-2 flex items-center gap-1 ${step.id === 10 ? 'invisible' : ''}`}
                >
                  다음 <span>➡️</span>
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-400">💡 도움이 필요하면 AI 에이전트에게 화면 스크린샷이나 에러를 복사해 물어보세요!</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 py-6 text-center text-slate-400 text-sm mt-auto">
        <p>코딩을 한 번도 해보지 않으셨어도 괜찮습니다. AI와 함께라면 할 수 있습니다! ✨</p>
      </footer>
    </div>
  );
}
