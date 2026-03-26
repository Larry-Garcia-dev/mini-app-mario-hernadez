Component({
  props: {
    id: {
      type: Number,
      value: 0
    },
    name: {
      type: String,
      value: ''
    },
    description: {
      type: String,
      value: ''
    },
    image: {
      type: String,
      value: ''
    },
    price: {
      type: String,
      value: ''
    },
    originalPrice: {
      type: String,
      value: ''
    },
    currency: {
      type: String,
      value: '$'
    },
    badge: {
      type: String,
      value: ''
    },
    onTap: {
      type: Function,
      value: () => {}
    }
  },

  methods: {
    onProductTap() {
      const productData = {
        id: this.props.id,
        name: this.props.name,
        price: this.props.price
      };

      if (this.props.onTap) {
        this.props.onTap(productData);
      }

      my.navigateTo({
        url: `/pages/productdetail/index?id=${this.props.id}`,
        fail: (err) => {
          console.error('Navigation failed:', err);
        }
      });
    }
  }
});
