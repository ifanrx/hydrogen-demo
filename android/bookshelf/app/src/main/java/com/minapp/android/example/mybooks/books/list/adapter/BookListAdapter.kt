package com.minapp.android.example.mybooks.books.list.adapter

import android.view.ViewGroup
import androidx.paging.PagedListAdapter
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.RecyclerView
import com.minapp.android.example.mybooks.books.list.BookListViewModel
import com.minapp.android.example.mybooks.books.model.Book

class BookListAdapter (
    private val viewModel: BookListViewModel
): PagedListAdapter<Book, RecyclerView.ViewHolder>(DiffCallback()) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        return BookVH.create(parent, viewModel)
    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        (holder as BookVH).bind(getItem(position), position)
    }


    class DiffCallback: DiffUtil.ItemCallback<Book>() {
        override fun areItemsTheSame(oldItem: Book, newItem: Book): Boolean {
            return false
        }

        override fun areContentsTheSame(oldItem: Book, newItem: Book): Boolean {
            return false
        }
    }
}