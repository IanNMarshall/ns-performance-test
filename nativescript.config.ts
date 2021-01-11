import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.nsperformancetest',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    codeCache: true
  },
  ios: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    codeCache: true
  }
} as NativeScriptConfig;