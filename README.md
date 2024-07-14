# Proyecto de Sitio Web de Cerveza 🍺

¡Bienvenido al proyecto de inicio en desarrollo web para la marca de cerveza Delomai! Este proyecto está desarrollado utilizando HTML, CSS y JavaScript puro, sin dependencias de npm ni archivos `package.json`. A continuación, se detallan los contenidos y la estructura del proyecto.

## Estructura del Proyecto 📁

```bash
.vscode/
assets/
├── icons/
│ ├── FB-Vector.svg
│ ├── ham-menu.svg
│ ├── insta-Vector.svg
│ ├── lupulo 1.svg
│ └── Whatsapp-Vector.svg
├── imgs/
│ ├── amber Ale.webp
│ ├── amber_calafate.webp
│ ├── beer-about (1).webp
│ ├── beercup-desktop.webp
│ ├── beercup-mobile.webp
│ ├── Cerveza Délomai Golden Ale.webp
│ ├── Cerveza Délomai Stout.webp
│ ├── Cerveza délomai-IPA.webp
│ ├── Desktop-view.webp
│ ├── familia delomai 3.webp
│ ├── hero-mobile.webp
│ ├── img1.webp
│ ├── img2.webp
│ ├── img3.webp
│ ├── img4.webp
│ ├── img5.webp
│ ├── img6.webp
│ ├── vaso cerveza semitono 1.webp
│ └── weizen_final.webp
└── logos/
└── Delomai.svg
fonts/
└── Root Beer.otf
pages/
├── about.html
├── amber-ale.html
├── amber-calafate.html
├── beerpacks.html
├── golden-ale.html
├── ipa.html
├── stout.html
└── weizen.html
styles/
├── about-styles.css
├── amber-ale-styles.css
├── amber-calafate-styles.css
├── beerpacks-styles.css
├── golden-ale-styles.css
├── ipa-styles.css
├── normalize.css
├── stout-styles.css
├── styles.css
└── weizen-styles.css
.gitignore
index.html
main.js

```

## Descripción del Proyecto 📝

Este proyecto tiene como objetivo crear un sitio web atractivo y funcional para la marca de cerveza Delomai. Se han utilizado prácticas de desarrollo web modernas para asegurar una experiencia de usuario óptima tanto en dispositivos de escritorio como en móviles.

### Funcionalidades Principales 🚀

- **Imágenes Responsivas**: Utilizando el elemento `<picture>` para cargar diferentes versiones de imágenes en función del tamaño de la pantalla.
- **Lazy Loading**: Implementado para mejorar el rendimiento en la carga de imágenes.
- **Transiciones y Animaciones**: Mejora visual a través de transiciones y animaciones CSS.
- **Diseño Responsive**: Adaptado para verse bien en una variedad de dispositivos y tamaños de pantalla.

## Instrucciones de Uso 📚

Para utilizar este proyecto, simplemente clona el repositorio y abre `index.html` en tu navegador. No se requieren dependencias adicionales.

```bash
git clone [URL del repositorio]
cd [nombre-del-repositorio]
open index.html
```

## Mejora del Rendimiento 🚄

Para asegurar que el sitio web se carga rápidamente en dispositivos móviles, hemos implementado las siguientes optimizaciones:

1. **Redimensionamiento de Imágenes**: Las imágenes han sido optimizadas y redimensionadas a resoluciones adecuadas:
   - **Imagen Desktop**: 1920 x 1080 px
   - **Imagen Mobile**: 720 x 1280 px
2. **Lazy Loading**: Se ha añadido el atributo `loading="lazy"` a las imágenes para diferir la carga hasta que sean visibles en el viewport.

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Siéntete libre de enviar pull requests para mejoras o arreglos.

## Licencia 📄

Este proyecto está licenciado bajo la Licencia MIT.

---

¡Gracias por visitar nuestro proyecto! Esperamos que disfrutes navegando por el sitio web de Delomai. 🍻
