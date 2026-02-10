// components/layout/AdsterraLayoutWrapper.jsx
"use client";

import { useEffect, useRef } from 'react';
import { getAIOptimizer } from '../../utils/adsterra';

export default function AdsterraLayoutWrapper({ children, countryCode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized.current) {
        const optimizer = getAIOptimizer();
        if (optimizer) {
            optimizer.setGeo(countryCode);
        }

        const nativeContainer = document.getElementById('container-8c7f2de772cb57ee550b5c2d23d82fc2');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/8c7f2de772cb57ee550b5c2d23d82fc2/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/80/ff/3b/80ff3b0b8d004192fb02b23738342a3e.js' }
        ];

        visibleAds.forEach(s => {
            if(document.querySelector(`script[src="${s.src}"]`)) return;
            const el = document.createElement('script');
            el.src = s.src;
            el.async = true;
            
            // PERBAIKAN: Masukkan script native ke kontainer footer jika ada
            if (s.id === 'native' && nativeContainer) {
                nativeContainer.appendChild(el);
            } else {
                document.body.appendChild(el);
            }
        });

        setTimeout(() => {
            if(document.querySelector(`script[src*="0fc3a5e777e9fb121ef1ded92e6d8df0"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/0f/c3/a5/0fc3a5e777e9fb121ef1ded92e6d8df0.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}