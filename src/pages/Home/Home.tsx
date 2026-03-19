import { useState } from 'react';
import './Home.scss';

const Home = () => {
    const [part, setPart] = useState('');
    const [total, setTotal] = useState(''); 
    const [result, setResult] = useState('');
    const [num, setNum] = useState('');
    const [n, setN] = useState('');
    const [k, setK] = useState('');
    const [n2, setN2] = useState('');
    const [k2, setK2] = useState('');


    const calc = () => {
        setResult((+part / +total).toFixed(2));
    };

    const factor = (f: number) => {
        let factorial = 1;
        
        for (let i = 1; i <= f; i++) {
            factorial = factorial * i;
        }
        return factorial
    }


    const fact = () => {
        const factorial=factor(+num);
        setResult(factorial.toString());
    }


    const comb = () => {
    const up = factor(+n)
    const down = factor((+n) - (+k)) * factor(+k)
    const resh = up / down;
    setResult(resh.toString());
    }

    const place = () => {
    const up = factor(+n2)
    const down = factor((+n2) - (+k2))
    const resh2 = up / down;
    setResult(resh2.toString());
    }



    return <div className="home-page">
        <div className="container">
            <h1>Главная страница</h1>
            <p>Здесь будет контент главной страницы</p>
            
            <input 
            placeholder="total" 
            onChange={(event) => setTotal(event.target.value)} 
            />
            <input 
            placeholder="part" 
            onChange={(event) => setPart(event.target.value)} 
            />

                <button onClick={calc}>Посчитать</button>

            <input 
            placeholder="num" 
            onChange={(event) => setNum(event.target.value)} 
            />
            <button onClick={fact}>Посчитать факториал</button>


            <input 
            placeholder="n" 
            onChange={(event) => setN(event.target.value)} 
            />
            <input 
            placeholder="k" 
            onChange={(event) => setK(event.target.value)} 
            />
            <button onClick={comb}>Сочетание</button>


            <input 
            placeholder="n2" 
            onChange={(event) => setN2(event.target.value)} 
            />
            <input 
            placeholder="k2" 
            onChange={(event) => setK2(event.target.value)} 
            />
            <button onClick={place}>Размещение</button>

            {result}
            
        </div>
    </div>
};

export default Home;