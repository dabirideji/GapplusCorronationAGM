tailwind.config = {
	theme: {
		extend: {
			backgroundImage: theme => ({
				'gradient-blue-pink': 'linear-gradient(to bottom left, #3490dc 0%, #9561e2 100%)',
				'gradient-green-yellow': 'linear-gradient(to top right, #48bb78 0%, #f6e05e ,orange , blue)',
				// Add more gradients as needed
			  }),
			colors: {
				grey:"#F8FAFC",
				orange:"#FF8200",
				ash:"#667085",
				skyblue:"#F9FAFB",
				lightBlue:" #667085"
			},
			gradientColorStops: theme=>({'custom-gradient':`linear-gradient(to right, ${theme('colors.#00000080')} 50%, ${theme('colors.#00000000')} 0%)`,}),
			screens: {
				// md: "700px",
				// ssm: "50px",
				// sm:"330px"
				"responsiveWidth":"20vw",
				"responsiveHeigth":"30vh",
			},
		}
	}
};