import React from "react";

import Loading from "@/components/loading/index";

import styles from "./styles.module.css";

const FeatureMovieLoading = () => {
  return (
    <div
      style={{
        height: 278,
      }}
      className={styles.movieWrapper}
    >
     <Loading/>
    </div>
  );
};

export default FeatureMovieLoading;
