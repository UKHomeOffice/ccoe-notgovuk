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

    <main className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">Azure training</span>
        Upcoming Azure courses
      </h1>
      <p>
        We are excited to share the upcoming instructor-led courses open for
        registration through the Enterprise Skills Initiative (ESI). These are
        all accessible via the Learner Experience Portal (LxP), where you can
        also view details of Fundamentals and Azure Role Based courses and their
        associated certifications.
      </p>

      <p>
        Role-based training is designed to build the skills required to perform
        industry job-roles on Microsoft platforms and technologies, focusing on
        solutions rather than products. These skills range from managing
        on-premises, hybrid, or cloud infrastructure, to innovating with the
        best-in class applications, to supporting apps and infrastructure with
        data and analytics—all with the proper security considerations. The ESI
        program includes recommended training for all Microsoft Azure Role-based
        and Specialty certifications as well as migration to Azure training.
      </p>

      <p>
        Fundamentals training is designed to provide foundational understanding
        of Microsoft technologies. A springboard for deeper role-based learning
        paths, Fundamentals training is intended for learners with nontechnical
        backgrounds that require more experience with cloud-based solutions and
        services.
      </p>

      <span className="govuk-caption-m">
        To view, and book, any Azure courses you will need to log into Microsoft{" "}
        <a href="https://esi.microsoft.com/">
          Enterprise Skills Initiative (ESI)
        </a>
        . Please complete sign in with your work email address.
      </span>
      <br />

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

      <p>
        Microsoft have engaged with us to provide this free training for Home
        Office staff. Please take advantage of it. Speak with your team if you
        see any training courses of interest. Help increase our organisations
        awareness of this available resource.
      </p>
    </main>
  </Fragment>
);

export default Page;
export const title = "Home";
