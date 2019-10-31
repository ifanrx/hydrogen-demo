//
//  BookStore.swift
//  BookShelf
//
//  Created by quanhua on 2019/9/26.
//  Copyright © 2019 ifanr. All rights reserved.
//

import Foundation
import Combine
import MinCloud

final class BookStore: ObservableObject {
    let bookTable = Table(tableId: "82035")  // 建立一个 Table 对象，bookshelf 是知晓云的一个数据表，通过 bookTable 可以操作 bookshelf 表。
    
    @Published var books: [Book] = []   // 书籍列表
    
    func fetch() {
        // 从 bookTable 表获取书籍列表
        bookTable.find { (recordList, error) in
            var books: [Book] = []
            recordList?.records?.forEach({ (record) in
                let id = record.Id!
                let name = record.get("bookName") as! String
                let author = record.get("bookAuthor") as! String
                let price = record.get("bookPrice") as! Float
                let content = record.get("bookContent") as! String
                let coverUrl = record.get("coverUrl") as! String
                let book = Book(id: id, name: name, author: author, price: price, content: content, coverUrl: coverUrl)
                books.append(book)
            })
            DispatchQueue.main.async {
                self.books = books
            }
        }
    }
}
