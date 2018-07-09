import { Component, ViewChild } from '@angular/core';

import Base from '../Base';
import WalletSendPage from '../wallet_send';

console.log('111111111111');
@Component({
  selector: 'page-wallet_info',
  templateUrl: 'main.html'
})
export default class Page extends Base {
  private wallet_list : any[];

  showAddPrompt(){
    const alert = this.alertCtrl.create({
      title : 'Add Address',
      inputs : [
        {
          name : 'address',
          placeholder : 'Input new ela address'
        }
      ],
      buttons : [
        {
          text : 'Cancel',
          role : 'cancel'
        },
        {
          text : 'Save',
          handler : (data)=>{
            this.addNewAddress(data.address).then(()=>{});
          }
        }
      ]
    });
    alert.present();
  }

  async addNewAddress(address){
    // try{
    //   const info = await this.walletService.getInfo(address);
    //   this.userService.setWalletAddress(info);
    //   this.syncWallet();
    // }catch(e){
    //   this.warning(e);
    // }
//     this.walletService.getDIDList((a,b,c)=>{
// console.log(a,b,c);
// alert(a+'\n'+b+'\n'+c);
//     });
  }

  async ionViewDidLoad_AfterLogin(){
    this.syncWallet();
  }

  syncWallet(){
    this.wallet_list = this.userService.current.wallet;
  }

  goToSendPage(item){
    this.navCtrl.push(WalletSendPage, item);
  }

}
