let country_datalist = document.querySelector('#countries');
let country_input = document.querySelector('#country');
let city_input = document.querySelector('#city_input');
let city_datalist = document.querySelector('#cities');
let daily_price = document.querySelector('#daily');
let night_price = document.querySelector('#overnight');
let gen_daily = document.querySelector('#daily_g');
let gen_night = document.querySelector('#overnight_g');
let currency = document.querySelectorAll('.currency');
let quantity = document.querySelector('#q');


country_input.onclick = function(){
    country_input.value = '';
    city_input.value = '';
    city_datalist.innerHTML = '';
    daily_price.innerHTML = '0';
    night_price.innerHTML = '0';
    gen_daily.innerHTML = '0';
    gen_night.innerHTML = '0';
    quantity.innerHTML = '0';
   
}
city_input.onclick = function(){
    city_input.value = '';
}

daily_price.innerHTML = '0';
night_price.innerHTML = '0';
gen_daily.innerHTML = '0';
gen_night.innerHTML = '0';
quantity.innerHTML = '0';


country_input.style.color = '#022DD8';
country_input.style.fontSize = '17px';
city_input.style.color = '#022DD8';
city_input.style.fontSize = '17px'


function setInputDateDay(_id){
    var _dat = document.querySelector(_id);
    var hoy = new Date(),
        d = hoy.getDate(),
        m = hoy.getMonth()+1, 
        y = hoy.getFullYear(),
        data;

    if(d < 10){
        d = "0"+d;
    };
    if(m < 10){
        m = "0"+m;
    };

    data = y+"-"+m+"-"+d;
    console.log(data);
    _dat.value = data;
};

function setInputDateNight(_id){
    var _dat = document.querySelector(_id);
    var hoy = new Date(),
        d = hoy.getDate()+1,
        m = hoy.getMonth()+1, 
        y = hoy.getFullYear(),
        data;

    if(d < 10){
        d = "0"+d;
    };
    if(m < 10){
        m = "0"+m;
    };

    data = y+"-"+m+"-"+d;
    console.log(data);
    _dat.value = data;
};

setInputDateDay("#start");
setInputDateNight("#end");



