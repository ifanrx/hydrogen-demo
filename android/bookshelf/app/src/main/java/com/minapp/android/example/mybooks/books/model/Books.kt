package com.minapp.android.example.mybooks.books.model

import com.minapp.android.example.mybooks.Const
import com.minapp.android.sdk.database.Record
import com.minapp.android.sdk.database.Table

/**
 * 领域模型开发，使其继承自 [Table]，然后 override 对应的方法
 * 如果不能 override，则新增自己所需的方法
 */
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