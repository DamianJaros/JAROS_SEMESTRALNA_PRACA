document.addEventListener("DOMContentLoaded", () => {
  // Uspech:
  document.querySelectorAll(".uspech").forEach((item) => {
    const link = item.querySelector(".uspech-link");
    const popis = item.querySelector(".uspech-popis");

    if (link && popis) {
      link.addEventListener("click", () => {
        if (popis.style.display === "block") {
          popis.style.display = "none";
        } else {
          popis.style.display = "block";
        }
        link.classList.toggle("open");
      });
    }
  });

  // Spoluprace:
  const dots = document.querySelectorAll(".dot");
  const slides = document.querySelectorAll(".slide");

  if (dots.length && slides.length) {
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = dot.dataset.slide;

        slides.forEach((s) => s.classList.remove("active"));
        dots.forEach((d) => d.classList.remove("active"));

        if (slides[index]) {
          slides[index].classList.add("active");
        }
        dot.classList.add("active");
      });
    });
  }

  // Recenzie:
  const dots2 = document.querySelectorAll(".recenzie-dot");
  const slides2 = document.querySelectorAll(".recenzie-slide");

  if (dots2.length && slides2.length) {
    dots2.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = dot.dataset.slide;

        slides2.forEach((s) => s.classList.remove("active"));
        dots2.forEach((d) => d.classList.remove("active"));

        if (slides2[index]) {
          slides2[index].classList.add("active");
        }
        dot.classList.add("active");
      });
    });
  }

  // Formular:
  const formular = document.querySelector(".formular form");
  const vystupInfo = document.getElementById("vystup-info");

  if (formular && vystupInfo) {
    formular.addEventListener("submit", (event) => {
      event.preventDefault();

      const celeMeno = document.getElementById("meno_priezvisko").value;
      const kontaktInfo = document.getElementById("contact").value;
      const problemInfo = document.getElementById("problem").value;

      const checkbox = document.getElementById("moznost_agree");
      let suhlasInfo;
      if (checkbox.checked) {
        suhlasInfo = "Áno";
      } else {
        suhlasInfo = "Nie";
      }

      vystupInfo.innerHTML = `
        <h2>Zadané údaje:</h2>
        <p><b>Meno a priezvisko:</b> ${celeMeno}</p>
        <p><b>Kontakt:</b> ${kontaktInfo}</p>
        <p><b>Problém:</b> ${problemInfo}</p>
        <p><b>Súhlas so spracovaním údajov:</b> ${suhlasInfo}</p>
      `;
    });
  }

  // Filter:
  const filterText = document.getElementById("filterText");
  const filterList = document.querySelectorAll("#filterList li");

  if (filterText && filterList.length) {
    filterText.addEventListener("input", (event) => {
      const searchText = event.target.value.toLowerCase();

      filterList.forEach((item) => {
        const itemContent = item.textContent.toLowerCase();
        if (itemContent.includes(searchText)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  }

  // Bocny Panel:
  const panel = document.getElementById("bocny_panel");
  const closeBtn = document.getElementById("zatvor_panel");
  const topics = document.querySelectorAll(".panel_tema");
  const filterItems = document.querySelectorAll("#filterList li");

  function otvorPanel(index) {
    topics.forEach((t) => {
      t.style.display = "none";
    });

    const vybranaTema = document.getElementById(`topic_${index}`);
    if (vybranaTema) {
      vybranaTema.style.display = "block";
    }

    panel.classList.add("active");
  }

  filterItems.forEach((item, i) => {
    item.addEventListener("click", () => {
      otvorPanel(i + 1);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      panel.classList.remove("active");
    });
  }
});

// Scroll:
const scrollBtn = document.getElementById("scrollHore");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
