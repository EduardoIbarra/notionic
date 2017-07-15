import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    notes = [];
    @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public notesService : NotesService) {
      notesService.getNotes()
          .subscribe( notas => {
              this.notes = notas;
          });
  }

  public goToDetail(id){
        this.navCtrl.push(DetailPage, {id:id});
  }

    public createNote(){
        this.navCtrl.push(DetailPage, {id:0});
    }

}
