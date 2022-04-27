import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

//import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {
  newsForm: FormGroup;

  constructor(private fb: FormBuilder,              
              private router: Router,
              private toastr: ToastrService,
              private _newsService: NewsService
              ) {
                this.newsForm = this.fb.group({
                  title: new FormControl('', Validators.required),
                  author:  new FormControl('', Validators.required),
                  description: new FormControl('', Validators.required),
                  content: new FormControl('', Validators.required),                  
                })
              }

  ngOnInit(): void {
    
  }

 

  addNews() {
    const NEWS: News = {
      title: this.newsForm.get('title')?.value,
      author: this.newsForm.get('author')?.value,
      description: this.newsForm.get('description')?.value,
      content: this.newsForm.get('content')?.value,
      date: '',
      archiveDate: ''
    }
     
    const time = Date.now();
    const today = new Date(time);
    NEWS.date = today.toDateString();

    console.log(NEWS);
    this._newsService.saveNews(NEWS).subscribe({
      next: data => {
        this.toastr.success('The news was successfully registered!', 'Recorded news!');
        this.router.navigate(['/news']);
      },
      error: err => {
        console.log(err);
        this.newsForm.reset();
      }  
    });

  }

}

