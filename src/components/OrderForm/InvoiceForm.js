import React, { useState } from "react";

const InvoiceForm = () => {
    const [value, setValue]  = useState ("");
    const [checked, setChecked]  = useState (0);
    const [checked1, setChecked1]  = useState (null);
    const [value2, setValue2]  = useState (null);
    const [value10, setValue10] = useState (null);
    const [value3, setValue3]  = useState (null); 
    const [value12, setValue12]  = useState (null); 
    const [value7, setValue7]  = useState (null);
    const [value9, setValue9]  = useState (null);
    const [value11, setValue11]  = useState (null);
    const[raschet, setRaschet] =useState (null);
    const [checked5, setChecked5]  = useState (false);
    const [value6, setValue6]  = useState (null);
    const [value13, setValue13]  = useState (null);
    const [send, setSend] = useState(false);
    const item1 = [{
        "name":"Прямая", 
    "imgName":"./imges/order/1.jpg"},
    {"name":"Угловая", 
    "imgName":"./imges/order/3.jpg"},
    {"name":"П-образная", 
    "imgName":"./imges/order/2.jpg"},
    {"name":"с островом", 
    "imgName":"./imges/order/4.jpg"}];
    const [value4, setValue4]  = useState (1);
    const [value5, setValue5]  = useState (null); 
    const [checked3, setChecked3]  = useState (false);
    const [checked4, setChecked4]  = useState (false);
    const [value8, setValue8]  = useState (null);
    const[answer, setAnswer] =useState (false);
    // let li = <></>;
    function Antri (e) {
        let zn="";
        setValue2(e.target.value);
        if (e.target.value === "1")
        zn= "Прямые";
        else zn="С антрисолями";
        console.log(zn);
    }

    const Raschet =() =>{
        let n=1;
        if(value && value2 && value3 && value4 && value5 && value7 
            && value8 && value9 && value10 && value11 && value12)
        {
            setChecked5(true); 
                    
            if (value3 === "170" || value3 === "300") {
                n=8* (+value)* (+value3)
            } else if (value3)n=500* (+value);
            
            if (value12 === "1"){
                switch(value5){
                    case "2333":n=n+2000* (+value);
                    break; 
                    case "3000":n=n+2667* (+value);
                    break; 
                    case "4334":n=n+3334* (+value);
                    break; 
                    case "4667": n=n+4000* (+value);
                    break;  

                }
            }
            
            n=n+(+value)*(1.8*1.3* (+value10)+ (+value5)+
                (+value7)*16+2.5* (+value11));
                console.log((+value)*(1.8*1.3* (+value10)+ (+value5)+
                (+value7)*16+2.5* (+value11)));
            if(value2 === "2")
                setRaschet((Math.ceil((n*1.2+2000* (+value))*1.7))+" ₽");
                else setRaschet((Math.ceil((n+2000* (+value))*1.7))+" ₽");
        } else setRaschet(
            <div>
                <p>Вы ввели не все параметры для расчета!</p>
            </div>
        )

    }



const Primer =(value5)=>{
    switch (value5){
        case "2333": 
        // 
        switch (value4){
            
                    case "1":
                        {
                            return( 
                            <div>
                                
                                <p className="order__label">Выберите </p >
                                <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                                    <option value="1">resg</option>
                                    <option value="2">rsth</option>
                                    <option value="3">rthsr</option>
                                    <option value="4">rtsh</option>
                                </select>
                            </div>); 
                            
                        }
                    case "2":
                        {
                            return( 
                            <div>
                                
                                <p className="order__label">Выберите </p >
                                <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                                    <option value="1">resg2</option>
                                    <option value="2">rsth2</option>
                                    <option value="3">rthsr2</option>
                                    <option value="4">rtsh2</option>
                                </select>
                            </div>); 
                           
                        }
                    case "3":
                        {
                            return( 
                            <div>
                                 
                                <p className="order__label">Выберите </p >
                                <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                                    <option value="1">resg3</option>
                                    <option value="2">rsth3</option>
                                    <option value="3">rthsr3</option>
                                    <option value="4">rtsh3</option>
                                </select>
                            </div>); 
                            
                        }
                    case "4":
                        {
                            return( 
                            <div>
                                 
                                <p className="order__label">Выберите </p >
                                <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                                    <option value="1">resg4</option>
                                    <option value="2">rsth4</option>
                                    <option value="3">rthsr4</option>
                                    <option value="4">rtsh4</option>
                                </select>
                            </div>); 
                            
                        }    
                        
                    }break;
                        
        case "3000": switch (value4){
            case "1":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p >
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="1">2resg</option>
                            <option value="2">2rsth</option>
                            <option value="3">2rthsr</option>
                            <option value="4">2rtsh</option>
                        </select>
                    </div>); 
                    
                }
            case "2":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p >
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="1">2resg2</option>
                            <option value="2">2rsth2</option>
                            <option value="3">2rthsr2</option>
                            <option value="4">2rtsh2</option>
                        </select>
                    </div>); 
                    
                }
            case "3":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p >
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="1">2resg3</option>
                            <option value="2">2rsth3</option>
                            <option value="3">2rthsr3</option>
                            <option value="4">2rtsh3</option>
                        </select>
                    </div>); 
                    
                }
            case "4":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p >
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="1">2resg4</option>
                            <option value="2">2rsth4</option>
                            <option value="3">2rthsr4</option>
                            <option value="4">2rtsh4</option>
                        </select>
                    </div>); 
                   
                }    
                
            }break;
        case "4334": switch (value4){
            case "1":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p >
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="13resg" >3resg</option>
                            <option value="3rsth">3rsth</option>
                            <option value="3rthsr">3rthsr</option>
                            <option value="3rtsh">3rtsh</option>
                        </select>
                    </div>); 
                   
                }
            case "2":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p >
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="13resg2" >3resg2</option>
                            <option value="3rsth2">3rsth2</option>
                            <option value="3rthsr2">3rthsr2</option>
                            <option value="3rtsh2">3rtsh2</option>
                        </select>
                    </div>); 
                    
                }
            case "3":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p >
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="13resg3" >3resg3</option>
                            <option value="3rsth3">3rsth3</option>
                            <option value="3rthsr3">3rthsr3</option>
                            <option value="3rtsh3">3rtsh3</option>
                        </select>
                    </div>); 
                   
                }
            case "4":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p >
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="13resg4" >3resg4</option>
                            <option value="3rsth4">3rsth4</option>
                            <option value="3rthsr4">3rthsr4</option>
                            <option value="3rtsh4">3rtsh4</option>
                        </select>
                    </div>); 
                    
                }    
                
            }break;
        case "4667": switch (value4){
            case "1":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p >
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="14resg" >4resg</option>
                            <option value="4rsth">4rsth</option>
                            <option value="4rths">4rthsr</option>
                            <option value="4rtsh">4rtsh</option>
                        </select>
                    </div>); 
                   
                }
            case "2":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p >
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="14resg2" >4resg2</option>
                            <option value="4rsth2">4rsth2</option>
                            <option value="4rthsr2">4rthsr2</option>
                            <option value="4rtsh2">4rtsh2</option>
                        </select>
                    </div>); 
                    
                }
            case "3":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p >
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="14resg3" >4resg3</option>
                            <option value="4rsth3">4rsth3</option>
                            <option value="4rthsr3">4rthsr3</option>
                            <option value="4rtsh3">4rtsh3</option>
                        </select>
                    </div>); 
                    
                }
            case "4":
                {
                    return( 
                    <div>
                         
                        <p className="order__label">Выберите </p>
                        <select value={value8} onChange={(e)=>setValue8(e.target.value)}>
                            <option value="4resg4" >4resg4</option>
                            <option value="4rsth4">4rsth4</option>
                            <option value="4rthsr4">4rthsr4</option>
                            <option value="4rtsh4">4rtsh4</option>
                        </select>
                    </div>); 
                   
                }    
                
            }break;
    }
}
    const Kateg = (e) =>{
        setValue5(e.target.value);
        setChecked4(true);
        console.log(checked1);
    }
    
    const Stol = (e) => {
        setChecked(checked+1)
        setValue4(e.target.value);
        setChecked3(true)
    }
   
    
    async function submitForm  (e){
        e.preventDefault();
        let dat = new Date();
        let ddat = dat.getDate();
        ddat=ddat+" "+(dat.getMonth()+1);
        ddat=ddat+" "+dat.getFullYear();
        console.log(ddat);
        const sendData ={
            length:value,
            form_kitchen:checked1,
            shape_of_the_upper_drawers:value2,
            methods_of_opening_the_facade:value3,
            facades:value10,
            table_top:value4,
            wall_panel:value12,
            loops:value7,
            boxes:value9,
            price_category:value5,
            catalog:value8,
            box_option:value11,
            raschet:raschet,
            name:value6,
            phone:value13,
            date:ddat,
        }
        console.log(sendData)
    //     let response = await fetch('http://chursina21.temp.swtest.ru',{mode: 'cors',
    //     method: "post",
    //     headers: {
    //                 'Access-Control-Allow-Origin': 'https://localhost:3000'
    //             },
    //     body: JSON.stringify(sendData)
    // });

        // console.log( response)
       fetch("http://chursina21.temp.swtest.ru",{
        mode: 'no-cors',
        method: "post",
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
            
        },
            body: JSON.stringify(sendData)
        }).then(response => response.headers.get('Content-Type') )
        .then(response=>{console.log(response)});
            // (response.status== 200)?setAnswer(true):setAnswer(false))
        
        
            setAnswer(true);
    }

    return (
        <div className="order__invoice">
            <form onSubmit={submitForm}>
            <p className="order__label">Длина общей протяженности в метрах</p>   
            <input className="order__length" type="number" name="length" required value={value} onChange={(e)=> setValue(e.target.value)} min={1} />
            
            <p className="order__label">Форма кухни</p>
            <div className="order__form-kitchen">
                {item1.map((item1)=>(
                    <label key={item1.name}>
                        <input className="radio1" type="radio" name="radio1" value={item1.name} required checked1={checked1 === item1.name} onChange={()=> setChecked1(item1.name)} />
                        <img className="radio1-img" src={item1.imgName}/>
                    </label>
                ))}
            </div>
            
            <p className="order__label">Форма верхних ящиков</p>
            <select value={value2} onChange={Antri}required>
                <option value="1" >Прямые</option>
                <option value="2">С антрисолями</option>
            </select>
            

            <p className="order__label">Способы открывания фасада</p>
            <select value={value3} onChange={(e)=>setValue3(e.target.value)}required>
                {/* их выделить , считается 8*метр протяж * на цену->  */}
                <option value="170" >Ручка</option>
                <option value="300">От нажатия</option>
                {/* их выделить , считается метр протяжоности * на цену->  */}
                <option value="500">Интегрированая ручка</option>
                <option value="501">Ручка Gola</option>
            </select>
            

            <p className="order__label">Фасады</p>
            {/* 1,8 * метр протяж * цену * 1,3 */}
            <select value={value10} onChange={(e)=>setValue10(e.target.value)}required>
                <option value="3500" >Пленка ПВХ</option>
                <option value="4500">Бумажно-слоистый пластик</option>
                <option value="5600">Краска</option>
                <option value="10000">Натуральный шпон</option>
                <option value="15000">Массив дерева</option>
            </select>

            <p className="order__label">Столешница</p>
            <select value={value4} onChange={Stol}required>
                <option value="1" >Бумажно-слоистый пластик</option>
                <option value="2">Исскуственный камень</option>
                <option value="3">HPL плита</option>
                <option value="4">Кварцевый агломерат</option>
            </select>
            
            {checked3 === true && <div>
            <p className="order__label">Выберите ценовую категорию</p>
            <select value={value5} onChange={Kateg}required>
            <option value="0" ></option>
                <option value="2333" >1</option>
                <option value="3000">2</option>
                <option value="4334">3</option>
                <option value="4667">4</option>
            </select>
            
        </div> }
            {checked4 === true && Primer(value5)}
           
            
           
            <p className="order__label">Стеновая панель</p> 
            {/* {li} */}
            <select value={value12} onChange={(e)=>setValue12(e.target.value)}required>
                <option value="1" >Есть</option>
                <option value="2">Нет</option>
                {/* если есть, то в зависимости от ценновой категории столещницы устанавливается цена стененовой панели
                цена по категориям 1(2000),2(2667),3(3334),4(4000) 
                Тогда формула ценновая категория стенновой панели * метр протяженности
                */}
            </select>
            
            <p className="order__label">Петли</p>
            {/* 16 *метр протяженности * цену */}
            <select value={value7} onChange={(e)=>setValue7(e.target.value)}required>
                <option value="90" >С доводчиком</option>
                <option value="35">Без доводчика</option>
                <option value="350">BLUM</option>
            </select>

            
            <p className="order__label">Ящики</p>
            <select value={value9} onChange={(e)=>setValue9(e.target.value)}required>
                <option value="1" >С телескопами</option>
                <option value="2">С направляющими скрытого монтажа</option>
                <option value="3" >С металлическими боковинами</option>
            </select>
            
            {value9 === "1" && 
            <div>
                <input type="radio" name="Ya" value={650} onChange={(e)=>setValue11(e.target.value)}required/>с доводчиками
                <input type="radio" name="Ya" value={500} onChange={(e)=>setValue11(e.target.value)}required/>без доводчиков
            </div>
            }
             {value9 === "2" && 
            <div>
                <input type="radio" name="Ya" value={950} onChange={(e)=>setValue11(e.target.value)}required/>полного выдвижения
                <input type="radio" name="Ya" value={850} onChange={(e)=>setValue11(e.target.value)}required/>частичного выдвижения
            </div>
            }
             {value9 === "3" && 
            <div>
                <input type="radio" name="Ya" value={3500} onChange={(e)=>setValue11(e.target.value)} required/>Bouard
                <input type="radio" name="Ya" value={6700} onChange={(e)=>setValue11(e.target.value)}required/>BLUM
            </div>
            }
            {/* Форма расчета:
                (Все складываем, кроме метр протяж, если коэфицент 2, то + 20% к сумме + метр протяж * 2000) * 1,7
            */}
           
            
            
            {checked5== true && <div ><p > Примерно <span className="order__raschet">{raschet}</span> </p> 
            <div className="order__contact"><p className="order__label">Для окончательного расчета сделайте заказ:</p>
            <label for="name">Как к Вам обращаться:</label><input name="name" value={value6} onChange={(e)=> setValue6(e.target.value)}/> <br/>
            <label for="phone" className="order__contact-phone">Ваш номер телефона:</label><input name="phone" value={value13} onChange={(e)=> setValue13(e.target.value)}/><br/>
            
                <button type="submit" >Отправить форму</button> {answer && <div className="order__contact-send">
                <p>Ваш запрос принят!  Ожидайте нашего звонка!</p>
                </div>}
            </div></div>}
            
            </form>
            <button className="order__button-raschet" onClick={Raschet} >Произвести расчет</button>
        </div>
    )
}

export default InvoiceForm;