let countries = {
    alb: '??????????????',
    alg: '??????????',
    usa: '??????',
    amSam: '?????????????????? ??????????',
    angel: '??????????????',
    angol: '????????????',
    antig: '????????????????',
    austral: '??????????????????',
    aus: '??????????????',
    ame: '???????????????? ?????????????? ????????????????????????????',
    arg: '??????????????????',
    arub: '????????????',
    afg: '??????????????????',
    bang: '??????????????????',
    barb: '????????????????',
    bah: '???????????????? ??????????????',
    bahr: '??????????????',
    belg: '????????????',
    beliz: '??????????',
    ben: '??????????',
    berm: '???????????????????? ??????????????',
    brVirg: '???????????????????? ?????????????????? ??????????????',
    bol: '??????????????',
    bosn: '???????????? ?? ??????????????????????',
    bots: '????????????????',
    braz: '????????????????',
    brun: '??????????????',
    but: '????????????',
    bulg: '??????????????????',
    bfaso: '???????????????? ????????',
    bur: '??????????????????',
    gab: '??????????',
    gamb: '????????????',
    gay: '????????????',
    gan: '????????',
    germ: '????????????????',
    gua: '??????????????????',
    gui: '????????????',
    guib: '????????????-????????????',
    gren: '??????????????',
    guam: '??????????',
    den: '??????????',
    dom: '????????????????',
    domR: '???????????????????? ??????????????????????????????',
    egy: '??????????????',
    eto: '??????????????',
    emen: '????????',
    zamb: '????????????',
    zimb: '????????????????',
    ecua: '??????????????',
    est: '??????????????',
    erit: '??????????????',
    thai: '??????????????',
    tq: '?????????? ?? ????????????',
    tim: '?????????? ?? ????????????',
    tun: '????????????',
    tur: '??????????????',
    ind: '??????????????????',
    irl: '????????????????',
    ice: '????????????????',
    isp: '??????????????',
    isr: '??????????????',
    ita: '????????????',
    irn: '????????',
    irq: '????????',
    lao: '????????',
    lat: '????????????',
    leh: '????????????????',
    les: '????????????',
    liba: '??????????????',
    libe: '??????????????',
    lib: '??????????',
    lich: '??????????????????????',
    lit: '??????????',
    lux: '??????????????????????????',
    cro: '????????????????',
    cabV: '????????-???????????? ??????????????????????????????',
    cam: '????????????????',
    camb: '??????????????',
    can: '????????????',
    cana: '???????????????? ??????????????',
    kat: '??????????',
    cAfr: '?????????????????????? ???????????????? ??????????????????????????????',
    cyp: '????????????',
    kir: '????????????????',
    col: '??????????????????',
    kom: '???????????????? ??????????????',
    coym: '?????????????????? ??????????????',
    kong: '??????????',
    zair: '?????????????? ???????????????????????? ?????????????????????????????? (????????)',
    cost: '?????????? ????????',
    kotD: "?????? ??'?????????????? ??????????????????????????????",
    kor: '?????????????? ????????????????-???????????????????????? ??????????????????????????????',
    cub: '??????????',
    kuk: '?????????? ??????????????',
    hay: '??????????',
    guiS: '?????????????????????????? ????????????',
    korS: '?????????????????? ??????????',
    sudS: '?????????????????? ????????????',
    afrS: '?????????????????????????? ??????????????????????????????',
    sudN: '?????????????????????? ????????????',
    indi: '??????????????????',
    hond: '??????????????????',
    hong: '??????????????',
    hord: '????????????????',
    hordAp: '?????????????????? ???????????????? ????',
    gre: '??????????????????',
    hung: '??????????????????',
    jap: '??????????????',
    mad: '????????????????????',
    malav: '????????????',
    malaz: '??????????????',
    mald: '?????????????????? ??????????????????????????????',
    malt: '??????????',
    mali: '????????',
    maka: '??????????',
    mavrik: '??????????????',
    mavrit: '????????????????????',
    marsh: '?????????????????? ??????????????',
    maroc: '??????????????',
    maced: '??????????????????',
    britan: '?????? ????????????????',
    mex: '??????????????',
    micrns: '????????????????????',
    myanm: '????????????',
    mozam: '????????????????',
    monac: '????????????',
    mong: '????????????????',
    monser: '????????????????',
    monten: '????????????????????',
    namib: '??????????????',
    nauru: '??????????????',
    nep: '??????????',
    nig: '??????????',
    nige: '??????????????',
    ned: '????????????????????????',
    nedA: '???????????????????????? ????????????????',
    nic: '????????????????????',
    niu: '??????????',
    newZ: '?????? ????????????????',
    norw: '????????????????',
    swed: '????????????',
    switz: '??????????????????',
    sri: '?????? ??????????',
    chad: '??????',
    czech: '??????????',
    chil: '????????',
    chin: '????????????????',
    pala: '????????????',
    pak: '????????????????',
    pan: '????????????',
    pap: '???????????? ?????? ????????????',
    par: '????????????????',
    per: '??????????',
    por: '??????????????????????',
    puer: '?????????????? ????????',
    jam: '??????????????',
    jib: '??????????????',
    ruan: '??????????????',
    rom: '????????????????',
    salv: '????????????????',
    samo: '??????????',
    sanT: '?????? ???????? ?? ????????????????',
    saud: '???????????????? ????????????',
    seysh: '?????????????????? ??????????????',
    sen: '??????????????',
    saintL: '???????? ??????????????',
    saintV: '???????? ?????????????? ????????????????',
    saintQ: '???????? ???????? ?? ??????????',
    serb: '????????????',
    sier: '?????????? ????????',
    sing: '??????????????????',
    sir: '?????????????? ???????????????? ??????????????????????????????',
    slovk: '????????????????',
    slovn: '????????????????',
    som: '????????????',
    sol: '???????????????????? ??????????????',
    svaz: '??????????????????',
    sur: '????????????????',
    oman: '?????????? ????????????????????????????',
    van: '??????????????????',
    ven: '????????????????????',
    viet: '??????????????',
    virg: '?????????????????? ??????????????',
    tanz: '????????????????',
    tog: '????????',
    tok: '????????????????',
    tong: '??????????',
    trin: '???????????????? ?? ????????????',
    tuv: '????????????????',
    ugand: '??????????????',
    urug: '??????????????????',
    keni: '??????????',
    kuw: '??????????????',
    fil: '????????????????????',
    finl: '??????????????????',
    fij: '????????',
    franc: '??????????????',
    azer: '????????????????',
    belor: '????????????????',
    turkm: '????????????????????????',
    kaz: '??????????????????',
    kirg: '????????????????',
    mold: '??????????????',
    rus: '???????????????????? ??????????????????????',
    vra: '??????????????',
    taj: '??????????????????',
    uzb: '????????????????????',
    ukr: '????????????????',
}

