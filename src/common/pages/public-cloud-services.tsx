import { FC, Fragment, createElement as h } from "react";
import { PageProps } from "@not-govuk/app-composer";

const Page: FC<PageProps> = (props) => (
  <Fragment>
    <h1>Public cloud services</h1>
    <p>
      Here, you will find Public Cloud services. Our most used service is the
      Identity and Access Management (IAM) requests where users can
      create/modify/delete cloud accounts through our{" "}
      <a href="https://collaboration.homeoffice.gov.uk/jira/secure/RapidBoard.jspa?rapidView=1756">
        ticketing system on Jira
      </a>
      .
    </p>
    <hr/>
  
  </Fragment>
);

export default Page;
export const title = "Home";
