import { FC, Fragment, createElement as h } from "react";
import { PageProps } from "@not-govuk/app-composer";

const Page: FC<PageProps> = (props) => (
  <Fragment>
    <h4 className="app-subnav__theme">AWS training</h4>
    <nav className="not-govuk-navigation-menu">
      <ul className="not-govuk-navigation-menu__list">
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="aws-e-learning"
          >
            AWS E-Learning
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="upcoming-aws-courses"
          >
            Upcoming AWS courses
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="aws-certifications"
          >
            AWS certifications
          </a>
        </li>
      </ul>
    </nav>

    <h4 className="app-subnav__theme">Azure training</h4>
    <nav className="not-govuk-navigation-menu">
      <ul className="not-govuk-navigation-menu__list">
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="azure-learning-pathways"
          >
            Azure learning pathways
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="azure-e-learning"
          >
            Azure E-Learning
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="upcoming-azure-courses"
          >
            Upcoming Azure courses
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="azure-certifications"
          >
            Azure certifications
          </a>
        </li>
      </ul>
    </nav>

    <h1>Cloud training</h1>
    <p>
      Here, you will be able find and book online training and cloud
      certifications. The Home Office does not provide cloud training directly.
      Instead, we have professional training supplied by our cloud providers and
      training websites. Our cloud providers have engaged with us to
      provide free training for Home Office staff and contractors. So, we need
      to make sure we are taking advantage of this opportunity.
    </p>

    <h2>Types of training available</h2>
    <h3>Cloud providers training </h3>
    <p>
      Our cloud providers offer free e-learning which is available to everybody.
      There is also instructor-led training, which is initially prioritised for
      Home Office employees, but is also available to contractors. For more
      information on training visit the AWS and Azure training pages.
    </p>

    <h3>Cloud academy</h3>
    <p>
      For cloud academy’s e-learning platform visit{" "}
      <a href="https://cloudacademy.com" className="govuk-link">
        cloudacademy.com
      </a>{" "}
      and sign up for a free trial. If you found the free trial useful you can
      email{" "}
      <a href="mailto:public.cloud@homeoffice.gov.uk">
        public.cloud@homeoffice.gov.uk
      </a>{" "}
      to get access to a Home Office account.
    </p>
  </Fragment>
);

export default Page;
export const title = "Home";
