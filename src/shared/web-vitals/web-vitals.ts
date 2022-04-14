import { onCLS, onFID, onLCP } from 'web-vitals';
import type { ReportCallback } from 'web-vitals';

const addWebVitalsReporting = () => {
    const logToConsole: ReportCallback = ({ name, id, delta, rating }) => {
        console.log(`${name} matching ID ${id} changed by ${delta} and the rating is ${rating}`);
    };

    onCLS(logToConsole);
    onFID(logToConsole);
    onLCP(logToConsole);
};

export { addWebVitalsReporting };
