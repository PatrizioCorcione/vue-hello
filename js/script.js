const {createApp} = Vue;

createApp({

  data() {
      return {
          messaggio: "Collateral Beauty",
          love: "❤️",
          time: "00:00:00",
          death: "💀",
          img: "/assets/img/1.jpeg", 
      }
  },

  methods: {
    
    innerclock(){
      const d = new Date();
      const h = d.getHours()  < 10 
        ? '0' + d.getHours() 
        : d.getHours();
      const m = d.getMinutes() < 10 
        ? '0' + d.getMinutes() 
        : d.getMinutes();
      const s = d.getSeconds()  < 10 
        ? '0' + d.getSeconds() 
        : d.getSeconds();
      this.time = `${h}:${m}:${s}`;
    }
  },

  mounted(){
    setInterval(this.innerclock, 1000);
  }

}).mount('#app');


