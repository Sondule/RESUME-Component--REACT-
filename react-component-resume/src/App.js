import "./App.css";
import Header from "./component/header";
import Experience from "./component/experience";
import Skill from "./component/skills";

function App() {
  return (
    <>
      <Header />
      <Experience
        exp="Experience"
        company="Software developer at Amazon"
        details="I work with amazon in transportation team. some more description Lorem
                 ipsum dolor sit amet consectetur adipisicing elit. Maxime omciis
                 consequuntur libero eaque reprehenderit qutsquam nan ab Vitae totam id
                 commodi laborum en.tm, Sint ea Odtt quasi soluta! Lorem Ipsum Sit. amet
                consectetur adtptstcmg elit. Provident tusto ut praesentium modi.
                Incidunt atque voluptatem. digmssimos offciis reprehenderit est!"
      />

      <Experience
        exp="Educator at Geekster"
        details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora cum inventore aliquam, nulla eos dignissimos ipsum voluptas id, dolores suscipit totam nostrum perferendis alias, expedita quaerat distinctio
                  aspenores! Nobis, a,hqutd. Lorem Ipsum dolor sit amet consectetur adrptsrctng e lit. F acere ipsa ab qut autem nesctunt vel consequatur non totam, temportbus exceptun voluptatem ture unpedlt ut repellendus
                  earum necessitaubus nemo eligendi, ammi debius retctendts susctpit Unde iure obcaecati dolores, numquam qutbusdam rerum facths a quam quos ad ullam consectetur retctendts deserunt stmtltque"
      />

  <Skill skill="Skills" hobby="Hobbies" />
    </>
  );
}

export default App;
 