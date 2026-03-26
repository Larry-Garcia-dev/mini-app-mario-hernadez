Page({
  data: {
    brandName: 'MARIO HERNÁNDEZ',
    user: {
      name: 'Juan Pérez',
      email: 'juan.perez@email.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'
    }
  },

  goToOrders() {
    my.showToast({
      content: 'Próximamente',
      type: 'none'
    });
  },

  goToAddresses() {
    my.navigateTo({
      url: '/pages/address/index'
    });
  },

  goToFavorites() {
    my.showToast({
      content: 'Próximamente',
      type: 'none'
    });
  },

  goToSettings() {
    my.showToast({
      content: 'Próximamente',
      type: 'none'
    });
  },

  goToHelp() {
    my.showToast({
      content: 'Próximamente',
      type: 'none'
    });
  },

  handleLogout() {
    my.confirm({
      title: 'Cerrar Sesión',
      content: '¿Está seguro que desea cerrar sesión?',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      success: (res) => {
        if (res.confirm) {
          my.navigateTo({
            url: '/pages/index/index'
          });
        }
      }
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
  }
});
