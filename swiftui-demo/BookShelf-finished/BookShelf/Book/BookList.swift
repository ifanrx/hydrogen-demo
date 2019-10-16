//
//  BookList.swift
//  BookShelf
//
//  Created by quanhua on 2019/9/26.
//  Copyright © 2019 ifanr. All rights reserved.
//

import SwiftUI

struct BookList: View {
    @ObservedObject var store = BookStore()
    
    var body: some View {
        List(store.books) { book in
            NavigationLink(destination: BookDetailView(book: book)) {
                BookItemRow(book: book)
            }
        }
        .onAppear(perform: { self.store.fetch() })
        .navigationBarTitle(Text("书籍列表"))
    }
}

#if DEBUG
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        BookList()
    }
}
#endif