let cities = {
    alb: ['????????????', '?????? ????????????'],
    alg: ['??????????', '?????? ????????????'],
    usa: ['??????????????????', '???????? ???????? (???????????? 30 ????)', '???????? ???????? (???????????? 30 ????)', '?????? ??????????????', '?????? ????????????'],
    amSam: ['????????????'],
    angel: ['?????????????? (15.12-14.04)', '?????????????? (15.04-14.12)'],
    angol: ['??????????????', '?????? ????????????'],
    antig: ['????????????'],
    austral: ['??????????????, ????????????????, ????????????', '?????? ????????????'],
    aus: ['????????????'],
    ame: ['???????? ????????', '?????? ????????????'],
    arg: ['?????????????? ??????????', '?????? ????????????'],
    arub: ['???????????? (15.04-15.12)', '???????????? (16.12-14.04)'],
    afg: ['????????????', '?????? ????????????'],
    bang: ['????????', '?????? ????????????'],
    barb: ['???????????????? (16.04-15.12)', '???????????????? (16.12-15.04)'],
    bah: ['???????????????? ?????????????? (21.04-19.12)', '???????????????? ?????????????? (20.12-20.04)'],
    bahr: ['????????????'],
    belg: ['????????????'],
    beliz: ['??????????', '?????? ????????????'],
    ben: ['??????????-????????', '?????? ????????????'],
    berm: ['???????????????????? ?????????????? (01.12-14.12)', '???????????????????? ?????????????? (15.03-30.11)'],
    brVirg: ['???????????????????? ?????????????????? ?????????????? (15.12-15.04)', '???????????????????? ?????????????????? ?????????????? (16.04-14.12)'],
    bol: ['???? ??????', '?????? ????????????'],
    bosn: ['????????????????', '?????? ????????????'],
    bots: ['????????????????', '?????? ????????????'],
    braz: ['????????????????', '?????? ????????????'],
    brun: ['????????????-????????-??????????????'],
    but: ['????????????????', '?????? ????????????'],
    bulg: ['??????????', '?????? ????????????'],
    bfaso: ['??????????????????????', '?????? ????????????'],
    bur: ['????????????????????????', '?????? ????????????'],
    gab: ['????????????????', '?????? ????????????'],
    gamb: ['??????????????', '?????? ????????????'],
    gay: ['??????????????????', '?????? ????????????'],
    gan: ['????????', '?????? ????????????'],
    germ: ['????????????', '?????? ????????????'],
    gua: ['??????????????????', '?????? ????????????'],
    gui: ['??????????????', '?????? ????????????'],
    guib: ['????????????', '?????? ????????????'],
    gren: ['?????????????? (15.12-15.04)', '?????????????? (16.04-14.12)'],
    guam: ['????????????'],
    den: ['????????????'],
    dom: ['????????????'],
    domR: ['??????????-??????????????', '?????? ????????????'],
    egy: ['????????????', '?????? ????????????'],
    eto: ['????????-??????????', '?????? ????????????'],
    emen: ['????????', '?????? ????????????'],
    zamb: ['??????????????', '?????? ????????????'],
    zimb: ['????????????', '?????? ????????????'],
    ecua: ['????????', '?????? ????????????'],
    est: ['????????????', '?????? ????????????'],
    erit: ['????????????', '?????? ????????????'],
    thai: ['??????????????', '?????? ????????????'],
    tq: ['????????????'],
    tim: ['????????', '?????? ????????????'],
    tun: ['????????????', '?????? ????????????'],
    tur: ['????????????', '????????????????', '?????? ????????????'],
    ind: ['??????????????', '?????? ????????????'],
    irl: ['????????????'],
    ice: ['???????????????? (????????.- ??????????)', '???????????????? (??????????-????????.)'],
    isp: ['????????????', '?????? ????????????'],
    isr: ['?????? ????????', '??????????????????', '?????? ????????????'],
    ita: ['????????', '?????? ????????????'],
    irn: ['????????????', '?????? ????????????'],
    irq: ['????????????', '?????? ????????????'],
    lao: ['????????????????', '?????? ????????????'],
    lat: ['????????', '?????? ????????????'],
    leh: ['??????????????', '?????? ????????????'],
    les: ['??????????????', '?????? ????????????'],
    liba: ['?????????????? (01.01-14.07)', '?????????????? (15.07-31.12)', '?????? ????????????'],
    libe: ['????????????????', '?????? ????????????'],
    lib: ['??????????????', '?????? ????????????'],
    lich: ['????????????'],
    lit: ['????????????????', '?????? ????????????'],
    lux: ['????????????'],
    cro: ['????????????', '?????? ????????????'],
    cabV: ['??????????', '?????? ????????????'],
    cam: ['??????????????', '?????? ????????????'],
    camb:['??????????????', '?????? ????????????'],
    can: ['????????????', '?????? ????????????'],
    cana: ['????????????'],
    kat: ['????????????'],
    cAfr: ['??????????', '?????? ????????????'],
    cyp: ['??????????????', '?????? ????????????'],
    kir: ['?????????????? ????????', '?????? ????????????'],
    col: ['????????????', '?????? ????????????'],
    kom: ['????????????', '?????? ????????????'],
    coym: ['?????????????????? ?????????????? (01.12-30.04)', '?????????????????? ?????????????? (01.05-30.11)'],
    kong: ['????????????????', '?????? ????????????'],
    zair: ['??????????????', '?????? ????????????'],
    cost: ['?????? ????????', '?????? ????????????'],
    kotD: ['??????????????????????', '?????? ????????????'],
    kor: ['??????????????', '?????? ????????????'],
    cub: ['????????????', '?????? ????????????'],
    kuk: ['??????????????????', '?????? ????????????'],
    hay: ['????????-??-??????????', '?????? ????????????'],
    guiS: ['????????????', '?????? ????????????'],
    korS: ['??????????', '?????? ????????????'],
    sudS: ['??????????????', '?????? ????????????'],
    afrS: ['????????????????', '?????? ????????????'],
    sudN: ['??????????', '?????? ????????????'],
    indi: ['???????? (??????????-??????????????)', '???????? (??????????????????-????????)', '?????? ????????????'],
    hond: ['????????????????????????', '?????? ????????????'],
    hong: ['????????????'],
    hord: ['????????', '?????? ????????????'],
    hordAp: ['????????????', '???????????? ????????????', '?????? ????????????'],
    gre: ['??????????', '?????? ????????????'],
    hung: ['????????????'],
    jap: ['??????????', '?????? ????????????'],
    mad: ['??????????????????????????', '?????? ????????????'],
    malav: ['????????????????', '?????? ????????????'],
    malaz: ['????????????-????????????????', '?????? ????????????'],
    mald: ['????????', '?????? ???????????? (??????????-????????????)', '?????? ???????????? (??????????????-??????????)'],
    malt: ['????????????'],
    mali: ['????????????', '?????? ????????????'],
    maka: ['????????????'],
    mavrik: ['???????? ????????', '?????? ????????????'],
    mavrit: ['????????????????', '?????? ????????????'],
    marsh: ['??????????????', '?????? ????????????'],
    maroc: ['??????????', '?????? ????????????'],
    maced: ['????????????', '?????? ????????????'],
    britan: ['????????????', '?????? ????????????'],
    mex: ['????????????', '?????? ????????????'],
    micrns: ['????????????', '????????????', '??????????', '??????', '?????? ????????????'],
    myanm: ['????????????', '?????? ????????????'],
    mozam: ['????????????????', '?????? ????????????'],
    monac: ['????????????'],
    mong: ['?????????? ??????????', '?????? ????????????'],
    monser: ['????????????'],
    monten: ['??????????????????', '?????? ????????????'],
    namib: ['????????????????', '?????? ????????????'],
    nauru: ['????????????'],
    nep: ['??????????????????', '?????? ????????????'],
    nig: ['????????????', '?????? ????????????'],
    nige: ['????????????', '?????? ????????????'],
    ned: ['????????????'],
    nedA: ['???????????????? (15.04-15.12)', '???????????????? (16.12-14.04)'],
    nic: ['????????????????', '?????? ????????????'],
    niu: ['????????????'],
    newZ: ['??????????????????', '?????? ????????????'],
    norw: ['????????????'],
    swed: ['????????????????', '?????? ????????????'],
    switz: ['????????????'],
    sri: ['??????????????', '?????? ????????????'],
    chad: ['??????????????', '?????? ????????????'],
    czech: ['??????????', '?????? ????????????'],
    chil: ['????????????????', '?????? ????????????'],
    chin: ['??????????', '?????? ????????????'],
    pala: ['????????????'],
    pak: ['??????????????????', '?????? ????????????'],
    pan: ['????????????', '?????? ????????????'],
    pap: ['???????? ????????????', '?????? ????????????'],
    par: ['??????????????????', '?????? ????????????'],
    per: ['????????', '?????? ????????????'],
    por: ['????????????'],
    puer: ['?????????????? ???????? (20.12-30.04)', '?????????????? ???????? (01.05-19.12)'],
    jam: ['????????????????', '?????? ???????????? (16.04-14.12)', '?????? ???????????? (15.12-15.04)'],
    jib: ['??????????????', '?????? ????????????'],
    ruan: ['????????????', '?????? ????????????'],
    rom: ['??????????????????','?????? ????????????'],
    salv: ['?????? ????????????????', '?????? ????????????'],
    samo: ['????????','?????? ????????????'],
    sanT: ['?????? ????????', '?????? ????????????'],
    saud: ['????-????????', '?????? ????????????'],
    seysh: ['????????????'],
    sen: ['??????????', '?????? ????????????'],
    saintL: ['???????? ?????????????? (15.04-14.12)', '???????? ?????????????? (15.12-14.04)'],
    saintV: ['???????? ??????????????-???????????????? (15.04-14.12)', '???????? ??????????????-???????????????? (15.12-14.04)'],
    saintQ: ['???????? ???????? ?? ?????????? (15.04-14.12)', '???????? ???????? ?? ?????????? (15.12-14.04)'],
    serb: ['??????????????', '?????? ????????????'],
    sier: ['????????????????', '?????? ????????????'],
    sing: ['????????????'],
    sir: ['????????????????', '?????? ????????????'],
    slovk: ['????????????????????', '?????? ????????????'],
    slovn: ['????????????????????', '?????? ????????????'],
    som: ['????????????????', '?????? ????????????'],
    sol: ['??????????????', '?????? ????????????'],
    svaz: ['??????????????', '?????? ????????????'],
    sur: ['????????????????????', '?????? ????????????'],
    oman: ['??????????????', '?????? ????????????'],
    van: ['???????? ????????', '?????? ????????????'],
    ven: ['??????????????', '?????? ????????????'],
    viet: ['??????????', '?????? ????????????'],
    virg: ['?????????????????? ?????????????? (01.05-14.12)', '?????????????????? ?????????????? (15.12-30.04)'],
    tanz: ['??????-????-??????????', '?????? ????????????'],
    tog: ['????????', '?????? ????????????'],
    tok: ['????????????'],
    tong: ['??????????????????????', '?????? ????????????'],
    trin: ['???????????? (15.04-15.12)', '???????????? (16.12-14.04)', '???????????????? ????????????'],
    tuv: ['????????????????????', '?????? ????????????'],
    ugand: ['??????????????', '?????? ????????????'],
    urug: ['????????????????????', '?????? ????????????'],
    keni: ['??????????????', '?????? ????????????'],
    kuw: ['????????????'],
    fil: ['????????????', '?????? ????????????'],
    finl: ['????????????????', '?????? ????????????'],
    fij: ['??????????', '?????? ????????????'],
    franc: ['??????????', '?????? ????????????'],
    azer: ['??????????', '?????? ????????????'],
    belor: ['??????????', '?????? ????????????'],
    turkm: ['??????????????', '?????? ????????????'],
    kaz: ['??????????????????????', '?????? ????????????'],
    kirg: ['????????????', '?????? ????????????'],
    mold: ['??????????', '?????? ????????????'],
    rus: ['????????????', '?????????? ????????????????????', '???????? (01.06-15.10)', '???????? (16.10-31.05)', '???????? ????????????', '?????? ????????????'],
    vra: ['??????????????', '?????? ????????????'],
    taj: ['????????????????', '?????? ????????????'],
    uzb: ['??????????????', '?????? ????????????'],
    ukr: ['??????', '?????? ????????????'],
}

