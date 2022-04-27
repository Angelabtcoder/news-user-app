import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ArchivedNewsService } from 'src/app/services/archived-news.service';
import { News } from 'src/app/models/news';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-archived-news',
  templateUrl: './archived-news.component.html',
  styleUrls: ['./archived-news.component.scss']
})
export class ArchivedNewsComponent implements OnInit {
  listArchived: News[] = [];

  constructor(private _newsService: NewsService,
              private _archivedNewsService: ArchivedNewsService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getArchived();
  }

  getArchived() {
    this. _archivedNewsService.getArchived().subscribe({
      next: data => { console.log(data);
                      this.listArchived = data;
    },
    error: err => {
      console.log(err);
    }  
    
    });

  }

  deleteArchived(id: any) {
    this._archivedNewsService.deleteArchived(id).subscribe ({
      next: data => { this.toastr.error('The news was successfully deleted' ,'Deleted news');
                        this.getArchived();
      },
       error: err => {
        console.log(err);
       }
   });

  }

}
