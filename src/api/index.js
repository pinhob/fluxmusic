import axios from "axios";

export const getNews = async () => axios.get('genre/21/news.json');

export const getArtists = async () => axios.get('genre/1/artists.json');

export const getAlbums = async () => axios.get('genre/1/albums.json');
