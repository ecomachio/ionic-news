import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worldwideTab',
  templateUrl: 'worldwideTab.page.html',
  styleUrls: ['worldwideTab.page.scss']
})
export class WorldWideTabPage implements OnInit {

  public articles: any;

  constructor(private newsService: NewsService, private router: Router) { }

  async ngOnInit() {
    const res: any = await this.newsService.getNews(null, 'us');
    this.articles = res.articles;
  }

  public detail(article) {
    this.newsService.article = article;
    this.router.navigateByUrl('detail-news');
  }

  async doRefresh(event) {
    console.log(event);
    const res: any = await this.newsService.getNews(null, 'us');
    this.articles = res.articles;
    event.target.complete();
  }
}
