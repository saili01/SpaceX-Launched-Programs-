import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App';
import { shallow } from 'enzyme';
import Filter from '../src/Components/Filter/FilterComponent';  
import { createRender } from '@material-ui/core/test-utils';

describe('<Filter />', () => {
  let render;

  before(() => {
    render = createRender();
  });

  it('should work', () => {
    const wrapper = render(<Filter />);
  });
});

it('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<App/>,div);
})

describe("Filter", () => {
    it("should render my component", () => {
      const wrapper = shallow(<Filter />);
    });
  });