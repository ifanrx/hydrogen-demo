//
//  NewsListRow.swift
//  Daily
//
//  Created by quanhua on 2019/10/14.
//  Copyright © 2019 ifanr. All rights reserved.
//

import SwiftUI

struct NewsListRow: View {
    var news: News
    
    var body: some View {
        HStack {
            WebImageView(imageUrl: news.thumbnail)
                .frame(width: 80, height: 100)
            
            VStack(alignment: .leading) {
                Text(news.title)
                    .font(.headline)
                    .padding(.top, 10)
                
                Spacer()
                
                Text(news.date)
                    .foregroundColor(.secondary)
                    .padding(.bottom, 10)
            }
            .padding(.leading, 10)
        }
    }
}

