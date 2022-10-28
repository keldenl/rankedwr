import { Typography } from '@mui/material';
import { DateTime } from 'luxon';
import Image from 'next/future/image';
import React, { useEffect, useState } from 'react';

export function PatchNotes() {
    const [notes, setNotes] = useState([])
    const getPatchVersion = (patchTitle) => {
        const matcher = new RegExp("Wild Rift Patch Notes (.*[.].*)", "g");
        const result = matcher.exec(patchTitle);
        return !!result ? result[1] : null;
    }

    const WR_BASE_URL = 'https://wildrift.leagueoflegends.com/en-us'

    const data = {
        "componentChunkName": "component---src-templates-news-tsx",
        "path": "/en-us/news/",
        "result": {
            "data": {
                "allContentstackNews": {
                    "nodes": [
                        {
                            "title": "News",
                            "featuredNews": {
                                "headlines": [
                                    "FEATURED",
                                    "NEWS"
                                ],
                                "contentType": "Pin a category",
                                "selectedTags": [],
                                "selectedCategories": [
                                    {
                                        "title": "Announcements"
                                    }
                                ],
                                "selectedArticleIds": []
                            },
                            "loadMoreCtaText": "SEE MORE NEWS",
                            "preferences": {
                                "placeholderText": "CHOOSE YOUR PREFERENCES",
                                "defaultPreferenceText": "All",
                                "options": [
                                    {
                                        "title": "Announcements"
                                    },
                                    {
                                        "title": "Game Updates"
                                    },
                                    {
                                        "title": "Dev"
                                    },
                                    {
                                        "title": "Closed Beta"
                                    },
                                    {
                                        "title": "Patch Notes"
                                    }
                                ]
                            },
                            "promoAd": {
                                "isEnabled": false,
                                "selectedPromos": [
                                    {
                                        "title": "Where will your Magic Misadventures lead?",
                                        "linkUrl": "https://playruneterra.com/",
                                        "image": {
                                            "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8d2bd0246df312c3/61a9f7ee808392778c8f9f43/120821_LoR_BC5B21_5b-WilfRift_NewsPromoModule.jpg"
                                        }
                                    }
                                ]
                            },
                            "youtubeSection": {
                                "isEnabled": true,
                                "channelId": "UCd0ZomI5mPkrV735wul5kiw",
                                "ctaText": "CHECK OUT OUR CHANNEL",
                                "youtubeLogo": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt2d15470cb09a8096/5f51e5b0c0ed4228f9e58de4/yt_logo_rgb_light.png"
                                }
                            }
                        }
                    ]
                },
                "allContentstackArticles": {
                    "articles": [
                        {
                            "id": "df2f0a2f-a327-5bf9-bc51-ca4728476a5c",
                            "uid": "blt379bab9d2e35698f",
                            "title": "Wild Rift Patch Notes 3.4b",
                            "description": "Vex makes her arrival, balance updates across the Rift, and it’s time to start your training arc—Welcome to Patch 3.4b!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-4b/"
                            },
                            "date": "2022-10-19T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt2e5bfd9c83180be0/634e2658b0662c1e9a6739c5/WR-News-Website_Article_Bannner-News_Patch_notes_3.4b.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "d5dca87e-9026-5df6-a656-0ee9a22b4a15",
                            "uid": "blt393192da9f1042a0",
                            "title": "Wild Rift News October 13, 2022",
                            "description": "In this edition of Wild Rift News, Josh “Nextdoor” Menke talks about Legendary Queue and answers some of your questions! We also discuss the upcoming Supreme Cells event!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-news-october-13-2022/"
                            },
                            "date": "2022-10-13T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltca90ad5e308949cd/6344b469c2df9d10fa3854a4/WR-News-Website_Article_Bannner-News_Template-Oct22_article.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Wild Rift News",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/wild-rift-news/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "950fe24f-06fc-5395-8bab-fb6ea5337fb6",
                            "uid": "blt781e89c21e94cce8",
                            "title": "Wild Rift Patch Notes 3.4a",
                            "description": "It’s time for the Power Spike Party! While we’re ready to celebrate with some goodies, we’re also making some adjustments to the support quest items, Gwen and some other champions across the map. Welcome to 3.4a!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-4a/"
                            },
                            "date": "2022-09-28T21:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt686083bdb4619ecd/63320be018854435547932b6/092822_WR_News_Website_Article_3.4a_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "a36414c7-ccb4-54c3-93e3-c7e5e5966b6a",
                            "uid": "blt381d3e9102185655",
                            "title": "Wild Rift, Wild Stats",
                            "description": "A look back at the past two years... with numbers!",
                            "link": {
                                "url": "/news/community/wild-rift-wild-stats/"
                            },
                            "date": "2022-09-26T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt5aefd461e524fdff/6328b989ed568d5ecda9f9ea/wr_wildstats_banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "46744c7a-d136-52fc-b5c0-a7674f370fee",
                            "uid": "blt9377451094ee367c",
                            "title": "Wild Rift Patch Notes 3.4",
                            "description": "You’ll be a cut above the rest when Gwen and Yone join the Rift this patch…just be careful when you’re out there running around with scissors and fighting your inner demons. We also have a new game mode, items, enchants, Wild Pass, and loads more. Welcome to Patch 3.4!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-4/"
                            },
                            "date": "2022-09-14T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt37ab59355eb62c8a/63201e5119c64564c313cf58/WR-News-Website_Article_Bannner-News_Patch_notes_3.4.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "2b6c23ac-8fac-58bb-84f8-5bd0bc444ba6",
                            "uid": "blt0f7bae7e3691027e",
                            "title": "Superhero Jayce",
                            "description": "Kapow! Zap! Boom! Save the day with Superhero Jayce at level 50 of the Wild Pass for Patch 3.4.",
                            "link": {
                                "url": "/news/announcements/superhero-jayce/"
                            },
                            "date": "2022-09-10T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt99724573078b26ad/6317e02d10c00a57bb0cc271/WR_SuperHero_Jayce-2022-Thumbnails-1920x1080-TEXTLESS_opt.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "JAYCE",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/jayce/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=GcM87K_Dp1s",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "54e0ef68-625a-5215-b30e-fb4d5219e5cf",
                            "uid": "blt31b0e4cd329c3a79",
                            "title": "Wild Rift News September 9, 2022",
                            "description": "In the first edition of Wild Rift News, we’re recapping and diving deeper into all the content we announced in the Patch 3.4 Preview. And revealing some other updates headed onto the Rift in the month of September!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-news-september-9-2022/"
                            },
                            "date": "2022-09-09T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltdf62e63410ca489e/63128376480cea7db42399f1/090922_WR_News_Website_Article_Bannner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Wild Rift News",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/wild-rift-news/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "d5f20fc8-d484-5753-893e-9a8814b5e68a",
                            "uid": "blt9bf3cf54edfaad52",
                            "title": "Hextech Chests are coming to Wild Rift",
                            "description": "Over the past few patches we’ve been looking for new ways for players to earn new content, starting in Patch 3.4 we’ll start rolling out a new way to do just that in some regions.",
                            "link": {
                                "url": "/news/game-updates/hextech-chests-are-coming-to-wild-rift/"
                            },
                            "date": "2022-09-09T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt0e61c5b7972a015b/6317a0f310c00a57bb0cc131/LootArticleOption1.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "7adb95d6-8179-514e-b35f-cf910717eda8",
                            "uid": "blt60bfa401e19eaeba",
                            "title": "Lunar Goddess Diana Skins Preview",
                            "description": "Find strength in the light of the moon with Lunar Goddess Diana starting Sept 9 UTC!",
                            "link": {
                                "url": "/news/game-updates/lunar-goddess-diana-skins-preview/"
                            },
                            "date": "2022-09-06T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1dd4ad6d974f0442/63123a0472b92254289b339a/090622_Lunar_Diana_Banner_v2.jpg.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Diana",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/diana/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/i2ylBoaTTm8",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4576072d-7a86-561a-9250-42c2deef7c27",
                            "uid": "bltc8489a7be18802ed",
                            "title": "Updates to ARAM",
                            "description": "In Patch 3.4 we’re going to be giving you more ways to earn re-rolls during your ARAM matches.",
                            "link": {
                                "url": "/news/game-updates/updates-to-aram/"
                            },
                            "date": "2022-09-06T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb6ae9490e742021d/631122d472b92254289b2a32/090522_ARAM_Reroll_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "ARAM",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/aram/"
                                    }
                                },
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "1a9ea339-68a7-5a05-a5b6-39fa5b4d1807",
                            "uid": "blt249db3aa78be6975",
                            "title": "Power Spike ‘22 Update",
                            "description": "There’s a lot to look out for in the Power Spike ‘22 update! Join us on our journey through the Patch Roadmap to see EVERYTHING that’s coming. 🎉 ",
                            "link": {
                                "url": "/news/announcements/power-spike-22-update/"
                            },
                            "date": "2022-09-05T05:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt62da528acd3f7576/63114ef0d6f96e04e700f91e/090422_Power_Spike_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt46b8c64b26756daf/63114f82c350df140f26aae3/WR_PowerSpike_Roadmap_5_1-1920x1080.jpg",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b470c6c0-32cf-5a7c-8a30-7b36336c4c45",
                            "uid": "blt6872aa7d4870103a",
                            "title": "Patch 3.4 Preview",
                            "description": "Celebrate Wild Rift’s anniversary in Patch 3.4: Power Spike ‘22, arriving September 15 UTC! Start the party with Jared from the dev team and get a look at our new champions, gameplay updates, and events. ",
                            "link": {
                                "url": "/news/announcements/patch-3-4-preview/"
                            },
                            "date": "2022-09-05T04:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte752fc206373d15f/63116181ff41d90f53a56eac/WR_Patch_2E_PREVIEW-2022-Thumbnails-TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Preview",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/patch-preview/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=FlD9IGtE26E",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "c65df233-5ffc-57fb-8f3c-4f8c89573295",
                            "uid": "bltc6ece05b6aab9b25",
                            "title": "Wild Rift Patch Notes 3.3c",
                            "description": "It’s our final balance before Patch 3.4, and we’re focused on making adjustments to some champions who have been dominating and struggling in the Baron Lane. Welcome to Patch 3.3c!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-3c/"
                            },
                            "date": "2022-08-31T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltaeca65d75648316e/630d47f29455087dbb304bed/WR_patch-notes_Article_Banner_Camille.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b6517238-efe9-5ce2-82ba-56de6999153b",
                            "uid": "blt1d13cdf9bb5b12ad",
                            "title": "Samira Champion Overview",
                            "description": "Shoot first, slash second. Samira, the Desert Rose, rushes into Wild Rift!",
                            "link": {
                                "url": "/news/game-updates/samira-champion-overview/"
                            },
                            "date": "2022-08-26T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltdd00c30df0a1dd56/6306c4d1fa18075e96434ae7/WR_YT_Thumb_1920x1080_samira.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Samira",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/samira/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.youtube.com/watch?v=wugifsDSHyA",
                            "showTableOfContents": false
                        },
                        {
                            "id": "cdf02d7b-49f2-5b4b-b5b9-12f1d9ccdc72",
                            "uid": "blt89793468cf017eea",
                            "title": "Sion Champion Overview",
                            "description": "Death will think twice. 💀 Sion, the Undead Juggernaut, stampedes down lane into Wild Rift!",
                            "link": {
                                "url": "/news/game-updates/sion-champion-overview/"
                            },
                            "date": "2022-08-26T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltaa1e5315616e33cd/6303dae37456726f6581760c/WR_Sion_ChampOverview-1920x1080-TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Sion",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/sion/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=PRXEmvjUq_s",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "f498f287-3f3b-502c-bb53-134f148bbff3",
                            "uid": "bltd2382060013bf1d4",
                            "title": "Warmonger Sion and PsyOps Skins Preview",
                            "description": "Brutal strength or precise power? Warmonger Sion, and PsyOps Samira, Master Yi, Kayle, and Zed are heading to  the Rift!",
                            "link": {
                                "url": "/news/game-updates/warmonger-sion-and-psyops-skins-preview/"
                            },
                            "date": "2022-08-26T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt9ffaa99cef654e4a/630691897456726f658184a5/PsyOpsSamiraSplash-1920x1080_Banner_opt.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Samira",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/samira/"
                                    }
                                },
                                {
                                    "title": "Sion",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/sion/"
                                    }
                                },
                                {
                                    "title": "MASTER YI",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/master-yi/"
                                    }
                                },
                                {
                                    "title": "KAYLE",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/kayle/"
                                    }
                                },
                                {
                                    "title": "ZED",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/zed/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=ACDKH1QXAHg",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "2e23380b-e8ff-5fd7-88af-19c9cbe21902",
                            "uid": "blt99b270e0ae93e440",
                            "title": "Weapons of Noxus",
                            "description": "Charge into the fray in the Weapons of Noxus event! Arm up and dive in starting August 26 UTC.",
                            "link": {
                                "url": "/news/announcements/weapons-of-noxus/"
                            },
                            "date": "2022-08-26T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta2b59560b0cb430b/6305d54a1995fc0f710ffe6d/Weapons-of-Noxus-Banner_opt.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/5835661416595",
                            "showTableOfContents": false
                        },
                        {
                            "id": "edeb59e8-f993-550f-a22f-bc925a4e78da",
                            "uid": "bltabb2f21998e4f531",
                            "title": "Weapons of Noxus Trailer",
                            "description": "When failure is not an option, Noxus sends in the best. Recruit the unstoppable forces of Samira and Sion in the Weapons of Noxus event!",
                            "link": {
                                "url": "/news/announcements/weapons-of-noxus-trailer/"
                            },
                            "date": "2022-08-25T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt608dd1af9972fa1b/6305674f3c247f5cd3f7f895/simira_minicini_1920x1080-textless_OPT.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Samira",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/samira/"
                                    }
                                },
                                {
                                    "title": "Sion",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/sion/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=Ctrlj5R7FpU",
                            "externalLink": "https://www.youtube.com/watch?v=Ctrlj5R7FpU",
                            "showTableOfContents": false
                        },
                        {
                            "id": "db956388-b94a-5141-b0c9-ac6f8431b495",
                            "uid": "blt33122db7c89d3b28",
                            "title": "Upcoming Changes to Guilds and GvG",
                            "description": "With Season 3 of GvG coming to a close, we’re sharing an update discussing some of your feedback and the changes coming for Season 4!",
                            "link": {
                                "url": "/news/announcements/upcoming-changes-to-guilds-and-gvg/"
                            },
                            "date": "2022-08-25T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt9b0dff7ef5cb9932/6305413e456d687d3d3bf84c/WRGVGarticleheader.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "482e1ae2-fade-59d2-b7c5-200e476d7b75",
                            "uid": "blt9be65d98a66f5e72",
                            "title": "August Random Bauble Chest",
                            "description": "Leave your mark! Add a new Bauble to your collection when you link your Wild Rift and Amazon Prime accounts. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/august-random-bauble-chest/"
                            },
                            "date": "2022-08-18T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb8f1fb45633a0b9f/62fc2cef4461916e6c501bec/Article_Art_Drop_20.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/loot/wildrift?ref_=SM_LOLWR02_P8_IGP",
                            "showTableOfContents": false
                        },
                        {
                            "id": "8eb4f961-1004-54f4-a529-00e06e1863c0",
                            "uid": "bltf616f35f36444a89",
                            "title": "Wild Rift Patch Notes 3.3b",
                            "description": "Rise from the dead and kill your opponents, this time with some style—Sion and Samira join the Rift! We also have your regularly scheduled balance updates across the map, welcome to Patch 3.3b!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-3b/"
                            },
                            "date": "2022-08-17T22:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt53900dfac96b8f92/62fae0be1256357d9281ff9e/WRPatchNotes3.3bHeader.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "b9113551-c2a5-5048-8d76-bef237735d4c",
                            "uid": "blt07ab5d8fed339e7e",
                            "title": "Dragon Trainer Tristana Skins Preview",
                            "description": "Dragon Trainer Tristana jumps into Wild Rift with a boom (and a dragon burp) starting Aug 19 UTC!",
                            "link": {
                                "url": "/news/game-updates/dragon-trainer-tristana-skins-preview/"
                            },
                            "date": "2022-08-16T22:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt574e1efa28ba1ab4/62f595e95690027609756745/Dragon-Trainer-Tristana-1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "TRISTANA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/tristana/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/JXxUjMqN-v8",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "eeaf0dbc-3b27-53d7-b939-f65cab8a4815",
                            "uid": "blt77c04da8ce646b88",
                            "title": "Never Stop Me (Falcons Pangea Sound Remix)",
                            "description": "This is the sound of winning. Listen to a remix of the Icons Global Championship anthem inspired by Nova Esports!",
                            "link": {
                                "url": "/news/esports/never-stop-me-falcons-pangea-sound-remix/"
                            },
                            "date": "2022-08-11T13:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt5ac16b277e62ea51/62f2e7c7f0bc6d11582248cb/Icons_NeverStopMe_Remix_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=RkVKGVsE6jg",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4132f380-37db-5ca3-90d0-990d83831ab9",
                            "uid": "blt1b4006373c677746",
                            "title": "Pool Party Skins Preview",
                            "description": "Swan dive or cannonball? Either way, jump in with Pool Party skins on Aug 12 UTC!",
                            "link": {
                                "url": "/news/game-updates/pool-party-skins-preview/"
                            },
                            "date": "2022-08-09T22:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb55a8d02fce29474/62ec9323412cd777d8052144/080922_Poolpart_Mundo_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "DR. MUNDO",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dr-mundo/"
                                    }
                                },
                                {
                                    "title": "ZIGGS",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/ziggs/"
                                    }
                                },
                                {
                                    "title": "CAITLYN",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/caitlyn/"
                                    }
                                },
                                {
                                    "title": "GRAVES",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/graves/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/9ZD4Rx10bv4",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "faf930b5-618b-5ba8-8673-e798da1f97f8",
                            "uid": "bltdf3efcd147951bf2",
                            "title": "Beekeeper Singed Skins Preview",
                            "description": "Chasing this champion is sure to sting! Beekeeper Singed is beelining to top lane and beeyond on Aug 11 UTC.",
                            "link": {
                                "url": "/news/game-updates/beekeeper-singed-skins-preview/"
                            },
                            "date": "2022-08-08T22:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt349d2d3cb8d11c79/62e8b110e0e20410aa835a14/Singed-Beekeeper-1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "SINGED",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/singed/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/sYbuU3s4N6E",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "54f16144-0031-5b0c-a7d6-f9e1046676d9",
                            "uid": "bltd90e3e052120e619",
                            "title": "Kassadin’s Trivia",
                            "description": "Uncover the mysteries of Kassadin, the Void Walker, in this special trivia event! Answer questions through Aug 12 UTC to unlock rewards (and secrets).",
                            "link": {
                                "url": "/news/announcements/kassadin-s-trivia/"
                            },
                            "date": "2022-08-04T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt37c0831b6e9cef16/62e8347dd244a471dace6029/Kassadin-Trivia-Event-1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Kassadin",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/kassadin/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/5835580872851",
                            "showTableOfContents": false
                        },
                        {
                            "id": "128693e4-b9d5-59f0-a6dd-f26a8428d56a",
                            "uid": "blt72cc99b20086efd7",
                            "title": "August Random Recall Chest",
                            "description": "Collect a new Recall from Prime Gaming this week! For participating regions only.",
                            "link": {
                                "url": "/news/announcements/august-random-recall-chest/"
                            },
                            "date": "2022-08-04T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte673c276cc946fa4/62e1bb88412cd777d804f92d/Article_Art_Drop_19.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/loot/wildrift?ref_=SM_LOLWR02_P7_IGP",
                            "showTableOfContents": false
                        },
                        {
                            "id": "322b2ff5-0ca6-5941-873c-d7e1d221e7b9",
                            "uid": "blt5e0c53d01334f381",
                            "title": "Star Guardian Manga Artist Showcase",
                            "description": "We partnered with artists to imagine our newest class of Star Guardians in a series of manga cover-style illustrations! View and download the full artwork here.",
                            "link": {
                                "url": "/news/announcements/star-guardian-manga-artist-showcase/"
                            },
                            "date": "2022-08-03T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8bed2715aac00741/62e86a04e71af410b83be135/WR-News-Website_Article_Banner-Items_Manga_Artists.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Star Guardian",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/star-guardian/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "5dc01870-4ae4-515d-8bb1-7085e308688a",
                            "uid": "blt34865c2d3a4cf3d2",
                            "title": "God Fist Lee Sin Skins Preview",
                            "description": "Punch with unearthly fury! God Fist Lee Sin enters the fray on Aug 5 UTC.",
                            "link": {
                                "url": "/news/game-updates/god-fist-lee-sin-skins-preview/"
                            },
                            "date": "2022-08-02T22:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf8e1ba7c096d6ac6/62e7fbb6e71af410b83bdf95/Skin-Social_-_God_Fist_Lee_Sin.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "LEE SIN",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/lee-sin/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/Nh05wb-vTbM",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "1c923255-7554-50b5-b4f7-ead2b0a3e3bd",
                            "uid": "bltaae4f8c9817029f0",
                            "title": "Kassadin Champion Overview",
                            "description": "Walk where none dare follow when you play Kassadin, the Void Walker, available soon!",
                            "link": {
                                "url": "/news/game-updates/kassadin-champion-overview/"
                            },
                            "date": "2022-07-28T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltfe5427248e90cd2f/62df48b2569002760974fe89/WR-YT-Thumb-1920x1080-textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Kassadin",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/kassadin/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=SE3NirwFNJQ",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "a20a530c-6bba-54d4-81aa-0aaf4617f452",
                            "uid": "bltb783af05a64f700f",
                            "title": "Wild Rift Patch Notes 3.3a",
                            "description": "Coming off our big changes to ultimate cooldown reductions in 3.3, we’re making a few adjustments and tweaks across the board. You’ll also be left powerless and void of thoughts when Kassadin, The Void Walker emerges onto the Rift in 3.3a!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-3a/"
                            },
                            "date": "2022-07-27T22:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1f6e01a345c33495/62e0364f5c954177895ab395/WR_patch-notes_Article_Banner_Kass.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "cccc0c9c-bdae-535a-a9a8-5cb8df2971df",
                            "uid": "blt1a0169d444b96299",
                            "title": "Warring Kingdoms Jarvan IV and Katarina Skins Preview",
                            "description": "Master the art of war with Warring Kingdoms Jarvan IV and Katarina, coming to Wild Rift on July 29 UTC.",
                            "link": {
                                "url": "/news/game-updates/warring-kingdoms-jarvan-iv-and-katarina-skins-preview/"
                            },
                            "date": "2022-07-26T22:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3bef774936b4020d/62deea3b19ee366ebba5492a/Skin-Social-Warring-Kingdoms-Jarvan-IV-and-Katarina-V2_opt.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "KATARINA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/katarina/"
                                    }
                                },
                                {
                                    "title": "JARVAN IV",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/jarvan-iv/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/Ek5Ke4g7zIk",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "87e9b3d4-1238-56c2-b3f0-f497f7399b87",
                            "uid": "bltc3b36eeb32f31e63",
                            "title": "Harbinger Kassadin Skins Preview",
                            "description": "Bear tidings of doom from the Void with Harbinger Kassadin, coming July 29 UTC.",
                            "link": {
                                "url": "/news/game-updates/harbinger-kassadin-skins-preview/"
                            },
                            "date": "2022-07-26T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt747bff73269f2f09/62df3a122a1b7c750a4be709/WR_YT_Thumb_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Kassadin",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/kassadin/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/HxSRNz-8rBc",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "f9925cc8-0ce9-5c21-839b-5b6eb74170da",
                            "uid": "bltb0fc1f29a306ce79",
                            "title": "July Random Emote Chest",
                            "description": "An Emote is worth a thousand words! Add a new one to your collection when you connect your Wild Rift and Amazon Prime accounts. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/july-random-emote-chest/"
                            },
                            "date": "2022-07-21T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt2e811f5a388003b4/62d841ff6aa76910ad70624f/Article_Art_Drop_18_opt.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/loot/wildrift?ref_=SM_LOLWR02_P6_IGP",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9eb2fa94-d4b8-53fd-b9c2-e213f2be5922",
                            "uid": "blt6184ae6835b916d9",
                            "title": "/dev: Designing a Star Guardian Trio",
                            "description": "Heros by night and high schoolers by day, even with a lot on their plate Star Guardians always manage to sparkle.",
                            "link": {
                                "url": "/news/dev/dev-designing-a-star-guardian-trio/"
                            },
                            "date": "2022-07-20T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltc9cacc27a93f17a3/62d5f454da4a7837db529e88/StarGuardianHeader_opt.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "7257b1b6-46d6-5623-a816-47951093c3b3",
                            "uid": "blt05bb43ca8cfdaf9a",
                            "title": "Never Stop Me | Icons Global Championship 2022",
                            "description": "Cheer, shout, and let it all out for the Icons 2022 Opening Ceremony performance of Never Stop Me!",
                            "link": {
                                "url": "/news/esports/never-stop-me-icons-global-championship-2022/"
                            },
                            "date": "2022-07-19T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt176abd419a295f09/62d22a4e65187e36e4766098/Opening-Ceremony-TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=GBCY4-L7a8I",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "2063f0e0-264c-5596-ba46-97be5c432b72",
                            "uid": "blt368aaa2f77d89632",
                            "title": "Star Guardian Skins Preview",
                            "description": "Love, loss, and far-flung galaxies: this squad’s seen it all. 🌌 Star Guardian Ahri, Miss Fortune, Orianna, Rakan, Senna, Seraphine, and Xayah will set the Rift aglow.",
                            "link": {
                                "url": "/news/game-updates/star-guardian-skins-preview/"
                            },
                            "date": "2022-07-16T19:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt9f3fd1e6f8852198/62cf6c1cbac71c389107a891/SG-Xayah_TempBanner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Star Guardian",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/star-guardian/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=SP9H4_HhZAI",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "594defea-0fa9-5423-8230-b0ca87b679a4",
                            "uid": "blte87a0aeffcb7c3b2",
                            "title": "Glorious Crimson Fiora Skins Preview",
                            "description": "For victory, honor, and glory! Unlock Glorious Crimson Fiora when you take your rightful place among the ranks of Season 6 in Wild Rift.",
                            "link": {
                                "url": "/news/game-updates/glorious-crimson-fiora-skins-preview/"
                            },
                            "date": "2022-07-15T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt2676ea3cdc3df001/62cf7096b351a9369051fe8d/Fiora-1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "FIORA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/fiora/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/_xbTfWaNqvk",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "8b6949ac-6c60-5b5f-8b04-c3eebe6ec795",
                            "uid": "bltb422ef36a7cdad00",
                            "title": "Stargazer Karma Trailer",
                            "description": "The constellations weave our tapestry of fate. Trace its threads with Stargazer Karma, available at level 50 of Wild Pass Season 8.",
                            "link": {
                                "url": "/news/announcements/stargazer-karma-trailer/"
                            },
                            "date": "2022-07-14T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb3a9548103b1a48e/62ce0ee407121b35836b5b88/WR_StarGazer-Karma-2022-1920x1080-text_and_logoless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Karma",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/karma/"
                                    }
                                },
                                {
                                    "title": "Stargazer",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/stargazer/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.youtube.com/watch?v=OHuj7AmZMkk",
                            "showTableOfContents": false
                        },
                        {
                            "id": "37cc2be4-2167-57c1-b305-52db834a5897",
                            "uid": "blt10dd395680796ed8",
                            "title": "Wild Rift Patch Notes 3.3",
                            "description": "Shine Bright—it’s patch 3.3! We’re channeling the elements and the stars this patch as Elemental Rift is permanently here and the Star Guardians, new and old are here to protect us from the forces of evil! Ranked S6, a new Wild Pass, and so much more are also here!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-3/"
                            },
                            "date": "2022-07-13T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt59b33c9f98e8f9fe/62ccbc6ea80c6d36eaa11c58/WRPatchNotesBanner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "4b6aa96e-4860-591e-bcbc-9b1d190a9f7f",
                            "uid": "blt91faf37678084886",
                            "title": "Interview with Excoundrel",
                            "description": "We sat down with Excoundrel to celebrate the 2022 Icons Global Championship and hear his thoughts on the past, present, and future of Wild Rift.",
                            "link": {
                                "url": "/news/esports/interview-with-excoundrel/"
                            },
                            "date": "2022-07-13T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt95b55b42a65b300b/62cdb563a80c6d36eaa120c8/WR_Thumb_1920x1080-textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=2FUeefBKEvA",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "a589c334-feef-5540-badc-b0c4b805aeb6",
                            "uid": "bltfddc804f7c341c6f",
                            "title": "Master the Elements | Elemental Rift Trailer",
                            "description": "A new dawn rises on the Rift! Elemental Rift is now the permanent map of Wild Rift and with it comes more exciting ways to play with your friends.",
                            "link": {
                                "url": "/news/game-updates/master-the-elements-elemental-rift-trailer/"
                            },
                            "date": "2022-07-13T13:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3db29aeacfecc68b/62ce0028429ac43379ca2bb5/WR_Elemental_Rift_Trailer_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Elemental Rift",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/elemental-rift/"
                                    }
                                },
                                {
                                    "title": "JINX",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/jinx/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=Jk8O6NEOMFc",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "8353cc0f-8eb4-5166-bddf-258d9b70ef3d",
                            "uid": "blteea4c88f1f0fd6f9",
                            "title": "Star Guardian 2022 Event Trailer",
                            "description": "Between the group chat and massive space monsters, nothing in this world waits for long! Discover Star Guardian 2022, July 15 UTC.",
                            "link": {
                                "url": "/news/announcements/star-guardian-2022-event-trailer/"
                            },
                            "date": "2022-07-12T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt99ad10a13adac458/62be406931e9b64d8b94b738/SG22_WREventTrailer_Banner_1.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Star Guardian",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/star-guardian/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=iEgMebbySEc",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "36def2ee-623a-5383-bb45-a6a22798d0a2",
                            "uid": "bltdbc297d26cd411a0",
                            "title": "/dev: New Enchants in Patch 3.3",
                            "description": "Patch 3.3 brings new enchantment options!",
                            "link": {
                                "url": "/news/dev/dev-new-enchants-in-patch-3-3/"
                            },
                            "date": "2022-07-11T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf0ef510d18d491ba/62be3a6925ccfe5195057348/WR-News-Website_Article_Banner-Items_20220617.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "a01775a5-dc0e-56b8-9f43-efa063837b98",
                            "uid": "blt2fc60038126e1f6f",
                            "title": "Nova Esports Have Been Crowned the First Wild Rift World Champions",
                            "description": "Nova Esports take home the trophy!",
                            "link": {
                                "url": "/news/esports/nova-esports-have-been-crowned-the-first-wild-rift-world-champions/"
                            },
                            "date": "2022-07-11T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt22bd10d846348363/62cc5b97a22ebb33736f1d6f/HEADER_WildRift_Finals_2022_134_OPTIMIZED.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ba56299c-d3a5-5624-b636-049ff196c6f2",
                            "uid": "bltbb1f1e30719c3c7f",
                            "title": "New Content in Patch 3.3",
                            "description": "You’re going to want to keep a close eye on the stars as Patch 3.3 is right around the corner! Did you miss our latest Patch Preview or just want a refresh before the Patch Notes? We’ve got you covered!",
                            "link": {
                                "url": "/news/announcements/new-content-in-patch-3-3/"
                            },
                            "date": "2022-07-11T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltffac2ba86d69be56/62be1bee3b0fab4edbf2c8ee/Samira-Splash-wr-33.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Preview",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/patch-preview/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "506d9b1a-6176-5a1b-95eb-63874bb12f57",
                            "uid": "blt047b28b110c961d7",
                            "title": "Icons Global Championship 2022 Finals Trailer",
                            "description": "Your next pro play is just a game away! The first-ever Wild Rift Icons Global Championship is live from June 14 to July 9.",
                            "link": {
                                "url": "/news/esports/icons-global-championship-2022-finals-trailer/"
                            },
                            "date": "2022-07-09T14:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltefb039c9f26d370d/62bb848a81636b0f767f9cf7/Play-Like-an-Icon-Thumbnail-textless-1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=3-0kvjfXbUg",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "c434d37e-70d5-5fe2-bdd8-62899b1464df",
                            "uid": "bltbe183128805529f6",
                            "title": "Elemental Rift Overview",
                            "description": "With the release of Patch 3.3, Elemental Rift will be officially taking over! Read all about how these changes will transform your gameplay and how this new buff came to be!",
                            "link": {
                                "url": "/news/game-updates/elemental-rift-overview/"
                            },
                            "date": "2022-07-09T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4f18c4d051c1be3a/62b2715b36119858583d1992/07-08-2022_Elemental-Rift_Overview_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Elemental Rift",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/elemental-rift/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9036ad89-db93-59c0-9dbc-8501ee1dcc34",
                            "uid": "blt7e28d6c187218d0f",
                            "title": "Stargazer Karma Skins Preview",
                            "description": "Empowered by the stars, Stargazer Karma answers the call of the cosmos and enters Wild Rift on July 14 UTC!",
                            "link": {
                                "url": "/news/game-updates/stargazer-karma-skins-preview/"
                            },
                            "date": "2022-07-08T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte728d016cbb442d4/62bb77474d83761026d9de20/StargazerKarma_WebsiteRedirect.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Karma",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/karma/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=-5YwWNBObUw",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "37f09168-d39f-50e3-8b96-19bb45fcb333",
                            "uid": "blt20e91badeb9aad0d",
                            "title": "Patch 3.3 Preview",
                            "description": "Gather your friends and defend the universe from evil in Patch 3.3: Shining Bright, arriving on July 14 UTC! Join Alan from the Wild Rift dev team for details on the new gameplay updates, champions, and events we’re looking forward to.",
                            "link": {
                                "url": "/news/announcements/patch-3-3-preview/"
                            },
                            "date": "2022-07-06T12:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltfa5ff7c6491110bb/62ba683759fa7e0f945d8b2b/WR_YT_Thumb_1920x1080_Textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Preview",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/patch-preview/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=x0j0TfMlBnY",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "146d7bee-98e0-57e4-9271-119970743791",
                            "uid": "blt0ec23f4ccfb17b46",
                            "title": "July Random Skin Chest",
                            "description": "Grab a new in-game look with a Random Skin Chest from Prime Gaming! Link your Wild Rift and Amazon Prime accounts and claim this week's reward. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/july-random-skin-chest/"
                            },
                            "date": "2022-07-05T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt110da7b9082bf6ac/62bb347c4a5c4d0fcb18a32a/Article-Art_Optimized.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/loot/wildrift?ref_=SM_LOLWR02_P5_IGP",
                            "showTableOfContents": false
                        },
                        {
                            "id": "82831b6f-365b-50cc-ac06-9fea3776e67f",
                            "uid": "blt73ddd58b4687709f",
                            "title": "Wild Rift Patch Notes 3.2c",
                            "description": "The final balance patch of 3.2 is here, and we’re making a few minor buffs across the map and nerfing some of Soraka’s healing power.",
                            "link": {
                                "url": "/news/dev/wild-rift-patch-notes-3-2c/"
                            },
                            "date": "2022-06-28T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt80cfc5937dd4672c/62b4d3d359fa7e0f945d7c2b/WR3.2Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "b1a8665d-161b-5e96-a7e9-ddd395246d78",
                            "uid": "blt97070898164f9a53",
                            "title": "Dawnbringer and Nightbringer Skins Preview",
                            "description": "Defender of light or bringer of shadows? Dawnbringer Riven and Nightbringer Yasuo are coming soon to Wild Rift!",
                            "link": {
                                "url": "/news/game-updates/dawnbringer-and-nightbringer-skins-preview/"
                            },
                            "date": "2022-06-28T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf48066e5a1a2a344/62b3b2f78e531c5737f7ee33/WR_DBR&NBY_Banner_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RIVEN",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/riven/"
                                    }
                                },
                                {
                                    "title": "YASUO",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/yasuo/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=s98q0t_zIeY",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "09fab1eb-5dc7-5dca-bfaf-1d2d20f3989e",
                            "uid": "blt480dd185046e62f4",
                            "title": "Wild Rift Icons Groups Stage Recap",
                            "description": "That’s a wrap for Groups!",
                            "link": {
                                "url": "/news/esports/wild-rift-icons-groups-stage-recap/"
                            },
                            "date": "2022-06-27T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt575ca3c9f6592891/62b9f569fb425b0fc910f04a/HEADER-WildRift_Groups_2022_Day3_089.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "514e8d82-8619-57df-a020-a2c7f4ba8b04",
                            "uid": "blt18f35265e7ee5d03",
                            "title": "/dev: Legendary Queue and Ranked Updates",
                            "description": "We’re adding a new queue and making changes to Ranked overall during Season 6!",
                            "link": {
                                "url": "/news/dev/dev-legendary-queue-and-ranked-updates/"
                            },
                            "date": "2022-06-24T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt42606eb31ebdbb00/62b35ac4a18b205191cfbf93/06232022_devLegendaryQueueandRankedUpdatesArticle_Riven.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "597c0631-57f4-5dfc-8302-36e4a857cd54",
                            "uid": "blt4ec4a333ebb776c7",
                            "title": "Nautilus Champion Overview",
                            "description": "Drag them to the deeps with Nautilus, the Titan of the Depths. Starting today, unleash the seas’ fury in Wild Rift.",
                            "link": {
                                "url": "/news/game-updates/nautilus-champion-overview/"
                            },
                            "date": "2022-06-21T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt29b4a4c9b016d79b/62acf9ffe75cbf5ab676ad5e/062122_WR_Nautilus_ChampOverview_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Nautilus",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/nautilus/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=DBwBKheelg0",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "18167b12-9716-5707-a2db-b42fb335e969",
                            "uid": "bltbff5c8c2ac7a07de",
                            "title": "Pyke Champion Overview",
                            "description": "They’ll all be underwater soon. Add them to your list with Pyke, the Bloodharbor Ripper, starting today in Wild Rift.",
                            "link": {
                                "url": "/news/game-updates/pyke-champion-overview/"
                            },
                            "date": "2022-06-21T19:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte727620281f80ee3/62ad1fdcf4da744f1d8c8fd2/WR_PykeCO_Thumb_1920x1080_textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Pyke",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/pyke/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=TXFfghY7kpM",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b2ca15d6-420b-5ab1-bef4-b445ccc10927",
                            "uid": "bltab2a74ec45cee4ea",
                            "title": "Wild Rift Icons Now Streaming on Riot Mobile",
                            "description": "Riot Mobile offers Wild Rift Esports, just in time for Icons 2022.",
                            "link": {
                                "url": "/news/announcements/wild-rift-icons-now-streaming-on-riot-mobile/"
                            },
                            "date": "2022-06-21T09:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltcbad05e61d98ab42/62ad02ff03b23c505f841464/icons_logo_only_-_wilf_rift_esports_riot_mobile_2022_wild_rift_icons_global_championship.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "90d2d0e6-5898-5a40-ba4f-a904f5fffada",
                            "uid": "bltc77e9017dfe226db",
                            "title": "Rise from The Deep",
                            "description": "Claim yer cut of treasures and more in the Rise from the Deep event! Explore an ocean full of rewards with Pyke and Nautilus.",
                            "link": {
                                "url": "/news/announcements/rise-from-the-deep/"
                            },
                            "date": "2022-06-21T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4062d9066098b596/62a8c2898e531c5737f7c01c/RiseFromTheDeep_WebsiteRedirect_revi.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Pyke",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/pyke/"
                                    }
                                },
                                {
                                    "title": "Nautilus",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/nautilus/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/4727510889107",
                            "showTableOfContents": false
                        },
                        {
                            "id": "c670a4bd-ff78-5218-a150-0b11e66afbb8",
                            "uid": "bltf9f27f7cda59c30f",
                            "title": "Rise From the Deep Trailer",
                            "description": "Best keep an eye out for what lurks in the depths. Set sail with Pyke and Nautilus during the Rise From the Deep event!",
                            "link": {
                                "url": "/news/announcements/rise-from-the-deep-trailer/"
                            },
                            "date": "2022-06-20T23:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt6a231e43457039cc/62ac2883c4d59b57e0c26488/WR_PykeNaut_CG_banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Pyke",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/pyke/"
                                    }
                                },
                                {
                                    "title": "Nautilus",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/nautilus/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=QwWwRJKuu94",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "3fafb9e6-d8ae-5376-bed0-1750c9003c64",
                            "uid": "blt2b952c29f1bce3af",
                            "title": "Wild Rift Icons Play-Ins Stage Recap",
                            "description": "Play-Ins results are in!",
                            "link": {
                                "url": "/news/esports/wild-rift-icons-play-ins-stage-recap/"
                            },
                            "date": "2022-06-20T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt0e423edd9e9cb7ee/62aa5e8ef4da744f1d8c7fe6/WildRift_PlayIns_2022_Day2_079.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4eafd1a9-2e53-59c4-aa0b-05e28de9654c",
                            "uid": "blt40d22e7712de465f",
                            "title": "Sand Wraith Pyke and AstroNautilus Skins Preview",
                            "description": "Secure support from sand and sky with Sand Wraith Pyke and AstroNautilus.",
                            "link": {
                                "url": "/news/game-updates/sand-wraith-pyke-and-astronautilus-skins-preview/"
                            },
                            "date": "2022-06-19T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt7e9abb7505fc9d2b/62aa7e09aafb95571393b367/SandWraithPyke_AstroNautilus_WebsiteRedirect.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Pyke",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/pyke/"
                                    }
                                },
                                {
                                    "title": "Nautilus",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/nautilus/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/xKKMuXnCIZU",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "912feb3e-0e96-5bb4-b68f-725de1a1a985",
                            "uid": "blt63f01ca74846557c",
                            "title": "June Random Bauble Chest",
                            "description": "Time to accessorize. Pick up a Random Bauble Chest when you link your Wild Rift and Amazon Prime accounts. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/june-random-bauble-chest/"
                            },
                            "date": "2022-06-16T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb3e16affccfacdcd/62a93116c4d59b57e0c25692/Article_Art_Drop_16.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P16_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "da823c03-976e-5cc5-9e91-df9192e70176",
                            "uid": "blt2a198729ff04c564",
                            "title": "Wild Rift Icons 2022 On-Air English Talent and Watch Parties!",
                            "description": "We’re excited to announce the on-air talent roster for Wild Rift Icons! This team will capture all of the action happening in Singapore for our official English broadcast feed.",
                            "link": {
                                "url": "/news/esports/wild-rift-icons-2022-on-air-english-talent-and-watch-parties/"
                            },
                            "date": "2022-06-13T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8dfd59226fb3eb97/62a385e65ec90f4f1bae0c1c/Talent_Announcement_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "59e068a4-9492-565f-99ca-e2082c1e4449",
                            "uid": "blt812543219f0046ad",
                            "title": "Never Stop Me (ft. Tkay Maidza) | Icons 2022",
                            "description": "The official anthem of the Wild Rift Icons Global Championship 2022 has arrived.",
                            "link": {
                                "url": "/news/esports/never-stop-me-ft-tkay-maidza-icons-2022/"
                            },
                            "date": "2022-06-13T13:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3cf2fb208eae8e3a/62a301fea064e356abaf1680/ICONS_Never_Stop_Me_Thumbs_TEXTLESS_16_9.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=h_IVUFH5vXo",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "543c1c43-2641-5b91-8275-939ffe8cee76",
                            "uid": "bltf929314693eada17",
                            "title": "Forsaken Jayce Skins Preview",
                            "description": "The future isn’t always bright. Turn to the dark with Forsaken Jayce, powering up on June 13 PT.",
                            "link": {
                                "url": "/news/game-updates/forsaken-jayce-skins-preview/"
                            },
                            "date": "2022-06-12T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1c1ea2bfe69a4467/62a13cb958931557ed9f7613/ForsakenJayce_WebsiteRedirect.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "JAYCE",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/jayce/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/dTcTJDGuIlQ",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "fc5b85b5-8a1e-5517-9dc4-d62c16756c48",
                            "uid": "blt588fd954384f5367",
                            "title": "Wild Rift Icons Global Championship Ruleset",
                            "description": "The official ruleset for the 2022 Global Championship.",
                            "link": {
                                "url": "/news/esports/wild-rift-icons-global-championship-ruleset/"
                            },
                            "date": "2022-06-09T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt528d1ea33285680d/629fd524588ffb4d799fb65f/WRI-Rules-Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "bc4e2a53-85f7-57b4-b1bf-39b2cc9418e6",
                            "uid": "blt4e2cd4ed480a4b3e",
                            "title": "Wild Rift Patch Notes 3.2b",
                            "description": "Welcome to patch 3.2b, the first patch that the 2022 Wild Rift Icons Global Championship will be played on! Nautilus and Pyke are making their debut and we’re also tackling a few champions that have been dominating forces in their role. And revisiting the jungle to make some systematic adjustments after our recent changes.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-2b/"
                            },
                            "date": "2022-06-07T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltff327c5c2dccc55b/629a5041737ad40f5e665c84/WRPatchNotes3.2b_Header3.2b.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "496d53bf-4156-55b5-b8ca-3318592cc370",
                            "uid": "blt670306477204a63e",
                            "title": "Resistance Skins Preview",
                            "description": "It’s go time! Pick up and deploy Resistance Katarina and Resistance Miss Fortune to the Wild Rift frontline starting June 9 PT.",
                            "link": {
                                "url": "/news/game-updates/resistance-skins-preview/"
                            },
                            "date": "2022-06-07T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8f21ae18ccab9a32/629ac6d9dd28e20f45d62b41/ResistanceKatarinaResistance-Miss-Fortune_WebsiteRedirect.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "KATARINA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/katarina/"
                                    }
                                },
                                {
                                    "title": "MISS FORTUNE",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/miss-fortune/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/X5WR80V7vKg",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "aa5ae56a-72fb-5807-bcb5-06fcb4220763",
                            "uid": "blt4c462f1fe625c319",
                            "title": "Majestic Empress Morgana Skin Preview",
                            "description": "All hail the queen! Majestic Empress Morgana graces Wild Rift with her presence on June 6 UTC.",
                            "link": {
                                "url": "/news/game-updates/majestic-empress-morgana-skin-preview/"
                            },
                            "date": "2022-06-05T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8c5b7a1bc52e02d7/6299317736712c4150de087d/MajesticEmpressMorgana_WebsiteRedirect.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "MORGANA",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/morgana/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/zleUTD_OwFY",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "0f963176-89a4-5473-b379-2b38dcc06b66",
                            "uid": "bltd7f4287c66c06479",
                            "title": "Join the Journey to Icons with Wild Rift Reactions & Road To Icons",
                            "description": "Wild Rift Esports introduces video content to get you hyped for Icons 2022",
                            "link": {
                                "url": "/news/esports/join-the-journey-to-icons-with-wild-rift-reactions-road-to-icons/"
                            },
                            "date": "2022-06-03T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt7034dd0f467fdd46/62982819588ffb4d799f9b93/Wild_Reactions_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ccec99ce-fb99-5352-8da5-611a91ef71aa",
                            "uid": "blte650258e941290ed",
                            "title": "Random Recall Chest",
                            "description": "Add a random Recall to your collection with Prime Gaming loot! Connect your Wild Rift and Amazon Prime accounts to claim. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/random-recall-chest/"
                            },
                            "date": "2022-06-02T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltda4546f92c533bb2/6296bf2ed0f3ca0f53e08ff0/Art_Drop_15.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P15_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "5a7cbc87-e21e-5487-88b1-45481476acce",
                            "uid": "blt6e067ed4e99e1120",
                            "title": "Wild Rift Icons Twitch Rewards & Majestic Empress Morgana Skin",
                            "description": "Snag cosmetic rewards through Twitch and support teams with the exclusive Morgana skin!",
                            "link": {
                                "url": "/news/esports/wild-rift-icons-twitch-rewards-majestic-empress-morgana-skin/"
                            },
                            "date": "2022-06-02T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt09b452cf4b8810b8/6296bb0d0d3e0c2148fe3902/06022022_TwitchRewardsArticle_ARTICLEHEADER.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "713d2364-94d3-5a94-9d10-9252a0eddef1",
                            "uid": "bltdf5c7b5f52abeef7",
                            "title": "Celebrate Pride 2022",
                            "description": "Happy Pride! Celebrate and support LGBTQIA+ players everywhere for Pride 2022 this month in Wild Rift.",
                            "link": {
                                "url": "/news/announcements/celebrate-pride-2022/"
                            },
                            "date": "2022-06-01T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt7aa12b29c1b61efe/629019efbde8395bd01254a8/TF_Graves_Pride_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/5442488833299",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ff9b1eec-9bbe-5f97-8db5-1480ed150198",
                            "uid": "blt56b352a7346f6112",
                            "title": "Pulsefire Skins Preview",
                            "description": "Travel to the future with Pulsefire Shen, Lucian, and Pantheon, available June 2 UTC.",
                            "link": {
                                "url": "/news/game-updates/pulsefire-skins-preview/"
                            },
                            "date": "2022-05-30T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta03b62636c244d7a/62900aefbde8395bd0125484/CN081_PULSEFIRE_KV_FINAL-1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://youtube.com/shorts/4qX3MdUeIWg",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "26def25e-b683-5373-9a04-a0cd8b0fbbef",
                            "uid": "blt7636b53bc4b15466",
                            "title": "Duel with the Devil",
                            "description": "The devil’s in town and lookin’ for trouble. Irelia and Ashe? They’re happy to oblige. Get ready for the High Noon event!",
                            "link": {
                                "url": "/news/announcements/duel-with-the-devil/"
                            },
                            "date": "2022-05-26T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt263ce9bd3c5eb719/628d8b54561ae95d0c3ce1a1/WR_HighNoon_2022_CG-Thumbnails-1920x1080-TEXTLESS_LOGOLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "ASHE",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/ashe/"
                                    }
                                },
                                {
                                    "title": "Irelia",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/irelia/"
                                    }
                                },
                                {
                                    "title": "Thresh",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/thresh/"
                                    }
                                },
                                {
                                    "title": "High Noon",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/high-noon/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=mkz7LWdAY0I",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "e5cfc1a9-1155-5b28-bdfd-fc141e5dcf7b",
                            "uid": "bltfde5ee2d0ec631b0",
                            "title": "Wild Rift Patch Notes 3.2a",
                            "description": "This patch, we’re taking a gander at some champions and items who’ve been in need of some love, and making adjustments to a few of the offenders who’ve been dominating from the jungle. ARURF is making its debut along with the return of Elemental Rift! Welcome to Patch 3.2a!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-2a/"
                            },
                            "date": "2022-05-24T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3492c69da6ab34ae/628be5e6747a0167e764222c/3.2a-header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "027c2458-d5c0-5878-a6ad-49db29583e8b",
                            "uid": "blt13ffa36772020161",
                            "title": "Cosmic Skins Preview",
                            "description": "Protect the cosmos with Cosmic Blade Master Yi and Cosmic Enchantress Lulu, available May 26 UTC!",
                            "link": {
                                "url": "/news/game-updates/cosmic-skins-preview/"
                            },
                            "date": "2022-05-24T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3c9dd2adfa24754e/628bfcabd31030576a34af16/Cosmic_WebsiteBanner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.youtube.com/shorts/3925Qfq7Fdk",
                            "showTableOfContents": false
                        },
                        {
                            "id": "a89d89ff-9d16-5831-8541-c89bf76b9790",
                            "uid": "blt6cd01b956943167e",
                            "title": "Wild Rift Icons 2022 Primer",
                            "description": "Here’s all you need to know about the upcoming international Wild Rift tournament.",
                            "link": {
                                "url": "/news/esports/wild-rift-icons-2022-primer/"
                            },
                            "date": "2022-05-20T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd17308063e7c3a4e/6285537c747a0167e7641429/wri-primerarticle-header-v1.0.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "5be75fb4-dd6c-52b2-9468-3f96c478080d",
                            "uid": "blt7698d5b6888f7664",
                            "title": "Discover the Cosmic Event",
                            "description": "We're trying out some new styles of events this year. You've seen a few so far, but during our Time & Tide patch, South East Asia will experience something new during the Cosmic event.",
                            "link": {
                                "url": "/news/game-updates/discover-the-cosmic-event/"
                            },
                            "date": "2022-05-19T22:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1995161f1fb37a79/6282f2e7bdec0b542e4ef4d2/05-19-2022-Discover-CosmicMasterYi-banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "1a1d2007-5f51-5c44-aceb-ad3a9978f9fc",
                            "uid": "bltdf3bf0a8606f20fe",
                            "title": "May Random Emote Chest",
                            "description": "You can never have too many Emotes. Collect a new one to show off in-game with Prime Gaming rewards! For participating regions only.",
                            "link": {
                                "url": "/news/announcements/may-random-emote-chest/"
                            },
                            "date": "2022-05-19T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt5fc195919dfebf15/62843307dffcc8654954e3a7/Article-Art-Drop-14.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P14_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "fb584263-8bc5-5b3c-af3a-02a0cae2beae",
                            "uid": "blteb3ce00a859f4bdf",
                            "title": "High Noon Event Info",
                            "description": "It’s time to raise a little hell. Learn how to unlock rewards worthy of devils and angels alike during the High Noon event!",
                            "link": {
                                "url": "/news/announcements/high-noon-event-info/"
                            },
                            "date": "2022-05-19T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt502f3401bec7fc89/6282e818bde8395bd01231e4/HighNoon_WebsiteRedirect.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Events",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/events/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/4727398936595",
                            "showTableOfContents": false
                        },
                        {
                            "id": "2a611639-8185-5708-af43-4c1f290539da",
                            "uid": "bltd45ce7239af5c5ad",
                            "title": "/dev: New Runes in Patch 3.2",
                            "description": "Patch 3.2 brings new runes to shake up your loadouts!",
                            "link": {
                                "url": "/news/dev/dev-new-items-in-patch-3-2/"
                            },
                            "date": "2022-05-18T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta2e59d978589bf2f/627db89d29f29d7c033acf38/051822_WR_Runes_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Runes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/runes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "0c3c3d13-aa72-5762-bbfb-b9da4a3f8360",
                            "uid": "blt8d8e31d18509063d",
                            "title": "High Noon Skins Preview",
                            "description": "High Noon Ashe, Irelia, and Thresh are ready to ride! Add them to your posse today.",
                            "link": {
                                "url": "/news/game-updates/high-noon-skins-preview/"
                            },
                            "date": "2022-05-17T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltbe8ae4ef2178844d/627c7e0179aed9366938089b/051722_HighNoon_Skin_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/1HeXMq9e8Ec",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "d413ac01-21cf-5062-84de-f43a1888fada",
                            "uid": "blt94bbcd1d6d47a0b5",
                            "title": "Sandstorm Ekko Skins Preview",
                            "description": "Sandstorm Ekko braves the desert in search of ancient treasure. ☀️ Don’t let him slip away: find him in the shop now.",
                            "link": {
                                "url": "/news/game-updates/sandstorm-ekko-skins-preview/"
                            },
                            "date": "2022-05-16T19:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb0dc543819277ffb/627dc5e29dfd5f30d077095f/Website_Banner_Ekko_SandStorm_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/57OWpzcmlss",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "85069967-df24-5f53-b9f7-dbe02674992f",
                            "uid": "bltf87236d403f6883d",
                            "title": "/dev: Elemental Rift",
                            "description": "Elemental Rift thoughts and findings.",
                            "link": {
                                "url": "/news/dev/dev-elemental-rift/"
                            },
                            "date": "2022-05-16T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt30774cae147308e2/627c391f29f29d7c033ac9b1/Elemental-Rift.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Elemental Rift",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/elemental-rift/"
                                    }
                                },
                                {
                                    "title": "Dragon",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/dragon/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4dd77d6d-7e2f-5584-9e48-3e86219023c6",
                            "uid": "blt7a347971570cb09e",
                            "title": "Dream Raider Nasus Trailer",
                            "description": "Embrace your fears and watch them wither. Unlock Dream Raider Nasus when you complete the Season 7 Wild Pass!",
                            "link": {
                                "url": "/news/announcements/dream-raider-nasus-trailer/"
                            },
                            "date": "2022-05-13T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt67b8318387d7e150/627a0471bae21939d544632a/WR-YT-NasusSkinTrailer_banner_opt.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "NASUS",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/nasus/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=2n5xl2xNrws",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "05ff1a86-183a-51ad-9f86-50b04f6831dd",
                            "uid": "bltae8894b12ab93abf",
                            "title": "Ekko’s Arrival",
                            "description": "Better think fast! Jump into the Ekko’s Arrival event to earn rewards, including the new champion himself.",
                            "link": {
                                "url": "/news/announcements/ekko-s-arrival/"
                            },
                            "date": "2022-05-12T00:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt66235ad99152e067/6275c20329f29d7c033abcd8/Ekkos_Arrival_KV_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Ekko",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/ekko/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/4726731555091",
                            "showTableOfContents": false
                        },
                        {
                            "id": "348e65fd-92fc-5bf4-83d9-2fa52fd94316",
                            "uid": "bltb69a320830c678f6",
                            "title": "Ekko Champion Overview",
                            "description": "Time to make the future. Break the rules with Ekko, the Boy Who Shattered Time, starting today in Wild Rift.",
                            "link": {
                                "url": "/news/game-updates/ekko-champion-overview/"
                            },
                            "date": "2022-05-11T23:03:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt405e2df805fb4247/6279b25a52bd3634ca6ff3ec/WR-YT-Thumb_textless_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Ekko",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/ekko/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=YiYAGR06U2I",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "7d6efec2-5f82-5e7c-90dd-a8a8bb4f2103",
                            "uid": "blt44f8553e2155e711",
                            "title": "Wild Rift Patch Notes 3.2",
                            "description": "Don’t blink, Patch 3.2 is here! We’ve been tinkering in our workshop and are bringing a whole host of updates to the Rift! Ekko is making his debut, Elemental Dragons are returning, eight new runes, the introduction of remake, balance changes, and so much more!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-2/"
                            },
                            "date": "2022-05-11T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltff98548ca3210031/627a07b59dfd5f30d076fb44/WRPatch3.2Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "7c5ed417-c661-5ef0-bf3f-fe4ab3eb9b2a",
                            "uid": "blt68eb10d707e7f3d0",
                            "title": "Ekko's Arrival Trailer",
                            "description": "No one thinks faster. Team up with the boy genius himself in Ekko’s Arrival.",
                            "link": {
                                "url": "/news/announcements/ekko-s-arrival-trailer/"
                            },
                            "date": "2022-05-10T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd845952afa5c7381/6271f772bae21939d5445075/051022_WR_Ekko_CG_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Ekko",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/ekko/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=LM2C9vU7dvg",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "156bd3a2-6d8a-5bd4-abf9-aa1ff9afac63",
                            "uid": "bltb69a80d7efae1673",
                            "title": "Dream Raider Nasus Skins Preview",
                            "description": "A new nightmare is looming. Unlock Dream Raider Nasus when you complete the latest Wild Pass!",
                            "link": {
                                "url": "/news/game-updates/dream-raider-nasus-skins-preview/"
                            },
                            "date": "2022-05-10T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3bc883a097cf096b/62757efc8c90c334d0d417f2/DreamRaiderNasus_WebsiteRedirect.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "NASUS",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/nasus/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/xWsPV3nWQ3Q",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4d0a6727-8a08-5416-8396-b04b58cc07ff",
                            "uid": "blt004d995dcad349a1",
                            "title": "New Content in Patch 3.2",
                            "description": "Welcome mateys, to the Patch 3.2 Preview Refresh! If you missed it, we’ve got you covered with a recap of all the big announcements we’re bringing ashore to the Rift during our Time & Tide update!",
                            "link": {
                                "url": "/news/announcements/new-content-in-patch-3-2/"
                            },
                            "date": "2022-05-09T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltad06b7b146ed8c43/627567e452bd3634ca6fee75/Naut-Splash-.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Preview",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/patch-preview/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "45a6e927-ee51-5021-8b3f-9634cf605f08",
                            "uid": "blta9282c6cf8c19c57",
                            "title": "2022 Wild Rift Icons Global Championship to be held in Singapore!",
                            "description": "Get ready to unleash the wild this summer at Suntec Singapore June 14-July 9.",
                            "link": {
                                "url": "/news/esports/2022-wild-rift-icons-global-championship-to-be-held-in-singapore/"
                            },
                            "date": "2022-05-08T12:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte90c121cf62bc3b1/6275ab3e941a2939d3d0148b/NewIconsArticleBanner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "bf68e5b4-a2d1-5066-b69b-b8597e2d091d",
                            "uid": "bltfbf00dbbc09b5343",
                            "title": "May Random Champion Pose Chest",
                            "description": "Switch up your victory pose! Claim in-game rewards when you connect your Wild Rift and Amazon Prime accounts. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/may-random-champion-pose-chest/"
                            },
                            "date": "2022-05-05T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte267909b9eb9ac6c/626adc3f79aed9366937e19e/011321_WR-News-Website_Article_Banner-PrimeGaming-DROP_5.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P13_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "d0a4066e-60b3-5afd-b0d2-8bd89001831c",
                            "uid": "blt6ef82b995bdffc95",
                            "title": "Patch 3.2 Preview",
                            "description": "Welcome to Patch 3.2: Time & Tide, arriving on May 12th UTC! Set sail with Maddy from the Wild Rift team and take a peek into the future for our upcoming gameplay updates, champions, and events.",
                            "link": {
                                "url": "/news/dev/patch-3-2-preview/"
                            },
                            "date": "2022-05-05T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf56f7cbd05bdd89f/626ce50c52bd3634ca6fdc1e/050422_WR_DevDiary_Patch_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=_rkjqAoOYNU",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ae793379-d65c-5f28-ba3c-517145e323a6",
                            "uid": "blta09d68ff6fa7ac4a",
                            "title": "/dev: Dreamscapes and Psychic Detective Senna",
                            "description": "Traverse reality and dreams with the latest Wild Rift-debut skin line, Dreamscapes, and discover how Psychic Detective Senna came to life.",
                            "link": {
                                "url": "/news/dev/dev-dreamscapes-and-psychic-detective-senna/"
                            },
                            "date": "2022-04-30T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt6716ba9a8d946a5e/62682645b442146752e03465/SennaArticleHeader.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Senna",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/senna/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "16a575a6-73f9-5f55-9952-325298cf4ab9",
                            "uid": "blt74b586137ecd0813",
                            "title": "Elemental Rift Update",
                            "description": "During Patch 3.1b Elemental Rift will be returning in a limited game mode with a few adjustments from our previous version.",
                            "link": {
                                "url": "/news/announcements/elemental-rift-update/"
                            },
                            "date": "2022-04-27T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltcd7b9780d2f6f0b1/62672de9b442146752e0311d/WRPatchNotes_ER.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "e87610bd-489f-5470-9743-5971c78988f1",
                            "uid": "blt4206b92ca5f977bc",
                            "title": "Marauder Skins Preview",
                            "description": "Polish up your armor! Marauder Graves and Brand are burning their way into the Rift on April 28, 00:01 UTC.",
                            "link": {
                                "url": "/news/game-updates/marauder-skins-preview/"
                            },
                            "date": "2022-04-26T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt7a479268114c1b5c/6261d0c41574214ead420af2/WR-News-Website_Article_Banner-Marauder.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "GRAVES",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/graves/"
                                    }
                                },
                                {
                                    "title": "Brand",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/brand/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/shorts/0WSiwX-sSFM",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "8563c7b3-4e29-516e-be2f-d5a504d56819",
                            "uid": "blt932af7ef7237f2fc",
                            "title": "April Random Bauble Chest",
                            "description": "Collect a random Bauble from Prime Gaming! Link your Wild Rift and Amazon Prime accounts to claim rewards every 2 weeks. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/april-random-bauble-chest/"
                            },
                            "date": "2022-04-21T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4250c9dd17206468/625715962777714c51b3048a/Article_Banner_primeDrop12.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P12_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "93d8263d-2ecb-53f9-ae88-26f05f69c270",
                            "uid": "blt99d63b973d66d899",
                            "title": "Wild Rift Patch Notes 3.1b",
                            "description": "Patch 3.1b has arrived and brings with it a whole host of champion changes, item balancing, the return of Elemental Rift, and an adjustment to Scuttle Crab. We’re also setting sail and going on another adventure with our favorite poro friends, this time to Bligewater!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-1b/"
                            },
                            "date": "2022-04-19T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt17cc1d0986f00f33/62587db9c9aa404b76ddd08d/WR3.1bHeader.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "d45c4156-8c5d-51e2-8961-5f543b4934d9",
                            "uid": "blt961f1cc19c320510",
                            "title": "Pajama Guardian Skins Preview",
                            "description": "With Pajama Guardian Ezreal and Lux on your side, you’re sure to win your next pillow fight! Get comfy and find them in the shop on April 14, 00:01 UTC.",
                            "link": {
                                "url": "/news/announcements/pajama-guardian-skins-preview/"
                            },
                            "date": "2022-04-11T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4ddafa27548b67e5/6250841587d5917f654ac222/WR-News-Website_Article_Banner-Pajama_Guardian.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "EZREAL",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/ezreal/"
                                    }
                                },
                                {
                                    "title": "LUX",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/lux/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.youtube.com/shorts/5m7kJ5vk8dA",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ed3a551d-38db-5e45-89e3-66c43341bb9e",
                            "uid": "bltff88dab3fab82c46",
                            "title": "Wild Rift Patch Notes 3.1a",
                            "description": "A certain bladesman has been terrorizing the Rift, so we’re making some balance changes to him and others. We also have adjustments to systems, cozy new skins, and there's still a few days left of Elemental Rift! Welcome to Patch 3.1a!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-1a/"
                            },
                            "date": "2022-04-08T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt29e365c73ce3b60c/62473f6421fd967b5ff21eba/WRPatch3.1aNotes_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "e7fd4799-e3b9-5ac5-ad56-c9aff0867a86",
                            "uid": "blt09dabdbb8c7f8e8a",
                            "title": "April Random Recall Chest",
                            "description": "Bring home something shiny. Claim a Random Recall Chest when you link your Wild Rift and Amazon Prime accounts! For participating regions only.",
                            "link": {
                                "url": "/news/announcements/april-random-recall-chest/"
                            },
                            "date": "2022-04-07T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt09e506d8f4178903/6201ba0c9d6c325fc227efda/WR-News-Website_Article_Banner-PrimeGaming-DROP_7.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P11_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "32f8fb66-0cdc-513c-ab4b-7832ef3d3a78",
                            "uid": "bltfc77b74f1f8d0126",
                            "title": "Introducing the First Global Esports Event Photography Gallery",
                            "description": "Riot Games and Getty Images expands partnership.",
                            "link": {
                                "url": "/news/esports/introducing-the-first-global-esports-photography-gallery/"
                            },
                            "date": "2022-04-04T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3e4b84b54f0abaaf/6244c7078d970d0e9927c3f4/04_04_22_Getty_Partner_Banner_v2.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "bad3ccd9-00d7-5fec-ada3-bee73ceca916",
                            "uid": "blt89dc31728c8bcb5e",
                            "title": "Season of Silly Skins",
                            "description": "For only the most serious, most hardcore players out there. Catch Renektoy, Pretty Kitty Rengar, and Furyhorn Cosplay Veigar starting March 30th UTC.",
                            "link": {
                                "url": "/news/game-updates/season-of-silly-skins/"
                            },
                            "date": "2022-03-29T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltc496718bd70fb0a0/623e0b31d0a6e54cb5f133e7/WR-News-Website_Article_Banner-Season_of_Silly.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=RZaU9HE4pMo",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "c1cbfc99-d4e2-5819-a507-bdf17e70e27b",
                            "uid": "blte0e3aca9c837d3d6",
                            "title": "Psychic Detective Senna Trailer",
                            "description": "Dive into your wildest dreams (and nightmares) with Psychic Detective Senna, available at level 50 of Wild Pass Season 6.",
                            "link": {
                                "url": "/news/announcements/psychic-detective-senna-trailer/"
                            },
                            "date": "2022-03-29T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd0656c3c4799991a/623e7105d0a6e54cb5f13543/3_28_22_WR_Psychic_Detective_Senna_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Senna",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/senna/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.youtube.com/watch?v=7FH9lOh-ytA",
                            "showTableOfContents": false
                        },
                        {
                            "id": "bd749c8b-75af-5f4f-9043-4c7fd8e35feb",
                            "uid": "bltd6e0583c919f6c28",
                            "title": "/dev: New Items in Patch 3.1",
                            "description": "Patch 3.1 brings new fighter itemization options!",
                            "link": {
                                "url": "/news/dev/dev-new-items-in-patch-3-1/"
                            },
                            "date": "2022-03-28T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt5034c0d6014ca32f/62392382f243f804238b6f43/3_28_22_WRNewsWebsite_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "7c5f93a3-849e-51ae-8bc9-d900fd59263c",
                            "uid": "blt27b74b64fb71b029",
                            "title": "/dev: Karma Rework",
                            "description": "In the pursuit of harmony, control, and donuts - here's the story of how Karma, the Enlightened One, blessed the Rift.",
                            "link": {
                                "url": "/news/dev/dev-karma-rework/"
                            },
                            "date": "2022-03-25T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltbe45bb36210c5e38/623a31b5159fc76504c17527/03252022_dev_Karma_Rework_banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Karma",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/karma/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "bc3a438e-ea62-51eb-9a6a-88f85db53ef1",
                            "uid": "blt4aeaa860ea925a9f",
                            "title": "March Random Emote Chest",
                            "description": "In a mood? Express yourself with a Random Emote Chest from Prime Gaming! For participating regions only.",
                            "link": {
                                "url": "/news/community/march-random-emote-chest/"
                            },
                            "date": "2022-03-24T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt9054d5820d8c8112/622bd254638e130434842fee/Article-Art-Drop-10-optimized.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Community",
                                    "url": {
                                        "url": "/news/community/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P10_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "774bf20e-c7bf-5015-a8d0-95b82aebd698",
                            "uid": "blt814842d96ac9c71f",
                            "title": "Wild Rift Esports Adds Coca-Cola as Worldwide Founding Partner",
                            "description": "Riot Games and Coca-Cola® today jointly announced a groundbreaking, multi-year partnership that is the first of its kind in mobile gaming and esports.",
                            "link": {
                                "url": "/news/esports/wild-rift-esports-adds-coca-cola-as-worldwide-founding-partner/"
                            },
                            "date": "2022-03-24T09:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt96c15954370f71d7/623a7506483e2c64fe287a92/[Banner_image]_CocaCola_x_WRE_Partner_Lockup_Alt_x_copy.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "eedcff3c-ea21-5994-b14e-7154ed5dbc16",
                            "uid": "blt0c08ccd7e3d96b6e",
                            "title": "Karma Champion Overview",
                            "description": "The truest hearts never falter. Prove your wisdom with Karma, the Enlightened One, inspiring all in Wild Rift today.",
                            "link": {
                                "url": "/news/game-updates/karma-champion-overview/"
                            },
                            "date": "2022-03-24T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd27fabced0d2ef49/6226af03b17dc223f2f29faf/WR_YT_Thumb_CLEAN_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Karma",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/karma/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=fM_WUHyLJ-k",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ed0b5bfd-8e2e-5835-95f6-861796c3bf68",
                            "uid": "blt353215d90f148369",
                            "title": "Shen Champion Overview",
                            "description": "Guide from shadow, fight with honor. Stand united with Shen, the Eye of Twilight, teleporting onto the rift today.",
                            "link": {
                                "url": "/news/game-updates/shen-champion-overview/"
                            },
                            "date": "2022-03-24T00:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8673a1505af5047e/62292075f603d566e7990003/032322_WR_Shen_ChampOverview_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Shen",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/shen/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=5e3UUHq8xsI",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b6cc2e6f-cf18-557c-9af2-0595d8dc2c99",
                            "uid": "blt3bb44ffa9fbe3d83",
                            "title": "Protectors of Ionia Trailer",
                            "description": "Trust your spirit and strike with conviction. Karma and Shen are bringing balance to the Rift during the Protectors of Ionia event!",
                            "link": {
                                "url": "/news/announcements/protectors-of-ionia-trailer/"
                            },
                            "date": "2022-03-24T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8887ce55d7c15b54/62295eaaddcaa8030b8ba482/WR_Karma_Shen-Champion_Trailer-Thumbnails-1920x1080-TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Shen",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/shen/"
                                    }
                                },
                                {
                                    "title": "Karma",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/karma/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=I7k8R7z8sIg",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "d5949866-6a0e-5a37-bb6e-9865a017ab1c",
                            "uid": "blt5777d58f138bf3da",
                            "title": "Protectors of Ionia",
                            "description": "Enlightenment awaits in the Protectors of Ionia event. Preserve equilibrium and pick up rewards with Karma and Shen.",
                            "link": {
                                "url": "/news/announcements/protectors-of-ionia/"
                            },
                            "date": "2022-03-23T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8fdec28c801a0491/6238f62ef243f804238b6ef4/WR-News-Website_Article_Banner-Protectors_Of_Ionia.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/4414715050387",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b14117a3-148c-566c-bd7f-c5b9c1c4bab4",
                            "uid": "blt7501f48443c94f8a",
                            "title": "Wild Rift Patch Notes 3.1",
                            "description": "Donuts, Dragons, and Divine new items. Patch 3.1 is finally here, and it’s a big one! Karma, Shen, Elemental Rift game mode, a new Wild Pass, new Ranked Season, new items, and a whole host of balance changes. Welcome to 3.1!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-1/"
                            },
                            "date": "2022-03-23T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3e9a2bca79f68bd0/623a5b2ae6c8cf4de6f6dab6/WRPatchNotes3.1_Header_(1).jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "70a4c0bc-c990-5b9b-98ab-87e16a56b3c1",
                            "uid": "blt284d1b5ddc4a01e3",
                            "title": "New Content in Patch 3.1",
                            "description": "Patch 3.1 brings all sorts of exciting new features to Wild Rift. Refresh or catch up on all the big announcements from our Patch 3.1 Preview in this recap.",
                            "link": {
                                "url": "/news/announcements/new-content-in-patch-3-1/"
                            },
                            "date": "2022-03-23T03:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb53108f46c3b7d66/6226b938225c6a0d139d8d41/WRPatchPreview_3.1_Shen.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "09320d71-29c9-551e-a53b-132ed67da0c4",
                            "uid": "blt7f6b4570a08e3584",
                            "title": "Glorious Crimson Evelynn Skins Preview",
                            "description": "It’s time to break some hearts. Claw your way to the top with Glorious Crimson Evelynn, hunting her newest prey in Ranked Season 5.",
                            "link": {
                                "url": "/news/game-updates/glorious-crimson-evelynn-skins-preview/"
                            },
                            "date": "2022-03-22T19:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt5866f06d7f640a5e/6226b390f603d566e798f901/WR_GloriousCrimsonEvelynn-_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "EVELYNN",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/evelynn/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=TOY7u_0SC08",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "8812ba84-11ff-5b38-8607-74ae1f27299c",
                            "uid": "blte6c1d5ebbb860977",
                            "title": "Blood Moon Shen and Warden Karma Skins Preview",
                            "description": "Test your spirit’s power with Blood Moon Shen and Warden Karma, available March 24 UTC.",
                            "link": {
                                "url": "/news/game-updates/blood-moon-shen-and-warden-karma-skins-preview/"
                            },
                            "date": "2022-03-22T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte212ffb1836a76fb/6227a90ca7fee30be331ef52/032222_WR_BloodMoonShen_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Shen",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/shen/"
                                    }
                                },
                                {
                                    "title": "Karma",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/karma/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=96fl_KvlJz8",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "844f0caf-4b58-5d5a-a844-c85c4cf1d2c6",
                            "uid": "blt7cf38f76377cfcf6",
                            "title": "Psychic Detective Senna Skins Preview",
                            "description": "Solve strange new mysteries with Psychic Detective Senna! Unlock her at the end of Wild Pass Season 6, available March 24 UTC.",
                            "link": {
                                "url": "/news/game-updates/psychic-detective-senna-skins-preview/"
                            },
                            "date": "2022-03-21T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt40d2946fdc5d4d33/622685f52f117523f14ada7c/WR_PsychicDetectiveSenna_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Senna",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/senna/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=8uMhLBXoolY",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "dfdb7eb4-5565-55ae-9b3f-79eee98e433c",
                            "uid": "bltaa0e7a2a6d0dcc60",
                            "title": "Ranked Rewards Update",
                            "description": "Players impacted by the recent Ranked Rewards display issue will receive Ranked Coins and more as compensation. We’re looking to restore the Ranked tab for the end of the season as soon as possible.",
                            "link": {
                                "url": "/news/game-updates/ranked-rewards-update/"
                            },
                            "date": "2022-03-16T19:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt92cf2b90467c340f/6231af5611689f1613d4e03c/RankedRewards.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "2de5ec1e-a94b-50aa-a0db-1fa21b0d531c",
                            "uid": "blt576872dc54fef3ee",
                            "title": "Patch 3.1 Preview",
                            "description": "Like a leaf on the gentle Ionian breeze, Patch 3.1 lands on March 24th UTC! Join Alan from the Wild Rift dev team for details on the new gameplay updates, champions, and events we’re looking forward to.",
                            "link": {
                                "url": "/news/dev/patch-3-1-preview/"
                            },
                            "date": "2022-03-11T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltbd6f3f4e44374b34/6227a35beda9a1043584a437/031522_WR_3_1_Preview_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=R6amXPHo1DE",
                            "externalLink": "https://www.youtube.com/watch?v=R6amXPHo1DE",
                            "showTableOfContents": false
                        },
                        {
                            "id": "02c88022-93e7-5c84-9109-efd0872438b2",
                            "uid": "blta29525ec2c25f19b",
                            "title": "Random Skin Chest",
                            "description": "Hit the Rift in style! Claim a Random Skin Chest when you link your Wild Rift and Amazon Prime accounts. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/random-skin-chest/"
                            },
                            "date": "2022-03-10T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf0fb9062c23cfdef/621feef847e4d72e3e67fb12/Article-Art_Optimized.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P9_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "c6889ca3-8a8b-5106-ba10-0b829a7ce179",
                            "uid": "blta595067c88f6a222",
                            "title": "Riot is Donating Battle Pass Sales to Humanitarian Relief in Eastern Europe",
                            "description": "We’re also contributing $1M to help communities impacted by the war.",
                            "link": {
                                "url": "/news/announcements/riot-is-donating-battle-pass-sales-to-humanitarian-relief-in-eastern-europe/"
                            },
                            "date": "2022-03-05T09:15:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt9ceb0ea44a3329f9/6222bc0289fbff50b638f2c4/humanitarian-banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.riotgames.com/en/news/riot-is-donating-battle-pass-sales-to-humanitarian-relief-in-eastern-europe",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9ee4c7a3-2fb0-5c63-bec0-5ceba0b9c803",
                            "uid": "blt007a5966f906eb7d",
                            "title": "Wild Rift Patch Notes 3.0b",
                            "description": "Welcome to the last balance patch of the 3.0 cycle! We’re throwing a fish to our latest cuddly addition, Yuumi, who's been struggling since her release, and nerfing and buffing runes across the board. We’ll be back later this month when 3.1 releases!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-0b/"
                            },
                            "date": "2022-03-03T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt27956461f6e0f85b/621964bdc8b3694a33e1cd3d/030122_WRPatchNotes_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "d29decc0-e99e-5912-80b1-572c5e6a6f9f",
                            "uid": "blt19daf159a7fce655",
                            "title": "February Random Bauble Chest",
                            "description": "Claim a new Bauble when you connect your Wild Rift and Amazon Prime accounts! Visit the loot page every 2 weeks for a new reward. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/february-random-bauble-chest/"
                            },
                            "date": "2022-02-24T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltea30cfc6e8dc8dab/62103906b6471b5f9d4a4512/WR_PrimeGamin_Random_Bauble_WebArticle.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P8_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b2c5681e-d361-5fd0-a8e0-ad0d5a108dd1",
                            "uid": "blt88ca4b6919d71439",
                            "title": "Changes coming to high-skill Ranked play",
                            "description": "We’re rolling out some short-term fixes to address your concerns around high-skill ranked play.",
                            "link": {
                                "url": "/news/game-updates/changes-coming-to-high-skill-ranked-play/"
                            },
                            "date": "2022-02-24T04:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt62eee161df8507ef/6210218f2508455f9f09455b/WRMM_Blitz.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "8b0ace2b-748e-526d-aff9-355697e669b7",
                            "uid": "bltafc7fd9fb0e73306",
                            "title": "Wild Rift Patch Notes 3.0a",
                            "description": "Sett’s showstopping debut onto the Rift inspired us to turn up the heat, with several champion nerfs, a few buffs, and two fiery new skins.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-0a/"
                            },
                            "date": "2022-02-16T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3df2f87fbf52eb2a/62071ebb2e7e9822777820d4/21522_WRPatchNotes3.0a_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "bdc8ec14-7b22-5243-9cfb-7702d8900be4",
                            "uid": "blt229775e1fc0df976",
                            "title": "Yuumi Champion Overview",
                            "description": "You and me, we got this! Dish out shields, heals, and cuddles with Yuumi, the Magical Cat—prowling into Wild Rift today.",
                            "link": {
                                "url": "/news/game-updates/yuumi-champion-overview/"
                            },
                            "date": "2022-02-12T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltedc13122d166c32a/6202db72d96fa00bff5ef2ae/WR_YT_Thumb_1920x1080_Textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "YUUMI",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/yuumi/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=-a5R9NxZlVk",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "a97f6520-92ea-5ba3-bc43-52a6eaac471e",
                            "uid": "bltfa84664791a84406",
                            "title": "Yuumi's Adventure",
                            "description": "There’s no heart that this magical cat can’t win! Help Yuumi make new friends in a strange, lovely land to earn rewards.",
                            "link": {
                                "url": "/news/announcements/yuumi-s-adventure/"
                            },
                            "date": "2022-02-12T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt81c27c00c07437b7/62018957b7731b0ad77173f4/WR_YuumisAdventure_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "YUUMI",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/yuumi/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/4412929680531",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ba0ce528-096b-5e23-8b0f-c07aa91dfcf3",
                            "uid": "blt2a1aa50f37546554",
                            "title": "February Random Recall Chest",
                            "description": "Get back to base-ics with a new Recall! Link your Wild Rift and Amazon Prime accounts to claim in-game rewards. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/february-random-recall-chest/"
                            },
                            "date": "2022-02-10T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt09e506d8f4178903/6201ba0c9d6c325fc227efda/WR-News-Website_Article_Banner-PrimeGaming-DROP_7.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P7_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "5cf4d15d-cbb0-54ff-b453-6c0b2fbdf347",
                            "uid": "blt07b49cdc2e64b29b",
                            "title": "GLOBAL COMPETITIVE POLICIES & RULES FOR WILD RIFT ESPORTS",
                            "description": "Check out the full global competitive policies and rules for Wild Rift Esports",
                            "link": {
                                "url": "/news/esports/global-competitive-policies-rules-for-wild-rift-esports/"
                            },
                            "date": "2022-02-10T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta388fb9715e38f0f/6202bdbd214fe9266428c52d/WRECompetitionPolicies_optimized.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Competitive",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/competitive/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "03a111ac-6749-5f92-b3c0-f393a9fb47e3",
                            "uid": "blt33f662ae1cf36f25",
                            "title": "Ending support for low-spec iPhones and iPads",
                            "description": "Starting in Patch 3.1, the iPhone 6, iPhone 6 Plus, iPad Air (1st gen), iPad Mini 2 and iPad Mini 3 will no longer be supported in Wild Rift.",
                            "link": {
                                "url": "/news/announcements/ending-support-for-low-spec-iphones-and-ipads/"
                            },
                            "date": "2022-01-29T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta29ebc2036cddf76/61f1bd6f284f0d35bcbb44f7/LOLWR_iPhoneSupport_Optimized.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "805d6864-2097-5f7e-878d-e7ad6aa856f9",
                            "uid": "blt14bd9bc965e35980",
                            "title": "January Random Emote Chest",
                            "description": "How ya feelin'? Claim a Random Emote Chest by linking your Wild Rift and Amazon Prime accounts. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/january-random-emote-chest/"
                            },
                            "date": "2022-01-27T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta27ec609ec40b755/61ef640408a50571514948dc/WR-News-Website_Article_Banner-PrimeGaming-DROP_6.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P6_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "678e33c8-9c4a-54f2-9770-0cd55996971b",
                            "uid": "blta0f94037e761f19a",
                            "title": "Sett Champion Overview",
                            "description": "What’d you say about his momma? 💢 Bring the ruckus with Sett, the Boss, now throwing down in Wild Rift.",
                            "link": {
                                "url": "/news/game-updates/sett-champion-overview/"
                            },
                            "date": "2022-01-26T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltc31f60cafeec9c1e/61ef115d904d9713809833a3/WR_Sett_ChampOverview_2021-1920X1080-TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "SETT",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/sett/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=d-LMoTEXT8I",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "5b71e8e4-08c9-5f87-8c71-ceec012db745",
                            "uid": "blt70af40a2e337e436",
                            "title": "Almost Home",
                            "description": "Five unlikely friends band together to discover that home isn’t just a place—it’s a feeling. Watch the Lunar Revel cinematic trailer now!",
                            "link": {
                                "url": "/news/announcements/almost-home/"
                            },
                            "date": "2022-01-26T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb7adc6ef535bc999/61ef15b9fb66f771578d6da8/012522_WRYT_FirecrackerCG_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=pCjFpGgFZlc",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "3cb38260-c0dd-527d-9797-d09877f15d06",
                            "uid": "blt6badd93600a8569a",
                            "title": "Share Your Lunar Revel Mood",
                            "description": "Feeling festive? Celebrate the Lunar New Year with tons of stickers to share!",
                            "link": {
                                "url": "/news/announcements/share-your-lunar-revel-mood/"
                            },
                            "date": "2022-01-25T22:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltae8a0f7fdeb3b1c7/61eb491cf7892a49a7b0b3e2/LUNY_StickersAvailableBanner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "83c576c2-9db9-57d1-89b7-5a77db8bc5e4",
                            "uid": "blt60490bd8fd922a53",
                            "title": "Lunar Banquet - Lunar Revel 2022 Event Trailer",
                            "description": "Cook up something special for the Lunar New Year! Get the party started to earn rewards in the Lunar Banquet event.",
                            "link": {
                                "url": "/news/announcements/lunar-banquet-lunar-revel-2022-event-trailer/"
                            },
                            "date": "2022-01-25T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf00815b210f2d1fb/61eb50a4ecbd3f1a43faad9f/LUNY_EventTrailer_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=syfpuPMWzTc",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "7ce50613-eb20-5480-bc6b-7804f526c2da",
                            "uid": "blt18d4fb9b0e84878f",
                            "title": "Get Ready for the Lunar Banquet",
                            "description": "Hope you’re hungry! Fill your table with a delectable feast, earn festive rewards, and open lucky red envelopes during the Lunar Banquet event!",
                            "link": {
                                "url": "/news/announcements/get-ready-for-the-lunar-banquet/"
                            },
                            "date": "2022-01-25T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3f5081ae4f454269/61eb39b47ac77518d6ec2217/WR_LunarBanquet_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/4412722950291",
                            "showTableOfContents": false
                        },
                        {
                            "id": "956fefb0-55e6-59ca-bfd4-b8a6e5e6b129",
                            "uid": "blt1bb1891ac7b75f31",
                            "title": "Name That Champion 2",
                            "description": "Decisions, decisions… It's time for another round of Name That Champion! Put your knowledge to the test and earn rewards.",
                            "link": {
                                "url": "/news/announcements/name-that-champion-2/"
                            },
                            "date": "2022-01-20T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3a5070a0cb3a0293/61e0c9feec98266420c5957e/Article-Art.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500007805061",
                            "showTableOfContents": false
                        },
                        {
                            "id": "19ffeacd-b01e-5fc4-a1fc-bfefcb9a09f4",
                            "uid": "blt886b1698acfd8e9a",
                            "title": "Multi-Factor Authentication Has Arrived",
                            "description": "Protect your account and information with our new MFA system.",
                            "link": {
                                "url": "/news/game-updates/multi-factor-authentication-has-arrived/"
                            },
                            "date": "2022-01-19T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta546cab9b27d93bc/61e71341c5ff2e754efb09a5/01192022_MFA_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.riotgames.com/en/news/multi-factor-authentication-has-arrived",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b399dbdf-15c4-521c-93ef-166ead611e0d",
                            "uid": "bltc6c3848ada0b9679",
                            "title": "Wild Rift Patch Notes 3.0",
                            "description": "Welcome to Patch 3.0, the first patch of the year! A boss brawler is stepping up to the fight and Firecrackers are popping on the Rift! We have a test version of voice returning, balance changes for some champions and items, and a new Wild Pass has just flown in. This is Patch 3.0!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-3-0/"
                            },
                            "date": "2022-01-18T22:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3b5bf0bc3256b8c7/61df4da814ef402247ceb708/WR_patch-notes_Article_Banner_SETT3.0.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "24797373-8dca-5f04-b553-f1972163b04a",
                            "uid": "blt72a87906848e4a00",
                            "title": "Voice chat is back for testing",
                            "description": "In Patch 3.0, the ability to voice chat with your premade team returns, starting with a test in the Americas, with other regions to follow. Read on for when you can expect to play, and why restoring voice eluded us for so long.",
                            "link": {
                                "url": "/news/game-updates/voice-chat-is-back-for-testing/"
                            },
                            "date": "2022-01-15T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb31905a5ab24a213/61de12fddea73a236fc574fa/LOLWR_VoiceChat_header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Voice Chat",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/voice-chat/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9ea15b37-3747-52fb-8654-b79b040a6547",
                            "uid": "blt67ecae61772940db",
                            "title": "Random Champion Pose Chest",
                            "description": "Strike a new pose! Link your Wild Rift and Amazon Prime accounts to grab a Random Champion Pose Chest this week.",
                            "link": {
                                "url": "/news/community/random-champion-pose-chest/"
                            },
                            "date": "2022-01-13T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt781838137c187af7/61d90b1fbf9cb8387cc1da53/011321_WR-News-Website_Article_Banner-PrimeGaming-DROP_5.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Community",
                                    "url": {
                                        "url": "/news/community/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P5_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "24526dc0-65f2-59e0-9519-2475e48dbb50",
                            "uid": "bltcabf3a87d90bfa48",
                            "title": "Wild Rift Esports Kicks Off Its First Official Season",
                            "description": "Wild Rift Esports kicks off season one in 2022!",
                            "link": {
                                "url": "/news/esports/wild-rift-esports-kicks-off-its-first-official-season/"
                            },
                            "date": "2022-01-07T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta5f1d1638e5ea049/61d7532a75ddd613c0fa2d18/Article_Header_WRE.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "8021251a-dd3e-550f-9133-860fe4cd20ae",
                            "uid": "blt7cbf924ab3b66438",
                            "title": "Wild Rift in Season 2022",
                            "description": "Uncover the newest Wild Rift updates, skins, and events for Season 2022.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-in-season-2022/"
                            },
                            "date": "2022-01-07T15:40:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8c335e3d049a830b/61d3d30185b59c201581cd12/SN2022_WildRift_Thumbnail_GEN-optimized.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=EcI9_ULMhpU",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "3e8f4754-4a1f-5829-afe4-a85cfcd1b5a0",
                            "uid": "bltbafaeeba1f79feb0",
                            "title": "Dunkmaster Darius Trailer",
                            "description": "All aboard the dunk train! Dunkmaster Darius is ready to tear up the court and the Rift. Check out the trailer now.",
                            "link": {
                                "url": "/news/announcements/dunkmaster-darius-trailer/"
                            },
                            "date": "2022-01-06T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt019a007a564bd3c6/61d66f2f14048326a8098a10/WR_DunkmasterDarius_Thumb_Textless_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "DARIUS",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/darius/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=LM-QPHNsyCU",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "906d51fb-88d1-5569-a3fd-cff083b28bfd",
                            "uid": "blt08a4b9e44732eb5e",
                            "title": "PROJECT Boost",
                            "description": "New augmentation activated! Earn extra Blue Motes for playing games during the PROJECT Boost event.",
                            "link": {
                                "url": "/news/announcements/project-boost/"
                            },
                            "date": "2022-01-05T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte59a2c0b90cc52fa/61b8409791961639b0f4bba7/WR-News-Website_Article_Banner-PROJECT_BOOST.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Events",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/events/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/4408556944531",
                            "showTableOfContents": false
                        },
                        {
                            "id": "eabbaf01-dc1d-561e-ac7a-5f42de51e28a",
                            "uid": "blt2985a572b9951209",
                            "title": "Prime Gaming: Random Bauble Chest",
                            "description": "Add some pep to your post-teamfight step! Link your Wild Rift and Amazon accounts to unlock a random Bauble with Prime. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/prime-gaming-random-bauble-chest/"
                            },
                            "date": "2021-12-30T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb82df24b67d1256a/61b401db36ee4913aa009caa/WR-News-Website_Article_Banner-PrimeGaming-DROP_4.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P4_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "e97c749d-3b93-52bd-8c2e-2d84846a3faf",
                            "uid": "blt7edaf01b20f660d0",
                            "title": "PROJECT",
                            "description": "Objective: acquired. Target: rewards! Complete PROJECT event missions to earn cybernetic loot.",
                            "link": {
                                "url": "/news/announcements/project/"
                            },
                            "date": "2021-12-28T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt07ab45dda1a293d6/61b3de7eea8d0a3b1c30b4eb/WR-News-Website_Article_Banner-PROJECT.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Events",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/events/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/4408451830419",
                            "showTableOfContents": false
                        },
                        {
                            "id": "3feaeb1f-95c7-5f39-b0c9-f62b75cf5053",
                            "uid": "bltc3888170e78bd0d8",
                            "title": "Wild Rift Patch Notes 2.6a",
                            "description": "The weather outside is frightful, but the fire is… being brought down in the form of fiery justice infused swords from our latest addition to Wild Rift, Kayle. We’ve checked our lists and are bringing nerfs and updates across the Rift! Here’s Patch 2.6a!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-6a/"
                            },
                            "date": "2021-12-17T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8bd507910ea875fa/61b301d3a59d77416b8f8050/WR_Patch26a_Article_Banner_RIVIREL.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "6f1deb58-1df3-50d3-a96c-5e86f1210c1b",
                            "uid": "blt10107132afcca4e1",
                            "title": "Your Festival Finery",
                            "description": "The festival awaits its guest of honor—you! Get all dressed up with Crystal Rose wallpapers, profile pictures, banners, and photo props.",
                            "link": {
                                "url": "/news/announcements/your-festival-finery/"
                            },
                            "date": "2021-12-15T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf5fba66a3ec9e037/61b3e1b46a78b87751002f19/WR_CrystalRoseFankit_header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "bd66b299-f41a-54ca-8849-d15d6f461c11",
                            "uid": "bltfb968072786cc8f0",
                            "title": "Crystal Rose",
                            "description": "It’s time for a wondrous celebration! Join us at the Crystal Rose Festival—dancing, revelry, and event rewards to follow.",
                            "link": {
                                "url": "/news/announcements/crystal-rose/"
                            },
                            "date": "2021-12-15T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta44e9e3e219311f7/61b2fd8d1d158d4007de98bd/WR-News-Website_Article_Banner-CrystalRose.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Events",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/events/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500007819202",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ec0d2391-7855-50a0-a5d6-3031fb206388",
                            "uid": "blt4065efa0cebe2b9a",
                            "title": "Prime Gaming: Random Recall Chest",
                            "description": "Head to base with a little extra flair! Link your Wild Rift and Amazon Prime accounts, so you can claim a Random Recall Chest this week. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/prime-gaming-random-recall-chest/"
                            },
                            "date": "2021-12-14T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt18f69843b536ee2b/61b794626a78b877510032a5/WR-News-Website_Article_Banner-PrimeGaming-DROP_3.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P3_MIC_T1",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P3_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "a9c0e5d9-7165-5762-9ae2-88985e2bd26f",
                            "uid": "blt7e644590af92bded",
                            "title": "Kayle Champion Overview",
                            "description": "All shall answer to the light. Ascend with Kayle, the Righteous, purifying Wild Rift on December 2 PT.",
                            "link": {
                                "url": "/news/game-updates/kayle-champion-overview/"
                            },
                            "date": "2021-12-03T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltbd67ed37da7c8a04/61a81db429140924cb9ea218/120321_WR_Kayle_champoverview_banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "KAYLE",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/kayle/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=tLq0qPZy9T0",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b17f670e-b1d4-54a2-92a2-4bd6bdb9b2bc",
                            "uid": "bltba158d79d68b539d",
                            "title": "Morgana Champion Overview",
                            "description": "Darkness reveals truth. Walk your own path with Morgana, the Fallen, descending into Wild Rift on December 2 PT.",
                            "link": {
                                "url": "/news/game-updates/morgana-champion-overview/"
                            },
                            "date": "2021-12-03T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf614d48b3cae825b/61a6fc859b3c850ceca0515f/120321_WR_Morgana_ChampOverview_Banner_v2.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "MORGANA",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/morgana/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=uYDyx8v4g4U",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "c4951416-2b0e-5cfc-97a1-f38d9518f23b",
                            "uid": "blt99b3cfa8e8b86f7e",
                            "title": "Dr. Mundo Champion Overview",
                            "description": "Medicine time! Go where you please with Dr. Mundo, the Madman of Zaun, accepting new patients in Wild Rift on December 3 PT.",
                            "link": {
                                "url": "/news/game-updates/dr-mundo-champion-overview/"
                            },
                            "date": "2021-12-03T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt9bcf9db1eb606df1/61a9144434f3f5135367b441/WR_DrMundo_ChampOverview_ThumbnailTemplate_2021-1920x1080-TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "DR. MUNDO",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dr-mundo/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=ntOMQ4mZz3I",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "a44c3bbf-4787-553b-9a1a-c70cf0dea79f",
                            "uid": "blt384a809e1394072b",
                            "title": "Wings of Justice Champion Trailer",
                            "description": "By blade or spell, justice finds all. Which will you choose? Kayle and Morgana enter this realm in the Path of Justice event.",
                            "link": {
                                "url": "/news/announcements/wings-of-justice-champion-trailer/"
                            },
                            "date": "2021-12-03T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1775fc37b2851a44/61a7e2fb29140924cb9ea182/WR_Kayle_Morgana-Champion_Trailer-Thumbnails-1920x1080-textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "MORGANA",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/morgana/"
                                    }
                                },
                                {
                                    "title": "KAYLE",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/kayle/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=GaPNceMyZWA",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "fec5824f-c450-5ac8-9715-f073253bd57d",
                            "uid": "blt95b71aff6771c17e",
                            "title": "Wild Rift Patch Notes 2.6",
                            "description": "Whether you want to fight for justice, inflict pain on your enemies, or just go where you please—Kayle, Morgana, and an updated Dr. Mundo are here and bringing lots of updates with them! Also in 2.6: New Ranked Rewards, URF, 5 bans, and explosive balance changes around the map!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-6/"
                            },
                            "date": "2021-12-02T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt9d21c242dd98d3e4/61a57e307282fa2393f775b8/120221_WR_26patch-notes_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "987d05ef-23c6-552b-aa06-d94b572f5096",
                            "uid": "blt9811d214f5fda30a",
                            "title": "/dev: Upgrading Ranked Rewards",
                            "description": "In Patch 2.6, we’re rolling out a bunch of updates aimed at making Ranked significantly more rewarding. Join game designer MartianSpider for a deeper dive into the Season Rewards system.",
                            "link": {
                                "url": "/news/dev/dev-upgrading-ranked-rewards/"
                            },
                            "date": "2021-12-02T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltdc38ee0c24bb0035/61a6738209389f76634d3591/LOLWR_RR2021_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "f519d5b3-708b-5de5-aece-ffb388a05ce7",
                            "uid": "bltadd61931a75f8f41",
                            "title": "/dev: New Items in Patch 2.6",
                            "description": "Patch 2.6 brings updated itemization through spell shields and support playstyles.",
                            "link": {
                                "url": "/news/dev/dev-new-items-in-patch-2-6/"
                            },
                            "date": "2021-12-01T02:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte44d3e00826e84d9/619c610e3da6eb1096570854/11302021_newitemarticle_2.6_Article-BannerArt.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "34f15ec1-21b7-5d13-9fd1-da50b73dfff7",
                            "uid": "bltcecb0b46e80bd81a",
                            "title": "Random Emote Chest",
                            "description": "Pick up a Random Emote Chest when you link your Wild Rift and Amazon Prime accounts! For participating regions only:",
                            "link": {
                                "url": "/news/announcements/random-emote-chest/"
                            },
                            "date": "2021-11-30T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt83b9f23f273e6a82/619ec64d60347d10a482d556/WR-News-Website_Article_Banner-PrimeGaming-DROP_2.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P2_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "3f497db7-02f5-51f1-98bf-744fc6f809ee",
                            "uid": "blt327ba2c723d6477b",
                            "title": "New Content in Patch 2.6",
                            "description": "Patch 2.6 is right around the corner and bringing all sorts of exciting new features and surprises to Wild Rift. If you missed our Patch 2.6 Preview, or want a recap of all the big announcements coming, we’ve got you covered!",
                            "link": {
                                "url": "/news/announcements/new-content-in-patch-2-6/"
                            },
                            "date": "2021-11-30T03:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt0bee8813562f25a5/619c502aeb16c322c4dd22db/dr.mundo-new-content-2_optimized.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "DR. MUNDO",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dr-mundo/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "4cf2925a-84b1-5e79-bc9c-4e0ae73332ce",
                            "uid": "blt1eaf95fa511a278c",
                            "title": "Last chance to earn rewards on RiotxArcane.com",
                            "description": "The World of RiotX Arcane closes on 11/30. Complete missions to earn in-game items before it’s gone.",
                            "link": {
                                "url": "/news/announcements/last-chance-to-earn-rewards-on-riotxarcane-com/"
                            },
                            "date": "2021-11-24T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt26ca987557a6fcd4/619c198012a3a82185f95d76/jinxfinale.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                },
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://riotxarcane.riotgames.com/",
                            "showTableOfContents": false
                        },
                        {
                            "id": "8ee4c367-c875-51a5-b330-36456a0fc4dc",
                            "uid": "blt889d2eef26009145",
                            "title": "Da Kun Gaming Win the Wild Rift Horizon Cup!",
                            "description": "Da Kun Gaming have been crowned the winners of the first Wild Rift international tournament!",
                            "link": {
                                "url": "/news/esports/da-kun-gaming-win-the-wild-rift-horizon-cup/"
                            },
                            "date": "2021-11-22T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf2b718afce17ba78/6197f68d3b57dd0e2c8fde06/Groups_Day1_004_finalsbanner_16_9.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Horizon Cup",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/horizon-cup/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "98e97e7f-d396-593e-ad1e-dd58363db14c",
                            "uid": "blt77ce9d14e802af37",
                            "title": "RiotX Arcane: Until Next Time",
                            "description": "Thank you to everyone who has watched Arcane and for making this an unforgettable moment. We’ve never been more excited about the future.",
                            "link": {
                                "url": "/news/announcements/riotx-arcane-until-next-time/"
                            },
                            "date": "2021-11-22T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt548a9ad6894fb7e0/619840a9e91e152183d844a4/[11_20-EMBARGO]-Riot_RiotXArcane_Phase02_OptimizedBanner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.riotgames.com/en/news/riotx-arcane-until-next-time",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ade38bcd-b338-55d0-97e7-525d00fe449b",
                            "uid": "bltac6b2b339cf0eb25",
                            "title": "Wild Rift Horizon Cup:  Semifinals Recap",
                            "description": "See who will compete for the title of Wild Rift Horizon Cup champions!",
                            "link": {
                                "url": "/news/esports/wild-rift-horizon-cup-semifinals-recap/"
                            },
                            "date": "2021-11-21T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Bottom",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt53bc303e982e7066/6197ee641c5e9d77962cd4d8/Groups_Day5_HorizonCup_168_1920x1080.jpeg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Horizon Cup",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/horizon-cup/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "68d3be39-774e-5bd1-b1ed-cb31d000f8a4",
                            "uid": "bltcb3943f00314baa4",
                            "title": "Wild Rift Horizon Cup: Quarterfinals Recap",
                            "description": "Check out the results of the Wild Rift Horizon Cup Quarterfinals Stage!",
                            "link": {
                                "url": "/news/esports/wild-rift-horizon-cup-quarterfinals-recap/"
                            },
                            "date": "2021-11-20T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt7b43d2a6f6a5a89c/619732b009389f76634d199c/HCChair_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Horizon Cup",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/horizon-cup/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "582396f7-937c-5577-b036-a46752dacafd",
                            "uid": "bltf601a26486bc3f6c",
                            "title": "Arcane Act III Available Now!",
                            "description": "Watch Act III of Arcane now available on Netflix.",
                            "link": {
                                "url": "/news/announcements/arcane-act-iii-available-now/"
                            },
                            "date": "2021-11-20T08:01:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt38408e7479398b9a/6195a5939d54dc24c5883636/ARC_ACTIII_RELEASE_textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                },
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.netflix.com/title/81435684",
                            "showTableOfContents": false
                        },
                        {
                            "id": "823012c2-975e-537c-8a2e-fdf14b32fe98",
                            "uid": "bltfa2e975094b40b90",
                            "title": "Wild Rift Horizon Cup: Groups Recap",
                            "description": "Check out the results of the Wild Rift Horizon Cup Groups Stage and who will move forward to the Quarterfinals!",
                            "link": {
                                "url": "/news/esports/wild-rift-horizon-cup-groups-recap/"
                            },
                            "date": "2021-11-19T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt2ccd368a6b5d4f29/61944d88d193b36297ef86a9/HCTrophy_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Horizon Cup",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/horizon-cup/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "715c88a1-4d7a-591b-87df-07c3316f74bd",
                            "uid": "blt9c1674d51910af59",
                            "title": "New Undercity Nights missions on RiotxArcane.com",
                            "description": "The World of RiotX Arcane heads towards its conclusion with new missions and in-game rewards.",
                            "link": {
                                "url": "/news/game-updates/new-undercity-nights-missions-on-riotxarcane-com/"
                            },
                            "date": "2021-11-15T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt2f89acd29187d327/618db490d11a6602130270d6/UCN_Promo_v2.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                },
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://riotxarcane.riotgames.com/",
                            "showTableOfContents": false
                        },
                        {
                            "id": "5dced572-80ac-52b7-82d4-3a05d970a5bd",
                            "uid": "blt6c39197125dc1440",
                            "title": "Prime Gaming: Random Skin Chest",
                            "description": "It's time to snag even more rewards! Link your Wild Rift and Amazon accounts to unlock in-game items with Prime. Claim a Random Skin Chest in our first drop. For participating regions only.",
                            "link": {
                                "url": "/news/announcements/prime-gaming-random-skin-chest/"
                            },
                            "date": "2021-11-14T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte5892659e81573c4/618e1e696407fe7f991e9a9d/WR-News-Website_Article_Banner-PrimeGaming.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://gaming.amazon.com/wildrift?ref_=SM_LOLWR01_P1_MIC_T1",
                            "showTableOfContents": false
                        },
                        {
                            "id": "c3994e90-cf5b-50e0-a540-409df677793d",
                            "uid": "blt0576c407aca07230",
                            "title": "RiotX Arcane Undercity Nights Trailer",
                            "description": "RiotX Arcane comes to a raucous conclusion during Undercity Nights. Are you ready?",
                            "link": {
                                "url": "/news/announcements/riotx-arcane-undercity-nights-trailer/"
                            },
                            "date": "2021-11-14T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta78c13fed40966e5/618c7f44f71a3113890e9258/XP1_YT_Thumbnails_UCN_1920x1080_Textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                },
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=47J9q4BWfBw",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "34132feb-806f-5e64-8d09-7af738b029fc",
                            "uid": "bltdbae149160b9cf41",
                            "title": "Arcane Act II Available Now!",
                            "description": "Watch Act II of Arcane now available on Netflix.",
                            "link": {
                                "url": "/news/announcements/arcane-act-ii-available-now/"
                            },
                            "date": "2021-11-13T08:00:01.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta1ff3efee3521161/618e177a9dccbf6fa4178618/ARC_104-106_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.netflix.com/title/81435684",
                            "showTableOfContents": false
                        },
                        {
                            "id": "1e98b0c7-e037-5024-8cd3-cfa114b1e4d6",
                            "uid": "blt43818165c6e2d8a0",
                            "title": "Wild Rift Horizon Cup Match Schedule",
                            "description": "The Group Stage match schedule revealed!",
                            "link": {
                                "url": "/news/esports/wild-rift-horizon-cup-match-schedule/"
                            },
                            "date": "2021-11-11T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt029d9735b4ab8690/618c121d7ae6ce6fab413732/Match_Schedule_Header1.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Horizon Cup",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/horizon-cup/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "cc5149bf-695a-5f3d-864f-7dfe73b10571",
                            "uid": "bltfa502e5dd1f0583a",
                            "title": "Progress Days missions on RiotxArcane.com are live",
                            "description": "The World of RiotX Arcane is changing. Visit new districts, complete missions & get in-game rewards.",
                            "link": {
                                "url": "/news/game-updates/progress-days-missions-on-riotxarcane-com-are-live/"
                            },
                            "date": "2021-11-09T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltdf1e711c98fd7fbd/6185f76bc9714c667b4ff1fc/League_district_thumbnail_day5.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                },
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://riotxarcane.riotgames.com/",
                            "externalLink": "https://riotxarcane.riotgames.com/",
                            "showTableOfContents": false
                        },
                        {
                            "id": "2fa50e84-85de-5526-b8bf-ac58e67524cc",
                            "uid": "blt9092084faa44a9a0",
                            "title": "Hextech Heist",
                            "description": "Criminals beware! Caitlyn is on the case to track down who stole Jayce’s watch. Join the investigation and unlock electrifying rewards as you go.",
                            "link": {
                                "url": "/news/announcements/hextech-heist/"
                            },
                            "date": "2021-11-09T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt801e916aca5396a7/61846d0cffff36790722264b/WR-News-Website_Article_Banner-HextechHeist.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "CAITLYN",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/caitlyn/"
                                    }
                                },
                                {
                                    "title": "JAYCE",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/jayce/"
                                    }
                                },
                                {
                                    "title": "XP1 website",
                                    "is_hidden": true,
                                    "url": {
                                        "url": "/news/tags/xp1-website/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500012153982",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4a7852e7-c7fd-58aa-a0c4-81fc217731d2",
                            "uid": "bltc9dc162c771ac91b",
                            "title": "Target Practice",
                            "description": "Sharp minds, sharper aim. Team up with Caitlyn and Jayce in the Hextech Heist event on Nov. 9 UTC!",
                            "link": {
                                "url": "/news/announcements/target-practice/"
                            },
                            "date": "2021-11-09T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt6fce8003a584fef2/618503d57a22505a5c2546a7/110821_WR_Jayce&CaitlynCG_Thumbnail_1280x720.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "CAITLYN",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/caitlyn/"
                                    }
                                },
                                {
                                    "title": "JAYCE",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/jayce/"
                                    }
                                },
                                {
                                    "title": "XP1 website",
                                    "is_hidden": true,
                                    "url": {
                                        "url": "/news/tags/xp1-website/"
                                    }
                                },
                                {
                                    "title": "XP1 passport",
                                    "is_hidden": true,
                                    "url": {
                                        "url": "/news/tags/xp1-passport/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=PC1PDPE5h_M",
                            "externalLink": "https://www.youtube.com/watch?v=PC1PDPE5h_M",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4d5b4198-17bd-5d42-bd72-696d37fa4068",
                            "uid": "blt33cb0e040df0191d",
                            "title": "RiotX Arcane Progress Days Trailer",
                            "description": "RiotX Arcane continues. Join the Progress Days celebration with rewards, in-game events, and more.",
                            "link": {
                                "url": "/news/announcements/riotx-arcane-progress-days-trailer/"
                            },
                            "date": "2021-11-07T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt04e38904ee53d5f5/618597d5666f1777c9bcf3de/Copy_of_20_EN-US_RiotXArcane_ProgressDaysTrailerWebsiteBanner_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                },
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=ypobZS6qUBY",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "73638b5a-de5e-53d0-af20-76eeccb42da0",
                            "uid": "blt895f9bd00b53d3f4",
                            "title": "Arcane Act I Available Now!",
                            "description": "Watch the first three episodes of Arcane on Netflix.",
                            "link": {
                                "url": "/news/announcements/arcane-act-i-available-now/"
                            },
                            "date": "2021-11-07T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt2b0795e686a8add6/61821eb34f03d16675737ff1/110621_ARC_WATCHLIVE_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                },
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.netflix.com/title/81435684",
                            "showTableOfContents": false
                        },
                        {
                            "id": "548f57fe-6220-5f4b-a4bc-3fb0e22a88cf",
                            "uid": "bltb11bf3828d757772",
                            "title": "Arcane Experience",
                            "description": "Celebrate the premiere of Arcane with us! Log in each day during the Arcane Experience to unlock free rewards.",
                            "link": {
                                "url": "/news/announcements/arcane-experience/"
                            },
                            "date": "2021-11-07T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltec5b766ca88eb498/6181d5669dce4f6f63edec62/WR_ArcaneExperience_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                },
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                },
                                {
                                    "title": "XP1 website",
                                    "is_hidden": true,
                                    "url": {
                                        "url": "/news/tags/xp1-website/"
                                    }
                                },
                                {
                                    "title": "XP1 passport",
                                    "is_hidden": true,
                                    "url": {
                                        "url": "/news/tags/xp1-passport/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500012244361",
                            "showTableOfContents": false
                        },
                        {
                            "id": "95d61930-d220-5917-9555-5306cabc348a",
                            "uid": "blt63bfdfbb9113639c",
                            "title": "Tune in to Arcane’s Global Premiere on Twitch",
                            "description": "Watch live on November 6th and link your account for rewards. Pre-show begins at 6:00pm PT.",
                            "link": {
                                "url": "/news/announcements/tune-in-to-arcane-s-global-premiere-on-twitch/"
                            },
                            "date": "2021-11-06T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1badf2eed9623917/61846ccdffff367907222649/110621_rxa_tune_in_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                },
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.twitch.tv/riotgames",
                            "showTableOfContents": false
                        },
                        {
                            "id": "95b28dd7-2428-5abb-ac7f-0cdbd60022c8",
                            "uid": "blt79cfb4f08a4b8ee0",
                            "title": "Caitlyn Champion Overview",
                            "description": "So many bad guys, so little time. Track them all down with Caitlyn, the Sheriff of Piltover—coming to Wild Rift on November 8 PT.",
                            "link": {
                                "url": "/news/game-updates/caitlyn-champion-overview/"
                            },
                            "date": "2021-11-04T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt927e36c2dc4d9ec9/617c9568471f3f106ea58cb2/WR_Caitlyn_ChampOverview_Thumbnail_1280x720-TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=muYLs3wXpG4",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "d193d732-beb0-58c9-acf8-e149600415d4",
                            "uid": "blt9e63faf62c5fd508",
                            "title": "Jayce Champion Overview",
                            "description": "There’s a bright future ahead. Charge into it with Jayce, the Defender of Tomorrow—powering up in Wild Rift on November 8 PT.",
                            "link": {
                                "url": "/news/game-updates/jayce-champion-overview/"
                            },
                            "date": "2021-11-03T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltbdb37e4cccb902cc/6179cf3416d29a13daa7b51d/WR_Jayce_ChampOverview_Thumbnail_1280x720-TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "JAYCE",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/jayce/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=250V-xRh6dk",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "df7ce91e-2b3b-5dcb-9a9a-eb9c305ead38",
                            "uid": "blt610036dd695c8c48",
                            "title": "More updates coming to matchmaking",
                            "description": "We’ve heard your feedback around large ranked gaps in matchmaking, so we’re reverting most of our recent changes to Ranked.",
                            "link": {
                                "url": "/news/game-updates/more-updates-coming-to-matchmaking/"
                            },
                            "date": "2021-11-02T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltfaa49c3240da81af/618177e1cd8c830db6444745/WR_MatchmakingUpdate_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "0220d385-bd53-588c-8228-b82a04091644",
                            "uid": "bltc90b9f56078b0be2",
                            "title": "Welcome to the World of RiotX Arcane!",
                            "description": "Earn in-game rewards, play mini games, and explore the districts with your favorite Riot characters.",
                            "link": {
                                "url": "/news/announcements/welcome-to-the-world-of-riotx-arcane/"
                            },
                            "date": "2021-11-01T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltcc2eb26314f8db07/617b52c66ebcf2105acca801/riotx-arcane-website-redirect.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://riotxarcane.riotgames.com",
                            "showTableOfContents": false
                        },
                        {
                            "id": "823414b3-3caf-5e12-b803-e85997d6c774",
                            "uid": "blt4332ba293389a155",
                            "title": "RiotX Arcane Announcement Trailer",
                            "description": "This is just the beginning. Welcome to RiotX Arcane.",
                            "link": {
                                "url": "/news/announcements/riotx-arcane-announcement-trailer/"
                            },
                            "date": "2021-11-01T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltab61c5792560dc77/617c68ce515a341061cc80fa/110121_RiotXArcane_Banner_v2.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                },
                                {
                                    "title": "RiotX Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/riotx-arcane/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=rt_5-8OPiEA",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "0f5923e2-6b4c-5d74-b5d4-c3558838358b",
                            "uid": "blt0c173f489cdfb584",
                            "title": "Arcane: Final Trailer",
                            "description": "Watch the final trailer for Arcane now, coming to Netflix November 6 at 7:00 PM PT.",
                            "link": {
                                "url": "/news/announcements/arcane-final-trailer/"
                            },
                            "date": "2021-10-31T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt18e1912a2547e349/617bc7f638150b1072a1dacf/Arc_FinalTrailer_Thumb_Textless-banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=32oT-CWJOC0",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "5fc177c1-2a62-5246-b313-00bf181ccbf8",
                            "uid": "blt229e79b05aefc254",
                            "title": "Show Your Dragon’s Spirit",
                            "description": "You chose your path—time to show it off! Pick up wallpapers, profile pictures, and more to rep your Dragonmancer team.",
                            "link": {
                                "url": "/news/community/show-your-dragon-s-spirit/"
                            },
                            "date": "2021-10-29T06:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt365156e43bf120c5/6176f29cb05858694858cf47/WR_Dragonmancers_YT_Banner_2560x1440.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Community",
                                    "url": {
                                        "url": "/news/community/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Dragonmancer",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/dragonmancer/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "eaea4a84-2d71-57ba-af9b-8949d1721539",
                            "uid": "bltf4cf5891aa2f489d",
                            "title": "Enemy by Imagine Dragons & JID",
                            "description": "Oh, the misery, everybody wants to be my ENEMY.",
                            "link": {
                                "url": "/news/announcements/enemy-by-imagine-dragons-jid/"
                            },
                            "date": "2021-10-28T11:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1ebdefbeed3f376e/6179985f2d2c9113dd589261/Arc_EnemyMV_Textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=F5tSoaJ93ac",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "556046d8-6caf-56f7-bcce-c5645efd7564",
                            "uid": "blt2d4ff6bfaf27a294",
                            "title": "Wild Rift: Horizon Cup Event Primer",
                            "description": "All you need to know about the first Wild Rift international showdown",
                            "link": {
                                "url": "/news/announcements/wild-rift-horizon-cup-event-primer/"
                            },
                            "date": "2021-10-27T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt7884e1fcb2c51010/61734344fd37c069473b0868/wr_horizon_Article_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Horizon Cup",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/horizon-cup/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "22814521-f25a-5922-b405-a3dffeb8f42a",
                            "uid": "blt6ed32bcc734fe940",
                            "title": "Wild Rift Patch Notes 2.5a",
                            "description": "Eyes up, targets locked. Caitlyn and Jayce join Wild Rift in a few days time! We’re pausing balance updates soon in prep for the Horizon Cup, and there’s something spooky going on in the skins department. Here’s Patch 2.5a!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-5a/"
                            },
                            "date": "2021-10-27T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt56a6554b4114c273/6171f8a790079752a47e8c9a/LOLWR_Patch25a_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                },
                                {
                                    "title": "AKSHAN",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/akshan/"
                                    }
                                },
                                {
                                    "title": "DARIUS",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/darius/"
                                    }
                                },
                                {
                                    "title": "GALIO",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/galio/"
                                    }
                                },
                                {
                                    "title": "GRAVES",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/graves/"
                                    }
                                },
                                {
                                    "title": "LUCIAN",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/lucian/"
                                    }
                                },
                                {
                                    "title": "NAMI",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/nami/"
                                    }
                                },
                                {
                                    "title": "TRYNDAMERE",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/tryndamere/"
                                    }
                                },
                                {
                                    "title": "KAI'SA",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tag/kaisa"
                                    }
                                },
                                {
                                    "title": "XP1 website",
                                    "is_hidden": true,
                                    "url": {
                                        "url": "/news/tags/xp1-website/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "f653aaea-b18e-5002-a2e2-354932b9b19a",
                            "uid": "blt6c8941bd5bbec64c",
                            "title": "/dev: Making Sense of Matchmaking",
                            "description": "Matchmaking and Ranked are core parts of Wild Rift, but how do they actually work? Lead game designer Josh Menke is here to pull back the curtains on MMR, “loser queue”, and why Gold and Emerald players sometimes end up in the same game.",
                            "link": {
                                "url": "/news/dev/dev-making-sense-of-matchmaking/"
                            },
                            "date": "2021-10-22T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltfc1d37217ab65ea8/606f8e2c3d85432b0f81e5b4/4_12_21_Patch22article_StargazerCamille.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "507b6e19-2aff-502d-8b44-68c0af012bce",
                            "uid": "blt471a4962f6626f5a",
                            "title": "/dev: Guilds and GvG",
                            "description": "Game designer Myles Salholm gives the inside scoop on how and why Guilds are coming to Wild Rift.",
                            "link": {
                                "url": "/news/dev/dev-guilds-and-gvg/"
                            },
                            "date": "2021-10-21T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt26c2d67315e5c3f3/61706646385f7a513f0de484/WR-News-Website_Article_Banner-GvG.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "db4bbf7a-0234-53b4-8bd1-d64db5572979",
                            "uid": "bltb65e1825530b2d2b",
                            "title": "Way of the Dragonmancers",
                            "description": "A dragon's power awaits. Choose your element in the Way of the Dragonmancers event, and claim victory for your team to earn an exclusive icon.",
                            "link": {
                                "url": "/news/announcements/way-of-the-dragonmancers/"
                            },
                            "date": "2021-10-20T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt5df0edfaf7dd9a21/616db08ec2ea2d78fdd2961f/WR-News-Website_Article_Banner-Dragonmancers.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Dragonmancer",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/dragonmancer/"
                                    }
                                },
                                {
                                    "title": "XP1 website",
                                    "is_hidden": true,
                                    "url": {
                                        "url": "/news/tags/xp1-website/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500012230181",
                            "showTableOfContents": false
                        },
                        {
                            "id": "e6be586a-7ffc-5c26-9adc-2a36a332fef5",
                            "uid": "blt64a41a75933329d0",
                            "title": "Veigar’s Arrival",
                            "description": "Shrink before his terrible power! Tremble at the vile villainy! And learn how to unlock the Tiny Master of Evil and other nefarious rewards during Veigar’s Arrival!",
                            "link": {
                                "url": "/news/announcements/veigar-s-arrival/"
                            },
                            "date": "2021-10-15T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt12547104d4593fb5/615f7d7ef892581d12f13d9a/101421_WRVeigarsArrivalPSArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Veigar",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/veigar/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500012152622",
                            "showTableOfContents": false
                        },
                        {
                            "id": "1835adf9-a149-5365-b38e-9a309dd0e373",
                            "uid": "blte3bceaa022b08357",
                            "title": "Wild Rift Patch Notes 2.5",
                            "description": "NYEHEHEHE! A lair-load of updates is headlined by Veigar, the tiniest and evillest of yordles. Also in 2.5: Guilds, matchmaking upgrades, a rework in the jungle and a ton of balance changes in preparation for next month’s Horizon Cup.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-5/"
                            },
                            "date": "2021-10-14T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt08ae6b4f752939cf/616493b1494c2c12936fd195/LOLWR_Patch25_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "a575a4b9-a239-5cb0-a3a1-fefbcf1e3032",
                            "uid": "blt42cbc4d9f1e200f3",
                            "title": "Veigar Champion Overview",
                            "description": "Even death trembles in his presence! Show them true villainy with Veigar, the Tiny Master of Evil—coming to Wild Rift on October 14 PT.",
                            "link": {
                                "url": "/news/game-updates/veigar-champion-overview/"
                            },
                            "date": "2021-10-14T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt55db84fa2a471ec9/615e0028db34085ff954b176/101421_WR_Veigar_ChampOverview_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Veigar",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/veigar/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=cqp04g1GUDA",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "00a22d0e-9136-5c6e-8cbf-8ae06becb757",
                            "uid": "blt349768ce281010e6",
                            "title": "Upgrades Coming to the Wild Pass Season 3",
                            "description": "Hexplorer Tristana is bringing the boom! Get ready for Wild Pass Season 3.",
                            "link": {
                                "url": "/news/announcements/upgrades-coming-to-the-wild-pass-season-3/"
                            },
                            "date": "2021-10-12T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltfa84aad526c6ca26/615f4eb956faa61e63fdcf5b/10122021-WR-News-Website_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "TRISTANA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/tristana/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "2d3ef760-e1ac-5800-9215-25227090a1f1",
                            "uid": "blt8f84012dc0ebfaff",
                            "title": "Guilds: How It Works",
                            "description": "Find your next 5-stack, customize your profile, and earn sweet new rewards with Guilds! Learn more here.",
                            "link": {
                                "url": "/news/announcements/guilds-how-it-works/"
                            },
                            "date": "2021-10-12T12:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltae79961a910c4ef1/615f5af4c2ff901292ac7f47/10122021-Guilds-Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "XP1 website",
                                    "is_hidden": true,
                                    "url": {
                                        "url": "/news/tags/xp1-website/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500007207041",
                            "showTableOfContents": false
                        },
                        {
                            "id": "1c32cb3f-f1fb-581c-a0e4-17724a9c9b5d",
                            "uid": "blt80ede369297b34eb",
                            "title": "Patch 2.5 Preview",
                            "description": "The /dev diary’s got a new name, but it’s still packed with sneak peeks and reveals. Join Alan and Catarina from the Wild Rift dev team for some exciting announcements and features headed to Wild Rift in October and November.",
                            "link": {
                                "url": "/news/dev/patch-2-5-preview/"
                            },
                            "date": "2021-10-11T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt2c8fa6f63ccc9122/615f44beb727970cec46a641/WR_DevDiary_Patch2.5_Thumbnail_1280x720_TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=sX5j1xz_2tQ",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "387275b5-876e-5cf7-bf53-5d57e48cdeb4",
                            "uid": "bltdf369ba13ccd9f0e",
                            "title": "Position Preference is coming to unranked PvP",
                            "description": "Starting in Patch 2.5, Position Preference will be enabled in unranked PvP games.",
                            "link": {
                                "url": "/news/game-updates/position-preference-is-coming-to-unranked-pvp/"
                            },
                            "date": "2021-10-08T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt114088a3c9220b65/615b554ec34d415711f7e509/100821_PositionPref_header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "d1b93620-96bb-55b7-b0f4-d87fa584f15d",
                            "uid": "blte746321c28b45036",
                            "title": "Riot Mobile Available Now!",
                            "description": "We are so excited to finally announce the launch of Riot Mobile, now available for download on Android and iOS app stores.",
                            "link": {
                                "url": "/news/announcements/riot-mobile-available-now/"
                            },
                            "date": "2021-10-04T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltdefb7be3aa81273d/61564ff0f2882661476b63b4/100421_RiotMobile_Banner_v2.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.leagueoflegends.com/en-us/news/riot-games/hello-riot-mobile-farewell-league/",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4e220198-6de5-5a02-a0ef-f9396803c885",
                            "uid": "blt128788d16b609fbc",
                            "title": "Wild Rift Patch Notes 2.4d",
                            "description": "The final balance patch of the 2.4 cycle addresses Zed’s dominance and we’ve got some adjustments coming for some of our other support outliers: Blitzcrank, Thresh, and Senna. We’re laying low in this final balance patch before the release of 2.5 in October!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-4d/"
                            },
                            "date": "2021-09-29T01:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt6bddeffd921318db/614d0c5b564bf37c154f9abd/LOLWR_Patch24d_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9e0538bd-79de-5c2c-bd39-ec0f631cf7a7",
                            "uid": "bltbb5a8467d34243f4",
                            "title": "Name That Champion",
                            "description": "Is it a yordle? A ninja? A spiky armordillo? Take your best guess during the Name That Champion event!",
                            "link": {
                                "url": "/news/announcements/name-that-champion/"
                            },
                            "date": "2021-09-28T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte79921ca8f758976/614e426177d06a0c9835fe23/WR-News-Website_Article_Banner-Name_That_Champ_Event.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500007805061",
                            "showTableOfContents": false
                        },
                        {
                            "id": "e2e99e37-fab6-52dd-bba8-e621a26a71a1",
                            "uid": "blt6e29f2ed1b4b2104",
                            "title": "Arcane: League of Legends",
                            "description": "Every legend has a beginning. Welcome friend, to the world of Arcane. Coming to Netflix November 6.",
                            "link": {
                                "url": "/news/announcements/arcane-league-of-legends/"
                            },
                            "date": "2021-09-25T17:50:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt85be686db83a12d1/614cd929d4e76c78b3d60644/Arcane_Official_Trailer_Textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Arcane",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/arcane/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=4Ps6nV4wiCE",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "960f3458-6cbd-5ae3-960a-2d3159b971ae",
                            "uid": "blt3b688cbd6e886ae5",
                            "title": "Introducing the Wild Rift: Horizon Cup",
                            "description": "The first international Wild Rift tournament is here!",
                            "link": {
                                "url": "/news/announcements/introducing-the-wild-rift-horizon-cup/"
                            },
                            "date": "2021-09-21T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltfd3ff7bcf2a653a9/614ab4abf725af79f53fd57f/WRE_HorizonCup_Announcement_Poster-v2.1.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Esports",
                                    "url": {
                                        "url": "/news/esports/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Horizon Cup",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/horizon-cup/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "f7c91687-e241-5dbf-a4c2-5f25248e0799",
                            "uid": "blt8cfe4c91e55f4d99",
                            "title": "New Riot Client Coming Soon",
                            "description": "Announcing the launch of the new Riot Client!",
                            "link": {
                                "url": "/news/announcements/new-riot-client-coming-soon/"
                            },
                            "date": "2021-09-16T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt79eb2b7d8a83f659/614138a4564bf37c154f7337/League.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.riotgames.com/en/news/new-riot-client-coming-soon",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9dfb5179-b99b-5059-9b73-fd2d66deeef0",
                            "uid": "blt2553b32c41a7d57e",
                            "title": "Wild Rift Patch Notes 2.4c",
                            "description": "It’s quiet… maybe too quiet. A few balance changes for some snowballing outliers and the long awaited introduction of High Noon Lucian and Senna to the roster.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-4c/"
                            },
                            "date": "2021-09-15T01:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt6bb26851b4be035d/613bf070436ceb2c79f15139/LOLWR_Patch24c_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "14ece485-ea7f-5c41-bd9c-de957976cc41",
                            "uid": "blt86c559fac2f356d7",
                            "title": "Frost & Flame",
                            "description": "Things are heating up around here! ...Or are they cooling down? Earn event tokens to pick up frost or flame-themed rewards.",
                            "link": {
                                "url": "/news/announcements/frost-flame/"
                            },
                            "date": "2021-09-09T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt69de12fdbae34c4a/613253d707866d6a2d8241dc/09082021-Frost_And_Flame_Event-Article-Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Nunu & Willump",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/nunu-and-willump/"
                                    }
                                },
                                {
                                    "title": "Brand",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/brand/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500007819922",
                            "showTableOfContents": false
                        },
                        {
                            "id": "afaf498f-9346-54f4-904d-4b5da4ba2541",
                            "uid": "blt7789cc4d2c337bb1",
                            "title": "Nunu & Willump Champion Overview",
                            "description": "C’mon, it’s time to be a hero! Roll into adventure with Nunu & Willump, the Boy and His Yeti. Coming to Wild Rift on September 8 PT.",
                            "link": {
                                "url": "/news/game-updates/nunu-willump-champion-overview/"
                            },
                            "date": "2021-09-07T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb9034f60e0668072/612d3c6d07866d6a2d8223fe/WR_Nunu_ChampOverview_Thumbnail_1280x720-NO_TEXT.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Nunu & Willump",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/nunu-and-willump/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=1TGBtn-bkgw",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "6b675e8e-c5ed-57ee-b125-d7c6939b6bd6",
                            "uid": "blt537c18766b7944ca",
                            "title": "Brand Champion Overview",
                            "description": "Unleash the inferno within. Set your lane aflame with Brand, the Burning Vengeance—coming to Wild Rift on September 8 PT.",
                            "link": {
                                "url": "/news/game-updates/brand-champion-overview/"
                            },
                            "date": "2021-09-07T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt0567ffb6010d3f3a/6131b0dc8f8f7644bdf4ea30/WR_Brand_ChampOverview_Thumbnail_1280x720-NO_TEXT.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Brand",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/brand/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=y_BLBgH3VbY",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "f8a9653a-147f-5a68-b265-f35ca7224785",
                            "uid": "blta80022e7b6d7f8d8",
                            "title": "New Permanent Game Mode: ARAM",
                            "description": "The testing is over—All Random All Mid will be available as a permanent mode starting September 9!",
                            "link": {
                                "url": "/news/announcements/new-permanent-game-mode-aram/"
                            },
                            "date": "2021-09-06T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf9f082ded694503b/61319c2fa9655d098c7cd8ba/WR_ARAM_PermanentBanner_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "ARAM",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/aram/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b7c66280-ded1-5d0b-a905-aeeca67a7e24",
                            "uid": "blt9fbe91bff67e9b5b",
                            "title": "Wild Rift Patch Notes 2.4b",
                            "description": "Welcome to Patch 2.4b where the Frost and Flame event brings two new champions to the Rift and inspires a host of brisk and broiling balance updates.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-4b/"
                            },
                            "date": "2021-09-01T01:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd9234e0f1c532c86/612866054d39656a33b099ff/083121_Patch24b_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ff4655fc-792c-5986-bdd4-d9bf92316f54",
                            "uid": "bltd6cd2be953c341a5",
                            "title": "Arcade",
                            "description": "Get ready to press start: the Arcade is open! Complete missions and unlock 8-bit rewards.",
                            "link": {
                                "url": "/news/announcements/arcade/"
                            },
                            "date": "2021-08-25T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1af64ca8bbde21f4/6124056c8e16ab655b344e79/WR-News-Website_Article_Banner-Arcade_Event.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500012617181",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ab87ad89-5240-5316-9be7-b95a36d89015",
                            "uid": "blt26896ac55edb53fa",
                            "title": "Regional Price Changes and Global Bonus Currency",
                            "description": "We’re updating pricing in some regions on September 8th.",
                            "link": {
                                "url": "/news/game-updates/regional-price-changes-and-global-bonus-currency/"
                            },
                            "date": "2021-08-23T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt0760068b147447f0/6112f1f6f57b2f35921c6756/price-change-header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "e2eeffe7-8c90-5e7f-b0cb-9f4bb280dbb8",
                            "uid": "blt34daf79cab8b8f00",
                            "title": "Wild Rift Patch Notes 2.4a",
                            "description": "Ruination has been conquered as the Sentinels have successfully defeated Viego. There’s no better way to celebrate than with the most adorable critters of Runeterra: Poros! Fly with the fluft as they swoop in with balance changes for a handful of champions and items on the Rift.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-4a/"
                            },
                            "date": "2021-08-18T01:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt13b4c1043c0febaf/6115656a60bb0f13c2eac9e7/081721-Patch_2.4a-Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "d966160c-fbb0-52ce-8291-f7a73ed8f754",
                            "uid": "blt3aaf40f5742558f2",
                            "title": "Join the Fluft!",
                            "description": "Good things come in flufts! Join our poro pals and complete missions to earn rewards.",
                            "link": {
                                "url": "/news/announcements/join-the-fluft/"
                            },
                            "date": "2021-08-17T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt91cd8754943cc4ab/61155dc76d7e9614918af7ab/WR-News-Website_Article_Banner-Fluft_Event.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500012617221",
                            "showTableOfContents": false
                        },
                        {
                            "id": "d4993a99-0ac6-558d-a377-a74b9a764a7b",
                            "uid": "bltcdef0197b08e46b9",
                            "title": "Thresh Unbound: A Night at the Inn",
                            "description": "Now unbound from the Black Mist, Thresh is free to roam wherever he likes—reaping poor souls all along the way.",
                            "link": {
                                "url": "/news/announcements/thresh-unbound-a-night-at-the-inn/"
                            },
                            "date": "2021-08-12T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt5684a529a55b072b/6112e9057b2aa336d6ba4184/WR_Sentinels_ThreshCG_Thumbnail_TEXTLESS_1280x720_v2.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Thresh",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/thresh/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=1ED2dnPJXYU",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "64d33a36-29f1-5f8c-81a8-56e9a8e3efaa",
                            "uid": "blt6e70e09a5e8030f6",
                            "title": "Thresh Champion Overview",
                            "description": "No one escapes. Shackle your enemies with Thresh, the Chain Warden—harvesting souls in Wild Rift on August 13, 00:01 UTC.",
                            "link": {
                                "url": "/news/game-updates/thresh-champion-overview/"
                            },
                            "date": "2021-08-11T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt58525feada0c9fc0/61006d83429fb95880e5aa03/WR_Thresh_ChampOverview_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Thresh",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/thresh/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=52nII6q_OXM",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "d1efcf36-1963-5909-9984-956667a4f860",
                            "uid": "bltcc6cbad0eac94437",
                            "title": "Sentinels of Light: Steadfast Heart Issue 6",
                            "description": "Ready or not, the time has come. What awaits the Sentinels in the Mist? Runeterra is forever changed in Issue 6.",
                            "link": {
                                "url": "/news/announcements/sentinels-of-light-steadfast-heart-issue-6/"
                            },
                            "date": "2021-08-11T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3abe65fc134ad6a0/610200befaf95f59f8ec65b7/WR_Sentinels_ComicPromo6_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Comics",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/comics/"
                                    }
                                },
                                {
                                    "title": "Sentinels of Light",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/sentinels-of-light/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://universe.leagueoflegends.com/en_US/comic/sentinelsoflight/issue-6/",
                            "showTableOfContents": false
                        },
                        {
                            "id": "baee128d-f6c0-5b64-8898-6d38f2962531",
                            "uid": "blt1345ff32ad034f80",
                            "title": "Sentinels of Light: Steadfast Heart Issue 5",
                            "description": "Light can be found in unexpected places. Meet the last Sentinel recruit in Issue 5.",
                            "link": {
                                "url": "/news/announcements/sentinels-of-light-steadfast-heart-issue-5/"
                            },
                            "date": "2021-07-30T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3d01ef104fdcae32/61005e881929bc58854d2ef2/WR_Sentinels_ComicPromo5_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Comics",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/comics/"
                                    }
                                },
                                {
                                    "title": "Sentinels of Light",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/sentinels-of-light/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://universe.leagueoflegends.com/en_US/comic/sentinelsoflight/issue-5/",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4cb74a13-245c-5b7d-991f-28f6615d21df",
                            "uid": "blt304481e96f216f95",
                            "title": "Wild Pass S2",
                            "description": "Say hello to Hexplorer Teemo and the Wild Pass S2, now with more rewards than ever before! Watch the video to learn more.",
                            "link": {
                                "url": "/news/announcements/wild-pass-s2/"
                            },
                            "date": "2021-07-30T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt01b1bccc700bf732/60ff2faeda6f75588bd925e5/WR_WildPass2_Teemo_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "TEEMO",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/teemo/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=U-FVxG1SZL4",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "1d1c7305-6d3f-5972-92dd-4e563a62db04",
                            "uid": "bltab2f65e4d12bf8f3",
                            "title": "Wild Rift Patch Notes 2.4",
                            "description": "Patch 2.4 brings 19 new or reworked in-game items, Ranked Season 3, champion bans, a brand new Wild Pass, automatic highlights, gold and system adjustments, matchmaking improvements… and of course, the Rogue Sentinel himself, Akshan.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-4/"
                            },
                            "date": "2021-07-27T23:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1cfed637cf016f70/60f8afb43f40e5481e85b9e8/07272021_WRPatchNotes24_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "AKSHAN",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/akshan/"
                                    }
                                },
                                {
                                    "title": "AMUMU",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/amumu/"
                                    }
                                },
                                {
                                    "title": "ASHE",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/ashe/"
                                    }
                                },
                                {
                                    "title": "FIZZ",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/fizz/"
                                    }
                                },
                                {
                                    "title": "GRAVES",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/graves/"
                                    }
                                },
                                {
                                    "title": "KATARINA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/katarina/"
                                    }
                                },
                                {
                                    "title": "LUCIAN",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/lucian/"
                                    }
                                },
                                {
                                    "title": "Rengar",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/rengar/"
                                    }
                                },
                                {
                                    "title": "VARUS",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/varus/"
                                    }
                                },
                                {
                                    "title": "ZIGGS",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/ziggs/"
                                    }
                                },
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "e91d43fb-4423-519b-b76d-0cca3aed73e1",
                            "uid": "blt677496d4dd39bbfe",
                            "title": "/dev Patch 2.4 Items Preview",
                            "description": "Patch 2.4 brings updated itemization to provide more variety among item builds in the dragon lane.",
                            "link": {
                                "url": "/news/dev/dev-patch-2-4-items-preview/"
                            },
                            "date": "2021-07-24T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd2db90a6578f79fa/60f74f7940219d481f074c53/dev-24-items-banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "91d81c2c-255c-57fe-8e1e-f2663ed239ba",
                            "uid": "blt186311603f6d6098",
                            "title": "Sentinels of Light: Steadfast Heart Issue 4",
                            "description": "An apocalypse turns enemies to allies. Read Issue 4 of the Sentinels’ story, out now.",
                            "link": {
                                "url": "/news/announcements/sentinels-of-light-steadfast-heart-issue-4/"
                            },
                            "date": "2021-07-23T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt6afeb80284408100/60f5e0601929bc58854d00ff/WR_Sentinels_ComicPromo4_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Sentinels of Light",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/sentinels-of-light/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://universe.leagueoflegends.com/en_US/comic/sentinelsoflight/issue-4/",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4d82efd0-f26f-5f86-af21-adf831d3db43",
                            "uid": "blt2739d2a9e56581ea",
                            "title": "Akshan Champion Overview",
                            "description": "Vengeance never looked so good! Style on some scoundrels with Akshan, the Rogue Sentinel, coming to Wild Rift on July 27 PT.",
                            "link": {
                                "url": "/news/game-updates/akshan-champion-overview/"
                            },
                            "date": "2021-07-22T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd19512d25d0c157c/60f2442add52f525eb2c0070/WR_Akshan_ChampOverview_banner_1280x720.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "AKSHAN",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/akshan/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=q2W6i2XG12Y",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "7c63f31d-6b2f-5d95-b7ad-27186888ee4c",
                            "uid": "blte3a0f7b023782455",
                            "title": "/dev: Patch 2.4 Ranked Updates",
                            "description": "Patch 2.4 is just around the corner and brings some major changes! Say goodbye to Promotion Matches, and hello to bans and more. Join the dev team as they shed light on their reasoning behind these updates to Ranked.",
                            "link": {
                                "url": "/news/dev/dev-patch-2-4-ranked-updates/"
                            },
                            "date": "2021-07-22T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt6919cd6fa4642872/60f63e5b8af675613a4ae7bc/2.4_Ranked_Changes_Header_-_Vayne.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ca37fb78-28a8-5d13-9250-8d2fd1b28088",
                            "uid": "blt93f717170d09ac1e",
                            "title": "/dev: Wild Rift Esports",
                            "description": "We’ve made plenty of announcements about our tournaments, but haven’t spoken too much about our goals. Join the Head of Wild Rift esports as he reveals his vision and philosophy for the game's competitive ecosystem.",
                            "link": {
                                "url": "/news/dev/dev-wild-rift-esports/"
                            },
                            "date": "2021-07-20T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt7fd8f5c877882fdd/60f2184e6a54304c40591e39/EU_LCS_Summer_Finals_2017_MSF_Vs_G2.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9f9eb210-ab5f-5661-9fab-65695c7ef3bc",
                            "uid": "bltf3b79482d6d0180d",
                            "title": "Wild Rift Real Talk: July 2021",
                            "description": "Mirross shares the current development focuses for the team. Read on for updates around matchmaking fairness, lag and ping spikes, win trading, and more things to do in Wild Rift.",
                            "link": {
                                "url": "/news/dev/wild-rift-real-talk-july-2021/"
                            },
                            "date": "2021-07-17T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt861b9b551a167b75/60ef59f1dd52f525eb2bf1ba/WR_CB2_RealTalkArticle2_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "7950a4e5-5ea4-5456-a0f1-3cfca61873f6",
                            "uid": "blt3b7b43abf3b007dc",
                            "title": "/dev: Behind Wild Rift Events",
                            "description": "Events can take up to a year of planning, design and development. Get a glimpse behind the scenes about how an event in Wild Rift gets made!",
                            "link": {
                                "url": "/news/dev/dev-behind-wild-rift-events/"
                            },
                            "date": "2021-07-16T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltcc7eeaaf7925f6c8/60f0bc812a120025e58477d9/LOLWR_devEvents_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Events",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/events/"
                                    }
                                },
                                {
                                    "title": "Lunar Beast",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/lunar-beast/"
                                    }
                                },
                                {
                                    "title": "Masters of the Hunt",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/masters-of-the-hunt/"
                                    }
                                },
                                {
                                    "title": "Broken Blades",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/broken-blades/"
                                    }
                                },
                                {
                                    "title": "Sentinels of Light",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/sentinels-of-light/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "939a8a59-8a77-5af8-bbf5-b37f586ccb5f",
                            "uid": "bltfd4f593dc61dc3e8",
                            "title": "/dev: Thresh Re-Fleshed and the Viego No-Go",
                            "description": "Much like living in Runeterra right now, developing League comes with its fair share of surprises and challenges. Here are two behind-the-scenes stories about bringing Thresh and Viego to Wild Rift.",
                            "link": {
                                "url": "/news/dev/dev-thresh-re-fleshed-and-the-viego-no-go/"
                            },
                            "date": "2021-07-16T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd985a77336ff0d63/60ee1d81b1bfa71471c7d394/071621-ThreshViego-Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Viego",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/viego/"
                                    }
                                },
                                {
                                    "title": "Thresh",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/thresh/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "de78ffed-c05c-585f-91f5-bc9f0cf84005",
                            "uid": "bltf9919bed85135dc4",
                            "title": "/dev diary: Patch 2.4 Preview",
                            "description": "Game director Alan “Mirross” Moore is (briefly) saved from Ruination to shed some light on the upcoming Patch 2.4, releasing at the end of July.",
                            "link": {
                                "url": "/news/dev/dev-diary-patch-2-4-preview/"
                            },
                            "date": "2021-07-16T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt27fe0ec13ea07d2d/60ede6a72a120025e58467f7/WR_July2021_DevDiary_Thumbnail_1280x720-TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=UPLgACUv8iI",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "1bed9d5c-b80b-5697-93d1-95b153bdbd83",
                            "uid": "bltb83d94c534b6a0cd",
                            "title": "Sentinels of Light: Steadfast Heart Issue 3",
                            "description": "Who answers the Sentinel’s call? Pierce the dark in Issue 3.",
                            "link": {
                                "url": "/news/announcements/sentinels-of-light-steadfast-heart-issue-3/"
                            },
                            "date": "2021-07-15T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltfa4c995ab2b3d5fa/60edd6e22a120025e584677f/WR_Sentinels_ComicPromo2_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Sentinels of Light",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/sentinels-of-light/"
                                    }
                                },
                                {
                                    "title": "Comics",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/comics/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://universe.leagueoflegends.com/en_US/comic/sentinelsoflight/issue-3/",
                            "showTableOfContents": false
                        },
                        {
                            "id": "087da099-2359-549a-90c8-6b18cdf072d0",
                            "uid": "blt66ae56c0a63728b1",
                            "title": "Wild Rift Season 2 Ends July 26",
                            "description": "Heads up! We’re extending the current ranked season until July 26 12:00pm PDT. Season 3 will begin shortly after, but we’re anticipating a few display issues with Ranked progression and Fortitude.",
                            "link": {
                                "url": "/news/announcements/wild-rift-season-2-ends-july-26/"
                            },
                            "date": "2021-07-14T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8d9785eeff58b515/60ec866e2a120025e58460e6/Glorious-Jinx-Ranked.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "1be49c96-ee62-580f-b09c-cb1d8bed50b8",
                            "uid": "blt73a116d5ba820f97",
                            "title": "Wild Rift Patch Notes 2.3c",
                            "description": "We’re at the last balance patch of the 2.3 cycle, and there’s a chill in the air... Runeterra is facing almost certain doom, and only a select few have the power to push it back once and for all!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-3c/"
                            },
                            "date": "2021-07-14T01:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt2b495ee4364da18a/60e64a08e743d53d6a6554e9/2.3c-Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                },
                                {
                                    "title": "EZREAL",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/ezreal/"
                                    }
                                },
                                {
                                    "title": "GRAVES",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/graves/"
                                    }
                                },
                                {
                                    "title": "KATARINA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/katarina/"
                                    }
                                },
                                {
                                    "title": "LUX",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/lux/"
                                    }
                                },
                                {
                                    "title": "AMUMU",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/amumu/"
                                    }
                                },
                                {
                                    "title": "BRAUM",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/braum/"
                                    }
                                },
                                {
                                    "title": "EVELYNN",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/evelynn/"
                                    }
                                },
                                {
                                    "title": "FIORA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/fiora/"
                                    }
                                },
                                {
                                    "title": "JANNA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/janna/"
                                    }
                                },
                                {
                                    "title": "Leona",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/leona/"
                                    }
                                },
                                {
                                    "title": "Rakan",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/rakan/"
                                    }
                                },
                                {
                                    "title": "SONA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/sona/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "17d860be-e855-5afe-9ca5-13135706dd7a",
                            "uid": "blt668fc3014e9ffc33",
                            "title": "Sentinels of Light Music Theme",
                            "description": "Listen to the official skins theme for Sentinels of Light 2021.",
                            "link": {
                                "url": "/news/announcements/sentinels-of-light-music-theme/"
                            },
                            "date": "2021-07-13T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltc4799960ef487cf2/60e90d4739c36a2747aa55fd/WR_Sentinels_MusicThemeXPOST_Banner_v2.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Sentinels of Light",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/sentinels-of-light/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=DhGySWN9wps",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b7d6571b-2bd5-5564-b8ac-15ad7c57487f",
                            "uid": "blt73c967cb8c647948",
                            "title": "Shine with the Sentinels of Light",
                            "description": "Become a beacon in darkness with social banners, wallpapers, and more.",
                            "link": {
                                "url": "/news/announcements/shine-with-the-sentinels-of-light/"
                            },
                            "date": "2021-07-09T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt56728b26bfa218aa/60e662052eb77d200faca195/WR_Sentinels_Fankit_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Senna",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/senna/"
                                    }
                                },
                                {
                                    "title": "LUCIAN",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/lucian/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "3459c6d1-b393-5100-82b9-b719b44f4b8a",
                            "uid": "bltde8656e2507255ab",
                            "title": "Sentinels of Light: Steadfast Heart Issue 1 and 2",
                            "description": "Read Issues 1 and 2 of Sentinels of Light: Steadfast Heart, our newest comic series.",
                            "link": {
                                "url": "/news/announcements/sentinels-of-light-steadfast-heart-issue-1-and-2/"
                            },
                            "date": "2021-07-09T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd37d575a20dcfcc2/60e54a26e743d53d6a654d46/070821-WR_Sentinels_Comic_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Sentinels of Light",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/sentinels-of-light/"
                                    }
                                },
                                {
                                    "title": "Comics",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/comics/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://universe.leagueoflegends.com/en_US/comic/sentinelsoflight/issue-1/0",
                            "showTableOfContents": false
                        },
                        {
                            "id": "64c66c64-5637-578c-af77-f203ebdeee6c",
                            "uid": "bltf61ede6fb3980f1d",
                            "title": "Sentinels of Light Event Trailer",
                            "description": "Stand together in the light or fall alone to darkness.",
                            "link": {
                                "url": "/news/announcements/sentinels-of-light-event-trailer/"
                            },
                            "date": "2021-07-09T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltc359a048abcbb049/60e4ef167df6873288cd86ce/WR_Sentinels_EventTrailer_banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=gH5zBBHE47w",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "8589a2d4-6a6b-557b-8fb7-9396460497c2",
                            "uid": "blt58972f3debdcf75c",
                            "title": "Social Impact: The Sentinels Initiative",
                            "description": "Nominate a cause or nonprofit for a chance to win $10,000 for charity from the Riot Games Social Impact Fund.",
                            "link": {
                                "url": "/news/announcements/social-impact-the-sentinels-initiative/"
                            },
                            "date": "2021-07-08T21:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt0693d13aa89af1f4/60e4ebcee7a80f3c2a869de6/WR_Sentinels_KarmaMicrositePromo_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://na.leagueoflegends.com/en/featured/events/sentinels-initiative-2021",
                            "showTableOfContents": false
                        },
                        {
                            "id": "2577be57-9344-5b52-8b74-ad585a4545f3",
                            "uid": "bltdc6d998dffc667be",
                            "title": "Sentinels of Light",
                            "description": "Join Lucian, Senna, and the other Sentinels of Light in the fight against Ruination.",
                            "link": {
                                "url": "/news/announcements/sentinels-of-light/"
                            },
                            "date": "2021-07-08T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte0306aed63c4499e/60e5108c41f53e1ed05e2214/WR_Sentinels_EventArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Senna",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/senna/"
                                    }
                                },
                                {
                                    "title": "LUCIAN",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/lucian/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9d8ea077-cc40-5f88-9086-4454b9468577",
                            "uid": "blt98a08077de2b6fdf",
                            "title": "Sentinels of Light: Before Dawn",
                            "description": "No one fights alone in the dark. Watch the rise of the Sentinels’ newest recruit.",
                            "link": {
                                "url": "/news/announcements/sentinels-of-light-before-dawn/"
                            },
                            "date": "2021-07-08T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt40ecbdf34c49cc42/60e523cb0f2b3833d0f69ebd/070821-WR_Sentinels_CG1_XPOST_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=tW6eHnIzpQM",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "e44521b7-269a-57ef-960d-78ec00e5a3b1",
                            "uid": "blt0d7cd72b4dfe717a",
                            "title": "Win Trading Update - Matchfixing",
                            "description": "We’re updating our approach towards win trading and matchfixing in Wild Rift.",
                            "link": {
                                "url": "/news/announcements/win-trading-update-matchfixing/"
                            },
                            "date": "2021-07-08T02:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte2e7438572c368e9/60d62bb3ee6a945af81e8425/6-30-21-win-trading-update.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9ec7e55c-6e48-54db-b84a-5aeae8c07324",
                            "uid": "blt23b9f4e85e706866",
                            "title": "Senna Champion Overview",
                            "description": "No shadow without light. Shine against the dark with Senna, the Redeemer—freeing new souls in Wild Rift on July 8 PT.",
                            "link": {
                                "url": "/news/game-updates/senna-champion-overview/"
                            },
                            "date": "2021-07-07T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt57d1ca78fce25f3e/60de55d59ef42b48592722e9/WR_Senna_ChampOverview_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Senna",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/senna/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=e4f_B46QvMs",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "388bdeb3-0c4f-5d93-b512-3e8c721ebc9d",
                            "uid": "bltc0656c6a7d154328",
                            "title": "Sentinels of Light: The Story So Far",
                            "description": "Here’s your guide to the story so far: everything you’ll need to know for the Sentinels of Light event.",
                            "link": {
                                "url": "/news/announcements/sentinels-of-light-the-story-so-far/"
                            },
                            "date": "2021-07-06T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta2498e493faf76e9/60dcbe9ea1ff3159b5938e52/WR_Sentinels_Chapter0Recap_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Senna",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/senna/"
                                    }
                                },
                                {
                                    "title": "LUCIAN",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/lucian/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=RAw5aTmf9Og",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "c453918a-f0aa-54f8-ad2a-676cd6fe9fe8",
                            "uid": "blt25da017dc0e6b291",
                            "title": "Lucian Champion Overview",
                            "description": "Light never rests. Hunt down the shadows with Lucian, the Purifier—shooting his way into Wild Rift on July 8 PT.",
                            "link": {
                                "url": "/news/game-updates/lucian-champion-overview/"
                            },
                            "date": "2021-07-06T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf95abd4894d9e190/60dbe9c74b10c259bbae5c5f/WR_Lucian_ChampOverview_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=m0k87NEMs8k",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b89efbe4-f3ba-54b7-b55b-95ad5329b050",
                            "uid": "blt60b9e572a54bacb7",
                            "title": "Enter the Sentinel Outpost",
                            "description": "The Sentinels seek the world's strongest protectors. Will you heed their call?",
                            "link": {
                                "url": "/news/announcements/enter-the-sentinel-outpost/"
                            },
                            "date": "2021-07-05T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltfbef3c6533377ff8/60dd8aa196b48063c70744c4/070521_WR_Sentinels_OutpostPromo_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://sentinelsunite.wildrift.leagueoflegends.com/",
                            "showTableOfContents": false
                        },
                        {
                            "id": "0857859c-4206-5658-9c26-5741c8a04300",
                            "uid": "blt843da0f2e3a34c33",
                            "title": "Sessions: Vi - Out Now",
                            "description": "Introducing Sessions: Vi, a collection of free-to-use music for creators.",
                            "link": {
                                "url": "/news/community/sessions-vi-out-now/"
                            },
                            "date": "2021-07-02T15:15:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt255f9bebc6f2e47e/60dcc3025cad665588258f3e/SESSIONS-WEB-HEADER.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Community",
                                    "url": {
                                        "url": "/news/community/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "VI",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/vi/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://youtu.be/G8a45UZJGh4",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "5fe6f3d5-e46d-5415-a1e5-094f963c8447",
                            "uid": "blta79ffc86fca5a1e3",
                            "title": "Sessions",
                            "description": "A collection of music that anyone can use in their content without concern of copyright strikes.",
                            "link": {
                                "url": "/news/community/sessions/"
                            },
                            "date": "2021-07-02T15:15:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta9245dc0b9a0d10d/60dcf8ba11bee665103e363c/Sessions_Smaller_Word_Mark_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Community",
                                    "url": {
                                        "url": "/news/community/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://sessions.riotgames.com",
                            "showTableOfContents": false
                        },
                        {
                            "id": "e21d6aa5-3cda-5df5-bab2-6c135e250eeb",
                            "uid": "blt3ec42f4c83f806f5",
                            "title": "Ruination: The End Begins",
                            "description": "The Black Mist consumes all, and Sentinels flicker in the dark. Explore the legend of Ruination in this mobile VR video.",
                            "link": {
                                "url": "/news/announcements/ruination-the-end-begins/"
                            },
                            "date": "2021-06-30T12:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt63138224bcbb8554/60d28653b930a53616fa4b7c/WR_Sentinels_ReturnOfTheKing_Thumbnail_1280x720_TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=qwPUfqA4xTg",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "317bbfd2-c5d7-555d-a888-53b5a2fc702b",
                            "uid": "blte71efbcc045cdd86",
                            "title": "Wild Rift Patch Notes 2.3b",
                            "description": "Beware the Black Mist! Patch 2.3b has arrived with champion changes, ARAM balancing, and terrible Ruination. Prepare to fight the darkness as the Sentinels of Light event begins in a few days!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-3b/"
                            },
                            "date": "2021-06-30T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1b09c2c2dfb43e5f/60d391ca9b520349ac9d1fab/6_29_2021_Patch23bArticle_banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                },
                                {
                                    "title": "GAREN",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/garen/"
                                    }
                                },
                                {
                                    "title": "FIZZ",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/fizz/"
                                    }
                                },
                                {
                                    "title": "Irelia",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/irelia/"
                                    }
                                },
                                {
                                    "title": "JINX",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/jinx/"
                                    }
                                },
                                {
                                    "title": "Kha'Zix",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/khazix/"
                                    }
                                },
                                {
                                    "title": "Rammus",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/rammus/"
                                    }
                                },
                                {
                                    "title": "RIVEN",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/riven/"
                                    }
                                },
                                {
                                    "title": "VAYNE",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/vayne/"
                                    }
                                },
                                {
                                    "title": "KATARINA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/katarina/"
                                    }
                                },
                                {
                                    "title": "TWISTED FATE",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/twisted-fate/"
                                    }
                                },
                                {
                                    "title": "ZIGGS",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/ziggs/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "d865ee6d-6014-5534-810c-8615ae54c711",
                            "uid": "bltb125c3f60fd3b732",
                            "title": "Pool Party",
                            "description": "Dive into the Pool Party! Come make a splash and earn some poolside rewards.",
                            "link": {
                                "url": "/news/announcements/pool-party/"
                            },
                            "date": "2021-06-17T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt61e17fadb25b7fe1/60c3a1e136617c1194b6e726/WR-News-Website_Article_Banner-POOL_PARTY.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500003323402",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b6f27069-a929-5a2f-b591-bed9e73ea179",
                            "uid": "blt9e43a26a0571e113",
                            "title": "Wild Rift Patch Notes 2.3a",
                            "description": "Surf’s up! Patch 2.3a is here, featuring a host of balance changes for champions, items, summoner spells, and more. Dive into the festivities and make a splash at the Pool Party event!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-3a/"
                            },
                            "date": "2021-06-16T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb266101470d5a82e/60c3cd723a3d1a5f519ec8e1/Patch23a_Header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                },
                                {
                                    "title": "Ahri",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/ahri/"
                                    }
                                },
                                {
                                    "title": "EVELYNN",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/evelynn/"
                                    }
                                },
                                {
                                    "title": "JANNA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/janna/"
                                    }
                                },
                                {
                                    "title": "KATARINA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/katarina/"
                                    }
                                },
                                {
                                    "title": "Leona",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/leona/"
                                    }
                                },
                                {
                                    "title": "WUKONG",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/wukong/"
                                    }
                                },
                                {
                                    "title": "XIN ZHAO",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/xin-zhao/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "8ff1361b-8d26-5aaa-9841-644e3b878782",
                            "uid": "blt20b74e54e3617743",
                            "title": "Broken Blades",
                            "description": "A blade can always be sharper. Choose Irelia or Riven, then complete their missions to unlock unique rewards.",
                            "link": {
                                "url": "/news/announcements/broken-blades/"
                            },
                            "date": "2021-06-02T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta77d1caab1035c1c/60b176a447ebc9669e1e9143/WR_BrokenBlades_EventArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9da1f9ed-a7f8-5180-b79c-405528569380",
                            "uid": "blt20e76d940d49efa8",
                            "title": "Broken Blades Champion Trailer",
                            "description": "Your weapon is only as powerful as your will. Hone your skills with Irelia and Riven during the Broken Blades event.",
                            "link": {
                                "url": "/news/game-updates/broken-blades-champion-trailer/"
                            },
                            "date": "2021-06-02T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt26478e4b88a12715/60b68877cda43e2520907713/WR_BrokenBladesMiniCG_Thumbnail_1280x720_TEXTLESS.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RIVEN",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/riven/"
                                    }
                                },
                                {
                                    "title": "Irelia",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/irelia/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=bnK_rFtp12A",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "3ff1318e-65a5-597f-bb58-d09eeada87d4",
                            "uid": "blt352660a8279c6026",
                            "title": "Wild Rift Patch Notes 2.3",
                            "description": "Patch 2.3 is here, featuring Riven, Irelia, the Broken Blades event, brand new runes, fun ways to level up with friends, a suite of network tools, an Akali rework, more Arcade skins, and the return of ARAM!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-3/"
                            },
                            "date": "2021-06-02T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt06ebf0f851ad5d47/60bea828f77af428924b97c4/WR_patch-notes_Article_Banner_RIVIREL_v2.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "f8d0e8f2-18cf-524c-ab0f-4cdab095346c",
                            "uid": "blt9e28746a54255235",
                            "title": "Irelia Champion Overview",
                            "description": "Battle has a rhythm all its own. Dance across the battlefield with Irelia, the Blade Dancer—surging soon into Wild Rift.",
                            "link": {
                                "url": "/news/game-updates/irelia-champion-overview/"
                            },
                            "date": "2021-06-01T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt982dd03a7d87d848/60b036f347ebc9669e1e8aa9/WR_Irelia_ChampOverview_Thumbnail_NoText_1280x720.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Irelia",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/irelia/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=pu8z9zJFHVg",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "49454310-e059-59be-ac2a-3e0e4ad257fc",
                            "uid": "blt99e014578d48aae2",
                            "title": "/dev: Irelia Dances Her Way to Wild Rift",
                            "description": "Irelia hits the Rift soon! Join the game designer behind her original rework for a look at how we adapted the Blade Dancer for Wild Rift.",
                            "link": {
                                "url": "/news/dev/dev-irelia-dances-her-way-to-wild-rift/"
                            },
                            "date": "2021-05-31T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt87474ffd8bf7b7ba/60af2fa0eab8ca74ace876b5/Irelia_Splash.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Irelia",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/irelia/"
                                    }
                                },
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "94fbc64a-12d9-57ba-8c26-64100a01de0b",
                            "uid": "bltb0c641a7a86138d0",
                            "title": "/dev diary: Patch 2.3 Preview",
                            "description": "Join Alan “RiotMirross” Moore for a rundown of the latest patch coming to Wild Rift.",
                            "link": {
                                "url": "/news/dev/dev-diary-patch-2-3-preview/"
                            },
                            "date": "2021-05-29T12:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt80cd93150c0e24fc/60ad646477e996669f49f554/WR_May2021_DevDiary_Thumbnail_1280x720_web_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=L-XG9Y2w2Hg",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "980c8f6d-8cb5-56d1-b2d6-6d5d189a782e",
                            "uid": "blte3477af624271828",
                            "title": "/dev: Runes in Patch 2.3",
                            "description": "Patch 2.3 brings rune updates to provide more choice and variety in your pre-game setups.",
                            "link": {
                                "url": "/news/dev/dev-runes-in-patch-2-3/"
                            },
                            "date": "2021-05-26T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltb68db35c603fe279/60ac188f6a7d7e6562205b79/runes-article-banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Runes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/runes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "13bc2dc9-80d0-5b2b-9d22-90241b37aa83",
                            "uid": "blt7984f3dd9cde6d27",
                            "title": "Pride",
                            "description": "To all the LGBTQIA+ players who have enriched our community with your vibrant colors: we stand with you. You're always invited to fly your flag in Wild Rift.",
                            "link": {
                                "url": "/news/game-updates/pride/"
                            },
                            "date": "2021-05-24T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf9700f628a72af8f/60a48b6cb80011658d7f510a/Pride_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500002620861",
                            "showTableOfContents": false
                        },
                        {
                            "id": "37305acd-afa8-5697-86b1-eb22ce369d3a",
                            "uid": "blt4aaa00e8aba13b16",
                            "title": "/dev: Next Steps for ARAM",
                            "description": "With All Random All Mid now at the end of its first testing phase, we wanted to share some thoughts about the mode so far, and what’s up next.",
                            "link": {
                                "url": "/news/dev/dev-next-steps-for-aram/"
                            },
                            "date": "2021-05-20T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt541b9b6032dac049/60a41995ae6c8a6e290a5d23/Patch22_Aram3.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "ARAM",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/aram/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "00d2971f-425c-5a9c-95b9-3f05d00a36f6",
                            "uid": "blt85823dd58e3bdfa4",
                            "title": "Renekton Champion Overview",
                            "description": "Destruction approaches. Show them the jaws of death with Renekton, the Butcher of the Sands—rampaging soon into Wild Rift.",
                            "link": {
                                "url": "/news/game-updates/renekton-champion-overview/"
                            },
                            "date": "2021-05-12T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltcc93a3b06026e9de/609994d101ff5a556925c8d3/WR_Renekton_ChampOverview_Thumbnail_textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RENEKTON",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/renekton/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=-NA7wSbbFI0",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9af5d6f2-94fa-567c-8fef-7e29f89ff32c",
                            "uid": "blt773ea8c7a3c05187",
                            "title": "Wild Rift Patch Notes 2.2c",
                            "description": "The last balance patch of the 2.2 cycle is here! Renekton, Blood Moon skins, nerfs to Evelynn, and a brand new Nemesis Duel. Welcome to Patch 2.2c!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-2c/"
                            },
                            "date": "2021-05-12T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta955ab0cddef6d94/609580f843430a55689b17dd/Patch22c_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "20215f49-ab00-555f-add1-d3060ba93b22",
                            "uid": "blt9961376a48b27bdb",
                            "title": "Bad Blood Nemesis Duel",
                            "description": "Nasus and Renekton are taking their feud to the Rift! Check out our player support article for all the details on the new Nemesis Duel mechanic, Bad Blood.",
                            "link": {
                                "url": "/news/announcements/bad-blood-nemesis-duel/"
                            },
                            "date": "2021-05-12T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt298a220abcf95779/6095d49f43430a55689b19a9/WR-Renekton_BadBlood-News-Website_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "RENEKTON",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/renekton/"
                                    }
                                },
                                {
                                    "title": "NASUS",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/nasus/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500004967641",
                            "showTableOfContents": false
                        },
                        {
                            "id": "51bf6c0f-00d6-5542-b6ee-11527c05df9f",
                            "uid": "blt2e9e1d5af2449b00",
                            "title": "Masters of the Hunt",
                            "description": "Savage instinct? Or cold-blooded evolution? Choose a side and see who is predator and who is prey.",
                            "link": {
                                "url": "/news/announcements/masters-of-the-hunt/"
                            },
                            "date": "2021-05-06T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltc099a7b4a92515f3/60919d77162d47104df4b231/WR_TheHunt_EventArticle_Banner_v3.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Rengar",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/rengar/"
                                    }
                                },
                                {
                                    "title": "Kha'Zix",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/khazix/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "981a712c-aec3-5c2c-8bb8-e14908668507",
                            "uid": "blt8780072a22f42c84",
                            "title": "Masters of the Hunt Event Trailer",
                            "description": "Two hunters. One deadly game.",
                            "link": {
                                "url": "/news/announcements/masters-of-the-hunt-event-trailer/"
                            },
                            "date": "2021-05-06T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte900f90ce06424cb/6090ab501022211019ccca55/WR_TheHunt_EventTrailer_Thumbnail_1280x720_v2_textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Kha'Zix",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/khazix/"
                                    }
                                },
                                {
                                    "title": "Rengar",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/rengar/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=hNtEISWPIXk",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b18fadb0-a784-51da-acb7-1b305018f2d7",
                            "uid": "blt7e0fc6d7fa6c4515",
                            "title": "Rep Your Hunter",
                            "description": "Get all the stuff you need to show off your favorite hunter—Kha’Zix or Rengar.",
                            "link": {
                                "url": "/news/announcements/rep-your-hunter/"
                            },
                            "date": "2021-05-06T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4c05e64c66a4f675/6092c998b9440f10206ec62a/5_5_2021_KvR_Socialkit_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Kha'Zix",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/khazix/"
                                    }
                                },
                                {
                                    "title": "Rengar",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/rengar/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "981a4543-cff5-58ed-966e-0d2da6632672",
                            "uid": "bltd8e6d6f874780ff8",
                            "title": "Kha'Zix Champion Overview",
                            "description": "Change is good. Evolve into the ultimate predator with Kha'Zix, the Voidreaver—soon feasting in Wild Rift.",
                            "link": {
                                "url": "/news/game-updates/kha-zix-champion-overview/"
                            },
                            "date": "2021-05-04T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltfd6fe95a6ca3e712/6089f3b771e79f1024c992a6/5_03_21_KhaZix_ChampOverview_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Kha'Zix",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/khazix/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=IIEiz7BFgKY",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "e9b67312-8251-5a7d-a726-051ceee0e883",
                            "uid": "bltec19a2f2035bcb11",
                            "title": "Rengar Champion Overview",
                            "description": "No escape. Hunt them all down with Rengar, the Pridestalker—prowling soon into Wild Rift.",
                            "link": {
                                "url": "/news/game-updates/rengar-champion-overview/"
                            },
                            "date": "2021-05-03T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd1909d343dcc1850/6089ed6571e79f1024c9929c/WR_Rengar_ChampOverview_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Rengar",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/rengar/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=TKe7DpENT2k",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "3726d2e3-6766-5683-ace9-4349b381c4d8",
                            "uid": "blt5d563f1ec072b650",
                            "title": "/dev: Rammus, Rift to Rift",
                            "description": "Rolling out Rammus' high-flyin' update to League PC and Wild Rift took more than a quick copy-paste.",
                            "link": {
                                "url": "/news/dev/dev-rammus-rift-to-rift/"
                            },
                            "date": "2021-04-28T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt9993b0e207da4220/60886f167cc444103417d0ee/devRammus_header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "0a83040d-968b-5e2a-95f0-7308f76424ff",
                            "uid": "blt2aa043260cf4b1ee",
                            "title": "Wild Rift Patch Notes 2.2b",
                            "description": "Rengar and Kha’Zix join Wild Rift later in this patch, and keep the rivalry going with the God-Kings, Darius and Garen. Lastly, check out the balance changes aimed at underperforming Duo Lane carries. Welcome to Patch 2.2b!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-2b/"
                            },
                            "date": "2021-04-27T04:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf4edf6c61b28bd4d/6080b0c86371c75a11ada796/Patch22b_Headerimg_04262021.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "609abb2b-d24e-5b1a-bd94-b3b581645a03",
                            "uid": "blt107830021a90e97f",
                            "title": "Rammus Champion Overview",
                            "description": "OK. Alright. Rammus, the Armordillo—now rolling into Wild Rift.",
                            "link": {
                                "url": "/news/game-updates/rammus-champion-overview/"
                            },
                            "date": "2021-04-22T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8fcfd0b8263613d7/60789ef2d0dd26715b4a98dc/WR_Rammus_ChampOverview_textlessbanner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=JS154VZCiIA",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "10476a27-343e-5a0b-9d3c-f158cb9d9274",
                            "uid": "blta211d64245fc37d7",
                            "title": "Wild Rift Patch Notes 2.2a",
                            "description": "Wild Rift is full of mysteries. The ancient order of Stargazers… the enigmatic armordillo Rammus… and just what does honeyfruit taste like? Welcome to Patch 2.2a.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-2a/"
                            },
                            "date": "2021-04-20T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta3e8e071dad3ce53/606f8e00a9cf2022b935736a/4_12_21_Patch22article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "77a13820-bf2e-5c82-ae30-258c5f89f292",
                            "uid": "blta7f331f2566aa111",
                            "title": "Stargazer",
                            "description": "Look to the stars and discover hidden power (and in-game goodies) during the Stargazer event.",
                            "link": {
                                "url": "/news/announcements/stargazer/"
                            },
                            "date": "2021-04-13T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt55785e20d66474d5/6074ae991898af75a401b70b/WR-Stargazer-News-Website_Article_BannerV2.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/en-us/articles/1500002784662",
                            "showTableOfContents": false
                        },
                        {
                            "id": "f5040e31-300a-5cc0-8687-1d329fedef11",
                            "uid": "bltb2af2002e789b172",
                            "title": "Wild Pass",
                            "description": "Get the scoop on how the Wild Pass lets you earn more for playing more.",
                            "link": {
                                "url": "/news/announcements/wild-pass/"
                            },
                            "date": "2021-04-02T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltf271dc4c62f2008b/6063e2b1560dc1104de879b7/WR_WildPass_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/1500004482902",
                            "showTableOfContents": false
                        },
                        {
                            "id": "255080f3-d5b0-566e-82c9-992d812057ba",
                            "uid": "bltf4c59125bbb804f1",
                            "title": "/dev: Creating Wild Rift’s Battle Pass",
                            "description": "The Wild Pass arrives soon! Join Wild Rift’s revenue lead for a transparent peek into our approach to monetization.",
                            "link": {
                                "url": "/news/dev/dev-creating-wild-rift-s-battle-pass/"
                            },
                            "date": "2021-04-02T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltda6d188529a69972/606268f7e194780f13df53b9/4_2_21_devCreatingWildRiftsBattlePass_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "994d7247-83de-54f4-9f34-b82c8f36e066",
                            "uid": "bltc47d6b5dbf4fa255",
                            "title": "Update on Win Trading",
                            "description": "We’re taking action on win trading and match fixing.",
                            "link": {
                                "url": "/news/announcements/update-on-win-trading/"
                            },
                            "date": "2021-04-02T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt7d7c2e2534c53ba0/606285848a6d130ee5e854c8/WinTrading_header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "854902c7-61c3-583f-8c5e-beb8053fc166",
                            "uid": "blt5129685f2347073f",
                            "title": "Galio Champion Overview",
                            "description": "Time to smash stuff. Defend allies and demolish enemies with Galio, the Colossus.",
                            "link": {
                                "url": "/news/game-updates/galio-champion-overview/"
                            },
                            "date": "2021-04-01T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd27b665af81167b4/605d064ccc77b20f047aab9a/3_31_21_WRGalioChampOverview_banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=tSZmYA-QsXs",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "3097824b-6172-5e36-875b-cb20a5200720",
                            "uid": "blteefe20f74239d8da",
                            "title": "Wild Rift Original Soundtrack",
                            "description": "Warm up your thumbs to the music of Wild Rift.",
                            "link": {
                                "url": "/news/announcements/wild-rift-original-soundtrack/"
                            },
                            "date": "2021-03-30T14:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt612af45186befad4/605e71bb791ed80f0b8c8a0a/WR_Soundtrack_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=4VXfcqPfw08&list=PLuiVQJJnpdDGdAUQRn2spwDLJ2PCbyOx3&ab_channel=LeagueofLegends%3AWildRift",
                            "externalLink": "https://www.youtube.com/playlist?list=PLuiVQJJnpdDGdAUQRn2spwDLJ2PCbyOx3",
                            "showTableOfContents": false
                        },
                        {
                            "id": "2ffada66-7db5-57aa-9159-902c37b1957d",
                            "uid": "bltd8a3f120ab4eb183",
                            "title": "Wild Welcome",
                            "description": "Unlock bonus champs, skins, and other content to get a jumpstart in Wild Rift.",
                            "link": {
                                "url": "/news/announcements/wild-welcome/"
                            },
                            "date": "2021-03-30T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt66e59fadd425006b/605e220e23b7510ecf1ee85f/WR_WildWelcome_Article_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/360062312134",
                            "showTableOfContents": false
                        },
                        {
                            "id": "00aafc75-ea3b-5fec-a821-a0c08ae8e0a5",
                            "uid": "blt108102049842db7c",
                            "title": "Rift-to-Rift Rewards",
                            "description": "Learn about the free loot you can earn simply by playing Wild Rift during our Rift-to-Rift Rewards event.",
                            "link": {
                                "url": "/news/announcements/rift-to-rift-rewards/"
                            },
                            "date": "2021-03-30T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1b8f096d224adf43/5f966e546c73a0751fc78db7/LoL_WR_riches_Banner_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Open Beta",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/open-beta/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/360057974473",
                            "showTableOfContents": false
                        },
                        {
                            "id": "be44112b-5d8f-5a66-b847-378d6a24682d",
                            "uid": "bltced83676a0d80f87",
                            "title": "Legends of the Rift",
                            "description": "Get up close and discover the secrets of 61 champions. (P.S look closely…)",
                            "link": {
                                "url": "/news/announcements/legends-of-the-rift/"
                            },
                            "date": "2021-03-28T22:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8c9968413d36c64a/605bf01c791ed80f0b8c7dfe/3_28_21_WRAmericasArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://legendsoftherift.wildrift.leagueoflegends.com/",
                            "showTableOfContents": false
                        },
                        {
                            "id": "558f6f31-7a9d-5d1b-9aee-f61aa5c9668a",
                            "uid": "blt587537d3d7460808",
                            "title": "Regional Open Beta Now Live",
                            "description": "The wait is over! See how we’re welcoming the Americas to the Open Beta.",
                            "link": {
                                "url": "/news/announcements/regional-open-beta-now-live/"
                            },
                            "date": "2021-03-28T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd897c9a5cef63006/5f9367dacb9eba781f0846fc/LoL_WR_KV_Banner_1920x1080.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Open Beta",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/open-beta/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "c2755466-c8e9-509f-95ee-00a3dbe3cf06",
                            "uid": "bltb8b4cb978d1d458b",
                            "title": "Wild Rift Patch Notes 2.2",
                            "description": "A monstrous patch is bringing a horde of champs, changes, and choices to Wild Rift! Wanna gank any lane? Galio’s just a stone’s throw away. Wanna choose your lane? Queue up with Position Preference. Want… just one lane? All Random All Mid is in testing. Welcome to Patch 2.2!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-2/"
                            },
                            "date": "2021-03-28T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8023bafde6117737/605930b48a6d130ee5e82f51/3_28_21_Patch22Article_banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "df044e7c-916b-5b67-b697-89a9b11079a6",
                            "uid": "blt274e401923399f52",
                            "title": "/dev: Picking Your Position",
                            "description": "Play your way with Position Preference.",
                            "link": {
                                "url": "/news/dev/dev-picking-your-position/"
                            },
                            "date": "2021-03-28T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt605502db0a8355ea/605927271bcc840f22b1b61b/PositionPref_header.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "00997314-c387-5de4-807f-76812dd9a1b9",
                            "uid": "blt8b5038b88d076d06",
                            "title": "/dev: All Random All Mid",
                            "description": "ARAM will soon be in testing! Adnan “Sheiky” Mirza reports live from the Freljord with a quick look at Wild Rift’s game modes.",
                            "link": {
                                "url": "/news/dev/dev-all-random-all-mid/"
                            },
                            "date": "2021-03-27T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt53791b5f6b86d4fb/60591f8fcc77b20f047a94d5/Patch22_AramShopkeeper.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b57c80bd-8b3a-54e1-9160-2cdabc86073d",
                            "uid": "blt14e68f43b4fe6ac9",
                            "title": "/dev: Balance Framework Update",
                            "description": "Evolving the way we balance Wild Rift.",
                            "link": {
                                "url": "/news/dev/dev-balance-framework-update/"
                            },
                            "date": "2021-03-25T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltad7fdf494fbf4c64/6059213f5d7a7e0ef01a9cd8/devBalance_Header-03252021.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "87115177-8b8c-5f0e-ba3d-5679373e2a7c",
                            "uid": "blt41e4991edfc90ceb",
                            "title": "PROJECT: Mobilize",
                            "description": "Get ready for an upgrade. PROJECT: Ashe, Vi, Leona, Yasuo, and Zed are now booting up on the Rift.",
                            "link": {
                                "url": "/news/announcements/project-mobilize/"
                            },
                            "date": "2021-03-25T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt5047b2a36c0336e7/605543a7e194780f13df25b2/3_24_21_WRProjectCG_textless_banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "ASHE",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/ashe/"
                                    }
                                },
                                {
                                    "title": "VI",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/vi/"
                                    }
                                },
                                {
                                    "title": "YASUO",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/yasuo/"
                                    }
                                },
                                {
                                    "title": "ZED",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/zed/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://www.youtube.com/watch?v=3XQDBLTF_WM",
                            "showTableOfContents": false
                        },
                        {
                            "id": "220f3c71-7bf3-5483-9a3d-65f3c0d603ed",
                            "uid": "blt265773e9f818ae2c",
                            "title": "/dev diary: Patch 2.2 Preview",
                            "description": "Join Jane “DjangoUnjaned” Chen to see what we’ve got coming in this behemoth of a patch.",
                            "link": {
                                "url": "/news/dev/dev-diary-patch-2-2-preview/"
                            },
                            "date": "2021-03-23T01:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4911849a123e8f49/605947758a6d130ee5e82f87/WR_Apr2021_DevDiary_Article-banner-03222021.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=LBNf0saJNyI",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "cf821029-1438-5202-a3ac-5b2c49cae1f3",
                            "uid": "blt72b8ec7294840a79",
                            "title": "/dev: Patch 2.2 Item Preview",
                            "description": "Tank players, it’s time to engage. Check out some of the new in-game items heading to the upcoming Patch 2.2.",
                            "link": {
                                "url": "/news/dev/dev-patch-2-2-item-preview/"
                            },
                            "date": "2021-03-23T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt754cae63fd67ff07/6054fb9d0aa89f0eda274793/3_24_21_Patch22ItemPreview_banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "3b723cfa-c7ce-5819-a7c7-0d7e9b9ae875",
                            "uid": "blt6f773ba58f27fc1c",
                            "title": "Wild Rift Patch Notes 2.1b",
                            "description": "The might of Targon’s aspects descend from the heavens this patch, bringing nerfs to Aurelion Sol, the Conqueror rune, and backdooring.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-1b/"
                            },
                            "date": "2021-03-15T14:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8c0f9bc86cd2c174/604ba9b6acf0d53d70c5e8d0/PatchNotes_21b_Ziggs.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "6119178d-7bb4-57e5-8626-df89330b739d",
                            "uid": "blt61d95850ab1ab903",
                            "title": "Wild Rift Real Talk: March 2021",
                            "description": "What’s up with matchmaking and lag spikes? Game Director Alan “Mirross” Moore talks through Wild Rift’s plans for the next few months.",
                            "link": {
                                "url": "/news/dev/wild-rift-real-talk-march-2021/"
                            },
                            "date": "2021-03-10T20:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt35b776d60cbc1502/60492eaf7d801145b7fb9dc4/WR_CB2_RealTalkArticle2_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "b04b6b4b-bdce-5052-9302-bbbffd6ecb7f",
                            "uid": "blte9409b15276b0013",
                            "title": "Open Beta - Americas",
                            "description": "Here we go! Wild Rift's Open Beta comes to the Americas on March 29th.",
                            "link": {
                                "url": "/news/game-updates/open-beta-americas/"
                            },
                            "date": "2021-03-09T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt0c5ea9390140c389/6042a131acf0d53d70c5c4a7/3_9_21_THEAMERICASLAUNCH_USAl_1920x1080_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=7sTn8jzQbIw",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "62dc47aa-7bff-5970-94c6-5c381d86c8ca",
                            "uid": "blte83116af141ca794",
                            "title": "Americas Server Launch",
                            "description": "That's right, players in Brazil, LATAM, and North America—your time has finally come. But while in the past we've simply added new countries to our ever-evolving Regional Open Beta FAQ, the Americas server is different enough to merit its very own FAQ.",
                            "link": {
                                "url": "/news/announcements/americas-server-launch/"
                            },
                            "date": "2021-03-08T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd84f8783c954c328/60418b65fa12da5a616573b7/3_8_21_W4_VPNUpdate_Arcade_Ahri.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/360061650574",
                            "showTableOfContents": false
                        },
                        {
                            "id": "d20a36e4-a723-50d7-83da-7be5bc49c211",
                            "uid": "bltb287de48102d55c1",
                            "title": "Katarina’s Challenge",
                            "description": "Spin, slash, and shunpo during Katarina’s Challenge to earn rewards and unlock the Sinister Blade herself.",
                            "link": {
                                "url": "/news/announcements/katarina-s-challenge/"
                            },
                            "date": "2021-03-04T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltddceb1e108d4dbc0/60381c48946aa93dbe599eae/WR_Katarina_EventArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "KATARINA",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/katarina/"
                                    }
                                }
                            ],
                            "articleType": "External link",
                            "youtubeLink": "",
                            "externalLink": "https://support-wildrift.riotgames.com/hc/articles/360059916253",
                            "showTableOfContents": false
                        },
                        {
                            "id": "72463205-1fa1-5592-98a1-9f38f6b76662",
                            "uid": "bltb825fe22fec307b4",
                            "title": "Wild Rift Patch Notes 2.1a",
                            "description": "Katarina, the Sinister Blade headlines this patch, and she’s accompanied by a few balance changes to Lulu, Olaf, Blade of the Ruined King, and more.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-1a/"
                            },
                            "date": "2021-03-01T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt9603fdcf24a88ea6/6011aa290a80720ff10f3f87/PatchNotesArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "65ea7b40-bff6-515d-94fb-9722b3961d03",
                            "uid": "blt3e1ae2711d9dac40",
                            "title": "Wild Rift Patch Notes 2.1",
                            "description": "A beast of a patch is on the way, featuring replays, spectator mode, two new champs, balance changes to the peskiest yordles, and more Blue Motes!",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-1/"
                            },
                            "date": "2021-02-01T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt9603fdcf24a88ea6/6011aa290a80720ff10f3f87/PatchNotesArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "9b9c90f1-843c-528d-a9f7-e9fadd98f91c",
                            "uid": "blteb3d0d4abe5bf30b",
                            "title": "Wild Rift Patch Notes 2.0a",
                            "description": "A small balance update, bringing nerfs to Evelynn, Lee Sin and Guardian Angel.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-0a/"
                            },
                            "date": "2021-01-18T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4d1e50dc1920267e/5f8a1a451f5f6d4173b50b96/WR_CB1_2_PatchNotesArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "d22548f1-e6e5-5670-aba9-522fcffffbb1",
                            "uid": "blt3692f73268e7040e",
                            "title": "Wild Rift Patch Notes 2.0",
                            "description": "In our first patch of the new year, we say hello to 5 Yordle champions and a lineup of features like Party Finder, a new latency indicator, and more",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-2-0/"
                            },
                            "date": "2021-01-05T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4d1e50dc1920267e/5f8a1a451f5f6d4173b50b96/WR_CB1_2_PatchNotesArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4b869284-f0f5-57da-bd89-4d748773b408",
                            "uid": "blt6073c2426f0fe1a3",
                            "title": "I’ll SCOUT AHEAD!",
                            "description": "Most expeditions start with a map, but this one starts with a piece. Put all three together and see where they lead… #BandleScoutsUnite",
                            "link": {
                                "url": "/news/announcements/i-ll-scout-ahead/"
                            },
                            "date": "2021-01-04T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd62fa0ac80cd48de/5fd97355da1c393383d4102f/Article-Banner-1920x1080_optimized.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "ae03fb80-c03b-5f7d-a352-3e82ac799876",
                            "uid": "bltffec794fd563a81c",
                            "title": "Wild Rift Patch Notes 1.1",
                            "description": "Wild Rift’s first major release after Open Beta brings with it new champs, fixed joystick controls, and a farewell to Cooldown Reduction.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-1-1/"
                            },
                            "date": "2020-12-08T01:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4d1e50dc1920267e/5f8a1a451f5f6d4173b50b96/WR_CB1_2_PatchNotesArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4d0e37d8-9896-5929-85dd-5548ba7ab258",
                            "uid": "bltc5c8fc7500accef8",
                            "title": "/dev diary - Looking Back, Moving Forward",
                            "description": "As 2020 (finally) draws to a close, we’re gearing up for a new patch, reflecting on this whirlwind of a year, and looking ahead to all the excitement coming in 2021.",
                            "link": {
                                "url": "/news/dev/dev-diary-looking-back-moving-forward/"
                            },
                            "date": "2020-12-06T16:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt89845faf2f193119/5fc8038f46f622769b5f3752/WR_Dec2020_DevDiary.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Open Beta",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/open-beta/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=sUeEL-1V8AA",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "f9d15d72-abd0-597f-9cb9-33ccba02d011",
                            "uid": "bltcb5041f98c3c3543",
                            "title": "Wild Rift /dev: Keeping the Balance",
                            "description": "Alex “Wav3Break” Huang goes deep on how we plan on keeping Wild Rift balanced and fresh for years to come.",
                            "link": {
                                "url": "/news/dev/wild-rift-dev-keeping-the-balance/"
                            },
                            "date": "2020-11-11T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt06665657db375db8/5fa9df5a65bdd35303e00c18/WR_Launch_DevBalanceArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Open Beta",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/open-beta/"
                                    }
                                },
                                {
                                    "title": "Ahri",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/ahri/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "86540193-1401-5603-8fc3-c627ced045b1",
                            "uid": "blt8f80949814f40ce3",
                            "title": "Wild Rift Patch Notes 1.0a",
                            "description": "The first balance patch of 1.0 brings nerfs to Xin Zhao.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-1-0a/"
                            },
                            "date": "2020-11-09T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt80caf056d645d18f/5f7568f2747ff04fb7901af7/WR_CB1_2_PatchNotesArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "dfea6f59-8952-5ebf-93b9-17c7b7eee997",
                            "uid": "blt409d757fbf108c31",
                            "title": "Upcoming changes to VPNs",
                            "description": "We’re making some access changes to players using VPNs to play Wild Rift.",
                            "link": {
                                "url": "/news/announcements/upcoming-changes-to-vpns/"
                            },
                            "date": "2020-11-07T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt3223401641968d36/5fa4d30209ed4c6f277ea99f/WR_CB_VPNupdate_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Open Beta",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/open-beta/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4dc1c34d-23b9-5c44-a745-31ca20a13355",
                            "uid": "blt2fcbe79a0d3125fa",
                            "title": "You Really Got Me | Cinematic Trailer",
                            "description": "Jinx can’t hardly wait to hit the Rift.",
                            "link": {
                                "url": "/news/announcements/you-really-got-me-cinematic-trailer/"
                            },
                            "date": "2020-10-28T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta829b3287ce51f2e/5f937bbdfe49b57a83a13bc5/WorldsHub_OpenBetaCG_Image.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "JINX",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/jinx/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=TFzkbos0oeo",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "5c9773bd-ff00-55a0-9e2b-54aebd516b7f",
                            "uid": "bltdc9699d7f665c4e0",
                            "title": "Official Gameplay Trailer",
                            "description": "Team up with friends, lock in your champion, and battle for victory out on the Rift.",
                            "link": {
                                "url": "/news/announcements/official-gameplay-trailer/"
                            },
                            "date": "2020-10-28T02:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt013fb3fe14267806/5f93699cfe49b57a83a13b9f/WR_OpenBeta_Gameplay_Trailer_Textless.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=pNjWjwae-us",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "237a18e4-347e-5e83-9f74-ceb5d589f9dc",
                            "uid": "blt26a4b68372f890a7",
                            "title": "Wild Rift Patch Notes 1.0",
                            "description": "Patch 1.0 is here, bringing with it the Regional Open Beta, 7 new champs to test, and buffs to Tear of the Goddess.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-1-0/"
                            },
                            "date": "2020-10-23T00:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4d1e50dc1920267e/5f8a1a451f5f6d4173b50b96/WR_CB1_2_PatchNotesArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                },
                                {
                                    "title": "LEE SIN",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/lee-sin/"
                                    }
                                },
                                {
                                    "title": "AKALI",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/akali/"
                                    }
                                },
                                {
                                    "title": "SERAPHINE",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/seraphine/"
                                    }
                                },
                                {
                                    "title": "EVELYNN",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/evelynn/"
                                    }
                                },
                                {
                                    "title": "DRAVEN",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/draven/"
                                    }
                                },
                                {
                                    "title": "DARIUS",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tags/darius/"
                                    }
                                },
                                {
                                    "title": "KAI'SA",
                                    "is_hidden": false,
                                    "url": {
                                        "url": "/news/tag/kaisa"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "3ae09810-d0fb-5147-b15a-95e31ef50c2c",
                            "uid": "blt1a2c1e7d527111ff",
                            "title": "Wild Rift /dev: Balancing Wild Rift",
                            "description": "Join Balance Lead Jonathan “JCM1117” Chao and the team for a peek into how Wild Rift gets balanced.",
                            "link": {
                                "url": "/news/dev/wild-rift-dev-balancing-wild-rift/"
                            },
                            "date": "2020-10-21T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt27d7a0f4fcadba25/5f8a12259245d74a2063f9da/WR_CB2_DevBalanceArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "17447970-56e1-5dd9-9181-9a78a5b0711f",
                            "uid": "blt13940b5db3a6598f",
                            "title": "Welcome to Regional Open Beta",
                            "description": "Regional Open Beta is here! Also, an update on new testing locations, and a preview of Wild Rift patch 1.0.",
                            "link": {
                                "url": "/news/game-updates/welcome-to-regional-open-beta/"
                            },
                            "date": "2020-10-16T15:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt49f833b43a18c3a8/5f88ac4a3db5122648cbce9f/WR_CB2_DevUpdate_OpenBetaAnnounce_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Open Beta",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/open-beta/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "172e57b8-58a8-5430-a3a6-bb4f265479dd",
                            "uid": "bltd3df4db88e19e094",
                            "title": "Wild Rift Patch Notes 0.5",
                            "description": "The Regional Closed Beta returns! In this patch, Practice Mode, nerfs to Singed and Sona, and some quality-of-life fixes.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-patch-notes-0-5/"
                            },
                            "date": "2020-10-10T23:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltcb1dfcf0ec38d130/5f7e75dcbd99c90e9ce92066/WR_CB1_PatchNotesArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Closed Beta",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/closed-beta/"
                                    }
                                },
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "109e6147-45a9-5868-8012-9d7d62d9859a",
                            "uid": "blt325bb94b449dec26",
                            "title": "Wild Rift /dev: Ranked v1.0",
                            "description": "Take a deep dive into Wild Rift’s ranked system. Let’s talk about single queue, Ranked Marks, and trios!",
                            "link": {
                                "url": "/news/dev/wild-rift-dev-ranked-v1-0/"
                            },
                            "date": "2020-10-05T17:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt5bc4487e97f7413c/5f73a2e18c3821496a6026c3/WR_CB2_RankedDeepDiveArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                },
                                {
                                    "title": "Closed Beta",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/closed-beta/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "2b7acc41-77ce-5cc1-9821-0a385df90cb2",
                            "uid": "blt1a3b818d23fa43db",
                            "title": "/dev diary - Regional Closed Beta",
                            "description": "We’re kicking off the Regional Closed Beta, giving you a detailed look at the ranked system, and serving some hot-off-the-press updates about in-game content, gameplay, and new champions.",
                            "link": {
                                "url": "/news/dev/dev-diary-regional-closed-beta/"
                            },
                            "date": "2020-09-15T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte0c90d3ffdb037c2/5f717eae175fa54fb08fbd69/wr-devdiary-cb1.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                },
                                {
                                    "title": "Closed Beta",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/closed-beta/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=fV73FM1QBkA",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "105bb99c-e61d-5e62-a2f0-c4e5ab68d814",
                            "uid": "blt7f6f2912cb50720a",
                            "title": "Wild Rift Closed Beta Patch Notes",
                            "description": "All the balance changes from the Regional Alpha, featuring nerfs to splitpushing champs and buffs to some mages.",
                            "link": {
                                "url": "/news/game-updates/wild-rift-closed-beta-patch-notes/"
                            },
                            "date": "2020-09-15T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt80caf056d645d18f/5f7568f2747ff04fb7901af7/WR_CB1_2_PatchNotesArticle_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Game Updates",
                                    "url": {
                                        "url": "/news/game-updates/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Patch Notes",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/patch-notes/"
                                    }
                                },
                                {
                                    "title": "Closed Beta",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/closed-beta/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": true
                        },
                        {
                            "id": "6603b680-7c61-5f21-9b91-4c921e0f5bc9",
                            "uid": "bltafdc310e6be39ee4",
                            "title": "Wild Rift Real Talk - September 15 2020",
                            "description": "Each week, we’ll talk about current trends and concerns in the Wild Rift community. Here’s what you can expect from the team!",
                            "link": {
                                "url": "/news/dev/wild-rift-real-talk-september-15-2020/"
                            },
                            "date": "2020-09-15T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt7e4702c5de632155/5f75690e1c1c533ba55d72b3/WR_CB2_RealTalkArticle2_Banner.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "Closed Beta",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/closed-beta/"
                                    }
                                }
                            ],
                            "articleType": "Normal article",
                            "youtubeLink": "",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "fe4a94d9-f59f-5e4e-883f-8af4e3ed0ace",
                            "uid": "blt241a1e98e11e1eca",
                            "title": "/dev diary - Gameplay Reveal",
                            "description": "Brand new gameplay, a limited Android alpha test for players in Brazil and the Philippines, and a whole lotta montages. Join exec producer Michael “Riot Paladin” Chow and the Wild Rift team for a deep dive /dev diary from home.",
                            "link": {
                                "url": "/news/dev/dev-diary-gameplay-reveal/"
                            },
                            "date": "2020-05-29T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt690991f0eb161cfb/5f717dd3968bb93b9e85181c/wr-devdiary-gameplay.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=_PtHQvjlbKw",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "73c8bfe5-f8d1-5e10-9ac5-139941cbb1fe",
                            "uid": "bltaea77d0a8b948e86",
                            "title": "/dev diary - Champions",
                            "description": "Design lead Brian “FeralPony” Feeney gives a quick update on our development progress and explores a few champion changes coming to Wild Rift.",
                            "link": {
                                "url": "/news/dev/dev-diary-champions/"
                            },
                            "date": "2020-03-18T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt649f3e4670df4e17/5f717d291868224e73cb08e5/wr-devdiary-champions.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Dev",
                                    "url": {
                                        "url": "/news/dev/"
                                    }
                                }
                            ],
                            "tags": [
                                {
                                    "title": "/dev diary",
                                    "is_hidden": null,
                                    "url": {
                                        "url": "/news/tags/dev-diary/"
                                    }
                                }
                            ],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=iVIvP0oq6_8",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "4fc49634-79e6-54be-8108-fc12666e5b40",
                            "uid": "blte25fe8458ca6995a",
                            "title": "Wild Rift Announce Trailer",
                            "description": "Skillful outplays. Brilliant maneuvers. The occasional throw. Welcome to Wild Rift!",
                            "link": {
                                "url": "/news/announcements/wild-rift-announce-trailer/"
                            },
                            "date": "2019-10-15T18:30:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Top",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt89d49cc61fc5a307/5f717b4e747ff04fb7900874/wr-announce-en.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=e2TZAAQmGho",
                            "externalLink": "",
                            "showTableOfContents": false
                        },
                        {
                            "id": "160a2ed8-85e2-565f-918f-7241a795d506",
                            "uid": "blt0f5a5532281b1984",
                            "title": "League of Legends: Wild Rift Announcement",
                            "description": "League of Legends is coming to mobile and console, starting 2020!",
                            "link": {
                                "url": "/news/announcements/league-of-legends-wild-rift-announcement/"
                            },
                            "date": "2019-10-15T18:00:00.000Z",
                            "featuredImage": {
                                "focalPoint": "Center",
                                "banner": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1109a81ebc9dac68/5f7179588c3821496a601bf0/WRAnnouncement_Riot_Pls_10thAnniversary.jpg"
                                }
                            },
                            "categories": [
                                {
                                    "title": "Announcements",
                                    "url": {
                                        "url": "/news/announcements/"
                                    }
                                }
                            ],
                            "tags": [],
                            "articleType": "Youtube",
                            "youtubeLink": "https://www.youtube.com/watch?v=0YdOIx-k2vI",
                            "externalLink": "",
                            "showTableOfContents": false
                        }
                    ]
                },
                "youtubeChannel": {
                    "videos": [
                        {
                            "title": "The Finest of Fan Art - Wild Rift Anniversary Celebration| League of Legends: Wild Rift",
                            "videoId": "aOsRh0_5fG0",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/aOsRh0_5fG0/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/aOsRh0_5fG0/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/aOsRh0_5fG0/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/aOsRh0_5fG0/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/aOsRh0_5fG0/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-10-21T23:00:02Z",
                            "description": "For our anniversary, we wanted to celebrate our community’s amazing creative talents… in the wildest way possible! We're honored to have displayed your fan art in a pop-up gallery in LA, and now, permanently in the homes of Rioters who love Wild Rift as much as you do. Thanks for making the Rift wild with us. \n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Bring the Wild (Wild Rift Main Theme: Remix) | League of Legends: Wild Rift",
                            "videoId": "XrVDG4Jp4Cg",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/XrVDG4Jp4Cg/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/XrVDG4Jp4Cg/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/XrVDG4Jp4Cg/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/XrVDG4Jp4Cg/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/XrVDG4Jp4Cg/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-10-12T02:00:07Z",
                            "description": "This Power Spike Patch, we’re celebrating how far we’ve come together! From cinematics to IRL events, let’s look back on all the hype since the very beginning. 💙⚡\n\nOriginal Theme by: Riot Music Team\nRemix by: Julie Buchanan\nAdditional Production and Supervision: Riot Music Team\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Devs Spill the Beans: Support Items",
                            "videoId": "b2Dof4POSVc",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/b2Dof4POSVc/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/b2Dof4POSVc/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/b2Dof4POSVc/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/b2Dof4POSVc/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/b2Dof4POSVc/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-09-22T17:00:18Z",
                            "description": "Game designer Sean “Zekramen” Mason talks about the recent changes to support items in Wild Rift and how they’ll give support champions more agency and power in teamfights.\n\nLearn more at https://wildrift.leagueoflegends.com.\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Yone Champion Overview | Gameplay - League of Legends: Wild Rift",
                            "videoId": "Y0cGMy4wnwo",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/Y0cGMy4wnwo/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Y0cGMy4wnwo/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Y0cGMy4wnwo/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Y0cGMy4wnwo/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Y0cGMy4wnwo/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-09-20T17:00:15Z",
                            "description": "Your spirit’s steel strikes true. Draw your swords with Yone, the Unforgotten.\n\nLearn more at https://wildrift.leagueoflegends.com.\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Gwen Champion Overview | Gameplay - League of Legends: Wild Rift",
                            "videoId": "cnTUsIpf7eU",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/cnTUsIpf7eU/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/cnTUsIpf7eU/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/cnTUsIpf7eU/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/cnTUsIpf7eU/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/cnTUsIpf7eU/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-09-15T17:00:20Z",
                            "description": "Cut away the competition with Gwen, the Hallowed Seamstress, skipping her way into Wild Rift!\n\nLearn more at https://wildrift.leagueoflegends.com.\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com\n\n\nMade with Love | Gwen Champion Teaser\nhttps://www.youtube.com/watch?v=-Dkz19W9Dfw\n\nGwen, The Hallowed Seamstress | Champion Theme\nhttps://www.youtube.com/watch?v=ZJK0gG-WSUc\n\nGwen - Universe Page\nhttps://universe.leagueoflegends.com/en_US/champion/gwen/\n\n\"The Stranger Who Sews\" Short Story\nhttps://universe.leagueoflegends.com/en_US/story/gwen-color-story/"
                        },
                        {
                            "title": "Superhero Jayce | Skin Trailer - League of Legends: Wild Rift",
                            "videoId": "GcM87K_Dp1s",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/GcM87K_Dp1s/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/GcM87K_Dp1s/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/GcM87K_Dp1s/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/GcM87K_Dp1s/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/GcM87K_Dp1s/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-09-10T00:00:08Z",
                            "description": "💥 Kapow! Zap! Boom! 💥 Save the day with Superhero Jayce at level 50 of the Wild Pass for Patch 3.4. And unlock his Ascended form with the Wild Pass upgrade!\n\nCreated in partnership with: YIZ ANIMATION  https://yiz.design\nMusic by: Jeff Broadbent | https://jeffbroadbent.com\nExecutive production and supervision by: Riot Music Team\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Let moonlight illuminate the path to victory with Lunar Goddess Diana! #Shorts",
                            "videoId": "i2ylBoaTTm8",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/i2ylBoaTTm8/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/i2ylBoaTTm8/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/i2ylBoaTTm8/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/i2ylBoaTTm8/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/i2ylBoaTTm8/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-09-06T16:00:34Z",
                            "description": "Find strength in the light of the moon with Lunar Goddess Diana starting Sept 9 UTC! 🌙\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Patch 3.4 Preview  - League of Legends: Wild Rift",
                            "videoId": "FlD9IGtE26E",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/FlD9IGtE26E/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/FlD9IGtE26E/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/FlD9IGtE26E/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/FlD9IGtE26E/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/FlD9IGtE26E/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-09-05T04:00:05Z",
                            "description": "Celebrate Wild Rift’s anniversary in Patch 3.4: Power Spike ‘22, arriving September 15 UTC! Start the party with Jared from the dev team and get a look at our new champions, gameplay updates, and events. \n\nLearn more at https://wildrift.leagueoflegends.com.\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Samira Champion Overview | Gameplay - League of Legends: Wild Rift",
                            "videoId": "wugifsDSHyA",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/wugifsDSHyA/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/wugifsDSHyA/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/wugifsDSHyA/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/wugifsDSHyA/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/wugifsDSHyA/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-08-26T18:00:20Z",
                            "description": "Shoot first, slash second, and show off your style. \n\nLearn more at https://wildrift.leagueoflegends.com.\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Sion Champion Overview | Gameplay - League of Legends: Wild Rift",
                            "videoId": "PRXEmvjUq_s",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/PRXEmvjUq_s/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/PRXEmvjUq_s/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/PRXEmvjUq_s/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/PRXEmvjUq_s/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/PRXEmvjUq_s/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-08-26T17:00:28Z",
                            "description": "Death will think twice.\n\nLearn more at https://wildrift.leagueoflegends.com.\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Warmonger Sion and new PsyOps skins come to Wild Rift #Shorts",
                            "videoId": "ACDKH1QXAHg",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/ACDKH1QXAHg/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/ACDKH1QXAHg/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/ACDKH1QXAHg/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/ACDKH1QXAHg/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/ACDKH1QXAHg/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-08-26T15:00:04Z",
                            "description": "Brutal strength or precise power? Warmonger Sion, and PsyOps Samira, Master Yi, Kayle, and Zed are heading to the Rift! 💪\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Weapons of Noxus | Champion Trailer - League of Legends: Wild Rift",
                            "videoId": "Ctrlj5R7FpU",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/Ctrlj5R7FpU/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Ctrlj5R7FpU/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Ctrlj5R7FpU/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Ctrlj5R7FpU/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Ctrlj5R7FpU/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-08-25T23:00:05Z",
                            "description": "When failure is not an option, Noxus sends in the best. Recruit the unstoppable forces of Samira and Sion in the Weapons of Noxus event! 🪓\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Dragon Trainer Tristana bursts—and burps—into Wild Rift! #Shorts",
                            "videoId": "JXxUjMqN-v8",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/JXxUjMqN-v8/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/JXxUjMqN-v8/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/JXxUjMqN-v8/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/JXxUjMqN-v8/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/JXxUjMqN-v8/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-08-16T22:00:11Z",
                            "description": "Dragon Trainer Tristana jumps into Wild Rift with a boom (and a dragon burp) on August 19 UTC! 🐉\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "New Dreams: Vlogs Compilation - Star Guardian 2022 | League of Legends: Wild Rift",
                            "videoId": "5rAeyo3K36g",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/5rAeyo3K36g/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/5rAeyo3K36g/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/5rAeyo3K36g/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/5rAeyo3K36g/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/5rAeyo3K36g/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-08-11T16:00:03Z",
                            "description": "The school year comes and goes, but we’ll share these memories forever. Hang onto every moment with this compilation of all three Star Guardian vlogs.\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com\n\n\nStar Guardian 2022 Event Site\nhttps://starguardian.riotgames.com/\n\nStar Guardian Comics - \"Star-Crossed\"\nhttps://universe.leagueoflegends.com/en_US/comic/star-guardian\n\nStar Guardian Short Stories\nhttps://universe.leagueoflegends.com/en_US/star-guardian/"
                        },
                        {
                            "title": "Never Stop Me (ft. Tkay Maidza) (Falcons Pangea Sound Remix) | Icons 2022",
                            "videoId": "RkVKGVsE6jg",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/RkVKGVsE6jg/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/RkVKGVsE6jg/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/RkVKGVsE6jg/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/RkVKGVsE6jg/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/RkVKGVsE6jg/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-08-11T13:00:21Z",
                            "description": "This is what winning sounds like. Enjoy a fresh remix inspired by Nova Esports.\n\nFor more information on Icons 2022 visit https://wildriftesports.com/.\n\nLISTEN NOW: https://found.ee/\nSpotify: https://found.ee/-spotify\nApple Music: https://found.ee/-applemusic\nAmazon Music: https://found.ee/-amazonmusic\nYoutube Music: https://found.ee/-youtube\nDeezer: https://found.ee/-deezer\n\nPRODUCTION CREDITS:\nNever Stop Me (Falcons Pangea Sound Remix)\nRemix produced by: Falcons\nRemix mastered by: Adam Tune\nFeatured artist: Tkay Maidza\nOriginal track written by: BloodPop and Tkay Maidza\nOriginal track produced by: BloodPop\n\nhttps://www.instagram.com/falcons\nhttps://www.instagram.com/pangeasound\nhttps://linktr.ee/tkaymaidza\nhttp://instagram.com/bloodpop \n\nOriginal Lyrics:\n\nOh this that queue\nAin’t no drama only venom\nWhen I get my dues,\nRespect I’m the next tycoon\nGot a path full of greens\nCouple Ms might sue\nA non believer do you see the confidence\nGot some people waiting for me on defense\nHighly favored never see me on the fence\nBest believe that when I win it’s common sense\n\nI’m designed to fly, defeat all demise\nThe best me know no fear, no compromise\n100 degrees - I breathe more to life\nYou should disconnect and throw in the wires\nAin’t no hands out in this\nGotta record of a high percentage\nGotta a heart on my sleeve\nNon stop\nStepping up to the seat\nMore shots\nGetting those ops\n\nI’m alive\nUnleashing the fire\nOut in the wild\nYou can never stop me\n\nWatch me dive\nI’m free and it’s my time\nUp in the stars\nYou’ll never forget me\n\nWe’re not holding back on this side\nOnly get better with time\nReady to own what is mine\nTonight\nI’m alive\nUnleashing the fire\nOut in the wild\nYou can never stop me\n\nI never wait up\nFlowers stayed steady coming\nOn the way up\nA true fighter’s what they always been afraid of\nCards hella close like my circle\nWhen I lay up\nSwitch the game, every quarter like a time zone\nI ain't for the buzz tryna build up to these milestones\nPave the way with only items that I might own\nImagine what I’m bout to do - be a icon\nIt ain’t a problem, just to haters that I might know\n\nIt’s a night show\nThey way I’m about to make a movie with these lights\nI know they wanna be like me, they can try\nAll gold everything, when I ride\nCan repeat it, every legend gotta fight\nA new world - when I flip make it tight\nAin’t nobody doing business how I like\nSeat buckled going up like a bike\n\nI’m alive\nUnleashing the fire\nOut in the wild\nUp in the sky, into the light\n\nWatch me dive\nI’m free and it’s my time\nUp in the stars\nWith every stride, our future’s bright\n\nCause I’m onto the next\nThey way I shape shift makes them call me a threat\nRunning on this path - never done no regrets\nThere is nothing you can do when my fate's done it's set\nYou’re in front of the best\nDifferent league if you want to get to me\nUp your game and pedigree\nYeah I only got a future on a centerpiece\n\nI’m alive\nUnleashing the fire\nOut in the wild\nYou can never stop me\n\nWatch me dive\nI’m free and it’s my time\nUp in the stars\nYou’ll never forget me\n\nWe’re not holding back on this side\nOnly get better with time\nReady to own what is mine\nTonight\nI’m alive\nUnleashing the fire\nOut in the wild\nYou can never stop me\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Pool Party Caitlyn, Mundo, Ziggs, and Graves are making a splash! #Shorts",
                            "videoId": "9ZD4Rx10bv4",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/9ZD4Rx10bv4/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/9ZD4Rx10bv4/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/9ZD4Rx10bv4/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/9ZD4Rx10bv4/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/9ZD4Rx10bv4/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-08-09T22:00:05Z",
                            "description": "Swan dive or cannonball?💦 Either way, jump in with Pool Party skins on Aug 12 UTC. \n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Beeline your way to victory with Beekeeper Singed! #Shorts",
                            "videoId": "sYbuU3s4N6E",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/sYbuU3s4N6E/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/sYbuU3s4N6E/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/sYbuU3s4N6E/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/sYbuU3s4N6E/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/sYbuU3s4N6E/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-08-08T22:00:22Z",
                            "description": "Chasing this champion is sure to sting! Beekeeper Singed is beelining to top lane and beeyond on August 11 UTC. 🍯\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Wield the immortal power of God Fist Lee Sin! #shorts",
                            "videoId": "Nh05wb-vTbM",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/Nh05wb-vTbM/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Nh05wb-vTbM/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Nh05wb-vTbM/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Nh05wb-vTbM/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Nh05wb-vTbM/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-08-02T22:00:09Z",
                            "description": "Punch with unearthly fury! 👊 God Fist Lee Sin enters the fray on August 5 UTC. \n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Kassadin Champion Overview | Gameplay - League of Legends: Wild Rift",
                            "videoId": "SE3NirwFNJQ",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/SE3NirwFNJQ/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/SE3NirwFNJQ/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/SE3NirwFNJQ/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/SE3NirwFNJQ/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/SE3NirwFNJQ/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-07-28T15:00:30Z",
                            "description": "Walk where none dare follow 🌌 when you play Kassadin, the Void Walker, available soon!\n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        },
                        {
                            "title": "Master the art of war with Warring Kingdoms Jarvan IV and Katarina! #Shorts",
                            "videoId": "Ek5Ke4g7zIk",
                            "thumbnails": [
                                {
                                    "url": "https://i.ytimg.com/vi/Ek5Ke4g7zIk/default.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Ek5Ke4g7zIk/mqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Ek5Ke4g7zIk/hqdefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Ek5Ke4g7zIk/sddefault.jpg"
                                },
                                {
                                    "url": "https://i.ytimg.com/vi/Ek5Ke4g7zIk/maxresdefault.jpg"
                                }
                            ],
                            "publishedAt": "2022-07-26T22:00:04Z",
                            "description": "Lead your legions from the frontline with Warring Kingdoms Jarvan IV and Katarina, coming to Wild Rift on July 29 UTC. ⚔️ \n\nABOUT THE GAME \nDive into Wild Rift: the skills-and-strats 5v5 MOBA experience of League of Legends, now built from the ground up for mobile and console. With fresh controls and fast-paced games, players of every level can team up with friends, lock in their champion, and go for the big plays. \n\n\nDownload now for free on iOS and Android:\nhttps://riotgames.sng.link/Dus0s/9d5d\n\nFollow for 200IQ gameplay clips, dev and feature updates, and a whole lot more:\nInstagram: https://instagram.com/playwildrift  \nFacebook: https://facebook.com/playwildrift  \nTwitter: https://twitter.com/wildrift \nWebsite: https://wildrift.leagueoflegends.com"
                        }
                    ]
                },
                "pageMetadata": {
                    "nodes": [
                        {
                            "opengraph": {
                                "title": "Welcome to League of Legends: Wild Rift",
                                "description": "League of Legends: Wild Rift is coming to mobile and console! Team up with friends and test your skills in 5v5 mobile MOBA combat.",
                                "image": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt25c7cb03f8dbb71e/5f5a8d9769d060498b8e4c31/WR_meta_homepage.png",
                                    "title": "WR_meta_homepage.png"
                                }
                            },
                            "twitter": {
                                "title": "Welcome to League of Legends: Wild Rift",
                                "description": "League of Legends: Wild Rift is coming to mobile and console! Team up with friends and test your skills in 5v5 mobile MOBA combat.",
                                "site": "@WildRift",
                                "image": {
                                    "url": "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt25c7cb03f8dbb71e/5f5a8d9769d060498b8e4c31/WR_meta_homepage.png",
                                    "title": "WR_meta_homepage.png"
                                }
                            }
                        }
                    ]
                }
            },
            "pageContext": {
                "language": "en-us",
                "i18n": {
                    "language": "en-us",
                    "languages": [
                        "id-id",
                        "ms-my",
                        "th-th",
                        "ko-kr",
                        "zh-tw",
                        "vi-vn",
                        "ja-jp",
                        "ru-ru",
                        "es-mx",
                        "tr-tr",
                        "it-it",
                        "pl-pl",
                        "fr-fr",
                        "pt-br",
                        "de-de",
                        "en-us",
                        "es-es",
                        "ar-ae",
                        "en-sg",
                        "en-gb"
                    ],
                    "defaultLanguage": "en-us",
                    "generateDefaultLanguagePage": true,
                    "routed": true,
                    "originalPath": "/news/",
                    "path": "en-us/news/"
                }
            }
        },
        "staticQueryHashes": [
            "544526057"
        ]
    }

    const isPatchNote = (tags) => {
        return !!tags.find((tag) => tag.title === "Patch Notes")
    }

    useEffect(() => {
        const articles = data.result.data.allContentstackArticles.articles
        const patchNotes = articles.flatMap(article => {
            return isPatchNote(article.tags) && getPatchVersion(article.title) ? article : []
        })
        console.log(patchNotes)
        setNotes(patchNotes)
        // result.data.allContentstackArticles.articles
        // fetch('https://wildrift.leagueoflegends.com/page-data/en-us/news/page-data.json')
        //     .then(res => console.log(res))
    }, [])

    return (
        <div>
            {notes.map(note => {
                const { date, featuredImage, link, title } = note;
                const img = featuredImage.banner.url
                const dateObj = DateTime.fromISO(date);
                return (
                    <a target="_blank" href={`${WR_BASE_URL}${link.url}`} className='no-style'>
                        <div>
                            <Image src={img} width='200' height='125' style={{ objectFit: 'cover' }} />
                            <Typography variant="h4">{getPatchVersion(title)}</Typography>
                            <Typography variant="p">{dateObj.toLocaleString()}</Typography>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default PatchNotes;