# 💼 나만의 웹사이트 만들기 연습. (ver1-2.)

인터랙티브한 기능과 모던한 디자인을 갖춘 개인 포트폴리오 웹사이트입니다.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📌 프로젝트 개요

기존 정적 HTML 페이지를 **인터랙티브 원페이지 포트폴리오 사이트**로 확장한 프로젝트입니다.

다크/라이트 테마, 실시간 시계, 부드러운 스크롤, 포트폴리오 필터링 등 다양한 인터랙션을 구현했습니다.

### 🎯 주요 특징

- 🌓 **다크/라이트 테마 토글** - CSS 변수 기반 테마 시스템
- ⏰ **실시간 시계 + 인사말** - 시간대별 자동 인사말 변경
- 🎨 **부드러운 스크롤** - 섹션 이동 시 스무스 애니메이션
- 🔍 **포트폴리오 필터** - 카테고리별 프로젝트 필터링
- 📱 **반응형 디자인** - 모바일/태블릿/데스크톱 대응
- ✨ **스크롤 애니메이션** - IntersectionObserver 기반 페이드 인
- 🎭 **모달 상세 보기** - 프로젝트 클릭 시 상세 정보 팝업

---

## 🎬 주요 기능

### 1️⃣ 네비게이션 & 스크롤

| 기능 | 설명 |
|-----|------|
| **스무스 스크롤** | 메뉴 클릭 시 해당 섹션으로 부드럽게 이동 |
| **메뉴 하이라이트** | 현재 섹션에 맞춰 네비게이션 메뉴 자동 활성화 |
| **TOP 버튼** | 스크롤 시 나타나는 플로팅 버튼 |
| **헤더 높이 보정** | 고정 헤더를 고려한 정확한 스크롤 위치 |

### 2️⃣ 테마 & 시계

| 기능 | 설명 |
|-----|------|
| **다크/라이트 토글** | 🌙/☀️ 스위치로 테마 전환 |
| **실시간 시계** | `HH:MM:SS` 형식으로 1초마다 갱신 |
| **시간별 인사말** | 아침/오후/저녁에 따라 자동 변경 |

### 3️⃣ 포트폴리오 필터링

| 기능 | 설명 |
|-----|------|
| **카테고리 버튼** | All / Front-end / Mobile / Back-end |
| **동적 필터링** | `data-type` 속성 기반 프로젝트 표시 |
| **숫자 뱃지** | 선택된 버튼에 프로젝트 개수 표시 |
| **그리드 레이아웃** | CSS Grid로 반응형 배치 |

### 4️⃣ 프로젝트 모달

| 기능 | 설명 |
|-----|------|
| **상세 보기** | 프로젝트 카드 클릭 시 모달 팝업 |
| **동적 콘텐츠** | 제목, 설명, 기술 스택을 자동 구성 |
| **태그 애니메이션** | 중앙 노드 + 4개 태그의 팝업 효과 |
| **닫기 기능** | 오버레이/닫기버튼/ESC 키로 종료 |

### 5️⃣ 스크롤 애니메이션

| 기능 | 설명 |
|-----|------|
| **IntersectionObserver** | 뷰포트 진입 시 섹션 페이드 인 |
| **opacity + translateY** | 아래에서 위로 올라오는 효과 |
| **자동 감지** | 스크롤만으로 애니메이션 자동 실행 |

---

## 🛠️ 기술 스택

| 분류 | 기술 |
|------|------|
| **마크업** | HTML5 (시맨틱 태그) |
| **스타일** | CSS3 (변수, Grid, Flexbox, 애니메이션) |
| **스크립트** | Vanilla JavaScript (ES6+) |
| **API** | IntersectionObserver |
| **폰트** | GMarketSans |

---

## 📂 프로젝트 구조

```
portfolio/
├── index.html           # 메인 페이지
├── style.css            # 스타일시트
├── main.js              # 인터랙션 로직
├── images/              # 이미지 폴더
│   ├── logo.png
│   ├── profile.png
│   └── projects/
└── README.md
```

---

## 📄 파일별 상세 설명

### 🌐 index.html

#### 헤더 구성

