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
    
    let newsDicts = [["id": "0", "title": "60 天打印一枚火箭", "author": "ifanr", "content": "今年 4 月，SpaceX 重型猎鹰完成首次商业发射", "date": "10-15", "thumbnail": "https://s3.ifanr.com/wp-content/uploads/2019/10/Launch_OffPad.4k.0.jpg!720"],
                     ["id": "1", "title": "当你在看电视的时候，电视也在看你", "author": "ifanr", "content": "智能电视广告的问题着实让人心烦。", "date": "10-15", "thumbnail": "https://s3.ifanr.com/wp-content/uploads/2019/10/qtfy.jpg!720"]]
    
    var newsList: [News] = []
    for newsDict in newsDicts {
        let news = News(id: newsDict["id"]!, title: newsDict["title"]!, author: newsDict["author"]!, date: newsDict["date"]!, content: newsDict["content"]!, thumbnail: newsDict["thumbnail"]!)
        newsList.append(news)
    }
    
    return newsList
}
