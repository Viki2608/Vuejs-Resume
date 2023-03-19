app.component("services-section", {
	template: /*html*/ `
	  <section id="services" class="services">
		<div class="container">
		  <div class="section-title">
			<h2>Services</h2>
			<p>We all know that every business is growing, but some people still don't realize the power of the internet. They continue to follow traditional methods of marketing. Having a website for your business is where you start. It helps you to have an identity.</p>
		  </div>      
		  <div class="row">
			<div v-for="item in services" :key="item.id" class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
			  <div class="icon"><i :class="item.icon"></i></div>
			  <h4 class="title"><a href="#">{{ item.title }}</a></h4>
			  <p class="description">{{ item.description }}</p>
			</div>
		  </div>
		</div>
	  </section>
	`,
	data() {
		return {
			services: [
				{
					id: 1,
					title: "Logo Design",
					description:
						"Think of this as your brand identity. We will create a memorable logo for you.",
					icon: "icofont-computer",
				},
				{
					id: 2,
					title: "Poster Design",
					description:
						"A poster is a temporary promotion of an idea, product, or event put up in a public space for mass consumption. Posters are designed to be both eye-catching and informative.",
					icon: "icofont-chart-bar-graph",
				},
				{
					id: 3,
					title: "Web development",
					description:
						"Having a website makes you look professional,You can clearly showcase your products and services and encourage customers to contact you",
					icon: "icofont-earth",
				},
				{
					id: 4,
					title: "Delivery",
					description:
						"Client Satisfaction is my only Need.To ensure that i provide Ontime delivery for your website",
					icon: "icofont-image",
				},
				{
					id: 5,
					title: "Website Maintenance",
					description:
						"Regular and timely maintenance of websites is a critical task which many ignore.I am here for your tiresome Work",
					icon: "icofont-settings",
				},
				{
					id: 6,
					title: "Website redesigning and renewal",
					description: "Your website will be updated regularly",
					icon: "icofont-tasks-alt",
				},
			],
		};
	},
});
