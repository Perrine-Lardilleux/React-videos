import axios from 'axios';

const KEY = 'AIzaSyD1bKAZ-ZPPEqFSYwmKY7s13JXEnUSYYBI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
