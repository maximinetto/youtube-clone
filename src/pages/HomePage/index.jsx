import useVideos from "@/hooks/useVideos";
import classNames from "classnames";
import React from "react";
import CategoriesBar from "@/components/CategoriesBar";
import Video from "@/components/Video";
import styles from "@/pages/HomePage/_index.module.scss";

function HomePage() {
  const { loading, videos, refetch } = useVideos();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={classNames(styles.homeContainer)}>
      <CategoriesBar refetchVideos={refetch} />
      <div className={classNames(styles.homeGrid)}>
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            views={video.views}
            publishedAt={video.publishedAt}
            channelPhoto={video.channelPhoto}
            channelTitle={video.channelTitle}
            duration={video.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
