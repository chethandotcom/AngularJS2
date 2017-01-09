import { async, TestBed } from '@angular/core/testing';
import { ArtistComponent } from './artist.component';
describe('ArtistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ArtistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ArtistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/chethanshetty/Repos/AngularJS/ngspotify/src/app/components/artist/artist.component.spec.js.map