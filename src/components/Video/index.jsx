import React from "react";
import styles from "./_index.module.scss";

function Video() {
  return (
    <div className={styles.video}>
      <div className={styles.videoTop}>
        <img
          src="https://i.ytimg.com/an_webp/V84yjOdtybQ/mqdefault_6s.webp?du=3000&sqp=CKjBiowG&rs=AOn4CLA_MzIWUuiULZeCVrjeBO_rdXTTkw"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className={styles.videoBottom}>
        <div className={styles.videoLeft}>
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLSsnWm_dQzIqM-qgW74yebXNX_b__k6WAeUBb6GeGQ=s176-c-k-c0x00ffffff-no-rj-mo"
            alt="Photo"
          />
        </div>
        <div className={styles.videoBottomCenter}>
          <div className={styles.videoTitle}>
            How to create a app in 5 minutes #made by Maximinetto
          </div>
          <div className={styles.videoChannel}>
            <p>Maximinetto</p>
          </div>
          <div className={styles.videoDetails}>
            <span>5m views •</span>
            <span>5 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
