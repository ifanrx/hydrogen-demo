package com.minapp.android.example.mybooks.launch

import androidx.lifecycle.MutableLiveData
import com.minapp.android.example.mybooks.base.BaseViewModel
import com.minapp.android.sdk.BaaS
import com.minapp.android.sdk.Config
import com.minapp.android.sdk.auth.Auth
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class LaunchViewModel: BaseViewModel() {

    val progressBarVisibility = MutableLiveData<Boolean>()
    val mainPage = MutableLiveData<Boolean>()
    val signInPage = MutableLiveData<Boolean>()

    /**
     * 开屏页主逻辑：如果有登录，跳到「我的书架」列表页面；否则跳到登录/注册页面
     */
    fun init() {
        ioScope.launch {
            try {
                delay(1000)

                if (Config.getClientId().isNullOrBlank()) {
                    toast.postValue("请先注册 sdk：BaaS.init(...)")

                } else {
                    progressBarVisibility.postValue(true)
                    delay(500)

                    /**
                     * 这里用 Auth 模块的 [Auth.signedIn] 判断用户是否有登录
                     */
                    if (Auth.signedIn())
                        mainPage.postValue(true)
                    else
                        signInPage.postValue(true)
                }
            } catch (e: Exception) {
            }

        }
    }

}