export interface FeatureImg {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface BlogAttributes {
  title: string;
  slug: string;
  FeatureImg: FeatureImg;
  description: string;
  category: string;
}

export interface BlogItem {
  id: number;
  attributes: BlogAttributes;
}

export interface BlogCardProps {
  title: string;
  slug: string;
  category: string;
  featureImgUrl: string;
  description: string;
}
