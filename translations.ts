import { NavLink, Service, Review, MenuItem } from './types';

interface AppContent {
  navLinks: NavLink[];
  hero: {
    title: string;
    subtitle: string;
    ctaCall: string;
  };
  about: {
    title: string;
    heading: string;
    paragraphs: string[];
  };
  services: {
    title: string;
    items: Service[];
  };
  menu: {
    title: string;
    description: string[];
    popularDishesTitle: string;
    items: MenuItem[];
    ctaFullMenu: string;
  };
  gallery: {
    title: string;
  };
  events: {
    title: string;
    heading: string;
    description: string;
  };
  reviews: {
    title: string;
    items: Review[];
  };
  contact: {
    title: string;
    heading: string;
    description: string;
    addressLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    hours: string;
    ctaCall: string;
  };
  footer: {
    copyright: string;
    credits: string;
    creatorLinkText: string;
  };
  menuModal: {
    title: string;
    confirmMessage: string;
    confirmButton: string;
    cancelButton: string;
  };
  callModal: {
    title: string;
    confirmMessage: string;
    confirmButton: string;
    cancelButton: string;
  };
}

type Translations = {
  [key: string]: AppContent;
};

export const translations: Translations = {
  ru: {
    navLinks: [
      { href: "#about", label: "О нас" },
      { href: "#menu", label: "Меню" },
      { href: "#services", label: "Услуги" },
      { href: "#gallery", label: "Галерея" },
      { href: "#events", label: "События" },
      { href: "#reviews", label: "Отзывы" },
      { href: "#contact", label: "Контакты" },
    ],
    hero: {
      title: "Banana Beach Mui Ne",
      subtitle: "Ваше место под вьетнамским солнцем. Вкусная еда, тёплое море и незабываемые закаты.",
      ctaCall: "Позвонить",
    },
    about: {
      title: "О нас",
      heading: "Banana Beach",
      paragraphs: [
        "— это не просто кафе, а место силы на берегу Южно-Китайского моря, в самом сердце Муйне. Здесь время замедляется, море звучит особенно мягко, а атмосфера располагает к отдыху и свободе.",
        "Мы создали пространство, где каждый чувствует себя как дома — путешественники, серферы, местные жители и все, кто ценит вкусную еду, уют и доброжелательную атмосферу.",
        "Наше кафе — это сочетание простоты и искренности. Мы готовим из свежих локальных продуктов, предлагаем блюда, вдохновлённые морем и солнцем Вьетнама, и подаём их с заботой и вниманием к деталям.",
        "Здесь можно начать день с ароматного кофе, перекусить после серфинга, встретить закат за коктейлем или провести вечер с друзьями под звуки живой музыки.",
        "Banana Beach — это место, куда хочется возвращаться. Место, где вкус, настроение и атмосфера сливаются в одно целое.",
      ],
    },
    services: {
        title: "Услуги",
        items: [
            { title: "Аренда байков", description: "Исследуйте красоты Муйне на наших надёжных и стильных байках. Это лучший способ почувствовать свободу и увидеть побережье с новой стороны." },
            { title: "Кальян", description: "Расслабьтесь под звуки моря с ароматным кальяном на террасе Banana Beach. Мы предлагаем широкий выбор вкусов и качественный табак." },
            { title: "Бронирование мероприятий", description: "Планируете день рождения или вечеринку? Мы с радостью организуем для вас праздник у самого моря. Просторная терраса, вкусная еда и особая атмосфера." },
            { title: "Кухня с морепродуктами", description: "Наши повара готовят свежие морепродукты прямо с утреннего улова. Попробуйте вкус моря, приготовленный с душой." },
        ]
    },
    menu: {
        title: "Меню",
        description: [
            "Мы гордимся нашей кухней, где свежесть встречается с традициями. В основе меню — свежие морепродукты, ароматные овощи и фрукты, и травы, собранные у фермеров Муйне.",
            "Каждый рецепт в нашем меню — это маленькая история о солнце, ветре и гостеприимстве. Приходите, чтобы попробовать вкус Муйне в каждой детали."
        ],
        popularDishesTitle: "Популярные блюда",
        items: [
          { name: "Тигровые креветки на гриле", description: "Сочные креветки, маринованные в чесночном соусе с травами.", category: "Морепродукты" },
          { name: "Свежие спринг-роллы", description: "Рисовая бумага, креветки, свежие овощи, зелень и вермишель.", category: "Закуски" },
          { name: "Суп Фо Бо", description: "Традиционный вьетнамский суп с говядиной и рисовой лапшой.", category: "Супы" },
          { name: "Смузи 'Тропический Рай'", description: "Освежающий микс из манго, маракуйи и ананаса.", category: "Напитки" },
          { name: "Манго стики райс", description: "Классический десерт: сладкий клейкий рис, свежее манго и кокосовый соус.", category: "Десерты" },
          { name: "Кальмар на гриле", description: "Нежный кальмар, замаринованный в соусе чили-лайм.", category: "Морепродукты" },
        ],
        ctaFullMenu: "Полное меню (PDF)",
    },
    gallery: { title: "Галерея" },
    events: {
        title: "События",
        heading: "Музыка у моря",
        description: "Каждые выходные Banana Beach оживает под звуки музыки и разговоров у моря. Здесь собираются друзья, чтобы насладиться вечером и неповторимой атмосферой.",
    },
    reviews: {
        title: "Отзывы",
        items: [
            { name: "Nilou Kedemos", text: "Вкусная еда с разумными порциями и ценами. Атмосфера очень расслабляющая, прямо на пляже. Идеально для ужина на закате.", rating: 5 },
            { name: "Анна Коврижина", text: "Это место оставило у нас приятные впечатления. Очень вкусная еда, особенно морепродукты. Дружелюбный персонал и прекрасный вид на море!", rating: 5 },
            { name: "Michael Schmidt", text: "Настоящая жемчужина в Муйне. Я арендовал у них байк, и сервис был на высшем уровне. Вернулся на ужин и не был разочарован. Настоятельно рекомендую!", rating: 5 },
            { name: "Аноним", text: "Отличное место, чтобы провести тут время вечером под приятный регги и вкусные коктейли :) У Димы есть всё, только спросите!", rating: 5 },
            { name: "Kasia", text: "Персонал был восхитительным. Атмосфера там была расслабляющая. Мы проводили там каждый вечер.", rating: 5 },
            { name: "Eoin Fearon", text: "Лучший ирландский кофе, который я пробовал за пределами Ирландии. Он был со льдом — неожиданно, но тем не менее вкусно. Также очень дружелюбны к собакам. Очень спокойное место.", rating: 5 },
        ]
    },
    contact: {
        title: "Контакты",
        heading: "Мы всегда на связи!",
        description: "Приходите в гости, звоните или пишите нам. Мы с радостью забронируем для вас столик.",
        addressLabel: "Адрес:",
        phoneLabel: "Телефон/WhatsApp:",
        hoursLabel: "Часы работы:",
        hours: "Ежедневно с 11:00 до 02:00",
        ctaCall: "Позвонить",
    },
    footer: {
        copyright: "Banana Beach Mui Ne. All Rights Reserved.",
        credits: "Сайт создал",
        creatorLinkText: "Styiler",
    },
    menuModal: {
      title: "Подтвердите загрузку",
      confirmMessage: "Вы уверены, что хотите скачать полное меню в формате PDF?",
      confirmButton: "Да, скачать",
      cancelButton: "Нет",
    },
    callModal: {
      title: "Подтвердите звонок",
      confirmMessage: "Вы уверены, что хотите позвонить по этому номеру?",
      confirmButton: "Да, позвонить",
      cancelButton: "Нет",
    },
  },
  en: {
    navLinks: [
      { href: "#about", label: "About Us" },
      { href: "#menu", label: "Menu" },
      { href: "#services", label: "Services" },
      { href: "#gallery", label: "Gallery" },
      { href: "#events", label: "Events" },
      { href: "#reviews", label: "Reviews" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      title: "Banana Beach Mui Ne",
      subtitle: "Your place under the Vietnamese sun. Delicious food, warm sea, and unforgettable sunsets.",
      ctaCall: "Call Us",
    },
    about: {
      title: "About Us",
      heading: "Banana Beach",
      paragraphs: [
        "— is not just a cafe, but a place of power on the shore of the South China Sea, in the very heart of Mui Ne. Here, time slows down, the sea sounds especially soft, and the atmosphere is conducive to relaxation and freedom.",
        "We have created a space where everyone feels at home — travelers, surfers, locals, and everyone who appreciates delicious food, comfort, and a friendly atmosphere.",
        "Our cafe is a combination of simplicity and sincerity. We cook with fresh local products, offer dishes inspired by the sea and sun of Vietnam, and serve them with care and attention to detail.",
        "Here you can start your day with an aromatic coffee, have a snack after surfing, watch the sunset with a cocktail, or spend an evening with friends enjoying live music.",
        "Banana Beach is a place you want to return to. A place where taste, mood, and atmosphere merge into one.",
      ],
    },
    services: {
        title: "Services",
        items: [
            { title: "Bike Rental", description: "Explore the beauty of Mui Ne on our reliable and stylish bikes. The best way to feel freedom and see the coast from a new perspective." },
            { title: "Hookah", description: "Relax to the sounds of the sea with a fragrant hookah on the Banana Beach terrace. We offer a wide selection of flavors and quality tobacco." },
            { title: "Event Booking", description: "Planning a birthday or a party? We will be happy to organize a celebration for you by the sea. A spacious terrace, delicious food, and a special atmosphere." },
            { title: "Seafood Kitchen", description: "Our chefs prepare fresh seafood straight from the morning's catch. Taste the sea, cooked with soul." },
        ]
    },
    menu: {
        title: "Menu",
        description: [
            "We are proud of our cuisine, where freshness meets tradition. Our menu is based on fresh seafood, aromatic vegetables and fruits, and herbs from Mui Ne farmers.",
            "Each recipe on our menu is a little story about the sun, the wind, and hospitality. Come and taste Mui Ne in every detail."
        ],
        popularDishesTitle: "Popular Dishes",
        items: [
            { name: "Grilled Tiger Prawns", description: "Juicy prawns marinated in a garlic and herb sauce.", category: "Seafood" },
            { name: "Fresh Spring Rolls", description: "Rice paper, shrimp, fresh vegetables, herbs, and vermicelli.", category: "Appetizers" },
            { name: "Pho Bo Soup", description: "Traditional Vietnamese soup with beef and rice noodles.", category: "Soups" },
            { name: " 'Tropical Paradise' Smoothie", description: "A refreshing mix of mango, passion fruit, and pineapple.", category: "Drinks" },
            { name: "Mango Sticky Rice", description: "Classic dessert: sweet sticky rice, fresh mango, and coconut sauce.", category: "Desserts" },
            { name: "Grilled Squid", description: "Tender squid marinated in a chili-lime sauce.", category: "Seafood" },
        ],
        ctaFullMenu: "Full Menu (PDF)",
    },
    gallery: { title: "Gallery" },
    events: {
        title: "Events",
        heading: "Music by the Sea",
        description: "Every weekend, Banana Beach comes alive with the sounds of music and conversations by the sea. Friends, travelers, and locals gather here to enjoy the evening and the unique coastal atmosphere.",
    },
    reviews: {
        title: "Reviews",
        items: [
          { name: "Nilou Kedemos", text: "Delicious food with reasonable portions and prices. The atmosphere is very relaxing, right on the beach. Perfect for a sunset dinner.", rating: 5 },
          { name: "Anna Kovrizhina", text: "This place left a pleasant impression on us. The food is delicious, especially the seafood. Friendly staff and a beautiful sea view!", rating: 5 },
          { name: "Michael Schmidt", text: "A true gem in Mui Ne. I rented a bike from them, and the service was top-notch. Came back for dinner and was not disappointed. Highly recommended!", rating: 5 },
          { name: "Anonymous", text: "A great place to spend an evening here with pleasant reggae and tasty cocktails :) Dima has everything, just ask!", rating: 5 },
          { name: "Kasia", text: "Staff was amazing. The atmosphere there was relaxing. We spent every evening there.", rating: 5 },
          { name: "Eoin Fearon", text: "Best Irish coffee I’ve had outside of Ireland. It was iced — unexpected but delicious nonetheless. Very accommodating to dogs also. Very chill place.", rating: 5 },
        ]
    },
    contact: {
        title: "Contact",
        heading: "We are always in touch!",
        description: "Come visit, call, or write to us. We will be happy to book a table for you.",
        addressLabel: "Address:",
        phoneLabel: "Phone/WhatsApp:",
        hoursLabel: "Opening Hours:",
        hours: "Daily from 11:00 AM to 02:00 AM",
        ctaCall: "Call Us",
    },
    footer: {
        copyright: "Banana Beach Mui Ne. All Rights Reserved.",
        credits: "Website created by",
        creatorLinkText: "Styiler",
    },
    menuModal: {
      title: "Confirm Download",
      confirmMessage: "Are you sure you want to download the full menu as a PDF?",
      confirmButton: "Yes, Download",
      cancelButton: "No",
    },
    callModal: {
      title: "Confirm Call",
      confirmMessage: "Are you sure you want to call this number?",
      confirmButton: "Yes, Call",
      cancelButton: "No",
    },
  },
  vn: {
    navLinks: [
      { href: "#about", label: "Về chúng tôi" },
      { href: "#menu", label: "Thực đơn" },
      { href: "#services", label: "Dịch vụ" },
      { href: "#gallery", label: "Thư viện" },
      { href: "#events", label: "Sự kiện" },
      { href: "#reviews", label: "Đánh giá" },
      { href: "#contact", label: "Liên hệ" },
    ],
    hero: {
      title: "Banana Beach Mũi Né",
      subtitle: "Nơi của bạn dưới ánh nắng Việt Nam. Món ăn ngon, biển ấm và hoàng hôn khó quên.",
      ctaCall: "Gọi cho chúng tôi",
    },
    about: {
      title: "Về chúng tôi",
      heading: "Banana Beach",
      paragraphs: [
        "— không chỉ là một quán cà phê, mà là một nơi quyền lực bên bờ Biển Đông, ngay tại trung tâm Mũi Né. Ở đây, thời gian trôi chậm lại, tiếng biển nghe thật nhẹ nhàng, và không khí mang lại cảm giác thư giãn và tự do.",
        "Chúng tôi đã tạo ra một không gian nơi mọi người đều cảm thấy như ở nhà — khách du lịch, người lướt sóng, người dân địa phương và tất cả những ai đánh giá cao món ăn ngon, sự ấm cúng và không khí thân thiện.",
        "Quán cà phê của chúng tôi là sự kết hợp giữa sự đơn giản và chân thành. Chúng tôi nấu ăn từ các sản phẩm tươi sống của địa phương, cung cấp các món ăn lấy cảm hứng từ biển và nắng của Việt Nam, và phục vụ chúng với sự chăm sóc và chú ý đến từng chi tiết.",
        "Tại đây, bạn có thể bắt đầu ngày mới với một ly cà phê thơm lừng, ăn nhẹ sau khi lướt sóng, ngắm hoàng hôn với một ly cocktail, hoặc dành buổi tối với bạn bè thưởng thức âm nhạc sống.",
        "Banana Beach là một nơi bạn muốn quay trở lại. Một nơi mà hương vị, tâm trạng và không khí hòa quyện làm một.",
      ],
    },
    services: {
        title: "Dịch vụ",
        items: [
            { title: "Cho thuê xe máy", description: "Khám phá vẻ đẹp của Mũi Né trên những chiếc xe máy đáng tin cậy và phong cách của chúng tôi. Cách tốt nhất để cảm nhận tự do và ngắm nhìn bờ biển từ một góc nhìn mới." },
            { title: "Shisha", description: "Thư giãn với âm thanh của biển cùng một bình shisha thơm ngát trên sân thượng của Banana Beach. Chúng tôi cung cấp nhiều loại hương vị và thuốc lá chất lượng." },
            { title: "Đặt sự kiện", description: "Bạn đang lên kế hoạch cho một bữa tiệc sinh nhật hay một sự kiện? Chúng tôi rất sẵn lòng tổ chức một bữa tiệc cho bạn ngay bên bờ biển. Sân thượng rộng rãi, món ăn ngon và không khí đặc biệt." },
            { title: "Bếp hải sản", description: "Đầu bếp của chúng tôi chế biến hải sản tươi sống ngay từ buổi sáng. Hãy thử hương vị của biển, được nấu bằng cả tâm hồn." },
        ]
    },
    menu: {
        title: "Thực đơn",
        description: [
            "Chúng tôi tự hào về nhà bếp của mình, nơi sự tươi mới gặp gỡ truyền thống. Thực đơn của chúng tôi dựa trên hải sản tươi sống, rau củ và trái cây thơm ngon, và các loại thảo mộc từ nông dân Mũi Né.",
            "Mỗi công thức trong thực đơn của chúng tôi là một câu chuyện nhỏ về nắng, gió và lòng hiếu khách. Hãy đến và thưởng thức hương vị của Mũi Né trong từng chi tiết."
        ],
        popularDishesTitle: "Món ăn phổ biến",
        items: [
          { name: "Tôm sú nướng", description: "Tôm ngon ngọt được ướp trong sốt tỏi và thảo mộc.", category: "Hải sản" },
          { name: "Gỏi cuốn tươi", description: "Bánh tráng, tôm, rau sống, rau thơm và bún.", category: "Món khai vị" },
          { name: "Phở Bò", description: "Súp truyền thống của Việt Nam với thịt bò và bánh phở.", category: "Súp" },
          { name: "Sinh tố 'Thiên đường nhiệt đới'", description: "Một hỗn hợp sảng khoái của xoài, chanh dây và dứa.", category: "Đồ uống" },
          { name: "Xôi xoài", description: "Món tráng miệng cổ điển: xôi nếp ngọt, xoài tươi và nước cốt dừa.", category: "Tráng miệng" },
          { name: "Mực nướng", description: "Mực mềm được ướp trong sốt ớt-chanh.", category: "Hải sản" },
        ],
        ctaFullMenu: "Thực đơn đầy đủ (PDF)",
    },
    gallery: { title: "Thư viện" },
    events: {
        title: "Sự kiện",
        heading: "Âm nhạc bên bờ biển",
        description: "Mỗi cuối tuần, Banana Beach trở nên sống động với âm thanh của âm nhạc và những cuộc trò chuyện bên bờ biển. Bạn bè, du khách và người dân địa phương tụ tập tại đây để tận hưởng buổi tối và không khí ven biển độc đáo.",
    },
    reviews: {
        title: "Đánh giá",
        items: [
            { name: "Nilou Kedemos", text: "Thức ăn ngon với khẩu phần và giá cả hợp lý. Không khí rất thư giãn, ngay trên bãi biển. Hoàn hảo cho một bữa tối ngắm hoàng hôn.", rating: 5 },
            { name: "Anna Kovrizhina", text: "Nơi này đã để lại cho chúng tôi những ấn tượng tốt đẹp. Thức ăn rất ngon, đặc biệt là hải sản. Nhân viên thân thiện và quang cảnh biển tuyệt đẹp!", rating: 5 },
            { name: "Michael Schmidt", text: "Một viên ngọc thực sự ở Mũi Né. Tôi đã thuê một chiếc xe máy từ họ, và dịch vụ thì tuyệt vời. Quay lại ăn tối và không hề thất vọng. Rất khuyến khích!", rating: 5 },
            { name: "Ẩn danh", text: "Một nơi tuyệt vời để dành buổi tối ở đây với nhạc reggae dễ chịu và cocktail ngon :) Dima có mọi thứ, chỉ cần hỏi!", rating: 5 },
            { name: "Kasia", text: "Nhân viên thật tuyệt vời. Không khí ở đó rất thư giãn. Chúng tôi đã dành mỗi buổi tối ở đó.", rating: 5 },
            { name: "Eoin Fearon", text: "Cà phê Ailen ngon nhất tôi từng uống bên ngoài Ireland. Nó được pha đá — bất ngờ nhưng vẫn ngon. Cũng rất thân thiện với chó. Một nơi rất thư giãn.", rating: 5 },
        ]
    },
    contact: {
        title: "Liên hệ",
        heading: "Chúng tôi luôn sẵn sàng!",
        description: "Hãy đến thăm, gọi điện hoặc viết thư cho chúng tôi. Chúng tôi rất sẵn lòng đặt bàn cho bạn.",
        addressLabel: "Địa chỉ:",
        phoneLabel: "Điện thoại/WhatsApp:",
        hoursLabel: "Giờ mở cửa:",
        hours: "Hàng ngày từ 11:00 đến 02:00",
        ctaCall: "Gọi cho chúng tôi",
    },
    footer: {
        copyright: "Banana Beach Mũi Né. Mọi quyền được bảo lưu.",
        credits: "Trang web được tạo bởi",
        creatorLinkText: "Styiler",
    },
    menuModal: {
      title: "Xác nhận tải xuống",
      confirmMessage: "Bạn có chắc chắn muốn tải xuống thực đơn đầy đủ dưới dạng PDF không?",
      confirmButton: "Có, tải xuống",
      cancelButton: "Không",
    },
    callModal: {
      title: "Xác nhận cuộc gọi",
      confirmMessage: "Bạn có chắc chắn muốn gọi số này không?",
      confirmButton: "Có, gọi",
      cancelButton: "Không",
    },
  },
};