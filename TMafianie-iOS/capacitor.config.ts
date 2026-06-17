import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tmafianie.app',
  appName: 'T Mafianie',
  webDir: 'www',

  server: {
    url: 'https://www.tmafianie.com',
    cleartext: false,
    androidScheme: 'https',
    // Allow Shopify's auth/account domains to navigate inside the WebView
    // so login sessions are created in-app, not in Safari
    allowNavigation: [
      'tmafianie.com',
      '*.tmafianie.com',
      'account.tmafianie.com',
      'shopify.com',
      '*.shopify.com',
      'shop.app',
      '*.shop.app'
    ]
  },

  plugins: {
    Browser: {
      // SFSafariViewController on iOS, Chrome Custom Tabs on Android.
      // Used for checkout, PayPal, Gumroad, and all external links.
      presentationStyle: 'fullscreen'
    },

    StatusBar: {
      // LIGHT = light-coloured icons — correct for the dark #0d0d0d background.
      style: 'LIGHT',
      backgroundColor: '#0d0d0d',
      overlaysWebView: false
    },

    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      launchFadeOutDuration: 300,
      backgroundColor: '#0d0d0d',
      androidSplashResourceName: 'splash',
      showSpinner: false,
      splashFullScreen: false,
      splashImmersive: false
    }
  },

  ios: {
    contentInset: 'automatic',
    allowsLinkPreview: false,
    scrollEnabled: true,
    scrollDeceleration: 'fast',
    limitsNavigationsToAppBoundDomains: false,
    // Use a real Safari user agent so Cloudflare/Shopify don't flag
    // form submissions as bot traffic and trigger CAPTCHA
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1 T-Mafianie-iOS'
  },

  android: {
    allowMixedContent: false,
    loggingBehavior: 'debug'
  }
};

export default config;
