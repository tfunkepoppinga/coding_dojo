let text = '';
switch (new Date().getDay()) {
    case 5:
        text = 'Freitag';
        break;
    case 0:
    case 6:
        text = "Wochenende";
        break;
    default:
        text = "Leider nicht Freitag oder Wochenende";
}
console.log(text);