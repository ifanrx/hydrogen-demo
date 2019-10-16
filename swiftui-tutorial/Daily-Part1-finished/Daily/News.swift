//
//  News.swift
//  Daily
//
//  Created by quanhua on 2019/10/14.
//  Copyright © 2019 ifanr. All rights reserved.
//

import Foundation

struct News: Identifiable {
    var id: String
    var title: String
    var author: String
    var date: String
    var content: String
    var thumbnail: String
}

func fetchDaliy() -> [News] {
    var newsList: [News] = []
    let daliyPath: String = Bundle.main.path(forResource: "daliy", ofType:"plist")!
    let daliy: NSArray = NSArray(contentsOfFile: daliyPath) ?? []
    for (index, newsDict) in daliy.enumerated() {
        if let newsDict = newsDict as? [String: Any] {
            let news = News(id: String(index), title: newsDict["title"] as! String, author: newsDict["author"] as! String, date: newsDict["date"] as! String, content: newsDict["content"] as! String, thumbnail: newsDict["thumbnail"] as! String)
            newsList.append(news)
        }
    }
    
    return newsList
}
