import { useEffect } from 'react';
import PageContent from './PageContent';

import { capitalizeFirstLetter } from '../utils/helpers';
import { Outlet } from 'react-router-dom';

import dreamLand from '../assets/images/dreamland.png';

function Page({ activePage }) {
    activePage = activePage.substring(1);

  useEffect(() => {
    document.title = capitalizeFirstLetter(activePage);
  }, [activePage]);

  return (
    <section>
      <h2>{capitalizeFirstLetter(activePage)}</h2>

      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}
export default Page;
