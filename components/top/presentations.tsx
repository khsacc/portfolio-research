import { NextPage } from "next";
import { Authored } from "../common/authored";

export const Presentations: NextPage = () => {
  const presentationData = [
    <>
      <Authored name="小林 大輝"></Authored>.
      "氷IVの低温での結晶構造解析を目指して". H<sub>2</sub>
      Oを科学する. (6th December 2021). オンライン. [in Japanese]
    </>,
    <>
      <Authored name="小林 大輝"></Authored>, 小松 一生, 鍵 裕之.
      "高圧X線回折実験による高密度アモルファス氷からの氷IVの結晶化その場観察".
      日本結晶学会年会（オンライン）. 2021年11月19日. [in Japanese]
    </>,
  ];
  return (
    <section>
      <h2>Oral presentations</h2>
      <article>
        <ol reversed>
          {presentationData.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ol>
      </article>
    </section>
  );
};
