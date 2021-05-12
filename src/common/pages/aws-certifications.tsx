import { FC, Fragment, createElement as h } from "react";
import { PageProps } from "@not-govuk/app-composer";

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
        <li className="not-govuk-navigation-menu__list__item not-govuk-navigation-menu__list__item--active">
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
        AWS certifications
      </h1>
      <p>
        The Home Office Public Cloud Team (PCT) works closely with AWS to
        provide certification and exam bookings. The links below show a summary
        of the different certification levels. For more information visit{" "}
        <a href="https://aws.amazon.com/certification/?nc2=sb_ce_co">
          AWS Certification
        </a>
        .
      </p>

      <details className="govuk-details">
        <summary className="govuk-details__summary">
          AWS Cloud Practitioner
        </summary>
        <div className="govuk-details__text">
          <p>
            This fundamental-level course is intended for individuals who seek
            an overall understanding of the AWS Cloud, independent of specific
            technical roles. It provides a detailed overview of cloud concepts,
            AWS services, security, architecture, pricing, and support.
          </p>
          <p>Format: Multiple Choice</p>
          <p>Time: 90 mins</p>
          <p>Exam Cost: Free</p>
          <p>
            Recommended length of experience: Six months of fundamental AWS
            Cloud and industry knowledge or 6 hours of online courses
          </p>
          <p>
            How to book the exam: Please email:{" "}
            <a href="mailto:public.cloud@homeoffice.gov.uk">
              public.cloud@homeoffice.gov.uk
            </a>
          </p>
        </div>
      </details>

      <details className="govuk-details">
        <summary className="govuk-details__summary">
          AWS Associate Certifications
        </summary>
        <div className="govuk-details__text">
          <p>
            This is the second level of certifications and it is aimed at
            professionals who might be new to technical roles or have around one
            years' worth of experience.
          </p>
          <p>
            There are currently three different certifications at the associate
            level:
          </p>
          <ul>
            <li>
              The AWS Certified Solutions Architect Associate certification is
              intended for individuals who perform a solutions architect role
              and have one or more years of hands-on experience designing
              available, cost-efficient, fault-tolerant, and scalable
              distributed systems on AWS.
            </li>
            <li>
              The AWS Certified SysOps Administrator Associate certification is
              intended for systems administrators in a systems operations role
              with at least one year of experience in deployment, management,
              and operations on AWS.
            </li>
            <li>
              The AWS Certified Developer Associate certification is intended
              for individuals who perform a development role and have one or
              more years of hands-on experience developing and maintaining an
              AWS-based application.
            </li>
          </ul>
          <p>Format: Multiple Choice</p>
          <p>Time: 130 mins</p>
          <p>Exam Cost: Free</p>
          <p>
            Recommended length of experience: One or more years of hands-on
            experience
          </p>
          <p>
            How to book the exam: Please email:{" "}
            <a href="mailto:public.cloud@homeoffice.gov.uk">
              public.cloud@homeoffice.gov.uk
            </a>
          </p>
          <p>Cloud Academy courses:</p>
          <ul>
            <li>
              <a
                href="https://cloudacademy.com/learning-paths/aws-solutions-architect-associate-saa-c02-certification-preparation-954/"
                target="_blank"
              >
                Solutions Architect
              </a>
            </li>
            <li>
              <a
                href="https://cloudacademy.com/learning-paths/sysops-administrator-associate-certification-preparation-for-aws-2018-295/"
                target="_blank"
              >
                SysOps Administrator
              </a>
            </li>
            <li>
              <a
                href="https://cloudacademy.com/learning-paths/developer-associate-certification-preparation-for-aws-june-2018-241/"
                target="_blank"
              >
                Developer
              </a>
            </li>
          </ul>
        </div>
      </details>

      <details className="govuk-details">
        <summary className="govuk-details__summary">
          AWS Professional Certifications
        </summary>
        <div className="govuk-details__text">
          <p>
            This is the third level of certification and it is aimed at current
            professionals with good experience of AWS.
          </p>
          <p>
            There are currently two separate certifications at the professional
            level and both are aimed at different job roles. See below:
          </p>
          <ul>
            <li>
              The AWS Certified Solutions Architect Professional certification
              is intended for individuals who perform a solutions architect role
              with two or more years of hands-on experience managing and
              operating systems on AWS.
            </li>
            <li>
              The AWS Certified DevOps Engineer Professional certification is
              intended for individuals who perform a DevOps engineer role with
              two or more years of experience provisioning, operating, and
              managing AWS environments.
            </li>
          </ul>

          <p>Format: Multiple Choice</p>
          <p>Time: 180 mins</p>
          <p>Exam Cost: Free</p>
          <p>
            Recommended length of experience: Two or more years of hands-on
            experience
          </p>
          <p>
            How to book the exam: Please email:{" "}
            <a href="mailto:public.cloud@homeoffice.gov.uk">
              public.cloud@homeoffice.gov.uk
            </a>
          </p>

          <p>Cloud Academy courses:</p>
          <ul>
            <li>
              <a
                href="https://cloudacademy.com/learning-paths/solutions-architect-professional-certification-preparation-for-aws-2019-377/"
                target="_blank"
              >
                Solutions Architect
              </a>
            </li>
            <li>
              <a
                href="https://cloudacademy.com/learning-paths/devops-engineer-professional-certification-preparation-for-aws-2019-427/"
                target="_blank"
              >
                DevOps Engineer Professional
              </a>
            </li>
          </ul>
        </div>
      </details>

      <details className="govuk-details">
        <summary className="govuk-details__summary">
          AWS Specialiality Certifications
        </summary>
        <div className="govuk-details__text">
          <p>
            This is an advanced level of certification for users that have a
            high level of specialist technical AWS cloud experience.
          </p>
          <p>
            There are currently five different certifications within the
            specialist level:
          </p>
          <ul>
            <li>
              The AWS Certified Advanced Networking Specialty certification is
              intended for individuals who perform complex networking tasks.
            </li>
            <li>
              The AWS Certified Big Data Specialty certification is intended for
              individuals who perform complex Big Data analyses with at least
              two years of experience using AWS technology. A new version of the
              AWS Certified Big Data – Specialty exam will be available in April
              2020 with a new name, AWS Certified Data Analytics – Specialty.
            </li>
            <li>
              The AWS Certified Security Specialty certification is intended for
              individuals who perform a security role with at least two years of
              hands-on experience securing AWS workloads.
            </li>
            <li>
              The AWS Certified Machine Learning Specialty certification is
              intended for individuals who perform a development or data science
              role. It validates a candidate's ability to design, implement,
              deploy, and maintain machine learning (ML) solutions for given
              business problems.
            </li>
            <li>
              The AWS Certified Alexa Skill Builder Specialty certification is
              intended for individuals who perform a role as an Alexa skill
              builder. It validates a candidate’s ability to build, test, and
              publish Amazon Alexa skills.
            </li>
          </ul>

          <p>Format: Multiple Choice</p>
          <p>Time: 170 mins</p>
          <p>Exam Cost: Free</p>
          <p>
            Recommended length of experience: Several years of AWS experience
            with hands on experience in the specialist area
          </p>
          <p>
            How to book the exam: Please email:{" "}
            <a href="mailto:public.cloud@homeoffice.gov.uk">
              public.cloud@homeoffice.gov.uk
            </a>
          </p>

          <p>Cloud Academy courses:</p>
          <ul>
            <li>
              <a
                href="https://cloudacademy.com/learning-paths/security-specialty-certification-preparation-for-aws-201/"
                target="_blank"
              >
                Security Specialist
              </a>
            </li>
            <li>
              <a
                href="https://cloudacademy.com/learning-paths/aws-machine-learning-specialty-certification-preparation-453/"
                target="_blank"
              >
                Machine Learning
              </a>
            </li>
            <li>
              <a
                href="https://eur02.safelinks.protection.outlook.com/GetUrlReputation"
                target="_blank"
              >
                Advanced Networking
              </a>
            </li>
          </ul>
        </div>
      </details>
    </main>
  </Fragment>
);

export default Page;
export const title = "Home";
