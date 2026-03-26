Page({
  data: {
    brandName: 'MARIO HERNÁNDEZ',
    pageTitle: 'Categorías',
    categoryType: '',
    categories: []
  },

  onLoad(query) {
    const type = query.type || 'mujer';
    this.setData({
      categoryType: type,
      pageTitle: this.formatTitle(type),
      categories: this.getCategoriesByType(type)
    });
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

  handleCategoryTap(category) {
    console.log('Category selected:', category.title);
  }
});
