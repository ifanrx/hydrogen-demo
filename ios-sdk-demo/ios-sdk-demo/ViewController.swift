//
//  ViewController.swift
//  ios-sdk-demo
//
//  Created by pengquanhua on 2019/4/9.
//  Copyright © 2019 ifanr. All rights reserved.
//

import UIKit
import MinCloud

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {

    @IBOutlet weak var avatarImageView: UIImageView!
    @IBOutlet weak var addBookTextField: UITextField!

    @IBOutlet weak var tableView: UITableView!

    var bookList: [Record] = []
    let table = Table(name: "bookshelf")

    override func viewDidLoad() {
        super.viewDidLoad()

        let footer = UIView(frame: .zero);
        tableView.tableFooterView = footer;
        tableView.allowsSelection = false;

        self.title = "我的书架"

        let logoutItem = UIBarButtonItem(title: "登出", style: .plain, target: self, action: #selector(logout))
        self.navigationItem.rightBarButtonItem = logoutItem
        self.navigationItem.hidesBackButton = true

        // 获取用户信息
        self.getCurrentUser()

        // 获取我的床头书
        self.queryBookList()
    }

    @IBAction func addBookOnClick(_ sender: UIButton) {
        let name = addBookTextField.text ?? ""
        self.addBookTextField.text = ""
        self.addBook(name)
    }

    @IBAction func editBookOnClick(_ sender: UIButton) {
        let cell = tableView.cellForRow(at: IndexPath(row: sender.tag, section: 0)) as? BookCell
        if cell?.editButton.isSelected ?? false {
            cell?.editButton.isSelected = false
            cell?.editButton.isEnabled = false
            let name = cell?.bookName.text ?? ""
            self.edit(name, index: sender.tag)
        } else {
            cell?.editButton.isSelected = true
            cell?.bookName.isEnabled = true
            cell?.bookName.becomeFirstResponder()
        }
    }

    @IBAction func deleteBookOnClick(_ sender: UIButton) {
        self.deleteBook(sender.tag)
    }

    func showMessage(_ message: String) {
        let alertController = UIAlertController(title: "提示",
                                                message: message, preferredStyle: .alert)
        let cancelAction = UIAlertAction(title: "取消", style: .cancel, handler: nil)
        alertController.addAction(cancelAction)
        self.present(alertController, animated: true, completion: nil)
    }
}

extension ViewController {
    // MARK: - MinCloud

    // 获取当前用户
    private func getCurrentUser() {
        Auth.getCurrentUser { (currentUser, error) in
            if let error = error {
                let message = "code: \(error.code) / description: \(error.localizedDescription)"
                self.showMessage(message)
            } else {
                if let urlString = currentUser?.avatar, let url = URL(string: urlString), let data = try? Data(contentsOf: url) {
                    self.avatarImageView.image = UIImage(data: data)
                }
            }
        }
    }

    // 查询记录
    private func queryBookList() {
        self.table.find(completion: { (recordList, error) in
            if let error = error {
                let message = "code: \(error.code) / description: \(error.localizedDescription)"
                self.showMessage(message)
            } else {
                if let recordList = recordList, let records = recordList.records {
                    self.bookList = records
                    self.tableView.reloadData()
                }
            }
        })
    }

    // 新增一条记录
    private func addBook(_ name: String) {
        let book = table.createRecord()
        book.set(key: "bookName", value: name)
        book.save { (success, error) in
            if let error = error {
                let message = "code: \(error.code) / description: \(error.localizedDescription)"
                self.showMessage(message)
            } else {
                self.bookList.append(book)
                self.tableView.reloadData()
            }

        }
    }

    // 编辑一条记录
    private func edit(_ name: String, index: Int) {
        let record = bookList[index]
        record.set(key: "bookName", value: name)
        record.update { (success, error) in
            if let error = error {
                let message = "code: \(error.code) / description: \(error.localizedDescription)"
                self.showMessage(message)
            } else {
                self.tableView.reloadRows(at: [IndexPath(row: index, section: 0)], with: .automatic)
            }
        }
    }

    // 删除一条记录
    private func deleteBook(_ index: Int) {
        let record = bookList[index]
        record.delete { (success, error) in
            if let error = error {
                let message = "code: \(error.code) / description: \(error.localizedDescription)"
                self.showMessage(message)
            } else {
                self.bookList.remove(at: index)
                self.tableView.deleteRows(at: [IndexPath(row: index, section: 0)], with: .bottom)
            }
        }
    }

    // 登出
    @objc private func logout() {
        Auth.logout { (success, error) in
            if let error = error {
                let message = "code: \(error.code) / description: \(error.localizedDescription)"
                self.showMessage(message)
            } else {
                self.navigationController?.popViewController(animated: true)
            }
        }
    }
}

extension ViewController {
    // MARK: - TableView DataSource

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return bookList.count
    }

    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let identify: String = "Cell"
        let cell = tableView.dequeueReusableCell(withIdentifier: identify, for: indexPath) as? BookCell
        let book = bookList[indexPath.row]
        cell?.editButton.tag = indexPath.row
        cell?.deleteButton.tag = indexPath.row
        cell?.bookName.isEnabled = false
        if let bookname = book.get(key: "bookName") as? String {
            cell?.bookName.text = bookname
        }
        return cell ?? UITableViewCell()
    }

    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 44.0
    }
}

