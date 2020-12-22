<template>
  <div id="cross">
      <div id="mid-cross">
        <div id="mid-circle"></div>
      </div>
      <div id="top-cross" @click="emitCrossPush('top')">
        <div id="upC"></div>
      </div>
      <div id="right-cross">
        <div id="rightC" @click="emitCrossPush('right')"></div>
      </div>
      <div id="bot-cross" @click="emitCrossPush('bottom')">
        <div id="downC" ></div>
      </div>
      <div id="left-cross" @click="emitCrossPush('left')">
        <div id="leftC"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Cross",
  data() {
    return {
      
    };
  },
  methods:{    
    emitCrossPush(direction){
      this.$emit("crossPush", direction);
    }
  }
 

};
</script>

<style scoped lang="scss" ></style>
