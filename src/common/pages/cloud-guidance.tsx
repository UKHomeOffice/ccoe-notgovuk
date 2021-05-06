import { FC, Fragment, createElement as h } from "react";
import { PageProps } from "@not-govuk/app-composer";

const Page: FC<PageProps> = (props) => (
  <Fragment>
    <h1>Cloud guidance</h1>
    <p>
      Here, you will find bespoke Home Office cloud guidance to help you to use
      cloud services. It is aligned with the concepts of the five pillars and
      Well-Architected Framework of our cloud providers, Amazon Web Services
      (AWS) and Microsoft Azure. You can also learn more about those concepts
      here.
    </p>
    <h2>Well-Architected Framework</h2>
    <p>
      Cloud providers have developed an ideal framework to build cloud
      applications. The framework is both a set of guidelines and a mechanism
      for assessing your work against best practices. It has been designed based
      on five aligned and connected pillars. These pillars help cloud architects
      to create a secure, high-performing, resilient and efficient
      infrastructure.
    </p>
    <h2>Five Pillars</h2>
    <ul>
      <li>
        Operational excellence - Operations processes that keep a system running
        in production
      </li>
      <li>Security - Protecting applications and data from threats.</li>
      <li>
        Reliability - The ability of a system to recover from failures and
        continue to function.
      </li>
      <li>
        Performance efficiency - The ability of a system to adapt to changes in
        load.
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
  </Fragment>
);

export default Page;
export const title = "Home";
