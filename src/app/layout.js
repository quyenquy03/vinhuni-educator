import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.scss";
import ReduxProvider from "@/components/ReduxProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import HeaderComponent from "@/components/HeaderComponent";
import { StyledComponentRegistry } from "@/libs/AntRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vinhuni Educator",
  description: "Generated by Vinhuni Educator",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <StyledComponentRegistry>
            {/* <HeaderComponent collapsed={collapsed} onCollapsed={setCollapsed} /> */}
            {/* <HeaderComponent /> */}
            {children}
          </StyledComponentRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
