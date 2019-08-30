//
//  ContentView.swift
//  swiftui-demo
//
//  Created by quanhua on 2019/8/21.
//  Copyright © 2019 ifanr. All rights reserved.
//

import SwiftUI

struct BookList: View {
    @ObservedObject var store = BookStore()
    
    var body: some View {
        NavigationView {
            
            VStack {
                List(store.books) { book in
                    VStack(alignment: .leading) {
                        NavigationLink(destination: BookDetailView(book: book)) {
                            BookItemRow(book: book)
                        }
                    }
                }
                    .onAppear(perform: { self.store.fetch() })
                    .navigationBarTitle(Text("书籍列表"))
            }
            
        }
    }
}

#if DEBUG
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        BookList()
    }
}
#endif
