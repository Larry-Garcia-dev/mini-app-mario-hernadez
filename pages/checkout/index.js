Page({
  data: {
    brandName: 'MARIO HERNÁNDEZ',
    orderDate: '',
    orderDateShort: '',
    orderName: '',
    orderAddress: '',
    orderTime: ''
  },

  onLoad(query) {
    // Obtener datos del pedido desde query params o storage
    const orderName = query.orderName || 'Morral Enzo Ébano Lt Palenque';
    const orderAddress = query.address || 'Calle 21 #3-31';
    
    // Generar fecha actual
    const now = new Date();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    const orderDate = `${dayName}, ${day} de ${month} de ${year}`;
    const orderDateShort = `${day.toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${year}`;
    
    // Generar hora
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hour12 = hours % 12 || 12;
    const orderTime = `${hour12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    this.setData({
      orderDate,
      orderDateShort,
      orderName,
      orderAddress,
      orderTime
    });
  },

  handleToggle() {
    // No action needed for this page
  },

  finishOrder() {
    // Navegar a la pagina principal
    my.reLaunch({
      url: '/pages/index/index'
    });
  }
});