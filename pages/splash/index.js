Page({
  data: {
    loadingStage: 0,
    loadingDots: '',
    redirectUrl: '/pages/index/index'
  },

  dotsInterval: null,
  stageTimeout1: null,
  stageTimeout2: null,
  stageTimeout3: null,
  navigateTimeout: null,

  onLoad(query) {
    // Si viene una URL de redireccion, usarla
    if (query.redirect) {
      this.setData({
        redirectUrl: decodeURIComponent(query.redirect)
      });
    }
    this.startLoading();
  },

  onUnload() {
    // Limpiar todos los timeouts e intervals
    if (this.dotsInterval) clearInterval(this.dotsInterval);
    if (this.stageTimeout1) clearTimeout(this.stageTimeout1);
    if (this.stageTimeout2) clearTimeout(this.stageTimeout2);
    if (this.stageTimeout3) clearTimeout(this.stageTimeout3);
    if (this.navigateTimeout) clearTimeout(this.navigateTimeout);
  },

  startLoading() {
    // Animacion de los puntos de carga
    let dots = 0;
    this.dotsInterval = setInterval(() => {
      dots = (dots + 1) % 4;
      this.setData({
        loadingDots: '.'.repeat(dots)
      });
    }, 400);

    // Stage 1: Mostrar circulo con cortes (despues de 300ms)
    this.stageTimeout1 = setTimeout(() => {
      this.setData({ loadingStage: 1 });
    }, 300);

    // Stage 2: Mostrar media M (despues de 1200ms)
    this.stageTimeout2 = setTimeout(() => {
      this.setData({ loadingStage: 2 });
    }, 1200);

    // Stage 3: Mostrar logo completo (despues de 2100ms)
    this.stageTimeout3 = setTimeout(() => {
      this.setData({ loadingStage: 3 });
    }, 2100);

    // Navegar a la pagina de destino despues de completar la animacion (despues de 3000ms)
    this.navigateTimeout = setTimeout(() => {
      clearInterval(this.dotsInterval);
      my.reLaunch({
        url: this.data.redirectUrl
      });
    }, 3000);
  }
});