```html
<header class="header">
  <!-- 좌측: 로고 + 타이틀 -->
  <div class="header__left">
    <img src="images/logo.png" alt="logo" class="header__logo">
    <h1 class="header__title">yssong</h1>
  </div>
  
  <!-- 중앙: 토글 + 시계 + 인사말 -->
  <div class="header__center">
    <label class="toggle-switch">
      <input type="checkbox" id="themeToggle">
      <span class="slider">🌙 ☀️</span>
    </label>
    <div class="header__clock">
      <span id="clock">00:00:00</span>
      <span id="greeting">안녕하세요!</span>
    </div>
  </div>
  
  <!-- 우측: 네비게이션 메뉴 -->
  <nav class="header__nav">
    <ul class="header__menu">
      <li><a href="#home" class="active">홈</a></li>
      <li><a href="#about">소개</a></li>
      <li><a href="#skills">기술</a></li>
      <li><a href="#work">포트폴리오</a></li>
      <li><a href="#license">자격증</a></li>
      <li><a href="#contact">연락처</a></li>
    </ul>
  </nav>
</header>
```

#### 주요 섹션

| 섹션 | ID | 내용 |
|------|-------|------|
| **홈** | `#home` | 프로필 이미지, 인사말, 자기소개 |
| **소개** | `#about` | 기술 분야 카드, 경력 리스트 |
| **기술** | `#skills` | 언어/도구/기타 + 퍼센트 게이지 |
| **포트폴리오** | `#work` | 카테고리 필터 + 프로젝트 그리드 |
| **자격증** | `#license` | 자격증 카드 2개 |
| **연락처** | `#contact` | 이메일/전화/깃허브 아이콘 |

#### 프로젝트 모달 구조

```html
<div id="projectModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2 id="modalTitle">프로젝트 제목</h2>
    <p id="modalText">프로젝트 설명</p>
    
    <!-- 중앙 노드 + 4개 태그 -->
    <div class="modal-nodes">
      <div class="modal-center-node">중앙 기술</div>
      <div class="modal-node">태그1</div>
      <div class="modal-node">태그2</div>
      <div class="modal-node">태그3</div>
      <div class="modal-node">태그4</div>
    </div>
  </div>
</div>
```

---

### 🎨 style.css

#### CSS 변수 기반 테마 시스템

```css
/* 다크 테마 (기본) */
:root {
  --color-primary: #f0f4f5;
  --color-accent: #ffd700;
  --color-accent-variant: #ffc107;
  --color-text: #ffffff;
  --color-background: #050a13;
  --color-background-variant: #1e2a35;
}

/* 라이트 테마 */
body.light-theme {
  --color-primary: #1e2a35;
  --color-accent: #ff6b35;
  --color-text: #333333;
  --color-background: #ffffff;
  --color-background-variant: #f5f5f5;
}
```

#### 주요 스타일 기능

| 클래스/선택자 | 기능 |
|-------------|------|
| `.section` | 기본 섹션 애니메이션 상태 |
| `.section--visible` | 페이드 인 완료 상태 |
| `.header__menu .active` | 현재 섹션 메뉴 하이라이트 |
| `.toggle-switch` | 테마 토글 스위치 UI |
| `.project.show` | 필터링된 프로젝트만 표시 |
| `.modal` | 모달 오버레이 + 팝업 카드 |
| `.arrow-up--show` | TOP 버튼 표시 |

#### 애니메이션

```css
/* 섹션 페이드 인 */
.section {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.section--visible {
  opacity: 1;
  transform: translateY(0);
}

/* 모달 팝업 */
@keyframes modal-pop {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

/* 태그 노드 팝업 */
@keyframes node-pop {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
```

---

### ⚙️ main.js

#### 1️⃣ 부드러운 스크롤 & 메뉴 활성화

```javascript
// 헤더 높이를 고려한 스무스 스크롤
function smoothScrollToSection(target) {
  const headerHeight = document.querySelector('.header').offsetHeight;
  const targetPosition = target.offsetTop - headerHeight;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// 스크롤 위치에 따라 메뉴 자동 활성화
function updateActiveMenu() {
  const sections = document.querySelectorAll('.section');
  const scrollPosition = window.scrollY + headerHeight + 100;
  
  sections.forEach(section => {
    if (scrollPosition >= section.offsetTop && 
        scrollPosition < section.offsetTop + section.offsetHeight) {
      setActiveMenu(section.id);
    }
  });
}
```

