import { LogoStyle, RotaStyle } from "../Style";

import Logo from '../images/logo.png'


const Rota = () => {
    return (
        <>
            <RotaStyle>
                <header className="headerBack">
                    <LogoStyle src={Logo} alt='Logo'></LogoStyle>
                </header>
                <h4>Voltar</h4>
                <div className="container-content">
                    <div className="formCreate">
                        <h1>Criar nova escala</h1>
                        <div className="names">
                            <h4>Cadastrar nomes</h4>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="w-6 h-6" width="60px">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </div>
                        <input type='date'></input>
                        <button>Cadastrar nomes</button>
                    </div>
                    <div>
                        <h1>Nomes cadastrados</h1>
                        <ul>
                            <li>Guilherme</li>
                            <li>Henrique</li>
                            <li>Thairine</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Datas selecionadas</h1>
                        <ul>
                            <li>Sabado - 2 de fevereiro</li>
                            <li>Sabado - 9 de fevereiro</li>
                            <li>Sabado - 16 de fevereiro</li>
                        </ul>
                    </div>
                </div>
            </RotaStyle>
        </>
    )
}
export default Rota;