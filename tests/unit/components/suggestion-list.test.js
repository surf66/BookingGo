import React from 'react';
import { SuggestionList } from '../../../src/js/components/suggestion-list';
import SuggestionsService from '../../../src/js/services/suggestions-service';

const mockSuggestions = [
  { name: 'Manchester Airport', city: 'Manchester', country: 'UK' },
  { name: 'Wigan Pier', city: 'Greater Manchester', country: 'UK' }
];

test('should match snapshot when no suggestions provided', () => {
  const component = mount(<SuggestionList />);

  expect(component).toMatchSnapshot();
});

test('should match snapshot when suggestions provided', () => {
  const component = mount(<SuggestionList />);
  component.setState({ suggestions: mockSuggestions });
  component.update();

  expect(component).toMatchSnapshot();
});

test('should call SuggestionService when getSuggestions is called', async () => {
  spyOn(SuggestionsService, 'getSuggestions').and.returnValue(mockSuggestions);
  
  const mockSearchTerm = 'testsearchterm';
  const component = shallow(<SuggestionList />);

  await component.instance().getSuggestions(mockSearchTerm);

  expect(SuggestionsService.getSuggestions).toHaveBeenCalledWith(mockSearchTerm);
});

test('should set suggestions in state when getSuggestions is called and suggestions are returned', async () => {
  SuggestionList.prototype.setState = jasmine.createSpy();
  spyOn(SuggestionsService, 'getSuggestions').and.returnValue(mockSuggestions);
  
  const mockSearchTerm = 'testsearchterm';
  const component = shallow(<SuggestionList />);

  await component.instance().getSuggestions(mockSearchTerm);

  expect(SuggestionList.prototype.setState).toHaveBeenCalledWith({ suggestions: mockSuggestions });
});

test('should call getSuggestions when component receives updated props', () => {
  SuggestionList.prototype.getSuggestions = jasmine.createSpy();
  const component = mount(<SuggestionList />);
  const mockNewProps = { searchTerm: 'testsearchterm' };

  component.instance().componentWillReceiveProps(mockNewProps);

  expect(SuggestionList.prototype.getSuggestions).toHaveBeenCalledWith(mockNewProps.searchTerm);
});