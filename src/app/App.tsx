import React from 'react';
import type { FunctionComponent, ReactElement } from 'react';

import { Dummy } from '@/shared';

const App: FunctionComponent = (): ReactElement => {
    return (
        <div>
            <h1>Hello, world!</h1>

            <Dummy />
        </div>
    );
};

export { App };
