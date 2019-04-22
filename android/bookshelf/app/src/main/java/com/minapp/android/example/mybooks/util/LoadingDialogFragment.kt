package com.minapp.android.example.mybooks.util

import android.app.Dialog
import android.app.ProgressDialog
import android.os.Bundle
import androidx.fragment.app.DialogFragment

class LoadingDialogFragment: DialogFragment() {

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        val dialog = ProgressDialog(context)
        dialog.setMessage("加载中，请稍后...")
        return dialog
    }
}