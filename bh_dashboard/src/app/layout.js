"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/sass/global.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store/store.js";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          {children}</body>
      </html>
    </Provider>
  );
}
