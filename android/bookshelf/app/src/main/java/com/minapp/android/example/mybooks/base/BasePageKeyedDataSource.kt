package com.minapp.android.example.mybooks.base

import android.util.Log
import androidx.paging.PageKeyedDataSource
import com.minapp.android.example.mybooks.Const
import com.minapp.android.sdk.database.query.Query
import com.minapp.android.sdk.util.PagedList

abstract class BasePageKeyedDataSource<T>: PageKeyedDataSource<Int, T>() {

    override fun loadInitial(params: LoadInitialParams<Int>, callback: LoadInitialCallback<Int, T>) {
        try {
            val offset = 0
            val limit = params.requestedLoadSize
            val query = Query().apply {
                put(Query.OFFSET, offset.toString())
                put(Query.LIMIT, limit.toString())
            }

            val list = loadInitial(query)
            if (list != null) {
                val totalCount = list.totalCount
                val nextPage = if (totalCount > limit + offset) limit + offset else null
                callback.onResult(list.objects, offset, totalCount.toInt(), null, nextPage)
            } else {
                callback.onResult(mutableListOf(), null, null)
            }
        } catch (e: Exception) {
            Log.e(Const.TAG, e.message, e)
        }
    }

    override fun loadAfter(params: LoadParams<Int>, callback: LoadCallback<Int, T>) {
        try {
            val offset = params.key
            val limit = params.requestedLoadSize
            val query = Query().apply {
                put(Query.OFFSET, offset.toString())
                put(Query.LIMIT, limit.toString())
            }

            val list = loadAfter(query)
            if (list != null) {
                val totalCount = list.totalCount
                val nextPage = if (totalCount > limit + offset) limit + offset else null
                callback.onResult(list.objects, nextPage)
            } else {
                callback.onResult(mutableListOf(), null)
            }
        } catch (e: Exception) {
            Log.e(Const.TAG, e.message, e)
        }
    }

    override fun loadBefore(params: LoadParams<Int>, callback: LoadCallback<Int, T>) {
        callback.onResult(emptyList(), null)
    }

    abstract fun loadInitial(query: Query): PagedList<T>?

    abstract fun loadAfter(query: Query): PagedList<T>?
}