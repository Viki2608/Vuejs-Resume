const app = Vue.createApp({
	data() {
		return {
			product: "Socks",
			description: "A warm fuzzy pair of socks.",
			social_links: {
				"bx bxl-twitter": "https://twitter.com/vignesh26mano",
				"bx bxl-facebook":
					"https://www.facebook.com/profile.php?id=100024218812464",
				"bx bxl-instagram":
					"https://www.instagram.com/_.lone_survivor._/",
				"bx bxl-linkedin": "https://www.linkedin.com/in/Vignesh2608/",
			},
			nav_menu: ["About", "Resume", "Services", "Contact"],
		};
	},
	methods: {},
});
