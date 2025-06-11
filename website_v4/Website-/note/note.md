HTML codes

1- index.html

<!-- Coming Soon Section 
        <div class="coming-soon" data-aos="fade-up">
          <h1 class="coming-soon-title">ورش العمل</h1>
          <div class="coming-soon-card">
              <div class="coming-soon-text">انتظرونا قريباً</div>
              <p class="coming-soon-description">سنقدم المزيد من ورش العمل المميزة في مجال الذكاء الاصطناعي والتقنية</p>
              <div class="coming-soon-badge">
                  ترقبوا الإعلان عن المواعيد الجديدة
              </div>
          </div>
      </div>
  </div>
   <div class="title-container">
      <h1 class="workshop-title">ورش العمل</h1>
      
    </div>
  -->
---------------------------------------------------------------------------------
<!--
    <div class="slider-wrapper" id="workshops">
      <div class="container">
        <div class="slider-track">
          <div class="card">
            <span class="tag">جدة</span>
            <h2 class="title-ar">معسكر الذكاء الاصطناعي للأطفال</h2>
            <h3 class="title-en">AI</h3>
                      <p class="description">
          رحلة ممتعة ومبسطة في عالم الذكاء الاصطناعي مصممة خصيصًا للأطفال!
          في هذا المعسكر، نخوض مغامرة تعليمية تفاعلية تجمع بين المعرفة واللعب، حيث يتعلم الأطفال:
            •	مقدمة في الذكاء الاصطناعي وأشهر أدواته
          يتعرف الطفل على مفاهيم الذكاء الاصطناعي بأسلوب بسيط وتفاعلي يُشعل الفضول ويحفز الإبداع.
            •	البيانات وعلاقتها بالذكاء الاصطناعي
          كيف “تفكر” الآلة؟ يتعلم الأطفال كيف تستخدم الآلة البيانات لاتخاذ قراراتها.
            •	مقدمة في تعلم الآلة (Machine Learning)
          كيف تتعلم الآلات من التجربة؟ نوضح ذلك من خلال أنشطة وتجارب شيقة.
            •	أنشطة وألعاب ترفيهية تعليمية
          ندمج التعليم بالمرح لتجربة تعليمية لا تُنسى تُحفّز حب الاستكشاف والتعلم.

            </p>
            <h3 class="title-en">22/04/2025</h3>
            <button class="register-btn"><span>انتهى التسجيل</span></button>
          </div>

          <div class="card">
            <span class="tag">جدة</span>
            <h2 class="title-ar">الذكاء الإصطناعي و التقنية المالية</h2>
            <h3 class="title-en">Fintech</h3>
            <p class="description">
              متخصصون طلاب المالية والمحاسبة المهتمون بتطبيق الذكاء الاصطناعي في
              المهام اليومية أو التحولات المهنية
            </p>
            <h3 class="title-en">23/04/2025</h3>
            <button class="register-btn"><span>انتهى التسجيل</span></button>
          </div>

          <div class="card">
            <span class="tag">جدة</span>
            <h2 class="title-ar">الذكاء الإصطناعي و الاعمال</h2>
            <h3 class="title-en">Business Intelligence & Tourism</h3>
            <p class="description">
              متخصصون الأعمال والطلاب الذين يتطلعون إلى تحسين جودة سير العمل
              وأتمتة العمليات باستخدام الذكاء الاصطناعي وأدوات البيانات
            </p>
            <h3 class="title-en">24/04/2025</h3>
            <button class="register-btn"><span>انتهى التسجيل</span></button>
          </div>

          <div class="card hidden">
            <span class="tag">عن بعد</span>
            <h2 class="title-ar">الذكاء الإصطناعي في الهندسة</h2>
            <h3 class="title-en">Engineering</h3>
            <p class="description">
              متخصصون الهندسة والطلاب المهتمون باتجاهات الصناعة، وأدوات الذكاء
              الاصطناعي المُحسّنة، وتحسين سير العمل
            </p>
            <h3 class="title-en">21/04/2025</h3>
            <button class="register-btn"><span>انتهى التسجيل</span></button>
          </div>

          <div class="card hidden">
            <span class="tag">عن بعد</span>
            <h2 class="title-ar">الذكاء الإصطناعي في الطب</h2>
            <h3 class="title-en">Medicine</h3>
            <p class="description">
              متخصصون الرعاية الصحية والطلاب والأطباء الذين يبحثون عن تحديثات
              وتطبيقات عملية في مجال الذكاء الاصطناعي
            </p>
            <h3 class="title-en">20/04/2025</h3>
            <button class="register-btn"><span>انتهى التسجيل</span></button>
          </div>
        </div>
     
      </div>
          -->
