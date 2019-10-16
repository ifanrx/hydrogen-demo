//
//  ContentView.swift
//  Daily
//
//  Created by quanhua on 2019/10/14.
//  Copyright © 2019 ifanr. All rights reserved.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            NewsListView()
        }.navigationViewStyle(StackNavigationViewStyle())
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
