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
        <li className="not-govuk-navigation-menu__list__item not-govuk-navigation-menu__list__item--active">
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

    <h1>Upcoming Azure courses</h1>
    <p>
      Here, you will be able find and book online training and cloud
      certifications. The Home Office does not provide cloud training directly.
      Instead, we have professional training supplied by our cloud providers and
      training websites. Our cloud providers have engaged with us to
      provide free training for Home Office staff and contractors. So, we need
      to make sure we are taking advantage of this opportunity.
    </p>

    <div className="govuk-tabs">
      <h2 className="govuk-tabs__title">Contents</h2>
      <ul className="govuk-tabs__list" role="tablist">
        <li
          className="govuk-tabs__list-item govuk-tabs__list-item--selected"
          role="presentation"
        >
          <a
            aria-controls="past-day"
            aria-selected="true"
            className="govuk-tabs__tab"
            href="#past-day"
            id="tab_past-day"
            role="tab"
          >
            Past day
          </a>
        </li>
        <li className="govuk-tabs__list-item" role="presentation">
          <a
            aria-controls="past-week"
            aria-selected="false"
            className="govuk-tabs__tab"
            href="#past-week"
            id="tab_past-week"
            role="tab"
          >
            Past week
          </a>
        </li>
        <li className="govuk-tabs__list-item" role="presentation">
          <a
            aria-controls="past-month"
            aria-selected="false"
            className="govuk-tabs__tab"
            href="#past-month"
            id="tab_past-month"
            role="tab"
          >
            Past month
          </a>
        </li>
        <li className="govuk-tabs__list-item" role="presentation">
          <a
            aria-controls="past-year"
            aria-selected="false"
            className="govuk-tabs__tab"
            href="#past-year"
            id="tab_past-year"
            role="tab"
          >
            Past year
          </a>
        </li>
      </ul>
      <div
        aria-labelledby="tab_past-day"
        className="govuk-tabs__panel"
        id="past-day"
        role="tabpanel"
      >
        <h2>Past day</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th scope="col" className="govuk-table__header">
                Case manager
              </th>
              <th scope="col" className="govuk-table__header">
                Cases opened
              </th>
              <th scope="col" className="govuk-table__header">
                Cases closed
              </th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                David Francis
              </th>
              <td className="govuk-table__cell">3</td>
              <td className="govuk-table__cell">0</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                Paul Farmer
              </th>
              <td className="govuk-table__cell">1</td>
              <td className="govuk-table__cell">0</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                Rita Patel
              </th>
              <td className="govuk-table__cell">2</td>
              <td className="govuk-table__cell">0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        aria-labelledby="tab_past-week"
        className="govuk-tabs__panel"
        id="past-week"
        role="tabpanel"
      >
        <h2>Past week</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th scope="col" className="govuk-table__header">
                Case manager
              </th>
              <th scope="col" className="govuk-table__header">
                Cases opened
              </th>
              <th scope="col" className="govuk-table__header">
                Cases closed
              </th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                David Francis
              </th>
              <td className="govuk-table__cell">24</td>
              <td className="govuk-table__cell">18</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                Paul Farmer
              </th>
              <td className="govuk-table__cell">16</td>
              <td className="govuk-table__cell">20</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                Rita Patel
              </th>
              <td className="govuk-table__cell">24</td>
              <td className="govuk-table__cell">27</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        aria-labelledby="tab_past-month"
        className="govuk-tabs__panel"
        id="past-month"
        role="tabpanel"
      >
        <h2>Past month</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th scope="col" className="govuk-table__header">
                Case manager
              </th>
              <th scope="col" className="govuk-table__header">
                Cases opened
              </th>
              <th scope="col" className="govuk-table__header">
                Cases closed
              </th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                David Francis
              </th>
              <td className="govuk-table__cell">98</td>
              <td className="govuk-table__cell">95</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                Paul Farmer
              </th>
              <td className="govuk-table__cell">122</td>
              <td className="govuk-table__cell">131</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                Rita Patel
              </th>
              <td className="govuk-table__cell">126</td>
              <td className="govuk-table__cell">142</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        aria-labelledby="tab_past-year"
        className="govuk-tabs__panel"
        id="past-year"
        role="tabpanel"
      >
        <h2>Past year</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th scope="col" className="govuk-table__header">
                Case manager
              </th>
              <th scope="col" className="govuk-table__header">
                Cases opened
              </th>
              <th scope="col" className="govuk-table__header">
                Cases closed
              </th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                David Francis
              </th>
              <td className="govuk-table__cell">1380</td>
              <td className="govuk-table__cell">1472</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                Paul Farmer
              </th>
              <td className="govuk-table__cell">1129</td>
              <td className="govuk-table__cell">1083</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__header">
                Rita Patel
              </th>
              <td className="govuk-table__cell">1539</td>
              <td className="govuk-table__cell">1265</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Fragment>
);

export default Page;
export const title = "Home";
