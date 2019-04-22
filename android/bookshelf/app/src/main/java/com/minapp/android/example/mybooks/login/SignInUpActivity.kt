package com.minapp.android.example.mybooks.login

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

import android.app.Activity
import android.content.Intent
import android.util.Log
import android.view.Menu
import android.view.MenuItem
import android.widget.Toast
import androidx.lifecycle.Observer
import com.minapp.android.example.mybooks.Const
import com.minapp.android.example.mybooks.R
import com.minapp.android.example.mybooks.base.BaseActivity
import kotlinx.android.synthetic.main.activity_sign_in_up.*

/**
 * 登录 or 注册
 */
class SignInUpActivity : BaseActivity() {

    /**
     * 标识，登录 or 注册
     */
    private var mode = SIGN_IN
    private var viewModel: SignInUpViewModel? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_in_up)

        supportActionBar?.apply {
            setHomeButtonEnabled(true)
            setDisplayHomeAsUpEnabled(true)
        }
        switchToMode(SIGN_IN)
        email_sign_in_button.setOnClickListener { signInUp() }
        viewModel = provideViewModel(SignInUpViewModel::class.java).apply {
            signInUpSuccess.observe(this@SignInUpActivity, Observer {
                val action = if (mode == SIGN_IN) getString(R.string.action_sign_in) else getString(R.string.action_sign_up)
                Toast.makeText(this@SignInUpActivity, "${action}成功", Toast.LENGTH_SHORT).show()
                setResult(Activity.RESULT_OK)
                finish()
            })
        }
    }

    private fun signInUp() {
        val email = email.text.toString()
        val pwd = password.text.toString()
        viewModel?.signInUp(email, pwd, mode == SIGN_IN)
    }

    private fun switchToMode(newMode: Int) {
        mode = newMode
        supportActionBar?.title = getString(if (this.mode == SIGN_IN) R.string.action_sign_in else R.string.action_sign_up)
        email_sign_in_button?.text = getString(if (this.mode == SIGN_IN) R.string.action_sign_in else R.string.action_sign_up)
        invalidateOptionsMenu()
    }


    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.activity_sign_in_up, menu)
        if (mode == SIGN_IN) {
            menu.findItem(R.id.switchToSignIn).isVisible = false
        } else {
            menu.findItem(R.id.switchToSignUp).isVisible = false
        }
        return true
    }

    /**
     * 登录 or 注册就是切换标识，以及刷新 ui
     */
    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            R.id.switchToSignIn -> {
                switchToMode(SIGN_IN)
            }

            R.id.switchToSignUp -> {
                switchToMode(SIGN_UP)
            }

            else -> return super.onOptionsItemSelected(item)
        }
        return true
    }

    companion object {

        private const val SIGN_IN = 0
        private const val SIGN_UP = 1
        private const val EXTRA_MODE = "EXTRA_MODE"

        /**
         * 登录
         */
        fun signIn(activity: Activity, requestCode: Int) {
            startActivityForResult(activity, requestCode, SIGN_IN)
        }

        /**
         * 注册
         */
        fun signUp(activity: Activity, requestCode: Int) {
            startActivityForResult(activity, requestCode, SIGN_UP)
        }

        private fun startActivityForResult(activity: Activity, requestCode: Int, mode: Int) {
            val intent = Intent(activity, SignInUpActivity::class.java)
            intent.putExtra(EXTRA_MODE, mode)
            activity.startActivityForResult(intent, requestCode)
        }
    }
}
