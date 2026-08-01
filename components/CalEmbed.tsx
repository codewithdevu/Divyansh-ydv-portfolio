'use client';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

export default function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#ffffff' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return null;
}
