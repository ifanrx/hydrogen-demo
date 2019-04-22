package com.minapp.android.example.mybooks.books.list.adapter

import android.view.Gravity
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.PopupMenu
import android.widget.TextView
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.RecyclerView
import com.minapp.android.example.mybooks.R
import com.minapp.android.example.mybooks.books.list.BookListViewModel
import com.minapp.android.example.mybooks.books.model.Book

class BookVH (
    itemView: View,
    private val viewModel: BookListViewModel
) : RecyclerView.ViewHolder(itemView) {

    private var data: Book? = null

    init {
        itemView.setOnLongClickListener {
            PopupMenu(it.context, it, Gravity.BOTTOM or Gravity.RIGHT).apply {
                inflate(R.menu.book_popup_menu)
                setOnMenuItemClickListener {
                    val id = data?.id
                    if (id != null) {
                        when (it.itemId) {

                            R.id.edit -> {
                                viewModel.edit(id)
                                return@setOnMenuItemClickListener true
                            }

                            R.id.delete -> {
                                viewModel.delete(id)
                                return@setOnMenuItemClickListener true
                            }
                        }
                    }
                    return@setOnMenuItemClickListener false
                }
                show()
            }
            return@setOnLongClickListener true
        }
    }

    /**
     * 每个书籍条目的样式，这里只是简单地展示书名
     */
    fun bind(book: Book?, position: Int) {
        data = book
        itemView.findViewById<TextView>(R.id.nameTv).text = "${position + 1}. ${data?.name}"
    }

    companion object {
        fun create(parent: ViewGroup, viewModel: BookListViewModel): BookVH {
            return LayoutInflater.from(parent.context).inflate(R.layout.book, parent, false).let { BookVH(it, viewModel) }
        }
    }
}