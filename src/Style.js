import styled from 'styled-components';

export const HomeStyle = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20%;

    .logo {
        width: 350px;
    }
    .container-home-form {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
    }
    h1 {
        color: #10403b;
        margin: 10px 0;
    }
    input {
        width: 250px;
        height: 30px;
        border: 1px solid black;
        border-radius: 5px 5px 0 0; 
        padding-left: 5px;
    }
    button {
        margin: 15px 0;
        width: 250px;
        height: 35px;
        border: .5px solid black;
        border-radius: 5px;
        border-bottom-style: none;

        background-color: #10403b;
        color: white; 
    }
    button:hover {
      background-color: #185f58;
    }

    .dropdown {
      width: 250px;
      margin-left: 0;
      text-align: left;
      border: 1px solid black;
      border-top-style: none;
      border-radius: 0 0 5px 5px;

      margin-top: -66px;
      z-index: 1;
      background-color: white;
      padding-left: 5px;
    }  
    @media (max-width: 414px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 50%;
        width: 100%;
        .logo {
            width: 250px;
        }
      }
`

export const RotaStyle = styled.div `
      .headerBack {
        display: flex;

      }
      .container-content {  
          display: flex;
          justify-content: space-around;
      }
      padding: 30px 40px;

      .formCreate {
        display: flex;
        flex-direction: column;
        
      }
      .names {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;


        }
        #btnRota {
          margin-top: 10px;
          width: 255px;
          height: 35px;
          border: 1px solid black;
          border-radius: 5px;
          background-color: #10403b;
          color: white; 
        }
        #btnRota:hover {
          background-color: #185f58;
        }
`


export const LogoStyle = styled.img `
      width: 200px;
`