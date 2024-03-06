import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [virifi, setvirifi] = useState({});
  const [validater, setvalidater] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("SetData")) {
      axios
        .get("http://localhost:8000/user/auth", {
          headers: {
            seingtoken: localStorage.getItem("SetData"),
          },
        })
        .then((result) => {
          let { user_id, username, email, password, phoneNo, create_at } =
            result.data[0];
          setvirifi({ user_id, username, email, password, phoneNo, create_at });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  }, [validater]);

  return (
    <AppContext.Provider
      value={{
        virifi,
        setvirifi,
        validater,
        setvalidater
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
