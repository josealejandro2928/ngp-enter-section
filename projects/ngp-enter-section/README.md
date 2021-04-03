# NgpEnterSectionDirective

Angular library for creating section input animations on the X and Y axes. When elements are in the viewPort.

### Installation

```sh
npm i ngp-enter-section --save
```

### Usages

You must import the module `NgpEnterSectionModule` where you will use it and use the component

```typescript
***
import { NgpEnterSectionModule } from 'ngp-enter-section';
@NgModule({
  ***
  imports: [
    NgpEnterSectionModule,
  ],
****
})
```

In your component:

```html
 <div class="container">
    <div ngpEnterSection dirX="left">
        <h1 class="h1" >{{'Disfruta nuestras realizaciones'}}</h1>
        <h4>
          {{'Observa en tu dispositivo móvil o pc de escritorio, series, spots, documentales, podcats y mucho más.'}}
        </h4>
      </div>
      
    <div ngpEnterSection dirX="right" dirY="bottom" >
        <img class="image-section section1" src="assets/images/image-section-1.png" />
        <video id="video-section1" class="video-play" autoplay="true" muted="muted" loop="true">
          <source src="assets/videos/video-section-2.mp4" type="video/mp4" />
        </video>
    </div>
```
The example above creates an entry from the left for the first div and creates an entry from the right upwards in the second div

### More configuration

The `NgpEnterSectionDirective`  has more parameters like direction = 'left|right' and the timing for the animation, default value is '1s'

```html
 <div ngpEnterSection dirY="top" time=".5s">
    <p>{{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}}</h1>
  </div>
```

