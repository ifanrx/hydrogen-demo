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
        
    }
}
