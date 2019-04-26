import React from 'react';
import List from './List';

class CompletedSection extends React.Component {
    render() {
      return (
        <div>
          <div className="row">
            <div className="col">
              <h4>{this.props.num} Completed(s) Item</h4>
              </div>
              <div className="col" onClick={this.props.showCompleted}>
              Hide
            </div>
          </div>
          <div className="row">
            <div className="col">
              <List />
              </div>
            </div>
          </div>
      );
    }
  }

export default CompletedSection;
