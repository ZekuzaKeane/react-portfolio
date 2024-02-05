import { Link } from 'react-router-dom';
import { capitalizeAllLetters } from '../utils/helpers';

function Nav({ activePage }) {
  const pages = ['portfolio', 'contact', 'resume'];

  return (
    <nav>
      <ul className="flex-row">
        <li
          className={`mx-2 ${activePage === '/' && 'navActive'}`}
          key="about"
        >
          <Link to="/">ABOUT</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-2 ${activePage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{capitalizeAllLetters(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;