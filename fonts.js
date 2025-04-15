import { Inter, Lusitana, Nunito_Sans, Work_Sans } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
});

export const workSans = Work_Sans({
    subsets: ["latin"],
});

export const lusitana = Lusitana({
    weight: ["400", "700"],
    subsets: ["latin"],
});
