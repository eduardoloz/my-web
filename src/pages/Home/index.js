import "./index.css"

const Home = () => {
  return(
	<div className="home-page">
		<div className="section-1">
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h1>Welcome to my website!</h1>
			<br></br>
			<h2>This will be Eduardo's website for the future</h2>
		</div>
		<div className="section-2">
			<div className="container">
				<h1>About me!</h1>
				<p>A little information about myself! I am Eduardo Lozano, a Simons STEM Scholar from Queens, New York. 
					I went to Stuyvesant High School and am in the class of 27’ for Stony Brook University studying computer science. 
					I hope to double major in Computer Science with Applied Mathematics as well as a specialization in Systems Software Development.
					I love programming, playing and listening to music, as well as learning.
					<br></br>
					<br></br>
					From the computer science side of things, I hope to be involved in research in the upcoming future and an active member of the CS community at Stony Brook and beyond. 
					I hope to get more experience with lower level programming.</p>
			</div>
		</div>
	</div>
  );
}

export default Home