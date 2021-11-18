import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SelectedUser } from './selected-user.class';
import { User } from './user.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedStudents: SelectedUser[] = [];
  students!: User[];

  get showSelected() { return this.selectedStudents; }

  constructor(
    private http: HttpClient
  ) {}

  display(): void {
    this.selectedStudents.forEach(ss => {
      console.log(ss.user.username, ss.selected);
    })
  }

  ngOnInit() {
    this.http.get("http://doudsystems.com/prs5db/api/users").subscribe({
      next: (res) => {
        this.students = res as User[];
        this.students.forEach(s => {
          this.selectedStudents.push(new SelectedUser(s));
        });
      }
    })
  }
}
