import { FC, Fragment, createElement as h } from "react";
import { PageProps } from "@not-govuk/app-composer";

const Page: FC<PageProps> = (props) => (
  <Fragment>
    <h1>Supporting Home Office cloud users</h1>
    <p>
      This system will help cloud users find guidance, book cloud training and
      use Public Cloud Team (PCT) services.
    </p>
    <h2>Public Cloud Team</h2>
    <p>
      This service has been created by the Public Cloud Team (PCT) and it is
      replacing the Public Cloud confluence area.
    </p>
    <h2>About us</h2>
    <p>
      The Public Cloud Team are an agile team based in Manchester and Croydon.
      Our roles in the Home Office include:
    </p>
    <ul>
      <li>Governing the use of cloud across the department</li>
      <li>
        Enabling teams to access the cloud and ensure that cloud accounts are
        secured and monitored
      </li>
      <li>
        Provide support and guidance to make better use of public cloud services
        from our cliud providers, AWS and Azure
      </li>
    </ul>

    <p>
      This is a live service, and we will be updating and improving the service
      regularly. For any other queries or support you need that hasn't been
      included on this service please contact:{" "}
      <a href="mailto:public.cloud@homeoffice.gov.uk">
        public.cloud@homeoffice.gov.uk
      </a>
    </p>
  </Fragment>
);

export default Page;
export const title = "Home";
