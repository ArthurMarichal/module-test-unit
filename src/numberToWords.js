export function numberToWords(n) {

    var a = ['','un','deux','trois','quatre', 'cinq','six','sept','huit','neuf','dix','onze','douze','treize','quartoze','quinze','seize','dix-sept','dix-huit','dix-neuf'];
    var b = ['', '', 'vingt','trente','quarante','cinquante','soixante','soixante-dix','quatre-vingt','quatre-vingt dix'];

    if (n < 20) return a[n];
    var digit = n%10;
    if (n < 100) return b[~~(n/10)] + (digit? "-" + a[digit]: "");
    if (n >= 100 && n <= 199) return "cent" + (n%100 == 0? "": " " + numberToWords(n%100));
    if (n < 1000) return a[~~(n/100)] +" cent" + (n%100 == 0? "": " " + numberToWords(n%100));
    if (n >= 1000 && n <= 1999) return "mille" + (n%1000 == 0? "": " " + numberToWords(n%1000));
    return numberToWords(~~(n/1000)) + " mille" + (n%1000 != 0? " " + numberToWords(n%1000): "");
}