package com.minapp.android.example.mybooks

import androidx.paging.PagedList

object Const {
    const val TAG = "my_books"

    /**
     * 我的书架的数据保存至那个数据表，这里是默认值
     * 如果你是自己创建的数据表，那么这个值需要更改为你创建的数据表的名字
     */
    const val TABLE_BOOKS = "bookshelf"
    val PAGED_LIST_CONFIG = PagedList.Config.Builder()
        .setPageSize(20)
        .setPrefetchDistance(5)
        .setEnablePlaceholders(false)
        .setInitialLoadSizeHint(20)
        .build()

}