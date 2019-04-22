package com.minapp.android.example.mybooks.books.list

import androidx.paging.DataSource
import com.minapp.android.example.mybooks.Const
import com.minapp.android.example.mybooks.base.BasePageKeyedDataSource
import com.minapp.android.example.mybooks.books.model.Book
import com.minapp.android.sdk.database.Record
import com.minapp.android.sdk.database.Table
import com.minapp.android.sdk.database.query.Query
import com.minapp.android.sdk.util.PagedList

/**
 * 书籍 datasource，负责 fetch data
 */
class BookListDataSource: BasePageKeyedDataSource<Book>() {

    private val books = Table(Const.TABLE_BOOKS)

    /**
     * 加载第一页
     * 分页相关的处理逻辑封装在 [BasePageKeyedDataSource]
     * 这里只是添加更新时间作为排序
     */
    override fun loadInitial(query: Query): PagedList<Book>? {
        query.orderBy("-${Record.UPDATED_AT}")
        val pagedList = books.query(query).transform { Book(it) }
        return pagedList
    }

    /**
     * 加载第二、三、...页
     * 分页相关的处理逻辑封装在 [BasePageKeyedDataSource]
     * 这里只是添加更新时间作为排序
     */
    override fun loadAfter(query: Query): PagedList<Book>? {
        query.orderBy("-${Record.UPDATED_AT}")
        return books.query(query).transform { Book(it) }
    }


    class Factory: DataSource.Factory<Int, Book>() {
        override fun create(): DataSource<Int, Book> {
            return BookListDataSource()
        }
    }
}