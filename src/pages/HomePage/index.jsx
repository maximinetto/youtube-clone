import useVideos from "@/hooks/useVideos";
import classNames from "classnames";
import React from "react";
import CategoriesBar from "@/components/CategoriesBar";
import Video from "@/components/Video";
import InfiniteScroll from "@/components/InfiniteScroll";
import styles from "@/pages/HomePage/_index.module.scss";
import Spinner from "@/components/Spinner/index";
import useHasMoreVideos from "@/hooks/useHasMoreVideos";

function HomePage() {
  const { loading, videos, refetch, fetchMore } = useVideos();
  const hasMoreVideos = useHasMoreVideos();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={classNames(styles.homeContainer)}>
      <CategoriesBar refetchVideos={refetch} />
      <InfiniteScroll
        loader={<Spinner />}
        hasMore={hasMoreVideos}
        loadMore={fetchMore}
        className={styles.videosContainer}
      >
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
      </InfiniteScroll>
    </div>
  );
}

export default HomePage;
