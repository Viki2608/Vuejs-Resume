app.component("nav-section", {
	template:
		/*html*/
		`<nav class="nav-menu">
    <ul>
      <li class="active"><a href="index.html"><i class="bx bx-home"></i> <span>Home</span></a></li>
      <li v-for="(v, k) in nav_menu" :key="k"><a :href="'#' + k"><i :class="v"></i> <span>{{ k }}</span></a></li>
    </ul>
  </nav>`,
	data() {
		return {
			nav_menu: {
				About: "bx bx-user",
				Resume: "bx bx-file-blank",
				Services: "bx bx-server",
				Contact: "bx bx-envelope",
			},
		};
	},
});
