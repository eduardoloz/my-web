import './ProjDisplay.css'

const Project = (props) => {
	const title = props.title;
	const link = props.link;

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