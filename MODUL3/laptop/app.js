
Vue.component('showform',{
  template: '#show-form',
  data(){
    return{
      data:{merk:'', nomor:'', tanggal:''}
    }
  },
  methods: {
    simpan: function() {
        this.$emit('send-data', this.data);
        this.data.laptop = "";
        this.data.nomor = "";
        this.data.tanggal = "";
    }

    }

})

Vue.component('showdata',{
  template: '#show-data',
  props:['data']
})

var app = new Vue ({
  el: '#app',
  data:{
    laptop: {}
  },
  methods:{
    getData: function(value){
      this.laptop={
        laptop : value.laptop,
        nomor : value.nomor,
        tanggal : value.tanggal
      }
    }
  }
})
