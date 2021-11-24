import { NextPage } from "next";
import { NextSeo } from "next-seo";

export const SEO: NextPage<{ BASE_PATH: string }> = ({ BASE_PATH }) => {
  return (
    <NextSeo
      defaultTitle="Hiroki Kobayashi Research Portfolio"
      description="Hiroki Kobayashi, working on high-pressure science, especially ice polymorphs at Geochemical Research Centre, the University of Tokyo."
      additionalMetaTags={[
        {
          name: "og:image",
          content: "https://hiroki-k.vercel.app/meta/ogimage.jpg",
        },
        {
          name: "og:title",
          content: "Hiroki Kobayashi Research Portfolio",
        },
        {
          name: "twitter:title",
          content: "Hiroki Kobayashi Research Portfolio",
        },
        {
          name: "msapplication-square70x70logo",
          content: `${BASE_PATH}/meta/site-tile-70x70.png`,
        },
        {
          name: "msapplication-square150x150logo",
          content: `${BASE_PATH}/meta/site-tile-150x150.png`,
        },
        {
          name: "msapplication-wide310x150logo",
          content: `${BASE_PATH}/meta/site-tile-310x150.png`,
        },
        {
          name: "msapplication-square310x310logo",
          content: `${BASE_PATH}/meta/site-tile-310x310.png`,
        },
      ]}
      additionalLinkTags={[
        {
          rel: "shortcut icon",
          type: "image/vnd.microsoft.icon",
          href: `${BASE_PATH}/meta/favicon.ico`,
        },
        {
          rel: "icon",
          type: "image/vnd.microsoft.icon",
          href: `${BASE_PATH}/meta/favicon.ico`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: `${BASE_PATH}/meta/apple-touch-icon-57x57.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: `${BASE_PATH}/meta/apple-touch-icon-60x60.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: `${BASE_PATH}/meta/apple-touch-icon-72x72.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: `${BASE_PATH}/meta/apple-touch-icon-76x76.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: `${BASE_PATH}/meta/apple-touch-icon-114x114.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: `${BASE_PATH}/meta/apple-touch-icon-120x120.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: `${BASE_PATH}/meta/apple-touch-icon-144x144.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: `${BASE_PATH}/meta/apple-touch-icon-152x152.png`,
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: `${BASE_PATH}/meta/apple-touch-icon-180x180.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "36x36",
          href: `${BASE_PATH}/meta/android-chrome-36x36.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: `${BASE_PATH}/meta/android-chrome-48x48.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "72x72",
          href: `${BASE_PATH}/meta/android-chrome-72x72.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: `${BASE_PATH}/meta/android-chrome-96x96.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "128x128",
          href: `${BASE_PATH}/meta/android-chrome-128x128.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "144x144",
          href: `${BASE_PATH}/meta/android-chrome-144x144.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "152x152",
          href: `${BASE_PATH}/meta/android-chrome-152x152.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: `${BASE_PATH}/meta/android-chrome-192x192.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "256x256",
          href: `${BASE_PATH}/meta/android-chrome-256x256.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "384x384",
          href: `${BASE_PATH}/meta/android-chrome-384x384.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: `${BASE_PATH}/meta/android-chrome-512x512.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "36x36",
          href: `${BASE_PATH}/meta/icon-36x36.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: `${BASE_PATH}/meta/icon-48x48.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "72x72",
          href: `${BASE_PATH}/meta/icon-72x72.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: `${BASE_PATH}/meta/icon-96x96.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "128x128",
          href: `${BASE_PATH}/meta/icon-128x128.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "144x144",
          href: `${BASE_PATH}/meta/icon-144x144.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "152x152",
          href: `${BASE_PATH}/meta/icon-152x152.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "160x160",
          href: `${BASE_PATH}/meta/icon-160x160.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: `${BASE_PATH}/meta/icon-192x192.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "196x196",
          href: `${BASE_PATH}/meta/icon-196x196.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "256x256",
          href: `${BASE_PATH}/meta/icon-256x256.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "384x384",
          href: `${BASE_PATH}/meta/icon-384x384.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: `${BASE_PATH}/meta/icon-512x512.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${BASE_PATH}/meta/icon-16x16.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "24x24",
          href: `${BASE_PATH}/meta/icon-24x24.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${BASE_PATH}/meta/icon-32x32.png`,
        },
      ]}
      twitter={{
        cardType: "summary_large_image",
      }}
    />
  );
};
