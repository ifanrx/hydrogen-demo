//
//  BookItemRow.swift
//  BookShelf
//
//  Created by quanhua on 2019/9/26.
//  Copyright © 2019 ifanr. All rights reserved.
//

import SwiftUI

struct BookItemRow: View {
    var book: Book
    
    var body: some View {
        HStack {
            WebImageView(imageUrl: book.coverUrl)
                .frame(width: 80, height: 100)
            
            VStack(alignment: .leading) {
                Text(book.name)
                    .font(.headline)
                    .padding(.top, 10)
                Spacer()
                Text("作者: \(book.author)")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                    .padding(.bottom, 10)
            }
            .padding(.leading, 10)
        }
    }
}

#if DEBUG
struct BookItemRow_Previews: PreviewProvider {
    static var previews: some View {
        BookItemRow(book: Book(id: "123", name: "Name", author: "Hua", price: 12, content: "wode", coverUrl: "https://img3.doubanio.com/view/subject/l/public/s1104690.jpg"))
    }
}
#endif
