import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from "../../components/side-menu/side-menu";

@Component({
  selector: 'app-dashboard-pages',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashboard-pages.html',
})
export default class DashboardPages { }
