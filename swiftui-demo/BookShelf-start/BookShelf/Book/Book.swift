//
//  Book.swift
//  BookShelf
//
//  Created by quanhua on 2019/9/26.
//  Copyright © 2019 ifanr. All rights reserved.
//

import Foundation

struct Book: Identifiable {
    let id: String
    var name: String
    var author: String
    var price: Float
    var content: String
    var coverUrl: String
}
