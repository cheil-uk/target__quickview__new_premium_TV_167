export default class BulletPoints {
 changeBulletPoints() {

  const skuObj = {
   QE85QN900BTXXU: [
   'Ultra-sharp lights, extreme contrast and jaw-dropping detail',
   'Edge-to-edge viewing on the endlessly stunning Infinity Screen',
   'Incredible depth, stunning detail and industry-leading brightness',
   'Unleash the full power of 8K, thanks to our most intelligent processor yet',
   '12 multi-directional TV speakers deliver best-in-class 3D surround sound powered by Dolby Atmos'],
   QE85QN800BTXXU: [
   'Ultra-sharp lights, extreme contrast and jaw-dropping detail',
   'Unleash the full power of 8K, thanks to our most intelligent processor yet',
   'Catch all the action from any angle and see every brilliant detail, without distracting glare',
   'Spectacular detail with flawless colour, exceptional contrast and leading HDR brightness',
   '8 multi-directional TV speakers deliver 3D surround sound powered by Dolby Atmos'],
   QE75QN800BTXXU: [
   'Ultra-sharp lights, extreme contrast and jaw-dropping detail',
   'Edge-to-edge viewing on the endlessly stunning Infinity Screen',
   'Incredible depth, stunning detail and industry-leading brightness',
   'Unleash the full power of 8K, thanks to our most intelligent processor yet',
   '12 multi-directional TV speakers deliver best-in-class 3D surround sound powered by Dolby Atmos'],
   QE75QN700BTXXU: [
   'Super-focused lights, epic blacks and a brilliantly intense picture',
   'A new dimension of reality unfolds with 8K TV, featuring four times more detail than 4K',
   'Spectacular detail with flawless colour, exceptional contrast and leading HDR brightness',
   'A stunning ultra slim TV with no messy cables, so your only focus is the content you’re watching.',
   'Built-in TV speakers work together to deliver virtual 3D surround sound with Dolby Atmos',
   ],
   QE85QN95BATXXU: [
   'Mighty AI-powered processor transforms your entertainment.',
   'Catch all the action from any angle and see every brilliant detail, without distracting glare.',
   '8 multi-directional TV speakers deliver 3D surround sound powered by Dolby Atmos',
   'Unrivalled 4K 144Hz TV motion for gaming-monitor performance',
   'A stunningly ultra slim TV with no messy cables, designed to lift all distractions away,'
   ],
   QE85QN90BATXXU: [
   'Super-focused lights, epic blacks and a brilliantly intense picture',
   'Catch all the action from any angle and see every brilliant detail, without distracting glare*',
   'Exceptional detail unveiled with bright colour and rich contrast',
   'As quick as a flash, ready for your next-gen console',
   'The brilliance of AI-powered 4K TV viewing'
   ],
   QE85QN90BATXXU: [
   'Ultra-sharp lights, extreme contrast and jaw-dropping detail',
   'Edge-to-edge viewing on the endlessly stunning Infinity Screen',
   'Incredible depth, stunning detail and industry-leading brightness',
   'Unleash the full power of 8K, thanks to our most intelligent processor yet',
   '12 multi-directional TV speakers deliver best-in-class 3D surround sound powered by Dolby Atmos'
   ],
   QE85QN85BATXXU: [
   'Super-focused lights, epic blacks and a brilliantly intense picture',
   'A brilliant processor that powers 4K viewing and next-level AI sound experience',
   'Exceptional detail unveiled with bright colour and rich contrast',
   '6 multi-directional TV speakers deliver3D surround sound with Dolby Atmos',
   'Elegant TV design, from all angles'
   ],
   QE75QN700ATXXU: [
   'Ultra-sharp lights & pixel-perfect contrast, for our finest 8K picture yet',
   'Thrilling 3D audio with Object Tracking Sound+ (OTS+)',
   'Distraction-free viewing on an ultra slim TV with tidy cables',
   'Smart TV apps: Netflix, Prime Video, Disney+, BT Sport and more…'
   ],
   QE65QN800BTXXU: [
   'Ultra-sharp lights & pixel-perfect contrast, for our finest 8K picture yet',
   'Thrilling 3D audio with Object Tracking Sound+ (OTS+)',
   'Distraction-free viewing on an ultra slim TV with tidy cables',
   'Smart TV apps: Netflix, Prime Video, Disney+, BT Sport and more…'
   ],
   QE55QN95BATXXU: [
   'Ultra-sharp lights & pixel-perfect contrast, for our finest 8K picture yet',
   'Thrilling 3D audio with Object Tracking Sound+ (OTS+)',
   'Distraction-free viewing on an ultra slim TV with tidy cables',
   'Smart TV apps: Netflix, Prime Video, Disney+, BT Sport and more…'
   ],
  }


  const currentPopUpSku = document.querySelector("#myModal > div > div > div.product__info__content > small").textContent;
  const bulletPoints = document.querySelectorAll('.usp-text');
  for (const sku in skuObj) {
   if (Object.hasOwnProperty.call(skuObj, sku)) {
    const currentSpecs = skuObj[sku];

    if (currentPopUpSku === sku ) {

     bulletPoints.forEach((bulletPoint, x) => {
      currentSpecs.forEach((specs, y) => {
       (x === y) ? bulletPoint.innerText = specs : bulletPoint.innerText;
      });
     });
    }

   }
  }
 }
}