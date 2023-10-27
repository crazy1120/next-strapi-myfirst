declare type PageMetaData = {
  page_title: string;
  page_desc: string;
};

declare type SimpleComponent = {
  title: string;
  image: Image;
  mobile_image?: Image;
};

declare type DescComponent = SimpleComponent & {
  desc: string;
};

declare type LinkDescComponent = DescComponent & {
  link: string;
  link_text: string;
};

declare type BlogComponent = SimpleComponent & {
  date: string;
  link: string;
};
