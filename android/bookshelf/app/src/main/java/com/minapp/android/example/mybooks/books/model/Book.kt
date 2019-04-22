package com.minapp.android.example.mybooks.books.model

import com.minapp.android.sdk.database.Record

/**
 * 领域模块开发，使其继承自 [Record]
 */
class Book: Record {

    constructor(record: Record) : super(record._getTable(), record._getJson())
    constructor() : super()


    /**
     * 对应的，给数据表的每个字段添加 getter/setter
     */
    var name: String?
    get() = getString(NAME)
    set(value) {
        put(NAME, value)
    }

    companion object {

        /**
         * 类似与 orm，把数据表的字段作为常量记录起来，这里相当于 table scheme，方便以后开发而不用常常取后台看数据表有哪些字段
         */
        private const val NAME = "bookName"
        val EMPTY_PLACEHOLDER = Book()
    }
}