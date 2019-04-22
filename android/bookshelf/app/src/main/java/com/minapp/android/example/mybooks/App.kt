package com.minapp.android.example.mybooks

import android.app.Application
import android.content.pm.PackageManager
import android.util.Log
import com.minapp.android.sdk.BaaS
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

class App: Application() {
    override fun onCreate() {
        super.onCreate()
        initBaaS()
    }

    fun initBaaS() {
        GlobalScope.launch {
            try {
                packageManager.getApplicationInfo(packageName, PackageManager.GET_META_DATA)?.metaData?.getString("baasClientId").takeIf { !it.isNullOrBlank() }?.also {

                    /**
                     * 在 [Application.onCreate] 里调用 [BaaS.init] 方法
                     * 我这里把 clientId 在编译期放到 AndroidManifest.xml 的 meta 里，用户可以根据自己的需求灵活使用，一般把 clientId 配置为常量，使用即可
                     */
                    BaaS.init(it, this@App)
                }
            } catch (e: Throwable) {
                Log.e(Const.TAG, e.message, e)
            }
        }
    }
}