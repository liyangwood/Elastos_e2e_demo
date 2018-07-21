import { Component } from '@angular/core';
import Base from '../Base';
import HomePage from '../home/home';
import * as _ from 'lodash';

@Component({
  selector: 'page-login',
  templateUrl: 'main.html'
})
export default class Page extends Base {
  private main = 'sign_in';

  private signup_param: any;
  private signin_param: any;

  _init(){
    this.resetSignUp();
    this.resetSignIn();
  }

  resetSignUp(){
    this.signup_param = {
      username : '',
      password : '',
      nickname : ''
    };
  }
  resetSignIn(){
    this.signin_param = {
      username : '',
      password : ''
    };
  }
  async actionDidLogin(){
    this.showLoading('login ...');
    _.delay(()=>{
      this.userService.login({
        name : 'jacky.li'
      });
      this.hideLoading();

      this.navCtrl.push(HomePage);
    }, 2000);

    return false;
    // const data = this.signin_param;
    // const key = data.username;

    // if(!data.username || !data.password){
    //   this.warning('invalid param');
    //   return false;
    // }

    // const rs = await this.didService.getData(key);
    // if(!rs){
    //   this.warning('incorrect username or password');
    //   return false;
    // }
    // alert(rs.nickname);
  }

  async ionViewDidLoad(){
    this.main = 'sign_in';

  }

  async testDID(){
    await this.didService.test();
  }

  async signup(){
    const data = this.signup_param;
    const key = data.username;

    if(!data.username || !data.password || !data.nickname){
      this.warning('invalid param');
      return false;
    }

    this.showLoading();
    await this.didService.saveData(key, data);

    this.hideLoading();
    this.toast('success');
    this.main = 'sign_in';
  }

}
