package com.minapp.android.example.mybooks.books.list

import androidx.lifecycle.MutableLiveData
import androidx.paging.LivePagedListBuilder
import com.minapp.android.example.mybooks.Const
import com.minapp.android.example.mybooks.base.BaseViewModel
import com.minapp.android.example.mybooks.books.model.Books
import kotlinx.coroutines.launch

class BookListViewModel: BaseViewModel() {

    val list = LivePagedListBuilder(BookListDataSource.Factory(), Const.PAGED_LIST_CONFIG).build()
    val editBook = MutableLiveData<String>()
    private val books = Books()

    fun refresh() {
        list.value?.dataSource?.invalidate()
    }

    fun edit(id: String) {
        editBook.value = id
    }

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