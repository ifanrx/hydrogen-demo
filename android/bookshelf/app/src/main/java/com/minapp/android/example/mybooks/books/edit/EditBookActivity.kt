package com.minapp.android.example.mybooks.books.edit

import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.inputmethod.EditorInfo
import androidx.lifecycle.Observer
import com.minapp.android.example.mybooks.R
import com.minapp.android.example.mybooks.base.BaseActivity
import kotlinx.android.synthetic.main.activity_edit_book.*

/**
 * 新增/编辑页面
 */
class EditBookActivity : BaseActivity() {

    /**
     * id != null，则编辑
     * id == null，则新增
     */
    private var id: String? = null
    private var viewModel: EditBookViewModel? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        id = intent.getStringExtra(EXTRA_ID) ?: savedInstanceState?.getString(EXTRA_ID)
        setContentView(R.layout.activity_edit_book)
        supportActionBar?.apply {
            setDisplayHomeAsUpEnabled(true)
            setHomeButtonEnabled(true)
        }
        init()
    }

    private fun init() {
        supportActionBar?.title = if (id == null) "放一本新书" else "给书改个名"
        viewModel = provideViewModel(EditBookViewModel::class.java).apply {

            /**
             * 编辑时，传递 id 过来，获取到书名后展示
             */
            bookName.observe(this@EditBookActivity, Observer { nameEt.setText(it) })

            init(id)
        }
        nameEt.setOnEditorActionListener { v, actionId, event ->
            when (actionId) {
                EditorInfo.IME_ACTION_SEND -> {
                    save()
                    return@setOnEditorActionListener true
                }
            }
            return@setOnEditorActionListener false
        }
        saveBtn.setOnClickListener { save() }
    }

    private fun save() {
        viewModel?.save(id, nameEt.text.toString())
    }

    companion object {

        const val EXTRA_ID = "EXTRA_ID"

        fun createBook(activity: Activity, requestCode: Int) {
            activity.startActivityForResult(Intent(activity, EditBookActivity::class.java), requestCode)
        }

        fun editBook(activity: Activity, requestCode: Int, id: String) {
            val intent = Intent(activity, EditBookActivity::class.java)
            intent.putExtra(EXTRA_ID, id)
            activity.startActivityForResult(intent, requestCode)
        }

    }
}
