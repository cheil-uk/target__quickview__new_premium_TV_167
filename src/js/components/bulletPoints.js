export default class BulletPoints {
 changeBulletPoints() {
  const QN800B = [
   'Ultra-sharp lights, extreme contrast and jaw-dropping detail',
   'Unleash the full power of 8K, thanks to our most intelligent processor yet',
   'Catch all the action from any angle and see every brilliant detail, without distracting glare',
   'Spectacular detail with flawless colour, exceptional contrast and leading HDR brightness',
   '8 multi-directional TV speakers deliver 3D surround sound powered by Dolby Atmos']
   const QN900B = [
   'Ultra-sharp lights, extreme contrast and jaw-dropping detail',
   'Edge-to-edge viewing on the endlessly stunning Infinity Screen',
   'Incredible depth, stunning detail and industry-leading brightness',
   'Unleash the full power of 8K, thanks to our most intelligent processor yet',
   '12 multi-directional TV speakers deliver best-in-class 3D surround sound powered by Dolby Atmos']
   const QN700B = [
   'Super-focused lights, epic blacks and a brilliantly intense picture',
   'A new dimension of reality unfolds with 8K TV, featuring four times more detail than 4K',
   'Spectacular detail with flawless colour, exceptional contrast and leading HDR brightness',
   'A stunning ultra slim TV with no messy cables, so your only focus is the content you’re watching.',
   'Built-in TV speakers work together to deliver virtual 3D surround sound with Dolby Atmos',
   ]
   const QN95B = [
   'Mighty AI-powered processor transforms your entertainment.',
   'Catch all the action from any angle and see every brilliant detail, without distracting glare.',
   '8 multi-directional TV speakers deliver 3D surround sound powered by Dolby Atmos',
   'Unrivalled 4K 144Hz TV motion for gaming-monitor performance',
   'A stunningly ultra slim TV with no messy cables, designed to lift all distractions away,'
   ]
   const QN90B = [
   'Super-focused lights, epic blacks and a brilliantly intense picture',
   'Catch all the action from any angle and see every brilliant detail, without distracting glare*',
   'Exceptional detail unveiled with bright colour and rich contrast',
   'As quick as a flash, ready for your next-gen console',
   'The brilliance of AI-powered 4K TV viewing'
   ]
   const QN85B = [
   'Super-focused lights, epic blacks and a brilliantly intense picture',
   'A brilliant processor that powers 4K viewing and next-level AI sound experience',
   'Exceptional detail unveiled with bright colour and rich contrast',
   '6 multi-directional TV speakers deliver3D surround sound with Dolby Atmos',
   'Elegant TV design, from all angles'
   ]
   const QN700A = [
   'Ultra-sharp lights & pixel-perfect contrast, for our finest 8K picture yet',
   'Thrilling 3D audio with Object Tracking Sound+ (OTS+)',
   'Distraction-free viewing on an ultra slim TV with tidy cables',
   'Smart TV apps: Netflix, Prime Video, Disney+, BT Sport and more…'
   ]
  const skuObj = {
   QE85QN900BTXXU: QN900B,

   QE75QN800ATXXU: QN900B,
   QE65QN800ATXXU: QN900B,
   QE85QN800ATXXU: QN900B,

   QE65QN900BTXXU: QN900B,
   QE75QN900BTXXU: QN900B,
   QE85QN900BTXXU: QN900B,

   QE85QN800BTXXU: QN800B,
   QE65QN800BTXXU: QN800B,
   QE75QN800BTXXU: QN800B,

   QE75QN700BTXXU: QN700B,
   QE55QN700BTXXU: QN700B,
   QE65QN700BTXXU: QN700B,

   QE55QN95BATXXU: QN95B,
   QE65QN95BATXXU: QN95B,
   QE75QN95BATXXU: QN95B,
   QE85QN95BATXXU: QN95B,

   QE43QN90BATXXU: QN90B,
   QE50QN90BATXXU: QN90B,
   QE55QN90BATXXU: QN90B,
   QE65QN90BATXXU: QN90B,
   QE75QN90BATXXU: QN90B,
   QE85QN90BATXXU: QN90B,

   QE55QN85BATXXU: QN85B,
   QE65QN85BATXXU: QN85B,
   QE75QN85BATXXU: QN85B,
   QE85QN85BATXXU: QN85B,

   QE55QN700ATXXU: QN700A,
   QE65QN700ATXXU: QN700A,
   QE75QN700ATXXU: QN700A,
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