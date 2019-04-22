package com.minapp.android.example.mybooks.books.edit

import androidx.lifecycle.MutableLiveData
import com.minapp.android.example.mybooks.base.BaseViewModel
import com.minapp.android.example.mybooks.books.model.Books
import com.minapp.android.sdk.database.Record
import com.minapp.android.sdk.database.Table
import kotlinx.coroutines.launch

class EditBookViewModel: BaseViewModel() {

    val bookName = MutableLiveData<String>()
    private val table = Books()

    /**
     * 如果 id != null，则是编辑模式
     * 通过 [Table.fetchRecord] 获取一条记录行并展示出来
     */
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

    /**
     * id != null，则是编辑，通过 [Table.fetchRecord] 拿到记录
     * id == null，则是新增，通过 [Table.createRecord] 创建一条新记录
     * 最终都是通过 [Record.save] 将本地的更改提交至服务器
     */
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