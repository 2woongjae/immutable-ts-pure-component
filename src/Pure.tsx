import * as React from 'react';

interface PureProps {
  count: number;
}

class Pure extends React.Component<PureProps, {}> {
  shouldComponentUpdate(prevProps: PureProps, prevState: {}) {
    if (prevProps.count > 20) {
      return true;
    }
    return false;
  }
  render() {
    return <div>{JSON.stringify(this.props)}</div>;
  }
}

export default Pure;
