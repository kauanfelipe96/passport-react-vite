import React, { useState } from "react";
import brasao from "../assets/brasaorprp.png";
<<<<<<< HEAD
import avatarf from "../assets/avatar-f.png";
import avatarm from "../assets/avatar-m.png";
import logo from "../assets/logo-rprp.png";
import { TbEPassport } from "react-icons/tb";
import { IPassportData } from "../types";

interface IPassportProps {
  data: IPassportData;
}

=======
import avatar from "../assets/default-avatar.png";
import { TbEPassport } from "react-icons/tb";
import { IPassportData } from "../types";


interface IPassportProps {
  data: IPassportData;
}

>>>>>>> c5c56342124dc834458faa4fd8d2da16b9f73edd
const Passport: React.FC<IPassportProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

<<<<<<< HEAD
=======
  // const Signature: React.FC<IPassportProps> = ({ data }) => {
  //   return (
  //     <div className="signature">
  //       {data.firstname} {data.lastname}
  //     </div>
  //   );
  // };
  

>>>>>>> c5c56342124dc834458faa4fd8d2da16b9f73edd
  return (
    <>
      <div
        className={`book ${isOpen ? "open-book" : "closed-book"}`}
        onClick={handleClick}
      >
        <div className={`back ${isOpen ? "open-back" : "closed-back"}`}></div>
        <div className={`page2 ${isOpen ? "open-page2" : "closed-page2"}`}>
          <div className="page2-content">
            <h1>INTERNATIONAL PASSPORT</h1>
            <div className="page2-container">
<<<<<<< HEAD
              <div className="logo">
                <img src={logo} width={80} />
              </div>
              <img src={data.gender === 0 ? avatarm : avatarf} width={100} />
=======
              <img src={avatar} width={100} />
>>>>>>> c5c56342124dc834458faa4fd8d2da16b9f73edd
              <div className="input-container">
                <div className="input-end">
                  <div className="input">
                    <label>CID </label>
                    <div className="data">{data.citizenid}</div>
                  </div>
                </div>
                <div className="input">
                  <label>Surname </label>
                  <div className="data">{data.lastname}</div>
                </div>
                <div className="input">
                  <label>Given name</label>
                  <div className="data">{data.firstname}</div>
                </div>
                <div className="input">
                  <label>Date of birth</label>
                  <div className="data">
                    {new Date(data.birthdate / 1000).toLocaleDateString()}
                  </div>
                </div>
                <div className="input-row">
                  <div className="input">
                    <label>Nationality </label>
                    <div className="data">{data.nationality}</div>
                  </div>
                  <div className="input">
                    <label>Sex </label>
                    <div className="data">{data.gender === 0 ? "H" : "M"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`page1 ${isOpen ? "open-page1" : "closed-page1"}`}>
          <div className="page1-content">
            <h1>{data.citizenid}</h1>
          </div>
<<<<<<< HEAD
          <div className="signature-container">
            <div className="signature">
              {data.firstname} {data.lastname}
            </div>
            <div className="signature-line"></div>
            <div className="signature-text">Signature of Bearer</div>
          </div>
=======
          <div className="signature">{data.firstname} {data.lastname}</div>
>>>>>>> c5c56342124dc834458faa4fd8d2da16b9f73edd
        </div>
        <div className={`front ${isOpen ? "open-front" : "closed-front"}`}>
          <h1>Passport</h1>
          <img src={brasao} width={150} />
          <h2>{data.city}</h2>
          <TbEPassport className="icon" />
        </div>
      </div>
    </>
  );
};

export default Passport;
