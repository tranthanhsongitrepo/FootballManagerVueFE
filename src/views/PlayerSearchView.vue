<template>
  <BaseInput label="Enter player name" v-model="playerName" @input="searchPlayer()" @keyup.delete="searchPlayer"/>
  <BaseButton @click="searchPlayer()">
    <i class="fa fa-search" aria-hidden="true">Search</i>
  </BaseButton>
  <div id="player-list">
    <ul>
      <li v-for="(player, index) in this.players" :key="index">
        <BaseSinglePlayerBox :player=player />
      </li>
    </ul>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseButton from "@/components/BaseButton";
import axios from "axios";
import BaseSinglePlayerBox from "@/components/BaseSinglePlayerBox";
export default {
  name: "PlayerSearchView",
  components: {
    BaseSinglePlayerBox,
    BaseInput,
    BaseButton
  },
  data() {
    return {
      playerName: "",
      players: []
    };
  },
  methods: {
    searchPlayer: function () {
      console.log(name);
      axios.get(`http://localhost:8080/api/v1/players`, {
        params: {
          "name": this.playerName
        }
      }).then(response => {
        this.players = response.data;
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type:none;
}
</style>