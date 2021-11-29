import { request } from "./youtubeSetup";

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
  const channelIds = items.map((item) => item.snippet.channelId);
  const channelsResponse = await request("/channels", {
    params: {
      part: "snippet",
      id: channelIds.join(","),
    },
  }).then((response) => response.data);

  return {
    videos: items.map(({ id, snippet, contentDetails, statistics }) => {
      const channelPhoto = channelsResponse.items.find(
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
};
