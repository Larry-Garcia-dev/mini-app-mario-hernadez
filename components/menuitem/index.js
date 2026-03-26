Component({
  props: {
    id: {
      type: Number,
      value: 0
    },
    label: {
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
    onItemTap() {
      const itemData = {
        id: this.props.id,
        label: this.props.label,
        route: this.props.route
      };

      if (this.props.onTap) {
        this.props.onTap(itemData);
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
