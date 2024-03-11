const {createApp} = Vue;

createApp({

  data() {
      return {
          messaggio: "Collateral Beauty",
          love: "❤️",
          time: "",
          death: "💀",
          isEven: false,
          img: "/assets/img/1.jpeg",
          startClock: setInterval(() => {
            this.innerclock();
            this.colorClock();
          }, 1000),
          startAndStop: false,
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

    },
    colorClock(){

      this.isEven = !this.isEven;
      
    },
    
    resetClock(){
      
      
      if(this.startAndStop){
        this.startAndStop = false;
        this.innerclock();
        this.startClock = setInterval(() => {
          this.innerclock();
          this.colorClock();
        }, 1000);
      }else{
        clearInterval(this.startClock);
        this.time = "LOVE:TIME:DEATH";
        this.startAndStop = true;
      } 
    },
    
  },

}).mount('#app');


