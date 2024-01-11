import { useState, useEffect } from 'react'

const Projects = () => {
	const [projs, setProjs] = useState(null);

	useEffect(() => {
		console.log('Your mother');
	},[]);

	return <h1>Projects</h1>;
}

export default Projects