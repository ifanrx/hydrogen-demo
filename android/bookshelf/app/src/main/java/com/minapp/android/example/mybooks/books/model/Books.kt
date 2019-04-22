package com.minapp.android.example.mybooks.books.model

import com.minapp.android.example.mybooks.Const
import com.minapp.android.sdk.database.Record
import com.minapp.android.sdk.database.Table

class Books: Table(Const.TABLE_BOOKS) {

    override fun fetchRecord(recordId: String?): Book {
        return Book(super.fetchRecord(recordId))
    }

    override fun fetchWithoutData(id: String?): Record {
        return Book(super.fetchWithoutData(id))
    }

    override fun createRecord(): Book {
        return Book(super.createRecord())
    }
}