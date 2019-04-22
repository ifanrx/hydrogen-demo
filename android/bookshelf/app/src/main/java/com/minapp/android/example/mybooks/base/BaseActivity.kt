package com.minapp.android.example.mybooks.base

import android.app.Activity
import android.app.ProgressDialog
import android.view.MenuItem
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import com.minapp.android.example.mybooks.util.LoadingDialogFragment

abstract class BaseActivity: AppCompatActivity() {

    protected fun <T : BaseViewModel> provideViewModel(clz: Class<T>): T {
        return ViewModelProviders.of(this)[clz].also {
            it.toast.observe(this@BaseActivity, Observer {
                if (it != null) {
                    Toast.makeText(this@BaseActivity, it, Toast.LENGTH_SHORT).show()
                }
            })
            it.loading.observe(this@BaseActivity, Observer {
                (supportFragmentManager.findFragmentByTag(LOADING_FRAGMENT) as LoadingDialogFragment?)?.apply { dismissAllowingStateLoss() }
                if (it == true) {
                    LoadingDialogFragment().show(supportFragmentManager, LOADING_FRAGMENT)
                }
            })
            it.finishOK.observe(this@BaseActivity, Observer {
                setResult(Activity.RESULT_OK)
                finish()
            })
        }
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            android.R.id.home -> {
                setResult(RESULT_CANCELED)
                finish()
            }

            else -> return super.onOptionsItemSelected(item)
        }
        return true
    }

    override fun onBackPressed() {
        setResult(Activity.RESULT_CANCELED)
        finish()
    }

    companion object {
        const val LOADING_FRAGMENT = "LOADING_FRAGMENT"
    }
}