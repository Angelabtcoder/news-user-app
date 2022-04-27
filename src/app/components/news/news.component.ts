import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ArchivedNewsService } from 'src/app/services/archived-news.service';
import { News } from 'src/app/models/news';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  listNews: News[] = [];
  news: any;

  constructor(private _newsService: NewsService,
              private _archivedNewsService: ArchivedNewsService,
              private toastr: ToastrService,
              private router: Router, ) { }

  ngOnInit(): void {
    this.getNews();
    this.refresh();
  }

  refresh() {
        this._newsService.saveNews(this.news).subscribe({
        next: data => { console.log(data);
                        this.router.navigate(['/news']);
                        this.listNews = data;
      },
        error: err => {
                console.log(err);
        }      
      });
    }

 

  getNews() {
    this._newsService.getNews().subscribe({
      next: data => { console.log(data);
                      this.listNews = data;
    },
      error: err => {
              console.log(err);
      }      
    });
  }

  archiveNews(id: any) { 
    this.listNews.forEach(news => {if(news._id === id) {
     
      this._archivedNewsService.saveArchived(news).subscribe({
        next: data => { this.toastr.success('The news was successfully archived' ,'Archived news!');
                         console.log(news);                        
        },
        error: err => {
          console.log(err);
        } 
      });
      this._newsService. deleteNews(id).subscribe({
        next: data => { this.getNews();
      },
       error: err => {
        console.log(err);
       }
      });

    }
  });
  }

}  
