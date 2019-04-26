import React from 'react';

class Header extends React.Component {
  render() {
    const {onCreateNewItem} = this.props;
    return (
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <h1>{this.props.title}</h1>
        <button onClick={onCreateNewItem}> +</button>
      </div>
      
    );
  }
}

export default Header;
