import React from 'react';

import ShallowRenderer from 'react-shallow-renderer';

import { App } from './App';

describe('<App />', () => {
    test('should render', () => {
        // Given

        // When
        const renderer = new ShallowRenderer();
        const view = renderer.render(<App />);

        // Then
        expect(view).toMatchSnapshot();
    });
});
