import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  slideWithNav: IonSlides;


    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  slideOpt = {
    loop: true,
    autoplay: true,
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  };

  sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          image: '../assets/image/Cover Photos/LiveMusic749x1920.jpg'
        },
        {
          id: 2,
          image: '../assets/image/Cover Photos/IslandersBench1920x749jpg.jpg'
        },
        {
          id: 3,
          image: '../assets/image/Cover Photos/ShrekTheMusical1920x749.jpg'
        }
      ]
    };


    // Move to Next slide
slideNext(object, slideView) {
      slideView.slideNext(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });
    }

    // Move to previous slide
slidePrev(object, slideView) {
      slideView.slidePrev(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });
    }

    // Method called when slide is changed by drag or navigation
SlideDidChange(object, slideView) {
      this.checkIfNavDisabled(object, slideView);
    }

    // Call methods to check if slide is first or last to enable disbale navigation
checkIfNavDisabled(object, slideView) {
      this.checkisBeginning(object, slideView);
      this.checkisEnd(object, slideView);
    }

checkisBeginning(object, slideView) {
      slideView.isBeginning().then((istrue) => {
        object.isBeginningSlide = istrue;
      });
    }
checkisEnd(object, slideView) {
      slideView.isEnd().then((istrue) => {
        object.isEndSlide = istrue;
      });
    }

constructor(private breakpointObserver: BreakpointObserver) {}

}
