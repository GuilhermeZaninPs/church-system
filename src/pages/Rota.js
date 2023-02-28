import { LogoStyle, RotaStyle } from "../Style";
import { NamesModal, DatesModal } from "../components/Modals"
import Logo from "../images/logo.png";
import { useParams, useNavigate, Link } from 'react-router-dom';

import { DepartContext } from '../context/DepartContext';
import { useContext, useState } from "react";


const Rota = () => {
  const {departList} = useContext(DepartContext)
  const { name } = useParams();
  const history = useNavigate();

  const department = departList.find(department => department.name === name);

  const [selectedDates, setSelectedDates] = useState([])
  const [onBtnClicked, setOnBtnClicked] = useState(false)

  
  if (!department) {
    history('/');
    return null;
  }
  
  return (
    <>
      <RotaStyle>
        <header className="headerBack">
          <LogoStyle src={Logo} alt="Logo"></LogoStyle>
          <h1 className="text-[34px] font-semibold ml-[20px]" >Bem vindo {name} </h1>
          
        </header>
        <Link to='/' >
          <h4 className="text-[24px] font-semibold">Voltar</h4>
        </Link>
        <div className="container-content">
          <div className="formCreate">
            <h1 className='text-[34px] font-semibold'>Criar nova escala</h1>
            <div className="names">
              <h4>Cadastrar nomes</h4>
              <button type="button" data-te-toggle="modal" data-te-target="#namesModal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.0"
                  stroke="currentColor"
                  width="45px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="names">
              <h4>Selecionar datas</h4>
              <button type="button" data-te-toggle="modal" data-te-target="#datesModal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  width="45px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </button>
            </div>

            <button id="btnRota">Criar nova escala</button>
          </div>
          <NamesModal />
          <DatesModal  id="datesModal" setSelectedDates={setSelectedDates} onSelectedDates={selectedDates} setOnBtnClicked={setOnBtnClicked}/>
          <div className="grid grid-cols-2 divide-x-2">
            <div className="pr-[20px]">
              <h1 className='text-[30px]	font-semibold'>Nomes cadastrados</h1>
              <ul>
                <li>Guilherme</li>
                <li>Henrique</li>
                <li>Thairine</li>
              </ul>
            </div>
            <div className="pl-[20px]">
              <h1 className='text-[30px]	font-semibold'>Datas selecionadas</h1>
              {selectedDates.length !== 0 && onBtnClicked === true ? <ul>
                {selectedDates.map((date) => (
                  <li key={date}>{date.toString()}</li>
                )) 

                }
              </ul> : <h3>Nenhuma data selecionada</h3>}
              
            </div>
          </div>
        </div>
      </RotaStyle>
    </>
  );
};
export default Rota;
