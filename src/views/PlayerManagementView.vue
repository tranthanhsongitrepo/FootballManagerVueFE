<template>
  <BaseSinglePlayerBox :player=players[0] />
</template>
<script>
import BaseSinglePlayerBox from "@/components/BaseSinglePlayerBox";
import axios from "axios";

export default {
  name: "PlayerManagementView",
  components: {
    BaseSinglePlayerBox
  },
  data() {
    return {
      players: null
    }
  },
  created() {
    const fetchData = async () => {
      const attrs = await axios.get("http://localhost:8080/api/v1/players/all")

      console.log(attrs)
      this.players = attrs.data
    }
    fetchData();

  }
}
</script>

<style scoped>

</style>