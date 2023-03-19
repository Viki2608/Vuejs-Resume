app.component("about-section", {
	template:
		/*html*/
		`<section id="about" class="about">
        <div class="container" data-aos="fade-up" data-aos-delay="200">
          <div class="section-title">
            <h2>About</h2>
            <p :style="{ textAlign: 'center', fontSize: '250%' }">Friendly Freelancer for All Your Business Needs.</p>
          </div>
          <div class="row">
            <div class="col-lg-3"> 
              <img src="./assets/img/profile-img.jpg" class="img-fluid" alt="">
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" > 
              <h3> DevOps Engineer & Web Developer.</h3>
              <p class="font-italic">
                Innovative and Affordable solutions for your Business Problems.
              </p>
              <div class="row">
                <div class="col-lg-6" v-for="(column, index) in detailsColumns" :key="index">
                  <ul>
                    <li v-for="(v, k) in column"><i class="icofont-rounded-right"></i> <strong>{{k}} :</strong> {{v}}</li>
                  </ul>
            	</div>
              </div>
            </div>
          </div>
        </div>
      </section>`,
	data() {
		return {
			details: {
				Name: "Vignesh Kumar M",
				Email: "vignesh26.manoharan@gmail.com",
				Phone: "+91 9715668285",
				Location: "Theni, Tamilnadu",
				"Date of birth": "26 Aug 2000",
				Website: "viki2608.github.io/Resume/",
				Degree: "B.Tech IT",
				Freelance: "Available",
			},
		};
	},
	computed: {
		detailsColumns() {
			const detailsArray = Object.entries(this.details);
			const midpoint = Math.ceil(detailsArray.length / 2);
			const firstHalf = detailsArray.slice(0, midpoint);
			const secondHalf = detailsArray.slice(midpoint);
			return [
				Object.fromEntries(firstHalf),
				Object.fromEntries(secondHalf),
			];
		},
	},
});
