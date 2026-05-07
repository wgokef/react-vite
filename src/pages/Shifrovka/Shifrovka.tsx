import { useState } from 'react';
import './Shifrovka.scss';

const Shifrovka = () => {

const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const letter = ["а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", ",", ".", " "];
  const num = ["34", "1", "5", "219", "65", "92", "333", "69", "71", "18", "53", "41", "768", "87", "11", "9", "74", "7", "47", "93", "112", "6", "777", "61", "8", "39", "81", "101", "102", "2", "4", "3", "10", "12", "15", "509"];

  const encrypt = () => {
    let crash = inputText.split("");
    let result = "";

    for (let i = 0; i < crash.length; i++) {
      for (let j = 0; j < letter.length; j++) {
        if (crash[i] === letter[j]) {
          result = result + num[j] + " ";
          break;
        }
      }
    }

    setOutputText(result);
  };


    const decrypt = () => {
    let crash2 = inputText.split(" ");
    let result = "";

    for (let i = 0; i < crash2.length; i++) {
      for (let j = 0; j < num.length; j++) {
        if (crash2[i] == num[j]) {
          result += letter[j];
          break;
        }
      }
    }

    setOutputText(result);
  };




  return (
    <div>
       <h1>Шифрование</h1>
        <p>Введите текст для шифрования</p>

        <input placeholder="Введите текст или числа" 
          onChange={(event) => setInputText(event.target.value)} />

        <button onClick={encrypt}>Зашифровать</button>
        <button onClick={decrypt}>Расшифровать</button>

        {outputText}
    </div>
  );
};
export default Shifrovka;