let daily = {
    alb: [55, 39],
    alg: [171, 68],
    usa: [145, 129, 109, 94, 81],
    amSam: [46],
    angel: [146, 142],
    angol: [144, 53],
    antig: [100],
    austral: [160, 171],
    aus: [112],
    ame: [172, 123],
    arg: [181, 111],
    arub: [127, 142],
    afg: [48, 30],
    bang: [44, 20],
    barb: [131, 140],
    bah: [153, 159],
    bahr: [96],
    belg: [117],
    beliz: [108, 77],
    ben: [38, 35],
    berm: [129, 143],
    brVirg: [131, 124],
    bol: [60, 42],
    bosn: [95, 50],
    bots: [89, 67],
    braz: [90, 62],
    brun: [72],
    but: [49, 36],
    bulg: [89, 46],
    bfaso: [98, 50],
    bur: [93, 30],
    gab: [142, 49],
    gamb: [84, 17],
    gay: [82, 35],
    gan: [73, 46],
    germ: [116, 82],
    gua: [98, 79],
    gui: [152, 41],
    guib: [109, 58],
    gren: [126, 120],
    guam: [104],
    den: [163],
    dom: [114],
    domR: [79, 28],
    egy: [107, 15],
    eto: [59, 25],
    emen: [62, 50],
    zamb: [82, 37],
    zimb: [70, 52],
    ecua: [97, 39],
    est: [89, 62],
    erit: [74, 47],
    thai: [115, 31],
    tq: [128],
    tim: [48, 18],
    tun: [86, 79],
    tur: [90, 116, 71],
    ind: [67, 44],
    irl: [90],
    ice: [114, 128],
    isp: [98, 71],
    isr: [130, 107, 101],
    ita: [136, 62],
    irn: [77, 52],
    irq: [115, 87],
    lao: [54, 23],
    lat: [90, 75],
    leh: [126, 91],
    les: [45, 45],
    liba: [104, 125, 68],
    libe: [93, 31],
    lib: [67, 61],
    lich: [54],
    lit: [108, 60],
    lux: [96],
    cro: [94, 71],
    cabV: [150, 97],
    cam: [119, 80],
    camb:[55, 25],
    can: [155, 104],
    cana: [63],
    kat: [171],
    cAfr: [77, 25],
    cyp: [88, 64],
    kir: [131, 54],
    col: [73, 34],
    kom: [87, 59],
    coym: [113, 101],
    kong: [151, 83],
    zair: [119, 55],
    cost: [92, 60],
    kotD: [121, 54],
    kor: [102, 39],
    cub: [70, 40],
    kuk: [58, 10],
    hay: [107, 33],
    guiS: [107, 61],
    korS: [195, 87],
    sudS: [72, 41],
    afrS: [96, 74],
    sudN: [54, 41],
    indi: [51, 57, 51],
    hond: [79, 44],
    hong: [153],
    hord: [89, 89],
    hordAp: [74, 92, 63],
    gre: [98, 56],
    hung: [114],
    jap: [166, 101],
    mad: [87, 22],
    malav: [73, 54],
    malaz: [105, 66],
    mald: [90, 104, 133],
    malt: [103],
    mali: [135, 81],
    maka: [91],
    mavrik: [106, 17],
    mavrit: [73, 40],
    marsh: [69, 76],
    maroc: [110, 66],
    maced: [65, 47],
    britan: [145, 90],
    mex: [124, 63],
    micrns: [74, 76, 72, 83, 4],
    myanm: [43, 27],
    mozam: [108, 39],
    monac: [110],
    mong: [52, 28],
    monser: [99],
    monten: [57, 36],
    namib: [61, 39],
    nauru: [88],
    nep: [56, 16],
    nig: [66, 58],
    nige: [87, 38],
    ned: [125],
    nedA: [102, 110],
    nic: [73, 43],
    niu: [68],
    newZ: [138, 93],
    norw: [193],
    swed: [196, 158],
    switz: [210],
    sri: [75, 37],
    chad: [134, 50],
    czech: [81, 26],
    chil: [107, 81],
    chin: [119, 58],
    pala: [96],
    pak: [67, 40],
    pan: [89, 42],
    pap: [128, 56],
    par: [82, 44],
    per: [96, 64],
    por: [102],
    puer: [116, 106],
    jam: [94, 30, 37],
    jib: [72, 47],
    ruan: [58, 27],
    rom: [102, 57],
    salv: [93, 48],
    samo: [90, 89],
    sanT: [58, 61],
    saud: [166, 85],
    seysh: [123],
    sen: [107, 52],
    saintL: [115, 119],
    saintV: [121, 124],
    saintQ: [103, 110],
    serb: [114, 52],
    sier: [75, 26],
    sing: [188],
    sir: [97, 83],
    slovk: [86, 78],
    slovn: [66, 60],
    som: [23, 23],
    sol: [151, 39],
    svaz: [73, 57],
    sur: [78, 43],
    oman: [102, 79],
    van: [90, 51],
    ven: [141, 70],
    viet: [62, 33],
    virg: [120, 123],
    tanz: [69, 32],
    tog: [76, 48],
    tok: [36],
    tong: [96, 69],
    trin: [138, 145, 120],
    tuv: [49, 77],
    ugand: [51, 31],
    urug: [105, 54],
    keni: [108, 13],
    kuw: [119],
    fil: [82, 25],
    finl: [82, 87],
    fij: [55, 48],
    franc: [130, 101],
    azer: [95, 39],
    belor: [89, 61],
    turkm: [64, 40],
    kaz: [131, 59],
    kirg: [61, 27],
    mold: [76, 73],
    rus: [171, 77, 110, 97, 62, 51],
    vra: [87, 55],
    taj: [65, 25],
    uzb: [71, 24],
    ukr: [110, 59],
}

