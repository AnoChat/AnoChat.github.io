'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4037e691503e5cf83644319a9586c137",
"index.html": "b29ec5d58e1fd6793270af9985dbd91d",
"/": "b29ec5d58e1fd6793270af9985dbd91d",
"CNAME": "b0ef02fc6a2e18406a0239bfa82799a2",
"main.dart.js": "c739ab0a88eda4dfe0719a36fe18fc3d",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9eee8d9aaf8840f96a2e3fcc64301533",
".git/ORIG_HEAD": "595a0fc9400df6fefa2a4eb64e34b19e",
".git/config": "07e225fb0f343236ed4f28f3093a1b9f",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/7ca0af9941af70297382882a96cb68316c36db": "719ebd1685082d052ef2d0e9d3b8be9f",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/3e/e6b9d3ef86761a4c0b459779c33bf1abfe8793": "4c390985253744694f57fe314b34558d",
".git/objects/50/12b7afbd1037a9188ea61082b82984c1adac5b": "58a4121f567251950f5e7fa836c9eb18",
".git/objects/3b/e5e6920e244d44562d318cb08ca1441f4de679": "4928a04f55a687e72f52c655ccca7839",
".git/objects/03/738e0872f3d55bb2d5eea81ba150dbec78e5ad": "b2153a4875ca3c305ec7d19487578e3f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/41c08084947bf98415ebf428cfc7b9aaad943a": "65cf193cbfc7895fb0d548801b217957",
".git/objects/9e/e25a228eef6cc82c35c56c8173b8931947be8e": "72c2de4b0825b50e5f529eaabb1a4fce",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/6c526b69d036d2bd95639b6fb05ffbc51ee068": "db4315b22ad83de9e5847fa967970dfc",
".git/objects/51/26cb2a8797bfc52910ef18f13999cb2f8103c5": "adaf2136092ca9e27b1e03031a706b49",
".git/objects/0b/dae706e03d0a0aafa8c83c6f826962e560a4ac": "1980a8909cb5f1af189dd5a901875927",
".git/objects/0e/8f6ac592ccf5cea7b193e44dffbb0395c21db0": "bcd6ed639b2ee1ed5c0672176b830a93",
".git/objects/60/e7c28f79995ce38c97e24baa905299d2a3ac88": "7bc87ba03deecc6a51f06103480fbf56",
".git/objects/33/9f7ce11667475b435a709ab29273616c1fad94": "8bd04d629476192c03e1e0f93e671975",
".git/objects/a4/10ae7f396403328938665b6d6bfb78d22fa7e2": "66bcb734c2ced98b8dee5b0d27a2254e",
".git/objects/a4/b73478db6bf6737074b571538f402e4c2bb88c": "e97f2ce34cd77cd91164b87cd7335f66",
".git/objects/ac/2919ba77f17d8026f6a5e18ad859ac7922367c": "a8fc89a33c69f3c3e62620a342af0169",
".git/objects/bb/3c1856ff62242e37cd8163caffc5cc8ef52971": "35ec07c12efb36bdfb1d3bf5e4821018",
".git/objects/d7/6cfe954b33464e9718cdda9ff3455315e44b6d": "8a4cb856e6df94808335556bb409b49d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/2dc10e1db21f6b33ef000c0a9b0b982b3faadd": "c30a887a81cdf485f61c664fcdadfe24",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/ae/a1df279cc2573786f44ec57b5ac1a2d1405bf4": "987ad132eec42e92819de5cd10d7e9a4",
".git/objects/d8/669fd56a88a649e04c6d1a9b3e577a2408d6a2": "d855d0522f843002cdb976111500a3b1",
".git/objects/d8/38f35eeb5bda35b58a4ee86fbd1195a45bb327": "9d3f5ac0eb2ee3d13289506483e612e0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/7e147c5d3e5d03d4e831f946871513169671b9": "1c2102068ad7cc401b9ee11c52bf574a",
".git/objects/fd/c8998148c6889462824fbe9a1c48ef036f20e2": "8ac1f47763703e40f15d91f816d7d61d",
".git/objects/f2/a659d2ea6398ac8ebf66aa28e8b52585f78758": "6b4c7868612888bdb8384ce6b7d85195",
".git/objects/f2/b2e345573216d7ce5cf0f9491b673fa5068185": "35152e96cc451d78a5aff34eaa167554",
".git/objects/fb/5e9ad34b6a4fb3429db0298bbb245b14c2b2f7": "b45ad7c28196b1c9213fe55c096b5d12",
".git/objects/fb/431183b9cabea7f3b3e612b24bb66a7d934107": "d7b2221abedf827fa06fd54a231650c3",
".git/objects/fb/31bd07dc064f357ccbfb9370df80080edc1b60": "7df72f3b2213abe61f44021a8868053a",
".git/objects/c6/5220458976a611b2cf7afe9acacdb850a7d402": "2ad3097e1119ef4a0d9e12511a40b98a",
".git/objects/c6/f00ee32c78586e4b1610b434db2ad2d79dbfa5": "f698885e1fd4525bc2382bfd23bdcd62",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/27/ff44af7f0ed536b1959facbad97bac41939094": "daa3fa643fc63e747a6450756e0b33ff",
".git/objects/4b/b00a0966c2337f5d0c27d9de4043249e9aafc7": "5a78de0572004e1c2aee1d8247f665ef",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/b6ce256206dea085993de52eac63c843b244f5": "1c70ced6d6ffece51e133823ebdaf1e4",
".git/objects/1f/decb118167e3f72d32bc3fabfd6f0b19a3b4c7": "557ae22abb67e1f702b97fffe1fc4d65",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/7fdab85913ade28fb8fdb55ea68cc5f4508601": "88fb031af475b4d014d907f226d6cfd3",
".git/objects/80/cb594a9d62a9bd7f7a38cccde6e42c21575160": "964f24914b1ca61def2ae0951a49b5dd",
".git/objects/80/ba550a2906c0c7b0c1b4defb1c214ddc915b9b": "89a63c0e4a2931a1e0cca33191f2b1b4",
".git/objects/17/41cde77af25ef27ed584bedf612fc0ca6d6600": "53586f3cbcf8b0f8ff20f55e583ca96c",
".git/objects/7b/140932b0c69f9ccd484befff6647899dd06038": "7845012562257f9384ed186d796ab58b",
".git/objects/8f/35a1f552c391dae36d5de0f51fa73b93dfde7a": "bf7451cdde466546b45c3911e2c6a92b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ca0a98eb14c055ed7c63c88fd7d3ac9597d17b": "321e70d9f2a6e39ed5151eaa3a44c4ab",
".git/objects/7e/86a31784ba0d3a364daa8a8bbe87f67c966380": "3d383ce3b6d00d2ef133e9d28f3092b9",
".git/objects/7e/ac5c72deb4438194bd1f7d9cfc193a5aa5413c": "a99bff5bdc3d7e571835cdfb959754da",
".git/objects/7e/28cdb33de9a28d5d18def0a95bb9f269ce0f7c": "9ca19f5f0ab035e36ad9d8d1e829d95c",
".git/objects/19/e53a4b7a721ffa94eb9c9c2ca5cae75db8955f": "7f37fd09b166b4ab25545211d107bc45",
".git/objects/26/d34dbd0891f8f9a5381c94812be2e019475698": "e02b52f7f9d49a64ca351dc037cc7d06",
".git/objects/21/84b7eb181a7213b127fffc74f5bfa7e68f643e": "2d84167f95c6c841293e684603f229d3",
".git/objects/4d/c564b663f39567a9a0f21fa72aa98f364d4177": "09901b585448efd80f3aee547803c240",
".git/objects/81/53e2211fc89e38e345901216201b17be0bb99a": "8cec36271bf7f0f24456655d2e45a9ab",
".git/objects/86/44bd6543590c4710ba8958636543ebc01ba1f9": "ff25419ec5f8a2c177ea1e5a3607fa28",
".git/objects/2a/76db06f60ad1123b8cca6c7ea9e5af680aaf8f": "f80ebad2905152535b26a66eb1318a5d",
".git/objects/43/edf9621c98f5bdfc5a0830e1c985561a0b7e7a": "6bbe4daf4d10e5b7ff959cd1ec5678a8",
".git/objects/43/1e4a39129e047c140e17a33789fb386cc7cea5": "9ed66e33d799590fe09584b437a684df",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f7b3b9996f65beb3142a71413f1d3c90bc571a": "11d759eb30eb2d1777b0814d0625df61",
".git/objects/07/edb25b95aff849fd47e7a11886f3e59e24c8a2": "3e08de741f2f3cc3d512dd58a74bc3cd",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/5c/6d58b51be3ecc7fd6f244a6fc869efa9cb0935": "8b71f20728d7749c892c009c28d5bb8b",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/96/640de938c16a92716e931134353b0a6392f12c": "4d586e12d20d2beb5c0742cd46f6d5b4",
".git/objects/3a/0f1b945e793a2961ce309572f08970dca6158e": "23efd0ffb0fe171a99f1494a3355467f",
".git/objects/5b/001de1b2d4069bea6570ae89ea78f0e3a13213": "56f06123e47660cfae3647cca55fe415",
".git/objects/37/99217737419f077a51e028d8eb64a544be04e3": "cf92fe183a443a240f29d23f30aaf8de",
".git/objects/99/9a16ded963904528e9d670cd65704d234c3ec3": "464d5a45a50ccb7a2a80140a9e500e0e",
".git/objects/52/e065c1090943b312c1737666bf51f404b235e2": "07476277452cd44da9ebe97881e1dde7",
".git/objects/52/a1db6826b915d3bb47d188117bb88270b315c6": "05f40c67587f15dd634475d87c79e6ca",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/0f/d530a32a50605b38701181b3c9eced41cd78ab": "c9f18ce6b23881d400a2bc723cc5da02",
".git/objects/bf/07115d68e3380000714ed6cab98f1fb2905d3e": "42e107461c787dd3af8c69c53420e303",
".git/objects/ba/43b6f5e698010ce906c1e984e99d6a09c27a77": "09311f0822b149f7736ee574d3db3de6",
".git/objects/a7/d4087d7a496f5a3518eb7ef0addcdddc90fa0f": "a5478c483860ee961489b740ae208759",
".git/objects/b1/2a1e58caf0cac328cf4d76951aaf36271c936d": "0a03646f76cbf04d614b083f92b5e182",
".git/objects/dd/fdf60a0add4dbce2c35995111aba77dcb8293c": "5b7a5e645527510e8bfcc855a45211ee",
".git/objects/a9/782662316a18732813518f996b3ac4f8ff4b99": "03fa18e8e9826318ab13ac4880a6e8ce",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/aa/9cb000a859fbc6321d81d021ac4dced173c910": "0d3eed072b0f1f5f5c155944084f4245",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4243e06c75bd87e404fbe302485783cd4d36b4": "aa2b86d6c4e4c3561b42d42f31db0d3d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b1d91b174d8ccdf3dd76c7f29950bdb4104e09": "565f5fe8f147e8a80c51ca1cbafa0cb6",
".git/objects/b9/50cf8e1c953443d9fc4ed6aa8fed2b1c07f584": "559cebb25c8ae323fc62fceb6ffd96e6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/224e6ea7c34cff9e1e0c4fa7b6e43a5bb974f8": "dfcc4b409fefa89a2a222e02bcb6f652",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/ea/5637be7ce1072fd13e504a504639dac2a2e997": "597e7572039a27b145cbea90afea4423",
".git/objects/cc/29e8c25c511e953954dfd437753439322967cd": "6cd4e188c9ec28ac4f3e23225efc6aca",
".git/objects/e6/3e04c8bd935778b68d6047dcb1d14c5239d16b": "3a9025288313508d0b22aefd9e89841e",
".git/objects/f7/4a4080d70ee6cf0ea04a5c05dc2601e7ada9ed": "77b2e02f50bc6357b44dc2de1af4af38",
".git/objects/f7/fe1ca597eb7e61ae762a3a6f954a50ab4d6833": "ad2df568a204ee6259623a9bc3f23ebe",
".git/objects/ff/060d0551799bc753b74b8d1897579e72d9f8cc": "297fb21b8bc5c287c728a22797e8ef03",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1b/2a5520f0c5bf25edbba639cda581b4036d9a28": "9d1f4d8afdf1bb1179a010196f99d596",
".git/objects/70/cb803fe353bdf2dca92ea6d017aa63bc6ebfc6": "37e12884b412e33b68387c300a971609",
".git/objects/70/81e5a9471c3344f32e7b842698d7ed0096c9ea": "2b3fef2f00f992609b73ac82ebfdf13b",
".git/objects/84/a6a76dcfbde68d91c5b32faa52f056573fe0a7": "843455ad440bcfedb90819859556f9f6",
".git/objects/4a/67ecb3189676a692ac6812ab1c74b209c07e57": "efea14aa58aaede4974b90e130023aec",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/ab6a0cf541afff554a09b12f7a0eb5d049c466": "96d82df05376b40f42e72279c59668b6",
".git/objects/15/f0100ef2c50a66a06d858af3f4352034836e2a": "0c30497d7c57f53eab8aab1914a52bec",
".git/objects/12/c384943ee7f58d794a1ebd6e2bab9d12884768": "059670d05653e52e6be2ac1b3ef3fd30",
".git/objects/12/3968f8ae3ed82f307e9a0408bf7f2edf23d2e3": "828b6ebbdd093ffb2d904930362117df",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/40/828f8aa88697a86a49e616865e6c418e8b7206": "f0270cc1a235e38b783808d1ca575f49",
".git/objects/8b/f9eef1380ade34f1e73ad87251dd4d6027cedd": "93bbeb2affc2bebf587219d8d3e33808",
".git/objects/7f/aa7ae89c230205f1558cb742c5a4754a6c328f": "f8562951660cc154bded33744fe6e0eb",
".git/objects/8e/f3c21560d011c2f0a2c2efe9ab693d7f00f902": "b669c9d0eb3d0a2314b4deb4fae7e6dd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1de32efb7a072ba2c0b7fc937f908015",
".git/logs/refs/heads/main": "d732979f08f178c69b5866e261ceff0a",
".git/logs/refs/remotes/origin/main": "e3bf54c0611be53d17ad529c1ae746ef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/main": "93bed6a195e8981692802b8c1856b836",
".git/refs/remotes/origin/main": "93bed6a195e8981692802b8c1856b836",
".git/index": "1d5e618edaba22452552dbe6e981f7e2",
".git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
".git/FETCH_HEAD": "a0207c5a67f96e2008f5909e60489d0c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "2730c77b1793b3c325ca6a7af4f14bbf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
