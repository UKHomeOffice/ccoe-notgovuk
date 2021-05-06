import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';

const Page: FC<PageProps> = props => (
  <Fragment>
    <nav
  className="not-govuk-navigation-menu not-govuk-navigation-menu--horizontal"
>
  <ul className="not-govuk-navigation-menu__list">
    <li
      className="not-govuk-navigation-menu__list__item not-govuk-navigation-menu__list__item--active"
    >
      <a
        aria-current="page"
        className="not-govuk-navigation-menu__list__link active"
        href="/"
      >
        Inactive 1
      </a>
    </li>
    <li
      className="not-govuk-navigation-menu__list__item not-govuk-navigation-menu__list__item--active"
    >
      <a
        aria-current="page"
        className="not-govuk-navigation-menu__list__link active"
        href="/#main-content"
      >
        Active
      </a>
    </li>
    <li
      className="not-govuk-navigation-menu__list__item not-govuk-navigation-menu__list__item--active"
    >
      <a
        aria-current="page"
        className="not-govuk-navigation-menu__list__link active"
        href="/#main-content"
      >
        Inactive 2
      </a>
    </li>
  </ul>
</nav>

    <h1>Test page</h1>
    <p>This is the test page.</p>
  </Fragment>
);

export default Page;
export const title = 'Home';