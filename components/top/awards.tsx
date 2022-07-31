import { NextPage } from "next";
import { Authored } from "../common/authored";

export const Awards: NextPage = () => {
  const awardsData = [
    <>
      2022. 東京大学理学部化学科長賞 (Dept. of Chem Chair Award for the best
      B.Sc presentation). "Exploring hydrogen-ordered counter polymorph of ice
      IV by in-situ X-ray/neutron diffraction and Raman spectroscopy".
    </>,
  ];
  return (
    <section>
      <h2>Awards</h2>
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
