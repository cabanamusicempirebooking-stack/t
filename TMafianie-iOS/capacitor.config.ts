import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tmafianie.app',
  appName: 'T Mafianie',
  webDir: 'www',

  server: {
    url: 'https://www.tmafianie.com',
    cleartext: false,
    androidScheme: 'https'
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
    // Smooth momentum scrolling on all scrollable elements
    scrollDeceleration: 'fast',
    limitsNavigationsToAppBoundDomains: false
  },

  android: {
    allowMixedContent: false,
    loggingBehavior: 'debug'
  }
};

export default config;
