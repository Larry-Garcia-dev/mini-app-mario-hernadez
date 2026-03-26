Page({
  data: {
    formData: {
      direccion: 'Calle 21 #3-31',
      ciudad: 'Bogotá D.C',
      apodo: 'Trabajo',
      detalles: 'Edificio C, Apartamento 204',
      comentarios: 'Colocar la comida en una zona alta de la recepción.'
    }
  },

  handleInput(e) {
    const field = e.currentTarget.dataset.field;
    const value = e.detail.value;
    
    this.setData({
      [`formData.${field}`]: value
    });
  },

  handleSave() {
    const { formData } = this.data;
    
    if (!formData.direccion || !formData.ciudad) {
      my.showToast({
        content: 'Por favor complete los campos requeridos',
        type: 'fail'
      });
      return;
    }

    my.setStorage({
      key: 'userAddress',
      data: formData,
      success: () => {
        my.showToast({
          content: 'Dirección guardada',
          type: 'success'
        });
        
        setTimeout(() => {
          my.navigateBack();
        }, 1500);
      }
    });
  }
});
