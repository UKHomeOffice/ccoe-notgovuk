import { FC, Fragment, createElement as h } from "react";
import { PageProps } from "@not-govuk/app-composer";

const Page: FC<PageProps> = (props) => (
  <Fragment>
    <nav className="not-govuk-navigation-menu govuk-grid-column-one-quarter">
      <h2 className="app-subnav__theme"><span className="caption">Operational excellence</span></h2>
      <ul className="not-govuk-navigation-menu__list">
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            Operational excellence pillar
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            AWS organisations
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            Tagging standards
          </a>
        </li>
      </ul>
      <h4 className="app-subnav__theme">Security</h4>
      <ul className="not-govuk-navigation-menu__list">
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            Security pillar
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            Shared responsibility model
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            Access keys
          </a>
        </li>
      </ul>
      <h4 className="app-subnav__theme">Reliability</h4>
      <ul className="not-govuk-navigation-menu__list">
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            Reliability pillar
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            AWS enterprise support
          </a>
        </li>
      </ul>
      <h4 className="app-subnav__theme">Performance efficiency</h4>
      <ul className="not-govuk-navigation-menu__list">
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            Performance efficiency pillar
          </a>
        </li>
      </ul>
      <h4 className="app-subnav__theme">Cost optimisation</h4>
      <ul className="not-govuk-navigation-menu__list">
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            Cost optimisation pillar
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            Cost optimisation standards
          </a>
        </li>
        <li className="not-govuk-navigation-menu__list__item">
          <a
            aria-current="page"
            className="not-govuk-navigation-menu__list__link active"
            href="#"
          >
            Recharging and finance guidance
          </a>
        </li>
      </ul>
    </nav>

    <main className="govuk-grid-column-three-quarters">
      <h1>Cloud guidance</h1>
      <p>
        Here, you will find bespoke Home Office cloud guidance to help you to
        use cloud services. It is aligned with the concepts of the five pillars
        and Well-Architected Framework of our cloud providers, Amazon Web
        Services (AWS) and Microsoft Azure. You can also learn more about those
        concepts here.
      </p>
      <h2>Well-Architected Framework</h2>
      <p>
        Cloud providers have developed an ideal framework to build cloud
        applications. The framework is both a set of guidelines and a mechanism
        for assessing your work against best practices. It has been designed
        based on five aligned and connected pillars. These pillars help cloud
        architects to create a secure, high-performing, resilient and efficient
        infrastructure.
      </p>
      <h2>Five Pillars</h2>
      <ul>
        <li>
          Operational excellence - Operations processes that keep a system
          running in production
        </li>
        <li>Security - Protecting applications and data from threats.</li>
        <li>
          Reliability - The ability of a system to recover from failures and
          continue to function.
        </li>
        <li>
          Performance efficiency - The ability of a system to adapt to changes
          in load.
        </li>
        <li>
          Cost optimisation - Managing costs to maximize the value delivered.
        </li>
      </ul>
      <h2>Cloud providers resources</h2>
      <p>
        Visit the links below for resources from our cloud providers. These will
        give you an overview of the five pillars and access to whitepapers that
        provide detailed information about each of the five pillars of the
        Well-Architected Framework.
      </p>
      <ul>
        <li>
          {" "}
          <a
            href="https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/"
            target="_blank"
          >
            AWS Well Architected Framework
          </a>
        </li>
        <li>
          {" "}
          <a href="https://docs.microsoft.com/en-us/azure/architecture/framework/">
            Microsoft Azure Well Architected Framework
          </a>
        </li>
      </ul>
    </main>
  </Fragment>
);

export default Page;
export const title = "Home";
