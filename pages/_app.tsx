import "../styles/globals.css";
import { useEffect, useState } from "react";

export default function RootLayout(props: any) {
  const { Component, pageProps } = props;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <> <Component {...pageProps} /></>;
}
