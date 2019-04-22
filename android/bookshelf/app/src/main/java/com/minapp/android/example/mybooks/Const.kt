package com.minapp.android.example.mybooks

import androidx.paging.PagedList

object Const {
    const val TAG = "my_books"
    const val TABLE_BOOKS = "bookshelf"
    val PAGED_LIST_CONFIG = PagedList.Config.Builder()
        .setPageSize(20)
        .setPrefetchDistance(5)
        .setEnablePlaceholders(false)
        .setInitialLoadSizeHint(20)
        .build()

}