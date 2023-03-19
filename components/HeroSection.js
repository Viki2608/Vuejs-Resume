app.component("hero-section", {
	template: /*html*/ `
      <section
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="hero-container" data-aos="fade-in">
          <h1>Vignesh Kumar</h1>
          <p>
            I'm
            <span class="typed"></span>
          </p>
        </div>
      </section>
    `,
	mounted() {
		const script = document.createElement("script");
		script.src =
			"https://cdn.jsdelivr.net/npm/typed.js@2.0.11/lib/typed.min.js";
		script.onload = () => {
			const typed = new Typed(".typed", {
				strings: ["DevOps Engineer", "Web Developer", "Freelancer"],
				typeSpeed: 50,
				backSpeed: 50,
				loop: true,
			});
		};
		document.head.appendChild(script);
	},
});
