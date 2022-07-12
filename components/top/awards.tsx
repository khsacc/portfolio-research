import { NextPage } from "next";
import { Authored } from "../common/authored";

export const Awards: NextPage = () => {
  const awardsData = [
    <>
      東京大学理学部化学科長賞. "Exploring hydrogen-ordered counter polymorph of
      ice IV by in-situ X-ray/neutron diffraction and Raman spectroscopy". 25
      March 2022.
    </>,
  ];
  return (
    <section>
      <h2>Oral presentations</h2>
      <article>
        <ol reversed>
          {awardsData.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ol>
      </article>
    </section>
  );
};
