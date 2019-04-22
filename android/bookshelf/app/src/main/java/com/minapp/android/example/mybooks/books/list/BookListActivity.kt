package com.minapp.android.example.mybooks.books.list

import android.app.Activity
import android.app.LauncherActivity
import android.content.Intent
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import androidx.lifecycle.Observer
import androidx.recyclerview.widget.LinearLayoutManager
import com.minapp.android.example.mybooks.R
import com.minapp.android.example.mybooks.base.BaseActivity
import com.minapp.android.example.mybooks.books.edit.EditBookActivity
import com.minapp.android.example.mybooks.books.list.adapter.BookListAdapter
import com.minapp.android.example.mybooks.launch.LaunchActivity
import com.minapp.android.sdk.auth.Auth
import kotlinx.android.synthetic.main.activity_book_list.*

/**
 * 我的书籍列表，这里展示所有我的书籍
 */
class BookListActivity : BaseActivity() {

    private var viewModel: BookListViewModel? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_book_list)
        initList()
    }

    private fun initList() {
        val vm = provideViewModel(BookListViewModel::class.java)
        val adapter = BookListAdapter(vm)
        rv.apply {
            layoutManager = LinearLayoutManager(this@BookListActivity)
            setAdapter(adapter)
        }
        vm.apply {

            /**
             * 这里使用 paging 和 [RecyclerView] 展示书籍列表
             * paging 的使用参考 https://developer.android.com/topic/libraries/architecture/paging/
             */
            list.observe(this@BookListActivity, Observer { adapter.submitList(it) })

            /**
             * 点击编辑按钮，打开编辑页面
             */
            editBook.observe(this@BookListActivity, Observer {
                if (it != null) {
                    EditBookActivity.editBook(this@BookListActivity, EDIT_BOOK, it)
                }
            })
        }
        createBtn.setOnClickListener { EditBookActivity.createBook(this, CREATE_BOOK) }
        viewModel = vm
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        when (requestCode) {
            CREATE_BOOK, EDIT_BOOK -> {
                if (resultCode == Activity.RESULT_OK) {
                    viewModel?.refresh()
                }
            }

            else -> super.onActivityResult(requestCode, resultCode, data)
        }
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.activity_book_list, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {

            // 退出登录
            R.id.signOut -> {
                Auth.logout()
                startActivity(Intent(this, LaunchActivity::class.java))
                finish()
            }

            else -> return super.onOptionsItemSelected(item)
        }
        return true
    }

    companion object {
        const val CREATE_BOOK = 9
        const val EDIT_BOOK = 10
    }
}
