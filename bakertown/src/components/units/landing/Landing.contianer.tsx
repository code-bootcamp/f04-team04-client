import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "@firebase/firestore";
import { sliderClasses } from "@mui/material";
import { useEffect, useState, useRef, MutableRefObject } from "react";
import { firebaseApp } from "../../../../pages/_app";
import LandingPresenter from "./Landing.presenter";

const LandingContainer = () => {
  const [popular, setPoplular] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(async () => {
    const popular = query(
      collection(getFirestore(firebaseApp), "class"),
      where("heart", ">", 0)
    );
    let result = await getDocs(popular);
    let docs = result.docs.map((el) => el.data());
    console.log(docs);
    setPoplular(docs);

    const recent = query(
      collection(getFirestore(firebaseApp), "class"),
      where("createdAt", "!=", "")
    );
    result = await getDocs(recent);
    docs = result.docs.map((el) => el.data());
    console.log(docs);
    setRecent(docs);
  }, []);

  const clickLeft = () => {
    console.log("clickLeft");
  };

  const clickRight = () => {
    console.log("clickRight");
  };

  return (
    <>
      <LandingPresenter
        popular={popular}
        recent={recent}
        clickLeft={clickLeft}
        clickRight={clickRight}
      />
    </>
  );
};

export default LandingContainer;
