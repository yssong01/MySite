## 프로젝트 개요

기존 단순 정적 HTML 페이지를 기반으로,
- **다크/라이트 테마 토글**
- **실시간 시계 + 인사말**
- **부드러운 섹션 스크롤 & 메뉴 하이라이트**
- **포트폴리오 필터 + 모달 상세 보기**
- **스크롤 애니메이션**

등을 추가하여 포트폴리오용 원페이지 사이트로 확장했습니다.

---

## index.html 업데이트 요약

- 상단 헤더에 구성 요소 추가  
  - 좌측: 원형 로고 이미지 + `yssong` 타이틀  
  - 중앙: 🌙/☀️ 토글 스위치 + 시계(`clock`) + 인사말(`greeting`)  
  - 우측: 섹션 앵커 메뉴(홈/소개/기술/포트폴리오/자격증/연락처)

- `#home` 섹션  
  - 프로필 원형 아바타 이미지, 인삿말, 짧은 자기소개 문구  
  - 연락처 섹션으로 스크롤되는 버튼 `home__contact` 추가

- `#about` 섹션  
  - 기술 분야 3개(Front-end / Mobile / Back-end) 카드 형태(`.majors`)  
  - 경력 리스트(`.jobs`)를 카드화  
    - 로고 이미지(`.job__logo`) + 회사/직무/기간/설명 텍스트(`.job__texts`)

- `#skills` 섹션  
  - 언어/도구/기타 영역 분리  
  - 언어 부분은 퍼센트 게이지 바 형태로 시각화

- `#work` 섹션 (포트폴리오)  
  - 카테고리 버튼 4개(`data-type="all/front-end/mobile/back-end"`)  
  - 10개 프로젝트 카드를 `data-type`으로 구분  
  - 하단에서 프로젝트 상세를 보여줄 **모달 DOM 구조**(`projectModal`) 추가

- `#license`, `#contact` 섹션  
  - 자격증 카드 2개(원형 이미지 + 말풍선 설명)  
  - 이메일/전화번호/깃허브 아이콘 + 푸터 문구

- 공통 컴포넌트  
  - 상단으로 이동하는 플로팅 버튼 `.arrow-up` 추가  
  - `main.js` 스크립트 파일을 `defer`로 로딩

---

## style.css 업데이트 요약

- **CSS 변수 기반 테마 시스템**  
  - `:root`에 기본 다크 테마 색상 정의 (`--color-primary`, `--color-accent` 등)  
  - `body.light-theme` 에서 라이트 모드용 색상 재정의

- 공통 스타일  
  - 전체 폰트 `GMarketSans` 적용, `scroll-behavior: smooth`  
  - `.section`에 등장 애니메이션 기본 상태 설정(`opacity`, `translateY`)

- 헤더 / 네비게이션  
  - 고정 헤더 `.header` 와 중앙 정렬된 `.header__center` 레이아웃  
  - 토글 스위치 UI (`.toggle-switch`, `.slider`) 구현  
  - 시계/인사말 캡슐 스타일(`.header__clock`)  
  - 현재 섹션에 해당하는 메뉴에 `.active` 테두리/하이라이트 적용

- 소개/경력 카드  
  - `.major` 카드(아이콘 hover 애니메이션 포함)  
  - `.job` 카드: 통일된 로고 크기, 둥근 카드, 그림자, 텍스트 정렬

- 포트폴리오 영역  
  - `.categories` 버튼 행 + `.category--selected` 하이라이트  
  - 선택된 버튼에만 동그란 숫자 뱃지 `.category__count` 애니메이션  
  - `.projects`를 CSS Grid로 배치, `.project.show`만 보이도록 설정

- 모달 및 태그 디자인  
  - `.modal` 오버레이 + 중앙 카드, `modal-pop` 애니메이션  
  - `.modal-node`(태그 알약) 에 테두리 + 그림자, `node-pop` 애니메이션

- 기타  
  - 플로팅 `.arrow-up` 버튼에 페이드/슬라이드 인 효과  
  - 반응형 미디어 쿼리로 모바일에서 헤더/그리드/레이아웃 재배치

---

## main.js 기능 요약

- **부드러운 스크롤 & 메뉴 활성화**
  - 헤더 높이를 고려한 `smoothScrollToSection()` 구현  
  - 메뉴 클릭 시 해당 섹션으로 스무스 스크롤 + 즉시 `.active` 적용  
  - 스크롤 위치에 따라 현재 섹션을 계산해 메뉴 active 상태 자동 갱신  
  - 페이지 하단에 근접 시 `#contact` 메뉴가 자동 활성화

- **스크롤 애니메이션 & TOP 버튼**
  - `IntersectionObserver` 로 `.section` 에 `section--visible`을 붙여 페이드 인  
  - 스크롤이 일정 높이를 넘으면 `.arrow-up--show` 클래스로 화살표 표시

- **프로젝트 모달**
  - 각 `.project` 카드 클릭 시 모달 오픈  
  - `data-type`(front-end/mobile/back-end)에 따라  
    - 제목(`modalTitle`), 설명(`modalText`),  
    - 중앙 노드 + 4개의 태그 노드 텍스트를 동적으로 구성  
  - 오버레이/닫기 버튼/ESC 키로 모달 닫기 가능

- **시계 + 인사말**
  - 1초마다 현재 시간을 `HH:MM:SS` 형식으로 갱신  
  - 시간대(아침/오후/저녁)에 따라 인사말 문구를 자동 변경

- **다크/라이트 테마 토글**
  - 토글 스위치 상태에 따라 `body.light-theme` 클래스 ON/OFF  
  - CSS 변수 변경으로 전체 색상 테마가 전환

- **포트폴리오 필터**
  - 카테고리 버튼 클릭 시 `data-type` 기준으로 프로젝트 필터링  
  - 일치하는 카드에는 `.show` 클래스를 추가해 그리드 내에 배치  
  - 버튼 하이라이트와 숫자 뱃지 애니메이션 동작
