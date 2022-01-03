import { NextPage } from "next";
import { Authored } from "../common/authored";

export const Presentations: NextPage = () => {
  return (
    <section>
      <h2>Oral presentations</h2>

      <article>
        <h3>2021 (B4 student)</h3>
        <ul>
          {[
            // <>
            //   <Authored name="Hiroki Kobayashi"></Authored>.
            //   "氷IVの低温での結晶構造解析を目指して (Towards a crystal structure
            //   analysis of Ice IV at low temperature)". H<sub>2</sub>
            //   Oを科学する. (6th December 2021). Virtual Meeting via Zoom. [in
            //   Japanese]
            // </>,
            <>
              <Authored name="Hiroki Kobayashi"></Authored>, Kazuki Komatsu, and
              Hiroyuki Kagi.
              "高圧X線回折実験による高密度アモルファス氷からの氷IVの結晶化その場観察".
              日本結晶学会年会（オンライン）. 2021年11月19日.
            </>,
          ].map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};
