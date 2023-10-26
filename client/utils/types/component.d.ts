declare type HeroesAndBlocks = {
  id: number;
  title: string;
  desc?: string;
  link?: string;
  link_text?: string;
  image: Image;
};

declare type HeroAndBlock ={
  id: number,
  title: string,
  image: Image
}

declare type BlogComponent = {
  id: number;
  title: string;
  desc: string;
  link: string;
  date: string;
  image: Image;
};
