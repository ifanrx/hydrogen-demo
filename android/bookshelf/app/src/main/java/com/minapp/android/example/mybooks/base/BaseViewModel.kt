package com.minapp.android.example.mybooks.base

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job

abstract class BaseViewModel: ViewModel() {

    private val job = Job()
    protected val ioScope = CoroutineScope(Dispatchers.IO + job)

    val toast = MutableLiveData<String>()
    val loading = MutableLiveData<Boolean>()
    val finishOK = MutableLiveData<Boolean>()

    override fun onCleared() {
        super.onCleared()
        job.cancel()
    }
}