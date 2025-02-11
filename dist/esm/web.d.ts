import { WebPlugin } from '@capacitor/core';
import type { Config } from 'mixpanel-browser';
import type { MixpanelPlugin } from './definitions';
declare global {
    interface Window {
        mixpanel: any;
    }
}
export declare class MixpanelWeb extends WebPlugin implements MixpanelPlugin {
    private superProperties;
    constructor();
    initialize(options: {
        token: string;
        config?: Partial<Config>;
    }): Promise<void>;
    distinctId(): Promise<{
        value: string;
    }>;
    track(options: {
        event: string;
        properties: any;
    }): Promise<void>;
    identify(options: {
        distinctId: string;
    }): Promise<void>;
    alias(options: {
        alias: string;
        distinctId: string;
    }): Promise<void>;
    reset(): Promise<void>;
    clearSuperProperties(): Promise<void>;
    currentSuperProperties(): Promise<{
        properties: any;
    }>;
    registerSuperProperties(options: {
        properties: any;
    }): Promise<void>;
    setProfile(options: {
        properties: any;
    }): Promise<void>;
    setProfileUnion(options: {
        properties: any;
    }): Promise<void>;
    trackCharge(options: {
        amount: number;
        properties: any;
    }): Promise<void>;
    flush(): Promise<void>;
}
