import { Component, OnInit } from '@angular/core';

// 載入資料來源。
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Router } from '@angular/router';

import { AccountService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  user: User;
  p01 = 'p01';
  p02 = 'p02';
  p_product_id;
  p_name;
  p_discription;
  p_image;

  // constructor() { }
  constructor(private activatedRoute: ActivatedRoute, private accountService: AccountService, private router: Router) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  quantity = 1;

  p_id;
  ngOnInit(): void {
    this.p_id = this.activatedRoute.snapshot.queryParamMap.get('id').toString();
    if (this.activatedRoute.snapshot.queryParamMap.get('id').toString() == 'p01') {
      this.p_id = 'p01';
      this.p_product_id = 'p01';
      this.p_name = '香甜香蕉';
      this.p_discription = '由2000全國香蕉大賽冠軍ＸＸＸ所耕種的香蕉，運用其超過20年的耕種資歷，所種出的香蕉口感綿密、味道香甜，不論做成甜點或是直接吃都是不錯的選擇';
      this.p_image = 'assets/imgs/banana.jpg';
    }
    else if (this.activatedRoute.snapshot.queryParamMap.get('id').toString() == 'p02') {
      this.p_id = 'p02';
      this.p_product_id = 'p02';
      this.p_name = '香甜西瓜';
      this.p_discription = '由2000全國西瓜大賽冠軍ＸＸＸ所耕種的西瓜，運用其超過20年的耕種資歷，所種出的西瓜口感爽脆、味道香甜，不論入菜或是涼拌都是不錯的選擇';
      this.p_image = 'assets/imgs/watermelon.jpg';
    };
  }

  /** 是否已經登入 */
  isLogin() {
    return sessionStorage.getItem('user') !== null;
  }

  product(): void {
    this.router.navigate(['/product']);
  }


}
