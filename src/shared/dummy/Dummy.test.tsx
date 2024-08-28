import React from 'react';

import ShallowRenderer from 'react-shallow-renderer';

import { Dummy } from './Dummy';

describe('<Dummy />', () => {
    test('should render', () => {
        // Given

        // When
        const renderer = new ShallowRenderer();
        const view = renderer.render(
            <Dummy
                name="Dummy"
                upperCase={true}
            />
        );

        // Then
        expect(view).toMatchSnapshot();
    });
});
