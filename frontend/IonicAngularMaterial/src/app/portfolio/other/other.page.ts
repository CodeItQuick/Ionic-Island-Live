import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage {

  slideWithNav: IonSlides;
  portfolio: string;


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

    sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          image: './../assets/image/IslandSportWheelchairBasketball.jpg'
        },
        {
          id: 2,
          image: './../assets/image/800NationalDodgeball.jpg'
        },
        {
          id: 3,
          image: './../assets/image/CanadianRingetteChampionships.jpg'
        },
        {
          id: 4,
          image: './../assets/image/Curated/800/HockeyOct11_1.jpg'
        },
        {
          id: 5,
          image: './../assets/image/Curated/800/HockeyOct11_2.jpg'
        },
        {
          id: 6,
          image: './../assets/image/Curated/800/IslandersVsHalifax.jpg'
        }
      ]
    };

    sliderThree =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          image: './../assets/image/JazzFestivalSaxophone700.jpg'
        },
        {
          id: 2,
          image: './../assets/image/IslandMicMac700.jpg'
        },
        {
          id: 3,
          image: './../assets/image/IslandLiveJazzPlayer.jpg'
        },
        {
          id: 4,
          image: './../assets/image/Curated/800/EnnisSisters.jpg'
        },
        {
          id: 5,
          image: './../assets/image/Curated/800/PEISO.jpg'
        },
        {
          id: 6,
          image: './../assets/image/Curated/800/CatherineMacLellan.jpg'
        }
      ]
    };

    sliderFour =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          image: './../assets/image/Curated/800/Leopard.jpg'
        },
        {
          id: 2,
          image: './../assets/image/Curated/800/zebra 5X7 b&W.jpg'
        },
        {
          id: 3,
          image: './../assets/image/Curated/800/BeautyAndBeast.jpg'
        },
        {
          id: 4,
          image: './../assets/image/FridayNightBluesStMarysChurch.jpg'
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

  OpenPage() {
    if (this.portfolio === 'sports') {
      this.router.navigateByUrl(`sports`);
    } else if (this.portfolio === 'events') {
      this.router.navigateByUrl(`events`);
    } else if (this.portfolio === 'other') {
    this.router.navigateByUrl(`other`);
    }
  }

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}


}
