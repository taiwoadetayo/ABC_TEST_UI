<template>
  <div class="hero-static">
    <div class="content">
      <b-row class="justify-content-center mt-5">
        <b-col md="12" lg="10" xl="10">
          <h3>ABC Test</h3>

          <b-tabs  v-for="(x,i) in record" :key="i" class="block mt-4" nav-class="nav-tabs-block" content-class="block-content" style="position:relative">
            <b-tab :title="x.title" active>
              <b style="font-size:12px">ID: {{x.id}}</b>&nbsp;&nbsp;
              <b style="font-size:12px">Score: {{x.score}}</b>&nbsp;&nbsp;
              <b style="font-size:12px">Type: {{x.type}}</b> &nbsp;&nbsp;
              <b style="font-size:12px">Time: {{formatDate(x.time*1000)}}</b>
              <br>
              <p  class="" style="font-size:14px" v-html="x.text"></p>

              <br>
              <i style="font-size:12px">{{x.url}}</i>
                   
            </b-tab>
          </b-tabs>

        </b-col>
      </b-row>
    </div>
    <div class="content content-full font-size-sm text-muted text-center">
      <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
    </div>
  </div>
  <!-- END Page Content -->
</template>



<script>
export default {
  name: "login",
  data () {
    return {
      record:[],
    };
  },

  mounted () {
    this.getFeeds();


  },

  created () {

  },

  methods: {
      getFeeds(){
          this.$swal.fire({title: "", html: this.$preloader, showConfirmButton: false, showCancelButton: false, allowOutsideClick: false}); // preloader

          return this.axios.get("/getfeeds")
          .then((res) => {
            this.$swal.fire('Success', 'Result is ready', 'success');
            this.record = res.data.data
            console.log(this.record);
          })
          .catch(error => {
            console.log(error);
            this.$swal.fire('Error', 'No response returned', 'error');
          });
      },
  },
};
</script>

<style scoped>
.hero-static{
  background-image: url("/img/home_bg.jpeg");
  background-position: 50% 92%;
  background-size: cover;
}
.btn-alt-primary {
    color: #ffffff;
    background-color: #21824b;
    border-color: #208a4e;
    font-size:14px;
}
.btn-alt-primary:hover {
    color: #ffffff;
    box-shadow: 2px 2px 20px 0px #0000008a;
    background-color: #21824b;
    border-color: #208a4e;
}
</style>
