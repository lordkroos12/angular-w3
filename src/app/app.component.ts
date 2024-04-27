import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

type Note = {
  title: string,
  content: string
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FormsModule,CommonModule]
})
export class AppComponent {
  toggleButtons(index: number) {
    this.showButtons = !this.showButtons;
    this.currIndex = index;
  }
  editNote() {
    this.editIndex = this.currIndex;
    this.currTitle = this.notes[this.currIndex].title
    this.currContent = this.notes[this.currIndex].content;
  }
  removeNote() {
    this.notes.splice(this.currIndex, 1);
  }

  notes: Note[] = [];
  public currTitle = '';
  public currContent = '';
  public showButtons = false;
  public currIndex = 0;
  public editIndex = -1;

  saveNote() {
    if (this.currTitle.length < 5 || this.currContent.length < 7)
      {
        return;
      }
    if (this.editIndex >= 0) {
      this.notes[this.editIndex].title = this.currTitle
      this.notes[this.editIndex].content = this.currContent
    }
    else {
      let note: Note = {
        title: this.currTitle,
        content: this.currContent
      }
      this.notes.push(note);
    }

    this.currContent = "";
    this.currTitle = "";
    this.showButtons = false;
    this.editIndex = -1;
  }


}
