import { async, TestBed } from '@angular/core/testing';
import { AlbumComponent } from './album.component';
describe('AlbumComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AlbumComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AlbumComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/chethanshetty/Repos/AngularJS/ngspotify/src/app/components/album/album.component.spec.js.map