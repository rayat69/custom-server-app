import "../../styles/globals.css";
import { AppProps } from "next/app";
import Link from "next/link";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="main">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
