package com.minapp.android.example.mybooks.login

import android.util.Log
import androidx.lifecycle.MutableLiveData
import com.minapp.android.example.mybooks.Const
import com.minapp.android.example.mybooks.base.BaseViewModel
import com.minapp.android.sdk.auth.Auth
import kotlinx.coroutines.launch

class SignInUpViewModel: BaseViewModel() {

    val signInUpSuccess = MutableLiveData<Boolean>()

    /**
     * 登录 or 注册
     * @param signIn true - 登录；false - 注册
     */
    fun signInUp(email: String, pwd: String, signIn: Boolean = true) {
        if (email.isBlank()) {
            toast.postValue("邮箱不能为空")
            return
        }
        if (pwd.isBlank()) {
            toast.postValue("密码不能为空")
            return
        }

        Log.d(Const.TAG, "sign in : $signIn, email : $email, pwd : $pwd")
        ioScope.launch {
            loading.postValue(true)
            try {

                /**
                 * 这里使用 Auth 模块的邮箱登录 [Auth.signInByEmail] 和邮箱注册 [Auth.signUpByEmail] 接口完成登录和注册
                 */
                if (signIn)
                    Auth.signInByEmail(email, pwd)
                else
                    Auth.signUpByEmail(email, pwd)
                signInUpSuccess.postValue(true)
            } catch (e: Exception) {
                toast.postValue(e.message)
            } finally {
                loading.postValue(false)
            }
        }
    }
}