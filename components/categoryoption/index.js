Component({
  props: {
    id: {
      type: Number,
      value: 0
    },
    title: {
      type: String,
      value: ''
    },
    subtitle: {
      type: String,
      value: ''
    },
    image: {
      type: String,
      value: ''
    },
    route: {
      type: String,
      value: ''
    },
    onTap: {
      type: Function,
      value: () => {}
    }
  },

  methods: {
    onCategoryTap() {
      const categoryData = {
        id: this.props.id,
        title: this.props.title,
        route: this.props.route
      };

      if (this.props.onTap) {
        this.props.onTap(categoryData);
      }

      if (this.props.route) {
        my.navigateTo({
          url: this.props.route,
          fail: (err) => {
            console.error('Navigation failed:', err);
          }
        });
      }
    }
  }
});
