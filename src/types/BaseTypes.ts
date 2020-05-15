export interface IBookSearchResponseType {
  kind: string;
  totalItems: number;
  items: IBookItemType[];
}

export interface IBookItemType {
  id: string;
  volumeInfo: IVolumeInfoType;
}

export interface IVolumeInfoType {
  title: string;
  authors?: string[];
  publisher: string;
  publishedDate: Date;
  description: string;
  industryIdentifiers: IIndustryIdentifiersType[];
  pageCount: number;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  imageLinks: IImageLinksType;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface IIndustryIdentifiersType {
  type: string;
  identifier: string;
}

export interface IImageLinksType {
  smallThumbnail: string;
  thumbnail: string;
}

export interface IBookType {
  title: string;
  author: string;
}
