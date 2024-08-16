import React, {useState} from "react";
import brasao from "../assets/brasaorprp.png";
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
            <div className={`page6 ${isOpen ? "open-page6" : "closed-page6"}`}></div>
            <div className={`page4 ${isOpen ? "open-page4" : "closed-page4"}`}></div>
            <div className={`page2 ${isOpen ? "open-page2" : "closed-page2"}`}></div>
            <div className={`page1 ${isOpen ? "open-page1" : "closed-page1"}`}>
                <div className="pagina">
                    <h1>TESTESTE</h1>
                </div>
            </div>
            <div className={`front ${isOpen ? "open-front" : "closed-front"}`}>
                <h1>Passaporte</h1>
                <img src={brasao} width={140} />
                <h2>Ribeirão Pires</h2>
                <TbEPassport className="icon" />
            </div>
        </div>
        </>
    );
};

export default Passport;