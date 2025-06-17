import { Artist } from '../types/artist';

export const artists: Artist[] = [
  {
    id: '1',
    name: 'WRK',
    image: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/WRK/wrkprofile.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL1dSSy93cmtwcm9maWxlLmpwZyIsImlhdCI6MTc0OTg1MTkxMiwiZXhwIjoyMTk5MTMxOTEyfQ.OL83ha1QX1Thoax6SIaONnzou26r0QtRSXBZpbv73Cs',
    backgroundImage: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/WRK/wrkbackground.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL1dSSy93cmtiYWNrZ3JvdW5kLmpwZyIsImlhdCI6MTc0OTg1MjQ5OSwiZXhwIjoyMTg2MTcyNDk5fQ.n-cB_ZLPKrhKmVlHQJeBecH6tTH4-ScNHeEKg3sXJY0',
    category: 'dj',
    price: 200,
    rating: 5.0,
    reviewCount: 45,
    location: 'Łódź',
    featured: true,
    experience: 5,
    bookings: 120,
    biography: 'A 24-year-old DJ and promoter living in Łódź. On stage since 2020. Despite her short experience, she has managed to win the hearts of dancers with her energy and authenticity. Blazing onto the scene, @wrk_dj brings unstoppable energy and raw intensity to the decks. A driving force behind Poland\'s underground, she\'s the mastermind behind Cyber Glow and a resident at Willa and Schron. Known for her relentless hard techno, neo rave, and schranz-infused sets, she\'s got the power to convert even the skeptics. Shaking up Poland\'s biggest clubs and making waves in Berlin - get ready for full-throttle chaos. She played alongside artists such as Alignment, Azyr, Parfait, Shlømo, Tham, Westbam, Noemi Black, D-Leria, Nur Jaber & more...',
    genres: ['Hard Techno', 'Neo Rave', 'Schranz', 'Underground Techno'],
    galleryImages: [
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/WRK/wrk01.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL1dSSy93cmswMS5qcGciLCJpYXQiOjE3NDk5ODYwMzUsImV4cCI6MjE4MTk4NjAzNX0.O1LvKB_t_LIbx5qUAiG6DYE-p4i8XyG4Jlc4TtDpNv8',
        alt: 'WRK performing at underground event',
        caption: 'Live performance at underground techno event'
      },
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/WRK/wrk02.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL1dSSy93cmswMi5KUEciLCJpYXQiOjE3NDk5ODYwNDYsImV4cCI6MjE4MTk4NjA0Nn0.UzC0epw0JMI9UeQ1p5uwrhdSrmb_xRvoabYIchBHfqc',
        alt: 'WRK behind the decks',
        caption: 'Behind the decks at festival main stage'
      },
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/WRK/wrk03.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL1dSSy93cmswMy5qcGciLCJpYXQiOjE3NDk5ODYwNjAsImV4cCI6MjE4MTk4NjA2MH0.ELc0hkt6nCxo6Snu4eyuvW3wgnFDJ3EIk9239ycHHzU',
        alt: 'WRK crowd interaction',
        caption: 'Connecting with the crowd during peak time'
      },
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/WRK/wrk04.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL1dSSy93cmswNC5qcGciLCJpYXQiOjE3NDk5ODYwNzIsImV4cCI6MjE4MTk4NjA3Mn0.bzs2fNxOqRelRPefvODGyXYcV_LNLEJeWOC5eTuJ8KU',
        alt: 'WRK studio session',
        caption: 'Studio session preparing new tracks'
      },
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/WRK/wrk05.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL1dSSy93cmswNS5qcGVnIiwiaWF0IjoxNzQ5OTg2MDgyLCJleHAiOjIxODE5ODYwODJ9.ijBV-4d7cLWf1llLif5ADKWa_CdzrLdZ5JIJxrRqPek',
        alt: 'WRK festival performance',
        caption: 'Festival performance under the lights'
      },
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/WRK/wrk06.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL1dSSy93cmswNi5qcGVnIiwiaWF0IjoxNzQ5OTg2MDkwLCJleHAiOjIxODE5ODYwOTB9.aOwuievdZoDIDHgsNnMj13Q8wn5qZTeTbtfdr5nkLNs',
        alt: 'WRK backstage',
        caption: 'Backstage moments before the show'
      }
    ],
    soundcloudTracks: [
      {
        title: 'ZIMNYGRZYB - 4822 PODCAST - 007',
        url: 'https://soundcloud.com/wrk_dj/zimnygrzyb-4822-podcast-007',
        duration: '60:00',
        plays: '2.3K',
        description: 'Deep electronic journey featuring ZIMNYGRZYB for the 4822 podcast series - atmospheric sounds and driving rhythms.'
      },
      {
        title: 'WIX COLLINA - 4822 PODCAST - 010',
        url: 'https://soundcloud.com/wrk_dj/wix-collina-4822-podcast-010',
        duration: '58:45',
        plays: '1.8K',
        description: 'WIX COLLINA takes over the 4822 podcast with deep disco and house selection, featuring underground gems and dancefloor favorites.'
      },
      {
        title: 'WRK | Underground Lublin | 20052022',
        url: 'https://soundcloud.com/wrk_dj/wrk-undergroud-lublin-20052022',
        duration: '76:06',
        plays: '2.1K',
        description: 'Live recording from Underground Lublin event - a powerful techno journey through the night with driving basslines and hypnotic rhythms.'
      },
      {
        title: 'WRK | Borderline Przyjaźń | 26032022',
        url: 'https://soundcloud.com/wrk_dj/wrk-borderline-przyjazn-26032022',
        duration: '65:30',
        plays: '1.9K',
        description: 'Live set from Borderline Przyjaźń event - raw underground techno energy captured in its purest form.'
      },
      {
        title: 'PYOTREK - 4822 PODCAST - 009',
        url: 'https://soundcloud.com/wrk_dj/pyotrek-4822-podcast-009',
        duration: '55:20',
        plays: '1.5K',
        description: 'PYOTREK delivers a powerful mix for the 4822 podcast series with underground electronic sounds and festival energy.'
      },
      {
        title: 'SICKDAT - 4822 PODCAST - 008',
        url: 'https://soundcloud.com/wrk_dj/sickdat-4822-podcast-008',
        duration: '62:15',
        plays: '1.7K',
        description: 'SICKDAT brings dark and driving techno to the 4822 podcast series - perfect for late night sessions.'
      },
      {
        title: 'LAS FESTIWAL 2023',
        url: 'https://soundcloud.com/wrk_dj/las-festiwal-2023',
        duration: '45:40',
        plays: '2.8K',
        description: 'Live recording from LAS Festiwal 2023 - outdoor festival vibes with peak-time bangers and crowd favorites.'
      }
    ]
  },
  {
    id: '5',
    name: 'Raw',
    image: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/huseyngurbanliprofile.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL2h1c2V5bmd1cmJhbmxpcHJvZmlsZS5qcGciLCJpYXQiOjE3NDk3MTY3ODMsImV4cCI6MjE5ODk5Njc4M30.4qn7iTWB3pHMBfTaTvrgYUIpV38MkBfc0b7NGaSl12E',
    backgroundImage: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/huseyngurbanlibck.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL2h1c2V5bmd1cmJhbmxpYmNrLmpwZyIsImlhdCI6MTc1MDA4MjcyMCwiZXhwIjoyMTgyMDgyNzIwfQ.PCZKCD6bkYUi7gc6J85EqOwQazZPVNQ_fn1BnuEf-88',
    category: 'photographer',
    price: 160,
    rating: 5.0,
    reviewCount: 75,
    location: 'Warsaw',
    featured: true,
    experience: 4,
    bookings: 180,
    biography: 'Raw - Videographer and Photographer of the Underground. From the flicker of warehouse strobes in Baku to the neon-hazed basements of Warsaw, Raw hunts for electricity in the dark. He first lifted a camera to the rave in 2021, determined to bottle the unruly poetry of techno. What began as late-night shooting for friends in Azerbaijan has grown into a roaming personal studio, Raw Visual Studio, where concrete echoes become cinema and stills are frozen rhythms. Now based in Poland, Raw has lent his eye to some of Europe\'s flagship techno gatherings, serving as both videographer and on-site photographer for Teletech, Boiler Room, Hive Festival, Laboratorium Festival, Open\'er Festival, Verknipt, and Mayday. Whether it\'s an intimate club stream or a festival stage at dawn, he distills the night\'s energy into images built to last. Alongside his lens work he founded Raw Media, a talent agency curating a growing constellation of electronic artists. The same instinct that finds perfect light in chaos helps him spot voices and noises worth amplifying.',
    genres: ['Underground Photography', 'Techno Documentation', 'Festival Coverage', 'Club Photography'],
    signature: 'Atmosphere first, then emotion, then everything else. He shoots handheld and close, letting motion blur and grain kiss the frame while his photographs linger on textures—condensation, vinyl grooves, a single bead of sweat rolling down a cheek.',
    mission: '"I frame raw moments into stories." To Raw, rave culture is modern folklore. His mission is to archive it before the lights come up, whether through a fifteen-second teaser, a festival short film, or a single frame that whispers louder than the sub-bass.'
  }
];

export const featuredArtists = artists.filter(artist => artist.featured);