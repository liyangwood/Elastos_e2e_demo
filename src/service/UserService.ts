import Base from './Base';
import * as _ from 'lodash';

export default class extends Base {
  public current;
  public isLogin;

  _init(){
    const ls = localStorage.getItem('current_user');
    if(ls){
      const user = JSON.parse(ls);

      this.isLogin = true;
      this.current = user;
    }
  }

  login(user){
    this.current = user;
    this.isLogin = true;

    this.save();
  }

  logout(){
    this.current = null;
    this.isLogin = false;

    localStorage.removeItem('current_user');
  }

  save(){
    localStorage.setItem('current_user', JSON.stringify(this.current));
  }

  setWalletAddress(wallet_info){
    if(!this.isLogin){
      throw 'need login';
    }

    if(!this.current.wallet){
      this.current.wallet = [];
    }

    if(this.getWalletByAddress(wallet_info.address)){
      throw 'address was exist';
    }

    this.current.wallet.push(wallet_info);
    this.save();
  }

  getWalletByAddress(address){
    return _.find(this.current.wallet, (item)=>{
      return item.address === address;
    });
  }
}