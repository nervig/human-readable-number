module.exports = function toReadable (number) {
    let text_number = '';
    if (number > 9 && number < 20){
        switch (number){
            case 10:
                text_number = 'ten';
                break;
            case 11:
                text_number = 'eleven';
                break;
            case 12:
                text_number = 'twelve';
                break;
            case 13:
                text_number = 'thirteen';
                break;
            case 14:
                text_number = 'fourteen';
                break;
            case 15:
                text_number = 'fifteen';
                break;
            case 16:
                text_number = 'sixteen';
                break;
            case 17:
                text_number = 'seventeen';
                break;
            case 18:
                text_number = 'eighteen';
                break;
            case 19:
                text_number = 'nineteen';
                break;
        }
    }
    let one = 'one'
    let two = 'two'
    let three = 'three'
    let four = 'four'
    let five = 'five'
    let six = 'six'
    let seven = 'seven'
    let eight = 'eight'
    let nine = 'nine'
    let ten = 'ten'
    let eleven = 'eleven'
    let twelve = 'twelve'
    let thirteen = 'thirteen'
    let fourteen = 'fourteen'
    let fifteen = 'fifteen'
    let sixteen = 'sixteen'
    let seventeen = 'seventeen'
    let eighteen = 'eighteen'
    let nineteen = 'nineteen'
    let twenty ='twenty'
    let thirty = 'thirty'
    let forty = 'forty'
    let fifty = 'fifty'
    let sixty= 'sixty'
    let seventy = 'seventy'
    let eighty = 'eighty'
    let ninety = 'ninety'
    let hundred = 'hundred '
    number = String(number);
    if (number.length === 1){
        switch (number){
            case '0':
                text_number = 'zero'
                break;
            case '1':
                text_number = one;
                break;
            case '2':
                text_number = two;
                break;
            case '3':
                text_number = three;
                break;
            case '4':
                text_number = four;
                break;
            case '5':
                text_number = five;
                break;
            case '6':
                text_number = six;
                break;
            case '7':
                text_number = seven;
                break;
            case '8':
                text_number = eight;
                break;
            case '9':
                text_number = nine;
                break;
        }
        return text_number;
    }
    if (number.length === 2){
        for (let i = 0; i <number.length ; i++){
            if (i === 0){
                switch (number[i]){
                    case '2':
                        text_number = twenty
                        break;
                    case '3':
                        text_number = thirty
                        break;
                    case '4':
                        text_number = forty
                        break;
                    case '5':
                        text_number = fifty
                        break;
                    case '6':
                        text_number = sixty
                        break;
                    case '7':
                        text_number = seventy
                        break;
                    case '8':
                        text_number = eighty
                        break;
                    case '9':
                        text_number = ninety
                        break;
                }
            }
            if (i === 1){
                switch (number[i]){
                    case '0':
                        text_number += ''
                        break;
                    case '1':
                        text_number = text_number +' ' + one
                        break;
                    case '2':
                        text_number = text_number +' ' + two
                        break;
                    case '3':
                        text_number = text_number +' ' + three
                        break;
                    case '4':
                        text_number = text_number +' ' + four
                        break;
                    case '5':
                        text_number = text_number +' ' + five
                        break;
                    case '6':
                        text_number = text_number +' ' + six
                        break;
                    case '7':
                        text_number = text_number +' ' + seven
                        break;
                    case '8':
                        text_number = text_number +' ' + eight
                        break;
                    case '9':
                        text_number = text_number +' ' + nine
                        break;
                }

            }
        }
    }
    if (number.length === 3){
        if (number[1] !== '1'){
            for (let i = 0; i <number.length ; i++){
                if (i === 0){
                    switch (number[i]){
                        case '1':
                            text_number = one + ' ' + hundred
                            break;
                        case '2':
                            text_number = two + ' ' + hundred
                            break;
                        case '3':
                            text_number = three + ' ' + hundred
                            break;
                        case '4':
                            text_number = four + ' ' + hundred
                            break;
                        case '5':
                            text_number = five + ' ' + hundred
                            break;
                        case '6':
                            text_number = six + ' ' + hundred
                            break;
                        case '7':
                            text_number = seven + ' ' + hundred
                            break;
                        case '8':
                            text_number = eight + ' ' + hundred
                            break;
                        case '9':
                            text_number = nine + ' ' + hundred
                            break;
                    }
                }
                if (i === 1){
                    switch (number[i]){
                        case '0':
                            text_number = text_number + ''
                            break;
                        case '2':
                            text_number = text_number + twenty
                            break;
                        case '3':
                            text_number = text_number + thirty
                            break;
                        case '4':
                            text_number = text_number + forty
                            break;
                        case '5':
                            text_number = text_number + fifty
                            break;
                        case '6':
                            text_number = text_number + sixty
                            break;
                        case '7':
                            text_number = text_number + seventy
                            break;
                        case '8':
                            text_number = text_number + eighty
                            break;
                        case '9':
                            text_number = text_number + ninety
                            break;
                    }
                }
                if (i === 2){
                    switch (number[i]){
                        case '0':
                            text_number += ''
                            break;
                        case '1':
                            text_number = text_number +' ' + one
                            break;
                        case '2':
                            text_number = text_number +' ' + two
                            break;
                        case '3':
                            text_number = text_number +' ' + three
                            break;
                        case '4':
                            text_number = text_number +' ' + four
                            break;
                        case '5':
                            text_number = text_number +' ' + five
                            break;
                        case '6':
                            text_number = text_number +' ' + six
                            break;
                        case '7':
                            text_number = text_number +' ' + seven
                            break;
                        case '8':
                            text_number = text_number +' ' + eight
                            break;
                        case '9':
                            text_number = text_number +' ' + nine
                            break;
                    }

                }
            }
        } else {
            for (let i = 0; i < number.length; i++){
                if (i === 0){
                    switch (number[i]){
                        case '1':
                            text_number = one + ' ' + hundred
                            break;
                        case '2':
                            text_number = two + ' ' + hundred
                            break;
                        case '3':
                            text_number = three + ' ' + hundred
                            break;
                        case '4':
                            text_number = four + ' ' + hundred
                            break;
                        case '5':
                            text_number = five + ' ' + hundred
                            break;
                        case '6':
                            text_number = six + ' ' + hundred
                            break;
                        case '7':
                            text_number = seven + ' ' + hundred
                            break;
                        case '8':
                            text_number = eight + ' ' + hundred
                            break;
                        case '9':
                            text_number = nine + ' ' + hundred
                            break;
                    }
                }
                if (i === 1){
                    switch (number[i+1]) {
                        case '1':
                            text_number = text_number + '' + eleven
                            break;
                        case '2':
                            text_number = text_number + '' + twelve
                            break;
                        case '3':
                            text_number = text_number + '' + thirteen
                            break;
                        case '4':
                            text_number = text_number + '' + fourteen
                            break;
                        case '5':
                            text_number = text_number + '' + fifteen
                            break;
                        case '6':
                            text_number = text_number + '' + sixteen
                            break;
                        case '7':
                            text_number = text_number + '' + seventeen
                            break;
                        case '8':
                            text_number = text_number + '' + eighteen
                            break;
                        case '9':
                            text_number = text_number + '' + nineteen
                            break;
                    }
                }
            }
        }
    }

    return text_number;
}
