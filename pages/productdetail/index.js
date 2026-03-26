Page({
  data: {
    brandName: 'MARIO HERNANDEZ',
    selectedColor: 1,
    product: {
      id: 1,
      name: 'Bolso Elegance',
      reference: 'MH-2024-001',
      description: 'Bolso de cuero genuino con acabados premium. Disenado para la mujer moderna que busca elegancia y funcionalidad. Interior espacioso con multiples compartimentos.',
      images: [
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
        'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800'
      ],
      price: '890.000',
      originalPrice: '',
      currency: '$',
      colors: [
        { id: 1, name: 'Negro', hex: '#000000' },
        { id: 2, name: 'Cafe', hex: '#8B4513' },
        { id: 3, name: 'Azul', hex: '#1E3A5F' }
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

  selectColor(e) {
    const color = e.currentTarget.dataset.color;
    this.setData({
      selectedColor: color.id
    });
  },

  addToCart() {
    const { product, selectedColor } = this.data;
    
    my.showToast({
      content: 'Producto agregado al carrito',
      type: 'success',
      duration: 2000
    });

    console.log('Added to cart:', {
      productId: product.id,
      colorId: selectedColor
    });
  }
});
