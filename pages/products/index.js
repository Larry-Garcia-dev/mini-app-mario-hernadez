Page({
  data: {
    brandName: 'MARIO HERNÁNDEZ',
    searchQuery: '',
    products: [],
    filteredProducts: []
  },

  onLoad(query) {
    const category = query.category || '';
    const products = this.getProducts(category);
    
    this.setData({
      products: products,
      filteredProducts: products
    });
  },

  getProducts(category) {
    return [
      {
        id: 1,
        name: 'Morral Enzo Ébano Lt Palenque',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        price: '1.350.000',
        currency: '$'
      },
      {
        id: 2,
        name: 'Manos Libres Cuadrados Valle Café Lt Palenque',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
        price: '1.290.000',
        currency: '$'
      },
      {
        id: 3,
        name: 'Riñonera Londres Café Lt Palenque',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
        price: '879.000',
        currency: '$'
      },
      {
        id: 4,
        name: 'Morral Sling Sierra Negro Paso Alto',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
        price: '1.599.000',
        currency: '$'
      },
      {
        id: 5,
        name: 'Bolso Elegance Premium',
        image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400',
        price: '1.450.000',
        currency: '$'
      },
      {
        id: 6,
        name: 'Cartera Executive Negro',
        image: 'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400',
        price: '980.000',
        currency: '$'
      }
    ];
  },

  handleSearchInput(e) {
    const query = e.detail.value.toLowerCase();
    const filtered = this.data.products.filter(product => 
      product.name.toLowerCase().includes(query)
    );
    
    this.setData({
      searchQuery: query,
      filteredProducts: filtered
    });
  },

  handleFilterTap() {
    my.showActionSheet({
      items: ['Precio: Menor a Mayor', 'Precio: Mayor a Menor', 'Nombre A-Z', 'Nombre Z-A'],
      success: (res) => {
        this.sortProducts(res.index);
      }
    });
  },

  sortProducts(index) {
    let sorted = [...this.data.filteredProducts];
    
    switch(index) {
      case 0:
        sorted.sort((a, b) => parseFloat(a.price.replace(/\./g, '')) - parseFloat(b.price.replace(/\./g, '')));
        break;
      case 1:
        sorted.sort((a, b) => parseFloat(b.price.replace(/\./g, '')) - parseFloat(a.price.replace(/\./g, '')));
        break;
      case 2:
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 3:
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    
    this.setData({ filteredProducts: sorted });
  },

  handleProductTap(e) {
    const product = e.currentTarget.dataset.product;
    my.navigateTo({
      url: `/pages/productdetail/index?id=${product.id}`
    });
  },

  goToHome() {
    my.navigateTo({
      url: '/pages/index/index'
    });
  },

  goToCart() {
    my.navigateTo({
      url: '/pages/cart/index'
    });
  },

  goToProfile() {
    my.navigateTo({
      url: '/pages/profile/index'
    });
  }
});