let night = {
    alb: [111, 43],
    alg: [280, 79],
    usa: [218, 249, 212, 191, 181],
    amSam: [85],
    angel: [239, 195],
    angol: [307, 62],
    antig: [137],
    austral: [204, 177],
    aus: [104],
    ame: [281, 229],
    arg: [189, 62],
    arub: [215, 330],
    afg: [136, 57],
    bang: [99, 33],
    barb: [189, 220],
    bah: [203, 248],
    bahr: [223],
    belg: [192],
    beliz: [137, 99],
    ben: [44, 25],
    berm: [330, 367],
    brVirg: [234, 202],
    bol: [103, 48],
    bosn: [95, 55],
    bots: [199, 78],
    braz: [167, 93],
    brun: [167],
    but: [86, 47],
    bulg: [158, 51],
    bfaso: [131, 47],
    bur: [139, 12],
    gab: [148, 66],
    gamb: [117, 17],
    gay: [123, 41],
    gan: [156, 74],
    germ: [160, 113],
    gua: [98, 76],
    gui: [129, 37],
    guib: [164, 74],
    gren: [174, 124],
    guam: [211],
    den: [207],
    dom: [145],
    domR: [147, 32],
    egy: [148, 100],
    eto: [101, 35],
    emen: [89, 33],
    zamb: [166, 66],
    zimb: [105, 72],
    ecua: [101, 52],
    est: [92, 60],
    erit: [41, 26],
    thai: [134, 34],
    tq: [201],
    tim: [96, 29],
    tun: [115, 93],
    tur: [110, 168, 80],
    ind: [97, 48],
    irl: [134],
    ice: [90, 191],
    isp: [125, 84],
    isr: [276, 167, 166],
    ita: [167, 70],
    irn: [149, 82],
    irq: [243, 203],
    lao: [89, 19],
    lat: [152, 108],
    leh: [161, 170],
    les: [76, 46],
    liba: [177, 320, 77],
    libe: [139, 27],
    lib: [143, 100],
    lich: [45],
    lit: [132, 101],
    lux: [179],
    cro: [129, 107],
    cabV: [128, 65],
    cam: [119, 45],
    camb:[69, 34],
    can: [189, 138],
    cana: [91],
    kat: [227],
    cAfr: [87, 13],
    cyp: [116, 84],
    kir: [174, 121],
    col: [179, 75],
    kom: [136, 62],
    coym: [275, 235],
    kong: [163, 62],
    zair: [157, 58],
    cost: [138, 66],
    kotD: [143, 45],
    kor: [106, 72],
    cub: [119, 46],
    kuk: [134, 66],
    hay: [137, 74],
    guiS: [238, 100],
    korS: [195, 87],
    sudS: [133, 32],
    afrS: [185, 126],
    sudN: [110, 32],
    indi: [120, 146, 126],
    hond: [109, 50],
    hong: [239],
    hord: [158, 157],
    hordAp: [120, 100, 68],
    gre: [146, 80],
    hung: [202],
    jap: [220, 129],
    mad: [130, 22],
    malav: [125, 74],
    malaz: [133, 98],
    mald: [167, 184, 284],
    malt: [120],
    mali: [94, 63],
    maka: [142],
    mavrik: [180, 113],
    mavrit: [109, 39],
    marsh: [133, 48],
    maroc: [165, 88],
    maced: [126, 63],
    britan: [281, 222],
    mex: [185, 83],
    micrns: [127, 96, 118, 214, 22],
    myanm: [60, 46],
    mozam: [137, 49],
    monac: [158],
    mong: [97, 32],
    monser: [142],
    monten: [105, 45],
    namib: [109, 49],
    nauru: [204],
    nep: [96, 25],
    nig: [108, 68],
    nige: [194, 57],
    ned: [140],
    nedA: [180, 235],
    nic: [110, 62],
    niu: [175],
    newZ: [127, 110],
    norw: [193],
    swed: [334, 257],
    switz: [257],
    sri: [133, 48],
    chad: [128, 64],
    czech: [150, 52],
    chil: [130, 112],
    chin: [123, 86],
    pala: [137],
    pak: [164, 50],
    pan: [139, 35],
    pap: [347, 71],
    par: [119, 75],
    per: [138, 57],
    por: [136],
    puer: [312, 259],
    jam: [160, 220, 248],
    jib: [84, 57],
    ruan: [143, 43],
    rom: [120, 70],
    salv: [119, 47],
    samo: [153, 199],
    sanT: [77, 58],
    saud: [250, 128],
    seysh: [201],
    sen: [190, 62],
    saintL: [166, 211],
    saintV: [112, 146],
    saintQ: [130, 146],
    serb: [151, 66],
    sier: [129, 30],
    sing: [295],
    sir: [189, 93],
    slovk: [115, 103],
    slovn: [139, 106],
    som: [155, 30],
    sol: [109, 45],
    svaz: [162, 92],
    sur: [197, 109],
    oman: [118, 59],
    van: [183, 53],
    ven: [212, 60],
    viet: [102, 46],
    virg: [204, 240],
    tanz: [124, 53],
    tog: [129, 33],
    tok: [80],
    tong: [235, 46],
    trin: [155, 200, 196],
    tuv: [127, 56],
    ugand: [147, 69],
    urug: [140, 81],
    keni: [192, 86],
    kuw: [252],
    fil: [133, 51],
    finl: [167, 115],
    fij: [76, 57],
    franc: [153, 114],
    azer: [125, 77],
    belor: [166, 71],
    turkm: [114, 60],
    kaz: [161, 106],
    kirg: [143, 30],
    mold: [130, 90],
    rus: [304, 164, 246, 152, 111, 94],
    vra: [94, 75],
    taj: [115, 21],
    uzb: [101, 34],
    ukr: [165, 76],
}


