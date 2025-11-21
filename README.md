# 💼 나만의 웹사이트 만들기 (ver 1.3)

인터랙티브 기능과 반응형 UI를 갖춘 개인 포트폴리오 웹사이트입니다.

모바일·태블릿·PC 어디에서 접속해도 자연스럽게 보이도록 개선했습니다.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📌 프로젝트 개요

정적인 HTML 페이지를 **인터랙티브 원페이지 포트폴리오 사이트**로 업그레이드한 프로젝트입니다.

다크모드, 실시간 시계, 반응형 네비게이션, 프로젝트 모달 등 실제 포트폴리오 페이지에서 사용하는 기능들을 구현했습니다.

---

## 🎯 ver 1.3 주요 개선 사항

### 🆕 1. 모바일/태블릿 UI 완전 개편

- 상단 로고(프로필 이미지 + 이름) 크기 자동 축소
- 다크/라이트 스위치·시계·인사말 크기 최적화
- PC처럼 좌측 로고 / 우측 토글·시계 정렬 유지
- 메뉴 버튼 6개가 모바일에서도 가로 배치 + 자동 줄바꿈

### 🆕 2. 헤더 구조 개선

- 고정 헤더 높이를 반영하여 Home 섹션과 로고 겹침 현상 해결
- 모바일에서 header padding 축소, 이미지 top-margin 증가

### 🆕 3. TOP 버튼 개선

- 맨 아래 스크롤 시에도 항상 표시되도록 조정
- z-index 강화로 다른 요소와 겹치지 않도록 수정

### 🆕 4. Tistory 아이콘 추가

- 푸터에 GitHub + Tistory 원형 아이콘 2개 배치
- Hover 시 색상 변경 인터랙션 적용

### 🆕 5. 프로젝트 모달(Modal) 강화

- 중앙 노드 + 4개 기술 스택 태그 표시
- 등장 애니메이션 강화
- 모바일/태블릿에서도 자연스럽게 표시

---

## 🌟 주요 기능

| 기능 | 설명 |
|-----|------|
| 🌓 **다크/라이트 테마** | 토글 스위치로 테마 전환 |
| ⏰ **실시간 시계** | 시간대별 자동 인사말 변경 |
| 🎨 **부드러운 스크롤** | 섹션 이동 시 스무스 애니메이션 |
| 🔍 **포트폴리오 필터** | 카테고리별 프로젝트 필터링 |
| 📱 **3단계 반응형** | 모바일/태블릿/PC 자동 대응 |
| 🎭 **프로젝트 모달** | 클릭 시 상세 정보 팝업 |
| ✨ **스크롤 애니메이션** | IntersectionObserver 기반 페이드 인 |
| ⤴️ **TOP 버튼** | 스크롤 위치에 따른 자동 표시 |

---

## 🛠️ 기술 스택

| 분야 | 사용 기술 |
|------|----------|
| **마크업** | HTML5 (Semantic Tags) |
| **스타일링** | CSS3, Flexbox, Grid, CSS 변수, 반응형 미디어쿼리 |
| **스크립트** | Vanilla JavaScript (ES6+) |
| **애니메이션** | IntersectionObserver, CSS Keyframes |
| **폰트** | GMarketSans |

---

## 📂 프로젝트 구조

```
MySite/
├── index.html          # 메인 웹 페이지
├── css/
│   └── style.css       # 스타일시트 (반응형, 다크모드)
├── js/
│   └── main.js         # 모든 인터랙션 기능
├── images/             # 이미지 리소스
│   ├── yssong.jpg
│   ├── yssong.ico
│   ├── openai.png
│   ├── meta.jpg
│   └── license.jpg
└── README.md
```

---

## 📱 반응형 브레이크포인트

| 구분 | 화면 크기 | 주요 변경 사항 |
|------|----------|--------------|
| **Mobile** | ~767px | 로고/메뉴/시계 최소화, 메뉴 자동 줄바꿈 |
| **Tablet** | 768~1023px | 콘텐츠 축소, 1~2열 레이아웃 |
| **Desktop** | 1024px~ | 전체 레이아웃 유지 |

---

## ✨ 주요 구현 기능 상세

### 1️⃣ 반응형 헤더

- PC, 태블릿, 모바일 화면 크기에 따라 자동으로 레이아웃 조정
- 로고, 메뉴, 토글 스위치, 시계가 각 디바이스에 최적화된 크기로 표시
- 모바일에서도 6개 메뉴 버튼이 가로로 배치되며 자동 줄바꿈

### 2️⃣ TOP 버튼 최적화

- z-index를 높여 다른 요소와 겹치지 않도록 개선
- 스크롤 위치에 따라 opacity와 transform으로 부드럽게 등장
- 페이지 하단에서도 항상 표시

### 3️⃣ 소셜 아이콘 UI

- GitHub과 Tistory를 원형 아이콘으로 통일
- Hover 시 배경색과 텍스트 색상이 변경되는 인터랙션
- 모바일에서도 터치하기 쉬운 크기로 설정

### 4️⃣ 모달 애니메이션

- 프로젝트 카드 클릭 시 중앙 기술 노드와 4개의 태그가 순차적으로 등장
- 각 태그는 scale 애니메이션으로 팝업 효과
- 모바일/태블릿에서도 자연스러운 레이아웃 유지

### 5️⃣ 섹션 애니메이션

- IntersectionObserver를 사용하여 뷰포트 진입 시 페이드 인
- opacity와 translateY를 조합한 부드러운 등장 효과
- 성능 최적화를 위한 threshold 설정

---

## 🎓 학습 포인트

이 프로젝트를 통해 배울 수 있는 것들:

- ✅ 프론트엔드 반응형 디자인 전체 설계
- ✅ CSS 변수 기반 다크/라이트 테마 시스템
- ✅ IntersectionObserver API 활용
- ✅ DOM 이벤트 처리 및 상태 업데이트
- ✅ 모달 컴포넌트 설계 및 애니메이션
- ✅ CSS Grid/Flexbox 레이아웃 최적화
- ✅ 원형 아이콘 UI 제작 및 인터랙션

---

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

---

## 👨‍💻 개발자

**yssong**

- 💻 GitHub: [https://github.com/yssong01](https://github.com/yssong01)
- 📝 Tistory: [https://memo1286.tistory.com/](https://memo1286.tistory.com/)

---
