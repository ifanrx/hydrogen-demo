//
//  WebImageView.swift
//  swiftui-demo
//
//  Created by quanhua on 2019/8/30.
//  Copyright © 2019 ifanr. All rights reserved.
//

import SwiftUI

struct WebImageView: View {
    @State private var uiImage: UIImage? = nil
    let placeholderImage = UIImage(named: "mine_ifanr")
    var imageUrl: String
    
    var body: some View {
        Image(uiImage: self.uiImage ?? placeholderImage!)
            .resizable()
            .onAppear(perform: downloadWebImage)
    }
    
    func downloadWebImage() {
        guard let url = URL(string: imageUrl) else { return }
        URLSession.shared.dataTask(with: url) { (data, response, error) in
            if let data = data, let image = UIImage(data: data) {
                self.uiImage = image
            } else {
                print("error: \(String(describing: error))")
            }
        }.resume()
    }
}

struct WebImageView_Previews: PreviewProvider {
    static var previews: some View {
        WebImageView(imageUrl: "")
    }
}
