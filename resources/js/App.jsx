import React from 'react';
import { createRoot } from 'react-dom/client';
import Invitation from './Invitation.jsx';

const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(<Invitation />);
}
