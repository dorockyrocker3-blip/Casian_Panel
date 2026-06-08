import React, { useEffect, useState } from 'react';
import './App.css';

// import MainDiv from "./Components/bbbbbbbbb"
// import ImgDiv from "./Components/aaaaa"

// import Main from './Components/Main';
import Image from './Components/Image';

function App() {

  

  const [moneyType, setMoneyType] = useState<string>("");
  const [shoulder, setShoulder] = useState<string>("");
  const [openingPrice, setOpeningPrice] = useState<string>("");
  const [closingPrice, setClosingPrice] = useState<string>("");
  const [marja, setMarja] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const [position, setPosition] = useState<string>("");
  const [dealType, setDealType] = useState<string>("");
  const [profitType, setProfitType] = useState<string>("");
  const [nameChanel, setNameChanel] = useState<string>("");


  const [isGenerateIMG, setIsGenerateIMG] = useState<boolean>(false)




  function getCurrentDate() {
    const now_date = new Date();
    const day = String(now_date.getDate()).padStart(2, '0');        // День
    const month = String(now_date.getMonth() + 1).padStart(2, '0'); // Месяц (от 0 до 11)
    const year = now_date.getFullYear();                            // Год
    return `${day}.${month}`;
  }
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');   // Часы
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Минуты
    return `${hours}:${minutes}`;
  }





  useEffect (() => {
    setNameChanel("RADIANCE A.")
    setDate(getCurrentDate()) 
    setTime(getCurrentTime())
    setIsGenerateIMG(false)
    
  }, [])


  const generateUrl = () => {
  if (!moneyType.trim()) return alert("Введите название монеты");
  if (!shoulder.trim()) return alert("Введите плечо");
  if (!openingPrice.trim()) return alert("Введите цену открытия");
  if (!closingPrice.trim()) return alert("Введите цену закрытия");
  if (!date.trim()) return alert("Введите дату открытия");
  if (!time.trim()) return alert("Введите время");
  // if (!nameChanel.trim()) return alert("Выберите канал");
  if (!position.trim()) return alert("Выберите позицию");
  if (!dealType.trim()) return alert("Выберите тип сделки");
  if (!profitType.trim()) return alert("Выберите тип профита");
  if (profitType === "Доллары" && !marja.trim()) return alert("Введите профит в $");

  setIsGenerateIMG(true)
};



  return (
    <div className="App">
      {isGenerateIMG === false 
      ?
        // <Main 
        // position={position}
        // dealType={dealType}
        // profitType={profitType}
        // nameChanel={nameChanel}
        // date={date}
        // time={time}

        // setPosition={setPosition}
        // setDealType={setDealType}
        // setProfitType={setProfitType}
        // setMoneyType={setMoneyType} 
        // setshoulder={setshoulder} 
        // setOpeningPrice={setOpeningPrice} 
        // setClosingPrice={setClosingPrice} 
        // setNameChanel={setNameChanel}
        // setDate={setDate}
        // setTime={setTime}
        // setMarja={setMarja}

        // generateUrl={generateUrl}
        // />

      <>
        <header>
            <h1 style={{textAlign: "center"}}>Casian Panel</h1>
        </header>
        <div className="main">

            <div className="inputs-list">
            <div className="input-box">
                <p>Название Монеты</p>
                <input 
                  onChange={(e) => {setMoneyType(e.target.value)}}
                  value={moneyType}
                  placeholder="BTCUSDT" 
                  className="input" 
                  name="coinName" 
                  type="text"/>
            </div>

            <div className="input-box">
                <p>Плечо</p>
                <input 
                    onChange={(e) => {setShoulder(e.target.value)}}
                    value={shoulder}
                    placeholder="25" 
                    className="input" 
                    name="leverage" 
                    type="text" />
            </div>

            <div className="input-box">
                <p>Цена открытия</p>
                <input 
                    onChange={(e) => {setOpeningPrice(e.target.value)}}
                    value={openingPrice}
                    placeholder="0.3831" 
                    className="input" 
                    name="openPrice" 
                    type="text" />
            </div>
            <div className="input-box">
                <p>Цена закрытия</p>
                <input 
                    onChange={(e) => {setClosingPrice(e.target.value)}}
                    value={closingPrice}
                    placeholder="0.3738" 
                    className="input" 
                    name="closePrice" 
                    type="text"/>
            </div>
            <div className="input-box">
                <p>Дата</p>
                <input 
                    onChange={(e) => {setDate(e.target.value)}}
                    value={date}
                    placeholder={date}
                    className="input" 
                    name="openDate" 
                    type="text"/>
            </div>

            <div className="input-box">
                <p>Время</p>
                <input 
                    onChange={(e) => {setTime(e.target.value)}}
                    value={time}
                    placeholder={time}
                    className="input" 
                    name="openDate" 
                    type="text"/>
            </div>
            
            </div>

            {/* <div className="input-box">
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
            </div> */}


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
                      value={marja}
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

      :
        <Image
          moneyType={moneyType}
          shoulder={shoulder}
          openingPrice={openingPrice}
          closingPrice={closingPrice}
          marja={marja}
          date={date}
          time={time}

          position={position}
          dealType={dealType}
          profitType={profitType}
          nameChanel={nameChanel}

          setIsGenerateIMG={setIsGenerateIMG}
          />
      }
    </div>
  );
}

export default App;
