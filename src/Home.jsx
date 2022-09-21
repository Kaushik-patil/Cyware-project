import { useContext, useEffect, useState } from "react";
import { Deck } from "./ContextApi";
import './App.css'
import QuitModal from './QuitModal'

import Header from "./Header";


export default function Home() {
  const { gamequit, setGamequit } = useContext(Deck);
  const { score, setScore } = useContext(Deck);

  const { cards, setCards } = useContext(Deck);

  const [userarr, setUserarr] = useState([]);

  var newarr = [];


  var a = cards.slice(0, 12);
  var b = cards.slice(0, 8);
  var c = cards.slice(0, 13);
  var d = cards.slice(0, 14);
  var e = cards.slice(0, 5);


 useEffect(()=>{
 setScore(0);
  setUserarr([]);
 },[gamequit])


  const draw1 = () => {
    var randomnum = Math.floor(Math.floor(Math.random() * 12));
    const results = a.filter(obj => {
      return obj.id != randomnum;
    });
    a = results;

    var obj1 = a[randomnum];
    newarr.push(obj1)
    setUserarr([...userarr, obj1]);
    console.log(obj1);

  }

  const show = () => {

  if(userarr.length<=0){
    alert("you can only draw 5 cards in a round");
  }

    let black = 0;
    let red = 0;
    for (let i = 0; i < userarr.length; i++) {
      let obj1 = userarr[i].color;
      if (obj1 === "Black") {
        black++;
      }else if( obj1=="Red"){
        red++;
      }
    }
    console.log(black);
    console.log(red);


    if (black >= red) {
      let ans = black - red;
      setScore(ans);
    } else {
      let ans = red - black;
      setScore(ans);
    }

  }




  const draw2 = () => {
    var randomnum = Math.floor(Math.floor(Math.random() * 12));
    const results = a.filter(obj => {
      return obj.id != randomnum;
    });
    a = results;

    var obj1 = a[randomnum];
    newarr.push(obj1)
    setUserarr([...userarr, obj1]);

    console.log(obj1);

  }



  const draw3 = () => {
    var randomnum = Math.floor(Math.floor(Math.random() * 13));
    const results = c.filter(obj => {
      return obj.id != randomnum;
    });
    c = results;

    var obj1 = c[randomnum];
    newarr.push(obj1)
    setUserarr([...userarr, obj1]);



  }



  const draw4 = () => {
    var randomnum = Math.floor(Math.floor(Math.random() * 10));
    const results = d.filter(obj => {
      return obj.id != randomnum;
    });
    d = results;

    var obj1 = d[randomnum];
    newarr.push(obj1)
    setUserarr([...userarr, obj1]);


  }




  const draw5 = () => {
    var randomnum = Math.floor(Math.floor(Math.random() * 5));
    const results = d.filter(obj => {
      return obj.id != randomnum;
    });
    d = results;
    var obj1 = d[randomnum];
    newarr.push(obj1)
    setUserarr([...userarr, obj1]);


  }

  return (
    <>
      {gamequit ? <QuitModal /> :

        <div className="main">
          <Header />


          <div className="sections">
            <div className="section1">


              <button onClick={draw1}>draw</button>
            </div>
            <div className="section1">


              <button onClick={draw2}>draw</button>
            </div>
            <div className="section1">


              <button onClick={draw3} >draw</button>
            </div>
            <div className="section1">


              <button onClick={draw4}>draw</button>
            </div>
            <div className="section1">


              <button onClick={draw5}>draw</button>
            </div>

            <div className="score">
              <p id="score-text">score:-{score}</p>
              <button onClick={show}>show</button>
            </div>
          </div>


          <div className="ans">



            {

              userarr.map((item, index) => {
                return (
                  <div key={index}>
                    <div className='card'>
                      <div className='logo'>{item.suit}</div>
                      <div className='logo2'>{item.rank}</div>
                      <div className='logo1'>{item.suit}</div>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>
      }
    </>
  );
}