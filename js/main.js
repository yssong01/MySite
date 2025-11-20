// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------------------
  // 공통 요소 가져오기
  // ----------------------------------------
  const header = document.querySelector(".header");
  const arrowUp = document.querySelector(".arrow-up");
  const menuItems = document.querySelectorAll(".header__menu__item");
  const sections = [];
  const contactSection = document.querySelector("#contact"); // ★ 추가

  // 메뉴가 가리키는 섹션들을 배열에 저장
  menuItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const section = document.querySelector(href);
    if (section) {
      sections.push(section);
    }
  });

  const themeSwitch = document.getElementById("themeSwitch");
  const clockEl = document.getElementById("clock");
  const greetingEl = document.getElementById("greeting");

  const modal = document.getElementById("projectModal");
  let modalOverlay, modalCloseBtn, modalTitle, modalText;
  let modalCenterNode, modalNode1, modalNode2, modalNode3, modalNode4;

  if (modal) {
    modalOverlay = modal.querySelector(".modal__overlay");
    modalCloseBtn = modal.querySelector(".modal__close");
    modalTitle = document.getElementById("modalTitle");
    modalText = document.getElementById("modalText");
    modalCenterNode = modal.querySelector(".modal-node--center");
    modalNode1 = modal.querySelector(".modal-node--1");
    modalNode2 = modal.querySelector(".modal-node--2");
    modalNode3 = modal.querySelector(".modal-node--3");
    modalNode4 = modal.querySelector(".modal-node--4");
  }

  // ★ 프로젝트 카드들 선택 (모달에서 사용)
  const projects = document.querySelectorAll(".project");

  // ----------------------------------------
  // 1) 메뉴 & TOP 버튼: 부드러운 스크롤
  // ----------------------------------------
  function smoothScrollToSection(targetId) {
    const target = document.querySelector(targetId);
    if (!target) return;

    const headerHeight = header.offsetHeight;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerHeight + 10;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  }

  // 메뉴 클릭
  //   menuItems.forEach((item) => {
  //     item.addEventListener("click", (event) => {
  //       const href = item.getAttribute("href");
  //       if (!href || !href.startsWith("#")) return;

  //       event.preventDefault();
  //       smoothScrollToSection(href);
  //     });
  //   });

  // 메뉴 클릭
  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const href = item.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      event.preventDefault();

      // 1) 부드럽게 해당 섹션으로 스크롤
      smoothScrollToSection(href);

      // 2) 클릭한 메뉴에 즉시 active 적용
      menuItems.forEach((menuItem) => {
        const menuHref = menuItem.getAttribute("href");
        if (menuHref === href) {
          menuItem.classList.add("active");
        } else {
          menuItem.classList.remove("active");
        }
      });
    });
  });

  // TOP 화살표 클릭
  if (arrowUp) {
    arrowUp.addEventListener("click", (event) => {
      event.preventDefault();
      smoothScrollToSection("#home");
    });
  }

  // ----------------------------------------
  // 2) 스크롤 시 섹션 페이드 인 + 메뉴 active 갱신 + TOP 버튼 표시
  // ----------------------------------------

  // IntersectionObserver로 섹션 등장 애니메이션
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section--visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });

  // 현재 보이는 섹션에 따라 메뉴 하이라이트
  function updateActiveMenu() {
    const scrollY = window.scrollY;
    const headerHeight = header.offsetHeight;
    let currentId = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - headerHeight - 20;
      if (scrollY >= sectionTop) {
        currentId = section.id;
      }
    });

    // ★ contact 섹션이 화면 상단을 지나면 무조건 contact 활성화
    if (contactSection) {
      const contactTop = contactSection.offsetTop - headerHeight - 20;
      if (scrollY >= contactTop) {
        currentId = "contact";
      }
    }

    menuItems.forEach((item) => {
      const href = item.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const id = href.substring(1);
      if (id === currentId) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // 스크롤 이벤트
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // TOP 버튼 표시/숨김
    if (arrowUp) {
      if (scrollY > 400) {
        arrowUp.classList.add("arrow-up--show");
      } else {
        arrowUp.classList.remove("arrow-up--show");
      }
    }

    // 현재 섹션에 맞게 메뉴 active 업데이트
    updateActiveMenu();
  });

  // ----------------------------------------
  // 3) 프로젝트 카드 클릭 시 모달 표시
  // ----------------------------------------

  // 타입별 모달 내용 설정 함수
  function setModalContentByType(type, projectTitle) {
    if (!modalTitle || !modalText) return;

    modalTitle.textContent = projectTitle || "Project Detail";

    if (type === "mobile") {
      modalText.textContent =
        "(예시) Mobile 프로젝트입니다. React-Native, Android, iOS, Kotlin 등으로 구성된 모바일 앱 개발 예시 설명 텍스트입니다.";

      modalCenterNode.textContent = "Mobile";
      modalNode1.textContent = "React-Native";
      modalNode2.textContent = "Android";
      modalNode3.textContent = "iOS";
      modalNode4.textContent = "Kotlin";
    } else if (type === "front-end") {
      modalText.textContent =
        "(예시) Front-end 프로젝트입니다. HTML, CSS, JavaScript, React 등으로 구성된 웹 프론트엔드 예시 설명 텍스트입니다.";

      modalCenterNode.textContent = "Front-end";
      modalNode1.textContent = "HTML";
      modalNode2.textContent = "CSS";
      modalNode3.textContent = "JavaScript";
      modalNode4.textContent = "React";
    } else if (type === "back-end") {
      modalText.textContent =
        "(예시) Back-end 프로젝트입니다. Node.js, FastAPI, DB 연동 등 서버 사이드 개발에 대한 예시 설명 텍스트입니다.";

      modalCenterNode.textContent = "Back-end";
      modalNode1.textContent = "Node.js";
      modalNode2.textContent = "FastAPI";
      modalNode3.textContent = "Database";
      modalNode4.textContent = "API";
    } else {
      modalText.textContent =
        "(예시) 프로젝트 상세 내용이 여기에 표시됩니다. 임시 설명 텍스트입니다.";
      modalCenterNode.textContent = "Project";
      modalNode1.textContent = "Tech 1";
      modalNode2.textContent = "Tech 2";
      modalNode3.textContent = "Tech 3";
      modalNode4.textContent = "Tech 4";
    }
  }

  // 모달 열기
  function openModal(type, title) {
    if (!modal) return;
    setModalContentByType(type, title);
    modal.classList.add("modal--show");
  }

  // 모달 닫기
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("modal--show");
  }

  // 각 프로젝트 카드에 클릭 이벤트 추가
  projects.forEach((project) => {
    project.addEventListener("click", (event) => {
      event.preventDefault();
      const type = project.dataset.type;
      const titleEl = project.querySelector(".project__title");
      const title = titleEl ? titleEl.textContent : "Project";

      openModal(type, title);
    });
  });

  if (modal && modalCloseBtn && modalOverlay) {
    // 모달 닫기 버튼, 오버레이 클릭
    modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);
  }

  // ESC 키로 닫기
  window.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      modal &&
      modal.classList.contains("modal--show")
    ) {
      closeModal();
    }
  });

  // ----------------------------------------
  // 4) 현재 시간에 따라 시계 + 인사말 업데이트
  // ----------------------------------------
  function updateClockAndGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    // const seconds = now.getSeconds();

    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    // const s = String(seconds).padStart(2, "0");

    if (clockEl) {
      // clockEl.textContent = `${h}:${m}:${s}`;
      clockEl.textContent = `${h}:${m}`; // ★ HH:MM 만 표시
    }

    let greeting = "안녕하세요";

    if (hours >= 6 && hours < 12) {
      greeting = "좋은 아침입니다";
    } else if (hours >= 12 && hours < 18) {
      greeting = "좋은 오후입니다";
    } else {
      greeting = "좋은 밤입니다";
    }

    if (greetingEl) {
      greetingEl.textContent = greeting;
    }
  }

  updateClockAndGreeting();
  setInterval(updateClockAndGreeting, 1000);

  // ----------------------------------------
  // 5) 다크 모드 / 라이트 모드 토글
  // ----------------------------------------
  function applyTheme(isLight) {
    if (isLight) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }

  if (themeSwitch) {
    themeSwitch.addEventListener("change", () => {
      applyTheme(themeSwitch.checked);
    });
  }

  applyTheme(false);

  // ----------------------------------------
  // 6) 포트폴리오 카테고리 필터 + 애니메이션
  // ----------------------------------------
  const categoryButtons = document.querySelectorAll(".category");
  const projectItems = document.querySelectorAll(".project");

  // type에 따라 project를 보여주는 함수
  function filterProjects(type) {
    projectItems.forEach((project) => {
      const projectType = project.dataset.type;

      if (type === "all" || type === projectType) {
        project.classList.add("show");
      } else {
        project.classList.remove("show");
      }
    });
  }

  // 카테고리 버튼 클릭 시
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedType = btn.dataset.type; // all / front-end / mobile / back-end

      // 1) 버튼 하이라이트 갱신
      categoryButtons.forEach((b) => b.classList.remove("category--selected"));
      btn.classList.add("category--selected");

      // 2) 프로젝트 필터링
      filterProjects(selectedType);
    });
  });

  // 페이지 처음 로드될 때: ALL 표시
  filterProjects("all");
});
