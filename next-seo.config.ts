import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://url.ie',
        siteName: 'siteName',
    },
    twitter: {
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
    },
};

export default config;
