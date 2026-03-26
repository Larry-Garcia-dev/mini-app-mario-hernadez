Page({
  data: {
    brandName: 'MARIO HERNÁNDEZ',
    address: 'Calle 21 #3-31',
    wantsInvoice: null,
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
  },

  handlePayment() {
    if (this.data.cartItems.length === 0) {
      my.showToast({
        content: 'El carrito está vacío',
        type: 'fail'
      });
      return;
    }

    my.showToast({
      content: 'Procesando pago...',
      type: 'success'
    });
  }
});
