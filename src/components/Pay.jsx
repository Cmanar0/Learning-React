import React from "react";
// import "./App.css";

function App() {
  const handleClick = () => {
    const apiUrl = "https://rubifour.rubidex.co:8081/api/v3/blockset/info";
    const accessToken = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";
    const name = "ev390";
    const body = {
      order: {
        header: {
          id: "1234567890",
        },
        payer: {
          email: "aaa@bbb.com",
          phone: "123456",
        },
        seller: {
          name: "blablabla",
          ico: "dfgfdgfd",
        },
        goods: {
          id: "2342545464",
        },
        payment: {
          amount: "100.34",
          currency: "EUR",
        },
        method: {
          type: "card",
          holder: "Vaslav Vaslavovov",
          expiration: "01/2023",
          cvv: "123",
        },
        notify: {
          url_success: "https://",
          url_fault: "https://",
        },
      },
    };

    fetch(`${apiUrl}?access_token=${accessToken}&name=${name}`, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="card">
      <div>
        <button className="button button-green" onClick={handleClick}>
          Označit platbu za zaplacenou
        </button>
        <button className="button button-yellow">
          Simulovat zrušenou platbu
        </button>
        <button className="button button-red">Simulovat chybnou platbu</button>
      </div>
    </div>
  );
}
export default App;
