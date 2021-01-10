import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.nsperformancetest',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ios: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  }
} as NativeScriptConfig;