import { useEffect, useState } from 'react';
import { Container, ThemeProvider, Row, Col} from 'react-bootstrap';
import ProjectList from '../ProjectList/ProjectList';
import {WebDevelopment, UiUx} from '../../data';
import './project.css';

const Projects = () => {
  const [selected, setSelected] = useState("Web");
  const [data, setData] = useState([]);
  const list =[
    {
      id: "Web",
      title: "Web Development",
    },
    {
      id: "Ui/Ux",
      title: "UI/UX",
    },
  ]

  useEffect(() => {

    switch(selected) {
      case "Web":
        setData(WebDevelopment);
        break;
        case "Ui/Ux":
        setData(UiUx);
        break;
        default:
          setData(WebDevelopment);
    }

  },[selected])


  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <section className='projects' id='projects'>
        <Container className='text-center'>
          <h2>Projects</h2>
          <Row>
            <Col sm={12}>
              <ul className='project-pill'>
                {list.map((item)=>(
                  <ProjectList
                    title={item.title}
                    description={item.description}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                  />
                ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className='project-container'>
                {data.map((d) => (
                  <div className="project-item">
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noreferrer">
                        <img
                          src={d.img}
                          alt=''
                        />
                    </a>
                    <h3>{d.title}</h3>
                    <h4>{d.description}</h4>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </ThemeProvider>
  )
}

export default Projects
