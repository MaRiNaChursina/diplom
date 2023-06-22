import React, { useState } from "react";
import Modal from "../components/UI/Modal/Modal";
import Carousel from "./UI/Carousel/Carousel";
import { useParams } from "react-router-dom";
import CardInsert from "./AdminP/CardAdmin/CardInsert";

function Card(props) {
  const {catalogName}=useParams()
   const {card} = props;
   const {chekCard} =props;
   const {mainCard} = props;
   const [modalActive, setModalActive] = useState();
   if (chekCard && !mainCard){
    return (
      <div className="cards">
          <img src={ card.imgCard}/>
        <h2>{card.title}</h2>
        <p>Примерная цена:  {card.price} ₽</p> 
        <button onClick={() => setModalActive(true)}>Подробнее</button>
        <Modal  active={modalActive} setActive={setModalActive}>
          <CardInsert card={card}/>
           
        </Modal>
      </div>
    );
   }
    else if(catalogName == card.catalogName || mainCard)
       return (
          <div className="cards">
              <img src={ card.imgCard}/>
            <h2>{card.title}</h2>
            <p>Примерная цена:  {card.price} ₽</p> 
            <button onClick={() => setModalActive(true)}>Подробнее</button>
            <Modal  active={modalActive} setActive={setModalActive}>
                <Carousel>
                  <div className="item item-1 model__content-img">
                    <img src={card.imgCard}/>
                  </div>
                  <div className="item item-2 model__content-img">
                    <img src={card.imgCard1}/>
                  </div>
                  <div className="item item-3 model__content-img">
                    <img src={card.imgCard}/>
                  </div>
                  <div className="item item-4 model__content-img">
                    <img src={card.imgCard}/>
                  </div>
                </Carousel>
                <div className="model__content-text">
                <h2 className="model__content-title">{card.title}</h2>
                <div className="model__content-description">
                  <p  >Примерная цена:  {card.price} ₽</p> 
                  <p  >Общая длинна изделия:  {card.length} м.</p>
                  <p  >Фасады:  {card.methods_of_opening_the_facade} </p> 
                  <p  >Петли:  {card.table_top} </p> 
                  <p  > {card.wall_panel} </p> 
                </div>
                </div>
            </Modal>
          </div>
        );}
   


export default Card;