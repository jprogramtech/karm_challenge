import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createItem } from '../actions';
import { getItems } from '../actions';


class ItemCreator extends Component {
    
        renderField(field) {
            const { meta: {touched, error} } = field;
            return (
                <div>
                    <div className="inputError">
                        {touched ? error: ''}
                    </div>
                    <label>{field.label}</label>
                    <input type="text" {...field.input}/>
                </div>
            );
        }
        
        onSubmit(values) {
            this.props.createItem(values, ()=>{
                this.props.getItems();
            });
        }
    
        render() {
            const { handleSubmit} = this.props; // lecture 138x
            return (
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Name"
                        name="name"
                        component={this.renderField}
                        />
                    <Field
                        label="Description"
                        name="description"
                        component={this.renderField}
                        />
                    <Field
                        label="Price"
                        name="price"
                        component={this.renderField}
                    />
                    <div>
                        <button className="inputSubmit" type="submit">Submit</button>
                    </div>
                </form>
            );
        }
    }
    
    
    function validate(values) {
        const errors = {};
    
        // Validate the input from 'values'
        if(!values.name) {
            errors.name = "Name Required";
        }
    
        if(!values.description) {
            errors.description = 'Description required';
        }
    
        if(!values.price) {
            errors.price = 'Price required';
        }
        return errors;
    }
    
    
    export default reduxForm({
        validate,
        form: 'PostItemForm'
    })(
    connect(null, {createItem, getItems})(ItemCreator)
    );