for (let a in countries) {
    let option = document.createElement('option');
    option.innerHTML = countries[a];
    country_datalist.append(option);
  }

country_input.addEventListener('change', getCity);
    
function getCity() {
    for(let y in countries){
        let val = countries[y];
        if(country_input.value == val) {
            for (let x in cities) {
                if(x==y){
                    for (let i = 0; i < cities[x].length; i++){
                        let city_opt = document.createElement('option');
                        city_opt.innerHTML = cities[x][i];
                        city_datalist.append(city_opt);
                    }  
                }
                
            }
            
        }
        if (country_input.value === '??????????????' || 
            country_input.value === '????????????' ||
            country_input.value === '????????????????' ||
            country_input.value === '??????????????' ||
            country_input.value === '????????????????' ||
            country_input.value === '??????????????' ||
            country_input.value === '????????????' ||
            country_input.value === '??????????????????????????' ||
            country_input.value === '???????????????? ??????????????' ||
            country_input.value === '????????????' ||
            country_input.value === '??????????????????' ||
            country_input.value === '??????????' ||
            country_input.value === '????????????' ||
            country_input.value === '????????????????????' ||
            country_input.value === '????????????????????????' ||
            country_input.value === '??????????????????????' ||
            country_input.value === '????????????????' ||
            country_input.value === '????????????????' ||
            country_input.value === '??????????????????' ||
            country_input.value === '??????????????'){
            for (let c = 0; c < currency.length; c++) {
                currency[c].innerHTML = 'EUR';
            } 
        } else {
            for (let c = 0; c < currency.length; c++) {
                currency[c].innerHTML = 'USD';
            } 
        }
        
    }
}

