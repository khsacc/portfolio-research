import { create } from "jss";
import Head from "next/head";
import Image from "next/image";
import { createUseStyles } from "react-jss";
import { Authored } from "../components/common/authored";
import { Presentations } from "../components/top/presentations";
import { MyTheme } from "../styles/myTheme";

const useStyles = createUseStyles((theme: MyTheme) => ({
  main: {
    maxWidth: 1000,
    margin: "0 auto",
  },
  self: {
    width: "fit-content",
    margin: "0 auto",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <article>
        <div className={classes.self}>
          <Image
            src="/img/self.jpg"
            width={600}
            height={450}
            objectFit="contain"
          />
        </div>
        <h1>Hiroki Kobayashi</h1>
        <p>
          B4 student at{" "}
          <a
            href="https://www.eqchem.s.u-tokyo.ac.jp/laboratories/kagi/Homepage/index.html"
            target="_blank"
            rel="external nofollow noreferrer "
          >
            Geochemical Research Centre (Kagi Lab.)
          </a>
          , School of Science, the University of Tokyo.
        </p>
        <p>
          E-mail:{" "}
          <a href="mailto:hiroki@eqchem.s.u-tokyo.ac.jp">
            hiroki@eqchem.s.u-tokyo.ac.jp
          </a>
        </p>
        <p>
          113-0033 東京都文京区本郷7-3-1 理学部化学西館7階 2702室
          <br />
          Room 2702, 7F, Chemistry West Building, School of Science, 7-3-1,
          Hongo, Bunkyo-ku, Tokyo, 113-0033, Japan.
        </p>

        <section>
          <h2>Research interest</h2>
          <ul>
            <li>High-pressure science</li>
            <li>Ice polymorphs</li>
            <li>Diffraction techniques</li>
            <li>Raman spectroscopy</li>
          </ul>
        </section>
        <Presentations />
        <section>
          <h2>Developed App</h2>
          <ul>
            <li>
              <a href="https://pressure-calculator.vercel.app/" target="_blank">
                Pressure Calculator
              </a>
              <br />
              Web-based application (Next.js), which enables us to estimate
              pressure based on ruby fluorescence line shift and to record the
              data to export P-T path graphically.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
