import React, {useRef} from 'react';
import cl from "./Image.module.css";

import icon from "../images/icon.jpg"
import QRcode from "../images/QRcode.png"

import RedBack from "../images/mainBackgroundRed.png"
import GreenBack from "../images/mainBackgroundGreen.png"
import html2canvas from 'html2canvas';

type ImageProps = {
    moneyType: string;
    position: string;
    shoulder: string;
    openingPrice: string;
    closingPrice: string;
    marja: string;
    date: string;
    time: string;
    dealType: string;
    profitType: string;
    nameChanel: string;
    setIsGenerateIMG: React.Dispatch<React.SetStateAction<boolean>>;
};


const Image: React.FC<ImageProps> = ({
    moneyType,
    position,
    shoulder,
    openingPrice,
    closingPrice,
    marja,
    date,
    time,
    dealType,
    profitType,
    nameChanel,
    setIsGenerateIMG
}) => {

    const isProcent: boolean = profitType === "Проценты" ? true : false;

    const screen = useRef<HTMLDivElement>(null!)

    function calcPnL(entryPrice: number, exitPrice: number, leverage: number, isShort = false) {
        let diff;
        if (isShort) {
            diff = entryPrice - exitPrice; // для шорта
        } else {
            diff = exitPrice - entryPrice; // для лонга
        }
        const result = (diff / entryPrice) * 100 * leverage;
        return parseFloat(result.toFixed(2));
    }

    var isRed:boolean = true;
    var profitPercent = 7
    if(isProcent){
        const isShort: boolean = position === "Шорт" ? true : false
         profitPercent = calcPnL(Number(openingPrice), Number(closingPrice), Number(shoulder), isShort )
        isRed = profitPercent < 0 ? true : false
        // alert(profitPercent)

    }
    else
    {
        isRed = Number(marja) < 0 ? true : false
    }

    const myRedColor = "#ff0088"
    const myGreenColor = "#00ff88"



    const handleScreen = async () => {
    if (!screen.current) return;

    try {
      const canvas = await html2canvas(screen.current, { scale: 2, useCORS: true });

      // Преобразуем canvas в Blob и создаем ссылку для скачивания
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "screenshot.png"; // имя файла
        link.click();
        URL.revokeObjectURL(url); // освобождаем память
      }, "image/png");
    } catch (error) {
      console.error("Ошибка при создании скриншота:", error);
    }
  };



    return (
        <div className={cl.main}>
            <div 
                style={{backgroundImage: `url(${isRed === true ? RedBack : GreenBack})`}}
                className={cl.img}
                ref={screen}
            >
                <div className={cl.img_chd}>
                    {/* Логотип */}
                    <img 
                        className={cl.imgBX}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlwAAADACAMAAADm+U2TAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAvyDfYICfQBDvcKDPMFCQr4+9UXxeAAAM7klEQVR42uzcC46bQBBF0er/Jw2Bt//FxkkUjSbjAVPQGFvvbMCydI1RUY1cWE6zcQCaCUmIjmPngg/OC9ExcsBvzIsONzh8Fa0Q7eUL7nGsi/YaAbAu6sEWfKdlIdrB4XuzEOkFLOHEi/QsFhkh0ooAL13Uh8OyKEQ6CSuKEOkErBmESMVgTRUilYY1P4VIxQG8o6c/GBe9DsZF3TSsCUKk8gNrRiFSqVjDnS5SyljRhKjTFJXnNEht5L8iddM4n6deEm54ROMdoJfSzFyTKPzkHOJNoDPjrWxlOEB9D+jPeNkmN7b1FnAGV+22uia29Q5wDud3L6Q6Hs14NehK34b9gU9K4GHrl4PzzHljXg7/mMq0XhD60w+p7BhuamJZD8nBez+mZOWZsh2SvwlZcKbCMVVP9vOQcRzkVHascXIF/1jBobjp90wW/zOxJjnBUGMr+PBgXKzrdVjc1fl9xamagt+eHxfr6scqH5ToZR8Lbq4SFxeyurFY0ubh4LKqwc2l4io8j9+JVTwp0crJALhcXHCcLPRhFQ96dWwowCXjwiRLzKJZvshmkZe78jD6EONk/ohzGM+ZD+XB1xCj+SvGUBc+eDCLxu1xAS5a2ScZAFeNC6N+rGs2/2DD1yt6ja3gjmLmsWNhg59bwV1tCuOw+YVSXhPXza68RgNcOa6SnxVXHueGZW1OcryhmoIVxYR0SlzAlETHO+DacSE8JS5bDR7i4iBHSnPBo0wdTogLMFa2Sw64fFwlnx5XDgYbNC8HGULBNm4e+scFRKu413qBuBBOjisZxQqalf2S0a5XquLqmJedgNeIq+QT48qhaDcc98nBQW0aFXH1+4ah4FXiQjgtrlmZ1v68asEuzivi6rMGlRpwdFwubjMZh8e0DnH1EK0oJYfdiiKuDg978y/y7gW5bRAIwPDCIl5GD+/9D9tOMy2eZmIehs3i/AeQo/orkiUk7kTjcSlozh83pIrcGrgoROhJKxoRA67y4LUjCcFVezFkWwQXkfXj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" 
                        alt="BingX" />

                    {/* Реализованная П/У */}
                    <div className={cl.realized}>{dealType} П/У</div>

                    {/* Инфо о сделке */}
                    <div className={cl.tradeInfo}>
                        <span className={cl.moneyType}>{moneyType}</span>
                        <span 
                            style={{ color: isRed ? myRedColor : myGreenColor }}
                            className={cl.position}>{position}</span>
                        <span className={cl.shoulder}>{shoulder}X</span>
                    </div>

                    {/* Процент прибыли/убытка */}
                    <div
                        style={{ color: isRed ? myRedColor : myGreenColor }}
                        className={cl.profitPercent}>
                        {isProcent
                            ? `${isRed ? "" : "+"}${profitPercent}%`
                            : `${isRed ? "" : "+"}${marja}$`
                        }
                    </div>

                    {/* Цены */}
                    <div className={cl.price}>
                        <div>Цена закрытия &nbsp;&nbsp;&nbsp;<span>{closingPrice}</span></div>
                        <br/>
                        <div>Ср. цена открытия &nbsp;&nbsp;&nbsp;<span>{openingPrice}</span></div>
                    </div>

                    <div className={cl.footer}>
                        {/* Имя и время + иконка */}
                        <div className={cl.footerLeft}>
                            <img 
                                className={cl.icon} 
                                src={icon}
                                alt="Logo" />
                            <div>
                                <div className={cl.name}>{nameChanel}</div>
                                <div className={cl.datetime}>{date} {time}</div>
                            </div>
                        </div>

                        {/* Реферальный код + QR */}
                        <div className={cl.footerRight}>
                            <div style={{marginRight: "20px"}}>
                                <div className={cl.ref}>Реферальный код</div>
                                <div className={cl.ref}>QY1N8K</div>
                            </div>
                            <img 
                                className={cl.qr} 
                                src={QRcode}
                                alt="QR code" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={cl.divButtons}>
                <button
                    className={cl.ExitButton}
                    onClick={() => handleScreen()}
                >
                    Скачать скриншот
                </button>

                <button
                    className={cl.ExitButton}
                    onClick={() => setIsGenerateIMG(false)}
                >
                    ВЕРНУТЬСЯ
                </button>
            </div>
        </div>
    );
}

export default Image;
