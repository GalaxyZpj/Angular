import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() pageLoad = new EventEmitter<string>();

    onSelect(comp: string) {
        this.pageLoad.emit(comp);
    }
    
}