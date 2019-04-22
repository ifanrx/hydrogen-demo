package com.minapp.android.example.mybooks.launch

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.lifecycle.Observer
import com.minapp.android.example.mybooks.books.list.BookListActivity
import com.minapp.android.example.mybooks.R
import com.minapp.android.example.mybooks.base.BaseActivity
import com.minapp.android.example.mybooks.login.SignInUpActivity
import kotlinx.android.synthetic.main.activity_launch.*

/**
 * 开屏页
 */
class LaunchActivity : BaseActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_launch)

        provideViewModel(LaunchViewModel::class.java).also {
            it.progressBarVisibility.observe(this@LaunchActivity, Observer {
                progressBar.visibility = if (it == true) View.VISIBLE else View.GONE
            })
            it.mainPage.observe(this@LaunchActivity, Observer {
                if (it == true) {
                    toMainPage()
                }
            })
            it.signInPage.observe(this@LaunchActivity, Observer {
                if (it == true) {
                    SignInUpActivity.signUp(this@LaunchActivity, SIGN_UP)
                }
            })
            it.init()
        }
    }

    private fun toMainPage() {
        startActivity(Intent(this@LaunchActivity, BookListActivity::class.java))
        finish()
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        when (requestCode) {

            /**
             * 没有登录，进入登录/注册页
             * 在登录 or 注册成功后，跳到书架列表页面
             */
            SIGN_UP -> {
                if (resultCode == Activity.RESULT_OK)
                    toMainPage()
                else
                    finish()
            }
            else -> super.onActivityResult(requestCode, resultCode, data)
        }
    }

    companion object {
        const val SIGN_UP = 9
    }
}
