package com.minapp.android.example.mybooks.books.list

import androidx.lifecycle.MutableLiveData
import androidx.paging.LivePagedListBuilder
import com.minapp.android.example.mybooks.Const
import com.minapp.android.example.mybooks.base.BaseViewModel
import com.minapp.android.example.mybooks.books.model.Books
import com.minapp.android.sdk.database.Record
import com.minapp.android.sdk.database.Table
import kotlinx.coroutines.launch

class BookListViewModel: BaseViewModel() {

    val list = LivePagedListBuilder(BookListDataSource.Factory(), Const.PAGED_LIST_CONFIG).build()
    val editBook = MutableLiveData<String>()
    private val books = Books()

    /**
     * 刷新操作
     */
    fun refresh() {
        list.value?.dataSource?.invalidate()
    }

    fun edit(id: String) {
        editBook.value = id
    }

    /**
     * 删除操作
     * 通过 [Table.fetchWithoutData] 拿到只包含 [Record.getId] 的实体
     * 然后通过 [Record.delete] 删除它，这是一种面向 ORM 的 api
     */
    fun delete(id: String) {
        ioScope.launch {
            try {
                loading.postValue(true)
                books.fetchWithoutData(id).delete()
                toast.postValue("帮你删掉啦")
                refresh()
            } catch (e: Exception) {
                toast.postValue(e.message)
            } finally {
                loading.postValue(false)
            }
        }
    }

}