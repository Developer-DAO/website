interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    twitterHandle?: string;
    lang?: string;
  }
  
  interface ImageMeta {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }
  
  export const createMetadata = ({
    title = "Developer DAO",
    description = "BUIDL WEB3 WITH __ FRENS. Developer DAO has brought together some of the most talented people on the web to build web3.",
    image = "/RRSS_D_D_Image.png",
    url = "https://developerdao.com",
    type = "website",
    twitterHandle = "@developerdao",
    lang = "en",
  }: SEOProps): any => {
    const imageMeta: ImageMeta = {
      url: image,
      // You might define default width and height if you want
      width: 800,
      height: 600,
    };
  
    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        url: url,
        siteName: title,
        images: [imageMeta],
        locale: lang + "_US", // Assuming you might want to append "_US"
        type: type,
      },
      twitter: {
        card: 'app',  // You can modify this as per your requirement
        title: title,
        description: description,
        // siteId: '1467726470533754880',  // Modify as per your requirement
        creator: twitterHandle,
        // creatorId: '1467726470533754880', // Modify as per your requirement
        images: imageMeta,
/*         app: {
          name: 'twitter_app',  // Modify as per your requirement
          id: {
            iphone: 'twitter_app://iphone',
            ipad: 'twitter_app://ipad',
            googleplay: 'twitter_app://googleplay',
          },
          url: {
            iphone: 'https://iphone_url',  // Modify as per your requirement
            ipad: 'https://ipad_url',  // Modify as per your requirement
          },
        }, */
      },
    };
  };
  