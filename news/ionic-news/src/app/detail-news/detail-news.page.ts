import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { isNullOrUndefined } from 'util';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.page.html',
  styleUrls: ['./detail-news.page.scss'],
})
export class DetailNewsPage implements OnInit {

  public article;

  constructor(private newsService: NewsService, private navCtrl: NavController) { }

  ngOnInit() {
    this.article = { ...this.newsService.article };

    if (isNullOrUndefined(this.newsService.article)) {
      this.navCtrl.navigateRoot('');
    }

    this.article.description = this.cleanContent(this.article.description, 'http');
    this.article.content = this.cleanContent(this.article.content, '...');
    this.article.content = this.cleanContent(this.article.content, '…');
    this.article.content = this.cleanContent(this.article.content, 'http');
  }

  private cleanContent(str: string, dirty: string): string {
    if (isNullOrUndefined(str)) {
      return '';
    }
    const idx = str.indexOf(dirty);
    return str.substring(0, idx !== -1 ? idx : str.length);
  }

  goBack() {
    this.navCtrl.back();
  }

}
