//
//  BookStore.swift
//  BookShelf
//
//  Created by quanhua on 2019/9/26.
//  Copyright © 2019 ifanr. All rights reserved.
//

import Foundation
import Combine

final class BookStore: ObservableObject {
    
    @Published var books: [Book] = []   // 书籍列表
    
    func fetch() {
        let books = getBooks()
        DispatchQueue.main.async {
            self.books = books
        }
    }
    
    func getBooks() -> [Book] {
        guard let pathString = Bundle.main.path(forResource: "data", ofType: "json") else {
            return []
        }
        let url = URL(fileURLWithPath: pathString)
        do {
            let data = try Data(contentsOf: url)
            let books = try JSONDecoder().decode([Book].self, from: data)
            return books
        } catch {
            return []
        }
    }
}
