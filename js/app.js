define(['jquery',
        'particle',
        'particledevicelist',
        'particlefirmware',
        'bootstrapgrowl',
        'bootstrap'], function($, Particle) {
  function App() {
      this.particle = new Particle();
      $(document).ready(this.initialize.apply(this));

  };
  App.prototype = {
      constructor: App,

      initialize: function() {
        this.devicelist = new ParticleDeviceList();
      }
  };
  return App;
});
