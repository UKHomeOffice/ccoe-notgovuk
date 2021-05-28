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
      <h1>
        <span className="caption">Azure training</span>
        Azure learning pathways
      </h1>
      <p>
        There are several different learning pathways you could take. To assist
        you inform your decision we created the Azure learning pathways page.
      </p>

      <p>
        The current information is only available on our{" "}
        <a href="https://collaboration.homeoffice.gov.uk/display/CLOUD/Azure+Learning+Pathways">
          confluence page
        </a>
        . You will find a downloadable spreadsheet housing 'job description
        mapping to learning pathways'. There are also several pdfs providing the
        insight into each pathway.
      </p>

      <p>Work is currently underway to move this content to this page.</p>
    </main>
  </Fragment>
);

export default Page;
export const title = "Home";
