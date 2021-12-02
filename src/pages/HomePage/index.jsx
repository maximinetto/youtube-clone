import React from "react";
import useVideos from "@/hooks/useVideos";
import classNames from "classnames";
import CategoriesBar from "@/components/CategoriesBar";
import styles from "@/pages/HomePage/_index.module.scss";
import useHasMoreVideos from "@/hooks/useHasMoreVideos";
import InfiniteScroll from "@/components/InfiniteScroll";
import Video from "@/components/Video";

function HomePage() {
  const { loading, videos, fetchMore } = useVideos();
  const hasMoreVideos = useHasMoreVideos();

  return (
    <div className={classNames(styles.homeContainer)}>
      <CategoriesBar />
      <InfiniteScroll
        loader={<div>Loading...</div>}
        hasMore={hasMoreVideos}
        loadMore={fetchMore}
        className={styles.videosContainer}
        loading={loading}
        distance="600px"
        threshold={0}
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
