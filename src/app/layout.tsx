import EmotionRRegistry from "@/lib/emotion";
import { inter } from "./fonts";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <EmotionRRegistry>{children}</EmotionRRegistry>
      </body>
    </html>
  );
}
