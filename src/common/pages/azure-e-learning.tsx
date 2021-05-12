import { FC, Fragment, createElement as h } from "react";
import { PageProps } from "@not-govuk/app-composer";

const Page: FC<PageProps> = (props) => (
  <Fragment>
    <nav className="not-govuk-navigation-menu govuk-grid-column-one-quarter">
      <h4 className="app-subnav__theme">AWS training</h4>
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
      <h4 className="app-subnav__theme">Azure training</h4>
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
        <li className="not-govuk-navigation-menu__list__item not-govuk-navigation-menu__list__item--active">
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

    <main className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Azure training</span>
        Azure E-Learning
      </h1>
      <p>
        To support your Azure training, we are working with Microsoft. We are
        using the Microsoft{" "}
        <a href="https://esi.microsoft.com/">
          Enterprise Skills Initiative (ESI)
        </a>
        . As part of this package, Microsoft have also rolled out the Learning
        Experience Portal (LxP). Within this portal is free resources, learning
        and accreditation provided by Microsoft. You will need to sign into the
        ESI with your work email to view all the available material.
      </p>

      <p>
        You may also wish to visit Microsoft’s website for all{" "}
        <a href="https://docs.microsoft.com/en-gb/learn/browse/">
          Azure training
        </a>{" "}
        material. This is not part of ESI, but you are able to create a personal
        account if you like.
      </p>

      <p>
        To help understand what training you should undertake you can complete
        an Azure skills assessment for your role. Do this on{" "}
        <a href="https://www.pluralsight.com/partners/microsoft/azure?aid=7010a000001xDURAA2">
          Pluralsight
        </a>
        , you do not need a Home Office licence to access these skills
        assessments.
      </p>
    </main>
  </Fragment>
);

export default Page;
export const title = "Home";
