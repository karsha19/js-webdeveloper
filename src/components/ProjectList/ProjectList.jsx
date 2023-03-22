import './projectlist.css';

const ProjectList = ({id,title,active,setSelected}) => {

  return (
    <li className={active ? "projectlist active" : "projectlist"} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}

export default ProjectList
