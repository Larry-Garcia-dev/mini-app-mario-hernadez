Component({
  props: {
    src: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'aspectFill'
    },
    title: {
      type: String,
      value: ''
    },
    subtitle: {
      type: String,
      value: ''
    },
    showOverlay: {
      type: Boolean,
      value: false
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
    onHeroTap() {
      if (this.props.onTap) {
        this.props.onTap();
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
