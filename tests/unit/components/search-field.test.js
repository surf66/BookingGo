import React from 'react';
import { SearchField } from '../../../src/js/components/search-field';

test('should match snapshot', async () => {
  const component = mount(<SearchField />);

  expect(component).toMatchSnapshot();
});

test('should call setSearchTerm when handleChange is called with a searchTerm with length greater than 1', () => {
  SearchField.prototype.setSearchTerm = jasmine.createSpy();
  const component = mount(<SearchField />);
  const mockEvent = {
    target: {
      value: 'testsearchterm'
    }
  }

  component.instance().handleChange(mockEvent);

  setTimeout(() => {
    expect(SearchField.prototype.setSearchTerm).toHaveBeenCalledWith(mockEvent.target.value);
  }, 200);
});

test('should not call setSearchTerm when handleChange is called with a searchTerm with length less than 1', () => {
  SearchField.prototype.setSearchTerm = jasmine.createSpy();
  const component = mount(<SearchField />);
  const mockEvent = {
    target: {
      value: 't'
    }
  }

  component.instance().handleChange(mockEvent);

  expect(SearchField.prototype.setSearchTerm).not.toHaveBeenCalled();
});

test('should call setSearchTerm prop with searchTerm when storeSearchTerm is called', () => {
  let setSearchTermMock = jasmine.createSpy();
  const component = mount(<SearchField setSearchTerm={setSearchTermMock} />);
  const searchTerm = 'testsearchterm';

  component.instance().storeSearchTerm(searchTerm);

  setTimeout(() => {
    expect(setSearchTermMock).toHaveBeenCalledWith(searchTerm);
  }, 200);
});