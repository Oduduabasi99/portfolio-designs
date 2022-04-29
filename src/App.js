import React, { useEffect } from "react";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import LatestProjects from "./components/LatestProjects";
import Qualifications from "./components/Qualifications";
import Specializing from "./components/Specializing";
import Testimonials from "./components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

const App = (props) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);
	return (
		<div>
			<Hero />
			<Specializing />
			<Expertise />
			<LatestProjects />
			<Qualifications />
			<Testimonials />
		</div>
	);
};

export default App;
