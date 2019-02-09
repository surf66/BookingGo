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
  const component = mount(<SuggestionList searchTerm="Manchester" />);
  component.setState({ suggestions: mockSuggestions });
  component.update();

  expect(component).toMatchSnapshot();
});

test('should call SuggestionService when getSuggestions is called', async () => {
  spyOn(SuggestionsService, 'getSuggestions').and.returnValue(mockSuggestions);
  let isRequestingMock = jasmine.createSpy();
  
  const mockSearchTerm = 'testsearchterm';
  const component = shallow(<SuggestionList isRequesting={isRequestingMock} searchTerm="Manchester" />);

  await component.instance().getSuggestions(mockSearchTerm);

  expect(isRequestingMock).toHaveBeenCalledWith(true);
  expect(SuggestionsService.getSuggestions).toHaveBeenCalledWith(mockSearchTerm);
});

test('should set suggestions in state when getSuggestions is called and suggestions are returned', async () => {
  SuggestionList.prototype.setState = jasmine.createSpy();
  let isRequestingMock = jasmine.createSpy();
  spyOn(SuggestionsService, 'getSuggestions').and.returnValue(mockSuggestions);
  
  const mockSearchTerm = 'testsearchterm';
  const component = shallow(<SuggestionList isRequesting={isRequestingMock} />);

  await component.instance().getSuggestions(mockSearchTerm);

  expect(isRequestingMock).toHaveBeenCalledWith(true);
  expect(SuggestionList.prototype.setState).toHaveBeenCalledWith({ suggestions: mockSuggestions });
});

test('should set suggestions in state to an empty array when searchTerm is less than 1', async () => {
  SuggestionList.prototype.setState = jasmine.createSpy();
  const mockSearchTerm = 't';
  const component = shallow(<SuggestionList />);

  await component.instance().getSuggestions(mockSearchTerm);

  expect(SuggestionList.prototype.setState).toHaveBeenCalledWith({ suggestions: [] });
});

test('should call getSuggestions when component receives updated props', () => {
  SuggestionList.prototype.getSuggestions = jasmine.createSpy();
  const component = mount(<SuggestionList />);
  const mockNewProps = { searchTerm: 'testsearchterm' };

  component.instance().componentWillReceiveProps(mockNewProps);

  expect(SuggestionList.prototype.getSuggestions).toHaveBeenCalledWith(mockNewProps.searchTerm);
});