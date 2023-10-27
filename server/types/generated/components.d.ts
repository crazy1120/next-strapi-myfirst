import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsBlogComponent extends Schema.Component {
  collectionName: 'components_components_blog_components';
  info: {
    displayName: 'blog-component';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
    date: Attribute.String;
    link: Attribute.String;
  };
}

export interface ComponentsUnitComponent extends Schema.Component {
  collectionName: 'components_components_unit_components';
  info: {
    displayName: 'unit-component';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    desc: Attribute.Text;
    link: Attribute.String;
    link_text: Attribute.String;
    mobile_image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.blog-component': ComponentsBlogComponent;
      'components.unit-component': ComponentsUnitComponent;
    }
  }
}
