/* ============================================================
   DATOS DEL NEGOCIO (extraídos del material entregado por el cliente)
   ============================================================ */
const BUSINESS = {
  name: "Coffeecito Café",
  phone: "56983246806",
  hours: { openHour: 16, openMin: 0, closeHour: 21, closeMin: 30 } // todos los días
};

/* ============================================================
   CATÁLOGO REAL — 111 productos, precios CONFIRMADOS a partir del
   menú oficial entregado por el cliente. Se agrupan en 5 macro-
   categorías para la navegación, respetando las subcategorías
   reales de la carta dentro de cada una.

   3 productos conservan "El Jardín" en su nombre tal como figuran
   en la fuente (El Jardín 5 Sabores, Copa El Jardín XL, Carne al
   Vino El Jardín) — coincide con el nombre/logo de otro negocio
   detectado antes. CONFIRMAR con el cliente antes de publicar.

   No existe fotografía individual por producto (solo 6 fotos reales
   del local); se usa una imagen ambiente representativa por
   macro-categoría en el modal y en el carrito. Reemplazar por
   fotografía de producto real en producción.
   ============================================================ */
const MENU_GROUPS = [
  { key: "cafes",      label: "Cafés & Bebidas",          img: "fotos/cafe-con-arte-latte-real-de-coffeecito.jpg" },
  { key: "pasteleria", label: "Pastelería & Bollería",    img: "fotos/vitrina-real-de-postres-de-coffeecito.jpg" },
  { key: "brunch",     label: "Desayunos & Sándwiches",   img: "fotos/desayuno-real-servido-en-coffeecito.jpg" },
  { key: "postres",    label: "Postres & Helados",        img: "fotos/vitrina-real-de-postres-de-coffeecito.jpg" },
  { key: "grano",      label: "Para Llevar a Casa",       img: null }
];

