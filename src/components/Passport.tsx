import React, {useState} from "react";
import brasao from "../assets/brasaorprp.png";
import avatar from "../assets/default-avatar.png"
import { TbEPassport } from "react-icons/tb";

const Passport: React.FC = () => {
    const[isOpen, setIsOpen] = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen);
    };
    
    return (
        <>
        <div className={`book ${isOpen ? "open-book" : "closed-book"}`} onClick={handleClick}>
            <div className={`back ${isOpen ? "open-back" : "closed-back"}`}></div>
            {/* <div className={`page6 ${isOpen ? "open-page6" : "closed-page6"}`}>
            <div className="page6-content"></div>
            </div> */}
            <div className={`page2 ${isOpen ? "open-page2" : "closed-page2"}`}>
            <div className="page2-content">
            <img src={avatar} width={70} />
            <div>
                <div className='input'>
                    <label>CID </label>
                    <input type='text' value="C0930" readOnly/>
                    <label>Nome </label>
                    <input type='text' value="Lincoln" readOnly/>
                    <label>Sobrenome </label>
                    <input type='text' value="Lau" readOnly/>
                    <label>Nascimento </label>
                    <input type='text' value="01/03/2024" readOnly/>
                    <label>Sexo </label>
                    <input type='text' value="M" readOnly/>
                    <label>Nacionalidade </label>
                    <input type='text' value="Brasileiro" readOnly/>
                </div>
            </div>
            </div>
            </div>
            <div className={`page1 ${isOpen ? "open-page1" : "closed-page1"}`}>
            <div className="page1-content"></div>
            </div>
            <div className={`front ${isOpen ? "open-front" : "closed-front"}`}>
                <h1>Passporte</h1>
                <img src={brasao} width={150} />
                <h2>Ribeirão Pires</h2>
                <TbEPassport className="icon" />
            </div>
        </div>
        </>
    );
};

export default Passport;