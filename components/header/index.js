Component({
  props: {
    brandName: {
      type: String,
      value: 'MARIO HERNÁNDEZ'
    },
    showMenuIcon: {
      type: Boolean,
      value: false
    },
    showToggle: {
      type: Boolean,
      value: true
    },
    isMenuOpen: {
      type: Boolean,
      value: false
    },
    onToggle: {
      type: Function,
      value: () => {}
    }
  },

  methods: {
    onHeaderTap() {
      if (this.props.onToggle) {
        this.props.onToggle();
      }
    }
  }
});