const PRODUCTS = [{"cat": "Brunch / Desayunos", "group": "brunch", "name": "Brunch (Para 2)", "desc": "Para 2 personas, ideal para compartir. Incluye: 2 jugos naturales a elección, 1 Café Capuchino, 1 Café Americano y selección variada de acompañamientos.", "price": 27000, "id": "brunch-para-2"}, {"cat": "Cafetería", "group": "cafes", "name": "Café Americano", "desc": "Café espresso diluido en agua caliente de sabor suave pero intenso.", "price": 3000, "id": "cafe-americano"}, {"cat": "Cafetería", "group": "cafes", "name": "Espresso Simple", "desc": "Café Fincas del Mundo, 100% Arábico. Origen: Colombia. Región: Caldas. Notas: Toronja, Jarabe de caña.", "price": 2200, "id": "espresso-simple"}, {"cat": "Cafetería", "group": "cafes", "name": "Espresso Doble", "desc": "Doble carga de Café Fincas del Mundo, 100% Arábico. Origen: Colombia. Región: Caldas. Notas: Toronja, Jarabe de caña.", "price": 3000, "id": "espresso-doble"}, {"cat": "Cafetería", "group": "cafes", "name": "Capuccino", "desc": "Café espresso combinado con leche texturizada y una capa densa de espuma de leche.", "price": 3500, "id": "capuccino"}, {"cat": "Cafetería", "group": "cafes", "name": "Capuccino Vainilla", "desc": "Café espresso con leche texturizada, abundante espuma y un toque dulce de vainilla.", "price": 3500, "id": "capuccino-vainilla"}, {"cat": "Cafetería", "group": "cafes", "name": "Latte", "desc": "Espresso suave combinado con abundante leche texturizada al vapor.", "price": 3500, "id": "latte"}, {"cat": "Cafetería", "group": "cafes", "name": "Latte Vainilla", "desc": "Espresso suave con abundante leche texturizada y jarabe de vainilla.", "price": 3900, "id": "latte-vainilla"}, {"cat": "Cafetería", "group": "cafes", "name": "Latte Caramelo", "desc": "Espresso suave con abundante leche texturizada y dulce de caramelo.", "price": 3900, "id": "latte-caramelo"}, {"cat": "Cafetería", "group": "cafes", "name": "Matcha Latte", "desc": "Té verde Matcha de alta calidad batido con leche suave texturizada.", "price": 3900, "id": "matcha-latte"}, {"cat": "Cafetería", "group": "cafes", "name": "Chai Latte", "desc": "Té Chai con especias aromáticas mezclado con leche texturizada.", "price": 3500, "id": "chai-latte"}, {"cat": "Cafetería", "group": "cafes", "name": "Nutella almond latte", "desc": "Un latte cremoso endulzado con Nutella con borde bañado en Nutella y un toque crocante de almendras.", "price": 5000, "id": "nutella-almond-latte"}, {"cat": "Cafetería", "group": "cafes", "name": "Leche de Almendras extra", "desc": "Utiliza para la preparación de tu café Leche de Almendras Almond Breeze Barista.", "price": 500, "id": "leche-de-almendras-extra"}, {"cat": "Cafetería Helada", "group": "cafes", "name": "Milkshake", "desc": "Cremoso batido elaborado con helado a elección.", "price": 4990, "id": "milkshake"}, {"cat": "Cafetería Helada", "group": "cafes", "name": "Iced Coffee", "desc": "Refrescante café frío, con opción de helado o con hielo.", "price": 4990, "id": "iced-coffee"}, {"cat": "Cafetería Helada", "group": "cafes", "name": "Iced Matcha Latte", "desc": "Matcha con leche a elección y hielo. Escoger tipo de Leche Entera Sin Lactosa o de Almendras.", "price": 3700, "id": "iced-matcha-latte"}, {"cat": "Cafetería Helada", "group": "cafes", "name": "Iced Latte", "desc": "Doble carga de Espresso, leche fría y hielo.", "price": 3400, "id": "iced-latte"}, {"cat": "Cafetería Helada", "group": "cafes", "name": "Iced Vainilla Latte", "desc": "Espresso doble, leche, hielo y syrup de vainilla.", "price": 3800, "id": "iced-vainilla-latte"}, {"cat": "Cafetería Helada", "group": "cafes", "name": "Iced Caramel Latte", "desc": "Espresso doble, leche, hielo y syrup de caramelo.", "price": 3800, "id": "iced-caramel-latte"}, {"cat": "Cafetería Helada", "group": "cafes", "name": "Iced Salted Caramel Latte", "desc": "Espresso doble, caramelo con sal de mar, hielo, leche a elección y crema batida.", "price": 3990, "id": "iced-salted-caramel-latte"}, {"cat": "Cafetería Helada", "group": "cafes", "name": "Iced Chai Latte", "desc": "Una deliciosa combinación de té especiado chai, leche fría, canela y un toque de caramelo, servido con hielo.", "price": 3200, "id": "iced-chai-latte"}, {"cat": "Cafetería Helada", "group": "cafes", "name": "Affogato", "desc": "Clásico postre italiano de helado de vainilla coronado con un shot de espresso doble.", "price": 4000, "id": "affogato"}, {"cat": "Cafetería Helada", "group": "cafes", "name": "Milkshake de Nutella", "desc": "Cremoso batido helado preparado con abundante crema de Nutella.", "price": 5490, "id": "milkshake-de-nutella"}, {"cat": "Chocolate", "group": "cafes", "name": "Chocolate Caliente", "desc": "Delicioso y cremoso chocolate caliente artesanal.", "price": 3900, "id": "chocolate-caliente"}, {"cat": "Chocolate", "group": "cafes", "name": "Chocolate Caliente Marshmallows", "desc": "Cremoso chocolate caliente acompañado de suaves marshmallows.", "price": 4300, "id": "chocolate-caliente-marshmallows"}, {"cat": "Chocolate", "group": "cafes", "name": "Mocaccino", "desc": "Perfecta combinación de espresso, chocolate cremoso y leche texturizada.", "price": 3800, "id": "mocaccino"}, {"cat": "Chocolate", "group": "cafes", "name": "Milo", "desc": "Milo con Leche caliente o fría.", "price": 2800, "id": "milo"}, {"cat": "Té e Infusiones", "group": "cafes", "name": "Tetera Té Ceylan 500 ml", "desc": "Clásico té negro en hojas, de aroma intenso y color rojo oscuro. Sabor característico con notas dulces.", "price": 4200, "id": "tetera-te-ceylan-500-ml"}, {"cat": "Té e Infusiones", "group": "cafes", "name": "Tetera Té Verde 500 ml", "desc": "Infusión de las hojas de la planta Camellia sinensis con un alto contenido de antioxidantes.", "price": 4200, "id": "tetera-te-verde-500-ml"}, {"cat": "Té e Infusiones", "group": "cafes", "name": "Tetera Té Verde Naranja", "desc": "Infusión refrescante y rica en antioxidantes que combina té verde con notas cítricas de naranja.", "price": 4200, "id": "tetera-te-verde-naranja"}, {"cat": "Té e Infusiones", "group": "cafes", "name": "Tetera Té Rojo 500ml", "desc": "Té rojo Pu-erh fermentado originario de la provincia de Yunnan con sabor terroso y digestivo.", "price": 4200, "id": "tetera-te-rojo-500ml"}, {"cat": "Té e Infusiones", "group": "cafes", "name": "Tetera Té Azul 500 ml", "desc": "Té chino parcialmente oxidado con un sabor intermedio entre el té verde y el negro.", "price": 4200, "id": "tetera-te-azul-500-ml"}, {"cat": "Té e Infusiones", "group": "cafes", "name": "Tetera Té Jazmín 500 ml", "desc": "Infusión aromática que combina hojas de té con delicatez de flores de jazmín.", "price": 4200, "id": "tetera-te-jazmin-500-ml"}, {"cat": "Té e Infusiones", "group": "cafes", "name": "Tetera Manzanilla 500 ml", "desc": "Ingredientes: Flor de manzanilla. Propiedades: Tonificante, digestivo y carminativo.", "price": 4200, "id": "tetera-manzanilla-500-ml"}, {"cat": "Té e Infusiones", "group": "cafes", "name": "Tetera Boldo 500 ml", "desc": "Ingredientes: Hojas de Boldo, 100% natural. Propiedades: Protector hepático y digestivo.", "price": 4200, "id": "tetera-boldo-500-ml"}, {"cat": "Té e Infusiones", "group": "cafes", "name": "Tetera Menta 500 ml", "desc": "Clásica infusión herbal de menta piperita, de sabor suave y refrescante.", "price": 4200, "id": "tetera-menta-500-ml"}, {"cat": "Té e Infusiones", "group": "cafes", "name": "Tetera Hibisco F. Jamaica 500ml.", "desc": "Flor de Jamaica. Propiedades: Antioxidante, diurético y digestivo.", "price": 4200, "id": "tetera-hibisco-f-jamaica-500ml"}, {"cat": "Jugos", "group": "cafes", "name": "Jugo Natural", "desc": "Sabores Disponibles: Frutilla / Frambuesa / Arándanos / Mix Berries / Maracuyá / Chirimoya / Piña.", "price": 3300, "id": "jugo-natural"}, {"cat": "Jugos", "group": "cafes", "name": "Limonada Clásica", "desc": "Refrescante limonada, elaborada con limón fresco recién exprimido.", "price": 3500, "id": "limonada-clasica"}, {"cat": "Jugos", "group": "cafes", "name": "Smoothie de Frutilla", "desc": "Leche fresca mezclada con frutillas naturales y un toque de crema chantilly.", "price": 3900, "id": "smoothie-de-frutilla"}, {"cat": "Jugos", "group": "cafes", "name": "Leche con Plátano", "desc": "Refrescante batido de leche fresca con plátano natural.", "price": 2500, "id": "leche-con-platano"}, {"cat": "Jugos", "group": "cafes", "name": "Matcha Frutilla", "desc": "Frutilla, Hielo, Leche y nuestro rico Matcha.", "price": 4500, "id": "matcha-frutilla"}, {"cat": "Bebidas", "group": "cafes", "name": "Coca-Cola 350 ml", "desc": "Bebida gaseosa refrescante sabor original en lata de 350 ml.", "price": 2100, "id": "coca-cola-350-ml"}, {"cat": "Bebidas", "group": "cafes", "name": "Agua Mineral Puyehue sin Gas 500 ml", "desc": "Agua mineral natural pura de vertiente sin gas.", "price": 1990, "id": "agua-mineral-puyehue-sin-gas-500-ml"}, {"cat": "Bebidas", "group": "cafes", "name": "Agua Mineral Puyehue con Gas 500 ml", "desc": "Agua mineral natural pura de vertiente con gas.", "price": 1990, "id": "agua-mineral-puyehue-con-gas-500-ml"}, {"cat": "Bebidas", "group": "cafes", "name": "Coca Cola Zero 350 ml", "desc": "Bebida gaseosa refrescante sin azúcar de 350 ml.", "price": 2100, "id": "coca-cola-zero-350-ml"}, {"cat": "Bebidas", "group": "cafes", "name": "Fanta 350 ml", "desc": "Bebida gaseosa refrescante sabor naranja de 350 ml.", "price": 2100, "id": "fanta-350-ml"}, {"cat": "Bebidas", "group": "cafes", "name": "Sprite 350 ml", "desc": "Bebida gaseosa refrescante sabor lima-limón de 350 ml.", "price": 2100, "id": "sprite-350-ml"}, {"cat": "Bebidas", "group": "cafes", "name": "Kem Piña 350 ml", "desc": "Bebida gaseosa sabor piña de 350 ml.", "price": 2000, "id": "kem-pina-350-ml"}, {"cat": "Bebidas", "group": "cafes", "name": "Redbull Normal 250 ml", "desc": "Bebida energizante Red Bull de 250 ml.", "price": 2490, "id": "redbull-normal-250-ml"}, {"cat": "Bebidas", "group": "cafes", "name": "Bilz 350 ml", "desc": "Bebida gaseosa tradicional sabor fantasía de 350 ml.", "price": 2000, "id": "bilz-350-ml"}, {"cat": "Pastelería", "group": "pasteleria", "name": "Torta Amor", "desc": "Deliciosa hojarasca que cuenta con un relleno de mermelada de frambuesa crema pastelera y manjar.", "price": 4490, "id": "torta-amor"}, {"cat": "Pastelería", "group": "pasteleria", "name": "Pie de Limón", "desc": "Exquisito Pie de Limón Casero.", "price": 3200, "id": "pie-de-limon"}, {"cat": "Pastelería", "group": "pasteleria", "name": "Torta 3 Leches", "desc": "Torta húmeda bañada en mezcla tradicional de tres leches.", "price": 4490, "id": "torta-3-leches"}, {"cat": "Pastelería", "group": "pasteleria", "name": "Torta Hojarasca Manjar Nuez", "desc": "Torta de hoja manjar nuez decorada con merengue suizo.", "price": 4490, "id": "torta-hojarasca-manjar-nuez"}, {"cat": "Pastelería", "group": "pasteleria", "name": "Cheesecake Sin Azúcar", "desc": "Consulte disponibilidad Frambuesa o Chocolate.", "price": 4890, "id": "cheesecake-sin-azucar"}, {"cat": "Pastelería", "group": "pasteleria", "name": "Torta Brownie Manjar Frambuesa", "desc": "Bizcocho de chocolate Bitter relleno con manjar y mermelada de frambuesa.", "price": 4490, "id": "torta-brownie-manjar-frambuesa"}, {"cat": "Pastelería", "group": "pasteleria", "name": "El Jardín 5 Sabores", "desc": "Torta de la casa 5 sabores / Mezcla de bizcochos bitter blanco y hojarasca mermelada de frambuesa.", "price": 4490, "id": "el-jardin-5-sabores"}, {"cat": "Bollería", "group": "pasteleria", "name": "Alfajor Dulce de Leche", "desc": "Delicioso Alfajor Argentino opción chocolate blanco o negro.", "price": 2100, "id": "alfajor-dulce-de-leche"}, {"cat": "Bollería", "group": "pasteleria", "name": "Mini Donut", "desc": "Chocolate o Fresa.", "price": 500, "id": "mini-donut"}, {"cat": "Bollería", "group": "pasteleria", "name": "Galleta Keto de Almendras", "desc": "1 Galleta de Almendras Sin gluten y Sin Azúcar (30 g).", "price": 1100, "id": "galleta-keto-de-almendras"}, {"cat": "Bollería", "group": "pasteleria", "name": "Galletón Nutella", "desc": "Galletón (130 g) newyork relleno con Nutella.", "price": 2500, "id": "galleton-nutella"}, {"cat": "Bollería", "group": "pasteleria", "name": "Brownie de Chocolate", "desc": "Un suave y esponjoso brownie de chocolate con un toque crujiente de nuez.", "price": 3000, "id": "brownie-de-chocolate"}, {"cat": "Bollería", "group": "pasteleria", "name": "Mini Galletas Chips", "desc": "Mini Galletas con chips de chocolate (5 un).", "price": 1800, "id": "mini-galletas-chips"}, {"cat": "Bollería", "group": "pasteleria", "name": "Muffin relleno Nutella", "desc": "Muffin de Vainilla relleno de Nutella.", "price": 1900, "id": "muffin-relleno-nutella"}, {"cat": "Bollería", "group": "pasteleria", "name": "Muffin Doble Chocolate", "desc": "Muffin esponjoso sabor Chocolate.", "price": 1900, "id": "muffin-doble-chocolate"}, {"cat": "Bollería", "group": "pasteleria", "name": "Croissant Manjar", "desc": "Delicioso Croissant hojaldrado con relleno de Manjar.", "price": 4600, "id": "croissant-manjar"}, {"cat": "Bollería", "group": "pasteleria", "name": "Rollo de Canela Sin Gluten", "desc": "Suave rollo de canela especial sin gluten.", "price": 3200, "id": "rollo-de-canela-sin-gluten"}, {"cat": "Bollería", "group": "pasteleria", "name": "Croissant Pistachos", "desc": "Delicioso Croissant relleno con crema de Pistachos.", "price": 5400, "id": "croissant-pistachos"}, {"cat": "Bollería", "group": "pasteleria", "name": "Cuchuflí Artesanal", "desc": "Bolsita de 5 Cuchuflí artesanales de Chocolate con manjar.", "price": 1600, "id": "cuchufli-artesanal"}, {"cat": "Helados", "group": "postres", "name": "Copa de Helado Doble", "desc": "2 bolitas de helado, toppings, y frutas de la estación.", "price": 4990, "id": "copa-de-helado-doble"}, {"cat": "Helados", "group": "postres", "name": "Copa 3 sabores", "desc": "3 bolitas de helado, crema, toppings, y frutas de la estación.", "price": 5990, "id": "copa-3-sabores"}, {"cat": "Helados", "group": "postres", "name": "Copa El Jardín XL", "desc": "Copa estilo 'Mellinium Bravisimo': 6 sabores de helados y frutas de la estación.", "price": 15990, "id": "copa-el-jardin-xl"}, {"cat": "Helados", "group": "postres", "name": "Galleton NewYork con Helado", "desc": "Galletón artesanal (90 g), relleno con Oreo y chips de chocolate blanco con bolita de helado.", "price": 4200, "id": "galleton-newyork-con-helado"}, {"cat": "Helados", "group": "postres", "name": "Brownie con Helado", "desc": "Brownie casero coronado con crema, acompañado de helado a elección y salsa de chocolate.", "price": 5990, "id": "brownie-con-helado"}, {"cat": "Helados", "group": "postres", "name": "Porción de Topping", "desc": "Marshmallow, Oreo, gomitas, chubi, nueces, mostacillas, barquillo. Salsas: Frambuesa, caramelo.", "price": 500, "id": "porcion-de-topping"}, {"cat": "Helados", "group": "postres", "name": "Banana Split", "desc": "El clásico Banana Split con 3 sabores de helados, crema, topping, salsa de chocolate y frutas.", "price": 6500, "id": "banana-split"}, {"cat": "Postres Waffle", "group": "postres", "name": "Waffle Banana Split", "desc": "Waffle con base de manjar, plátano, 1 bolita de helado, crema chantilly, salsa de chocolate y toppings.", "price": 8500, "id": "waffle-banana-split"}, {"cat": "Postres Waffle", "group": "postres", "name": "Waffle Frutos rojos", "desc": "Base de nutella, mix de frutos rojos, helado frutos del bosque, crema y salsa.", "price": 9500, "id": "waffle-frutos-rojos"}, {"cat": "Postres Waffle", "group": "postres", "name": "Waffle Jardín de Frutas", "desc": "Base de manjar con plátano, frutos rojos, frutas de la estación, crema, salsa de chocolate y toppings.", "price": 7500, "id": "waffle-jardin-de-frutas"}, {"cat": "Postres Waffle", "group": "postres", "name": "Fondue Chocolate", "desc": "Rico chocolate fundido para untar con frutillas, marshmallow, plátano y trozos de waffles (para 2 personas).", "price": 14990, "id": "fondue-chocolate"}, {"cat": "Postres Waffle", "group": "postres", "name": "Tropical waffle", "desc": "Rico waffle preparado en el momento, base de mermelada de frutilla casera, plátanos, piña y kiwi.", "price": 7500, "id": "tropical-waffle"}, {"cat": "Sándwich", "group": "brunch", "name": "Carne al Vino Italiana", "desc": "Deliciosa carne al vino blanco cocinada a fuego lento por 2 horas, sobre pan toscano junto con palta, tomate y mayonesa.", "price": 9200, "id": "carne-al-vino-italiana"}, {"cat": "Sándwich", "group": "brunch", "name": "Carne al Vino El Jardín", "desc": "Deliciosa carne al vino blanco cocinada a fuego lento por 2 horas, sobre pan toscano junto con salsa, rúcula y queso.", "price": 8900, "id": "carne-al-vino-el-jardin"}, {"cat": "Sándwich", "group": "brunch", "name": "Carne al Vino Luco", "desc": "Carne al vino blanco preparada a fuego lento por 2 horas, con queso gouda fundido, en pan toscano.", "price": 8900, "id": "carne-al-vino-luco"}, {"cat": "Sándwich", "group": "brunch", "name": "Pollo Champiñón Queso", "desc": "Pollo desmenuzado con champiñón queso y mayonesa en pan toscano.", "price": 7800, "id": "pollo-champinon-queso"}, {"cat": "Sándwich", "group": "brunch", "name": "Pollo en Pan Toscano", "desc": "Pollo desmenuzado en pan toscano. Elige entre Italiano y Luco.", "price": 7200, "id": "pollo-en-pan-toscano"}, {"cat": "Sándwich", "group": "brunch", "name": "Vegetariano", "desc": "Sándwich en pan toscano con aceitunas, queso crema, tomate cherry y rúcula o lechuga de acuerdo a disponibilidad.", "price": 6990, "id": "vegetariano"}, {"cat": "Sándwich", "group": "brunch", "name": "Jamón Serrano", "desc": "Delicado sándwich con base de queso crema suave, jamón serrano curado y rúcula fresca o lechuga, en pan toscano.", "price": 7450, "id": "jamon-serrano"}, {"cat": "Sándwich", "group": "brunch", "name": "Tostadas en Ciabatta con Palta", "desc": "Pan Ciabatta tostado con palta, tomate cherry y sésamo.", "price": 3800, "id": "tostadas-en-ciabatta-con-palta"}, {"cat": "Sándwich", "group": "brunch", "name": "Triángulos Jamón y Queso", "desc": "Triángulos de pan de molde acompañados de jamón y queso fundido (ideal para niños).", "price": 3500, "id": "triangulos-jamon-y-queso"}, {"cat": "Sándwich", "group": "brunch", "name": "Vienesa Queso", "desc": "Vienesa Llanquihue, con queso fundido y mayonesa Kraft.", "price": 3490, "id": "vienesa-queso"}, {"cat": "Sándwich", "group": "brunch", "name": "Vienesa Italia", "desc": "Vienesa Italiana, vienesa Llanquihue, tomate, palta hass y mayonesa Kraft.", "price": 3200, "id": "vienesa-italia"}, {"cat": "Sándwich", "group": "brunch", "name": "Vienesa Queso Champiñón", "desc": "Vienesa con queso fundido, champiñón y mayonesa.", "price": 3990, "id": "vienesa-queso-champinon"}, {"cat": "Sándwich", "group": "brunch", "name": "Agregado Palta", "desc": "Porción adicional de palta fresca picada o molida.", "price": 1000, "id": "agregado-palta"}, {"cat": "Sándwich", "group": "brunch", "name": "Tostadas con Mermelada de Frutilla", "desc": "Tostadas en pan de molde con rica mermelada de frutilla hecha en casa.", "price": 1900, "id": "tostadas-con-mermelada-de-frutilla"}, {"cat": "Sándwich", "group": "brunch", "name": "Huevos Pochados", "desc": "2 tostadas de pan blanco de molde tostadas, cremoso de palta, jamón serrano y huevos pochados.", "price": 7900, "id": "huevos-pochados"}, {"cat": "Omelette", "group": "brunch", "name": "Omelette Champiñón", "desc": "Rico omelette de champiñón y queso, acompañado de tostadas.", "price": 4990, "id": "omelette-champinon"}, {"cat": "Omelette", "group": "brunch", "name": "Omelette Jamón Queso", "desc": "Omelette jamón y queso acompañado de tostadas.", "price": 4990, "id": "omelette-jamon-queso"}, {"cat": "Pizza Individual", "group": "brunch", "name": "Huevos a la Pizza", "desc": "Huevos a base de salsa de tomate con albahaca y queso gouda. Con pan de molde o ciabatta.", "price": 4900, "id": "huevos-a-la-pizza"}, {"cat": "Pizza Individual", "group": "brunch", "name": "Pizza Pepperoni", "desc": "Pizza pepperoni pequeña para niño (15 cm).", "price": 3450, "id": "pizza-pepperoni"}, {"cat": "Pizza Individual", "group": "brunch", "name": "Pizza Napolitana", "desc": "Pizza napolitana pequeña para niño (15 cm).", "price": 3450, "id": "pizza-napolitana"}, {"cat": "Desayunos (hasta las 12:30hrs)", "group": "brunch", "name": "Huevos Revueltos + Café y Jugo", "desc": "3 Huevos Revueltos, Café Espresso o Americano + Jugo.", "price": 7990, "id": "huevos-revueltos-cafe-y-jugo"}, {"cat": "Desayunos (hasta las 12:30hrs)", "group": "brunch", "name": "Tostadas con Jamón y Queso + Café y Jugo", "desc": "Tostadas + Láminas de Jamón y Queso + Café Americano o Café con Leche + Jugo.", "price": 7990, "id": "tostadas-con-jamon-y-queso-cafe-y-jugo"}, {"cat": "Desayunos (hasta las 12:30hrs)", "group": "brunch", "name": "Campestre + Café y Jugo", "desc": "Tostadas con Jamón Serrano Palta y Tomates Cherry sobre Rúcula + Café Americano o Con Leche + Jugo.", "price": 10490, "id": "campestre-cafe-y-jugo"}, {"cat": "Desayunos (hasta las 12:30hrs)", "group": "brunch", "name": "Tostadas con Palta", "desc": "Tostadas en pan de molde con palta.", "price": 3190, "id": "tostadas-con-palta"}, {"cat": "Desayunos (hasta las 12:30hrs)", "group": "brunch", "name": "Tostadas con Mermelada", "desc": "Tostadas en pan de molde con mermelada de mora o damasco.", "price": 1990, "id": "tostadas-con-mermelada"}, {"cat": "Desayunos (hasta las 12:30hrs)", "group": "brunch", "name": "Café + Torta", "desc": "Café Americano o con Leche - Torta disponible a elección.", "price": 5990, "id": "cafe-torta"}, {"cat": "Desayunos (hasta las 12:30hrs)", "group": "brunch", "name": "Café + Muffin o Donuts", "desc": "Café Americano o con Leche + Muffin o Donuts.", "price": 2990, "id": "cafe-muffin-o-donuts"}, {"cat": "Granel", "group": "grano", "name": "Café Bolivia (250 g)", "desc": "Café 250 g para llevar en grano o molido. Notas de cata: Arándanos, Naranja Asada, Almendra, Ciruela.", "price": 10990, "id": "cafe-bolivia-250-g"}, {"cat": "Granel", "group": "grano", "name": "Café Blend Caldas - Colombia (250 g)", "desc": "Café 250 g para llevar en grano o molido. Notas de cata: Caramelo, Panela, Frutas Amarillas.", "price": 11200, "id": "cafe-blend-caldas-colombia-250-g"}];

