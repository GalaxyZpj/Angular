import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();


  constructor() { }

  ngOnInit() {
  }

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}