Page({
  data: {
    brandName: 'MARIO HERNÁNDEZ',
    isMenuOpen: true,
    menuAnimated: false,
    heroImageSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mario_Hernandez_Mini_APP-OEOPmwvUYgkHsgxOqtZwmHgfiAGNrp.png',
    menuItems: [
      { 
        id: 1, 
        label: 'Mujer', 
        route: '/pages/category/index?type=mujer' 
      },
      { 
        id: 2, 
        label: 'Hombre', 
        route: '/pages/category/index?type=hombre' 
      },
      { 
        id: 3, 
        label: 'Unisex', 
        route: '/pages/category/index?type=unisex' 
      },
      { 
        id: 4, 
        label: 'Colecciones', 
        route: '/pages/category/index?type=colecciones' 
      },
      { 
        id: 5, 
        label: 'Outlet', 
        route: '/pages/category/index?type=outlet' 
      },
      { 
        id: 6, 
        label: 'Outlet', 
        route: '/pages/category/index?type=outlet' 
      },
      { 
        id: 7, 
        label: 'Outlet', 
        route: '/pages/category/index?type=outlet' 
      },
      { 
        id: 8, 
        label: 'Outlet', 
        route: '/pages/category/index?type=outlet' 
      }
    ]
  },

  onLoad() {
    // Iniciar animacion del menu despues de un pequeno delay
    setTimeout(() => {
      this.setData({
        menuAnimated: true
      });
    }, 100);
  },

  handleToggleMenu() {
    this.setData({
      isMenuOpen: !this.data.isMenuOpen
    });
  },

  handleMenuItemTap(item) {
    console.log('Menu item tapped:', item.label);
  }
});
