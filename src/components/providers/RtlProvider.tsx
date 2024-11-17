// RtlProvider.tsx
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { ReactNode } from 'react';

// Create the cache with RTL support
const cacheRtl = createCache({
  key: 'mui-rtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

interface RtlProviderProps {
  children: ReactNode;
}

function RtlProvider({ children }: RtlProviderProps) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}

export default RtlProvider;
