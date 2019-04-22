package com.minapp.android.example.mybooks.books.edit

import androidx.lifecycle.MutableLiveData
import com.minapp.android.example.mybooks.base.BaseViewModel
import com.minapp.android.example.mybooks.books.model.Books
import kotlinx.coroutines.launch

class EditBookViewModel: BaseViewModel() {

    val bookName = MutableLiveData<String>()
    private val table = Books()

    fun init(id: String?) {
        if (id != null) {
            ioScope.launch {
                try {
                    loading.postValue(true)
                    bookName.postValue(table.fetchRecord(id).name)
                } catch (e: Exception) {
                    toast.postValue(e.message)
                } finally {
                    loading.postValue(false)
                }
            }
        }
    }

    fun save(id: String?, name: String) {
        if (name.isBlank()) {
            toast.postValue("书名可不能为空哦")
            return
        }
        ioScope.launch {
            try {
                loading.postValue(true)
                val record = if (id == null) table.createRecord() else table.fetchRecord(id)
                record.name = name
                record.save()
                toast.postValue("保存成功")
                finishOK.postValue(true)
            } catch (e: Exception) {
                toast.postValue(e.message)
            } finally {
                loading.postValue(false)
            }
        }
    }

}