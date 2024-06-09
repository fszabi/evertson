export interface Post {
  slug: string;
  title: string;
  content: string;
  summary: string;
  date: string;
}

export const getAllPosts = (): Post[] => {
  return [
    {
      slug: "first-post",
      title: "My First Post",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ex, accumsan a sodales id, facilisis eget dolor. Cras dictum nulla commodo aliquet porta. Sed a erat iaculis, dapibus leo non, hendrerit tortor. Morbi malesuada feugiat ornare. Vestibulum nisl diam, suscipit id ligula efficitur, cursus pellentesque risus. Cras porttitor at justo et faucibus. Donec congue dignissim nulla, id tempus elit venenatis sed. Nullam fermentum finibus lacinia. Cras non rutrum velit. Suspendisse elementum nisi nec rutrum lacinia. Maecenas ut posuere felis. Sed condimentum elementum sem, maximus faucibus mi. Fusce dapibus nibh id eros vulputate, quis luctus lectus tincidunt.

      Donec auctor ultricies nulla, nec rutrum quam pharetra a. Aliquam molestie urna eu nibh facilisis sodales. Ut pellentesque ipsum enim, ac commodo arcu blandit nec. Etiam tortor ante, interdum vitae maximus quis, lobortis at tortor. Donec eu magna et dui feugiat eleifend sed nec purus. Cras bibendum, massa vitae bibendum tempor, est tellus pulvinar lectus, ac elementum augue nisl sed est. Sed congue faucibus nisi, ac tempor ligula dapibus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices egestas volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum sit amet orci viverra, porta ante eget, dapibus ex. Vestibulum at egestas risus. Duis sagittis elementum quam, vitae consequat sapien efficitur sed. In hac habitasse platea dictumst. In mollis magna et ligula tristique commodo.
      
      Nullam molestie ultricies metus sit amet consequat. Vivamus placerat eu eros vel ullamcorper. Morbi vel arcu eu magna pretium ornare eu quis nisi. Pellentesque laoreet laoreet dolor, vitae molestie nibh ultricies finibus. Praesent bibendum pulvinar ante, sed tristique ex eleifend ac. Donec dignissim eros a est egestas, in sollicitudin ligula porttitor. Maecenas et volutpat metus. Nunc egestas diam elit, et imperdiet risus lobortis sed. Vivamus at ullamcorper ante. Curabitur egestas ligula ultrices auctor hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus posuere est ac turpis bibendum, at tempor orci auctor. In sed magna sodales, blandit lacus sit amet, volutpat eros.
      
      Suspendisse velit lorem, aliquam a aliquam non, auctor eu ante. Etiam quis tortor mattis, porttitor leo eu, gravida erat. Proin sed eros neque. Suspendisse odio lacus, commodo eget maximus ut, sodales non velit. Suspendisse lectus erat, maximus hendrerit tortor et, scelerisque porta lectus. Nunc sed sagittis dui. Aliquam lobortis nec massa non lobortis. Nulla rutrum et ex id semper. Mauris ut est mauris. Mauris fringilla, orci eu vestibulum pellentesque, nulla turpis vulputate purus, in consequat odio dui vel sapien. Aliquam auctor diam at magna viverra, in lacinia augue cursus.
      
      Donec eget tempor quam. Sed lacinia lobortis felis. Aliquam nec fermentum lectus. Nam nulla dui, finibus non convallis in, molestie in nibh. Aliquam quis nulla quis lectus consectetur ultrices vitae at nibh. Aliquam nec sapien lorem. Nulla in malesuada erat. Duis scelerisque at est ut gravida.`,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
      date: "Máj 1, 2024",
    },
    {
      slug: "second-post",
      title: "My Second Post",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ex, accumsan a sodales id, facilisis eget dolor. Cras dictum nulla commodo aliquet porta. Sed a erat iaculis, dapibus leo non, hendrerit tortor. Morbi malesuada feugiat ornare. Vestibulum nisl diam, suscipit id ligula efficitur, cursus pellentesque risus. Cras porttitor at justo et faucibus. Donec congue dignissim nulla, id tempus elit venenatis sed. Nullam fermentum finibus lacinia. Cras non rutrum velit. Suspendisse elementum nisi nec rutrum lacinia. Maecenas ut posuere felis. Sed condimentum elementum sem, maximus faucibus mi. Fusce dapibus nibh id eros vulputate, quis luctus lectus tincidunt.

      Donec auctor ultricies nulla, nec rutrum quam pharetra a. Aliquam molestie urna eu nibh facilisis sodales. Ut pellentesque ipsum enim, ac commodo arcu blandit nec. Etiam tortor ante, interdum vitae maximus quis, lobortis at tortor. Donec eu magna et dui feugiat eleifend sed nec purus. Cras bibendum, massa vitae bibendum tempor, est tellus pulvinar lectus, ac elementum augue nisl sed est. Sed congue faucibus nisi, ac tempor ligula dapibus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices egestas volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum sit amet orci viverra, porta ante eget, dapibus ex. Vestibulum at egestas risus. Duis sagittis elementum quam, vitae consequat sapien efficitur sed. In hac habitasse platea dictumst. In mollis magna et ligula tristique commodo.
      
      Nullam molestie ultricies metus sit amet consequat. Vivamus placerat eu eros vel ullamcorper. Morbi vel arcu eu magna pretium ornare eu quis nisi. Pellentesque laoreet laoreet dolor, vitae molestie nibh ultricies finibus. Praesent bibendum pulvinar ante, sed tristique ex eleifend ac. Donec dignissim eros a est egestas, in sollicitudin ligula porttitor. Maecenas et volutpat metus. Nunc egestas diam elit, et imperdiet risus lobortis sed. Vivamus at ullamcorper ante. Curabitur egestas ligula ultrices auctor hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus posuere est ac turpis bibendum, at tempor orci auctor. In sed magna sodales, blandit lacus sit amet, volutpat eros.
      
      Suspendisse velit lorem, aliquam a aliquam non, auctor eu ante. Etiam quis tortor mattis, porttitor leo eu, gravida erat. Proin sed eros neque. Suspendisse odio lacus, commodo eget maximus ut, sodales non velit. Suspendisse lectus erat, maximus hendrerit tortor et, scelerisque porta lectus. Nunc sed sagittis dui. Aliquam lobortis nec massa non lobortis. Nulla rutrum et ex id semper. Mauris ut est mauris. Mauris fringilla, orci eu vestibulum pellentesque, nulla turpis vulputate purus, in consequat odio dui vel sapien. Aliquam auctor diam at magna viverra, in lacinia augue cursus.
      
      Donec eget tempor quam. Sed lacinia lobortis felis. Aliquam nec fermentum lectus. Nam nulla dui, finibus non convallis in, molestie in nibh. Aliquam quis nulla quis lectus consectetur ultrices vitae at nibh. Aliquam nec sapien lorem. Nulla in malesuada erat. Duis scelerisque at est ut gravida.`,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
      date: "Máj 2, 2024",
    },
    {
      slug: "third",
      title: "My Third Post",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ex, accumsan a sodales id, facilisis eget dolor. Cras dictum nulla commodo aliquet porta. Sed a erat iaculis, dapibus leo non, hendrerit tortor. Morbi malesuada feugiat ornare. Vestibulum nisl diam, suscipit id ligula efficitur, cursus pellentesque risus. Cras porttitor at justo et faucibus. Donec congue dignissim nulla, id tempus elit venenatis sed. Nullam fermentum finibus lacinia. Cras non rutrum velit. Suspendisse elementum nisi nec rutrum lacinia. Maecenas ut posuere felis. Sed condimentum elementum sem, maximus faucibus mi. Fusce dapibus nibh id eros vulputate, quis luctus lectus tincidunt.

      Donec auctor ultricies nulla, nec rutrum quam pharetra a. Aliquam molestie urna eu nibh facilisis sodales. Ut pellentesque ipsum enim, ac commodo arcu blandit nec. Etiam tortor ante, interdum vitae maximus quis, lobortis at tortor. Donec eu magna et dui feugiat eleifend sed nec purus. Cras bibendum, massa vitae bibendum tempor, est tellus pulvinar lectus, ac elementum augue nisl sed est. Sed congue faucibus nisi, ac tempor ligula dapibus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices egestas volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum sit amet orci viverra, porta ante eget, dapibus ex. Vestibulum at egestas risus. Duis sagittis elementum quam, vitae consequat sapien efficitur sed. In hac habitasse platea dictumst. In mollis magna et ligula tristique commodo.
      
      Nullam molestie ultricies metus sit amet consequat. Vivamus placerat eu eros vel ullamcorper. Morbi vel arcu eu magna pretium ornare eu quis nisi. Pellentesque laoreet laoreet dolor, vitae molestie nibh ultricies finibus. Praesent bibendum pulvinar ante, sed tristique ex eleifend ac. Donec dignissim eros a est egestas, in sollicitudin ligula porttitor. Maecenas et volutpat metus. Nunc egestas diam elit, et imperdiet risus lobortis sed. Vivamus at ullamcorper ante. Curabitur egestas ligula ultrices auctor hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus posuere est ac turpis bibendum, at tempor orci auctor. In sed magna sodales, blandit lacus sit amet, volutpat eros.
      
      Suspendisse velit lorem, aliquam a aliquam non, auctor eu ante. Etiam quis tortor mattis, porttitor leo eu, gravida erat. Proin sed eros neque. Suspendisse odio lacus, commodo eget maximus ut, sodales non velit. Suspendisse lectus erat, maximus hendrerit tortor et, scelerisque porta lectus. Nunc sed sagittis dui. Aliquam lobortis nec massa non lobortis. Nulla rutrum et ex id semper. Mauris ut est mauris. Mauris fringilla, orci eu vestibulum pellentesque, nulla turpis vulputate purus, in consequat odio dui vel sapien. Aliquam auctor diam at magna viverra, in lacinia augue cursus.
      
      Donec eget tempor quam. Sed lacinia lobortis felis. Aliquam nec fermentum lectus. Nam nulla dui, finibus non convallis in, molestie in nibh. Aliquam quis nulla quis lectus consectetur ultrices vitae at nibh. Aliquam nec sapien lorem. Nulla in malesuada erat. Duis scelerisque at est ut gravida.`,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
      date: "Máj 3, 2024",
    },
    {
      slug: "fourth-post",
      title: "My Fourth Post",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ex, accumsan a sodales id, facilisis eget dolor. Cras dictum nulla commodo aliquet porta. Sed a erat iaculis, dapibus leo non, hendrerit tortor. Morbi malesuada feugiat ornare. Vestibulum nisl diam, suscipit id ligula efficitur, cursus pellentesque risus. Cras porttitor at justo et faucibus. Donec congue dignissim nulla, id tempus elit venenatis sed. Nullam fermentum finibus lacinia. Cras non rutrum velit. Suspendisse elementum nisi nec rutrum lacinia. Maecenas ut posuere felis. Sed condimentum elementum sem, maximus faucibus mi. Fusce dapibus nibh id eros vulputate, quis luctus lectus tincidunt.

      Donec auctor ultricies nulla, nec rutrum quam pharetra a. Aliquam molestie urna eu nibh facilisis sodales. Ut pellentesque ipsum enim, ac commodo arcu blandit nec. Etiam tortor ante, interdum vitae maximus quis, lobortis at tortor. Donec eu magna et dui feugiat eleifend sed nec purus. Cras bibendum, massa vitae bibendum tempor, est tellus pulvinar lectus, ac elementum augue nisl sed est. Sed congue faucibus nisi, ac tempor ligula dapibus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices egestas volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum sit amet orci viverra, porta ante eget, dapibus ex. Vestibulum at egestas risus. Duis sagittis elementum quam, vitae consequat sapien efficitur sed. In hac habitasse platea dictumst. In mollis magna et ligula tristique commodo.
      
      Nullam molestie ultricies metus sit amet consequat. Vivamus placerat eu eros vel ullamcorper. Morbi vel arcu eu magna pretium ornare eu quis nisi. Pellentesque laoreet laoreet dolor, vitae molestie nibh ultricies finibus. Praesent bibendum pulvinar ante, sed tristique ex eleifend ac. Donec dignissim eros a est egestas, in sollicitudin ligula porttitor. Maecenas et volutpat metus. Nunc egestas diam elit, et imperdiet risus lobortis sed. Vivamus at ullamcorper ante. Curabitur egestas ligula ultrices auctor hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus posuere est ac turpis bibendum, at tempor orci auctor. In sed magna sodales, blandit lacus sit amet, volutpat eros.
      
      Suspendisse velit lorem, aliquam a aliquam non, auctor eu ante. Etiam quis tortor mattis, porttitor leo eu, gravida erat. Proin sed eros neque. Suspendisse odio lacus, commodo eget maximus ut, sodales non velit. Suspendisse lectus erat, maximus hendrerit tortor et, scelerisque porta lectus. Nunc sed sagittis dui. Aliquam lobortis nec massa non lobortis. Nulla rutrum et ex id semper. Mauris ut est mauris. Mauris fringilla, orci eu vestibulum pellentesque, nulla turpis vulputate purus, in consequat odio dui vel sapien. Aliquam auctor diam at magna viverra, in lacinia augue cursus.
      
      Donec eget tempor quam. Sed lacinia lobortis felis. Aliquam nec fermentum lectus. Nam nulla dui, finibus non convallis in, molestie in nibh. Aliquam quis nulla quis lectus consectetur ultrices vitae at nibh. Aliquam nec sapien lorem. Nulla in malesuada erat. Duis scelerisque at est ut gravida.`,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
      date: "Máj 4, 2024",
    },
    {
      slug: "fifth-post",
      title: "My Fifth Post",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis justo ex, accumsan a sodales id, facilisis eget dolor. Cras dictum nulla commodo aliquet porta. Sed a erat iaculis, dapibus leo non, hendrerit tortor. Morbi malesuada feugiat ornare. Vestibulum nisl diam, suscipit id ligula efficitur, cursus pellentesque risus. Cras porttitor at justo et faucibus. Donec congue dignissim nulla, id tempus elit venenatis sed. Nullam fermentum finibus lacinia. Cras non rutrum velit. Suspendisse elementum nisi nec rutrum lacinia. Maecenas ut posuere felis. Sed condimentum elementum sem, maximus faucibus mi. Fusce dapibus nibh id eros vulputate, quis luctus lectus tincidunt.

      Donec auctor ultricies nulla, nec rutrum quam pharetra a. Aliquam molestie urna eu nibh facilisis sodales. Ut pellentesque ipsum enim, ac commodo arcu blandit nec. Etiam tortor ante, interdum vitae maximus quis, lobortis at tortor. Donec eu magna et dui feugiat eleifend sed nec purus. Cras bibendum, massa vitae bibendum tempor, est tellus pulvinar lectus, ac elementum augue nisl sed est. Sed congue faucibus nisi, ac tempor ligula dapibus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices egestas volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum sit amet orci viverra, porta ante eget, dapibus ex. Vestibulum at egestas risus. Duis sagittis elementum quam, vitae consequat sapien efficitur sed. In hac habitasse platea dictumst. In mollis magna et ligula tristique commodo.
      
      Nullam molestie ultricies metus sit amet consequat. Vivamus placerat eu eros vel ullamcorper. Morbi vel arcu eu magna pretium ornare eu quis nisi. Pellentesque laoreet laoreet dolor, vitae molestie nibh ultricies finibus. Praesent bibendum pulvinar ante, sed tristique ex eleifend ac. Donec dignissim eros a est egestas, in sollicitudin ligula porttitor. Maecenas et volutpat metus. Nunc egestas diam elit, et imperdiet risus lobortis sed. Vivamus at ullamcorper ante. Curabitur egestas ligula ultrices auctor hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus posuere est ac turpis bibendum, at tempor orci auctor. In sed magna sodales, blandit lacus sit amet, volutpat eros.
      
      Suspendisse velit lorem, aliquam a aliquam non, auctor eu ante. Etiam quis tortor mattis, porttitor leo eu, gravida erat. Proin sed eros neque. Suspendisse odio lacus, commodo eget maximus ut, sodales non velit. Suspendisse lectus erat, maximus hendrerit tortor et, scelerisque porta lectus. Nunc sed sagittis dui. Aliquam lobortis nec massa non lobortis. Nulla rutrum et ex id semper. Mauris ut est mauris. Mauris fringilla, orci eu vestibulum pellentesque, nulla turpis vulputate purus, in consequat odio dui vel sapien. Aliquam auctor diam at magna viverra, in lacinia augue cursus.
      
      Donec eget tempor quam. Sed lacinia lobortis felis. Aliquam nec fermentum lectus. Nam nulla dui, finibus non convallis in, molestie in nibh. Aliquam quis nulla quis lectus consectetur ultrices vitae at nibh. Aliquam nec sapien lorem. Nulla in malesuada erat. Duis scelerisque at est ut gravida.`,
      summary: "Donec auctor ultricies nulla, nec rutrum quam pharetra",
      date: "Máj 5, 2024",
    },
  ];
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return getAllPosts().find((post) => post.slug === slug);
};
