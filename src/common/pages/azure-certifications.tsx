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
        <li className="not-govuk-navigation-menu__list__item not-govuk-navigation-menu__list__item--active">
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
        Azure certifications
      </h1>
      <p>
        Azure Training is undertaken through the Microsoft{" "}
        <a href="https://esi.microsoft.com/">
          Enterprise Skills Initiative (ESI)
        </a>
        . The links below show a summary of some of the different certification
        levels.
      </p>

      <p>
        For any further information on how to book these courses listed please
        email:{" "}
        <a href="mailto:public.cloud@homeoffice.gov.uk">
          public.cloud@homeoffice.gov.uk
        </a>
      </p>

      <details className="govuk-details">
        <summary className="govuk-details__summary">Azure Fundamentals</summary>
        <div className="govuk-details__text">
          <p>
            The Azure Fundamental certification is aimed at everybody who wishes
            to increase their knowledge of Azure. The free online training
            starts with the very basics, allowing total novices to begin their
            Azure journey. The first training path explains 'what is cloud
            computing'. The training can be useful to check your own knowledge
            and can be taken at your speed.
          </p>
          <p>The Azure Fundamentals training includes:</p>
          <ul>
            <li>Understanding cloud concepts,</li>
            <li>Core Azure Services,</li>
            <li>Azure pricing and support,</li>
            <li>
              Fundamentals of cloud security, privacy, compliance, and trust.
            </li>
          </ul>
          <p>
            Delivery: Microsoft Learn (free on-line, self-paced) or
            virtual/in-person instructor led training delivered by Microsoft.
          </p>
          <p>
            Duration: 1 Day, although the free courses can be down at any time
            and at own pace.
          </p>
          <p>
            You may also be interested in{" "}
            <a href="https://docs.microsoft.com/en-gb/learn/paths/az-900-describe-cloud-concepts/">
              free online training for Azure Fundamentals
            </a>
            .
          </p>
          <p>
            If you would like to book onto a face-to-face course or book an
            exam, please email:
            <a href="mailto:public.cloud@homeoffice.gov.uk">
              public.cloud@homeoffice.gov.uk
            </a>
          </p>
        </div>
      </details>

      <details className="govuk-details">
        <summary className="govuk-details__summary">
          Architect Certification
        </summary>
        <div className="govuk-details__text">
          <p>
            The Architect Certification was developed for individuals who have
            intermediate-level skills for administering Azure.
          </p>
          <p>This Azure Training is aimed at people who are:</p>
          <ul>
            <li>Architects on existing teams using Azure,</li>
            <li>
              Responsible for reviewing cloud hosting architecture on a
              Technical Design Authority Board,
            </li>
            <li>Understand Azure development and DevOps processes,</li>
            <li>
              Already have some expertise or are willing to learn – Expert: 3-5
              years recommended experience.
            </li>
          </ul>
          <p>
            You may also wish to visit Microsoft’s website for more information
            on their{" "}
            <a href="https://docs.microsoft.com/en-us/learn/certifications/azure-solutions-architect/">
              Azure architect certification
            </a>
            .
          </p>
          <p>
            If you would like to book onto a face-to-face course or book an
            exam, please email:
            <a href="mailto:public.cloud@homeoffice.gov.uk">
              public.cloud@homeoffice.gov.uk
            </a>
          </p>
        </div>
      </details>

      <details className="govuk-details">
        <summary className="govuk-details__summary">
          Developer Certification
        </summary>
        <div className="govuk-details__text">
          <p>
            The Developer Certification is designed for participants who have
            subject matter expertise designing, building, testing, and
            maintaining cloud applications and services on Microsoft Azure.
          </p>
          <p>This Azure Training is aimed at people who are:</p>
          <ul>
            <li>Already working on a team that is using Azure,</li>
            <li>
              For people interested in, transitioning to or already in the
              specific job role,
            </li>
            <li>
              Already have some expertise or are willing to learn – Associate: 2
              years recommended experience.
            </li>
          </ul>
          <p>
            You may also wish to visit Microsoft’s website for more information
            on their{" "}
            <a href="https://docs.microsoft.com/en-us/learn/certifications/azure-developer/">
              Azure developer certification
            </a>
            .
          </p>
          <p>
            If you would like to book onto a face-to-face course or book an
            exam, please email:
            <a href="mailto:public.cloud@homeoffice.gov.uk">
              public.cloud@homeoffice.gov.uk
            </a>
          </p>
        </div>
      </details>
    </main>
  </Fragment>
);

export default Page;
export const title = "Home";