/* ============================================================
   RENDER DE LA CARTA — agrupada por macro-categoría y, dentro de
   ella, por subcategoría real de la carta (Cafetería, Bollería,
   Sándwich, etc.)
   ============================================================ */
const grid = document.getElementById('dish-grid');
const money = n => n === null ? "Consultar" : "$" + n.toLocaleString('es-CL');
const groupOf = key => MENU_GROUPS.find(g => g.key === key);

function beanIconHTML(){
  return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="text-[var(--cream)]"><path d="M12 3C7 3 4 7 4 12s3 9 8 9 8-4 8-9-3-9-8-9Z"/><path d="M12 3c-2 3-2 15 0 18M8 7c1.5 1 1.5 9 0 10M16 7c-1.5 1-1.5 9 0 10" stroke-linecap="round"/></svg>`;
}

function renderDishes(filter){
  grid.innerHTML = "";
  const groups = filter === "todos" ? MENU_GROUPS : MENU_GROUPS.filter(g => g.key === filter);

  groups.forEach(g => {
    const groupProducts = PRODUCTS.filter(p => p.group === g.key);
    if(groupProducts.length === 0) return;

    const block = document.createElement('div');

    const header = document.createElement('div');
    header.className = "flex items-center gap-4 mb-8";
    header.innerHTML = `
      <div class="w-14 h-14 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-[var(--forest)]">
        ${g.img ? `<img src="${g.img}" alt="${g.label}" class="w-full h-full object-cover">` : beanIconHTML()}
      </div>
      <h3 class="font-display italic text-2xl md:text-3xl">${g.label}</h3>
    `;
    block.appendChild(header);

    const subcats = [...new Set(groupProducts.map(p => p.cat))];
    subcats.forEach(sub => {
      const subWrap = document.createElement('div');
      subWrap.className = "mb-10 last:mb-0";
      const subItems = groupProducts.filter(p => p.cat === sub);
      subWrap.innerHTML = `
        <p class="label text-[var(--olive-deep)] mb-4 pl-[72px] md:pl-[72px]">${sub}</p>
        <div class="grid sm:grid-cols-2 gap-x-10 pl-[0px] md:pl-[72px]">
          ${subItems.map(p => `
            <button data-id="${p.id}" class="dish-row w-full text-left flex items-baseline justify-between gap-4 py-3 border-b border-[var(--ink)]/10 hover:border-[var(--olive)] transition-colors">
              <span class="min-w-0">
                <span class="block font-display text-lg leading-snug">${p.name}</span>
                <span class="block text-xs text-[var(--ink)]/45 desc-2l">${p.desc}</span>
              </span>
              <span class="font-display text-base shrink-0">${money(p.price)}</span>
            </button>
          `).join('')}
        </div>
      `;
      block.appendChild(subWrap);
    });

    grid.appendChild(block);
  });

  grid.querySelectorAll('.dish-row').forEach(row => {
    row.addEventListener('click', () => openModal(row.dataset.id));
  });
}
renderDishes("todos");

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.dataset.active = "false");
    btn.dataset.active = "true";
    renderDishes(btn.dataset.filter);
  });
});

/* ============================================================
   MODAL DE PRODUCTO
   ============================================================ */
const modal = document.getElementById('product-modal');
let activeProductId = null;

function openModal(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  const g = groupOf(p.group);
  activeProductId = id;
  const modalImgWrap = document.getElementById('modal-img').parentElement;
  if(g.img){
    modalImgWrap.innerHTML = `<img id="modal-img" src="${g.img}" alt="${p.name}" class="w-full h-full object-cover">`;
  } else {
    // Sin foto ambiente disponible para este grupo (ej. Café en grano) — se
    // muestra el ícono lineal en vez de forzar una imagen que no corresponde.
    modalImgWrap.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-[var(--forest)]">${beanIconHTML()}</div>`;
  }
  document.getElementById('modal-cat').textContent = p.cat;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-price').textContent = money(p.price);
  const addBtn = document.getElementById('modal-add');
  addBtn.textContent = "Añadir";
  addBtn.disabled = false;
  addBtn.classList.remove('opacity-40', 'cursor-not-allowed');
  modal.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modal.classList.add('opacity-0', 'invisible', 'pointer-events-none');
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
document.getElementById('modal-add').addEventListener('click', () => {
  const p = PRODUCTS.find(x => x.id === activeProductId);
  if(!p || p.comingSoon) return;
  addToCart(p.id);
  closeModal();
});

