import { questions } from "@/utils/helpers/PsiTest.help";
import { useState } from "react";

const PsiTest = () => {
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(0);

  const addPlus = () => {
    setPlus(plus + 1);
  };

  return (
    <div>
      {questions.map((item, index) => (
        <p>
          {index + 1} {item}
        </p>
      ))}
      <button onClick={addPlus}>да</button>
      <button> нет</button>
      plus:{plus}
      minus:{minus}
    </div>
  );
};

export default PsiTest;
