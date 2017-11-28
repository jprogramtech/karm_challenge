import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../actions';
import { Link } from 'react-router-dom';

class ItemDetail extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getItem(id);
    }

    render() {
        const { item } = this.props;
        console.log('This is item ', item);
        if(!item){
        return (<div>Loading...</div>);
        }

        return (
            <div className="first">
                <Link to="/">Back Item creation</Link>
                <h1>Detail View</h1>
                <div className="itemDetail">
                    <h3>Name: { item.name }</h3>
                    <h3>Desritpion: { item.description } </h3>
                    <h3>Price: { item.price } </h3>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ items }, ownProps) {
    return { item: items[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {getItem})(ItemDetail);