/* ============================================================
   CARRITO
   ============================================================ */
let CART = {};

function addToCart(id){
  CART[id] = (CART[id] || 0) + 1;
  renderCart();
  showToast();
}
function changeQty(id, delta){
  if(!CART[id]) return;
  CART[id] += delta;
  if(CART[id] <= 0) delete CART[id];
  renderCart();
}

function renderCart(){
  const container = document.getElementById('cart-items');
  const ids = Object.keys(CART);
  const countBadge = document.getElementById('cart-count');
  const totalItems = ids.reduce((s,id) => s + CART[id], 0);
  countBadge.textContent = totalItems;
  countBadge.classList.toggle('hidden', totalItems === 0);

  if(ids.length === 0){
    container.innerHTML = `<p class="text-sm text-[var(--ink)]/50">Tu pedido está vacío. Explora la carta y añade lo que se te antoje.</p>`;
  } else {
    container.innerHTML = ids.map(id => {
      const p = PRODUCTS.find(x => x.id === id);
      const g = groupOf(p.group);
      const qty = CART[id];
      return `
        <div class="flex gap-4 items-center">
          <div class="w-16 h-16 rounded-sm overflow-hidden shrink-0 flex items-center justify-center bg-[var(--forest)]">
            ${g.img ? `<img src="${g.img}" alt="${p.name}" class="w-full h-full object-cover">` : beanIconHTML()}
          </div>
          <div class="flex-1">
            <p class="font-display text-lg leading-tight">${p.name}</p>
            <p class="text-xs text-[var(--ink)]/50">${money(p.price)}</p>
          </div>
          <div class="flex items-center gap-3">
            <button class="qty-btn w-6 h-6 flex items-center justify-center border border-[var(--ink)]/25 rounded-full" data-id="${id}" data-delta="-1">–</button>
            <span class="text-sm w-4 text-center">${qty}</span>
            <button class="qty-btn w-6 h-6 flex items-center justify-center border border-[var(--ink)]/25 rounded-full" data-id="${id}" data-delta="1">+</button>
          </div>
        </div>
      `;
    }).join('');
    container.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => changeQty(btn.dataset.id, parseInt(btn.dataset.delta)));
    });
  }

  const subtotal = ids.reduce((s,id) => s + (PRODUCTS.find(x=>x.id===id).price || 0) * CART[id], 0);
  document.getElementById('cart-subtotal').textContent = money(subtotal);
}
renderCart();

