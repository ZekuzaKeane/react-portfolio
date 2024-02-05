import { removeHyphensAndCapitalize } from '../utils/helpers';
import * as projects from '../assets/index.js';
import Card from 'react-bootstrap/Card';

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={projects[name]} />
      <Card.Body>
        <Card.Title href={link}>{removeHyphensAndCapitalize(name)}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <a href={repo}>
            <i className="fab fa-github" />
        </a>
      </Card.Body>
    </Card>
  );
}

export default Project;