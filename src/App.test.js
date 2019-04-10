import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';

import SignInForm from './components/SignInForm';
import Header from './components/Header';
import Footer from './components/Footer';


// test cases for Header
describe('<Header/>', () =>{
  const wrapper = shallow(<Header/>);
  it('should be Logo to be exist',() =>{
    expect(wrapper.find('.header__logo').exists()).toBe(true);
  })

 it('should be search-box to disappear firstly',() =>{
  expect(wrapper.find('.header__input').exists()).toBe(false);
  })

})


// test cases for footer
describe('<Footer/>', () =>{
  const wrapper = shallow(<Footer/>);
  it('should be three footer blocks',() =>{
    expect(wrapper.find('.footer').length).toBe(3);
  })

  it('should be item image to be exist',() =>{
    expect(wrapper.find('.footer__img').exists()).toBe(true);
  })

  it('should be item image to be exist',() =>{
    expect(wrapper.find('.footer__name').exists()).toBe(true);
  })

  it('should be item image to be exist',() =>{
    expect(wrapper.find('.footer__price').exists()).toBe(true);
  })

})


// test cases for sign in form
describe('<SignInForm>',()=>{
  it('matches the snapshot',()=>{
    const tree= shallow(<Footer/>);
    expect(toJson(tree)).toMatchSnapshot();
  })
})
