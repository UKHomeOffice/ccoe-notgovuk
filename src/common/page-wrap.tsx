import { FC, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { NotGovUKPage } from '@not-govuk/components';

import './app.scss';

export const PageWrap: FC<PageProps> = ({ routes, children }) => {
  const compare = (a, b) => (
    a.href > b.href
    ? 1
    : -1
  );
  const navigation = routes
    .map(e => ({
      href: e.href,
      text: e.title
    }))
    .sort(compare);

  return (
<NotGovUKPage
      department="home-office"
      feedbackHref="/feedback"
      navigation={[
        {
          href: "/cloud-training",
          text: "Cloud training",
        },
        {
          href: "/cloud-guidance",
          text: "Cloud guidance",
        },
        {
          href: "/public-cloud-services",
          text: "Public cloud services",
        }
      ]}
      phase="alpha"
      serviceName="Cloud Centre of Excellence (CCoE)"
      title="NotGovUK"
      meta={[
        {
          href: "/accessibility",
          text: "Accessibility statement",
        },
        {
          href: "/feedback",
          text: "Feedback",
        },
        {
          href: "/sitemap",
          text: "Sitemap",
        },
        {
          href: "mailto:public.cloud@homeoffice.gov.uk",
          text: "public.cloud@homeoffice.gov.uk",
        }
      ]}
      footerContent="Built by the Public Cloud Team, Home Office, DDaT"
    >      {children}
    </NotGovUKPage>
  );
};

export default PageWrap;
