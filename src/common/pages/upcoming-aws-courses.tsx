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
        <li className="not-govuk-navigation-menu__list__item not-govuk-navigation-menu__list__item--active">
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

    <h1>
      <span className="caption">AWS training</span>
      Upcoming AWS courses
    </h1>
    <p>
      The Home Office Public Cloud Team (PCT) works closely with AWS to provide
      training. The calendar below shows the upcoming training. These training
      events are instructor-led by AWS specialists. We can also organise{" "}
      <a href="https://aws.amazon.com/gameday/">AWS cloud game days</a> as and
      when required.
    </p>
    <span className="govuk-caption-m">
      The following listed courses have been provided by AWS. Please click on
      the course name for more information. This calendar will update as and
      when more courses are made available by AWS. Please check back
      periodically for updates.
    </span>

    <div className="govuk-tabs" data-module="govuk-tabs">
      <h2 className="govuk-tabs__title">Contents</h2>
      <ul className="govuk-tabs__list">
        <li className="govuk-tabs__list-item govuk-tabs__list-item--selected">
          <a className="govuk-tabs__tab" href="#tab1">
            APR 2021
          </a>
        </li>
        <li className="govuk-tabs__list-item">
          <a className="govuk-tabs__tab" href="#tab2">
            MAY 2021
          </a>
        </li>
        <li className="govuk-tabs__list-item">
          <a className="govuk-tabs__tab" href="#tab3">
            JUN 2021
          </a>
        </li>
      </ul>
      <div className="govuk-tabs__panel" id="tab1">
        <h2 className="govuk-heading-l">April</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th scope="col" className="govuk-table__header">
                Course
              </th>
              <th scope="col" className="govuk-table__header">
                Date(s)
              </th>
              <th scope="col" className="govuk-table__header">
                Start time
              </th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">
                <a href="https://www.aws.training/Details/InstructorLedTraining?id=70472">
                  AWS Security Essentials
                </a>
              </td>
              <td className="govuk-table__cell">23/04/21</td>
              <td className="govuk-table__cell">09:00</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">
                <a href="https://www.aws.training/Details/InstructorLedTraining?id=67553">
                  Developing on AWS
                </a>
              </td>
              <td className="govuk-table__cell">27/04/21 - 29/04/21</td>
              <td className="govuk-table__cell">09:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="govuk-tabs__panel govuk-tabs__panel--hidden" id="tab2">
        <h2 className="govuk-heading-l">May</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th scope="col" className="govuk-table__header">
                Course
              </th>
              <th scope="col" className="govuk-table__header">
                Date(s)
              </th>
              <th scope="col" className="govuk-table__header">
                Start time
              </th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">
                <a href="https://www.aws.training/Details/InstructorLedTraining?id=70473">
                  Security Engineering on AWS
                </a>
              </td>
              <td className="govuk-table__cell">18/05/21 - 20/05/21</td>
              <td className="govuk-table__cell">09:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="govuk-tabs__panel govuk-tabs__panel--hidden" id="tab3">
        <h2 className="govuk-heading-l">June</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th scope="col" className="govuk-table__header">
                Course
              </th>
              <th scope="col" className="govuk-table__header">
                Date(s)
              </th>
              <th scope="col" className="govuk-table__header">
                Start time
              </th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">
                <a href="https://www.aws.training/Details/InstructorLedTraining?id=70474">
                  Developing on AWS
                </a>
              </td>
              <td className="govuk-table__cell">08/06/21 - 10/06/21</td>
              <td className="govuk-table__cell">09:00</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">
                <a href="https://www.aws.training/Details/InstructorLedTraining?id=70475">
                  Big Data on AWS
                </a>
              </td>
              <td className="govuk-table__cell">22/06/21 - 24/06/21</td>
              <td className="govuk-table__cell">09:00</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">
                <a href="https://www.aws.training/Details/InstructorLedTraining?id=70476">
                  Architecting on AWS
                </a>
              </td>
              <td className="govuk-table__cell">22/06/21 - 24/06/21</td>
              <td className="govuk-table__cell">09:00</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">
                <a href="https://www.aws.training/Details/InstructorLedTraining?id=70477">
                  The Machine Learning Pipeline on AWS
                </a>
              </td>
              <td className="govuk-table__cell">28/06/21 - 01/07/21</td>
              <td className="govuk-table__cell">09:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h2>How to book training</h2>
    <p>
      If you or your team is interested in any of the upcoming training courses
      or cloud game days, please contact:{" "}
      <a href="mailto:public.cloud@homeoffice.gov.uk">
        public.cloud@homeoffice.gov.uk
      </a>{" "}
    </p>
  </Fragment>
);

export default Page;
export const title = "Home";
