import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableBoardComponent } from './components/table-board/table-board.component';

const routes: Routes = [
  { path: '', component: TableBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
