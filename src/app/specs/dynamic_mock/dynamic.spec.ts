import { fakeAsync } from "@angular/core/testing";
import { Observable, map, of } from "rxjs";



describe('Dynamic mock testing', () => {
    

    it('', fakeAsync( () => {
        const helper = new MockHelper();
        helper.getColor('blue').subscribe(color => console.log(color))

    }));
});

class MockHelper {
    public colors$ = of('red', 'green', 'blue', 'orange', 'purple');
    constructor() {}
    public getColor(color: string): Observable<any> {
        return this.colors$.pipe(map( c => c === color));
    }
}