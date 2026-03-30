Page({
  data: {
    brandName: 'MARIO HERNANDEZ',
    selectedColor: 1,
    showDetails: false,
    showToast: false,
    product: {
      id: 1,
      name: 'Morral Enzo Ebano Lt Palenque',
      description: 'Bolso de cuero genuino con acabados premium. Disenado para la mujer moderna que busca elegancia y funcionalidad. Interior espacioso con multiples compartimentos.',
      images: [
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
        'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800'
      ],
      price: '1.350.000',
      currency: '$',
      colors: [
        { id: 1, name: 'Cafe', hex: '#5c4a2a' },
        { id: 2, name: 'Negro', hex: '#1a1a1a' },
        { id: 3, name: 'Azul', hex: '#1e3a5f' }
      ],
      details: [
        'Material: Cuero genuino',
        'Dimensiones: 30cm x 25cm x 12cm',
        'Cierre: Cremallera metalica',
        'Correa ajustable',
        'Bolsillos interiores: 3',
        'Garantia: 2 anos'
      ]
    }
  },

  onLoad(query) {
    const productId = query.id;
    if (productId) {
      this.loadProduct(productId);
    }
  },

  loadProduct(productId) {
    console.log('Loading product:', productId);
  },

  toggleDetails() {
    this.setData({
      showDetails: !this.data.showDetails
    });
  },

  selectColor(e) {
    const color = e.currentTarget.dataset.color;
    this.setData({
      selectedColor: color.id
    });
  },

  goToPay() {
    my.navigateTo({
      url: '/pages/cart/index'
    });
  },

  addToCart() {
    const { product, selectedColor } = this.data;
    
    // Mostrar toast personalizado
    this.setData({
      showToast: true
    });

    console.log('Added to cart:', {
      productId: product.id,
      colorId: selectedColor
    });

    // Despues de 2 segundos, ocultar toast y volver a la pagina anterior
    setTimeout(() => {
      this.setData({
        showToast: false
      });
      my.navigateBack();
    }, 2000);
  }
});
