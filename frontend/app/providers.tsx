// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemeProvider
        attribute="class"
        defaultTheme="light"
        themes={['light', 'dark', 'modern']}
      >
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}
