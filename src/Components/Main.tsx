import React, { useEffect, useState } from 'react';

type MainProps = {
  position: string;
  dealType: string;
  profitType: string;
  nameChanel: string;
  date: string;
  time: string;

  setPosition: React.Dispatch<React.SetStateAction<string>>;
  setDealType: React.Dispatch<React.SetStateAction<string>>;
  setProfitType: React.Dispatch<React.SetStateAction<string>>;
  setMoneyType: React.Dispatch<React.SetStateAction<string>>;
  setShoulderType: React.Dispatch<React.SetStateAction<string>>;
  setOpeningPrice: React.Dispatch<React.SetStateAction<string>>;
  setClosingPrice: React.Dispatch<React.SetStateAction<string>>;
  setNameChanel: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  setMarja: React.Dispatch<React.SetStateAction<string>>;

  generateUrl: () => void; 
};

const Main: React.FC<MainProps> = ({
  position,
  dealType,
  profitType,
  nameChanel,
  date,
  time,

  setPosition,
  setDealType,
  setProfitType,
  setMoneyType,
  setShoulderType,
  setOpeningPrice,
  setClosingPrice,
  setNameChanel,
  setDate,
  setTime,
  setMarja,

  generateUrl
}) => {



    return(
    <>
        <header>
            <h1 style={{textAlign: "center"}}>Dream Team Panel</h1>
        </header>
        <div className="main">

            <div className="inputs-list">
            <div className="input-box">
                <p>Название Монеты</p>
                <input 
                onChange={(e) => {setMoneyType(e.target.value)}}
                    placeholder="BTCUSDT" 
                    className="input" 
                    name="coinName" 
                    type="text"/>
            </div>

            <div className="input-box">
                <p>Плечо</p>
                <input 
                    onChange={(e) => {setShoulderType(e.target.value)}}
                    placeholder="25" 
                    className="input" 
                    name="leverage" 
                    type="text" />
            </div>

            <div className="input-box">
                <p>Цена открытия</p>
                <input 
                    onChange={(e) => {setOpeningPrice(e.target.value)}}
                    placeholder="0.3831" 
                    className="input" 
                    name="openPrice" 
                    type="text" />
            </div>
            <div className="input-box">
                <p>Цена закрытия</p>
                <input 
                    onChange={(e) => {setClosingPrice(e.target.value)}}
                    placeholder="0.3738" 
                    className="input" 
                    name="closePrice" 
                    type="text"/>
            </div>
            <div className="input-box">
                <p>Дата</p>
                <input 
                    onChange={(e) => {setDate(e.target.value)}}
                    placeholder={date}
                    value={date}
                    className="input" 
                    name="openDate" 
                    type="text"/>
            </div>

            <div className="input-box">
                <p>Время</p>
                <input 
                    onChange={(e) => {setTime(e.target.value)}}
                    placeholder={time}
                    value={time}
                    className="input" 
                    name="openDate" 
                    type="text"/>
            </div>
            
            </div>

            <div className="input-box">
                <p>Канал:</p>
                <button 
                className={`button ${nameChanel == "Пятка" ? "chanel-selected selected" : ""}`} 
                onClick={ () => setNameChanel('Пятка')}>
                    Пятка</button>

                <button 
                className={`button ${nameChanel == "AAAAA" ? "chanel-selected selected" : ""}`} 
                onClick={ () => setNameChanel('AAAAA')}>
                    AAAAA</button>

                <button 
                className={`button ${nameChanel == "BBBBB" ? "chanel-selected selected" : ""}`} 
                onClick={ () => setNameChanel('BBBBB')}>
                    BBBBB</button>

                <button 
                className={`button ${nameChanel == "VVVVVVV" ? "chanel-selected selected" : ""}`} 
                onClick={ () => setNameChanel('VVVVVVV')}>
                    VVVVVVV</button>
            </div>


            <div className="type-list">
            <div className="input-box">
                <p>Выберите позицию:</p>
                <button 
                    className={`button ${position == "Лонг" ? "long-selected selected" : ""}`} 
                    onClick={ () => setPosition('Лонг')}>
                    Лонг
                    </button>

                <button 
                    className={`button ${position == "Шорт" ? "short-selected selected" : ""}`} 
                    onClick={ () => setPosition('Шорт')}>
                    Шорт
                    </button>
            </div>

            <div className="input-box">
                <p>Тип сделки:</p>
                <button 
                    className={`button ${dealType == "Реализованная" ? "realized-selected selected" : ""}`} 
                    onClick={ () => setDealType('Реализованная')}>
                    Реализ
                    </button>

                <button 
                    className={`button ${dealType == "Нереализованная" ? "unrealized-selected selected" : ""}`} 
                    onClick={ () => setDealType('Нереализованная')}>
                    Нереализ
                    </button>
            </div>

            <div className="input-box">
                <p>Тип профита:</p>
                <button 
                    className={`button ${profitType == "Проценты" ? "percent-selected selected" : ""}`} 
                    onClick={ () => setProfitType('Проценты')}>
                    Проценты</button>

                <button 
                    className={`button ${profitType == "Доллары" ? "dollar-selected selected" : ""}`} 
                    onClick={ () => setProfitType('Доллары')}>
                    Доллары</button>
            </div>


            <div className={`button ${profitType == "Доллары" ? "input-box" : "displayNone"}`} >
                <p>Профит $</p>
                <input 
                    onChange={(e) => {setMarja(e.target.value)}}
                    placeholder="2555.3" 
                    className="input" 
                    name="marja" 
                    type="text" />
            </div>
            </div>
        </div>



        <br/><br/><br/><br/><br/><br/>
        <div style={{display: "flex", justifyContent: "center"}}>
            <button className="button-generate" onClick={ () => generateUrl()}>
                <div className="text">
                    Генерировать
                </div>
            </button>
        </div>
    </>
    )
}

export default Main;