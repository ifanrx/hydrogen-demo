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

    fun init() {
        ioScope.launch {
            try {
                delay(1000)

                if (Config.getClientId().isNullOrBlank()) {
                    toast.postValue("请先注册 sdk：BaaS.init(...)")

                } else {
                    progressBarVisibility.postValue(true)
                    delay(500)
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