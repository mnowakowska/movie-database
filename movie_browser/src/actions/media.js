export const SET_MEDIA = 'SET_MEDIA';


export function setMovies(mediaList) {
  return {
    type: SET_MEDIA,
    mediaList
  }
}
