import { create } from "jss";
import Head from "next/head";
import Image from "next/image";
import { createUseStyles } from "react-jss";
import { Authored } from "../components/common/authored";
import { MyTheme } from "../styles/myTheme";

const useStyles = createUseStyles((theme: MyTheme) => ({
  main: {
    maxWidth: 1000,
    margin: "0 auto",
  },
  diaryComponent: {
    marginBottom: 25,
    padding: "0 0 0 10px",
    borderLeft: `1px solid ${theme.mainColor}`,
  },
}));

export default function Diary() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <article>
        <h1>日記</h1>
        <p>
          なにをやっているかわかってもらえるように、しかしなにをやっているかわからないような塩梅で書く。
        </p>

        <div className={classes.diaryComponent}>
          <h3>2022-07-26 部品作製</h3>
          <p>
            自分で描いた図面を初めて他人にお渡しする機会がありました。といってもたいしたものではないですが、理学系研究科の工作室にお願いしてちょっとした治具を作っていただきます。いずれ自分で工作技術も身につけたいものです。
          </p>
        </div>
        <div className={classes.diaryComponent}>
          <h3>2022-07-15 三島先生</h3>
          <p>
            研究室のセミナーにゲストスピーカーとして三島修先生が来てくださいました。HDAの発見や精密な融点測定に基づくLLCP仮説の実験的検証など、ここ数十年の氷の研究を引っ張ってこられた先生です。勉強になることばかりでしたが、特にこれまで聞いたことのないような流れるようなイントロダクションに感動し、内容以前にプレゼンテーションの技法について考えさせられました。もうほぼ引退しておられるのかなと思っていましたが、新しい研究の話をたくさん聞かせていただき、圧巻の1時間でした。今回のお話がどんな論文に仕上がるのか、楽しみです。貴重なセミナー、ありがとうございました。
          </p>
        </div>
        <div className={classes.diaryComponent}>
          <h3>2022-07-13 3D CAD</h3>
          <p>
            そろそろ図面を描かないといけないので、Autodesk
            Inventorをインストールしました。しばらくはチュートリアルを細々とこなしていくことになります。Adobe系のソフトに慣れてしまっているので、「選択ツール」がないのがちょっと不便に感じます。慣れの問題でしょう。
          </p>
        </div>

        <div className={classes.diaryComponent}>
          <h3>2022-06-28 KEK-PF</h3>
          <p>
            今回はPDの高橋さんの実験の手伝いのためにBL-18Cへ。最終日は26時間労働してしまい、さすがに疲れました（翌日、ほぼ記憶がない）。ビームタイムは限られているので、多少の無理は仕方のないことです。高橋さんに仮眠をとってもらい、その間にキュレット径300
            µmのDACへのサンプリングに初挑戦。私の実験ではそこまで圧力を必要としないので、普段は600
            µmや800
            µmのものを使っており、相当難しく感じました。何回か練習して慣れればできるようになりそうですが、しばらくそういう機会もなさそうです。
          </p>
        </div>

        <div className={classes.diaryComponent}>
          <h3>2022-06-17 ルビー蛍光法</h3>
          <p>
            1
            GPa以下くらいの圧力領域で精密に圧力を議論しようとすると、圧力の信頼性を上げるためにルビー蛍光測定にかかるいろいろなファクターを丁寧に考えなければいけなくなります。今日はレーザー照射そのものによる加熱の影響を調べました。丁寧に実験をしていきたいものです。
          </p>
        </div>
        <div className={classes.diaryComponent}>
          <h3>2022-06-13 訪問者</h3>
          <p>
            研究室の卒業生である山根崚さん（東北大金研助教）が研究室に測定のためにやってきた。ラボの在籍期間は被っていないが氷チームの尊敬できる先輩です。熱測定を手伝いました。
          </p>
        </div>
        <div className={classes.diaryComponent}>
          <h3>2022-05-26 J-PARC MLF</h3>
          <p>
            PFから帰った翌日ですが、J-PARCに出発。今回もPLANETでの高圧実験です。氷チームでは東海村に行くとラ・ジネストラというピザ屋で本格ナポリピザをいただくのが外せない行事になっています。今回は到着した夜に早速訪問。
          </p>
        </div>
        <div className={classes.diaryComponent}>
          <h3>2022-05-22 KEK-PF</h3>
          <p>
            BL-18CにてDACを使った低温高圧その場XRD実験。幸運が重なり予期していなかったデータが取れました。ここまで結果に感動するのはめずらしい。これは遠くないうち（といっても1年くらいは温めそう）に論文にできそうです。
          </p>
        </div>

        <div className={classes.diaryComponent}>
          <h3>2022-05-04 低温DAC</h3>
          <p>
            普段はX線回折系にDACを置いたまま（オンライン）長作動の対物レンズを使ってルビー蛍光やラマン散乱スペクトルを取得しています。しかし微弱な信号は見えにくく、もっとN/Aのよいレンズだとどうなるのだろうか、ということが気になっていました。そこで、液体窒素中にDACを入れ、実験室のラマン測定用顕微鏡での測定をテスト。結果、よくはなるけどそこまでではない。
          </p>
        </div>
        <div className={classes.diaryComponent}>
          <h3>2022-04-30 高温DACでのX線回折</h3>
          <p>
            春から新しく研究室にきたJSPS-PDの高橋さん（from
            東北大）の高温高圧実験用DAC（HDAC-V）でX線回折パターンが取得できるかを実験室でテスト。開口角は狭いが取れるは取れそうです。これまで窓材として使っていたフッ化カルシウムがX線吸収材になっており、なかなか回折パターンが取れないという罠に引っかかる。昼はカレーを食べに行った。東北大では土日に研究室に来ようものならコンビニしかご飯がなかったそうで。
          </p>
        </div>
        <div className={classes.diaryComponent}>
          <h3>2022-04-11 J-PARC MLF</h3>
          <p>
            PLANETビームラインにて氷関係の低温高圧中性子回折実験。面白いデータが得られた。定式化まであと一歩かも。
          </p>
        </div>

        <div className={classes.diaryComponent}>
          <h3>2022-03-14 卒論発表会</h3>
          <p>
            卒論発表会。話していたらかなり楽しくなってしまいあっという間に終了。質問が長かったので（という言い訳）質疑応答が時間をすこしはみ出してしまい、終わってから指導教員の鍵先生に「ベルが聞こえてないのかと思った」と言われました。聞こえていました。すみません。
          </p>
        </div>
        <div className={classes.diaryComponent}>
          <h3>2022-02-28 卒論提出→J-PARC MLF</h3>
          <p>
            卒論を事務に無事提出し、その足で特急に乗ってJ-PARCへ。今回はSENJUビームラインにて先輩の単結晶回折実験を見学させてもらう。粉末とはかなり勝手が違うのでいろいろ勉強になります。百聞は一見に如かず。
          </p>
        </div>

        <div className={classes.diaryComponent}>
          <h3>2022-02-18 KEK-PF 卒論執筆合宿のはずが</h3>
          <p>
            BL-18Cでの低温高圧実験。卒論提出まであと10日ということで、自分の実験はそこそこに他の人の実験を手伝いながら卒論を書くはずだったのに、気づけばたくさん実験してしまった。あまり良さげな結果ではなかったけれど、今後の方針が立てられたのでよし。そんなことより卒論の進捗がピンチを迎えています。締め切りギリギリになるのは指導教員を見習ってのこと、ということにしておく（鍵さんも締め切りが迫らないとやる気が出ないタイプのようです）。
          </p>
        </div>
        <div className={classes.diaryComponent}>
          <h3>2022-01-27 J-PARC MLF</h3>
          <p>
            PLANETビームラインにて初めての中性子実験。データがあまりに美しく（中性子回折というと基本ノイジーな回折パターンをイメージしていた）感激。想像よりはるかに短い時間できれいなパターンが取得できています。水戸システム（Komatsu
            et al., 2013, High Pressure Research）すごい。
          </p>
        </div>
      </article>
    </main>
  );
}
