import { FC, Fragment, createElement as h } from "react";
import { PageProps } from "@not-govuk/app-composer";
import { A, Tabs, Table } from "@not-govuk/components";

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
      <br/>

      <Tabs
        items={[
          {
            label: "April",
            id: "april",
            content: (
              <Fragment>
                <h2 className="govuk-heading-l">April</h2>
                <p>Here's some text</p>
                <Table
                  keys={["course", "date", "starttime"]}
                  headings={{
                    starttime: "Start time",
                    date: "Date(s)",
                    course: "Course",
                  }}
                  data={[
                    {
                      starttime: "09:00",
                      date: "01/04/21",
                      course: <A href="#">Course name one</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "02/04/21",
                      course: <A href="#">Course name two</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "03/04/21",
                      course: <A href="#">Course name three</A>,
                    },
                  ]}
                />{" "}
              </Fragment>
            ),
          },
          {
            label: "May",
            id: "may",
            content: (
              <Fragment>
                <h2 className="govuk-heading-l">May</h2>
                <p>Here's some text</p>
                <Table
                  keys={["course", "date", "starttime"]}
                  headings={{
                    starttime: "Start time",
                    date: "Date(s)",
                    course: "Course",
                  }}
                  data={[
                    {
                      starttime: "09:00",
                      date: "01/05/21",
                      course: <A href="#">Course name one</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "02/05/21",
                      course: <A href="#">Course name two</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "03/05/21",
                      course: <A href="#">Course name three</A>,
                    },
                  ]}
                />{" "}
              </Fragment>
            ),
          },
          {
            label: "June",
            id: "june",
            content: (
              <Fragment>
                <h2 className="govuk-heading-l">June</h2>
                <p>Here's some text</p>
                <Table
                  keys={["course", "date", "starttime"]}
                  headings={{
                    starttime: "Start time",
                    date: "Date(s)",
                    course: "Course",
                  }}
                  data={[
                    {
                      starttime: "09:00",
                      date: "01/06/21",
                      course: <A href="#">Course name one</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "02/06/21",
                      course: <A href="#">Course name two</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "03/06/21",
                      course: <A href="#">Course name three</A>,
                    },
                  ]}
                />{" "}
              </Fragment>
            ),
          },
          {
            label: "July",
            id: "july",
            content: (
              <Fragment>
                <h2 className="govuk-heading-l">July</h2>
                <p>Here's some text</p>
                <Table
                  keys={["course", "date", "starttime"]}
                  headings={{
                    starttime: "Start time",
                    date: "Date(s)",
                    course: "Course",
                  }}
                  data={[
                    {
                      starttime: "09:00",
                      date: "01/07/21",
                      course: <A href="#">Course name one</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "02/07/21",
                      course: <A href="#">Course name two</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "03/07/21",
                      course: <A href="#">Course name three</A>,
                    },
                  ]}
                />{" "}
              </Fragment>
            ),
          },
          {
            label: "August",
            id: "august",
            content: (
              <Fragment>
                <h2 className="govuk-heading-l">August</h2>
                <p>Here's some text</p>
                <Table
                  keys={["course", "date", "starttime"]}
                  headings={{
                    starttime: "Start time",
                    date: "Date(s)",
                    course: "Course",
                  }}
                  data={[
                    {
                      starttime: "09:00",
                      date: "01/08/21",
                      course: <A href="#">Course name one</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "02/08/21",
                      course: <A href="#">Course name two</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "03/08/21",
                      course: <A href="#">Course name three</A>,
                    },
                  ]}
                />{" "}
              </Fragment>
            ),
          },
          {
            label: "September",
            id: "september",
            content: (
              <Fragment>
                <h2 className="govuk-heading-l">September</h2>
                <p>Here's some text</p>
                <Table
                  keys={["course", "date", "starttime"]}
                  headings={{
                    starttime: "Start time",
                    date: "Date(s)",
                    course: "Course",
                  }}
                  data={[
                    {
                      starttime: "09:00",
                      date: "01/09/21",
                      course: <A href="#">Course name one</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "02/09/21",
                      course: <A href="#">Course name two</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "03/09/21",
                      course: <A href="#">Course name three</A>,
                    },
                  ]}
                />{" "}
              </Fragment>
            ),
          },
          {
            label: "October",
            id: "october",
            content: (
              <Fragment>
                <h2 className="govuk-heading-l">October</h2>
                <p>Here's some text</p>
                <Table
                  keys={["course", "date", "starttime"]}
                  headings={{
                    starttime: "Start time",
                    date: "Date(s)",
                    course: "Course",
                  }}
                  data={[
                    {
                      starttime: "09:00",
                      date: "01/10/21",
                      course: <A href="#">Course name one</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "02/10/21",
                      course: <A href="#">Course name two</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "03/10/21",
                      course: <A href="#">Course name three</A>,
                    },
                  ]}
                />{" "}
              </Fragment>
            ),
          },
          {
            label: "November",
            id: "november",
            content: (
              <Fragment>
                <h2 className="govuk-heading-l">November</h2>
                <p>Here's some text</p>
                <Table
                  keys={["course", "date", "starttime"]}
                  headings={{
                    starttime: "Start time",
                    date: "Date(s)",
                    course: "Course",
                  }}
                  data={[
                    {
                      starttime: "09:00",
                      date: "01/11/21",
                      course: <A href="#">Course name one</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "02/11/21",
                      course: <A href="#">Course name two</A>,
                    },
                    {
                      starttime: "09:00",
                      date: "03/11/21",
                      course: <A href="#">Course name three</A>,
                    },
                  ]}
                />{" "}
              </Fragment>
            ),
          },
        ]}
      />
      
      <h2>How to book training</h2>
      <p>
        If you or your team is interested in any of the upcoming training courses
        or cloud game days, please contact:{" "}
        <a href="mailto:public.cloud@homeoffice.gov.uk">
          public.cloud@homeoffice.gov.uk
        </a>{" "}
      </p>
    </main>
  </Fragment>
);
export default Page;
export const title = "Home";