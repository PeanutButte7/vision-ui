'use client';

import * as React from 'react';
import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
    return <div>{children}</div>;
}
