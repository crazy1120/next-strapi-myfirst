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

export interface SectionCategoryGroupPart extends Schema.Component {
  collectionName: 'components_section_category_group_parts';
  info: {
    displayName: 'Group-part';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'section.rich-text-block-part', true>;
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

export interface SectionExplorePart extends Schema.Component {
  collectionName: 'components_section_explore_parts';
  info: {
    displayName: 'Explore-part';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'section.single-part', true> &
      Attribute.Required;
  };
}

export interface SectionImageDescriptionPart extends Schema.Component {
  collectionName: 'components_section_image_description_parts';
  info: {
    displayName: 'story-item-part';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    textLeft: Attribute.Boolean & Attribute.DefaultTo<true>;
    desc: Attribute.RichText & Attribute.Required;
  };
}

export interface SectionRichTextBlockPart extends Schema.Component {
  collectionName: 'components_section_rich_text_block_parts';
  info: {
    displayName: 'rich-text-block-part';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.RichText;
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
      'section.category-group-part': SectionCategoryGroupPart;
      'section.component-part': SectionComponentPart;
      'section.explore-part': SectionExplorePart;
      'section.image-description-part': SectionImageDescriptionPart;
      'section.rich-text-block-part': SectionRichTextBlockPart;
      'section.single-part': SectionSinglePart;
    }
  }
}
