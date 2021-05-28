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
        <span className="caption">AWS training</span>
        AWS E-Learning
      </h1>
      <p className="govuk-body">
        Explore{" "}
        <a href="https://www.aws.training/Dashboard/?cta=tctopbanner">
          AWS online training
        </a>{" "}
        for all e-learning where you can complete courses at your own pace. To
        sign up to AWS E-Learning training you need to have an AWS account. You
        can use your Home Office account or create a personal account to
        complete the training and track your progress.
      </p>
    </main>
  </Fragment>
);

export default Page;
export const title = "Home";
