"use client";

import React, { useState, useRef, useEffect } from 'react';

const guideData = [
  {
    id: 1,
    title: "윈도우 환경에서 WSL 설치하기",
    desc: "WSL(Windows Subsystem for Linux)은 윈도우 안에서 개발자들에게 필수적인 '리눅스' 환경을 쓸 수 있게 해주는 마법 같은 도구입니다.<br><img src='/cmd.png' alt='Command Prompt' class='mt-4 w-full max-w-[500px] rounded-lg shadow-md border border-indigo-100'>",
    tasks: [
      "윈도우 시작 버튼을 우클릭 하여 누르고 <strong>powershell</strong>을 검색합니다.",
      "'Windows PowerShell'을 우클릭하여 <strong>[관리자 권한으로 실행]</strong>을 클릭합니다.<br><div class='mt-3 inline-flex flex-col min-w-[200px] rounded-lg bg-[#e3e3e3] shadow-md border border-[#cbcece] p-1 text-left font-sans select-none'><div class='px-4 py-2 text-[14px] text-[#1a1a1a] hover:bg-[#d1d1d1] transition-colors rounded-md mb-0.5 cursor-default'>터미널</div><div class='px-4 py-2 text-[14px] text-[#1a1a1a] bg-[#d1d1d1] rounded-md cursor-default'>터미널(관리자)</div></div>",
      "아래 명령어를(wsl --install) 복사하여 붙여넣고 Enter를 누릅니다.",
      "설치가 완료되면 컴퓨터를 재부팅합니다.",
      "재부팅 후 검색창에서 ubuntu를 검색하여 까만 창이 뜨면, 사용자 이름(영어)과 비밀번호를 설정합니다.",
      "만약, 리눅스가 설치되지 않았다면, 검색창에서 Microsoft Store를 검색 후 Ubuntu 20.04.6 LTS(최신 버전 선택)를 설치합니다.<br><div class='mt-3 flex flex-col max-w-sm rounded-xl overflow-hidden shadow-sm bg-gradient-to-b from-[#fdeee9] to-[#faf3f1] border border-[#f3e1db] p-4 text-left font-sans select-none'><div class='flex gap-4'><div class='w-20 h-20 bg-[#e95420] rounded-xl flex flex-col items-center justify-center p-1.5 shadow-sm shrink-0 relative overflow-hidden'><div class='bg-white rounded-full p-2.5 w-12 h-12 flex items-center justify-center mb-1'><svg class='w-8 h-8 text-[#e95420]' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/><circle cx='12' cy='8.5' r='1.5'/><circle cx='8.5' cy='14.5' r='1.5'/><circle cx='15.5' cy='14.5' r='1.5'/><path d='M10.5 10c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z'/></svg></div><span class='text-white text-[9px] font-bold tracking-wide mt-auto'>20.04 LTS</span></div><div class='flex flex-col justify-center'><h4 class='text-[22px] font-semibold text-[#1a1a1a] leading-tight mb-1'>Ubuntu 20.04.6 LTS</h4><a href='#' class='text-sm text-[#0067c0] hover:underline mb-1'>Canonical Group Limited</a><div class='flex items-center text-[13px] text-[#4d4d4d]'><span class='font-medium text-[#1a1a1a] mr-1'>4.4</span><svg class='w-3.5 h-3.5 text-[#4d4d4d] mr-2' fill='currentColor' viewBox='0 0 20 20'><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'/></svg><span>20개의 등급</span><span class='mx-2 text-[#cccccc]'>|</span><a href='#' class='text-[#0067c0] hover:underline'>개발자 도구</a></div></div></div><p class='mt-4 text-[13px] text-[#333333] leading-relaxed'>Install a complete Ubuntu terminal environment in minutes with Windows Subsystem for Linux (WSL)....</p><div class='mt-4 flex items-center gap-4'><button class='bg-[#005ea6] hover:bg-[#005494] text-white px-8 py-2.5 rounded text-sm font-medium transition-colors cursor-default'>다운로드</button><button class='text-[#1a1a1a] hover:bg-[#0000000a] p-1.5 rounded transition-colors'><svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'/></svg></button></div><div class='mt-4 flex items-center gap-2'><div class='border border-[#4d4d4d] rounded p-1 flex items-center justify-center bg-white w-10 h-10'><span class='text-[18px] font-black tracking-tighter'>3+</span><span class='absolute text-[5px] font-bold mt-[-24px] uppercase tracking-widest'>IARC</span></div><span class='text-[13px] text-[#333333]'>3+</span></div></div>",
      "설치가 완료 되면, 검색에서 ubuntu를 입력하여 설치된 리눅스를 터미널을 접속 합니다.<br><div class='mt-3 inline-flex items-center gap-3 bg-[#f2e7de] p-3 rounded-xl shadow-sm border border-[#e1d3c8] select-none'><svg class='w-7 h-7 text-[#0078d4] shrink-0' viewBox='0 0 88 88' fill='currentColor'><path d='M0 12.402L37.332 7v33H0v-27.598zM41.332 6.426L88 0v40H41.332V6.426zM0 44h37.332v33L0 71.598V44zm41.332 0H88v40L41.332 81.574V44z'/></svg><div class='flex items-center bg-white rounded-full px-4 py-2 border border-slate-200 shadow-inner w-[240px]'><svg class='w-5 h-5 text-blue-500 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/></svg><span class='text-[17px] text-slate-800 font-sans tracking-wide'>ubuntu<span class='inline-block w-[1.5px] h-[18px] bg-slate-800 ml-[1px] -mb-0.5 animate-pulse'></span></span></div></div>",
      "접속된 터미널에서 위 3,4,5번 항목을 진행합니다.",

    ],
    code: "wsl --install",
    isCodeMultiple: false
  },
  {
    id: 2,
    title: "Google Antigravity 설치 및 연동",
    desc: "Google Antigravity는 우리가 AI와 대화하며 코드를 작성할 '스마트 편집기'입니다.<br><img src='/antigravity.png' alt='Google Antigravity Editor' class='mt-4 w-full max-w-[700px] rounded-lg shadow-md border border-indigo-100'>",
    tasks: [
      "<a href='https://antigravity.google/download' target='_blank' class='text-indigo-600 underline'>Google Antigravity 공식 홈페이지</a>에서 윈도우용(x64)을 설치합니다.<br><div class='mt-3 inline-flex flex-col border border-slate-200 rounded-lg overflow-hidden shadow-sm bg-white hover:bg-slate-50 transition-colors'><div class='flex items-center gap-3 px-4 py-3 border-b border-slate-100'><svg class='w-5 h-5 text-slate-800' fill='currentColor' viewBox='0 0 24 24'><path d='M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.801'/></svg><span class='text-base font-medium text-slate-800'>Windows</span></div><div class='flex items-center gap-2 px-4 py-2.5 text-slate-600'><svg class='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'/></svg><span class='text-sm'>Download for x64</span></div></div>",
      "Antigravity를 실행합니다.",
      "키보드에서 <strong>Ctrl + Shift + P</strong>를 누릅니다.",
      "검색창에 <strong>WSL</strong>을 입력하고 <strong>[WSL: Connect to WSL]</strong>을 찾아 클릭합니다.<br><div class='mt-3 w-full max-w-sm rounded-[4px] overflow-hidden bg-[#252526] shadow-sm border border-[#454545] text-left'><div class='px-3 py-1.5 flex items-center bg-[#252526] border-b border-[#454545]'><span class='text-[#cccccc] mr-1.5 font-mono'>&gt;</span><span class='text-white text-[13px]'>wsl</span><span class='inline-block w-[1px] h-4 bg-slate-200 animate-pulse ml-[1px] -mb-0.5'></span></div><div class='px-3 py-1.5 flex items-center bg-[#04395e]'><span class='text-white text-[13px]'><span class='text-white'>Remote-</span><span class='text-[#51b2ff]'>WSL</span>: Connect to WSL</span></div></div>",
      "왼쪽 하단에 'WSL: Ubuntu'가 표시되면 성공입니다. 이제 [폴더 열기]로 리눅스 내부를 바로 볼 수 있습니다.<br><img src='/bottomleft.png' alt='Gemini CLI Terminal' class='mt-3 w-full max-w-[250px] rounded-lg shadow-md border border-slate-200'>"
    ],
    code: null
  },
  {
    id: 3,
    title: "WSL에서 Gemini CLI 설치하기",
    desc: "Gemini CLI는 까만 터미널 창에서도 AI(Gemini)에게 명령을 내릴 수 있게 해주는 도구입니다.<br><img src='/gemini.png' alt='Gemini CLI Terminal' class='mt-4 w-full max-w-[700px] rounded-lg shadow-md border border-indigo-100'>",
    tasks: [
      "Antigravity 상단 메뉴에서 <strong>[터미널] -> [새 터미널]</strong>을 엽니다.<br><img src='/apt.png' alt='New Terminal in Antigravity' class='mt-4 w-full max-w-[500px] rounded-lg shadow-md border border-indigo-100'>",
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
      "터미널 창에 <code>gemini</code> 명령어를 입력합니다.<br><img src='/geminiauth.png' alt='Gemini Auth' class='mt-4 w-full max-w-[500px] rounded-lg shadow-md border border-indigo-100'>",
      "방향키를 이용해 <strong>[Login with Google(구글 계정 인증)]</strong>을 선택하고 Enter를 누릅니다.",
      "브라우저 인증 항목 진행을 위해 'Yes'에서 Enter를 칩니다.<br><img src='/geminiauth2.png' alt='Gemini Auth 2' class='mt-4 w-full max-w-[300px] rounded-lg shadow-md border border-indigo-100'>",
      "브라우저가 열리면 구글 로그인 후 <strong>[허용]</strong>을 누릅니다.<br><img src='/login.png' alt='Google Login' class='mt-4 w-full max-w-[500px] rounded-lg shadow-md border border-indigo-100'>",
      "터미널에 성공 메시지가 뜨면 완료입니다! r key 입력 또는 Ctrl + c 로 종료 후 'gemini' 재 실행하면 됩니다.<br><img src='/authend.png' alt='Authentication Success' class='mt-4 w-full max-w-[700px] rounded-lg shadow-md border border-indigo-100'>"
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
      "우측 상단의 <strong>[Start your project]</strong> 버튼을 클릭합니다.<br><img src='/supa1.png' alt='Supabase Start' class='mt-4 w-full max-w-[200px] rounded-lg shadow-md border border-indigo-100'>",
      "<strong>[Continue with GitHub]</strong>를 클릭하여 깃허브 계정으로 가입합니다.<br><img src='/supa2.png' alt='Supabase GitHub Login' class='mt-4 w-full max-w-[300px] rounded-lg shadow-md border border-indigo-100'>",
      "<strong>[New organization]</strong>을 클릭하고 조직이름/유형(개인)/플랜(무료)를 선택 후 조직을 생성합니다.<br><img src='/supa3.png' alt='Supabase New Organization' class='mt-4 w-full max-w-[500px] rounded-lg shadow-md border border-indigo-100'>",
      "조직을 눌러 들어간 후 <strong>[New Project]</strong>를 클릭하고 이름과 비밀번호를 설정하여 프로젝트를 생성합니다.<br><img src='/supa4.png' alt='Supabase New Project' class='mt-4 w-full max-w-[600px] rounded-lg shadow-md border border-indigo-100'>",
      "이 단계 이후 향후 데이터베이스 연동이 필요할 때 만들어둔 프로젝트에 연결하면 됩니다.(AI에게 요청해서 처리할 것이므로 이름과 비밀번호만 입력하면 됩니다.)"
    ],
    code: null
  },
  {
    id: 7,
    title: "Vercel 가입 절차",
    desc: "Vercel(버셀)은 우리가 만든 앱을 전 세계 사람들이 접속할 수 있도록 인터넷에 띄워주는 배포 서비스입니다.",
    tasks: [
      "<a href='https://vercel.com' target='_blank' class='text-indigo-700 underline'>vercel.com</a> 에 접속합니다.<br><img src='/ver1.png' alt='Vercel Homepage' class='mt-4 w-full max-w-[400px] rounded-lg shadow-md border border-indigo-100'>",
      "<strong>[Sign Up]</strong>을 클릭하고, Hobby를 선택 후 사용할 아이디를 입력 후 <strong>Continue</strong>를 클릭합니다.<br><img src='/ver2.png' alt='Vercel Sign Up' class='mt-4 w-full max-w-[400px] rounded-lg shadow-md border border-indigo-100'>",
      "여기서도 <strong>[Continue with GitHub]</strong>를 선택하여 로그인/연동을 진행합니다.<br><img src='/ver3.png' alt='Vercel GitHub Login' class='mt-4 w-full max-w-[400px] rounded-lg shadow-md border border-indigo-100'>",
      "이후 과정은 바이브 코딩으로 프로젝트를 만든 후 Github에 소스코드를 올린 후 Vercel과 연동하도록 합니다."
    ],
    code: null
  },
  {
    id: 8,
    title: "Git 설치 및 Github 계정 연동",
    desc: "코드를 깃허브에 보관하기 위해 Git을 설치하고 연결합니다.",
    tasks: [
      "Antigravity의 터미널에서 아래 명령어 박스의 1번 블록을 실행하여 Git을 설치하고 본인의 정보로 설정합니다. 아래 항목에서 한줄 씩 복사 붙여넣기 하여 실행해 나갑니다.",
      "2번 블록을 터미널에 복사 붙여넣기 실행하여 Github CLI를 설치합니다.",
      "마지막으로 <strong><code>gh auth login</code></strong> 을 입력하고 지시에 따라 브라우저 연동을 완료합니다. (8자리 코드)",
      "인증 절차는 각 항목을 그림과 같이 Github.com / HTTPS / Login whth a web browser를 선택합니다.<br><img src='/git4.png' alt='Git Auth Step 2' class='mt-4 w-full max-w-[600px] rounded-lg shadow-md border border-indigo-100'>",
      "링크를 Ctrl + Click을 하여 브라우저에서 인증을 진행합니다. 이때, 위 그림에서 표시된 8자리 코드를 입력하여 인증을 마무리 한 뒤 터미널에서 Enter를 눌러 이후 단계를 진행합니다.<br><img src='/git5.png' alt='Git Auth Step 3' class='mt-4 w-full max-w-[600px] rounded-lg shadow-md border border-indigo-100'>",
      "Github는 프로젝트 생성 후 연결하여 소스코드 저장소로 사용하게 됩니다. 저장된 Github의 소스코드는 Vercel에 간편하게 연결되어 인터넷에 배포됩니다."
    ],
    code: "# 1번: Git 설치 및 설정 (이름/이메일 변경 필수)\nsudo apt install git\ngit config --global user.name \"내 깃허브 닉네임\"\ngit config --global user.email \"내 깃허브 이메일\"\n\n# 2번: Github CLI 설치\ncurl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg\necho \"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main\" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null\nsudo apt update && sudo apt install gh\n\n# 3번: 로그인 명령어\ngh auth login",
    isCodeMultiple: true
  },
  {
    id: 9,
    title: "앱 생성 ➔ DB 연동 ➔ 배포",
    desc: "바이브 코딩의 시작! AI와 대화하며 앱을 만들고 인터넷에 띄웁니다.",
    tasks: [
      "Antigravity의 터미널에서 다음과 같이 명령어를 차례대로 입력합니다.(처음은 사용자 home(~) 디렉토리입니다.)<br><img src='/vibe1.png' alt='Vibe Coding' class='mt-4 w-full max-w-[800px] rounded-lg shadow-md border border-indigo-100'>",
      "생성된 프로젝트를 Antigravity로 연결 합니다. 화면을 참조하며 진행하세요.<br><img src='/vibe2.png' alt='Vibe Step 1' class='mt-4 w-full max-w-[300px] rounded-lg shadow-md border border-indigo-100'><img src='/vibe3.png' alt='Vibe Step 2' class='mt-4 w-full max-w-[600px] rounded-lg shadow-md border border-indigo-100'><img src='/vibe4.png' alt='Vibe Step 3' class='mt-4 w-full max-w-[400px] rounded-lg shadow-md border border-indigo-100'><img src='/vibe5.png' alt='Vibe Step 4' class='mt-4 w-full max-w-[400px] rounded-lg shadow-md border border-indigo-100'>",
      "이제 생성된 초기 상태의 앱이 Antigravity와 연결되었습니다.",
      "Antigravity의 제일 우측에 AI 에이전트 입력 프롬프트 창이 보입니다. 만약 보이지 않는다면, Ctrl + L 키를 입력하면 토글 됩니다.<br><img src='/vibe6.png' alt='Vibe Agent UI' class='mt-4 w-full max-w-[600px] rounded-lg shadow-md border border-indigo-100'>",
      "AI 에이전트 프롬프트에 <strong>Supabase와 연동되는 스케줄 관리 앱을 만들어줘</strong>라고 요청하고 코드를 적용합니다.<br><img src='/vibe7.png' alt='Vibe Prompt' class='mt-4 w-full max-w-[400px] rounded-lg shadow-md border border-indigo-100'>",
      "<strong>Allow Once</strong>는 1단계씩 진행하기 위해 1회성 수락이고, <strong>Allow This Conversation</strong>은 이번 세션동안 에이전트의 자율 행동을 수락 하는 것입니다.",
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
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        // Mobile: Scroll the window to the top of the section element (with header offset + some padding)
        const yOffset = 220; // Adjusted for a bit more top spacing under the header
        const element = scrollRef.current;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        // Desktop: Scroll the container itself
        scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [currentStep]);

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
    <div className="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen lg:h-screen lg:overflow-hidden flex flex-col">
      <header className="bg-white shadow-sm border-b border-slate-200 shrink-0 z-10 w-full relative">
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

      <div className="flex-1 lg:overflow-hidden w-full flex flex-col overscroll-none">
        <main className="max-w-7xl w-full flex-1 min-h-0 mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/3 flex flex-col gap-6 lg:h-full shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex flex-col items-center">
              <h2 className="text-base font-bold text-slate-800 mb-2 text-center">나의 여정 달성도</h2>

              <div className="w-full my-2">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-xs font-semibold text-slate-700">진행률</span>
                  <span className="text-lg font-extrabold text-indigo-600">{percentage}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden shadow-inner">
                  <div
                    className="bg-indigo-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-center text-xs text-slate-500 mt-2 font-medium">{motiText}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex-grow flex flex-col min-h-0">
              <h2 className="text-lg font-bold text-slate-800 mb-4 px-2 shrink-0">전체 단계 (10 Steps)</h2>
              <nav className="flex flex-col gap-1 overflow-y-auto flex-1 pr-2 custom-scrollbar min-h-0">
                {guideData.map((s) => {
                  const isActive = currentStep === s.id;
                  const isItemCompleted = completedSteps.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      onClick={() => setCurrentStep(s.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${isActive
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

          <section ref={scrollRef} className="w-full lg:w-2/3 lg:h-full lg:overflow-y-auto custom-scrollbar pb-2 overscroll-none">
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 md:p-10 flex flex-col relative min-h-full">
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
                <p
                  className="text-slate-600 mb-8 text-lg bg-indigo-50/50 p-4 rounded-lg border-l-4 border-indigo-400"
                  dangerouslySetInnerHTML={{ __html: step.desc }}
                />

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
                    className={`flex-grow max-w-[200px] mx-4 py-3 rounded-xl font-bold text-white transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 ${isCompleted ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30'
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
      </div>

      <footer className="bg-slate-800 py-5 text-center text-slate-400 text-sm shrink-0 z-10 relative">
        <p>코딩을 한 번도 해보지 않으셨어도 괜찮습니다. AI와 함께라면 할 수 있습니다! ✨</p>
      </footer>
    </div>
  );
}
