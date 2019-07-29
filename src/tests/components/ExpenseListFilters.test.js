import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altfilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters = {filters}
            setTextFilter={setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
        );
});

test('should render expenselistfilter correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render expenselistfilter with all data correctly',()=>{
    wrapper.setProps({
        filters:altfilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', ()=>{
    const value = 'textchanged'
    wrapper.find('input').simulate('change',{
        target:{value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
});

test('should sort by date', ()=>{
    const value = 'date';
    wrapper.setProps({
        filters:altfilters
    })
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenCalled();
})


test('should sort by amount', ()=>{
    const value = 'amount';
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date change', ()=>{
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    
});

test('should handle on focus change',()=>{
    const calenderFocus = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocus);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocus);
})
// test('should call onsubmit prop for valid form submission', ()=>{
//     const onSubmitSpy = jest.fn();
//     const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
//     wrapper.find('form').simulate('submit',{
//         preventDefault:()=>{}
//     });
//     expect(wrapper.state('error')).toBe('');
//     expect(onSubmitSpy).toHaveBeenLastCalledWith({
//         description:expenses[0].description,
//         amount:expenses[0].amount,
//         note:expenses[0].note,
//         createdAt: expenses[0].createdAt
//     })
// });

// test('should not set amount if not valid input',()=>{
//     const value = '12.122';
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('input').at(1).simulate('change',{
//         target:{value},
//     });
//     expect(wrapper.state('amount')).toBe('');
// });