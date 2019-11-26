function read() {
    var scores = document.getElementById("Scores").value;
    sessionStorage.setItem("Score" , scores);
}

function display() {
    var Total = 0;
    var SpecialTotal = 0;

    var seminar = [];
    var language = [];
    var sport = [];
    var preliterature = [];
    var literature = [];
    var prescience = [];
    var science = [];
    var learn = [];
    var premajor = [];
    var major = [];
    var relatedmajor = [];
    var others = [];
    var scores = sessionStorage.getItem("Score");
    var result = scores.split(/\n/);
   
    for ( var i = 0; i < result.length; i++) {
        if ("【基礎セミナー 】 　 　 　 　" == result[i]) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    seminar.push(result[j]);
                }
            }
            
        }
        else if ("【言語文化 】 　 　 　 　" == result[i]) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    language.push(result[j]);
                }
            }

        }

        else if (("【健康・スポーツ科学（講義） 】 　 　 　 　" == result[i]) || ("【健康・スポーツ科学（演習） 】 　 　 　 　" == result[i])) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    sport.push(result[j]);
                }
            }

        } 　 　

        else if ("【文系基礎科目 】 　 　 　 　" == result[i]) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    preliterature.push(result[j]);
                }
            }

        }
        else if ("【文系教養科目 】 　 　 　 　" == result[i]) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    literature.push(result[j]);
                }
            }

        }
        else if ("【理系基礎科目 】 　 　 　 　" == result[i]) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    prescience.push(result[j]);
                }
            }

        }
        else if ("【理系教養科目 】 　 　 　 　" == result[i]) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    science.push(result[j]);
                }
            }

        }
        else if ("【全学教養科目 】 　 　 　 　" == result[i]) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    learn.push(result[j]);
                }
            }

        }
        else if ("【専門基礎科目 】 　 　 　 　" == result[i]) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    premajor.push(result[j]);
                }
            }

        }
        else if ("【専門科目 】 　 　 　 　" == result[i]) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    major.push(result[j]);
                }
            }

        }
        else if ("【関連専門科目 】 　 　 　 　" == result[i]) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    relatedmajor.push(result[j]);
                }
            }

        }
        else if ("【教職科目・随意科目 】 　 　 　 　" == result[i]) {
            for ( var j = i + 1; j < result.length; j++) {
                if (result[j].includes("【" ||  "】" )) {
                    break;
                }
                else {
                    others.push(result[j]);
                }
            }

        }
    }


    var seminar_score = 0;
    for (var s = 0; s < seminar.length; s++) {
        seminar_score += parseInt(seminar[s].split(' ')[2]);
    }
    var element = document.getElementById("Seminar");
    element.innerHTML = '基礎セミナー：　' + seminar_score;
    Total += seminar_score;


    var language_score = 0;
    for (var l = 0; l < language.length; l++) {
        language_score += parseInt(language[l].split(' ')[2]);
    }
    var element = document.getElementById("Language");
    element.innerHTML = "言語文化：　" + language_score;
    Total += language_score;

    var sport_score = 0;
    for (var sp = 0; sp < sport.length; l++) {
        sport_score += parseInt(sport[sp].split(' ')[2]);
    }
    var element = document.getElementById("Sport");
    element.innerHTML = "健康・スポーツ科学：　" + sport_score;
    Total += sport_score;

    var preliterature_score = 0;
    for (var pl = 0; pl < preliterature.length; pl++) {
        preliterature_score += parseInt(preliterature[pl].split(' ')[2]);
    }
    var element = document.getElementById("Preliterature");
    element.innerHTML = "文系基礎科目：　" + preliterature_score;
    Total += preliterature_score;

    var literature_score = 0;
    for (var L = 0; L < literature.length; L++) {
        literature_score += parseInt(literature[L].split(' ')[2]);
    }
    var element = document.getElementById("Literature");
    element.innerHTML = "文系教養科目：　" + literature_score;
    Total += literature_score;


    var prescience_score = 0;
    for (var ps = 0; ps < prescience.length; ps++) {
        if (prescience[ps].split(' ').length == 7) {
            prescience_score += parseInt(prescience[ps].split(' ')[3]);
        }
        else {
            prescience_score += parseInt(prescience[ps].split(' ')[2]);
        }
    }
    var element = document.getElementById("Prescience");
    element.innerHTML = "理系基礎科目：　" + prescience_score;
    Total += prescience_score;

    var science_score = 0;
    for (var pS = 0; pS < science.length; pS++) {
        science_score += parseInt(science[pS].split(' ')[2]);
    }
    var element = document.getElementById("Science");
    element.innerHTML = "理系教養科目：　" + science_score;
    Total += science_score;

    var learn_score = 0;
    for (var ln = 0; ln < learn.length; ln++) {
        learn_score += parseInt(learn[ln].split(' ')[2]);
    }
    var element = document.getElementById("Learn");
    element.innerHTML = "全学教養科目：　" + learn_score;
    Total += learn_score;

    var element = document.getElementById("Total");
    element.innerHTML = "教養科目の合計取得単位：　" + Total;


    //専門基礎科目の計算
    var premajor_score = 0;
    const premajor_list = [];
    var premajor_missing = [];
    //scoreに合計取得単位、listに取得単位の科目名を格納
    for (var pm = 0; pm < premajor.length; pm++) {
        premajor_score += parseInt(premajor[pm].split(' ')[2]);
        premajor_list.push(premajor[pm].split(' ')[0]);
    }
    //専門基礎科目の合計取得単位を表示
    var element = document.getElementById("Premajor");
    element.innerHTML = "専門基礎科目：　" + premajor_score;
    //必修科目を取得しているか確認。取得していなかった場合は、missingに格納
    var list_one = ["［春２］インフォマティックス１","［春２］インフォマティックス２","［秋１］インフォマティックス３","［秋２］インフォマティックス４","［春１］情報の挑戦者・開拓者たち","［春１］情報セキュリティとリテラシー１","［春２］情報セキュリティとリテラシー２","［秋１］プログラミング１","［秋２］プログラミング２","［秋１］論理学１","［春１］データマイニング入門"];
    for (var one = 0; one < list_one.length; one++) {
        if (premajor_list.indexOf(list_one[one]) < 0) {
            premajor_missing.push(list_one[one]);
        }
    }
    //取得単位が最小単位数を満たすかを確認し、取得していない科目名を表示する
    var gone = document.getElementById("premajormissing");
    var new_premajormissing = premajor_missing.join("<br>");
    var g = 30 - premajor_score;
    if (30 > premajor_score && new_premajormissing != []) {
        gone.innerHTML = '<div class = "box">' +
        '<div id = "MissingName">専門基礎科目</div>' +
        '<div id = "PremajorClasses">' +
        new_premajormissing + '</div><br>' + '<div id = "PremajorGrade">専門基礎科目の最低取得単位(30単位)より<br>合計' +
        g + '単位足りません</div><br></div>'
    }
    else if (30 > premajor_score && new_premajormissing == []) {
        gone.innerHTML = '<div class = "box">' +
        '<div id = "MissingName">専門基礎科目</div>' +
        '<div id = "PremajorClasses">必修単位は取得済み</div><br>' +
        '<div id = "PremajorGrade">専門基礎科目の最低取得単位(30単位)より<br>合計' +　g + '単位足りません</div><br></div>'
    }

    else if (30 <= premajor_score && new_premajormissing != []) {
        gone.innerHTML = '<div class = "box">' +
        '<div id = "MissingName">専門基礎科目</div>' +
        '<div id = "PremajorClasses">' +
        new_premajormissing + '</div><br></div>'
    }

    //取得単位が最大の34単位を超えていた場合、計算単位を修正する
    if (premajor_score <= 34) {
        SpecialTotal += premajor_score;
    }
    else {
        SpecialTotal += 34;
    }


    //専門科目の計算
    var major_score = 0;
    const major_list = [];
    const major_missing = [];
    //scoreに合計取得単位、listに取得単位の科目名を格納
    for (var m = 0; m < major.length; m++) {
        major_score += parseInt(major[m].split(' ')[2]);
        major_list.push(major[m].split(' ')[0]);
    }
    //専門科目の合計取得単位を表示
    var element = document.getElementById("Major");
    element.innerHTML = "専門科目：　" + major_score;
    //必修科目を取得しているか確認。取得していなかった場合は、missingに格納
    var list_two = ["［春１］情報倫理と法","［春２］社会情報学序論１","［春２］社会情報学序論２"];
    for (var j = 0; j < list_two.length; j++) {
        if (major_list.indexOf(list_two[j]) < 0) {
            major_missing.push(list_two[j]);
        }
    }
    //取得単位が最小単位数を満たすかを確認し、取得していない科目名を表示する
    var gone = document.getElementById("majormissing");
    var new_missing = major_missing.join("<br>");
    var g = 40 - major_score;
    if (40 > major_score && new_missing != []) {
        gone.innerHTML = '<div class = "box">' +
        '<div id = "MissingName">専門科目</div>' +
        '<div id = "MajorClasses">' +
        new_missing + '</div><br>' + '<div id = "Grade">専門科目の最低取得単位(40単位)より<br>合計' +
        g + '単位足りません</div></div>'
    }
    else if (40 > major_score && new_missing == []) {
        gone.innerHTML = '<div class = "box">' +
        '<div id = "MissingName">専門科目</div>' +
        '<div id = "MajorClasses">必修単位は取得済み</div><br>' +
        '<div id = "MajorGrade">専門科目の最低取得単位(40単位)より<br>合計' +　g + '単位足りません</div></div>'
    }

    else if (40 <= major_score && new_missing != []) {
        gone.innerHTML = '<div class = "box">' +
        '<div id = "MissingName">専門科目</div>' +
        '<div id = "MajorClasses">' +
        new_missing + '</div></div>'
    }
    //取得単位が最大の34単位を超えていた場合、計算単位を修正する
    if (major_score <= 50) {
        SpecialTotal += major_score;
    }
    else {
        SpecialTotal += 50;
    }

    
    var relatedmajor_score = 0;
    for (var rm = 0; rm < relatedmajor.length; rm++) {
        relatedmajor_score += parseInt(relatedmajor[rm].split(' ')[2]);
    }
    var element = document.getElementById("Relatedmajor");
    element.innerHTML = "関連専門科目：　" + relatedmajor_score;
    SpecialTotal += relatedmajor_score;

    var others_score = 0;
    for (var o = 0; o < others.length; o++) {
        others_score += parseInt(others[o].split(' ')[2]);
    }
    var element = document.getElementById("Others");
    element.innerHTML = "その他：　" + others_score;
    SpecialTotal += others_score;

    var element = document.getElementById("SpecialTotal");
    element.innerHTML = "専門系科目の合計取得単位：　" + SpecialTotal;


}

