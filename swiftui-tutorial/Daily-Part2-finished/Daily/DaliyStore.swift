//
//  DaliyStore.swift
//  Daily
//
//  Created by quanhua on 2019/10/15.
//  Copyright © 2019 ifanr. All rights reserved.
//

import Foundation
import MinCloud

final class DaliyStore: ObservableObject {
    let daliyTable = Table(name: "Daliy")
    
    @Published var newsList: [News] = []
    
    func fetchDalily() {
        daliyTable.find { (recordList, error) in
            var _newsList: [News] = []
            recordList?.records?.forEach({ (record) in
                let id = record.Id
                let title = record.get(key: "title") as? String
                let author = record.get(key: "author") as? String
                let date = record.get(key: "date") as? String
                let content = record.get(key: "content") as? String
                let thumbnail = record.get(key: "thumbnail") as? String
                if let id = id, let title = title, let author = author, let date = date, let content = content, let thumbnail = thumbnail {
                    let news = News(id: id, title: title, author: author, date: date, content: content, thumbnail: thumbnail)
                    _newsList.append(news)
                }
            })
            DispatchQueue.main.async {
                self.newsList = _newsList
            }
        }
    }
}
