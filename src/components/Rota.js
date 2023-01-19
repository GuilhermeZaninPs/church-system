
const Rota = () => {
    return (
        <>
            <h1>Create a new Rota</h1>
            <input type='text'></input>
            <input type='date'></input>
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

            <button>Gerar escala</button>
        </>
    )
}
export default Rota;