const cartDrawer = document.getElementById('cart-drawer');
const cartPanel = document.getElementById('cart-panel');
function openCart(){
  cartDrawer.classList.remove('opacity-0','invisible','pointer-events-none');
  requestAnimationFrame(() => cartPanel.classList.remove('translate-x-full'));
  document.body.style.overflow = 'hidden';
}
function closeCart(){
  cartPanel.classList.add('translate-x-full');
  setTimeout(() => cartDrawer.classList.add('opacity-0','invisible','pointer-events-none'), 300);
  document.body.style.overflow = '';
}
document.getElementById('open-cart').addEventListener('click', openCart);
document.querySelectorAll('[data-close-cart]').forEach(el => el.addEventListener('click', closeCart));

/* WhatsApp checkout */
document.getElementById('checkout-whatsapp').addEventListener('click', () => {
  const ids = Object.keys(CART);
  if(ids.length === 0){ return; }
  const deliv = document.getElementById('deliv-retiro').checked ? "Retiro en local" : "Despacho";
  let msg = `Hola Coffeecito, quisiera hacer este pedido:%0A%0A`;
  ids.forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    msg += `• ${CART[id]}x ${p.name} — ${money(p.price)}%0A`;
  });
  const subtotal = ids.reduce((s,id) => s + (PRODUCTS.find(x=>x.id===id).price || 0) * CART[id], 0);
  msg += `%0ASubtotal: ${money(subtotal)}%0AMétodo: ${deliv}`;
  window.open(`https://wa.me/${BUSINESS.phone}?text=${msg}`, '_blank');
});