city_input.addEventListener('change', getDay);
city_input.addEventListener('change', getNight);

function getDay(){
    let countryKey = ''
    for(let key in countries){
        if(countries[key] === country_input.value){
            countryKey = key;
            break;
        }
    }
    let cityValue = city_input.value;
    let isFind = false
    let index = 0
    for(let key in cities){
        cities[key].forEach((item) => {
            if(item === cityValue && key === countryKey){
                isFind = true
                index = cities[key].indexOf(item)
            }
        })
        if(isFind){
            daily_price.innerHTML = daily[countryKey][index];
            return
        }
    }
}

function getNight() {
    let countryKey = ''
    for(let key in countries){
        if(countries[key] === country_input.value){
            countryKey = key;
            break;
        }
    }
    let cityValue = city_input.value;
    let isFind = false
    let index = 0
    for(let key in cities){
        cities[key].forEach((item) => {
            if(item === cityValue && key === countryKey){
                isFind = true
                index = cities[key].indexOf(item)
            }
        })
        if(isFind){
            night_price.innerHTML = night[countryKey][index];
            return
        }
    }
}


let inpStart = document.querySelector('#start');
let inpEnd = document.querySelector('#end');

let start = new Date(inpStart.value).getTime();
let end = new Date(inpEnd.value).getTime();

