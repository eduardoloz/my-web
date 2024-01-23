import './ProjDisplay.css'

const Project = ({proj}) => {
	const title = proj.title;
	const link = proj.link;
  const description = proj.description

  return (
    <div className='project'>
        <a href={link}>
          <h1 className='Title'>{title}</h1>
        </a>
				<p>{description}</p>
    </div>
	);
}

export default Project;