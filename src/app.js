import { Component } from 'react';
import { Provider } from 'mobx-react';
import store from 'src/store';
import 'src/styles/index.scss';
// import 'taro-ui/dist/style/index.scss';

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider {...store}>
      {this.props.children}
    </Provider>;
  }
}

export default App;
