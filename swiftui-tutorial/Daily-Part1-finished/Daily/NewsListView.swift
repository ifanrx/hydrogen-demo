//
//  NewsListView.swift
//  Daily
//
//  Created by quanhua on 2019/10/14.
//  Copyright © 2019 ifanr. All rights reserved.
//

import SwiftUI

struct NewsListView: View {
    var newsList: [News] = fetchDaliy()
    var body: some View {
        List(newsList) { (news) in
            NavigationLink(destination: NewsDetailView(news: news)) {
                NewsListRow(news: news)
            }
        }
    .navigationBarTitle("新闻资讯")
    }
}

struct NewsListView_Previews: PreviewProvider {
    static var previews: some View {
        NewsListView()
    }
}
