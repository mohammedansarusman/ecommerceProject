import { z } from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type CartItemsType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email().min(1,"Email required"),
  phone: z
  .string()
  .min(7,"Phone number must be between 7 and 10 digits")
  .max(10,"Phone number must be between 7 and 10 digits")
  .regex(/^\d+$/,"Phone number must be numbers"),
  address: z.string().min(1,"Address required"),
  city: z.string().min(3,"City required"),
})  

export type ShippingFormInput = z.infer<typeof shippingFormSchema>;
