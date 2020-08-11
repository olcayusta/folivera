import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LibraryService } from '../library/services/library.service';
import { Movie } from '@shared/models/movie';
import { Observable } from 'rxjs';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-watch-later',
  templateUrl: './watch-later.component.html',
  styleUrls: ['./watch-later.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchLaterComponent implements OnInit {
  movies$: Observable<Movie[]>;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Eklendiği tarih (en yeni)'},
    {value: 'pizza-1', viewValue: 'Eklendiği tarih (en eski)'},
    {value: 'tacos-2', viewValue: 'En popüler'}
  ];

  constructor(
    private libraryService: LibraryService
  ) { }

  ngOnInit(): void {
    this.movies$ = this.libraryService.getWatchLaterMovies();
  }

}
