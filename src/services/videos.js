import { request } from "./youtubeSetup";

async function fetchChannelVideos(videos) {
  const channelIds = videos.map((item) => item.snippet.channelId);
  const channelsResponse = await request("/channels", {
    params: {
      part: "snippet",
      id: channelIds.join(","),
    },
  }).then((response) => response.data);

  return channelsResponse;
}

function formatChannelVideos({ videos, channels, nextPageToken }) {
  return {
    videos: videos.map(({ id, snippet, contentDetails, statistics }) => {
      const channelPhoto = channels.items.find(
        ({ id }) => id === snippet.channelId
      ).snippet.thumbnails.default.url;
      return {
        id: id,
        title: snippet.title,
        thumbnail: snippet.thumbnails.medium.url,
        channelPhoto: channelPhoto,
        channelTitle: snippet.channelTitle,
        publishedAt: snippet.publishedAt,
        duration: contentDetails.duration,
        views: Number(statistics.viewCount),
      };
    }),
    nextPageToken,
  };
}

const getVideosByIds = async (ids, nextPageToken) => {
  const videosResponse = await request("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      id: ids.join(","),
      regionCode: "ES",
    },
  }).then((response) => response.data);

  const channelsResponse = await fetchChannelVideos(videosResponse.items);

  return formatChannelVideos({
    videos: videosResponse.items,
    channels: channelsResponse,
    nextPageToken,
  });
};

/**
 * @typedef {Object} Video
 * @property {string} id
 * @property {string} title
 * @property {string} thumbnail
 * @property {string} publishedAt
 * @property {string} channelTitle
 * @property {string} channelPhoto
 * @property {string} viewCount
 */

/**
 * @typedef {Object} Videos
 * @property {Array.<Video>} videos
 * @property {string} nextPageToken
 */

/**
 * Get the next page of videos
 * @return {Promise<Videos>} - The promise resolves with the next page of videos
 */
export const getPopularVideos = async () => {
  const videosResponse = await request.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      maxResults: "20",
      regionCode: "ES",
      pageToken: "",
    },
  });

  const { items, nextPageToken } = videosResponse.data;

  const channelsResponse = await fetchChannelVideos(items);

  return formatChannelVideos({
    videos: items,
    channels: channelsResponse,
    nextPageToken,
  });
};

export const getVideosByCategory = async (keyboard, nextPageToken) => {
  const videosResponse = await request.get("/search", {
    params: {
      part: "snippet",
      maxResults: "20",
      q: keyboard,
      type: "video",
      pageToken: nextPageToken,
    },
  });

  return getVideosByIds(
    videosResponse.data.items.map((item) => item.id.videoId),
    nextPageToken
  );
};
