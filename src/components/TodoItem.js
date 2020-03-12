import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todox.completed ? 'line-through' : 'none'
        }
    }



    render() {  
        const { id, title} = this.props.todox;
        return (
            <div style={this.getStyle()}> 
                <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)} />
                <p>{title}</p>
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todox: PropTypes.object.isRequired
}
 
const btnStyle = { 
        background: 'red',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        bordeRadius: '50%',
        cursor: 'pointer',
        float: 'right',
        // marginTop: ' 10px'
}

export default TodoItem
