export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    stock: number;
    rating: number;
    discountPercentage: number;
    thumbnail: string;
    images: string[];
    availabilityStatus: string;
    shippingInformation: string;
    minimumOrderQuantity: number;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    sku: string;
    tags: string[];
    returnPolicy: string;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    reviews: {
      reviewerName: string;
      reviewerEmail: string;
      rating: number;
      comment: string;
      date: string;
    }[];
  }
  