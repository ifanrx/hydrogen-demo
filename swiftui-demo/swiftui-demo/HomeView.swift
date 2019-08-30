//
//  HomeView.swift
//  swiftui-demo
//
//  Created by quanhua on 2019/8/22.
//  Copyright © 2019 ifanr. All rights reserved.
//

import SwiftUI

struct HomeView: View {
    @State var selectedView = 0
    
    var body: some View {
        BookList()
    }
}

#if DEBUG
struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
#endif
