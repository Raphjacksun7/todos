import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../actions/todo";
import Header from "../containers/Header";
import MainSection from "../containers/MainSection";

const Wrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div style={{ minWidth: "230px", maxWidth: "550px", margin: "0 auto" }}>
      <div className="todoapp">
        <Header />
        <MainSection />
      </div>
    </div>
  );
};

export default Wrapper;