/* Toast */
let toastTimer;
function showToast(){
  const toast = document.getElementById('toast');
  toast.classList.remove('opacity-0','invisible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('opacity-0','invisible'), 1800);
}

/* ============================================================
   INDICADOR ABIERTO/CERRADO — basado estrictamente en el horario
   extraído (16:00–21:30 todos los días, fuente: Instagram story)
   ============================================================ */
function updateOpenStatus(){
  const now = new Date();
  const h = now.getHours(), m = now.getMinutes();
  const nowMin = h*60+m;
  const openMin = BUSINESS.hours.openHour*60 + BUSINESS.hours.openMin;
  const closeMin = BUSINESS.hours.closeHour*60 + BUSINESS.hours.closeMin;
  const isOpen = nowMin >= openMin && nowMin < closeMin;
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  if(isOpen){
    dot.style.background = 'var(--olive)';
    text.textContent = 'Abierto ahora · Cierra a las 21:30';
  } else {
    dot.style.background = '#9b3b2f';
    text.textContent = 'Cerrado ahora · Abre a las 16:00';
  }
}
updateOpenStatus();
setInterval(updateOpenStatus, 60000);

/* ============================================================
   LISTA DE HORARIO POR DÍA — mismo horario todos los días
   (16:00–21:30, fuente: Instagram story), resaltando el día actual
   ============================================================ */
function renderHoursList(){
  const DIAS = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const fmt = (h,m) => h + (m ? ':' + String(m).padStart(2,'0') : ':00');
  const rango = fmt(BUSINESS.hours.openHour, BUSINESS.hours.openMin) + ' – ' + fmt(BUSINESS.hours.closeHour, BUSINESS.hours.closeMin) + ' hrs';
  const today = new Date().getDay();
  const list = document.getElementById('hours-list');
  if(!list) return;
  list.innerHTML = DIAS.map((d,i) => `
    <div class="flex justify-between gap-6 ${i===today ? 'font-medium text-[var(--olive-deep)]' : 'text-[var(--ink)]/70'}">
      <span>${d}</span><span>${rango}</span>
    </div>`).join('');
}
renderHoursList();

/* ============================================================
   HEADER: transparente -> sólido, color de textos, menú móvil
   ============================================================ */
const headerFgEls = document.querySelectorAll('.header-fg');
headerFgEls.forEach(el => el.style.color = 'var(--ink)');

document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('mobile-nav').classList.toggle('hidden');
});
document.querySelectorAll('#mobile-nav a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('mobile-nav').classList.add('hidden');
}));

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); } });
}, { threshold:.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
/* ============================================================
   NAVEGACIÓN POR PESTAÑAS (SPA) — sustituye el scroll continuo
   ============================================================ */
function showTab(name){
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('is-active'));
  const target = document.getElementById('tab-' + name);
  if(target){ target.classList.add('is-active'); }
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.tab === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', () => showTab(el.dataset.tab));
});
showTab('inicio');

/* Botón de checkout de WhatsApp en la barra flotante: arma el link
   con lo que haya en el carrito (si está vacío, abre WhatsApp directo) */
function updateOrderBarWhatsapp(){
  const link = document.getElementById('order-bar-whatsapp');
  if(!link) return;
  const ids = Object.keys(CART);
  if(ids.length === 0){
    link.href = `https://wa.me/${BUSINESS.phone}`;
  } else {
    let msg = `Hola Coffeecito, quisiera hacer este pedido:%0A%0A`;
    ids.forEach(id => {
      const p = PRODUCTS.find(x => x.id === id);
      msg += `• ${CART[id]}x ${p.name} — ${money(p.price)}%0A`;
    });
    link.href = `https://wa.me/${BUSINESS.phone}?text=${msg}`;
  }
}
const _origRenderCart = renderCart;
renderCart = function(){ _origRenderCart(); updateOrderBarWhatsapp(); };
updateOrderBarWhatsapp();
document.getElementById('open-cart-2')?.addEventListener('click', openCart);
