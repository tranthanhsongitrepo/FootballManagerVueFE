<template>
  <div class="admin-content analysis-progressbar-ctn res-mg-t-15">
    <div class="row vertical-center-box vertical-center-box-tablet">
      <div class="col-xs-3 mar-bot-15 text-left">
        <h4 class="text-left text-uppercase">{{ player.name }}</h4>
      </div>
      <div class="col-xs-9 cus-gh-hd-pro">
        <h2 class="text-right no-margin">{{ player.position.name }}</h2>
      </div>
    </div>
    <div class="row vertical-center-box vertical-center-box-tablet">
      <div class="col-xs-3 mar-bot-15 text-left">
        <label class="label bg-green">{{ player.id }}<i class="fa fa-level-up" aria-hidden="true"></i></label>
      </div>
      <div class="col-xs-9 cus-gh-hd-pro">
        <h2 class="text-right no-margin">{{ player.nationality }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { Player } from "@/assets/js/Player"
export default {
  name: "BaseSinglePlayerBox",
  props: {
    player: Player
  }
}
</script>

<style scoped>
.analysis-progressbar-ctn{
  padding:20px;
  background:#1b2a47;
}
.analysis-progressbar-ctn h4, .traffic-als-inner h3{
  font-size:20px;
  color:#fff;
  text-transform: capitalize;
}
.res-mg-t-15{
  margin-top:15px;
  color:#fff;
}
</style>