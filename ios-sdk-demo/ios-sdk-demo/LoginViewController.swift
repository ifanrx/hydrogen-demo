//
//  LoginViewController.swift
//  ios-sdk-demo
//
//  Created by pengquanhua on 2019/4/12.
//  Copyright © 2019 ifanr. All rights reserved.
//

import UIKit
import MinCloud

class LoginViewController: UIViewController {
    @IBOutlet weak var username: UITextField!

    @IBOutlet weak var password: UITextField!
    override func viewDidLoad() {
        //super.viewDidLoad()
        if Auth.hadLogin {
            let sb = UIStoryboard(name: "Main", bundle: nil)
            let viewController = sb.instantiateViewController(withIdentifier: "ViewController")
            self.navigationController?.pushViewController(viewController, animated: true)
        }
    }

    @IBAction func registerClick(_ sender: Any) {
        let name = username.text
        let psd = password.text

        if let name = name, name.count > 0, let psd = psd, psd.count > 0{
            self.register(username: name, password: psd)
        } else {
            self.showMessage("请输入正确的用户名和密码")
        }
    }

    @IBAction func loginClick(_ sender: Any) {
        let name = username.text
        let psd = password.text

        if let name = name, name.count > 0, let psd = psd, psd.count > 0{
            self.login(username: name, password: psd)
        } else {
            self.showMessage("请输入正确的用户名和密码")
        }
    }

    func showMessage(_ message: String) {
        let alertController = UIAlertController(title: "提示",
                                                message: message, preferredStyle: .alert)
        let cancelAction = UIAlertAction(title: "取消", style: .cancel, handler: nil)
        alertController.addAction(cancelAction)
        self.present(alertController, animated: true, completion: nil)
    }
}

extension LoginViewController {
    func login(username: String, password: String) {
        Auth.login(username: username, password: password) { (currentUser, error) in
            if let error = error {
                let message = "code: \(error.code) / description: \(error.localizedDescription)"
                self.showMessage(message)
            } else {
                let sb = UIStoryboard(name: "Main", bundle: nil)
                let viewController = sb.instantiateViewController(withIdentifier: "ViewController")
                self.navigationController?.pushViewController(viewController, animated: true)
            }
        }
    }

    func register(username: String, password: String) {
        Auth.register(username: username, password: password) { (currentUser, error) in
            if let error = error {
                let message = "code: \(error.code) / description: \(error.localizedDescription)"
                self.showMessage(message)
            } else {
                let sb = UIStoryboard(name: "Main", bundle: nil)
                let viewController = sb.instantiateViewController(withIdentifier: "ViewController")
                self.navigationController?.pushViewController(viewController, animated: true)
            }
        }
    }
}
