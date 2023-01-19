import styled from 'styled-components';

export const HomeStyle = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 800px;
    }
    div {
        display: flex;
        flex-direction: column;
    }
    h1 {
        color: #10403b;
        margin: 10px 0;
    }
    input {
        width: 250px;
        height: 30px;
        border: 1px solid black;
        border-radius: 5px; 
    }
    button {
        margin: 15px 0;
        width: 255px;
        height: 35px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: #10403b;
        color: white; 

    }

    @media (max-width: 414px) {
        flex-direction: column;
        width: 100%;
        img {
            width: 500px;
            margin-top: -100px;
        }
      }
`


