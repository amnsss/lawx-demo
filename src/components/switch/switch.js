import { Component, PropTypes } from 'labrador';

const { bool, func } = PropTypes;

class Switch extends Component {
  static propTypes = {
    checked: bool,
    defaultChecked: bool,
    // disabled: bool,
    onChange: func
  };

  static defaultProps = {
    checked: false,
    defaultChecked: false,
    disabled: false,
    onChange: () => {}
  };

  state = {
    checked: this.props.defaultChecked,
    disabled: false
  };

  // children() {
  //   return {};
  // }

  // onLoad() {
  // }

  // onReady() {
  // }

  onUpdate(props) {
    if (props.checked !== this.props.checked) {
      this.setState({ checsked: props.checked });
    }
  }

  // onShow() {
  // }

  // onHide() {
  // }

  // onUnload() {
  // }

  switchChangeValue() {
    const checked = !this.state.checked;
    this.setState({ checked });
    this.props.onChange(checked);
  }

}

export default Switch;

// export default connect(
//   (state)=>({})
// )(switch);
