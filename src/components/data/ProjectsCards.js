// import * as imageSrc from '../../images/discography-images/';
// let imageUrl = [];
//     imageSrc.map(
//     imageUrl.push(img) 
//     ));


    function importAll(r) {
        return r.keys().map(r);
      }
      
      const images = importAll(require.context('../../images/discography-images/', false, /\.(png|jpe?g|svg)$/));

const ProjectsCards = [
    {
        "ID": -1,
        "Label": "Theo Vandenhoff – In The Throes Of Love",
        "Production": "Not On Label (Theo Vandenhoff Self-Released)",
        "Year": 2024,  // Replace with actual year information
        "Artist": "Theo Vandenhoff",  // Replace with actual artist information
        "Album": "In The Throes Of Love",  // Replace with actual album information
        "Image": "https://i.discogs.com/LGlmmf-ozU3SyMHdmzHx0GBS7QAlk9RhjTxnTKVHfjM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4ODk0/MDg3LTE2OTk4MTE0/NTItNjc3Ny5qcGVn.jpeg"
      },
    {
        "ID": 0,
        "Label": "Cayley Thomas – How Else Can I Tell You?",
        "Production": "Not On Label (Cayley Thomas Self-released)",
        "Year": 2023,
        "Artist": "Cayley Thomas",
        "Album": "How Else Can I Tell You",
        "Image": "https://i.discogs.com/MO-exuiZ3youmkyMpxaM-6uL-5cPicba8Gnxvskaxpg/rs:fit/g:sm/q:90/h:533/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MzA1/Njg0LTE1ODk0Nzg2/MDItNDQwMy5qcGVn.jpeg"
      },
    {
     "ID": 1,
     "Label": "Big Sugar - Heated ‎(2xLP, Album, Dlx, RE, Ora)",
     "Production": "Universal Music Canada",
     "Year": 2022,
     "Artist": "Big Sugar",
     "Album": "Heated",
     "Image": images[1]
    },
    {
     "ID": 2,
     "Label": "Young Guv* - GUV III & IV ‎(2xLP, Comp, Ltd, Neo)",
     "Production": "Run For Cover Records (2)",
     "Year": 2022,
     "Artist": "Young Guv",
     "Album": "GUV III & IV",
     "Image": "https://i.discogs.com/3g3ZM4EyX1vhzb4chE7_mN3kXO7O69HSycsDRN7nIqg/rs:fit/g:sm/q:90/h:440/w:450/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MDgx/OTY4LTE2NTk0Nzcy/MjItODE0Ny5qcGVn.jpeg"
    },
    {
     "ID": 3,
     "Label": "Young Guv* - Guv III 2 versions",
     "Production": "Run For Cover Records (2)",
     "Year": 2022,
     "Artist": "Young Guv",
     "Album": "Guv III",
     "Image": "https://i.discogs.com/jbLUaUQF-K4ET-b4zUfqy7IY6KTH90Zqti87vIwes1M/rs:fit/g:sm/q:90/h:600/w:581/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNDkw/MjEzLTE2NDcxMzQw/MDktMTU2Ny5qcGVn.jpeg",
    },
    {
     "ID": 4,
     "Label": "Jane Inc. - Faster Than I Can Take ‎(LP, Album)",
     "Production": "Telephone Explosion Records",
     "Year": 2022,
     "Artist": "Jane Inc.",
     "Album": "Faster Than I Can Take",
     "Image": "https://i.discogs.com/FXjrDU6VcHPd1QXBzS7nZVGfKQlnD9QVhZLzxXCfYhM/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzNTAz/Njk3LTE2NTQ2NTgz/NzEtNzQwMS5qcGVn.jpeg"
    },
    {
     "ID": 5,
     "Label": "Color Green - Color Green ‎(LP, Album)",
     "Production": "ORG Music, Aquarium Drunkard",
     "Year": 2022,
     "Artist": "Color Green ",
     "Album": " Color Green",
     "Image": "https://i.discogs.com/EnA3tcdpIbKLIacZYBKYjBFcWWEfCAJ3yszDQI3eDrY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzOTQ3/MTgxLTE2NTgzNDU5/OTAtOTY4Ny5qcGVn.jpeg"
    },
    {
     "ID": 6,
     "Label": "Big Sugar - Five Hundred Pounds ‎(LP, Album, RSD, Ltd, RE, RM, Bro)",
     "Production": "Hypnotic Records, Linus Entertainment",
     "Year": 2021,
     "Artist": "Big Sugar ",
     "Album": " Five Hundred Pounds",
     "Image": "https://i.discogs.com/umszWwmvKJZ6g5dw2ydgUjZQqRc89w9JjVMWamXltHQ/rs:fit/g:sm/q:90/h:600/w:581/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NTI3/OTY3LTE2MjY1NTY5/OTctMzMyMS5qcGVn.jpeg"
    },
    {
     "ID": 7,
     "Label": "Absolutely Free - Aftertouch 2 versions",
     "Production": "Boiled Records",
     "Year": 2021,
     "Artist": "Absolutely Free",
     "Album": " Aftertouch 2 versions",
     "Image": "https://i.discogs.com/iD8PZ1ieiqxS4UR9_5bqpgkGxsd3tMZplGWDPbDvdS4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMjIw/NjI0LTE2Mzg1OTU3/NjMtNjA0MS5qcGVn.jpeg"
    },
    {
     "ID": 8,
     "Label": "Blitz\/\/Berlin - PG: Psycho Goreman ‎(LP, Album, Dlx, Blu)",
     "Production": "Waxwork Records, RLJE Films, Raven Banner",
     "Year": 2021,
     "Artist": "Blitz\/\/Berlin ",
     "Album": " PG: Psycho Goreman",
     "Image": "https://i.discogs.com/-1z7kkGR6GqxwCJZfIv3pwqkzjQUS_1-oIbUofy8018/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5OTE5/MzIzLTE2Mjk0MTYw/OTgtODk2OC5qcGVn.jpeg"
    },
    {
     "ID": 9,
     "Label": "Fiver (3) With The Atlantic School Of Spontaneous Composition - Fiver With The Atlantic School Of Spontaneous Composition 3 versions",
     "Production": "You've Changed Records",
     "Year": 2021,
     "Artist": "Fiver",
     "Album": "Fiver With The Atlantic School Of Spontaneous Composition 3 versions",
     "Image": "https://i.discogs.com/zj_qkdjvp2Lx1CEI0MplL3eGSEReTl8ulbB39esOkzk/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NDkx/MjI0LTE2MTk2MTE1/NDMtOTYwNi5qcGVn.jpeg"
    },
    {
     "ID": 10,
     "Label": "Memory Pearl (2) - Music For 7 Paintings 2 versions",
     "Production": "Altin Village & Mine Records",
     "Year": 2020,
     "Artist": "Memory Pearl",
     "Album": "Music For 7 Paintings 2 versions",
     "Image": "https://i.discogs.com/lS1fc_S8YFDhjqFEE7Hep3kdmDNkMSZPyrWoyw9QGro/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwODM4/NzIxLTE2MzU5NjQy/NDctNTkyNy5qcGVn.jpeg"
    },
    {
     "ID": 11,
     "Label": "Cadence Weapon - Parallel World 2 versions",
     "Production": "eOne Music",
     "Year": 2021,
     "Artist": "Cadence Weapon",
     "Album": " Parallel World 2 versions",
     "Image": "https://i.discogs.com/wQtnD2_4kuAXFshF-_balKX0kREmRn-TWe9ErV-guyg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NTk5/MTYxLTE2MjAyMTkw/ODktNjMwNy5qcGVn.jpeg"
    },
    {
     "ID": 12,
     "Label": "Bachman Cummings - The Collection ‎(CD, Album, RE, RM + CD, Album, RE, RM + CD, Album,)",
     "Production": "Sony Music",
     "Year": 2021,
     "Artist": "Bachman Cummings",
     "Album": "The Collection",
     "Image": "https://i.discogs.com/S_LqrpZhKXGKKLayfpN70U9ZzX7_urV2WlkWd0ZKDC8/rs:fit/g:sm/q:90/h:600/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzNzY5/NzQwLTE2Njk2Njc4/NjYtOTM0NC5qcGVn.jpeg"
    },
    {
     "ID": 13,
     "Label": "Civic TV (2) - Black Moon ‎(Cass)",
     "Production": "Flemish Eye",
     "Year": 2021,
     "Artist": "Civic TV (2) ",
     "Album": "Black Moon",
     "Image": "https://i.discogs.com/EvKELGjVbPzRKxuaEhZ9QJjsnpKsilJYZFwyBxI6BIo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwOTY5/Njg5LTE2MzY4NDU3/NDUtNTYwMi5qcGVn.jpeg"
    },
    {
     "ID": 14,
     "Label": "Thug LifeJasmine Sandlas - Thug Life ‎(File, AAC, Single, 256)",
     "Production": "Not On Label",
     "Year": 2021,
     "Artist": "Jasmine Sandlas",
     "Album": " Thug Life",
     "Image": "https://i.discogs.com/5j2L9WalbhitF2AlLGJFwyDKTWTJ9sVblkOxHjaO7ts/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NTE1/NDM1LTE2NjMxODg2/MjAtNDg5Mi5qcGVn.jpeg"
    },
    {
     "ID": 15,
     "Label": "Royi NaJasmine Sandlas - Royi Na ‎(File, AAC, Single, 256)",
     "Production": "Not On Label",
     "Year": 2021,
     "Artist": "Jasmine Sandlas ",
     "Album": "Royi Na",
     "Image": "https://i.discogs.com/HVjoPAE_a1zHs7WpWOCfQ_9ckOSCsy87rLbGjmdknHY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NTE1/MzkwLTE2NjMxODgz/MjEtMjUyMS5qcGVn.jpeg"
    },
    {
     "ID": 16,
     "Label": "Cayley Thomas - How Else Can I Tell You? 3 versions",
     "Production": "Not On Label (Cayley Thomas Self-released)",
     "Year": 2020,
     "Artist": "Cayley Thomas ",
     "Album": "How Else Can I Tell You?",
     "Image": "https://i.discogs.com/MO-exuiZ3youmkyMpxaM-6uL-5cPicba8Gnxvskaxpg/rs:fit/g:sm/q:90/h:533/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MzA1/Njg0LTE1ODk0Nzg2/MDItNDQwMy5qcGVn.jpeg"
    },
    {
     "ID": 17,
     "Label": "Wild Rivers - Songs To Break Up To 2 versions",
     "Production": "Nettwerk",
     "Year": 2020,
     "Artist": "Wild Rivers",
     "Album": " Songs To Break Up To 2 versions",
     "Image": "https://i.discogs.com/1McdbDMq4bOpLrgB5kqx-bSFKWbEt6Yb5tEG5B3KnqM/rs:fit/g:sm/q:90/h:547/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNzAx/MTc0LTE2MzUwMDE3/NTktNTkwNy5qcGVn.jpeg"
    },
    {
     "ID": 18,
     "Label": "Evening Hymns - Heavy Nights ‎(CD, Album)",
     "Production": "Shuffling Feet Records",
     "Year": 2020,
     "Artist": "Evening Hymns",
     "Album": "Heavy Nights",
     "Image": "https://i.discogs.com/yMaiMLErPvUpbhvZP9wA0PJw20sEz3QL33zpa6hch4M/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1Njk0/NjYwLTE1OTYwNDkw/NzAtMzIzOC5qcGVn.jpeg"
    },
    {
     "ID": 19,
     "Label": "Harem Scarem - Change The World 3 versions",
     "Production": "Frontiers Music SRL",
     "Year": 2020,
     "Artist": "Harem Scarem",
     "Album": "Change The World 3 versions",
     "Image": "https://i.discogs.com/KFkc7x_hESOLabZ2iw1WnQ8tQA350ZEx1e1BEQG_7n4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0ODkx/OTMwLTE2NDg2Njgz/ODYtNzQ3NC5qcGVn.jpeg"
    },
    {
     "ID": 20,
     "Label": "Famba Feat. David Aubrey* - I Feel Your Pain ‎(2xFile, FLAC, Single)",
     "Production": "Sony Music Canada",
     "Year": 2020,
     "Artist": "Famba Feat. David Aubrey* ",
     "Album": " I Feel Your Pain",
     "Image": "https://i.discogs.com/Af-eP4DQnXdsnhehwPJeTkDq0AxSrX10Ygnl_bUloVU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MDM5/MzU2LTE1ODU4NjA5/ODgtNjk2OS5qcGVn.jpeg"
    },
    {
     "ID": 21,
     "Label": "Kiss Is Kill - Progress (Single) ‎(2xFile, MP3, Single)",
     "Production": "Not On Label",
     "Year": 2020,
     "Artist": "Kiss Is Kill ",
     "Album": " Progress (Single)",
     "Image": "https://i.discogs.com/Y31tBlxyyz1f70Hv7o3mBufEAu44IrYDxXs32kptrMo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3ODg0/Nzc0LTE2MTU5OTUy/MDMtOTk3Ny5qcGVn.jpeg"
    },
    {
     "ID": 22,
     "Label": "Shade (52) - Combat Rave ‎(LP, Album)",
     "Production": "Sleepless Records (4)",
     "Year": 2020,
     "Artist": "Shade (52)",
     "Album": " Combat Rave",
     "Image": "https://i.discogs.com/7ncZWVuyBS5tQXIc0tfNqpEuGiigdPedwBE7mHDGxuQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MzM1/Mzc0LTE1ODk5MDk1/OTctNjc2Ni5qcGVn.jpeg"
    },
    {
     "ID": 23,
     "Label": "Are You Ok?Marlon Chaplin - Are You Ok? ‎(File, MP3, 320)",
     "Production": "Not On Label (Marlon Chaplin Self-released)",
     "Year": 2020,
     "Artist": "Marlon Chaplin ",
     "Album": " Are You Ok?",
     "Image": "https://i.discogs.com/S_9dFub8dHBopDkFzh64n2apj5p8tuHwdA0mBWvOmOI/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1Mzkw/NTAyLTE1OTA3NjM3/OTctNTczNi5wbmc.jpeg"
    },
    {
     "ID": 24,
     "Label": "Kiss Is Kill - 100% (Single) ‎(2xFile, MP3, Single)",
     "Production": "Not On Label",
     "Year": 2020,
     "Artist": "Kiss Is Kill",
     "Album": " 100% (Single)",
     "Image": "https://i.discogs.com/Nn12ka2PmYxT3S4UKICDEErHAWN-mC4X6Q9RFpD5ToY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3ODg0/NDcxLTE2MTU5OTM0/OTAtNDQ1Ny5wbmc.jpeg"
    },
    {
     "ID": 25,
     "Label": "Madison Violet - Everything's Shifting ‎(CD, Album)",
     "Production": "Passenger Sounds",
     "Year": 2019,
     "Artist": "Madison Violet ",
     "Album": " Everything's Shifting",
     "Image": "https://i.discogs.com/6GgPz-yrgMGe2Z7PZIN6QmeEuEOgfn_6KrJPAphzWvU/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3MTU2/ODU3LTE2MTE5MDUz/NjYtMzkzOC5qcGVn.jpeg"
    },
    {
     "ID": 26,
     "Label": "Snotty Nose Rez Kids - Trapline 2 versions",
     "Production": "Not On Label (Snotty Nose Rez Kids Self-released)",
     "Year": 2019,
     "Artist": "Snotty Nose Rez Kids",
     "Album": "Trapline 2 versions",
     "Image": "https://i.discogs.com/f9NPQI5AySXTjZ5Zh3ZMULfufwjIXMX8wT-XPUyq8E0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNzcw/MDU3LTE1NjA3Mjk1/MDktMjM1MC5qcGVn.jpeg"
    },
    {
     "ID": 27,
     "Label": "Kerri Ough - One Day Soon 2 versions",
     "Production": "Not On Label (Kerri Ough Self-released)",
     "Year": 2019,
     "Artist": "Kerri Ough ",
     "Album": "One Day Soon 2 versions",
     "Image": "https://i.discogs.com/6eVQ7beD3_apop3wfRcAHE62lcMixH2WXRYaEy12DfU/rs:fit/g:sm/q:90/h:530/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMzcz/ODc5LTE1NTMwMjcz/NTktOTgzMy5qcGVn.jpeg"
    },
    {
     "ID": 28,
     "Label": "Absolutely Free - Geneva Freeport ‎(3xFile, FLAC, EP)",
     "Production": "Idée Fixe",
     "Year": 2019,
     "Artist": "Absolutely Free",
     "Album": "Geneva Freeport",
     "Image": "https://i.discogs.com/dMH4Pq2WzsKRAq6McIKkt6vGcrybqPVv0c9cFOhb538/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMjIw/NzUzLTE2Mzg1OTcx/NTUtNDE0Ny5qcGVn.jpeg"
    },
    {
     "ID": 29,
     "Label": "Gypsy Chief Goliath - Masters Of Space And Time ‎(LP, Album, Ltd, Gre)",
     "Production": "Kozmik Artifactz",
     "Year": 2019,
     "Artist": "Gypsy Chief Goliath ",
     "Album": " Masters Of Space And Time",
     "Image": "https://i.discogs.com/atmmLKGFZ_Vy7NiD0ldXT25anP7M1lkosXMnCEl-HI4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNjI4/MzUzLTE1OTk2NzIw/ODYtNTgxNS5qcGVn.jpeg"
    },
    {
     "ID": 30,
     "Label": "Black Sea Dahu - No Fire In The Sand 2 versions",
     "Production": "Mouthwatering Records",
     "Year": 2019,
     "Artist": "Black Sea Dahu",
     "Album": "No Fire In The Sand 2 versions",
     "Image": "https://i.discogs.com/qsSixgDcypXQiei5y68SFOTwgbSIUL-dlizgUhFcs2k/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MTkz/NDMzLTE1Njk5NDIy/NDktNDgzMy5qcGVn.jpeg"
    },
    {
     "ID": 31,
     "Label": "Young Guv* - Guv I & II 3 versions",
     "Production": "Run For Cover Records (2)",
     "Year": 2019,
     "Artist": "Young Guv* ",
     "Album": "Guv I & II 3 versions",
     "Image": "https://i.discogs.com/MoSNCX9taNYuDmovUZMXFFZN-9R54hzgyN1fvpGD5-o/rs:fit/g:sm/q:90/h:225/w:225/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NDAy/NTcyLTE1NzM4MTM0/NjctNjEzMC5qcGVn.jpeg"
    },
    {
     "ID": 32,
     "Label": "Darcy Windover - COPE ‎(LP, Album)",
     "Production": "Not On Label",
     "Year": 2019,
     "Artist": "Darcy Windover ",
     "Album": "COPE",
     "Image": "https://i.discogs.com/xu5n2OH3rSBkmxOfhOMCTiaxm50iA1EB_kW5XZ6R8DY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzOTMx/MzA5LTE1NjQzMzA0/NDktODQ2NC5qcGVn.jpeg"
    },
    {
     "ID": 33,
     "Label": "Leela Gilday - North Star Calling ‎(CD, Album)",
     "Production": "Diva Sound Records",
     "Year": 2019,
     "Artist": "Leela Gilday ",
     "Album": "North Star Calling",
     "Image": "https://i.discogs.com/ExRxQZidQMuhTz5OGkx6Q92--sSgTvixffDlbPiWmvg/rs:fit/g:sm/q:90/h:530/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MDMy/OTY4LTE2NjMwODA2/MDItNzM5NS5qcGVn.jpeg"
    },
    {
     "ID": 34,
     "Label": "Sleepless Nights (4) - Spendin' Money ‎(File, MP3, Single, 320)",
     "Production": "Acadian Embassy",
     "Year": 2019,
     "Artist": "Sleepless Nights",
     "Album": "Spendin' Money",
     "Image": "https://i.discogs.com/oxLIDK7gGFxwBsv0WiKheRa_mtaEoWKgBITWJ0fJDJY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MDY0/MTg0LTE1ODYxOTk1/MTEtMjI1Ni5qcGVn.jpeg"
    },
    {
     "ID": 35,
     "Label": "Another Crush - Crushed EP ‎(File, MP3, EP)",
     "Production": "Not On Label (Another Crush Self-released)",
     "Year": 2019,
     "Artist": "Another Crush",
     "Album": " Crushed EP",
     "Image": "https://i.discogs.com/RqEPGMtO8jTRb9-yQrBm4O1CAjRXKxr25ljBNpvIE4M/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMTIy/ODQzLTE2MzA4NDY3/NTctNjczOS5qcGVn.jpeg"
    },
    {
     "ID": 36,
     "Label": "Mr. Attic - Add Rhyme & Mix - A.R.M. ‎(LP, Album, Ltd)",
     "Production": "Chuku Records",
     "Year": 2019,
     "Artist": "Mr. Attic ",
     "Album": "Add Rhyme & Mix - A.R.M.",
     "Image": "https://i.discogs.com/4scTrrRJ2mGqnd7myhbG4iGJJ4aAAq-2zlI__ry9AE4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NDM5/MjgxLTE1NzQ1NDUw/OTctNDIxMS5qcGVn.jpeg"
    },
    {
     "ID": 37,
     "Label": "Cecile Monique - Genesis ‎(CD, Album)",
     "Production": "Not On Label (Cecile Monique Self-released)",
     "Year": 2018,
     "Artist": "Cecile Monique",
     "Album": " Genesis",
     "Image": "https://i.discogs.com/RLPPhWoknoPuzvY7ncZn-O4ZDmAs3AvG_HFrAK4EdT8/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MzM1/NzM5LTE1ODQyODgx/MTAtNTMxNy5qcGVn.jpeg"
    },
    {
     "ID": 38,
     "Label": "Good Lovelies* - Shapeshifters 3 versions",
     "Production": "Not On Label (The Good Lovelies Self-released)",
     "Year": 2018,
     "Artist": "Good Lovelies",
     "Album": "Shapeshifters 3 versions",
     "Image": "https://i.discogs.com/-tzQGq5eNeQSQmRng5x0M7qbqRrQLxBIjkme5DxalQU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzEw/NzE5LTE1MjE1NTM0/NDctMjQ5Ny5qcGVn.jpeg"
    },
    {
     "ID": 39,
     "Label": "Cauldron - New Gods 2 versions",
     "Production": "The End Records",
     "Year": 2018,
     "Artist": "Cauldron",
     "Album": " New Gods 2 versions",
     "Image": "https://i.discogs.com/40YpeADDrE7cGtf4r1m75BUgbhe7QMsztO9mt0vhWTQ/rs:fit/g:sm/q:90/h:519/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNDkx/NjY2LTE1MzYzNDQx/ODQtNzA5MS5qcGVn.jpeg"
    },
    {
     "ID": 40,
     "Label": "Great Lake Swimmers - The Waves, The Wake 3 versions",
     "Production": "Nettwerk, Weewerk",
     "Year": 2018,
     "Artist": "Great Lake Swimmers ",
     "Album": "The Waves, The Wake",
     "Image": "https://i.discogs.com/UeYmZVTwsSJWhhuEknJEQJOOivLFtk4fs0dmOfZ1b8k/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNDM1/MzgyLTE1MzUyMzIw/MjYtOTU1NS5qcGVn.jpeg"
    },
    {
     "ID": 41,
     "Label": "Black Sea Dahu - White Creatures 2 versions",
     "Production": "Mouthwatering Records",
     "Year": 2018,
     "Artist": "Black Sea Dahu",
     "Album": "White Creatures 2 versions",
     "Image": "https://i.discogs.com/yzXKnv6sVyBQLAvZNesphqoqAiX6aICtAgk0NEGHT3k/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNzQx/NzMxLTE1NDEwODY4/MDYtNTQ5My5qcGVn.jpeg"
    },
    {
     "ID": 42,
     "Label": "Fortunate Ones - Hold Fast ‎(LP, Album)",
     "Production": "Old Farm Pony Records",
     "Year": 2018,
     "Artist": "Fortunate Ones",
     "Album": "Hold Fast",
     "Image": "https://i.discogs.com/VFsbk5XM51CXP7cfwy8VDUGh0_7RFmDGlVGi7NI_-N0/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMjQz/MDExLTE1MzEzMTg1/ODctOTcxOS5qcGVn.jpeg"
    },
    {
     "ID": 43,
     "Label": "Manafest - Stones ‎(CD, Album)",
     "Production": "Manafest Productions",
     "Year": 2017,
     "Artist": "Manafest",
     "Album": "Stones",
     "Image": "https://i.discogs.com/_9dzaS90EAV7Q3EHNsdCh09uS-FoJloT8st7wpHu6jc/rs:fit/g:sm/q:90/h:514/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNjY5/MTU4LTE1MTc2NzUz/ODItNzI0OC5qcGVn.jpeg"
    },
    {
     "ID": 44,
     "Label": "The Hydden - Anthems For The Wild And Hungry 2 versions",
     "Production": "Wild Fangs Records",
     "Year": 2016,
     "Artist": "The Hydden",
     "Album": "Anthems For The Wild And Hungry 2 versions",
     "Image": "https://i.discogs.com/u8fcyL6ujDLExh64zy7kZB_5d2i-N_kTnUBEU53tWog/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTc1/ODE1LTE1MDAyMTE4/MzQtNjIwNS5qcGVn.jpeg"
    },
    {
     "ID": 45,
     "Label": "Birds Of Bellwoods - Victoria 2 versions",
     "Production": "Not On Label",
     "Year": 2017,
     "Artist": "Birds Of Bellwoods",
     "Album": "Victoria 2 versions",
     "Image": "https://i.discogs.com/chHWcWBu3UswTdzrHbYw94ZKd0nVyfD9kKPPxSObsco/rs:fit/g:sm/q:90/h:530/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNzQ2/MTE0LTE1NDExNjc3/NDQtOTI2MS5qcGVn.jpeg"
    },
    {
     "ID": 46,
     "Label": "Various - The Return Of Son Of Gutbucket 2 versions",
     "Production": "Cardinal Fuzz, Noiseagonymayhem Records",
     "Year": 2017,
     "Artist": "Various",
     "Album": "The Return Of Son Of Gutbucket 2 versions",
     "Image": "https://i.discogs.com/74kUT6EornN5CdXLXloj2w7r-FrpZ3v4aWo0jfCASAg/rs:fit/g:sm/q:90/h:563/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNzM5/OTU0LTE1MjE4MDYy/MDUtMjU3Mi5qcGVn.jpeg"
    },
    {
     "ID": 47,
     "Label": "Harem Scarem - United ‎(CD, Album)",
     "Production": "Frontiers Music SRL",
     "Year": 2017,
     "Artist": "Harem Scarem",
     "Album": "United",
     "Image": "https://i.discogs.com/fVJ-2iBULMKVfPAaIdeqcFrkwW04YLpsXkhqbigRABI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjc5/Mzc0LTE0OTQ1ODEy/OTAtNjM0MS5qcGVn.jpeg"
    },
    {
     "ID": 48,
     "Label": "Emily Haines & The Soft Skeleton - Choir Of The Mind 2 versions",
     "Production": "Last Gang Records",
     "Year": 2017,
     "Artist": "Emily Haines & The Soft Skeleton",
     "Album": "Choir Of The Mind 2 versions",
     "Image": "https://i.discogs.com/-21hhm46vRSdQnHvwfkBIj9MCIqZEbOWeFICPbhP-cc/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwODYw/ODMzLTE1MDU1MTc4/NDMtNTcxNy5qcGVn.jpeg"
    },
    {
     "ID": 49,
     "Label": "Do Make Say Think - Stubborn Persistent Illusions 2 versions",
     "Production": "Constellation",
     "Year": 2017,
     "Artist": "Do Make Say Think",
     "Album": "Stubborn Persistent Illusions 2 versions",
     "Image": "https://i.discogs.com/d_XXV6pAxbqSrBhshDE0vzfYgnsEwNDDKvh_KJNyQLs/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMzA4/MDA1LTE0OTk4NzA3/NjEtMTY3OS5qcGVn.jpeg"
    },
    {
     "ID": 50,
     "Label": "DJ Format & Abdominal - Still Hungry 2 versions",
     "Production": "AAF",
     "Year": 2017,
     "Artist": "DJ Format & Abdominal",
     "Album": "Still Hungry 2 versions",
     "Image": "https://i.discogs.com/U2T9jVLZVJqA_Pwe6QmK-mrZzNUunwwN_eT2YbRJOAY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMTE5/NjQ0LTE1OTkzOTM2/NTAtNTA1OC5qcGVn.jpeg"
    },
    {
     "ID": 51,
     "Label": "Chad Price (4) - Chad Price ‎(2xLP, Album)",
     "Production": "Chad Price Music",
     "Year": 2017,
     "Artist": "Chad Price",
     "Album": "Chad Price",
     "Image": "https://i.discogs.com/CERhpXMIm4ZH_U23zGHmC9Y74f633yBChNh-pzwf8Xg/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjE5/OTQ3LTE1MTk1NDI3/NzQtNTA1MS5qcGVn.jpeg"
    },
    {
     "ID": 52,
     "Label": "Full Circle (17) - The Season ‎(7\", Single)",
     "Production": "Chuku Records",
     "Year": 2017,
     "Artist": "Full Circle",
     "Album": " The Season",
     "Image": "https://i.discogs.com/WVRijF-suScR73BS4LcnJzEV2WndT72UDzVN03DaALU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTgw/NjU1LTE1MDE4NTIy/NjAtNzQxNi5wbmc.jpeg"
    },
    {
     "ID": 53,
     "Label": "Mimi O'Bonsawin - Connected ‎(CD)",
     "Production": "Not On Label (Mimi O'Bonsawin Self-released)",
     "Year": 2017,
     "Artist": "Mimi O'Bonsawin",
     "Album": "Connected",
     "Image": "https://i.discogs.com/s9SZWZpCnQ3CGTpZHAasFMk9wzqv6RhxECOxVXokQiA/rs:fit/g:sm/q:90/h:538/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MDk5/ODg0LTE2NTk2MzEz/NjQtMzUxMy5qcGVn.jpeg"
    },
    {
     "ID": 54,
     "Label": "Crown Lands - Rise Over Run ‎(CD, EP)",
     "Production": "Not On Label (Crown Lands Self-released)",
     "Year": 2017,
     "Artist": "Crown Lands",
     "Album": " Rise Over Run ",
     "Image": "https://i.discogs.com/VTpkZXpJnRkKwCZI_X7ELWCfNDiSyGR9uObuLvTjjb8/rs:fit/g:sm/q:90/h:513/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNDcx/MjIzLTE2MjQ3NTE5/MjEtMzUzOC5wbmc.jpeg"
    },
    {
     "ID": 55,
     "Label": "Floodland (2) - Static Walls ‎(CDr, Album)",
     "Production": "Not On Label (Floodland (2) Self-released)",
     "Year": 2017,
     "Artist": "Floodland",
     "Album": " Static Walls",
     "Image": "https://i.discogs.com/CAUoEX2Wprt6bzRdwKR5Vg4dQKy1q9cT5_5XqdOgUIQ/rs:fit/g:sm/q:90/h:538/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNzk0/MTgyLTE1MDQ0MzUy/NjUtNDc5MC5qcGVn.jpeg"
    },
    {
     "ID": 56,
     "Label": "Sleepless Nights (4) - Keith Hamilton ‎(4xFile, MP3, EP, 320)",
     "Production": "Forward Music Group, Acadian Embassy",
     "Year": 2017,
     "Artist": "Sleepless Nights",
     "Album": "Keith Hamilton",
     "Image": "https://i.discogs.com/puI1DfZla00ZW4nsr1xMzpuwjphr-wDeBJx67vs2Q5s/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNzIx/OTkxLTE1MDMwNzkx/NDYtMzQzMi5qcGVn.jpeg"
    },
    {
     "ID": 57,
     "Label": "Krief - Automanic ‎(2xLP, Album)",
     "Production": "Culvert Music",
     "Year": 2016,
     "Artist": "Krief",
     "Album": "Automanic",
     "Image": "https://i.discogs.com/GOfK0TJIcvwgz8suHZ_THR8RrNyw_x-VU9iOzHwAB1U/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkxNTM3/MTktMTQ3NTcxOTQ3/NC02ODUyLmpwZWc.jpeg"
    },
    {
     "ID": 58,
     "Label": "John Southworth - Small Town Water Tower ‎(LP, Album)",
     "Production": "Tin Angel Records",
     "Year": 2016,
     "Artist": "John Southworth",
     "Album": "Small Town Water Tower",
     "Image": "https://i.discogs.com/6KzqpZwvdYjXrlMSPE037On44-0C8WVJpsna6LqMWnw/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0MDY5/NTgtMTQ4Mjc1ODcx/Ny01ODYxLmpwZWc.jpeg"
    },
    {
     "ID": 59,
     "Label": "Chrisjay - The Day She Ran Away 2 versions",
     "Production": "Not On Label (Chrisjay Self-released)",
     "Year": 2016,
     "Artist": "Chrisjay",
     "Album": "The Day She Ran Away 2 versions",
     "Image": "https://i.discogs.com/-jHLSobB8BIOTC4xwJENdhsSfrdMAnYKLjMTmGXsn-g/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODA3/NTQyLTE1MjI3MTIz/MzktMzAyOS5qcGVn.jpeg"
    },
    {
     "ID": 60,
     "Label": "Ice Cream (9) - Love, Ice Cream 2 versions",
     "Production": "Bad Actors Inc.",
     "Year": 2016,
     "Artist": "Ice Cream",
     "Album": "Love, Ice Cream 2 versions",
     "Image": "https://i.discogs.com/f5iBKTrV8MTNyNvqn1eJnqz8E29C7wQZr2RotGs_ZyY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk3NDE3/MzktMTQ4NTY0MjI4/NS0yNzQ5LmpwZWc.jpeg"
    },
    {
     "ID": 61,
     "Label": "Jeff Healey - Heal My Soul 10 versions",
     "Production": "Provogue",
     "Year": 2016,
     "Artist": "Jeff Healey",
     "Album": "Heal My Soul 10 versions",
     "Image": "https://i.discogs.com/XR37m-A4_iATrNRQbQG9Qn1sPrhF4OcN1t1_bF9AxHs/rs:fit/g:sm/q:90/h:551/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgzMTA1/MDctMTQ1OTEwNDQ2/Mi0zMTAyLmpwZWc.jpeg"
    },
    {
     "ID": 62,
     "Label": "A Tribe Called Red - We Are The Halluci Nation 5 versions",
     "Production": "Radicalized Records, Pirates Blend",
     "Year": 2016,
     "Artist": "A Tribe Called Red",
     "Album": "We Are The Halluci Nation 5 versions",
     "Image": "https://i.discogs.com/MaLjwdiVDGhnZ60aY9S2Ar58iD-RglQ9UIphLJSl_g4/rs:fit/g:sm/q:90/h:521/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkyOTAy/ODctMTUwMTMyNDMz/Ni0yMTUwLmpwZWc.jpeg"
    },
    {
     "ID": 63,
     "Label": "EYE (16) - Vision And Ageless Light 3 versions",
     "Production": "The Laser's Edge",
     "Year": 2016,
     "Artist": "EYE",
     "Album": "Vision And Ageless Light 3 versions",
     "Image": "https://i.discogs.com/8u0-Tqg2kXYhr_MKAE87rsIgZAI12Sw4xXIMCJcJmME/rs:fit/g:sm/q:90/h:600/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzOTE5/NzAtMTQ3OTc0NDY0/My02OTIxLmpwZWc.jpeg"
    },
    {
     "ID": 64,
     "Label": "Jon Epworth & The Miracle Sweat - Jon Epworth & The Miracle Sweat ‎(12\", Album)",
     "Production": "Taut Beats",
     "Year": 2016,
     "Artist": "Jon Epworth & The Miracle Sweat",
     "Album": " Jon Epworth & The Miracle Sweat",
     "Image": "https://i.discogs.com/Jtt_zw8zFqAQ58KtuOquDS_Fa9XwMA_Xmkg125a3LBE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTA0/MzE5LTE1MDYyNjc5/MDUtODQyOC5qcGVn.jpeg"
    },
    {
     "ID": 65,
     "Label": "Opendoor Worship - Draw Close ‎(CD, Album)",
     "Production": "Not on label",
     "Year": 2016,
     "Artist": "Opendoor Worship",
     "Album": " Draw Close",
     "Image": "https://i.discogs.com/vXgfWuVj5yiw1iU-hdowm8GCvViwwP1umHF7AwAv5To/rs:fit/g:sm/q:90/h:200/w:200/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzODI3/NTA3LTE1NjIwMDk1/NzMtNzcwMS5qcGVn.jpeg"
    },
    {
     "ID": 66,
     "Label": "Myriad3 - Moons ‎(CD, Album)",
     "Production": "Alma Records",
     "Year": 2016,
     "Artist": "Myriad3",
     "Album": " Moons",
     "Image": "https://i.discogs.com/gJqTcfORQsW81F92KsB9u8M2Bd_99ujzilNKBMB0ntU/rs:fit/g:sm/q:90/h:538/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMzI4/MjI1LTE2NTc3MTMy/NDktMTE5Mi5qcGVn.jpeg"
    },
    {
     "ID": 67,
     "Label": "Lakemount Worship Centre - Sovereign Strong - Live ‎(CD, Album)",
     "Production": "Maranatha! Music",
     "Year": 2016,
     "Artist": "Lakemount Worship Centre",
     "Album": " Sovereign Strong",
     "Image": "https://i.discogs.com/_L7Ulms5xx3iHZWx81eVtvgJH1raXi6ILVfluFB9J3A/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4MTU0/MDg0LTE2MTc1NjQ0/NjUtNDc3OC5qcGVn.jpeg"
    },
    {
     "ID": 68,
     "Label": "The Lonesome Ace Stringband - Gone For Evermore ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2016,
     "Artist": "The Lonesome Ace Stringband",
     "Album": " Gone For Evermore",
     "Image": "https://i.discogs.com/P1vLPzXmDJeUzE2xC3tNWRVLY8dll7JU2c7Cj-zKGOs/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNTUy/Mjc0LTE1MTgzNjgz/NTUtMzcwMS5qcGVn.jpeg"
    },
    {
     "ID": 69,
     "Label": "Crown Lands - Mantra ‎(CD, EP)",
     "Production": "Not On Label (Crown Lands Self-released)",
     "Year": 2016,
     "Artist": "Crown Lands",
     "Album": " Mantra",
     "Image": "https://i.discogs.com/bYGMhaVkMGIZMvby8gtDonM64tUM1mINIXJ5UFMbqb0/rs:fit/g:sm/q:90/h:512/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNDcx/MTYyLTE2MjQ3NTI5/NTItNzcyMS5wbmc.jpeg"
    },
    {
     "ID": 70,
     "Label": "Jeff Healey - Heal My Soul: Bonus Sessions ‎(10\", EP)",
     "Production": "Convexe Entertainment",
     "Year": 2016,
     "Artist": "Jeff Healey ",
     "Album": " Heal My Soul: Bonus Sessions",
     "Image": "https://i.discogs.com/nsY8299tomeDVKsWoVvbjoCWSruF9biD63aVoOJxv-w/rs:fit/g:sm/q:90/h:585/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg1MTIy/OTItMTU4OTAxNDg3/MS05NTIzLmpwZWc.jpeg"
    },
    {
     "ID": 71,
     "Label": "Laura Roy - Laura Roy ‎(CDr, EP)",
     "Production": "Not On Label (Laura Roy Self-released)",
     "Year": 2016,
     "Artist": "Laura Roy",
     "Album": " Laura Roy",
     "Image": "https://i.discogs.com/x7dwZwCCJ8bVcr7345K1uKkcD2i-Fw9_7pZV3cwlQbA/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkwMjgw/NzAtMTQ3MzUyNzky/NC0yODU2LmpwZWc.jpeg"
    },
    {
     "ID": 72,
     "Label": "Bedouin Soundclash - Sounding A Mosaic 2 versions",
     "Production": "SideOneDummy Records",
     "Year": 2015,
     "Artist": "Bedouin Soundclash",
     "Album": " Sounding A Mosaic 2 versions",
     "Image": "https://i.discogs.com/34Pv6J-OCAv-2HySYTTz4zBOHYgIBRrPK0VaOn6qPnI/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxNTk0/Ny0xMjM5MTk0MTA5/LmpwZWc.jpeg"
    },
    {
     "ID": 73,
     "Label": "Nick Ferrio - Come Hell Or High Water 2 versions",
     "Production": "Headless Owl Records, Shuffling Feet Records",
     "Year": 2015,
     "Artist": "Nick Ferrio",
     "Album": " Come Hell Or High Water 2 versions",
     "Image": "https://i.discogs.com/QtYGyOEcB1N2rudF7e4tKuWK6SGddKyZhv1AmcCOkQY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwMzI1/NDYtMTQzMjEyNDAz/OS04ODE3LmpwZWc.jpeg"
    },
    {
     "ID": 74,
     "Label": "Nick Ferrio - Amongst The Coyotes And Birdsongs 6 versions",
     "Production": "Headless Owl Records, Shuffling Feet Records",
     "Year": 2015,
     "Artist": "Nick Ferrio ",
     "Album": " Amongst The Coyotes And Birdsongs 6 versions",
     "Image": "https://i.discogs.com/YYpEioT5tdOei4Qf_wSsYRXb3FiEPwlUOUjUE-3kztM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwODQ4/OTctMTQzMzM1MTg4/Ni03Mzc2LmpwZWc.jpeg"
    },
    {
     "ID": 75,
     "Label": "The Wooden Sky - Let's Be Ready ‎(LP, Album)",
     "Production": "Chelsea Records (8)",
     "Year": 2015,
     "Artist": "The Wooden Sky",
     "Album": "Let's Be Ready",
     "Image": "https://i.discogs.com/YlUeu60s_LrUVF-gKjRGjldxO9G5846IPq3YkH2PVtI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyOTc1/NTEwLTE1NDU4MzM5/MjEtNjU1NS5qcGVn.jpeg"
    },
    {
     "ID": 76,
     "Label": "Young Guv* - Ripe 4 Luv 4 versions",
     "Production": "Slumberland Records",
     "Year": 2015,
     "Artist": "Young Guv",
     "Album": "Ripe 4 Luv 4 versions",
     "Image": "https://i.discogs.com/Z7DTuTeK48JtAMkQ9eIswEql9zw0Yy_n1-YWeHQbW8o/rs:fit/g:sm/q:90/h:200/w:200/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY3NDA5/MTItMTQyNTY3MzQ0/Mi0zODU5LmpwZWc.jpeg"
    },
    {
     "ID": 77,
     "Label": "David Barrett Trio - David Barrett Trio II ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2015,
     "Artist": "David Barrett Trio",
     "Album": "David Barrett Trio II",
     "Image": "https://i.discogs.com/Lhm8Wxy-MPF9BudAS5VO7hIRU-BOPNcOAK0XrcaoR-Y/rs:fit/g:sm/q:90/h:214/w:235/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg5Nzcx/MDgtMTQ3MjYxMzg0/OS0zMjgyLmpwZWc.jpeg"
    },
    {
     "ID": 78,
     "Label": "Alyssa Reid - Phoenix ‎(CD, Album)",
     "Production": "Wax Records (4)",
     "Year": 2015,
     "Artist": "Alyssa Reid",
     "Album": "Phoenix",
     "Image": "https://i.discogs.com/0nV06DNc_Ga3E6b4IIiG6Cv0KfQVtYelEm45eMtkMQM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg1Mzgw/MDctMTQ2MzYwNDA1/MS04MTIzLmpwZWc.jpeg"
    },
    {
     "ID": 79,
     "Label": "Ron Korb - Asia Beauty ‎(CD, Album)",
     "Production": "Humbledragon",
     "Year": 2015,
     "Artist": "Ron Korb",
     "Album": "Asia Beauty",
     "Image": "https://i.discogs.com/gV4vwl93jeKVPIA3FEHRYHAAFtnEOtL_KlOy8gzMpbk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNjkz/MDg2LTE1NDAxNTc5/NTctOTE1Ni5qcGVn.jpeg"
    },
    {
     "ID": 80,
     "Label": "James Downham - James Downham ‎(CD, EP)",
     "Production": "Not On Label",
     "Year": 2015,
     "Artist": "James Downham",
     "Album": "James Downham",
     "Image": ""
    },
    {
     "ID": 81,
     "Label": "Crossley Hunter - Crossley Hunter ‎(CD, Album)",
     "Production": "Blacktop Records",
     "Year": 2015,
     "Artist": "Crossley Hunter",
     "Album": "Crossley Hunter",
     "Image": "https://i.discogs.com/VF0C0DyZqLfe8zSqauaIppbMfCv7ivGs-kjst0_7JPo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTczOTM2/OTUtMTQ0MDUzNjk0/OC03MzQzLmpwZWc.jpeg"
    },
    {
     "ID": 82,
     "Label": "The Dying Arts - You Had It Coming ‎(CD, EP)",
     "Production": "Culvert Music",
     "Year": 2015,
     "Artist": "The Dying Arts",
     "Album": "You Had It Coming",
     "Image": "https://i.discogs.com/AdxENajAsnw7Md-9VLVHdzbV5VcrUtCNpm7xa-BPUfE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExOTA4/NzgyLTE1MjQ1Mzgw/MzItNzQxMS5qcGVn.jpeg"
    },
    {
     "ID": 83,
     "Label": "Good Lovelies* - Under The Mistletoe ‎(LP, Album)",
     "Production": "Not On Label (The Good Lovelies Self-released)",
     "Year": 2014,
     "Artist": "Good Lovelies",
     "Album": "Under The Mistletoe",
     "Image": "https://i.discogs.com/QJjevSFODU2T3rJMt0O6NtWs_Ix7YgpBkdoUmAGrpyw/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0Mjkz/MjctMTQxOTAyNjg4/Ny03MDM1LmpwZWc.jpeg"
    },
    {
     "ID": 84,
     "Label": "Sumo Cyco - Lost In Cyco City ‎(CD, Album)",
     "Production": "Radio Ghost Music",
     "Year": 2014,
     "Artist": "Sumo Cyco",
     "Album": "Lost In Cyco City",
     "Image": "https://i.discogs.com/mxwFuZJKjuhtOq3gJPLRv_SUzjwzrfvUP5d49Uax8RQ/rs:fit/g:sm/q:90/h:519/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY3NzY0/OTQtMTQ2MjQwMTM0/My05Nzg4LmpwZWc.jpeg"
    },
    {
     "ID": 85,
     "Label": "NQ Arbuckle - The Future Happens Anyway 2 versions",
     "Production": "Blue Rose Records (2), Six Shooter Records",
     "Year": 2014,
     "Artist": "NQ Arbuckle",
     "Album": "The Future Happens Anyway 2 versions",
     "Image": "https://i.discogs.com/agT8dUkRcoyy31zTtMIDnbwwKmet-rhnQK7_3emxgr8/rs:fit/g:sm/q:90/h:528/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0NTYx/MjQtMTU3ODQyNDMx/MS01NDI5LmpwZWc.jpeg"
    },
    {
     "ID": 86,
     "Label": "Reuben And The Dark - Funeral Sky 2 versions",
     "Production": "Arts & Crafts",
     "Year": 2014,
     "Artist": "Reuben And The Dark",
     "Album": "Funeral Sky 2 versions",
     "Image": "https://i.discogs.com/Y3ei0mGNf0m7qotdua3du3kNOXXcXuMDraRZZz_58MU/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5OTU1/NDMtMTQwODM2NTg0/OC04NDc2LmpwZWc.jpeg"
    },
    {
     "ID": 87,
     "Label": "Justin Nozuka - Ulysees ‎(CD, Album)",
     "Production": "Warner Music Canada Co.",
     "Year": 2014,
     "Artist": "Justin Nozuka",
     "Album": "Ulysees",
     "Image": "https://i.discogs.com/49vp9QIYoH0wUVGnsMN5nvXC0ElpyN8GyZL1HCG-NkQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1NjM3/NDAtMTQ0NDEwMTE0/My00Mzk4LmpwZWc.jpeg"
    },
    {
     "ID": 88,
     "Label": "Good Lovelies* - Winter's Calling ‎(CD, EP)",
     "Production": "Six Shooter Records",
     "Year": 2014,
     "Artist": "Good Lovelies",
     "Album": " Winter's Calling",
     "Image": "https://i.discogs.com/unuPFcjIEiLPXxmn2-7lMnoo-fq_090XiQ1oEYwoxtE/rs:fit/g:sm/q:90/h:541/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY2Njk1/NjYtMTQyNDM4Nzkz/NC0yODg3LmpwZWc.jpeg"
    },
    {
     "ID": 89,
     "Label": "Various - Discovery Series Volume Two ‎(2x7\", Comp, Gat)",
     "Production": "Scion Sessions",
     "Year": 2014,
     "Artist": "Various",
     "Album": " Discovery Series Volume Two",
     "Image": "https://i.discogs.com/Htv9uRrxDk8oYsg0i3_5uGaJ4BXbBJ7AMrC3rbTLaZ8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0MjI3/MjEtMTYxOTg5MTE4/Ni04MTYyLnBuZw.jpeg"
    },
    {
     "ID": 90,
     "Label": "Kiss Is Kill - Imposter Syndrome ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2014,
     "Artist": "Kiss Is Kill",
     "Album": " Imposter Syndrome",
     "Image": "https://i.discogs.com/O5U27Ab535k4STQuRZu0z7eSOY9rc4biox9TIBXjiEs/rs:fit/g:sm/q:90/h:536/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3ODAy/MTMwLTE2MTU1OTY0/NTYtNTE2NC5qcGVn.jpeg"
    },
    {
     "ID": 91,
     "Label": "AlyssaReid* - Timebomb ‎(CD, Album)",
     "Production": "Wax Records (4)",
     "Year": 2014,
     "Artist": "AlyssaReid",
     "Album": "Timebomb",
     "Image": "https://i.discogs.com/_WCmAvPXGTWbV6PWp-OPKbjqAKwrwoAyH1QP3mH_diY/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU0MDk1/NDAtMTM5MjY0NzM3/My0xMTg1LmpwZWc.jpeg"
    },
    {
     "ID": 92,
     "Label": "Maylee Todd - Escapology ‎(LP, Album, Whi)",
     "Production": "Do Right! Music",
     "Year": 2013,
     "Artist": "Maylee Todd",
     "Album": " Escapology",
     "Image": "https://i.discogs.com/C_6fkCh4ZGdBHmJQ-1l5i7xGyZ2K6LGhaC1wGH_7tOI/rs:fit/g:sm/q:90/h:350/w:350/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1MDQ4/MTctMTM2Njc2MTc4/Ni02MTk5LmpwZWc.jpeg"
    },
    {
     "ID": 93,
     "Label": "Wildlife (7) - ...On The Heart ‎(CD, Album, Gat)",
     "Production": "Wax Records (4)",
     "Year": 2013,
     "Artist": "Wildlife",
     "Album": "On The Heart",
     "Image": "https://i.discogs.com/zFvacKpNrjikMSto-dIA38jF0vABb7Y-DVIEgoi7qM8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODU2/NjMxLTE1NDMyNjc5/NjktNDg4OC5qcGVn.jpeg"
    },
    {
     "ID": 94,
     "Label": "Final Trigger - Skrap Metal Vol. II ‎(CD, Album)",
     "Production": "Boonsdale Records",
     "Year": 2013,
     "Artist": "Final Trigger",
     "Album": " Skrap Metal Vol. II",
     "Image": "https://i.discogs.com/DrzHmG7NOlBnAEaVyiYczckvrUzfyIy2158r8akO-kA/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0Njgz/MDI3LTE1Nzk1NDky/NTgtNTk3My5qcGVn.jpeg"
    },
    {
     "ID": 95,
     "Label": "Stereokid - Mission For Love ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2013,
     "Artist": "Stereokid",
     "Album": "Mission For Love",
     "Image": "https://i.discogs.com/6KHbR7rtPBSg1BUfe4z5baHGUw0pb7SQ34eW4-yQRbM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MDc3/NjgyLTE1ODYzOTE1/MDgtMTQ0Mi5qcGVn.jpeg"
    },
    {
     "ID": 96,
     "Label": "Whitehorse (3) - Devil's Got A Gun (Live) ‎(7\", Whi)",
     "Production": "Six Shooter Records",
     "Year": 2013,
     "Artist": "Whitehorse",
     "Album": "Devil's Got A Gun (Live)",
     "Image": "https://i.discogs.com/gnHY3b_8C2tRz0bCh1zXw-e0xG57sbzCnzbR6PmJGwc/rs:fit/g:sm/q:90/h:394/w:394/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0OTM0/NjEtMTQ0MzY1MTQ3/NS03NDY1LmpwZWc.jpeg"
    },
    {
     "ID": 97,
     "Label": "Jesse Labelle - Two ‎(CD, Album)",
     "Production": "Wax Records (4)",
     "Year": 2012,
     "Artist": "Jesse Labelle",
     "Album": "Two",
     "Image": "https://i.discogs.com/VNo6gX4m0zzb2D7ALiKLEcffZyhOLu8cmHyald8jH7c/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMzY5/NTU3LTE2MzA5MzYz/MDgtMzQ5Ni5qcGVn.jpeg"
    },
    {
     "ID": 98,
     "Label": "Amos The Transparent - Goodnight, My Dear... I'm Falling Apart 3 versions",
     "Production": "45 Records (4)",
     "Year": 2012,
     "Artist": "Amos The Transparent",
     "Album": "Goodnight, My Dear... I'm Falling Apart 3 versions",
     "Image": "https://i.discogs.com/Qp44me-EQI5N2NzAmNr05Z5b9Gosuw4W81A1ub6AD9M/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2MTYz/MjgtMTQ2NjM1NDk0/OS04NDM0LmpwZWc.jpeg"
    },
    {
     "ID": 99,
     "Label": "Whitehorse (3) - The Fate Of The World Depends On This Kiss 3 versions",
     "Production": "Six Shooter Records",
     "Year": 2012,
     "Artist": "Whitehorse",
     "Album": "The Fate Of The World Depends On This Kiss 3 versions",
     "Image": "https://i.discogs.com/XgbwaoHFVTk6esbqHKrU_L3wfiJfW0vwMkablKFovaQ/rs:fit/g:sm/q:90/h:586/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxMDY3/NDctMTM1NTgzMjE4/OS00OTQ4LmpwZWc.jpeg"
    },
    {
     "ID": 100,
     "Label": "Jenn Grant - The Beautiful Wild 5 versions",
     "Production": "Six Shooter Records",
     "Year": 2012,
     "Artist": "Jenn Grant",
     "Album": "The Beautiful Wild 5 versions",
     "Image": "https://i.discogs.com/I7c64Ioj1hc6oN4gXo1tZKSu708aR-q8vD8nmxy_5-8/rs:fit/g:sm/q:90/h:537/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4OTQx/MDMtMTM3MzIxMzkz/NS03Mjk3LmpwZWc.jpeg"
    },
    {
     "ID": 101,
     "Label": "Maylee Todd - Hieroglyphics ‎(7\")",
     "Production": "Do Right! Music",
     "Year": 2012,
     "Artist": "Maylee Todd",
     "Album": "Hieroglyphics",
     "Image": "https://i.discogs.com/yZoPYxkzBGeuwny41HTbF0FAozAEN8ce54jxom170Js/rs:fit/g:sm/q:90/h:350/w:350/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NDg3/MTMtMTMzODgxNTU4/MS01NjI2LmpwZWc.jpeg"
    },
    {
     "ID": 102,
     "Label": "Our Lady Peace - Curve ‎(CD, Album, Dig)",
     "Production": "Coalition Entertainment (Records) Inc.",
     "Year": 2012,
     "Artist": "Our Lady Peace",
     "Album": " Curve",
     "Image": "https://i.discogs.com/7KwkQVz8ZdunjVFk_s0hO2hdeUkAagNY94GVTmnc-ME/rs:fit/g:sm/q:90/h:529/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU3NjUx/NTItMTY0NzcyNjAy/Mi02MDQwLmpwZWc.jpeg"
    },
    {
     "ID": 103,
     "Label": "Die-Rek - Get Up 2 versions",
     "Production": "Not On Label (Die-Rek Self-released)",
     "Year": 2012,
     "Artist": "Die",
     "Album": "Rek - Get Up 2 versions",
     "Image": "https://i.discogs.com/TdZ36e5MM3ALMBumS_p3wcRwSF-xzvCln4WDnznVD8Y/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODA3/MjgwLTE1MjI3MDcz/MDQtNjc4OC5qcGVn.jpeg"
    },
    {
     "ID": 104,
     "Label": "Cadence Weapon - Hope In Dirt City 2 versions",
     "Production": "Upper Class Recordings",
     "Year": 2012,
     "Artist": "Cadence Weapon",
     "Album": "Hope In Dirt City 2 versions",
     "Image": "https://i.discogs.com/NJxnX04kN0DaKzMV_TaqXySI6-_Ok622QTxdd0IQpsk/rs:fit/g:sm/q:90/h:365/w:420/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3MTQ4/ODItMTM1MzE5NDcz/Ny0xMjE1LmpwZWc.jpeg"
    },
    {
     "ID": 105,
     "Label": "The Good Lovelies - Live At Revolution 2 versions",
     "Production": "Not On Label (The Good Lovelies Self-released)",
     "Year": 2012,
     "Artist": "The Good Lovelies",
     "Album": "Live At Revolution 2 versions",
     "Image": "https://i.discogs.com/I5F78y63JWe7pHiylU39Rt2MwG5PgW91NICAYZpIPeQ/rs:fit/g:sm/q:90/h:541/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxMDQz/MDAtMTM4MTc2NzEx/MS05Mzc0LmpwZWc.jpeg"
    },
    {
     "ID": 106,
     "Label": "Justus (21) - Don't Surrender ‎(CDr, EP, Dig)",
     "Production": "Not On Label (Justus (21) Self-Released)",
     "Year": 2012,
     "Artist": "Justus",
     "Album": "Don't Surrender",
     "Image": "https://i.discogs.com/olkG-TIm-Lba_DOiPdC1FyvSZfcodmdLOCJHBC0MmwY/rs:fit/g:sm/q:90/h:509/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDk5/MjE5LTE1MTc0MTgz/MTAtNjE4NC5qcGVn.jpeg"
    },
    {
     "ID": 107,
     "Label": "DEROSNEC - Bullheaded ‎(CD)",
     "Production": "Oh Just Peachy Studios",
     "Year": 2012,
     "Artist": "DEROSNEC",
     "Album": "Bullheaded",
     "Image": "https://i.discogs.com/EX1kyDDHaNRxRkvpy1rv9lkZLJQhR_jLwxcdOMqMeFg/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5NTcz/NzktMTQwNzM1Mzkx/NS04NDAyLmpwZWc.jpeg"
    },
    {
     "ID": 108,
     "Label": "Die-Rek - Butta Breath ‎(CD, EP)",
     "Production": "Fat Beats",
     "Year": 2012,
     "Artist": "Die",
     "Album": "Rek - Butta Breath",
     "Image": "https://i.discogs.com/5D34vgmnxSmRS9-QJOamsx_37wSnudigSMAb-p_flvY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyMTg0/MDktMTM2NTE1NzQw/Mi05Mjg5LmpwZWc.jpeg"
    },
    {
     "ID": 109,
     "Label": "This Must Be The Place (Naive Melody) and 1 more…Belle Starr (2) - The Burning Of Atlanta ‎(CD, EP)",
     "Production": "Not On Label (Belle Starr (2) Self-released)",
     "Year": 2012,
     "Artist": "Belle Starr",
     "Album": "The Burning Of Atlanta",
     "Image": "https://i.discogs.com/8xzmKqTWrQXnZxxyOXXUDZNB47BC3xPoye0A1jSF-Y4/rs:fit/g:sm/q:90/h:536/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5Nzkw/MzgtMTM4MTE4NzYw/MC03MzI1LmpwZWc.jpeg"
    },
    {
     "ID": 110,
     "Label": "Nick Sherman (5) - Drag Your Words Through ‎(CD, Album)",
     "Production": "Not On Label (Nick Sherman (5) Self-released)",
     "Year": 2012,
     "Artist": "Nick Sherman",
     "Album": "Drag Your Words Through",
     "Image": "https://i.discogs.com/JY-8bRbzd87TQzP5Jv7RXgu5ZkDK3lY9wBpjUau-Zq4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MjEw/MTg3LTE2MDUzMjQw/ODQtNTQ3Ni5qcGVn.jpeg"
    },
    {
     "ID": 111,
     "Label": "Brand New DayVarious - Z103.5 Streetmix 2K12 ‎(CD, Comp, Mixed)",
     "Production": "Show Stopping Entertainment",
     "Year": 2012,
     "Artist": "Brand New DayVarious",
     "Album": "Z103.5 Streetmix 2K12",
     "Image": "https://i.discogs.com/wOdzGMF9T9VDoiVGcsnlI9edL9gfNCAZMtHoAMNSmN4/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNjQz/NjY1LTE2NzIwMDAy/NTgtNzUxNC5qcGVn.jpeg"
    },
    {
     "ID": 112,
     "Label": "Second Last Chance - Stuck With A Sexy Lady ‎(CD, EP + File, AAC, FLAC, MP3, EP)",
     "Production": "Not On Label",
     "Year": 2012,
     "Artist": "Second Last Chance",
     "Album": "Stuck With A Sexy Lady",
     "Image": "https://i.discogs.com/hW3aYyZHACC45EOkx8M1KKnqHqQcrMmeBjFrllkzxE8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0NDcy/NzMtMTQ0MTY2NzU0/MC0yMTI2LmpwZWc.jpeg"
    },
    {
     "ID": 113,
     "Label": "Our Lady Peace - Heavyweight ‎(CD, Single, Promo)",
     "Production": "Entertainment One U.S., Coalition Music Records",
     "Year": 2012,
     "Artist": "Our Lady Peace",
     "Album": " Heavyweight",
     "Image": "https://i.discogs.com/p9omMuBM61g6phYOpBK7OVHzpM9iHkXrBKm6ekUv6yM/rs:fit/g:sm/q:90/h:475/w:475/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU3NjE0/ODMtMTQwMjY0ODIz/OC05NTgzLmpwZWc.jpeg"
    },
    {
     "ID": 114,
     "Label": "Makeshift Innocence - Yours To Keep ‎(CD, Album)",
     "Production": "DEAG Music, Sony Music",
     "Year": 2012,
     "Artist": "Makeshift Innocence",
     "Album": "Yours To Keep",
     "Image": "https://i.discogs.com/6mHy_3jzvC3fjr_t7OYZPzb-S1eftZ8GqZavUEcy2Fo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxMDg4/ODItMTQxMTI5NjM4/MC0xNDkyLmpwZWc.jpeg"
    },
    {
     "ID": 115,
     "Label": "Apparatus (6) - Evolution ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2012,
     "Artist": "Apparatus",
     "Album": " Evolution",
     "Image": "https://i.discogs.com/IrcrPEgu5tmNolHxXgr86_Mq4joRm4_H5PCYIQDGQAU/rs:fit/g:sm/q:90/h:591/w:591/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NTA1/MjMxLTE2MTk2NTE3/MjEtMjAxMi5qcGVn.jpeg"
    },
    {
     "ID": 116,
     "Label": "Our Lady Peace - As Fast As You Can ‎(CD, Single, Promo)",
     "Production": "Coalition Music Records, Entertainment One U.S.",
     "Year": 2012,
     "Artist": "Our Lady Peace",
     "Album": " As Fast As You Can",
     "Image": "https://i.discogs.com/HoKawdW963h5pOm8LGiIHc0I-D6_QtFiTuZ_wusFJS8/rs:fit/g:sm/q:90/h:523/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU3ODYx/NTAtMTQwMjk1ODEy/NS0zMDM5LmpwZWc.jpeg"
    },
    {
     "ID": 117,
     "Label": "Nuela Charles - Aware ‎(CD, Album)",
     "Production": "Not On Label (Nuela Charles Self-released)",
     "Year": 2012,
     "Artist": "Nuela Charles",
     "Album": " Aware",
     "Image": "https://i.discogs.com/IT85_t9_-G3g1Ce5HnJpOmv6ncoCaZoseEc83Kx_tjo/rs:fit/g:sm/q:90/h:527/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwNTc5/MTAtMTM4MzM5MjIx/OC02Nzk1LmpwZWc.jpeg"
    },
    {
     "ID": 118,
     "Label": "Good Lovelies* - Let The Rain Fall 2 versions",
     "Production": "Six Shooter Records",
     "Year": 2011,
     "Artist": "Good Lovelies",
     "Album": "Let The Rain Fall 2 versions",
     "Image": "https://i.discogs.com/kAQ8Cjt1V6jxtrN3JB9M5E-Gp7RZviVfxqccdMQ0PPk/rs:fit/g:sm/q:90/h:539/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU0MzE4/NTgtMTQyNDM4ODE1/Mi0yNTQ0LmpwZWc.jpeg"
    },
    {
     "ID": 119,
     "Label": "Whitehorse (3) - Whitehorse 2 versions",
     "Production": "Six Shooter Records",
     "Year": 2011,
     "Artist": "Whitehorse",
     "Album": "Whitehorse 2 versions",
     "Image": "https://i.discogs.com/Q13l8Yu-oh85AcIQlUd96cWVY44DbezVH2h7Cirqe6A/rs:fit/g:sm/q:90/h:532/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2MzA0/ODUtMTM3NjA2NTQ3/NC04MDg1LmpwZWc.jpeg"
    },
    {
     "ID": 120,
     "Label": "Conflicted - Never Be Tamed 2 versions",
     "Production": "Nightmare Records (2)",
     "Year": 2011,
     "Artist": "Conflicted",
     "Album": "Never Be Tamed 2 versions",
     "Image": "https://i.discogs.com/7vEnKO5y0V6wrPtveDrg8lNlslexFX9jtawNDDtUh0s/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4OTk3/MjktMTQwOTU4OTY4/Mi03ODk3LmpwZWc.jpeg"
    },
    {
     "ID": 121,
     "Label": "Mia Martina - Devotion 3 versions",
     "Production": "CP Records (3)",
     "Year": 2011,
     "Artist": "Mia Martina",
     "Album": "Devotion 3 versions",
     "Image": "https://i.discogs.com/6EeDETJmVjjrfPZ9Z2oL4EW16OC8PqW95kqElxjU2qM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyMTY2/ODYtMTMyMDg3MDkx/Ni5qcGVn.jpeg"
    },
    {
     "ID": 122,
     "Label": "One Hundred Dollars - Songs Of Man 2 versions",
     "Production": "Outside Music",
     "Year": 2011,
     "Artist": "One Hundred Dollars",
     "Album": "Songs Of Man 2 versions",
     "Image": "https://i.discogs.com/5MJyUJyTQ_W-EKCjmIwCj_Xhwx7E-X_hh10fMITdX_U/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0OTkx/NjYtMTMzMzA3ODUx/NS5qcGVn.jpeg"
    },
    {
     "ID": 123,
     "Label": "Bedouin Soundclash - Light The Horizon 3 versions",
     "Production": "Pirates Blend",
     "Year": 2011,
     "Artist": "Bedouin Soundclash",
     "Album": "Light The Horizon 3 versions",
     "Image": "https://i.discogs.com/vUThR4eoCh-E8kB3fFlpfd0Qs_trchKcP6Ru2arDGpI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxMzk2/NDQtMTMxNzU5NTA0/NC5qcGVn.jpeg"
    },
    {
     "ID": 124,
     "Label": "Brighter Brightest - Right For Me 2 versions",
     "Production": "Black Box Recordings (2)",
     "Year": 2011,
     "Artist": "Brighter Brightest",
     "Album": "Right For Me 2 versions",
     "Image": "https://i.discogs.com/98UlXgkdNiL336w-gpgDX1Q-5QO7qPlc-C95FH0XqP4/rs:fit/g:sm/q:90/h:400/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ2MDQ5/NzYtMTM2OTcwNjcy/MC00MDI3LmpwZWc.jpeg"
    },
    {
     "ID": 125,
     "Label": "Ariana Gillis - Forget Me Not ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2011,
     "Artist": "Ariana Gillis",
     "Album": "Forget Me Not",
     "Image": "https://i.discogs.com/JD4KeHlCk8mP7skQ1KokpIE5mYGeUyPGAefjrqGKuT8/rs:fit/g:sm/q:90/h:400/w:444/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzODEx/NzYtMTM2MzM3NjUy/Mi02MDQzLmpwZWc.jpeg"
    },
    {
     "ID": 126,
     "Label": "The Airplane Boys (2) - Where've You Been ‎(CD, Album, Promo)",
     "Production": "Beau Monde Collective",
     "Year": 2011,
     "Artist": "The Airplane Boys (2)",
     "Album": "Where've You Been",
     "Image": "https://i.discogs.com/pJqzrPakVXy_d7GS43nXaTNlU87kTfzrSaIyN6V24hc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NDQ5/NTE1LTE1NzQ3Mzgy/MDEtMjY5MS5qcGVn.jpeg"
    },
    {
     "ID": 127,
     "Label": "Melissa Bel - Distance ‎(CD, EP)",
     "Production": "FrostByte Media Inc.",
     "Year": 2011,
     "Artist": "Melissa Bel",
     "Album": "Distance",
     "Image": "https://i.discogs.com/L9hS8FQMQccKhoVhYx6Rzcs0mxhSQFtnNzp4fESogXY/rs:fit/g:sm/q:90/h:200/w:200/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzODU1/MjQ1LTE1NjI2Mzg5/MzktNTgzOC5qcGVn.jpeg"
    },
    {
     "ID": 128,
     "Label": "Relic* - Not For Nothing ‎(CD, EP, Sle)",
     "Production": "Gamma Delta Productions",
     "Year": 2011,
     "Artist": "Relic",
     "Album": "Not For Nothing",
     "Image": "https://i.discogs.com/z0QSBJsAMpUf8qo76hAVGmq-t08kw23h3waS9Qo5DiI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1MDY3/NTQtMTQyMDgzNzg2/Mi00MTEwLmpwZWc.jpeg"
    },
    {
     "ID": 129,
     "Label": "Treasa Levasseur - Broad ‎(CD, Album)",
     "Production": "Slim Chicken Enterprises",
     "Year": 2011,
     "Artist": "Treasa Levasseur",
     "Album": "Broad",
     "Image": "https://i.discogs.com/hQwbd3cDylPdo-VpDftVKoyn_T90eL-uhN_ls7SB_1E/rs:fit/g:sm/q:90/h:350/w:350/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4MDMz/MzQtMTM3NjAwMDg1/NC01NDYxLmpwZWc.jpeg"
    },
    {
     "ID": 130,
     "Label": "Model M - The Eagle ‎(CD)",
     "Production": "Oh Just Peachy Studios",
     "Year": 2011,
     "Artist": "Model M",
     "Album": "The Eagle",
     "Image": "https://i.discogs.com/sU-HibL6cs1b_cqTr3qbAUaNITgeHc0JAUeD99HKjwc/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5NTc0/OTMtMTQwNzM1NjQw/NS0xNzM3LmpwZWc.jpeg"
    },
    {
     "ID": 131,
     "Label": "Dischord (4) - Casualties Of War ‎(CD, Album)",
     "Production": "Diminished Fifth Records",
     "Year": 2011,
     "Artist": "Dischord",
     "Album": "Casualties Of War",
     "Image": "https://i.discogs.com/mCGYneVnzwubtqE__9LxR2WjNc03vxSllYTxNnQtzZI/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzNjIz/MTItMTQ4MDI3MDIw/OC0xMDM1LmpwZWc.jpeg"
    },
    {
     "ID": 132,
     "Label": "Low Spin - Low Spin ‎(CD, EP)",
     "Production": "Not On Label",
     "Year": 2011,
     "Artist": "Low Spin",
     "Album": "Low Spin",
     "Image": "https://i.discogs.com/cSB2rZJCvobTUG0uaG-YX_t_gCQl57yxe-paUmRve0k/rs:fit/g:sm/q:90/h:200/w:200/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0NDU1/MDAtMTQ4MDcxNzM1/Ny00MTQ1LmpwZWc.jpeg"
    },
    {
     "ID": 133,
     "Label": "Paramedics (2) - III ‎(CD, EP, Num)",
     "Production": "Not On Label",
     "Year": 2011,
     "Artist": "Paramedics",
     "Album": "III",
     "Image": "https://i.discogs.com/Nm-qYK1BOl8lnNLp1DPR9ju38OKlCR7_pdXqlH1_ge0/rs:fit/g:sm/q:90/h:519/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5MzM2/MTAtMTQ1MjIxMDA2/OS0xOTM2LmpwZWc.jpeg"
    },
    {
     "ID": 134,
     "Label": "Danny Fernandes - AutomaticLUV ‎(CD, Album)",
     "Production": "CP Records (3), CP Records (3)",
     "Year": 2010,
     "Artist": "Danny Fernandes",
     "Album": "AutomaticLUV",
     "Image": "https://i.discogs.com/szTkOWChNvXR1dxzl8LTIrCDFPg8e-W-U6ssDYIIrOs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3MDky/MDktMTUyNzM2NDA0/MS0zOTMyLmpwZWc.jpeg"
    },
    {
     "ID": 135,
     "Label": "Elizabeth Shepherd - Heavy Falls The Night 2 versions",
     "Production": "Do Right! Music",
     "Year": 2010,
     "Artist": "Elizabeth Shepherd",
     "Album": "Heavy Falls The Night 2 versions",
     "Image": "https://i.discogs.com/snFyFH4cEl2QxIZGMV-g2oGsqLIx3mded8lw5YDEA3s/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNTIz/NDgtMTI3MjQ0OTA4/Ny5qcGVn.jpeg"
    },
    {
     "ID": 136,
     "Label": "Justin Rutledge - The Early Widows ‎(CD, Album, Dig)",
     "Production": "Six Shooter Records",
     "Year": 2010,
     "Artist": "Justin Rutledge",
     "Album": "The Early Widows",
     "Image": "https://i.discogs.com/7ehbmra48L4RFJM-9kcFX2dmUYN-CtNIAnpr_5zs9uM/rs:fit/g:sm/q:90/h:452/w:510/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMzM4/MjU3LTE0OTU1ODEz/NTEtNzYxMC5qcGVn.jpeg"
    },
    {
     "ID": 137,
     "Label": "K.C. Accidental - Captured Anthems For An Empty Bathtub + Anthems For The Could've Bin Pills ‎(CD, EP + CD, EP + Comp, RE)",
     "Production": "Arts & Crafts",
     "Year": 2010,
     "Artist": "K.C. Accidental",
     "Album": "Captured Anthems For An Empty Bathtub + Anthems For The Could've Bin Pills",
     "Image": "https://i.discogs.com/KuGCuoakr2E5Ucpw3ui0ZdbkyM1UeMWIwew3FQllQjA/rs:fit/g:sm/q:90/h:528/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MDc5/MDYtMTQwMzMwMDkx/Mi0yOTc3LmpwZWc.jpeg"
    },
    {
     "ID": 138,
     "Label": "Luke Doucet* - Steel City Trawler 2 versions",
     "Production": "Six Shooter Records",
     "Year": 2010,
     "Artist": "Luke Doucet",
     "Album": " Steel City Trawler 2 versions",
     "Image": "https://i.discogs.com/ZrB0va8UQG6fcprlcK0e92oAFn-cXoJMjoWEvBzMq_U/rs:fit/g:sm/q:90/h:527/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NTA0/MDMtMTM3NTcyMDI2/MC02Mzg0LmpwZWc.jpeg"
    },
    {
     "ID": 139,
     "Label": "Hawksley Workman - Meat ‎(CD, Album)",
     "Production": "Isadora Records",
     "Year": 2010,
     "Artist": "Hawksley Workman ",
     "Album": " Meat",
     "Image": "https://i.discogs.com/ZL5i15oBRTuDbTExT4iPno8lV4g0Wv7l8EKdPCCvbEk/rs:fit/g:sm/q:90/h:531/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNjMy/NTEtMTI2NzQwMTQ3/NS5qcGVn.jpeg"
    },
    {
     "ID": 140,
     "Label": "Kyrie Kristmanson - Origin Of Stars 2 versions",
     "Production": "No Format, Universal Music Jazz France",
     "Year": 2010,
     "Artist": "Kyrie Kristmanson",
     "Album": "Origin Of Stars 2 versions",
     "Image": "https://i.discogs.com/Ruwu7cwixzHfnh_wKYCX2FFpU3bwuyG8lVFuwYZgClE/rs:fit/g:sm/q:90/h:520/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk2Mjk5/MjUtMTQ4Mzg5Njc5/MS0zODgwLmpwZWc.jpeg"
    },
    {
     "ID": 141,
     "Label": "Marshall Dane - Running Stop Signs ‎(CD, Album)",
     "Production": "Red Riviera Records",
     "Year": 2010,
     "Artist": "Marshall Dane",
     "Album": "Running Stop Signs",
     "Image": "https://i.discogs.com/FiPryODIdN7y03GQhjeV7qQffx4DMAH_tbcRj7-GikE/rs:fit/g:sm/q:90/h:545/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjE4/NTA4LTE1MTk1MjAx/MzMtNTAzNC5qcGVn.jpeg"
    },
    {
     "ID": 142,
     "Label": "The Modern Men (2) - The Sensual Sounds Of ‎(CD, Album)",
     "Production": "Not On Label (The Modern Men Self-released)",
     "Year": 2010,
     "Artist": "The Modern Men",
     "Album": " The Sensual Sounds Of",
     "Image": "https://i.discogs.com/e2Nokm81aJ_-LblaPI1DNWcX5UpsWseKx9pXlOYkgFs/rs:fit/g:sm/q:90/h:577/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDQw/NDQ2LTE1OTc5NTE2/MjEtNzQ5My5qcGVn.jpeg"
    },
    {
     "ID": 143,
     "Label": "Hawksley Workman - Meat\/Milk ‎(2xCD, Comp, Dig)",
     "Production": "Isadora Records",
     "Year": 2010,
     "Artist": "Hawksley Workman",
     "Album": " Meat\/Milk",
     "Image": "https://i.discogs.com/tuyAt6kaoIAztNabHsAqj6ipROPg5t3Lth2zEDCzfms/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUzNDU4/NjEtMTM5MTEwMDAw/NS05MTgxLmpwZWc.jpeg"
    },
    {
     "ID": 144,
     "Label": "Faunts - Feel.Love.Thinking.Of. ‎(CD, Album)",
     "Production": "Friendly Fire Recordings",
     "Year": 2009,
     "Artist": "Faunts",
     "Album": "Feel.Love.Thinking.Of.",
     "Image": "https://i.discogs.com/4obtp_2iM-n2zTHOUGJlJD-bpp-JRbJ5gH9Oa0C1WlY/rs:fit/g:sm/q:90/h:539/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NzI3/MjktMTYyNTIzOTQy/MS04MzE3LmpwZWc.jpeg"
    },
    {
     "ID": 145,
     "Label": "Great Bloomers - Speak Of Trouble ‎(LP, Album)",
     "Production": "MapleMusic Recordings, The Velvet Octopus",
     "Year": 2009,
     "Artist": "Great Bloomers",
     "Album": "Speak Of Trouble",
     "Image": "https://i.discogs.com/ETGuJ_JF6v5nB53QzxszvTJpDhZ7uAKfnF_CCe1wW-U/rs:fit/g:sm/q:90/h:536/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0NzEw/NTYtMTQ0MjE1MDky/Ni04NTQ4LmpwZWc.jpeg"
    },
    {
     "ID": 146,
     "Label": "Years (2) - Years 2 versions",
     "Production": "Arts & Crafts",
     "Year": 2009,
     "Artist": "Years",
     "Album": " Years 2 versions",
     "Image": "https://i.discogs.com/xEaiyN9CyZ8bdVGaqhp-akshQckD2cm7VGujzy-gSMY/rs:fit/g:sm/q:90/h:560/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMzA2/NDYtMTI4OTQ4NTk5/Ny5qcGVn.jpeg"
    },
    {
     "ID": 147,
     "Label": "Relic* - The Green Light 2 versions",
     "Production": "Gamma Delta Productions",
     "Year": 2009,
     "Artist": "Relic",
     "Album": " The Green Light 2 versions",
     "Image": "https://i.discogs.com/WMvJzJ4BA2j64tet5eZ1utJVTado-TacncLSWQ5VZFo/rs:fit/g:sm/q:90/h:589/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MjY2/OTc5LTE2MDYyNjMw/OTAtMjkyOC5qcGVn.jpeg"
    },
    {
     "ID": 148,
     "Label": "Think About Life - Family 2 versions",
     "Production": "Alien8 Recordings",
     "Year": 2009,
     "Artist": "Think About Life",
     "Album": "Family 2 versions",
     "Image": "https://i.discogs.com/tqj05cI7zF5lvnGCnn5lIcw4_EQlOaC8wouwFD2UTBM/rs:fit/g:sm/q:90/h:530/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNTI0/MTQtMTI2Njg1NzQx/My5qcGVn.jpeg"
    },
    {
     "ID": 149,
     "Label": "Do Make Say Think - Other Truths 4 versions",
     "Production": "Constellation, Constellation",
     "Year": 2009,
     "Artist": "Do Make Say Think",
     "Album": "Other Truths 4 versions",
     "Image": "https://i.discogs.com/LMBz1rcXf-efVoU4HCePd0pAkjG_BFWBdrLmhU67qlA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NDQ5/MDktMTMzNTE5ODA3/MC5qcGVn.jpeg"
    },
    {
     "ID": 150,
     "Label": "Carolyn Mark And NQ Arbuckle - Let's Just Stay Here 3 versions",
     "Production": "Mint Records (12)",
     "Year": 2009,
     "Artist": "Carolyn Mark And NQ Arbuckle",
     "Album": "Let's Just Stay Here 3 versions",
     "Image": "https://i.discogs.com/duIOwCSwQKEIBO2fKVBvgHYhGTtl5Y3d2alxV4zUfYI/rs:fit/g:sm/q:90/h:525/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MDI2/MzctMTYyODQ0ODE0/MS0yODA0LmpwZWc.jpeg"
    },
    {
     "ID": 151,
     "Label": "Charles Spearin - The Happiness Project 3 versions",
     "Production": "Arts & Crafts",
     "Year": 2009,
     "Artist": "Charles Spearin ",
     "Album": " The Happiness Project 3 versions",
     "Image": "https://i.discogs.com/f9VM4aV2IaMrM-zljXOcR5gN9W8lYFv-aIUBIws55vQ/rs:fit/g:sm/q:90/h:544/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5Mzk2/ODQtMTI1MzgwNTEx/OC5qcGVn.jpeg"
    },
    {
     "ID": 152,
     "Label": "One Hundred Dollars - Fourteenth Floor 2 versions",
     "Production": "Blocks Recording Club",
     "Year": 2009,
     "Artist": "One Hundred Dollars",
     "Album": "Fourteenth Floor 2 versions",
     "Image": "https://i.discogs.com/BnXZN1LS3iqjeH2oDJv5GsqIwpgcb8_1ubV0cDwRUuA/rs:fit/g:sm/q:90/h:600/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MjQ4/NDMtMTYwMDk2Nzk3/MS00NTM5LmpwZWc.jpeg"
    },
    {
     "ID": 153,
     "Label": "Jean-Paul De Roover - Windows And Doors 2 versions",
     "Production": "Not On Label (Jean-Paul De Roover Self-released)",
     "Year": 2009,
     "Artist": "Jean-Paul De Roover",
     "Album": "Windows And Doors 2 versions",
     "Image": "https://i.discogs.com/0Fn2RpcLz3Ybl8IXe6T0zvc3PZwFC_66phbV3u0ebMg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1ODUy/NDYyLTE1OTg5ODI4/NjMtMzUyOC5qcGVn.jpeg"
    },
    {
     "ID": 154,
     "Label": "Danko Jones - B-Sides 2 versions",
     "Production": "Bad Taste Records",
     "Year": 2009,
     "Artist": "Danko Jones",
     "Album": "B-Sides 2 versions",
     "Image": "https://i.discogs.com/r-35zfquVJTl_d6rfGDTQZJ8mmo66tgl4rRrKglKvu0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNDI0/NTYtMTMxMzAzNjQ4/MS5qcGVn.jpeg"
    },
    {
     "ID": 155,
     "Label": "Enter The Haggis - Gutter Anthems ‎(CD, Album)",
     "Production": "United For Opportunity",
     "Year": 2009,
     "Artist": "Enter The Haggis",
     "Album": "Gutter Anthems",
     "Image": "https://i.discogs.com/lQzdI4u4QwqWUexJ5SzdmikxW7fM7WampPXfuXoPFmI/rs:fit/g:sm/q:90/h:551/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMDUx/MTktMTI2NDI3OTM3/NS5qcGVn.jpeg"
    },
    {
     "ID": 156,
     "Label": "Dwight Deon - Anthems For The Restless ‎(CD, Album)",
     "Production": "Bad Ass Canadian Records",
     "Year": 2009,
     "Artist": "Dwight Deon",
     "Album": " Anthems For The Restless",
     "Image": "https://i.discogs.com/Iu4joFkfXMu6wpXsCFnGw91bJCRl7INRcfPumX3yjl8/rs:fit/g:sm/q:90/h:541/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMjE2/MDktMTYwNDc5NjI1/MS04MTM4LmpwZWc.jpeg"
    },
    {
     "ID": 157,
     "Label": "Theo Tams - Give It All Away ‎(CD, Album)",
     "Production": "Sony Music",
     "Year": 2009,
     "Artist": "Theo Tams",
     "Album": " Give It All Away",
     "Image": "https://i.discogs.com/QnNP7GfiIrPu9m2VAqSX8gxEx_qdYYySYR8IZoVfUaw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3ODk5/NTYtMTI0MzQ1NjMy/My5qcGVn.jpeg"
    },
    {
     "ID": 158,
     "Label": "The New Cities - Lost In City Lights ‎(CD, Album)",
     "Production": "Sony Music Canada",
     "Year": 2009,
     "Artist": "The New Cities",
     "Album": " Lost In City Lights",
     "Image": "https://i.discogs.com/JIg1211Q6A-_anBzxoSry02DHM1s55DxzvD6_up8ii0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTU0/NjQtMTUyMDYzNTkw/Ny0zOTQxLmpwZWc.jpeg"
    },
    {
     "ID": 159,
     "Label": "Lindsay Ell - Alone ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2009,
     "Artist": "Lindsay Ell",
     "Album": "Alone",
     "Image": "https://i.discogs.com/d3UIFHCy0Gy-dJFJ4VNHnr9tCUrcI3usrOg80iQEg0s/rs:fit/g:sm/q:90/h:350/w:350/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMzQw/OTMzLTE1NTIzOTUy/OTMtODI1Mi5qcGVn.jpeg"
    },
    {
     "ID": 160,
     "Label": "Matt Epp - Safe Or Free ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2009,
     "Artist": "Matt Epp",
     "Album": "Safe Or Free",
     "Image": "https://i.discogs.com/JY2eSBZ7_J5u0RPmCt671f4p1u3JxJW8LUzGMVcS2IM/rs:fit/g:sm/q:90/h:584/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk1MTgz/OTMtMTQ4MTk3NTIw/MC05Njc5LmpwZWc.jpeg"
    },
    {
     "ID": 161,
     "Label": "Stone River - Stone River ‎(CD, Album)",
     "Production": "Gypsy Soul Records",
     "Year": 2009,
     "Artist": "Stone River",
     "Album": "Stone River",
     "Image": "https://i.discogs.com/2tpUkvSf1uge4lrq81t9kLB3mXO0h2KiC3f-EuUCWjc/rs:fit/g:sm/q:90/h:600/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODYw/MTgwLTE1NDMzNDE2/ODAtNTE2NC5qcGVn.jpeg"
    },
    {
     "ID": 162,
     "Label": "Sebastien Lefebvre - You Are Here \/ Vous Êtes Ici ‎(CD, EP)",
     "Production": "Coalition Entertainment (Records) Inc.",
     "Year": 2009,
     "Artist": "Sebastien Lefebvre",
     "Album": "You Are Here \/ Vous Êtes Ici ",
     "Image": "https://i.discogs.com/zHBFRE9pRO0oFOqjJP--O1wlwYyK2vX5Wua8J--RtAk/rs:fit/g:sm/q:90/h:360/w:398/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5OTIz/MjAtMTI1NzI1ODA4/NS5qcGVn.jpeg"
    },
    {
     "ID": 163,
     "Label": "Danko Jones - Never Too Loud 2 versions",
     "Production": "Bad Taste Records",
     "Year": 2008,
     "Artist": "Danko Jones",
     "Album": "Never Too Loud 2 versions",
     "Image": "https://i.discogs.com/SVPLB0RiskprQHF8ijN1vHTvyZqL-bZg1BqL9rZ2TUs/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzODEy/OTctMTUyMzA4NzEx/NC03OTQyLmpwZWc.jpeg"
    },
    {
     "ID": 164,
     "Label": "Zaki Ibrahim - Eclectica (Episodes In Purple) ‎(CD, Album, Enh, Dig)",
     "Production": "District Six Music, Red Ink, Iqra Music",
     "Year": 2008,
     "Artist": "Zaki Ibrahim",
     "Album": "Eclectica (Episodes In Purple)",
     "Image": "https://i.discogs.com/4yy1IaX_jtNBh6kC5hArnubv3pkA1v9bZVfL25aKj9k/rs:fit/g:sm/q:90/h:537/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUzMTA5/OTQtMTYxNTM2NDMz/Ny05NDk3LmpwZWc.jpeg"
    },
    {
     "ID": 165,
     "Label": "The Waking Eyes - Holding On To Whatever It Is 2 versions",
     "Production": "WEA",
     "Year": 2008,
     "Artist": "The Waking Eyes",
     "Album": " Holding On To Whatever It Is 2 versions",
     "Image": "https://i.discogs.com/XRhzOyITBJTKkcpGIWOmQ54rDn1-9cYjLjrtm8cWKCk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NjY4/MDYtMTM4MDgzMzkw/OC05MDg4LmpwZWc.jpeg"
    },
    {
     "ID": 166,
     "Label": "Hey Rosetta! - Into Your Lungs (And Around In Your Heart And On Through Your Blood) 2 versions",
     "Production": "Sonic Records (7)",
     "Year": 2008,
     "Artist": "Hey Rosetta!",
     "Album": " Into Your Lungs (And Around In Your Heart And On Through Your Blood) 2 versions",
     "Image": "https://i.discogs.com/kPtGVniXQ4zEFT8p7MDvYlkDFbCMXa4f1C9ihpLz7AY/rs:fit/g:sm/q:90/h:542/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMTU0/MzgtMTM3NDQxNDQ3/NC00OTU2LmpwZWc.jpeg"
    },
    {
     "ID": 167,
     "Label": "Valery Gore - Avalanche To Wandering Bear ‎(CD, Album)",
     "Production": "Do Right! Music",
     "Year": 2008,
     "Artist": "Valery Gore ",
     "Album": " Avalanche To Wandering Bear",
     "Image": "https://i.discogs.com/XZRN8NWH9cjMIODlImLIkfXvgzP--gQPdIecZWYEG3c/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0MTcz/MTMtMTQxODY4Mzcy/NS03Mzg3LmpwZWc.jpeg"
    },
    {
     "ID": 168,
     "Label": "Honeymoon Suite - Clifton Hill ‎(CD, Album)",
     "Production": "Frontiers Records",
     "Year": 2008,
     "Artist": "Honeymoon Suite",
     "Album": "Clifton Hill",
     "Image": "https://i.discogs.com/x_Ond4btOTdAEcc0Pt1clt0YtlcCiYQB1pMkoOyasQM/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4OTk2/OTEtMTUwNDg0MzQ0/OC01OTE2LmpwZWc.jpeg"
    },
    {
     "ID": 169,
     "Label": "NQ Arbuckle - XOK 2 versions",
     "Production": "Six Shooter Records",
     "Year": 2008,
     "Artist": "NQ Arbuckle",
     "Album": "XOK 2 versions",
     "Image": "https://i.discogs.com/OSR10BWlXrupAA6PwuS80ReenggyfCTkkcoZSZwntkU/rs:fit/g:sm/q:90/h:540/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2MzI0/NTAtMTM0MTI0ODIw/NS01NzM2LmpwZWc.jpeg"
    },
    {
     "ID": 170,
     "Label": "Canadian Brass* - Bach ‎(CD, Album)",
     "Production": "Opening Day Recordings, Opening Day Entertainment Group",
     "Year": 2008,
     "Artist": "Canadian Brass",
     "Album": "Bach",
     "Image": "https://i.discogs.com/sWSlNyqDO7B-A2aQ_nWFNYANNkm8Y9MJCLS8MFbfqns/rs:fit/g:sm/q:90/h:528/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNjEw/Njg5LTE1MDA5Mzgw/NjUtNjI2MS5qcGVn.jpeg"
    },
    {
     "ID": 171,
     "Label": "Sean Kelly (6) - Christmas Guitar ‎(CD, Album, Dig)",
     "Production": "Opening Day Recordings, Opening Day Entertainment Group",
     "Year": 2008,
     "Artist": "Sean Kelly",
     "Album": "Christmas Guitar",
     "Image": "https://i.discogs.com/fx37a0_6tNN2RoQIGdRXBGFIq5eSYxwf5N1tDON01-E/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MzY2/NjktMTMwMzM1NTcy/My5qcGVn.jpeg"
    },
    {
     "ID": 172,
     "Label": "Hawksley Workman - Between The Beautifuls ‎(CD, Album, Dig)",
     "Production": "Isadora Records",
     "Year": 2008,
     "Artist": "Hawksley Workman",
     "Album": "Between The Beautifuls",
     "Image": "https://i.discogs.com/mBp52QJxqefk68NPFFsD3C3ZDSiKragSarOa4udLVmw/rs:fit/g:sm/q:90/h:544/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMjk1/MTktMTIwMjI1NDYy/Mi5qcGVn.jpeg"
    },
    {
     "ID": 173,
     "Label": "The Roaring Girl Cabaret - In Last Night's Party Clothes ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2008,
     "Artist": "The Roaring Girl Cabaret",
     "Album": "In Last Night's Party Clothes",
     "Image": "https://i.discogs.com/jS5qUZ5fb7KQSjwRMcnLkwRgo5FKFW6LEbjHIy5suZs/rs:fit/g:sm/q:90/h:535/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNDQ0/Nzk4LTE1NjQyMzAx/MTEtNTIyOC5qcGVn.jpeg"
    },
    {
     "ID": 174,
     "Label": "Point Blank (14) - Point Blank ‎(CD, Album)",
     "Production": "TiltRock Records",
     "Year": 2008,
     "Artist": "Point Blank",
     "Album": "Point Blank",
     "Image": "https://i.discogs.com/n3aeUfvynqp5SIhIza1iUuHVRCAKnJTJqVpX19r1b14/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MDM3/NDctMTIzMTcxNTkx/MS5qcGVn.jpeg"
    },
    {
     "ID": 175,
     "Label": "The Joys (4) - Unfold ‎(CD, Album)",
     "Production": "KOCH Entertainment",
     "Year": 2008,
     "Artist": "The Joys",
     "Album": "Unfold",
     "Image": "https://i.discogs.com/C1enuJhSrBiHIKkT_Tq3EXi0LZ4AmqB7q8GVMEn_z7w/rs:fit/g:sm/q:90/h:200/w:200/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk2NjQw/MTYtMTQ4NDQwOTg1/NS00OTU5LmpwZWc.jpeg"
    },
    {
     "ID": 176,
     "Label": "Canadian Brass* - Legends ‎(CD, Album)",
     "Production": "Opening Day Recordings, Opening Day Entertainment Group",
     "Year": 2008,
     "Artist": "Canadian Brass",
     "Album": "Legends",
     "Image": "https://i.discogs.com/fDnNiTDhcJ2-1aT2z5iVvhB5nXXsmX8icYivAACZtvU/rs:fit/g:sm/q:90/h:530/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNjE1/NTQ0LTE1MDIxNTkw/NjYtNzY2MC5qcGVn.jpeg"
    },
    {
     "ID": 177,
     "Label": "Eva Avila - Give Me The Music ‎(CD, Album)",
     "Production": "Sony BMG",
     "Year": 2008,
     "Artist": "Eva Avila",
     "Album": "Give Me The Music",
     "Image": "https://i.discogs.com/l1pwypyRRs5M2krysJwCBs97YYPG-h2Ytdl4qcFcwFs/rs:fit/g:sm/q:90/h:500/w:496/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxNjE4/ODQtMTM4NjE3ODQ0/MC0zMzAzLmpwZWc.jpeg"
    },
    {
     "ID": 178,
     "Label": "Justin Nozuka - Criminal \/ Save Him 2 versions",
     "Production": "Outcaste Records, Outcaste Records",
     "Year": 2007,
     "Artist": "Justin Nozuka",
     "Album": "Criminal \/ Save Him 2 versions",
     "Image": "https://i.discogs.com/QGfkpzOkOQUDbLl3p0aA1Ls1WfSb1iag7Phn-CigG9M/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNDM0/NjgtMTM0MzY4NDU4/OS04NDgwLmpwZWc.jpeg"
    },
    {
     "ID": 179,
     "Label": "Abdominal - Pedal Pusher ‎(CD, Single, Promo)",
     "Production": "Antidote",
     "Year": 2007,
     "Artist": "Abdominal",
     "Album": "Pedal Pusher",
     "Image": "https://i.discogs.com/TxjXqCxtSVCE3liu1SSwG758ykeqmGQ45w8Xk_YfU8Q/rs:fit/g:sm/q:90/h:365/w:374/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMzMz/MzQtMTE5NDc3NDg4/OC5qcGVn.jpeg"
    },
    {
     "ID": 180,
     "Label": "Broken Social Scene Presents: Kevin Drew - Spirit If... 6 versions",
     "Production": "Arts & Crafts",
     "Year": 2007,
     "Artist": "Kevin Drew",
     "Album": "Broken Social Scene PresentsL Spirit If...",
     "Image": "https://i.discogs.com/YJrPH17FytRAv92hrj5xRd4Kd_fcyhdWE31yxpFWWxs/rs:fit/g:sm/q:90/h:543/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNzY4/NzktMTQwMzk4NzYw/MS05OTE4LmpwZWc.jpeg"
    },
    {
     "ID": 181,
     "Label": "Great Lake Swimmers - Ongiara 8 versions",
     "Production": "Weewerk",
     "Year": 2007,
     "Artist": "Great Lake Swimmers",
     "Album": "Ongiara 8 versions",
     "Image": "https://i.discogs.com/Lnr_J0_axI4KcKblpcweBPOK8ZK29IipwClzCVwz1AI/rs:fit/g:sm/q:90/h:400/w:415/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NDcx/OTQtMTI5ODA0NDg0/OC5qcGVn.jpeg"
    },
    {
     "ID": 182,
     "Label": "Justin Nozuka - Mr. Therapy Man 2 versions",
     "Production": "Outcaste Records, Outcaste Records",
     "Year": 2007,
     "Artist": "Justin Nozuka",
     "Album": "Mr. Therapy Man 2 versions",
     "Image": "https://i.discogs.com/hXZUGdw57mbvbBBXMtc9gY5sgn9J4tbvoenjkoKAXYo/rs:fit/g:sm/q:90/h:488/w:479/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0MzIy/MTgtMTMzMDE3NzQx/OC5qcGVn.jpeg"
    },
    {
     "ID": 183,
     "Label": "Abdominal - Abdominal Workout 5 versions",
     "Production": "Handcuts Records",
     "Year": 2007,
     "Artist": "Abdominal",
     "Album": "Abdominal Workout 5 versions",
     "Image": "https://i.discogs.com/eSOSFrn38XEV1JvuCNUdV9GYGcMn7j2rL5sz_Q0_MEE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTkw/MjktMTE5MzE0OTQ1/Ny5qcGVn.jpeg"
    },
    {
     "ID": 184,
     "Label": "Justin Nozuka - Holly 5 versions",
     "Production": "Coalition Entertainment (Records) Inc.",
     "Year": 2007,
     "Artist": "Justin Nozuka",
     "Album": "Holly 5 versions",
     "Image": "https://i.discogs.com/uxwy0yJPJhxXqS7fUg1XAyCKh339SqnQXfuugosOr00/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwOTM5/ODAtMTI2MzY1MDgz/Ny5qcGVn.jpeg"
    },
    {
     "ID": 185,
     "Label": "Abdominal - Escape From The Pigeon Hole 5 versions",
     "Production": "Do Right! Music",
     "Year": 2007,
     "Artist": "Abdominal",
     "Album": "Escape From The Pigeon Hole 5 versions",
     "Image": "https://i.discogs.com/Rdn86IMBaExaCor1ypWphvePKvEeh8-Wa6PJLVWiNq4/rs:fit/g:sm/q:90/h:498/w:498/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk1MDEz/Ni0xMTk1NDI5OTIz/LmpwZWc.jpeg"
    },
    {
     "ID": 186,
     "Label": "This Mad Desire - Deathstyle \/\/ Celebration ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2007,
     "Artist": "This Mad Desire",
     "Album": "Deathstyle \/\/ Celebration",
     "Image": "https://i.discogs.com/Z-CUF29e0bi771s92WqqglHlhLNobIzLwXxWcVETYMw/rs:fit/g:sm/q:90/h:535/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgzNzgw/MDktMTQ2MDQzODQx/Mi0yMTkzLmpwZWc.jpeg"
    },
    {
     "ID": 187,
     "Label": "Various - Reggae Is Love (Reggae Baje Vol 2) ‎(CDr, Comp)",
     "Production": "Zion Roots Music, Zion Roots Music",
     "Year": 2007,
     "Artist": "Various",
     "Album": "Reggae Is Love (Reggae Baje Vol 2)",
     "Image": "https://i.discogs.com/31-sV3MPtTu7h-cCXnUBEKgg3aWo8kSVUnaFn2jZCQ0/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NTQx/ODk3LTE1NzcxMzAw/MjUtOTIzMi5qcGVn.jpeg"
    },
    {
     "ID": 188,
     "Label": "Triptaka - Second War ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2007,
     "Artist": "Triptaka",
     "Album": "Second War ",
     "Image": "https://i.discogs.com/CXDsbRasG1-Rs_NV_ZserSEZjCMHo0yug7WsxN36_SY/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwMDQ3/MzItMTMxMTMyODE1/OC5qcGVn.jpeg"
    },
    {
     "ID": 189,
     "Label": "Brian Melo - Livin' It ‎(CD, Album)",
     "Production": "Sony BMG",
     "Year": 2007,
     "Artist": "Brian Melo",
     "Album": "Livin' It",
     "Image": "https://i.discogs.com/goAS6OZMM9XgfiTtIFYnIP8q-B4U1aJWHThwymULlSk/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4OTA0/NTEtMTM0ODQyNDYw/Mi0zOTM4LmpwZWc.jpeg"
    },
    {
     "ID": 190,
     "Label": "Apparatus (6) - Risen ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2007,
     "Artist": "Apparatus",
     "Album": "Risen",
     "Image": "https://i.discogs.com/k1OEak4zDdT8qzi76-SUDzxtkiqw6r4y4hPQGEJbtzo/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzODc0/NzAwLTE1NjMwNTk0/OTktOTc5My5qcGVn.jpeg"
    },
    {
     "ID": 191,
     "Label": "Faunts - M4 ‎(CD, EP, Ltd)",
     "Production": "Not On Label (Faunts Self-released)",
     "Year": 2006,
     "Artist": "Faunts",
     "Album": "M4",
     "Image": "https://i.discogs.com/WiAoFrIqyMJXMb0oEJkQ_pgWrMP7onU1Ez6t1rSn88o/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODc0/OTctMTIwNjYxNjM0/MC5qcGVn.jpeg"
    },
    {
     "ID": 192,
     "Label": "Hawksley Workman - Treeful Of Starling 2 versions",
     "Production": "Universal Music",
     "Year": 2006,
     "Artist": "Hawksley Workman",
     "Album": "Treeful Of Starling 2 versions",
     "Image": "https://i.discogs.com/eBINhVm8sD9DZmOVBk0URd_0DC43RNPYE-asXyxXq4c/rs:fit/g:sm/q:90/h:300/w:335/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNTk0/MjktMTE5NzAxNTM2/NC5qcGVn.jpeg"
    },
    {
     "ID": 193,
     "Label": "Sue Foley - New Used Car 2 versions",
     "Production": "Ruf Records",
     "Year": 2006,
     "Artist": "Sue Foley",
     "Album": "New Used Car 2 versions",
     "Image": "https://i.discogs.com/Sw4dbQ6qhgaAOxTJpjBwKqAcd4DO5woRGlugZiBOc9w/rs:fit/g:sm/q:90/h:528/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5Njgz/NjQtMTU4NDk5NjU0/Mi05MTQ3LmpwZWc.jpeg"
    },
    {
     "ID": 194,
     "Label": "Various - Canadian Idol: Spotlights ‎(CD, Album)",
     "Production": "Sony BMG",
     "Year": 2006,
     "Artist": "Various",
     "Album": "Canadian Idol: Spotlights ",
     "Image": "https://i.discogs.com/yLSaDJPILDviVTBVZVI3DJ3CB40F9m2bp3btfHJX5Fc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgxODgz/NzMtMTQ1Njc4NjA0/OC04OTMwLmpwZWc.jpeg"
    },
    {
     "ID": 195,
     "Label": "D.O. - North Starr 2 versions",
     "Production": "Northstarr",
     "Year": 2006,
     "Artist": "D.O.",
     "Album": "North Starr 2 versions",
     "Image": "https://i.discogs.com/xMmySKcjeyHfkuRcnJolZe7qsVkLylgzmLtn-GgsU8Y/rs:fit/g:sm/q:90/h:576/w:576/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2NjU1/MzMtMTQ3Njc2OTkz/Ny0yNzM2LmpwZWc.jpeg"
    },
    {
     "ID": 196,
     "Label": "Annick - Give It To Me 2 versions",
     "Production": "Ranco Records",
     "Year": 2006,
     "Artist": "Annick",
     "Album": "Give It To Me 2 versions",
     "Image": "https://i.discogs.com/Lvs9fE13MZjmSNW676icurhPrIEJPPCBdm8kkm6ld-E/rs:fit/g:sm/q:90/h:511/w:498/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0ODgz/NjAtMTIyMzQzODI5/MC5qcGVn.jpeg"
    },
    {
     "ID": 197,
     "Label": "Barzin - My Life In Rooms ‎(CD, Album)",
     "Production": "Monotreme Records",
     "Year": 2006,
     "Artist": "Barzin",
     "Album": "My Life In Rooms",
     "Image": "https://i.discogs.com/Yd1ZLKjgCh7x2PIVi4xURFiC2FtD0g0oVAdsxxBgBec/rs:fit/g:sm/q:90/h:514/w:588/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1NDA0/OC0xMjA2OTI3NTI2/LmpwZWc.jpeg"
    },
    {
     "ID": 198,
     "Label": "Belly (3) - I Swear ‎(12\", Promo)",
     "Production": "Capital Prophet Records",
     "Year": 2006,
     "Artist": "Belly",
     "Album": "I Swear",
     "Image": "https://i.discogs.com/-dBPUuLrgIJEoMDo3vnbElvZhylwHMKX1N0usPngHp8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NTE3/MTctMTQ2NDE5NTQz/NS0yODk2LnBuZw.jpeg"
    },
    {
     "ID": 199,
     "Label": "Eileen Laverty - Ground Beneath My Feet ‎(CD, Album)",
     "Production": "BRC Music (2)",
     "Year": 2006,
     "Artist": "Eileen Laverty",
     "Album": "Ground Beneath My Feet",
     "Image": "https://i.discogs.com/wr5f0Hf53FoLLWR9ZTAJDomXamJ4rQgJCEvbLZSwxvg/rs:fit/g:sm/q:90/h:463/w:465/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MDQ5/MDE1LTE1ODYwMDUw/MTUtODk0MC5qcGVn.jpeg"
    },
    {
     "ID": 200,
     "Label": "Zoë Bentley* - Stride ‎(CD, Album)",
     "Production": "Opening Day Recordings",
     "Year": 2006,
     "Artist": "Zoë Bentley",
     "Album": "Stride",
     "Image": "https://i.discogs.com/dROpwjGR6W83qiMDHl1K2dDtljzmmP-a0ABJjr17P4U/rs:fit/g:sm/q:90/h:500/w:496/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NTA4/MDY0LTE2MTM4NDYx/NjQtMjcxNy5qcGVn.jpeg"
    },
    {
     "ID": 201,
     "Label": "Rob Lamothe - Long Lazy Curve ‎(CD, Album)",
     "Production": "Live Wire Records (3)",
     "Year": 2006,
     "Artist": "Rob Lamothe",
     "Album": "Long Lazy Curve",
     "Image": "https://i.discogs.com/DM5TNi61NeJpfyFhZz_kDXE6K15GvrrcgR6m-c9lAhk/rs:fit/g:sm/q:90/h:533/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3ODAx/MzQtMTU3MDczNTU1/NC04MDAxLmpwZWc.jpeg"
    },
    {
     "ID": 202,
     "Label": "Various - The Greatest Underground Show On Earth ‎(CD, Comp)",
     "Production": "Cyclone Records (3)",
     "Year": 2006,
     "Artist": "Various",
     "Album": "The Greatest Underground Show On Earth",
     "Image": "https://i.discogs.com/HZBz5fpK3pyCuFWudFk0Li3m7ryT24y5Cm6KKs1qoq0/rs:fit/g:sm/q:90/h:397/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTkz/MTczLTE1MDc4MzQz/NDUtNjI2Ny5qcGVn.jpeg"
    },
    {
     "ID": 203,
     "Label": "Clothes Make The Man - Clothes Make The Man ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2006,
     "Artist": "Clothes Make The Man",
     "Album": "Clothes Make The Man",
     "Image": "https://i.discogs.com/lW-sQGvTZF32y8n3NXQPBu7AVAIpvgNi8kxuVtt5ME4/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMzkz/NzcxLTE0OTY1ODYz/NzUtMjA2Ny5qcGVn.jpeg"
    },
    {
     "ID": 204,
     "Label": "Malicious (10) - Heatwave ‎(12\", Single)",
     "Production": "ODoubleF Records",
     "Year": 2006,
     "Artist": "Malicious",
     "Album": "Heatwave",
     "Image": "https://i.discogs.com/TgOQq6nE9CZx2MED1R_cwvhednFeWO-wXaLeXkH2n8A/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5NTE1/OTEtMTQzMDI1NzI0/OS0xNDkwLmpwZWc.jpeg"
    },
    {
     "ID": 205,
     "Label": "Major Maker - All Illusion ‎(CD, Advance)",
     "Production": "Not On Label",
     "Year": 2006,
     "Artist": "Major Maker",
     "Album": "All Illusion",
     "Image": "https://i.discogs.com/7xAKaXGWuvxXldFQDV2yqZBCp4opxePugJT0nj3RY-U/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxODQ1/ODYwLTE2NDI4NzIz/NjMtMTk2OS5qcGVn.jpeg"
    },
    {
     "ID": 206,
     "Label": "Massari - Rush The Floor ‎(12\")",
     "Production": "Urban",
     "Year": 2006,
     "Artist": "Massari",
     "Album": "Rush The Floor",
     "Image": "https://i.discogs.com/oDy29-QcwHUja5TTQxDwgrYm2jRIRglTWBR12S5gDfE/rs:fit/g:sm/q:90/h:450/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MzEw/ODAtMTU2NzQyMzQw/My05OTEyLmpwZWc.jpeg"
    },
    {
     "ID": 207,
     "Label": "Faunts - High Expectations \/ Low Results ‎(CD, Album)",
     "Production": "Friendly Fire Recordings",
     "Year": 2005,
     "Artist": "Faunts",
     "Album": "High Expectations / Low Results",
     "Image": "https://i.discogs.com/bx4T9-bL2Acs1dKx-JxF_wYcRgC0PoXvuaoeuwks9KA/rs:fit/g:sm/q:90/h:523/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODcz/MTktMTU4NDgzNzc1/NS05NzIwLmpwZWc.jpeg"
    },
    {
     "ID": 208,
     "Label": "Massari - Be Easy ‎(CD, Single, Promo)",
     "Production": "Capital Prophet Records, Universal Music, Urban",
     "Year": 2005,
     "Artist": "Massari",
     "Album": "Be Easy",
     "Image": "https://i.discogs.com/mSghgPQi8CIl60Uynwxj1MWJyzPpZFh8c4vy9UU68gk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMzY5/NDY4LTE2NDYzMTg2/NzAtNjQ1NS5qcGVn.jpeg"
    },
    {
     "ID": 209,
     "Label": "Everlasting (Circle Research Instrumental) and 1 more…Ivana Santilli - Everlasting ‎(12\")",
     "Production": "Do Right! Music",
     "Year": 2005,
     "Artist": "Ivana Santilli",
     "Album": " Everlasting",
     "Image": "https://i.discogs.com/q5lUQon0BKEMuTC18FEWMJHL3yOlEcumSb3M91bFdUA/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5ODk4/My0xMjEzODI4MTc5/LmpwZWc.jpeg"
    },
    {
     "ID": 210,
     "Label": "Paul Anka - Rock Swings 2 versions",
     "Production": "Globe Records",
     "Year": 2005,
     "Artist": "Paul Anka",
     "Album": "Rock Swings 2 versions",
     "Image": "https://i.discogs.com/tvDYvrYlmVpZ86cmtFpPqJj8mHOPw9QYYLcNJj5hrYo/rs:fit/g:sm/q:90/h:599/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3MzI5/MjItMTI5OTI2Mzc5/Mi5qcGVn.jpeg"
    },
    {
     "ID": 211,
     "Label": "DJ Serious - Cold Tea 3 versions",
     "Production": "Audio Research Records",
     "Year": 2005,
     "Artist": "DJ Serious",
     "Album": "Cold Tea 3 versions",
     "Image": "https://i.discogs.com/ATYOgDviZ3y4BBkOa2v74ApuV4PHEzv1-WrnT_IWGik/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjE3/MDktMTIxNzI0MjAz/MC5qcGVn.jpeg"
    },
    {
     "ID": 212,
     "Label": "Massari - Massari ‎(CD, Album, Enh)",
     "Production": "Capital Prophet Records",
     "Year": 2005,
     "Artist": "Massari",
     "Album": "Massari",
     "Image": "https://i.discogs.com/bV45Ob8X1ram9nCb-fcAlwlzqI3A0LOIK3nIB8gE2uk/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MTY2/NjAtMTI5MzQ1NjM4/My5qcGVn.jpeg"
    },
    {
     "ID": 213,
     "Label": "Great Lake Swimmers - Bodies And Minds 6 versions",
     "Production": "Misra, Weewerk",
     "Year": 2005,
     "Artist": "Great Lake Swimmers",
     "Album": "Bodies And Minds 6 versions",
     "Image": "https://i.discogs.com/w0sCbrrx8pSZ7AqlMLinjraNS_PkHfqQiLizTvJOON0/rs:fit/g:sm/q:90/h:250/w:250/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDQ5/NDAtMTMyODg0ODY0/My5qcGVn.jpeg"
    },
    {
     "ID": 214,
     "Label": "Melwood Cutlery - Campfire ‎(CD, Album)",
     "Production": "Borealis Records",
     "Year": 2005,
     "Artist": "Melwood Cutlery",
     "Album": "Campfire",
     "Image": "https://i.discogs.com/yjTcl-QVg0AOQEGSR5m1T0xMDWBTj15MNQfK8Wv8zWo/rs:fit/g:sm/q:90/h:354/w:355/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMzkz/NTM4LTE0OTY1ODMz/ODQtMjYxMS5qcGVn.jpeg"
    },
    {
     "ID": 215,
     "Label": "Various - Canadian Idol - High Notes ‎(CD, Comp, Copy Prot.)",
     "Production": "Sony BMG, 19 Recordings",
     "Year": 2005,
     "Artist": "Various",
     "Album": "Canadian Idol - High Notes",
     "Image": "https://i.discogs.com/i-FyazTfW420A-M-9iZiL3s6rAW1GYk23boKHHEoe24/rs:fit/g:sm/q:90/h:496/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkyNTQw/ODgtMTQ3NzQzMDEy/Mi02MDU5LmpwZWc.jpeg"
    },
    {
     "ID": 216,
     "Label": "Melissa O'Neil - Alive ‎(CD, Single, Enh)",
     "Production": "Sony BMG",
     "Year": 2005,
     "Artist": "Melissa O'Neil",
     "Album": "Alive",
     "Image": "https://i.discogs.com/LRDkfL0gg2cR8FiOGYKVaqVGtSY9Lw0AGWI-j7ZQMbc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgzMzU1/OC0xNjM1Njk2MTkw/LTMzNjIuanBlZw.jpeg"
    },
    {
     "ID": 217,
     "Label": "Rex Goudie - Under The Lights ‎(CD, Album)",
     "Production": "Sony BMG",
     "Year": 2005,
     "Artist": "Rex Goudie",
     "Album": "Under The Lights",
     "Image": "https://i.discogs.com/G1dQAqXYY8uATcc1GMBf-QPwoNB52pK30Nq3Ivpc2zw/rs:fit/g:sm/q:90/h:355/w:355/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NjYw/NDctMTQxMDY3NDA3/OS04NDIyLmpwZWc.jpeg"
    },
    {
     "ID": 218,
     "Label": "Eternia - It's Called Life ‎(CD, Album)",
     "Production": "S. Kaya, Urbnet Records",
     "Year": 2005,
     "Artist": "Eternia",
     "Album": "It's Called Life",
     "Image": "https://i.discogs.com/QT9ucwwpsIhr8TDB4tPnGmxZ8CD1TT6UGVjuzMlmOwA/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NzM5/MTctMTUyNzk2ODA0/Ny03NjczLmpwZWc.jpeg"
    },
    {
     "ID": 219,
     "Label": "The Floor - Personnel ‎(CD, Album)",
     "Production": "Normals Welcome Records",
     "Year": 2005,
     "Artist": "The Floor",
     "Album": "Personnel",
     "Image": "https://i.discogs.com/96IqhtUcLvR79vuDFuxKw5C5zThGdw1VOPFz_WtCH-c/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExOTgz/MjQtMTIwMDEzMDg2/NS5qcGVn.jpeg"
    },
    {
     "ID": 220,
     "Label": "Maestro* - Urban Landmark 1989-2005 ‎(CD, Comp)",
     "Production": "The Orange Record Label",
     "Year": 2005,
     "Artist": "Maestro",
     "Album": "Urban Landmark 1989-2005",
     "Image": "https://i.discogs.com/ko9vf-kVxAgyRV6Rfrl4vEOrKrbBg4xaUt4NKL8Cxjk/rs:fit/g:sm/q:90/h:355/w:355/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0MjI4/MS0xNDM5NjU4NTI3/LTg2MjMuanBlZw.jpeg"
    },
    {
     "ID": 221,
     "Label": "Projet Orange - Megaphobe ‎(CD, Album, Copy Prot., Enh)",
     "Production": "Vik Recordings, BMG Canada",
     "Year": 2004,
     "Artist": "Projet Orange",
     "Album": "Megaphobe",
     "Image": "https://i.discogs.com/LqWLOapNoZleIph5B-8Cgoy3SpinRD6hFs8OVdMXDUg/rs:fit/g:sm/q:90/h:600/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxOTY3/NTktMTUyOTY4OTU1/NS0xMTkwLmpwZWc.jpeg"
    },
    {
     "ID": 222,
     "Label": "B-Boy StanceK-OS - Joyful Rebellion ‎(CD, Album, Copy Prot.)",
     "Production": "Virgin, EMI",
     "Year": 2004,
     "Artist": "K-OS",
     "Album": "Joyful Rebellion",
     "Image": "https://i.discogs.com/QSFPmmV5DNfeObkdi0X_NsCjqzL4PdBKAcGGQLofjOw/rs:fit/g:sm/q:90/h:588/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MTA1/NTYtMTIxNzQyNDcx/Mi5qcGVn.jpeg"
    },
    {
     "ID": 223,
     "Label": "Various - Canadian Idol: Greatest Moments ‎(CD, Comp)",
     "Production": "Vik Recordings, BMG Canada, 19 Recordings, FremantleMedia",
     "Year": 2004,
     "Artist": "Various",
     "Album": "Canadian Idol: Greatest Moments",
     "Image": "https://i.discogs.com/jAgW1JF1pNFL7KHGCcF3FrLMVvNaDLAS0fQV-invD8Q/rs:fit/g:sm/q:90/h:582/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgzNTIx/NS0xNTcwOTM4MzAw/LTc2MjIuanBlZw.jpeg"
    },
    {
     "ID": 224,
     "Label": "Shawn Desman - Back For More 3 versions",
     "Production": "Sony BMG, UOMO",
     "Year": 2004,
     "Artist": "Shawn Desman",
     "Album": "Back For More 3 versions",
     "Image": "https://i.discogs.com/Od6Zrzcm8iRdF4pLIkEy11ThQRQvtB9tz_N4J3w_gz8/rs:fit/g:sm/q:90/h:240/w:240/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0ODAx/NDktMTI0OTM1MzU3/Ni5qcGVn.jpeg"
    },
    {
     "ID": 225,
     "Label": "Valley Of The Giants - Valley Of The Giants ‎(CD, Album)",
     "Production": "Arts & Crafts International",
     "Year": 2004,
     "Artist": "Valley Of The Giants",
     "Album": "Valley Of The Giants",
     "Image": "https://i.discogs.com/Mw3o1_lh0r4TTBO65Bxn4xiBGtpuCawpOJf5uaYYS4M/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5ODYx/NzItMTM1MTQ2MzU3/NS03NzQ1LmpwZWc.jpeg"
    },
    {
     "ID": 226,
     "Label": "Abdominal & DJ Fase - Flowtation Device 3 versions",
     "Production": "[PIAS] Recordings, [PIAS] Recordings",
     "Year": 2001,
     "Artist": "Abdominal & DJ Fase",
     "Album": "Flowtation Device 3 versions",
     "Image": "https://i.discogs.com/d4fsGspnpftufeRLVnSFvOQ9myh9vJYi0Ppr5qUcWHU/rs:fit/g:sm/q:90/h:298/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU3Nzc0/Mi0xMTMzNzExMjA0/LmpwZWc.jpeg"
    },
    {
     "ID": 227,
     "Label": "Shalabi Effect - Pink Abyss 2 versions",
     "Production": "Alien8 Recordings",
     "Year": 2004,
     "Artist": "Shalabi Effect",
     "Album": "Pink Abyss 2 versions",
     "Image": "https://i.discogs.com/0yxoOXhye0LfeBIORvpoTKrNEQU7Trw5opgV6x7cHpQ/rs:fit/g:sm/q:90/h:559/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2MjYx/MS0xNjQzNjA0ODEw/LTE5MjEuanBlZw.jpeg"
    },
    {
     "ID": 228,
     "Label": "Various - Sound Street Records Compilation Volume 1 ‎(CD, Comp)",
     "Production": "Sound Street Records",
     "Year": 2004,
     "Artist": "Various",
     "Album": "Sound Street Records Compilation Volume 1",
     "Image": "https://i.discogs.com/rb-07seORJOJGrK00OdXaFw93JfClKXgZ5iBPdIvUis/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NDc0/NjAwLTE2MzM3MTky/MTAtNjEzNC5qcGVn.jpeg"
    },
    {
     "ID": 229,
     "Label": "B-Boy StanceK-OS - B-Boy Stance 3 versions",
     "Production": "EMI Music Canada",
     "Year": 2004,
     "Artist": "K-OS",
     "Album": "3 versions",
     "Image": ""
    },
    {
     "ID": 230,
     "Label": "Kalan Porter - Awake In A Dream ‎(CD, Single)",
     "Production": "Vik Recordings, BMG",
     "Year": 2004,
     "Artist": "Kalan Porter",
     "Album": "Awake In A Dream",
     "Image": "https://i.discogs.com/GhJ9rmhGuoZI3SUL0vXFc17dUZQMVVLRTMkDPMWTGtw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNDY0/OTE5LTE1NzA5Mzgx/MzEtMzM1OS5qcGVn.jpeg"
    },
    {
     "ID": 231,
     "Label": "Erika Werry - Nothing Comes Clearer ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2004,
     "Artist": "Erika Werry",
     "Album": "Nothing Comes Clearer",
     "Image": "https://i.discogs.com/In40V_i4KoBPAIdAf5VaHqS3PXibTp0HB9o4-skY7GA/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjI4/MDI2LTE1NTAzMzIz/NjgtNzM3OS5qcGVn.jpeg"
    },
    {
     "ID": 232,
     "Label": "Melissa McClelland - Stranded In Suburbia ‎(CD, Album, Enh)",
     "Production": "The Orange Record Label, Universal",
     "Year": 2004,
     "Artist": "Melissa McClelland",
     "Album": "Stranded In Suburbia",
     "Image": "https://i.discogs.com/V79mBQ6fohg82fatx1pz2P2sZqt929FIhc48eKd0jPQ/rs:fit/g:sm/q:90/h:535/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwMTU0/NC0xNjAwMDU2ODk1/LTg3MjMuanBlZw.jpeg"
    },
    {
     "ID": 233,
     "Label": "Shawn Desman - Man In Me ‎(12\", Promo)",
     "Production": "Sony BMG",
     "Year": 2004,
     "Artist": "Shawn Desman",
     "Album": "Man In Me",
     "Image": "https://i.discogs.com/OT1hdUjlBs4Ht40ZSMd-wyfxca9afrLedlEePRdLEgc/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwOTAz/MTItMTQ0MTM2ODgx/OS04ODA5LmpwZWc.jpeg"
    },
    {
     "ID": 234,
     "Label": "Goat Horn - Storming The Gates ‎(CD, Album)",
     "Production": "Basement Metal",
     "Year": 2003,
     "Artist": "Goat Horn",
     "Album": "Storming The Gates",
     "Image": "https://i.discogs.com/zNNALlVkuHzSIvGuudhnBrEc9DZkGFfc4c7HA2cOaCA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMzQw/MDk1LTE1NTI0MDQ0/NDgtNjg1OS5qcGVn.jpeg"
    },
    {
     "ID": 235,
     "Label": "In Essence (2) - Friend Of Mine ‎(CD, Single)",
     "Production": "Vik Recordings, BMG Canada",
     "Year": 2003,
     "Artist": "In Essence",
     "Album": "Friend Of Mine",
     "Image": "https://i.discogs.com/9aj7xerS_hQAKvEiGGAjp0Rin85yVb7r7neZ-OV7tRI/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NjE5/NjIzLTE1OTQ4NzMx/OTEtMjk0Ny5qcGVn.jpeg"
    },
    {
     "ID": 236,
     "Label": "Hawksley Workman - Lover\/Fighter 2 versions",
     "Production": "Mercury",
     "Year": 2003,
     "Artist": "Hawksley Workman",
     "Album": "Lover/Fighter",
     "Image": "https://i.discogs.com/XgAalIR2wm-4khHIYbHMtvNJ2_Wpwn0tDTx0Aje1r54/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5MDY1/NS0xMzE0OTMyOTc5/LmpwZWc.jpeg"
    },
    {
     "ID": 237,
     "Label": "Choclair - Flagrant ‎(CD, Album)",
     "Production": "Sextant Records, Greenhouse Music (2)",
     "Year": 2003,
     "Artist": "Choclair",
     "Album": "Flagrant",
     "Image": "https://i.discogs.com/-20WR9G2k-TK_PgUsBcxRiJ7j6Qvi9dcJ1m9ERdWYuo/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc4MTI1/My0xMjcyNjQ3Mzgy/LmpwZWc.jpeg"
    },
    {
     "ID": 238,
     "Label": "Jacksoul - Resurrected 2 versions",
     "Production": "Vik Recordings, Vik Recordings",
     "Year": 2003,
     "Artist": "Jacksoul",
     "Album": "Resurrected 2 versions",
     "Image": "https://i.discogs.com/wb8H7KzjbRTA2J9BQ_aPK5zj6Bo_biSDBPFZr3mV7zs/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4Nzg5/ODItMTQyODU5NDk0/Mi02MjIwLmpwZWc.jpeg"
    },
    {
     "ID": 239,
     "Label": "In Essence (2) - The Master Plan 2 versions",
     "Production": "Vik Recordings, BMG Canada",
     "Year": 2003,
     "Artist": "In Essence",
     "Album": "The Master Plan 2 versions",
     "Image": "https://i.discogs.com/2iKHCL9K9wsPG3YMF-aBgwAh2kqMJPar4lkEd2u-kxY/rs:fit/g:sm/q:90/h:337/w:339/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1ODk0/Ni0xMzIyOTYxMzQ3/LnBuZw.jpeg"
    },
    {
     "ID": 240,
     "Label": "Astrobillys - Astrobilly Moon ‎(CDr, Album)",
     "Production": "ASAP CD Solutions",
     "Year": 2003,
     "Artist": "Astrobillys",
     "Album": "Astrobilly Moon",
     "Image": ""
    },
    {
     "ID": 241,
     "Label": "Andrée Watters - AW ‎(CD, Album)",
     "Production": "Vik Recordings, BMG Canada Inc., Les Productions MAF",
     "Year": 2003,
     "Artist": "Andrée Watters ",
     "Album": "AW",
     "Image": "https://i.discogs.com/3lsr1tlx2MyU6CBbf2RaeAPzTRfz1EEdFyHMtA1-nvY/rs:fit/g:sm/q:90/h:580/w:580/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5MDIz/MDgtMTQ0NjQxMjMz/MC0zOTA0LmpwZWc.jpeg"
    },
    {
     "ID": 242,
     "Label": "Ryan Malcolm - Something More ‎(CD, Single)",
     "Production": "Vik Recordings, BMG Canada, 19 Recordings",
     "Year": 2003,
     "Artist": "Ryan Malcolm",
     "Album": "Something More",
     "Image": "https://i.discogs.com/_la2G7JK1PBiGt3ZlSeSyyH4zU43r30RtTv49auvgek/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1Mjgz/MzQtMTU3MDkzODIw/NC04NTY2LmpwZWc.jpeg"
    },
    {
     "ID": 243,
     "Label": "The Wisemen Featuring Lester Mclean - Sax Man ‎(12\")",
     "Production": "Mi Casa Records Inc. (Canada)",
     "Year": 2003,
     "Artist": "The Wisemen Featuring Lester Mclean",
     "Album": "Sax Man",
     "Image": "https://i.discogs.com/Sz0xluCrglfqtNN5t_5auAJtQRh2HkLINffdsl00SlE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjI4/ODMtMTI2MDcwMjQx/MC5qcGVn.jpeg"
    },
    {
     "ID": 244,
     "Label": "Stephen Stanley - The Thin, Wild Mercury ‎(CD)",
     "Production": "Stereophonic",
     "Year": 2003,
     "Artist": "Stephen Stanley",
     "Album": " The Thin, Wild Mercury",
     "Image": "https://i.discogs.com/4y4xwxx7hi5Qw1VZjE_Q4N7i433CXWmEUrGkE2o2_bc/rs:fit/g:sm/q:90/h:288/w:288/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NzA3/OTYyLTE1ODAwNTQ4/NTktODkxNi5qcGVn.jpeg"
    },
    {
     "ID": 245,
     "Label": "Jully Black, Keshia Chanté, Esthero & Graph Nobel - Life ‎(CD, Single)",
     "Production": "Universal Records",
     "Year": 2003,
     "Artist": "Jully Black, Keshia Chanté, Esthero & Graph Nobel",
     "Album": "Life",
     "Image": "https://i.discogs.com/vrkY2emhtP6Fm19M9OwHtXy8Mj4e9bH4Xo_fw4vnVx4/rs:fit/g:sm/q:90/h:600/w:587/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5NDg4/Mi0xMjUwMjU0NzE1/LmpwZWc.jpeg"
    },
    {
     "ID": 246,
     "Label": "X-Quisite - X-Quisite ‎(CD, Album)",
     "Production": "Linus Entertainment, Warner Music Canada",
     "Year": 2003,
     "Artist": "X-Quisite",
     "Album": "X-Quisite",
     "Image": "https://i.discogs.com/U0XPZZAlvaEVH13yyBO9y8Ep_s8fDzCl950KqNG-0aE/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjY5/MzEtMTE5NDIwMzUy/NC5qcGVn.jpeg"
    },
    {
     "ID": 247,
     "Label": "The Floor - Doll E.P. ‎(CD, EP)",
     "Production": "Not On Label (The Floor Self-released)",
     "Year": 2003,
     "Artist": "The Floor",
     "Album": "Doll E.P.",
     "Image": "https://i.discogs.com/w0fqbsgdZiWLaZBydO8bU01G3ulppyOu-uFBxkRFi_I/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MzQw/NTAtMTI4MzgyNTU4/MS5qcGVn.jpeg"
    },
    {
     "ID": 248,
     "Label": "Grindig - Grindig ‎(CD, Album)",
     "Production": "Shoreline Records Inc.",
     "Year": 2002,
     "Artist": "Grindig",
     "Album": "Grindig",
     "Image": "https://i.discogs.com/Uuceq1Lu4kECHej6Ve_6XOUxlA8tlJcfh7aLa-L5tfg/rs:fit/g:sm/q:90/h:600/w:586/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwNTQ0/NTk4LTE2MzM4OTQ5/NjMtMTY2MS5qcGVn.jpeg"
    },
    {
     "ID": 249,
     "Label": "Shook (Svensson Remix Radio Edit) and 1 more…Shawn Desman - Shook ‎(CD, Single, Promo)",
     "Production": "UOMO International, Vik Recordings",
     "Year": 2002,
     "Artist": "Shawn Desman",
     "Album": "Shook",
     "Image": "https://i.discogs.com/wdMJQ_BY4mS-6_0S_00XlXSgMDdLfcnaJDQ5sIr99l0/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0MTA5/NDctMTMyOTM2ODg5/Ni5qcGVn.jpeg"
    },
    {
     "ID": 250,
     "Label": "Vulgaires Machins - Aimer Le Mal ‎(CD, Album, Enh)",
     "Production": "Indica Records",
     "Year": 2002,
     "Artist": "Vulgaires Machins",
     "Album": "Aimer Le Mal",
     "Image": "https://i.discogs.com/J_xudaHh8yAEmMryd6keXPGffX8VVhX_cSxnljQaQOA/rs:fit/g:sm/q:90/h:505/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMDY4/NTYtMTM3NTczMjU0/NC0yMjA3LmpwZWc.jpeg"
    },
    {
     "ID": 251,
     "Label": "Dream Warriors - The Legacy Continues… ‎(CD, Album)",
     "Production": "Jupiton BV, Jupiton BV",
     "Year": 2002,
     "Artist": "Dream Warriors",
     "Album": "The Legacy Continues…",
     "Image": "https://i.discogs.com/ab_BPkzSSCiQhsvNIzvltGjiClZt2V-3lHle8qeeIWc/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3MTc3/NTEtMTI5OTYxNjUw/My5qcGVn.jpeg"
    },
    {
     "ID": 252,
     "Label": "The Lowest Of The Low - Nothing Short Of A Bullet ‎(2xCD, Album, Liv)",
     "Production": "Yes Boy Records",
     "Year": 2002,
     "Artist": "The Lowest Of The Low",
     "Album": "Nothing Short Of A Bullet",
     "Image": "https://i.discogs.com/AWK_e2-QzSJQ_Y7R02LQXVf45M552lXYEa6Uib2kNGI/rs:fit/g:sm/q:90/h:464/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2OTU3/NDktMTIzNzk1ODI4/My5qcGVn.jpeg"
    },
    {
     "ID": 253,
     "Label": "Young Ideas - To Care For A Baby Bird ‎(CD, MiniAlbum)",
     "Production": "Not On Label (Young Ideas Self-released)",
     "Year": 2002,
     "Artist": "Young Ideas",
     "Album": "To Care For A Baby Bird",
     "Image": "https://i.discogs.com/08CI2mbwUAz5YiSg2lZo8vtbTIj4gEXOMjUHkWHLP9Q/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1Mjkw/MTk4LTE1ODkyNDgx/NzYtNzY4NS5qcGVn.jpeg"
    },
    {
     "ID": 254,
     "Label": "Sinewave, dB (11) - 2Phur Volume One ‎(12\")",
     "Production": "2Top Records",
     "Year": 2002,
     "Artist": "Sinewave",
     "Album": "2Phur Volume One",
     "Image": "https://i.discogs.com/_SQUVNX50V9EhuUw-LPb-dUTyPHB4hR6QxEJq_eGPi4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU1ODIz/NzgtMTYyMjA3Mzg3/OC0zNTM1LmpwZWc.jpeg"
    },
    {
     "ID": 255,
     "Label": "Madviolet - Mad Violet ‎(CD)",
     "Production": "Not On Label (Madviolet Self-released)",
     "Year": 2002,
     "Artist": "Madviolet",
     "Album": "Mad Violet",
     "Image": "https://i.discogs.com/xrce6LQrmK0NR8vew_ZoUL_rresgzv-i_Ba6eaejMfE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODEw/NzM2LTE2MjE1Mzkx/ODctMjk5Mi5qcGVn.jpeg"
    },
    {
     "ID": 256,
     "Label": "Various - The Number 1 Blues Album ‎(CD, Comp)",
     "Production": "Verve Records, Verve Records",
     "Year": 2002,
     "Artist": "Various",
     "Album": " The Number 1 Blues Album",
     "Image": "https://i.discogs.com/p8xR9h1D_o8nbv6_IGa6Di5HZMwOA1Xzs7aTToCcnKQ/rs:fit/g:sm/q:90/h:600/w:570/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk1NDM0/MjItMTQ4MjQyMjE2/NS00NDk3LmpwZWc.jpeg"
    },
    {
     "ID": 257,
     "Label": "Holly Cole - Baby, It's Cold Outside 5 versions",
     "Production": "Alert Music Inc.",
     "Year": 2001,
     "Artist": "Holly Cole",
     "Album": "Baby, It's Cold Outside 5 versions",
     "Image": "https://i.discogs.com/FzKStNdU0rZBPLKsvxhqR70NUpI01EiH-Y0fDmEL2NU/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MTIw/NTUtMTMzODgzODI1/OC05MTM0LmpwZWc.jpeg"
    },
    {
     "ID": 258,
     "Label": "The Supers - Spklanng! ‎(CD, Album)",
     "Production": "Permanent Press",
     "Year": 2001,
     "Artist": "The Supers",
     "Album": "Spklanng!",
     "Image": "https://i.discogs.com/KOZ9FVRRQMROr3wQwKwJVa_q-Mo0OpF8pN51x2DUGb4/rs:fit/g:sm/q:90/h:354/w:351/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4NTg0/NzItMTQyODE1MDUw/My0yNDQ4LmpwZWc.jpeg"
    },
    {
     "ID": 259,
     "Label": "Liquified - Maintainin' ‎(CD, Album)",
     "Production": "Digital Zen",
     "Year": 2001,
     "Artist": "Liquified",
     "Album": "Maintainin'",
     "Image": "https://i.discogs.com/lFEet8dhO-WxQR79F5SKJuk8cCt9S_CDaH_Apz21mZU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwODM1/NTItMTMxNDkyODY5/Ni5qcGVn.jpeg"
    },
    {
     "ID": 260,
     "Label": "Saint Pete - Stay ‎(12\", Single)",
     "Production": "DMT",
     "Year": 2001,
     "Artist": "Saint Pete",
     "Album": "Stay",
     "Image": "https://i.discogs.com/bNE4qrLq19IeJXQ7JxzA33XdcECCvriPbPzHNAmQWNo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MDU0/MDctMTU3NTkyMTUy/MS01MDAwLmpwZWc.jpeg"
    },
    {
     "ID": 261,
     "Label": "Northern Pikes* - Truest Inspiration ‎(CD, Album)",
     "Production": "Not On Label",
     "Year": 2001,
     "Artist": "Northern Pikes",
     "Album": "Truest Inspiration",
     "Image": "https://i.discogs.com/gHcbgIC40wFkT9wG_nlONxNVGBzvHJb18N4xbUMuVFA/rs:fit/g:sm/q:90/h:250/w:250/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4MDky/NzYtMTQyNzA2OTcw/OC0yNjQwLmpwZWc.jpeg"
    },
    {
     "ID": 262,
     "Label": "David Matheson - David Matheson ‎(CD)",
     "Production": "David Matheson Music",
     "Year": 2001,
     "Artist": "David Matheson",
     "Album": "David Matheson",
     "Image": "https://i.discogs.com/rBptWGZg7DYRtBPfNF1U01gUPM8eEyhBtVttB_PdsKM/rs:fit/g:sm/q:90/h:250/w:246/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0MzE2/NjYtMTM2NDcwNDkz/NS0zODI0LmpwZWc.jpeg"
    },
    {
     "ID": 263,
     "Label": "The Lowest Of The Low - (These are) The Lives and Times ‎(CD, Single, Promo)",
     "Production": "Yes Boy Records",
     "Year": 2001,
     "Artist": "The Lowest Of The Low",
     "Album": " (These are) The Lives and Times",
     "Image": "https://i.discogs.com/PDOTCbcGxU19aY6hzTgLuITbY-ggG3TFWPJQN6d8NuU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMDc3/NDYzLTE2NDQzMzcz/NTEtMTgxMS5qcGVn.jpeg"
    },
    {
     "ID": 264,
     "Label": "Sandor (2) - Everlasting ‎(CD, Album)",
     "Production": "Citizens Of Heaven",
     "Year": 2000,
     "Artist": "Sandor",
     "Album": "Everlasting",
     "Image": "https://i.discogs.com/zaTfAvNg7wxjxdLFbx5kypXcZpMHk69RrDfCA8ySD0Q/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU1MTM0/MjctMTM5NTMyMzQ5/Ni00ODI1LmpwZWc.jpeg"
    },
    {
     "ID": 265,
     "Label": "Jazmin (2) - Better Be Good ‎(CD, Single)",
     "Production": "Attic",
     "Year": 2000,
     "Artist": "Jazmin",
     "Album": "Better Be Good",
     "Image": "https://i.discogs.com/nDZjcqA0C4V41b0s2mDo5II56JDmWIl8kw2PK1xK68Y/rs:fit/g:sm/q:90/h:380/w:380/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0MDcw/My0xMTc1MjkzMDAy/LmpwZWc.jpeg"
    },
    {
     "ID": 266,
     "Label": "Johnny Favourite - The Tonight Album ‎(CD, Album)",
     "Production": "Alert Records",
     "Year": 2000,
     "Artist": "Johnny Favourite",
     "Album": "The Tonight Album",
     "Image": "https://i.discogs.com/JrkQBKfEqrwqdfkbDSRLZXDPlrK7i5mBuNBi59BhQRo/rs:fit/g:sm/q:90/h:320/w:320/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NDE0/OTktMTI5ODkzMDcx/OC5qcGVn.jpeg"
    },
    {
     "ID": 267,
     "Label": "Pomp (2) - Circumstance ‎(12\")",
     "Production": "DMT",
     "Year": 2000,
     "Artist": "Pomp",
     "Album": "Circumstance",
     "Image": "https://i.discogs.com/TBd3ANFS3d5k8K4DHhhkK9ryC9vPBfwMRdb3LPdBpp8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5Nzkw/MjktMTU3NDg5Njc3/NS0zMDczLmpwZWc.jpeg"
    },
    {
     "ID": 268,
     "Label": "Meenakshi - Prayers ‎(CD)",
     "Production": "Not On Label (Meenakshi Self-released)",
     "Year": 2000,
     "Artist": "Meenakshi",
     "Album": "Prayers",
     "Image": "https://i.discogs.com/1VEbSJ42hRIXx6lsUuyQgBhOZBqmje9HUuOiKNrY-5Q/rs:fit/g:sm/q:90/h:200/w:200/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2NjIw/OTktMTIzNTI5OTk3/NS5qcGVn.jpeg"
    },
    {
     "ID": 269,
     "Label": "K.C. Accidental - Anthems For The Could've Bin Pills ‎(CD, Album)",
     "Production": "Noise Factory Records",
     "Year": 2000,
     "Artist": "K.C. Accidental",
     "Album": "Anthems For The Could've Bin Pills",
     "Image": "https://i.discogs.com/imRUrDMIns-j_hsO6WuplBbkFzo2a2I4t5HgWgHeb9w/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MDIx/NC0xNDc5ODczMTU0/LTM3ODUuanBlZw.jpeg"
    },
    {
     "ID": 270,
     "Label": "Deal's Gone Bad - Overboard ‎(CD, Album)",
     "Production": "Jump Up! Records, Jump Up! Records",
     "Year": 1999,
     "Artist": "Deal's Gone Bad",
     "Album": "Overboard",
     "Image": "https://i.discogs.com/XJnhfHuWmqdOEpj0xwWRodr6dywySSFfkwSukzsZPTc/rs:fit/g:sm/q:90/h:599/w:591/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDI2/MjUtMTI2ODYwNDky/NC5qcGVn.jpeg"
    },
    {
     "ID": 271,
     "Label": "SATE (3) - Red Black & Blue ‎(CD, Album)",
     "Production": "Cristal Records",
     "Year": "Unknown",
     "Artist": "SATE",
     "Album": "Red Black & Blue",
     "Image": "https://i.discogs.com/9RBiu8AfhaQPGW_91vr9W_7ZU1Lb44fpwtdZHSJdd3o/rs:fit/g:sm/q:90/h:549/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMTI5/NDE0LTE1Mjg4OTEy/NjYtNTQ0NS5qcGVn.jpeg"
    },
    {
     "ID": 272,
     "Label": "Harm (11) - The Nine ‎(CDr, Album, Promo)",
     "Production": "E1 Entertainment",
     "Year": "Unknown",
     "Artist": "Harm",
     "Album": "The Nine",
     "Image": "https://i.discogs.com/IuRbrDVs7skJVs1R-b7a79dWo1yKiFB2vxevPl4AqIs/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg5MzQ4/MDMtMTQ3MTc4ODcz/OS03OTI1LmpwZWc.jpeg"
    }
   ]

export default ProjectsCards
