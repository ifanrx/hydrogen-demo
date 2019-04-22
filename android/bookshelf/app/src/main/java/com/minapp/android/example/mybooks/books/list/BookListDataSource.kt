package com.minapp.android.example.mybooks.books.list

import androidx.paging.DataSource
import com.minapp.android.example.mybooks.Const
import com.minapp.android.example.mybooks.base.BasePageKeyedDataSource
import com.minapp.android.example.mybooks.books.model.Book
import com.minapp.android.sdk.database.Record
import com.minapp.android.sdk.database.Table
import com.minapp.android.sdk.database.query.Query
import com.minapp.android.sdk.util.PagedList

class BookListDataSource: BasePageKeyedDataSource<Book>() {

    private val books = Table(Const.TABLE_BOOKS)

    override fun loadInitial(query: Query): PagedList<Book>? {
        query.orderBy("-${Record.UPDATED_AT}")
        val pagedList = books.query(query).transform { Book(it) }
        return pagedList
    }

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