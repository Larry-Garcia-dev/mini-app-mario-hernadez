Page({
  data: {
    brandName: 'MARIO HERNÁNDEZ',
    pageTitle: 'Categorías',
    categoryType: '',
    categories: [],
    visibleItems: [],
    exitingItem: -1,
    isNavigating: false
  },

  onLoad(query) {
    const type = query.type || 'mujer';
    const categories = this.getCategoriesByType(type);
    
    // Inicializar todos los items como invisibles
    const visibleItems = categories.map(() => false);
    
    this.setData({
      categoryType: type,
      pageTitle: this.formatTitle(type),
      categories: categories,
      visibleItems: visibleItems
    });

    // Mostrar cada item con delay escalonado
    this.animateItems(categories.length);
  },

  animateItems(totalItems) {
    const delay = 150; // ms entre cada item
    
    for (let i = 0; i < totalItems; i++) {
      setTimeout(() => {
        const visibleItems = this.data.visibleItems.slice();
        visibleItems[i] = true;
        this.setData({ visibleItems: visibleItems });
      }, delay * i);
    }
  },

  formatTitle(type) {
    const titles = {
      mujer: 'Mujer',
      hombre: 'Hombre',
      unisex: 'Unisex',
      colecciones: 'Colecciones',
      outlet: 'Outlet'
    };
    return titles[type] || 'Categorías';
  },

  getCategoriesByType(type) {
    const allCategories = {
      mujer: [
        { 
          id: 1, 
          title: 'Bolsos', 
          subtitle: 'Nueva colección',
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
          route: '/pages/products/index?category=bolsos&type=mujer'
        },
        { 
          id: 2, 
          title: 'Billeteras', 
          subtitle: 'Cuero premium',
          image: 'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400',
          route: '/pages/products/index?category=billeteras&type=mujer'
        },
        { 
          id: 3, 
          title: 'Accesorios', 
          subtitle: 'Complementos',
          image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400',
          route: '/pages/products/index?category=accesorios&type=mujer'
        },
        { 
          id: 4, 
          title: 'Maletas', 
          subtitle: 'Viaje con estilo',
          image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400',
          route: '/pages/products/index?category=maletas&type=mujer'
        },
        { 
          id: 5, 
          title: 'Calzado', 
          subtitle: 'Elegancia',
          image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400',
          route: '/pages/products/index?category=calzado&type=mujer'
        },
        { 
          id: 6, 
          title: 'Cinturones', 
          subtitle: 'Detalles únicos',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
          route: '/pages/products/index?category=cinturones&type=mujer'
        }
      ],
      hombre: [
        { 
          id: 1, 
          title: 'Maletines', 
          subtitle: 'Ejecutivo',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
          route: '/pages/products/index?category=maletines&type=hombre'
        },
        { 
          id: 2, 
          title: 'Billeteras', 
          subtitle: 'Cuero clásico',
          image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400',
          route: '/pages/products/index?category=billeteras&type=hombre'
        },
        { 
          id: 3, 
          title: 'Cinturones', 
          subtitle: 'Elegancia masculina',
          image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400',
          route: '/pages/products/index?category=cinturones&type=hombre'
        },
        { 
          id: 4, 
          title: 'Mochilas', 
          subtitle: 'Funcionalidad',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
          route: '/pages/products/index?category=mochilas&type=hombre'
        }
      ],
      unisex: [
        { 
          id: 1, 
          title: 'Mochilas', 
          subtitle: 'Versátiles',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
          route: '/pages/products/index?category=mochilas&type=unisex'
        },
        { 
          id: 2, 
          title: 'Maletas', 
          subtitle: 'Viajeros',
          image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400',
          route: '/pages/products/index?category=maletas&type=unisex'
        }
      ],
      colecciones: [
        { 
          id: 1, 
          title: 'Primavera 2024', 
          subtitle: 'Nueva temporada',
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
          route: '/pages/products/index?collection=primavera2024'
        },
        { 
          id: 2, 
          title: 'Edición Limitada', 
          subtitle: 'Exclusivo',
          image: 'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400',
          route: '/pages/products/index?collection=limitada'
        }
      ],
      outlet: [
        { 
          id: 1, 
          title: 'Bolsos', 
          subtitle: 'Hasta 50% OFF',
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
          route: '/pages/products/index?category=bolsos&outlet=true'
        },
        { 
          id: 2, 
          title: 'Accesorios', 
          subtitle: 'Hasta 40% OFF',
          image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400',
          route: '/pages/products/index?category=accesorios&outlet=true'
        }
      ]
    };

    return allCategories[type] || allCategories.mujer;
  },

  handleCategoryTap(e) {
    // Evitar multiples clicks durante la animacion
    if (this.data.isNavigating) return;

    const index = e.currentTarget.dataset.index;
    const route = e.currentTarget.dataset.route;
    const title = e.currentTarget.dataset.title;

    // Marcar que estamos navegando y cual item esta saliendo
    this.setData({
      isNavigating: true,
      exitingItem: index
    });

    // Esperar a que termine la animacion de fade-out (400ms) antes de navegar
    setTimeout(() => {
      my.navigateTo({
        url: route,
        success: () => {
          // Resetear el estado despues de navegar
          this.setData({
            exitingItem: -1,
            isNavigating: false
          });
        },
        fail: () => {
          this.setData({
            exitingItem: -1,
            isNavigating: false
          });
        }
      });
    }, 400);
  }
});
