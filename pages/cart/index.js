Page({
  data: {
    brandName: 'MARIO HERNÁNDEZ',
    address: 'Calle 21 #3-31',
    wantsInvoice: null,
    nitValue: '',
    cartItems: [
      {
        id: 1,
        name: 'Morral Enzo Ébano Lt Palenque',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        price: '1.350.000'
      }
    ],
    totalPrice: '1.350.000'
  },

  onLoad() {
    this.calculateTotal();
  },

  calculateTotal() {
    let total = 0;
    this.data.cartItems.forEach(item => {
      total += parseFloat(item.price.replace(/\./g, ''));
    });
    
    this.setData({
      totalPrice: total.toLocaleString('es-CO')
    });
  },

  goToAddress() {
    my.navigateTo({
      url: '/pages/address/index'
    });
  },

  goToProducts() {
    my.navigateTo({
      url: '/pages/products/index'
    });
  },

  removeItem(e) {
    const itemId = e.currentTarget.dataset.id;
    const updatedItems = this.data.cartItems.filter(item => item.id !== itemId);
    
    this.setData({
      cartItems: updatedItems
    });
    
    this.calculateTotal();
  },

  setInvoice(e) {
    const value = e.currentTarget.dataset.value;
    this.setData({
      wantsInvoice: value
    });
    
    // Limpiar NIT si selecciona No
    if (value === false) {
      this.setData({
        nitValue: ''
      });
    }
  },

  onNitInput(e) {
    this.setData({
      nitValue: e.detail.value
    });
  },

  handlePayment() {
    if (this.data.cartItems.length === 0) {
      my.showToast({
        content: 'El carrito está vacío',
        type: 'fail'
      });
      return;
    }

    // Obtener nombre del primer producto para mostrar en checkout
    const orderName = this.data.cartItems.map(item => item.name).join(', ');
    const address = this.data.address;

    // Construir la URL de checkout con los parametros
    const checkoutUrl = `/pages/checkout/index?orderName=${encodeURIComponent(orderName)}&address=${encodeURIComponent(address)}`;

    // Navegar al splash con la redireccion al checkout
    my.navigateTo({
      url: `/pages/splash/index?redirect=${encodeURIComponent(checkoutUrl)}`
    });
  }
});