<!--
      <button class="more-workshops-btn">
        <span>انقر للمزيد من ورش العمل</span>
        <div class="arrow"></div>
      </button>

     
     
    </div>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const moreBtn = document.querySelector(".more-workshops-btn");
        const hiddenCards = document.querySelectorAll(".card.hidden");
        let isExpanded = false;

        moreBtn.addEventListener("click", function () {
          if (!isExpanded) {
            hiddenCards.forEach((card) => {
              card.classList.remove("hidden");
              setTimeout(() => {
                card.style.opacity = "1";
              }, 100);
            });
            moreBtn.innerHTML =
              '<span>عرض أقل</span><div class="arrow" style="transform: rotate(180deg)"></div>';
          } else {
            hiddenCards.forEach((card) => {
              card.style.opacity = "0";
              setTimeout(() => {
                card.classList.add("hidden");
              }, 600);
            });
            moreBtn.innerHTML =
              '<span>انقر للمزيد من ورش العمل</span><div class="arrow"></div>';
          }
          isExpanded = !isExpanded;
        });
      });
    </script>

    <div class="modal">
      <div class="modal-content">
        <button class="modal-close">×</button>
        <div class="modal-body">
        </div>
      </div>
    </div>
      
  -->
  -------------------------------------------------------------------------------------------
   //const workshopData = {
       //  "معسكر الذكاء الاصطناعي للأطفال": {
      //     duration: "يوم",
       //    fees: "لا يوجد",
       //    seats: "30",
        //   attendance: "حضوري",
        //   location: "معمل لاب | Code DAH Lab",
        //   locationUrl:
        //     "https://maps.app.goo.gl/HUj9Le8Aqy5cwA446?g_st=com.google.maps.preview.copy",
        //   certificate: "يوجد",
        //  link: "https://forms.office.com/r/fSyNK9cFpZ", //  رابط التسجيل هنا
        //   schedule: [
          //   { day: "22/04/2025 - الثلاثاء", time: "7:00 - 9:00 مساءً" },
         //  ],
         //  instructor: {
          //   name: "افنان القوقندي",
         //   image: "Assets/afnan.jpeg",
         //   bio: "مهندسة ذكاء اصطناعي شغوفة بابتكار حلول ذكية تجمع بين الكفاءة والإبداع. خبيرة في تصميم النماذج الذكية وبناء الشراكات التقنية، وتسعى دائمًا لتطوير مهاراتها ومواكبة كل جديد في عالم الذكاء الاصطناعي",
      //    },
       //  },
      //   "الذكاء الإصطناعي و التقنية المالية": {
      //     duration: "يوم",
      //     fees: "لايوجد",
      //     seats: "30",
      //     attendance: "حضوري",
      //     location: "معمل لاب | Code DAH Lab",
      //     locationUrl:
      //       "https://maps.app.goo.gl/HUj9Le8Aqy5cwA446?g_st=com.google.maps.preview.copy",
      //     certificate: "يوجد",
      //     link: "https://forms.office.com/r/fSyNK9cFpZ", //  رابط التسجيل هنا
      //     schedule: [
      //       { day: "23/04/2025 - الأربعاء", time: "7:00 - 9:00 مساءً" },
      //     ],
      //     instructors: [
      //       {
      //         name: "Abdullah Bawazeer",
      //         image: "Assets/Dr. Adnan Al-Bar.jpg",
      //         bio: `Partner and Founder in<br>
      //     <li>Ershad Business Consulting for Financial Advisory <br>
      //     <li>Seen Tarbi for Financial Technology Company<br><br>

      // Over 30 years of experience in the finance field  
      // Master’s in Management, USA-OH  
      // Bachelor’s in Accounting, KSA-KAU  
      // Certified Professional Trainer from IATA  
      // Designing and delivering financial courses`,
      //       },
      //       {
      //         name: "Dr. Adnan Al-Bar",
      //         image: "Assets/Abdullah Bawazeer.jpg", // استخدم مسار صحيح للصورة
      //         bio: ` <li>CEO of Seen Tarbi for Financial Technology Company

      // <li>Head of the Advisory Office for Digital Business Solutions  
      // <li>Digital Transformation and Emerging Technologies Consultant`,
      //       },
      //     ],
      //   },

      //   "الذكاء الإصطناعي و الاعمال": {
      //     duration: "يوم",
      //     fees: "لايوجد",
      //     seats: "30",
      //     attendance: "حضوري",
      //     location: "معمل لاب | Code DAH Lab",
      //     locationUrl:
      //       "https://maps.app.goo.gl/HUj9Le8Aqy5cwA446?g_st=com.google.maps.preview.copy",
      //     certificate: "يوجد",
      //     link: "https://forms.office.com/r/fSyNK9cFpZ", //  رابط التسجيل هنا
      //     schedule: [{ day: "24/04/2025 - الخميس", time: "7:00 - 9:00 مساءً" }],
      //     instructor: {
      //       name: "لينا بابصيل",
      //       image: "Assets/lina.jpeg",
      //       bio: "رائدة تنفيذية بخبرة واسعة في قطاع الأغذية والمشروبات، ومتخصصة في تصميم العمليات وتطوير الأعمال. <br> تشغل مناصب قيادية متعددة، وتحمل شهادات معتمدة في الجودة وتجربة العميل، مع خلفية هندسية من جامعة عفت.",
      //     },
      //   },
      //   "الذكاء الإصطناعي في الهندسة": {
      //     duration: "يوم",
      //     fees: "لايوجد",
      //     seats: "30",
      //     attendance: "عن بعد",
      //     location: "Teams",
      //     locationUrl: "#",
      //     certificate: "يوجد",
      //     link: "https://forms.office.com/r/fSyNK9cFpZ", //  رابط التسجيل هنا
      //     schedule: [
      //       { day: "21/04/2025 - الإثنين", time: "7:00 - 9:00 مساءً" },
      //     ],
      //     instructor: {
      //       name: "د. محمد باعوم",
      //       image: "Assets/mohammedba-aoum.jpeg",
      //       bio: "باحث ومستشار متخصص في الذكاء الاصطناعي وتعلم الآلة. حاصل على شهادة الدكتوراه في الهندسة الصناعية وأنظمة المعلومات من جامعة فيرجينيا تك. عمل على مشاريع مبتكرة تشمل تحسين كفاءة الأقسام الطارئة في Mayo Clinic باستخدام الذكاء الاصطناعي، وتطوير نماذج للتنبؤ بالأوبئة، وتحسين أنظمة الطاقة المتجددة باستخدام تقنيات الذكاء الاصطناعي",
      //     },
      //   },
      //   "الذكاء الإصطناعي في الطب": {
      //     duration: "يوم",
      //     fees: "لايوجد",
      //     seats: "30",
      //     attendance: "عن بعد",
      //     location: "Teams",
      //     locationUrl: "#",
      //     certificate: "يوجد",
      //     link: "https://forms.office.com/r/fSyNK9cFpZ", //  رابط التسجيل هنا
      //     schedule: [{ day: "20/04/2025 - الأحد", time: "7:00 - 9:00 مساءً" }],
      //     instructor: {
      //       name: "د.م. أحمد عزام",
      //       image:
      //         "https://pbs.twimg.com/profile_images/1882236577566412800/wqB3L66U_400x400.jpg",
      //       bio: "طبيب , عالم , و مهندس في الذكاء الاصطناعي | مدير قسم الأبحاث السريرية والذكاء الاصطناعي السريري في ASIDE Healthcare | أستاذ مساعد زائر في جامعة سيول الوطنية",
      //     },
      //   },
   //   };
   --------------------------------------------------------------------------------------------------

   <!---------------------------------احصائيات------------------------------------->
    <!-- <div class="divider-container">
    <div class="gradient-banner"></div>
    <div class="particles"></div>
    <div class="wave"></div>
    <div class="counter-wrapper">
      <div class="counter">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fbfcfc"
          class="icons">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
        <h1 class="count" data-target="19">0</h1>
        <p>برنامج ونشاط</p>
      </div>
      <div class="counter">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fbfcfc"
          class="icons">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
        <h1 class="count" data-target="90">0</h1>
        <p>متطوع</p>
      </div>
      <div class="counter">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fbfcfc"
          class="icons">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <h1 class="count" data-target="260">0</h1>
        <p>ساعة تطوعيه</p>
      </div>
      <div class="counter">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fbfcfc"
          class="icons">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>
        <h1 class="count" data-target="1152">0</h1>
        <p>مستفيد</p>
      </div>
      <div class="counter">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fbfcfc"
          class="icons">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        </svg>
        <h1 class="count" data-target="10">0</h1>
        <p>اعضاء بالجمعية</p>
      </div>
    </div>

  </div> -->



  ----------------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------------
2- Previous_meetings.html


<!-- <div class="pagination" data-aos="fade-up">
            <button class="page-button active">1</button>
            <button class="page-button">2</button>
             <button class="page-button">3</button>
            <button class="page-button">4</button> -->
<!-- </div> --> 

-------------------------------------

        // Pagination functionality
        // const pageButtons = document.querySelectorAll('.page-button');
        // pageButtons.forEach(button => {
        //     button.addEventListener('click', () => {
        //         pageButtons.forEach(btn => btn.classList.remove('active'));
        //         button.classList.add('active');
        //     });
        // });

-------------------------------------



