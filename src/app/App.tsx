import React from 'react';
import type { FunctionComponent, ReactElement } from 'react';

import { Dummy } from '@/shared';

import './App.css';

const App: FunctionComponent = (): ReactElement => {
    return (
        <main role="main">
            <h1 className="text-3xl font-bold underline">Hello, world!</h1>

            <progress
                className="progress progress-primary w-56"
                value={75}
                max="100"
            />

            <Dummy
                name="Dummy"
                upperCase={true}
            />
        </main>
    );
};

export { App };
