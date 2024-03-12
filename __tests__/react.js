import React from 'react';
import * as TestingLibrary from '@testing-library/react';
import App from '../src/App.jsx';
import NavComponent from '../src/components/NavComponent';
import '@testing-library/jest-dom'

const { render, screen, waitFor ,getAllByRole, findByRole, getByRole, getByDisplayValue,findAllByRole , fireEvent} = TestingLibrary;

describe('Testing React Components', () => {
    
  describe('Testing Title Header', () => {
    let testApp;

    
    
    beforeAll(() => {
      testApp = render(<App />);
    });

    test('Renders Title on Nav Bar', () => {
      
        const titleElement = screen.getByText('PetLogger');
        expect(titleElement).toBeInTheDocument();
    });
 
  });
});