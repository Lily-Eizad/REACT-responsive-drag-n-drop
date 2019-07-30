import React, { Component } from 'react';
import './list-container.css';
// import ListItem from './list-item';

class ListContainer extends Component {


    onDragOver(ev) {
        ev.preventDefault();
      }

      onDrop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if (data === 'draggable') {
            ev.target.appendChild(document.getElementById(data));
        }
      }

    render() {
        return (
            <div className="list-container">
              <div className="list-item-container" onDrop={(e) => this.onDrop(e)} onDragOver={(e) => this.onDragOver(e)}>
                  
              </div>
              <div className="list-item-container" onDrop={(e) => this.onDrop(e)} onDragOver={(e) => this.onDragOver(e)}></div>
              <div className="list-item-container" onDrop={(e) => this.onDrop(e)} onDragOver={(e) => this.onDragOver(e)}></div>
              <div className="list-item-container" onDrop={(e) => this.onDrop(e)} onDragOver={(e) => this.onDragOver(e)}></div>
              <div className="list-item-container" onDrop={(e) => this.onDrop(e)} onDragOver={(e) => this.onDragOver(e)}></div>
            </div>
          );
    }
  }
  
  export default ListContainer;