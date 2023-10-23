import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionBlogPart extends Schema.Component {
  collectionName: 'components_section_blog_parts';
  info: {
    displayName: 'blog-part';
    description: '';
  };
  attributes: {
    desc: Attribute.String;
    image: Attribute.Media;
    link: Attribute.String;
    date: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionComponentPart extends Schema.Component {
  collectionName: 'components_section_component_parts';
  info: {
    displayName: 'component-part';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    link: Attribute.String;
    theme_color: Attribute.String;
    laptop_image: Attribute.Media;
    mobile_image: Attribute.Media;
    layout_theme_mode: Attribute.String & Attribute.DefaultTo<'left'>;
  };
}

export interface SectionSinglePart extends Schema.Component {
  collectionName: 'components_section_single_parts';
  info: {
    displayName: 'single-part';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    desc: Attribute.Text;
    link: Attribute.String;
    image: Attribute.Media;
    link_text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.blog-part': SectionBlogPart;
      'section.component-part': SectionComponentPart;
      'section.single-part': SectionSinglePart;
    }
  }
}
