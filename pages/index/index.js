Page({
  data: {
    brandName: 'MARIO HERNÁNDEZ',
    isMenuOpen: true,
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
      }
    ]
  },

  onLoad() {
    console.log('Index page loaded');
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
