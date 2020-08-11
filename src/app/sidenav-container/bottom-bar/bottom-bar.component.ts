import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@shared/icons/icons.module';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}

@NgModule({
  declarations: [
    BottomBarComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    IconsModule,
    MatRippleModule
  ]
})
class BottomBarModule {
}
