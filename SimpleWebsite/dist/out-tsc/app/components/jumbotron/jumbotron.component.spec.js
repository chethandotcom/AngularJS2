import { async, TestBed } from '@angular/core/testing';
import { JumbotronComponent } from './jumbotron.component';
describe('JumbotronComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [JumbotronComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(JumbotronComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/chethanshetty/Repos/AngularJS/a2website/src/app/components/jumbotron/jumbotron.component.spec.js.map