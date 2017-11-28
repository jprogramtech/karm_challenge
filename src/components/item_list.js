import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems } from '../actions/';
import { deleteItem } from '../actions';


class ItemList extends Component {

    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        this.props.getItems();
    }

    renderPosts() {
        return Object.keys(this.props.items).map((key)=>{
            const name = this.props.items[key].name;
            const desc = this.props.items[key].description;
            const price = this.props.items[key].price;
            const id = this.props.items[key].id
            return (<tr key={key}><td><Link to={`item/${id}`}>{name}</Link></td><td>{desc}</td><td>{price}</td><td><button onClick={()=> this.deleteItem(id)}>Delete</button></td></tr>)
        });
    }
    
    deleteItem(id) {
        this.props.deleteItem(id);
    }

    render() {
        if(Object.keys(this.props.items).length === 0){
            return(<div></div>) ;
        }

        return (
            <div>
                <br/>
                <br/>
                <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderPosts()}
                </tbody>
            </table>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {items: state.items}
}

export default connect(mapStateToProps, {getItems, deleteItem})(ItemList);