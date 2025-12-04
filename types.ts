import { ReactNode } from "react";

export enum FooterType {
  BASIC = 'basic',
  NAVIGATION = 'navigation',
  CONTACT = 'contact',
  CORPORATE = 'corporate',
  MEGA = 'mega',
  SOCIAL = 'social',
  NEWSLETTER = 'newsletter',
}

export interface FooterDefinition {
  id: FooterType;
  title: string;
  description: string;
  component: ReactNode;
  icon: ReactNode;
}