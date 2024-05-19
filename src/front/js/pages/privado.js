import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Privado = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.token) {
      navigate("/login");
    } else {
      actions.getLoggedUserData();
    }
  }, [store.token, navigate, actions]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      {store.loggedUserData ? (
        <>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="User profile picture"
            />
            <div className="card-body">
              <h5 className="card-title">{store.loggedUserData.name}</h5>
              <p className="card-text">
                Frontend Developer with a passion for creating interactive and dynamic user experiences.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Email:</strong> {store.loggedUserData.email}
                </li>
                <li className="list-group-item">
                  <strong>Location:</strong> Venezuela/Caracas
                </li>
                <li className="list-group-item">
                  <strong>Skills:</strong> html,css,javascript,python and more
                </li>
              </ul>
              <a href="#" className="btn btn-primary mt-3">
                Edit Profile
              </a>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
