//
//  NewsDetailView.swift
//  Daily
//
//  Created by quanhua on 2019/10/14.
//  Copyright © 2019 ifanr. All rights reserved.
//

import SwiftUI

struct NewsDetailView: View {
    var news: News
    var body: some View {
        VStack {
            Text(news.title)
                .font(.system(size: 24))
            HStack {
                Text("作者: \(news.author)")
                Text(news.date)
            }.padding(.top, 2)
            Text(news.content)
                .padding(.top, 5)
            Spacer()
        }.navigationBarTitle("详情", displayMode: .inline)
        .padding(EdgeInsets(top: 10, leading: 10, bottom: 0, trailing: 10))
    }
}
