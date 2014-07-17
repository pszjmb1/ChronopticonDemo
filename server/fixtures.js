/**
 * Server fixtures
 */ 

if (Items.find().count() === 0) {
  Items.insert({
    title: 'The Theater',
    itemType: "img",
    itemType2: "comedy",
    itemFilePath: "img/theatre/img1.jpg",
    itemAlt: "Theater Royal", 
    description: "Lorem ipsum dolor.",
    date: "Jan 27, 1893",
    itemLargeURL: "https://www.dropbox.com/sh/hg66p7vcu6vk7zb/AADOpJegW_A6UlU6l31nCghca#lh:null-ACC%202499%20phot_001.jpg",
  });
  Items.insert({
    title: 'Theatre 2',
    itemType: "img",
    itemType2: "tragedy",
    itemFilePath: "img/theatre/img2.jpg",
    itemAlt: "Theater Royal", 
    description: "Lorem ipsum dolor.",
    itemLargeURL: "https://www.dropbox.com/sh/hg66p7vcu6vk7zb/AAA2gEqNYEzCf-qdHNk0u0cTa/ACC%202499%20phot_002.jpg",
    date: "Jan 29, 1893"
  });
  Items.insert({
    title: 'The Theater',
    itemType: "img",
    itemType2: "tragedy",
    itemFilePath: "img/theatre/img3.jpg",
    itemAlt: "Theater Royal", 
    description: "Lorem ipsum dolor.",
    date: "Mar 05, 1893"
  });
  Items.insert({
    title: 'A Playbill',
    itemType: "img",
    itemType2: "comedy",
    itemFilePath: "img/theatre/img4.jpg",
    itemAlt: "Theater Royal", 
    description: "Lorem ipsum dolor.",
    date: "Mar 24, 1893"
  });
  Items.insert({
    title: 'An Actress',
    itemType: "img",
    itemType2: "comedy",
    itemFilePath: "img/theatre/img5.jpg",
    itemAlt: "Theater Royal", 
    description: "Lorem ipsum dolor.",
    date: "Mar 29, 1893"
  });
  Items.insert({
    title: 'Again with the Theatre',
    itemType: "img",
    itemType2: "tragedy",
    itemFilePath: "img/theatre/img6.jpg",
    itemAlt: "Theater Royal", 
    description: "Lorem ipsum dolor.",
    date: "Apr 03, 1893"
  });
  Items.insert({
    title: 'The Theater',
    itemType: "img",
    itemType2: "comedy",
    itemFilePath: "img/theatre/img7.jpg",
    itemAlt: "Theater Royal", 
    description: "Lorem ipsum dolor.",
    date: "May 27, 1893",
  });
  Items.insert({
    title: 'A letter',
    itemType: "img",
    itemType2: "tragedy",
    itemFilePath: "img/theatre/img8.jpg",
    itemAlt: "Theater Royal", 
    description: "Lorem ipsum dolor.",
    date: "Jun 27, 1893"
  });
}