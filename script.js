const app = new Vue({
	el: "#app",

	created() {
		this.probabilities = this.votes.map(cur => Math.sqrt(cur + 1));
	},

	data: {
		topics: [
			"Charter Schools",
			"Persian Gulf",
			"Belt and Road Initiative",
			"Universal Basic Income",
			"Offensive Cyber Operations",
		],
		votes: [
			1,
			10,
			7,
			13,
			1,
		],
		probabilities: [],
		output: "Click the button to get a topic!",
	},

	computed: {
		pTotal() {
			return this.probabilities.reduce((prev, cur) => !!prev || prev === 0 ? prev + cur : cur);
		}
	},

	methods: {
		newTopic() {
			let chosen = Math.random() * this.pTotal;

			let added = 0;

			for (let i = 0; i < this.probabilities.length; i++) {
				added += this.probabilities[i];

				if (chosen < added) {
					this.output = this.topics[i];
					return;
				}
			}

			this.output = "Something went wrong - please roll again.";
		}
	}
});