import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense,startRemoveExpense} from '../actions/expenses';
import OptionModal from './OptionModal';
import Modal from 'react-modal';

export class EditExpensePage extends React.Component{

    state = {
        ModalsOn: false
    }

    componentDidMount() {
        Modal.setAppElement('body');
    }

    onSubmit = (expense) =>{
        this.props.startEditExpense(this.props.expense.id,expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.startRemoveExpense({id:this.props.expense.id})
        this.props.history.push('/');
    }

    handleRemove = () =>{
        this.setState(()=>{
            return {
                ModalsOn: true
            }
        })
    }

    handleModaloff =() =>{
        this.setState(()=>{
            return{
                ModalsOn: undefined
            }
        })
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense = {this.props.expense}
                        onSubmit = {this.onSubmit}
                    />
                    <button className="button button--secondary" onClick = {this.handleRemove}>Remove Expense</button>
                </div>
                <OptionModal 
                    ModalsOn={this.state.ModalsOn}
                    handleModaloff={this.handleModaloff}
                    onRemove={this.onRemove}
                />     
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        startEditExpense: (id,expense) => {
            dispatch(startEditExpense(id,expense))
        },
        startRemoveExpense: (data) =>{
            dispatch(startRemoveExpense(data))
        }
    };
}

const mapStateToProps = (state, props) => {
    return{
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
}

//props in the EditExpensePage can be passed to HOC and use it 

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)