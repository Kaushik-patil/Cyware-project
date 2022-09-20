import { useContext, useEffect, useState } from "react";
import Ans from "./Ans";
import { Deck} from "./ContextApi";


export default function Decks() {
  // const [cards, setCards] = useState([]);
  const {cards,setCards,userarr,setUserarr} = useContext(Deck);
 
  // const [card, setCard] = useState({
  //   suit: "",
  //   rank: ""
  // });

  // var suits = ["♥", "♠", "♣", "♦"];
  // var colors = ["Red", "Black", "Black", "Red"];
  // var ranks = [
  //   "A",
  //   "2",
  //   "3",
  //   "4",
  //   "5",
  //   "6",
  //   "7",
  //   "8",
  //   "9",
  //   "10",
  //   "J",
  //   "Q",
  //   "K"
  // ];

  // useEffect(() => {
  //   var deck = [];
  //   for (let i = 0; i < suits.length; i++) {
  //     for (let j = 0; j < ranks.length; j++) {
  //       deck.push({
  //         suit: suits[i],
  //         rank: ranks[j],
  //         color: colors[i]
  //       });
  //     }
  //   }
  //   setCards(deck);
  // }, []);

const remove=()=>{
  var rem_num = Math.floor(Math.floor(Math.random() * 51));
  console.log(rem_num);
  const farr=cards.filter((cuurele,index)=>{
     return (index!=rem_num);
  })
    setCards(farr);
  setUserarr([...userarr,cards[44]]);
  console.log(userarr);

}
  return (
    <>
      {


cards.map((item,index)=>{
  return(
    <li key={index}>{item.suit}</li>
  )
})
// userarr.map((res)=>{
//   return(
//     <li>{res.suit}</li>
//   )
// })
    

     }


      <button onClick={remove}>remove</button>
    
     
    

    </>
  );
}