#### 2️⃣ 스크롤 애니메이션

```javascript
// IntersectionObserver로 섹션 페이드 인
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section--visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});
```

#### 3️⃣ 프로젝트 모달

```javascript
// 프로젝트 카드 클릭 시 모달 오픈
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const type = card.dataset.type;
    const projectData = getProjectData(type, index);
    
    // 모달 콘텐츠 동적 구성
    modalTitle.textContent = projectData.title;
    modalText.textContent = projectData.description;
    
    // 기술 스택 태그 추가
    projectData.tags.forEach((tag, i) => {
      const node = document.createElement('div');
      node.className = 'modal-node';
      node.textContent = tag;
      modalNodes.appendChild(node);
    });
    
    modal.style.display = 'flex';
  });
});
```

#### 4️⃣ 실시간 시계 + 인사말

```javascript
// 1초마다 시계 갱신
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// 시간대별 인사말
function updateGreeting() {
  const hour = new Date().getHours();
  let message;
  
  if (hour < 12) message = '좋은 아침입니다!';
  else if (hour < 18) message = '좋은 오후입니다!';
  else message = '좋은 저녁입니다!';
  
  greetingElement.textContent = message;
}
```

#### 5️⃣ 포트폴리오 필터링

```javascript
// 카테고리 버튼 클릭 시 필터링
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.type;
    
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });
    
    // 버튼 하이라이트 + 숫자 뱃지 애니메이션
    updateCategoryButton(button);
  });
});
```

---

## 🎓 학습 포인트

이 프로젝트를 통해 배울 수 있는 것들:

- ✅ CSS 변수를 활용한 테마 시스템 구현
- ✅ IntersectionObserver API 활용
- ✅ 부드러운 스크롤 & 동적 메뉴 하이라이트
- ✅ 모달 팝업 및 애니메이션
- ✅ 동적 DOM 조작 및 이벤트 처리
- ✅ CSS Grid/Flexbox 레이아웃
- ✅ 데이터 속성(`data-*`) 활용한 필터링
- ✅ 반응형 디자인 패턴

---

## 🚀 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/yssong01/portfolio.git
cd portfolio
```

### 2. 로컬 서버 실행

#### Live Server (VSCode 확장)

```
1. VSCode에서 index.html 열기
2. 우클릭 → "Open with Live Server"
```

#### Python 간이 서버

```bash
python -m http.server 8000
```

#### Node.js http-server

```bash
npx http-server
```

### 3. 브라우저 접속

```
http://localhost:8000
```

---

## 📱 반응형 브레이크포인트

| 디바이스 | 너비 | 적용 사항 |
|---------|------|----------|
| **모바일** | ~768px | 단일 컬럼, 햄버거 메뉴, 세로 스택 |
| **태블릿** | 769px~1024px | 2컬럼 그리드, 축소된 여백 |
| **데스크톱** | 1025px~ | 3컬럼 그리드, 전체 레이아웃 |

---

## 🎨 커스터마이징

### 색상 변경

`style.css`의 CSS 변수 수정:

```css
:root {
  --color-accent: #your-color;  /* 강조 색상 */
  --color-background: #your-color;  /* 배경 색상 */
}
```

### 프로젝트 추가

1. `index.html`의 `#work` 섹션에 프로젝트 카드 추가
2. `data-type` 속성으로 카테고리 지정
3. `main.js`의 `getProjectData()` 함수에 데이터 추가

### 섹션 추가

1. `index.html`에 `<section id="new-section" class="section">` 추가
2. 네비게이션 메뉴에 앵커 링크 추가
3. `main.js`의 섹션 배열에 ID 추가

---

## 📝 향후 계획

- [ ] 설명 내용 사실화 및 업데이트
- [ ] 블로그 섹션 추가
- [ ] 프로젝트 상세 페이지 별도 라우팅
- [ ] 연락처 폼 백엔드 연동
- [ ] 다국어 지원 가능 여부 탐색 (영어 등)
- [ ] 애니메이션 성능 최적화
- [ ] SEO 최적화 (메타 태그, OG 이미지)

---

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

---

## 👨‍💻 개발자

**yssong** - [GitHub Profile](https://github.com/yssong01)

---
