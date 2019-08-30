//
//  BookStore.swift
//  swiftui-demo
//
//  Created by quanhua on 2019/8/21.
//  Copyright © 2019 ifanr. All rights reserved.
//

import Foundation
import Combine
import MinCloud

// 书籍
struct Book: Identifiable {
    let id: String
    var name: String
    var author: String
    var price: Float
    var content: String
    var coverUrl: String
}

final class BookStore: ObservableObject {
    let bookTable = Table(name: "bookshelf")  // 建立一个 Table 对象，bookshelf 是知晓云的一个数据表，通过 bookTable 可以操作 bookshelf 表。
    
    @Published var books: [Book] = []   // 书籍列表
    
    func fetch() {
        
        // 从 bookTable 表获取书籍列表
        bookTable.find { (recordList, error) in
            var books: [Book] = []
            recordList?.records?.forEach({ (record) in
                let id = record.Id!
                let name = record.get(key: "name") as! String
                let author = record.get(key: "author") as! String
                let price = record.get(key: "price") as! Float
                let content = record.get(key: "content") as! String
                let coverUrl = record.get(key: "coverUrl") as! String
                let book = Book(id: id, name: name, author: author, price: price, content: content, coverUrl: coverUrl)
                books.append(book)
            })
            DispatchQueue.main.async {
                self.books = books
            }
        }
    }
}
