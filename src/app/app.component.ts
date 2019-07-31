import { Component } from "@angular/core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Copa de Filmes';
  constructor(
    private _loadingBar: SlimLoadingBarService,
    private _router: Router  ) {
    this._router.events.subscribe((event: Event) => {
      this.NavigationInterceptor(event);
    });
  }

  private NavigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
}
