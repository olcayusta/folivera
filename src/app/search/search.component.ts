import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '@shared/services/search.service';
import { Movie } from '@shared/models/movie';
import { Observable, Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  movies$: Observable<Movie[]>;

  subscription: Subscription;

  constructor(
    private searchService: SearchService,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle(`Ara - ${environment.appName}`);
    this.subscription = this.searchControl.valueChanges.subscribe(value => {
      if (value.length) {
        this.movies$ = this.searchService.search(value);
        this.title.setTitle(`${value} - ${environment.appName}`)
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
