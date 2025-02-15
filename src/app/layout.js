"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/sass/global.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store/store.ts";
import Wrapper from '../shared/Wrapper/Wrapper.ts'

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      </Wrapper>
    </Provider>
  );
}
