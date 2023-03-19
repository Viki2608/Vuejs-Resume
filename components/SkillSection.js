app.component("skill-section", {
	template:
		/*html*/
		`<section id="skills" class="skills section-bg">
        <div class="container">
            <div class="section-title">
                <h2>Skills</h2>
            </div>
            <div class="row skills-content">
                <div class="col-lg-6" data-aos="fade-up">
                    <div v-for="(value, key, index) in leftSkills" :key="key">
                        <div class="progress">
                            <span class="skill">{{ key }} <i class="val">{{ value }}%</i></span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" :style="{ width: value + '%' }"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" data-aos="fade-up">
                    <div v-for="(value, key, index) in rightSkills" :key="key">
                        <div class="progress">
                            <span class="skill">{{ key }} <i class="val">{{ value }}%</i></span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" :style="{ width: value + '%' }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
	data() {
		return {
			skills: {
				Python: 85,
				Jenkins: 75,
				Docker: 80,
				Grafana: 85,
				Kubernetes: 70,
				DevOps: 80,
				Postgres: 80,
				Mongodb: 80,
				Vuejs: 70,
				HTML: 80,
				JavaScript: 80,
				CSS: 75,
			},
			leftSkills: {},
			rightSkills: {},
		};
	},
	mounted() {
		const skillKeys = Object.keys(this.skills);
		const numOfSkills = skillKeys.length;
		const half = Math.ceil(numOfSkills / 2);

		for (let i = 0; i < numOfSkills; i++) {
			if (i < half) {
				this.leftSkills[skillKeys[i]] = this.skills[skillKeys[i]];
			} else {
				this.rightSkills[skillKeys[i]] = this.skills[skillKeys[i]];
			}
		}
	},
});
