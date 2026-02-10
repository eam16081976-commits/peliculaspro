import { headers } from 'next/headers'; 
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AdsterraLayoutWrapper from '../components/layout/AdsterraLayoutWrapper'; 
import AdBanner from '../components/ads/AdBanner'; 

export const metadata = {
  title: 'Watch Movies Online Free | Stream TV Series HD - PeliculasPro',
  description: 'Find where to watch movies & TV series online for free or on Netflix, Disney+, Prime Video. PeliculasPro tracks 10,000+ movies, 5,000+ shows, box office results, actor info, and provides HD streaming guides across all genres (action, horror, romance, anime, drakor).',
  keywords: 'watch movies, stream TV series, movie database, where to watch, streaming guide, Netflix, Disney+, Prime Video, free movies online, HD streaming, actor profiles, box office results',
  openGraph: {
    title: 'Watch Movies Online Free | Stream TV Series HD - PeliculasPro',
    description: 'Find where to watch movies & TV series online for free or on Netflix, Disney+, Prime Video. Get streaming guides, actor profiles, and genre recommendations.',
    url: 'https://peliculaspro.netlify.app',
    siteName: 'PeliculasPro',
    images: [
      {
        url: 'https://live.staticflickr.com/65535/55087845069_18949483bd_b.jpg',
        width: 1200,
        height: 630,
        alt: 'PeliculasPro - Watch Movies Online Free and Stream TV Series',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@WatchStream123',
    creator: '@WatchStream123',
    title: 'Watch Movies Online Free | Stream TV Series HD - PeliculasPro',
    description: 'Find where to watch movies & TV series online for free or on Netflix, Disney+, Prime Video. Streaming guides and recommendations.',
    images: ['https://live.staticflickr.com/65535/55087845069_18949483bd_b.jpg'],
  },
  // Tambahkan tag meta eksplisit untuk Facebook
  other: {
    'fb:app_id': '100074345305108',
  },
};

export default async function RootLayout({ children }) {
  // Unwrapping headers secara async (Standar Next.js 15/16)
  const headersList = await headers();
  const countryCode = headersList.get('x-vercel-ip-country') || headersList.get('cf-ipcountry') || 'ID';

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="3RxWSZAc7n6MlrSEuHB17M-mhcnQq_lqOtoAnovXlNk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://peliculaspro.netlify.app" />
        
        {/* Structured Data untuk SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PeliculasPro",
              "url": "https://peliculaspro.netlify.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://peliculaspro.netlify.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "description": "Find where to watch movies & TV series online for free or on Netflix, Disney+, Prime Video.",
              "keywords": "watch movies, stream TV series, movie database, where to watch, streaming guide"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PeliculasPro",
              "url": "https://peliculaspro.netlify.app",
              "logo": "https://live.staticflickr.com/65535/55087845069_18949483bd_b.jpg",
              "description": "Streaming guide and movie database",
              "sameAs": [
                "https://twitter.com/WatchStream123",
                "https://facebook.com/PeliculasPro"
              ]
            })
          }}
        />
      </head>
      <body>
        <AdsterraLayoutWrapper countryCode={countryCode}>
          <div className="flex flex-col min-h-screen bg-slate-900">
            <header className="w-full max-w-7xl mx-auto px-4 py-4 sticky top-0 z-50 bg-slate-900 shadow-lg">
              <Navbar />
            </header>
            
            <div className="w-full bg-slate-900 py-2">
              <div className="max-w-7xl mx-auto px-4 flex justify-center">
                <AdBanner 
                  adId="728x90_header"
                  scriptKey="3bae64e3b5c2e197b2565368b4e381f4"
                  height={90} 
                  width={728}
                  className="rounded-lg overflow-hidden shadow-lg"
                />
              </div>
            </div>
            
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8 mt-2">
              {children}
            </main>
            
            <footer className="w-full max-w-7xl mx-auto px-4 py-8">
              <div id="container-8c7f2de772cb57ee550b5c2d23d82fc2"></div>
              <Footer />
            </footer>
          </div>
        </AdsterraLayoutWrapper>
      </body>
    </html>
  );
}