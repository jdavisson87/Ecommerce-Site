// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

// import CartDropdown from './cart-dropdown.component';
// import CartItem from '../cart-item/cart-item.component';

// import { toggleCartHidden } from '../../redux/cart/cart.actions';

// describe('CartDropdown component', () => {
//   let wrapper;
//   let mockHistory;
//   let mockDispatch;
//   let mockProps;
//   const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

//   beforeEach(() => {
//     mockHistory = {
//       push: jest.fn(),
//     };

//     mockDispatch = jest.fn();

//     mockProps = {
//       cartItems: mockCartItems,
//       history: mockHistory,
//       dispatch: mockDispatch,
//     };

//     wrapper = toJson(shallow(<CartDropdown {...mockProps} />));
//   });

//   it('should render CartDropdown component', () => {
//     expect(wrapper).toMatchSnapshot();
//   });

//   it('should call history.push when button is clicked', () => {
//     //   wrapper.find('CartDropdownButton').simulate('click');
//     //   expect(mockHistory.push).toHaveBeenCalled();
//     //   expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
//     // expect(wrapper.length).toEqual(1);
//     // console.log(wrapper);
//     console.log(toJson(shallow(<CartDropdown {...mockProps} />)));
//   });

//   // it('should render an equal number of CartItem components as the cartItems prop', () => {
//   //   expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
//   // });

//   // it('should render EmptyMessageContainer if cartItems is empty', () => {
//   //   const mockProps = {
//   //     cartItems: [],
//   //     history: mockHistory,
//   //     dispatch: mockDispatch,
//   //   };

//   //   const newWrapper = shallow(<CartDropdown {...mockProps} />);
//   //   expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
//   // });
// });
