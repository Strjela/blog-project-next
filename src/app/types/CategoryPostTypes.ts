import { FeatureImg } from "./CardTypes";

export interface CategoryCardProps {
  featureImgUrl: string;
  title: string;
  slug: string;
}

export interface CategoryBlogAttributes {
  title: string;
  slug: string;
  FeatureImg: FeatureImg;
}

export interface CategoryBlogItem {
  id: number;
  attributes: CategoryBlogAttributes;
}
