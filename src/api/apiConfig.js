const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "c03b7ea95afaacdd7966648d0f329ab0",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
