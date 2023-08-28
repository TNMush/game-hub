import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/games/{game_pk}/additions",
  params: {
    key: "a91386733cfb44d4b3af3540ef5ab3aa",
  },
});
