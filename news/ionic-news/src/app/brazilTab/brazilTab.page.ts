import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brazilTab',
  templateUrl: 'brazilTab.page.html',
  styleUrls: ['brazilTab.page.scss']
})
export class BrazilTabPage implements OnInit {

  public articles: any;

  constructor(private newsService: NewsService, private router: Router) { }

  async ngOnInit() {
    const res: any = await this.newsService.getNews(null, 'br');
    this.articles = res.articles;
  }

  public detail(article) {
    this.newsService.article = article;
    this.router.navigateByUrl('detail-news');
  }

  async doRefresh(event) {
    console.log(event);
    const res: any = await this.newsService.getNews(null, 'br');
    this.articles = res.articles;
    event.target.complete();
  }
}
