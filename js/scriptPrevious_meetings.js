const header = document.querySelector("header");
      const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
      const nav = document.querySelector("nav");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      mobileMenuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      });

      document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          nav.classList.remove("show");
          const icon = mobileMenuBtn.querySelector("i");
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });

      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("show");
          const icon = mobileMenuBtn.querySelector("i");
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        });
      });
    


        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true
        });

        // Filter functionality
        const filterButtons = document.querySelectorAll('.filter-button');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
            });
        });



        
  const cards = document.querySelectorAll('.meeting-card');
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');

  function showRange(start, end) {
    cards.forEach((card, index) => {
      card.classList.remove('show');
      if (index >= start && index <= end) {
        card.classList.add('show');
      }
    });
  }

  btn1.addEventListener('click', () => {
    showRange(0, 2); // عرض أول 3
    btn1.classList.add('active');
    btn2.classList.remove('active');
  });

  btn2.addEventListener('click', () => {
    showRange(3, 4); // عرض آخر 2
    btn2.classList.add('active');
    btn1.classList.remove('active');
  });

  // عرض افتراضي لأول 3 كروت
  showRange(0, 2);
  btn1.classList.add('active');