import { FC, Fragment, createElement as h } from "react";
import { PageProps } from "@not-govuk/app-composer";
import { NavigationMenu } from "@not-govuk/components";

const Page: FC<PageProps> = (props) => (
  <Fragment>
    <nav className="not-govuk-navigation-menu govuk-grid-column-one-quarter">
      <h4 className="app-subnav__theme">AWS training</h4>
      <NavigationMenu
        items={[
          {
            href: "aws-e-learning",
            text: "AWS E-Learning",
          },
          {
            href: "upcoming-aws-courses",
            text: "Upcoming AWS courses",
          },
          {
            href: "aws-certifications",
            text: "AWS certifications",
          },
        ]}
      />
      <h4 className="app-subnav__theme">Azure training</h4>
      <NavigationMenu
        items={[
          {
            href: "azure-learning-pathways",
            text: "Azure learning pathways",
          },
          {
            href: "azure-e-learning",
            text: "Azure E-Learning",
          },
          {
            href: "upcoming-azure-courses",
            text: "Upcoming Azure courses",
          },
          {
            href: "azure-certifications",
            text: "Azure certifications",
          },
        ]}
      />
    </nav>

    <main className="govuk-grid-column-three-quarters">
      <h1>Cloud training</h1>
      <p>
        Here, you will be able find and book online training and cloud
        certifications. The Home Office does not provide cloud training
        directly. Instead, we have professional training supplied by our cloud
        providers and training websites. Our cloud providers have engaged with
        us to provide free training for Home Office staff and contractors. So,
        we need to make sure we are taking advantage of this opportunity.
      </p>

      <h2>Types of training available</h2>
      <h3>Cloud providers training </h3>
      <p>
        Our cloud providers offer free e-learning which is available to
        everybody. There is also instructor-led training, which is initially
        prioritised for Home Office employees, but is also available to
        contractors. For more information on training visit the AWS and Azure
        training pages.
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
    </main>
  </Fragment>
);

export default Page;
export const title = "Home";
