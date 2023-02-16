import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DepartContext } from "../context/DepartContext";
import Logo from "../images/logo.png";
import { HomeStyle } from "../Style";

const Home = () => {
  const { departList } = useContext(DepartContext);
  const history = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedDepart, setSelectedDepart] = useState(null);

  /* useEffect(() => {
    if (selectedDepart) {
        history(`/departments/${selectedDepart.name}`);
    }
    }, [selectedDepart, history]); */

  useEffect(() => {
    if (inputValue === "") {
      setSuggestions([]);
    }
  }, [inputValue]);

  const getDepartmentSuggestions = (value) => {
    return departList.filter((department) =>
      department.name.toLowerCase().startsWith(value.toLowerCase())
    );
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
    const departmentSuggestions = getDepartmentSuggestions(event.target.value);
    setSuggestions(departmentSuggestions);
  }

  function handleSuggestionClick(suggestions) {
    setInputValue(suggestions.name);
    setSelectedDepart(suggestions);
    setSuggestions([]);
  }

  function handleButtonClick() {
    if (!selectedDepart) return;
    if (selectedDepart) {
      history(`/departments/${selectedDepart.name}`);
    }
  }

  return (
    <>
      <HomeStyle>
        <img
          src={Logo}
          alt="Logo"
          className="logo max-h-[150px] min-h-[150px]"
        ></img>
        <div className="container-home-form">
          <h1 className="text-[34px]	font-semibold">DEPARTAMENTO</h1>
          <input
            type="text"
            onChange={handleInputChange}
            value={inputValue}
          ></input>
          <button onClick={handleButtonClick}>Iniciar</button>

          <div className="dropdown">
            {suggestions.length > 0 && (
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{ cursor: "pointer" }}
                  >
                    {suggestion.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </HomeStyle>
    </>
  );
};

export default Home;
