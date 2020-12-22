import VueRouter, { Route } from 'vue-router';
import { Store } from 'vuex';
import { Enum } from '@/utils/enum';
import { getStorageCache } from '@/utils/assist';
import { CacheOptions } from '@/models/BaseData';

// 1. 确保在声明补充的类型之前导入 'vue'

// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $device: { isPc: boolean; isAndroid: boolean; isIos: boolean };
    $setStorage: <T>(name: string, data: T) => void;
    $getStorage: <T>(name: string) => T | undefined;
    $getStorageCache: <T>(options: CacheOptions<T>) => Promise<T>;
    $removeStorage: (name: string) => void;
    $md5: (name: string) => string;
    $getGuid: () => string;
    $router: VueRouter;
    $route: Route;
    $store: Store;
    $enum: Enum;
  }
}
