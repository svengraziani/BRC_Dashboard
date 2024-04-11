"use client";

import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/sass/global.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store/store.js";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