function startDateInputListener({ target: { value } }) {
    start =  new Date(value).getTime();
    getNumberOfDays()
};

function endDateInputListener({ target: { value } }) {
    end =  new Date(value).getTime();
    getNumberOfDays()
};

inpStart.addEventListener('change', startDateInputListener)
inpEnd.addEventListener('change', endDateInputListener)

function getNumberOfDays() {
    const oneDay = 1000*60*60*24;
    const diffInTime = end - start;
    const diffInDays = Math.round(diffInTime/oneDay)+1;
    
    if (diffInTime < 0) {
        alert('???????????? ???????????????? ???? ?????????? ???????????????? ???????????????? ?????????? ?????? ??????????')
        return;
    }
    console.log(diffInDays);
    quantity.innerHTML = diffInDays;
    gen_daily.innerHTML = diffInDays * daily_price.innerHTML;
    gen_night.innerHTML = diffInDays * night_price.innerHTML;
    if (inpStart.value === '' || inpEnd.value === ''){
        gen_daily.innerHTML = '0';
        gen_night.innerHTML = '0';
    }
    return diffInDays;
}

 city_input.addEventListener('keyup', function(){
    if (country_input.value == '' && city_input.value.length>0) {
        alert('???????????? ????????????');
    }
 })
 

















   





