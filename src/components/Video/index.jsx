import React from "react";
import PropTypes from "prop-types";
import numeral from "numeral";
import styles from "@/components/Video/_index.module.scss";
import useTime from "@/hooks/useTime";

function Video({
  id,
  title,
  thumbnail,
  views,
  publishedAt,
  channelPhoto,
  channelTitle,
  duration,
}) {
  const publishedAtFormatted = useTime(publishedAt);
  const durationFormatted = useTime(duration, { duration: true });
  const viewsFormatted = numeral(views).format("0.a");

  return (
    <div className={styles.video}>
      <div className={styles.videoTop}>
        <img src={thumbnail} alt="" />
        <time dateTime={duration}>{durationFormatted}</time>
      </div>
      <div className={styles.videoBottom}>
        <div className={styles.videoLeft}>
          <img src={channelPhoto} alt="Photo" />
        </div>
        <div className={styles.videoBottomCenter}>
          <div className={styles.videoTitle}>{title}</div>
          <div className={styles.videoChannel}>
            <p>{channelTitle}</p>
          </div>
          <div className={styles.videoDetails}>
            <span>{viewsFormatted} views</span> <span> • </span>
            <time dateTime={publishedAt}>{publishedAtFormatted}</time>
          </div>
        </div>
      </div>
    </div>
  );
}

Video.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  publishedAt: PropTypes.string.isRequired,
  channelPhoto: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default Video;
