import { Artist } from '../types/artist';

export const artists: Artist[] = [
  {
    id: '1',
    slug: 'wrk', // Add slug for URL routing
    name: 'WRK',
    image: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/WRK/wrkpp.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL1dSSy93cmtwcC5wbmciLCJpYXQiOjE3NTA0MzAwMjcsImV4cCI6MjE4MjQzMDAyN30.I9LUmfBxLj36YgsSTyGaktOwrabtrOuE8iE5ARI70NM',
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
    slug: 'huseyn-gurbanli', // Updated slug for URL routing
    name: 'Huseyn Gurbanlı', // Updated name
    image: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/huseynpp.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL2h1c2V5bnBwLnBuZyIsImlhdCI6MTc1MDQyOTk5MiwiZXhwIjoyMTgyNDI5OTkyfQ.Tr2MkO3m8ew97oGjcyXQl-ww4P_HXd361ROZuK6KR6c',
    backgroundImage: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/huseyngurbanlibck.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL2h1c2V5bmd1cmJhbmxpYmNrLmpwZyIsImlhdCI6MTc1MDA4MjcyMCwiZXhwIjoyMTgyMDgyNzIwfQ.PCZKCD6bkYUi7gc6J85EqOwQazZPVNQ_fn1BnuEf-88',
    category: 'photographer',
    price: 160,
    rating: 5.0,
    reviewCount: 75,
    location: 'Warsaw',
    featured: true,
    experience: 4,
    bookings: 180,
    biography: 'Huseyn Gurbanlı - Videographer and Photographer of the Underground. From the flicker of warehouse strobes in Baku to the neon-hazed basements of Warsaw, Huseyn hunts for electricity in the dark. He first lifted a camera to the rave in 2021, determined to bottle the unruly poetry of techno. What began as late-night shooting for friends in Azerbaijan has grown into a roaming personal studio, Raw Visual Studio, where concrete echoes become cinema and stills are frozen rhythms. Now based in Poland, Huseyn has lent his eye to some of Europe\'s flagship techno gatherings, serving as both videographer and on-site photographer for Teletech, Boiler Room, Hive Festival, Laboratorium Festival, Open\'er Festival, Verknipt, and Mayday. Whether it\'s an intimate club stream or a festival stage at dawn, he distills the night\'s energy into images built to last. Alongside his lens work he founded Raw Media, a talent agency curating a growing constellation of electronic artists. The same instinct that finds perfect light in chaos helps him spot voices and noises worth amplifying.',
    genres: ['Underground Photography', 'Techno Documentation', 'Festival Coverage', 'Club Photography'],
    signature: 'Atmosphere first, then emotion, then everything else. He shoots handheld and close, letting motion blur and grain kiss the frame while his photographs linger on textures—condensation, vinyl grooves, a single bead of sweat rolling down a cheek.',
    mission: '"I frame raw moments into stories." To Huseyn, rave culture is modern folklore. His mission is to archive it before the lights come up, whether through a fifteen-second teaser, a festival short film, or a single frame that whispers louder than the sub-bass.',
    galleryImages: [
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/huseyn01.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL2h1c2V5bjAxLmpwZyIsImlhdCI6MTc1MDE5ODQ3MywiZXhwIjoyMTgyMTk4NDczfQ.q4xUHAv5x2vBMlIjotTPdpw2iSAnYV6Wmn1hV4FAlSw',
        alt: 'Huseyn Gurbanlı capturing underground atmosphere',
        caption: 'Behind the lens at underground techno event'
      },
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/huseyn02.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL2h1c2V5bjAyLmpwZyIsImlhdCI6MTc1MDE5ODU1MywiZXhwIjoyMTgyMTk4NTUzfQ.6qrzQXbliR_MYYQSc_U45Rzj8xYL_GaJW0LcTtErxpg',
        alt: 'Huseyn Gurbanlı documenting festival moments',
        caption: 'Festival documentation in natural light'
      },
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/huseyn03.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL2h1c2V5bjAzLmpwZyIsImlhdCI6MTc1MDE5ODU2NiwiZXhwIjoyMTgyMTk4NTY2fQ.QuJWmFUgkLyLcJ_fQ7qWPiWMOJLZAAgGbAyLO5jPOVw',
        alt: 'Huseyn Gurbanlı in creative workspace',
        caption: 'Creative process in the studio'
      },
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/huseyn04.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL2h1c2V5bjA0LmpwZyIsImlhdCI6MTc1MDE5ODU3NCwiZXhwIjoyMTgyMTk4NTc0fQ.upkQhR2KclsBQ8AB5h0L2wfOs5RwmrmlsSKBbmQpgCI',
        alt: 'Huseyn Gurbanlı capturing club energy',
        caption: 'Club photography in low-light conditions'
      },
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/huseyn05.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL2h1c2V5bjA1LmpwZyIsImlhdCI6MTc1MDE5ODU4MiwiZXhwIjoyMTgyMTk4NTgyfQ.zXFATRJhVgR7IQVy2HuwkFznO36RpxrQMrykwVV3KZs',
        alt: 'Huseyn Gurbanlı artistic portrait session',
        caption: 'Artist portrait session with dramatic lighting'
      },
      {
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/huseyn06.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL2h1c2V5bjA2LmpwZyIsImlhdCI6MTc1MDE5ODU4OSwiZXhwIjoyMTgyMTk4NTg5fQ.uG1bZFQT0HgoXGWCZS810ixWLBsNx92SRqAzTrZQmVc',
        alt: 'Huseyn Gurbanlı behind the scenes work',
        caption: 'Behind the scenes of visual storytelling'
      }
    ],
    videoShowreel: [
      {
        title: 'Raw Visual Studio - Intro Reel 2025',
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/Huseyn%20(1).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL0h1c2V5biAoMSkubXA0IiwiaWF0IjoxNzUwMTk5NzI0LCJleHAiOjIxODIxOTk3MjR9.L_ZlGXCvWauXZTaTF9wQoQXYkY5xvi4qAawashE_Cfk',
        description: 'Personal introduction and visual style showcase',
        duration: '2:30',
        type: 'intro'
      },
      {
        title: 'Teletech 2025 - Underground Documentation',
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/Teletech%202025%20(4).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL1RlbGV0ZWNoIDIwMjUgKDQpLm1wNCIsImlhdCI6MTc1MDE5OTc0MSwiZXhwIjoyMTgyMTk5NzQxfQ.WYM2BLFkwJOKRm7vlpoyVxGejdw_-6gNNw7kJaPnWrw',
        description: 'Live event coverage capturing the raw energy of Teletech 2025 underground techno event',
        duration: '3:45',
        type: 'event'
      },
      {
        title: 'Laboratorium Festival - Visual Story',
        url: 'https://rroyrxpcceyhgixpgzrs.supabase.co/storage/v1/object/sign/artists/HuseynGurbanli/Laboratorium%20(6).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82N2JkYWYxNi03YzRhLTQ3ZmUtYTE1NS1mZjcxOTE2ZTdiMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcnRpc3RzL0h1c2V5bkd1cmJhbmxpL0xhYm9yYXRvcml1bSAoNikubXA0IiwiaWF0IjoxNzUwMTk5NzYxLCJleHAiOjIxODIxOTk3NjF9.OW9m4p1w_ZQBGXua_hI19n_ZVRT4-1OLrLp3aJlkehc',
        description: 'Festival documentation showcasing the atmosphere and energy of Laboratorium Festival',
        duration: '4:20',
        type: 'festival'
      }
    ]
  }
];

export const featuredArtists = artists.filter(artist => artist.featured);

// Helper function to find artist by slug or ID
export const findArtistBySlugOrId = (slugOrId: string): Artist | undefined => {
  return artists.find(artist => 
    artist.slug === slugOrId.toLowerCase() || artist.id === slugOrId
  );
};