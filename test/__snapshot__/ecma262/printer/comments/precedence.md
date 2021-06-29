# Kataw parser test case

## Input

`````js
var a, b, c, d, e, f, g, x, y, z;
a = 1 + 2 /*1*/ * 3 / 5;
b = (1 + 2/*2*/) * 3 / 5;
c = (1 + 2) * (3 - 5);
d = x | y /*3*/^ /*4*/z;
e = (x | y) ^ z;
f = "a" + (1 + 2) + /*5*/"b";
g = "a" + (1 - 2) + "b";
a = true /*6*/|| /*7*/false && null;
b = c == d || e != f;
c = x instanceof y || x instanceof z;
d = x == y && y != z;
a = !false;/*8*/
b = !x instanceof Number;
c = !(x instanceof /*9*/ Number);
d = typeof a === 'boolean';
e = !typeof a === 'boolean';
f = !(typeof a === 'boolean');
f = typeof ((/*10*/) => {/*11*/});
a = (1.1).toString();
b = new A/*12*/(/*13*/).toString();
c = new x.A().toString();
d = new x.y().z(/*14*/);
var r = (/ab+c/i).exec('abc');
a = b ** 2 */*15*/ 3;
c = (d ** 2) ** 3;
e = f ** 2 ** 3;
e = (+2) ** 3;
e = 2 ** +3;
f = a + (b = 3);
g = 1 && (() => {});
g = (() => {}) && 1;
g = (1,/*16*/ +/*17*/ +2);
g = (1, + +(2 + 3));
a = -/*18*/ --i;
b = - - --i;
c = + + ++j;/*19*/
d = !!a;
e = !+-+!a;
f = -+-a++;
g = b + -+-a++;
(async function* () {/*20*/
  await a + b;
  await a + await b;
  await (a =/*21*/ b);
  (await f(/*22*/)).a;
  await f(/*23*/).a;
  yield 1;/*24*/
  yield 1 + 2;
  (yield 1) +/*25*/ (yield 2);
  yield a = b;
  const c = yield 3;
});
(function* () {
  !(yield 1);
});/*27*/
!(() => {});
(() => {}) ? a : b;
({}) ?/*28*/ a /*29*/:/*30*/ b;
(({}) ? a : b) ? c : d;
(function ()/*31*/ {/*32*/}) ? a : b;
(class {}) ? a :/*32*/ b;/*33*/
/*34*/
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 6,
                            "end": 8
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 9,
                        "end": 11
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 12,
                            "end": 14
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 12,
                        "end": 14
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 15,
                        "end": 17
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 18,
                        "end": 20
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 21,
                            "end": 23
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 21,
                        "end": 23
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 24,
                            "end": 26
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 24,
                        "end": 26
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 27,
                            "end": 29
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 27,
                        "end": 29
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 30,
                            "end": 32
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 30,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 33,
                    "end": 35
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 35,
                    "end": 37
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 37,
                        "end": 39
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 39,
                        "end": 41
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 41,
                            "end": 43
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "start": 43,
                            "end": 51
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 3,
                                "rawText": "3",
                                "flags": 96,
                                "start": 51,
                                "end": 53
                            },
                            "operatorToken": {
                                "kind": 35640,
                                "flags": 96,
                                "start": 53,
                                "end": 55
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 5,
                                "rawText": "5",
                                "flags": 96,
                                "start": 55,
                                "end": 57
                            },
                            "flags": 32,
                            "start": 53,
                            "end": 57
                        },
                        "flags": 32,
                        "start": 43,
                        "end": 57
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 57
                },
                "flags": 32,
                "start": 33,
                "end": 57
            },
            "flags": 16,
            "start": 33,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 58,
                    "end": 60
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 60,
                    "end": 62
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 64,
                                "end": 65
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 65,
                                "end": 67
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 67,
                                "end": 69
                            },
                            "flags": 32,
                            "start": 64,
                            "end": 69
                        },
                        "flags": 32,
                        "start": 62,
                        "end": 75
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "start": 75,
                        "end": 77
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 77,
                            "end": 79
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "start": 79,
                            "end": 81
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 96,
                            "start": 81,
                            "end": 83
                        },
                        "flags": 32,
                        "start": 79,
                        "end": 83
                    },
                    "flags": 32,
                    "start": 62,
                    "end": 83
                },
                "flags": 32,
                "start": 58,
                "end": 83
            },
            "flags": 16,
            "start": 58,
            "end": 84
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 84,
                    "end": 86
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 86,
                    "end": 88
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 90,
                                "end": 91
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 91,
                                "end": 93
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 93,
                                "end": 95
                            },
                            "flags": 32,
                            "start": 90,
                            "end": 95
                        },
                        "flags": 32,
                        "start": 88,
                        "end": 96
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "start": 96,
                        "end": 98
                    },
                    "right": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 201392130,
                                "text": 3,
                                "rawText": "3",
                                "flags": 96,
                                "start": 100,
                                "end": 101
                            },
                            "operatorToken": {
                                "kind": 134318643,
                                "flags": 96,
                                "start": 101,
                                "end": 103
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 5,
                                "rawText": "5",
                                "flags": 96,
                                "start": 103,
                                "end": 105
                            },
                            "flags": 32,
                            "start": 100,
                            "end": 105
                        },
                        "flags": 32,
                        "start": 98,
                        "end": 106
                    },
                    "flags": 32,
                    "start": 88,
                    "end": 106
                },
                "flags": 32,
                "start": 84,
                "end": 106
            },
            "flags": 16,
            "start": 84,
            "end": 107
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 107,
                    "end": 109
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 109,
                    "end": 111
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 111,
                        "end": 113
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 96,
                        "start": 113,
                        "end": 115
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 115,
                            "end": 117
                        },
                        "operatorToken": {
                            "kind": 134251849,
                            "flags": 96,
                            "start": 117,
                            "end": 124
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 124,
                            "end": 131
                        },
                        "flags": 32,
                        "start": 117,
                        "end": 131
                    },
                    "flags": 32,
                    "start": 111,
                    "end": 131
                },
                "flags": 32,
                "start": 107,
                "end": 131
            },
            "flags": 16,
            "start": 107,
            "end": 132
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 132,
                    "end": 134
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 134,
                    "end": 136
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 138,
                                "end": 139
                            },
                            "operatorToken": {
                                "kind": 134251592,
                                "flags": 96,
                                "start": 139,
                                "end": 141
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 141,
                                "end": 143
                            },
                            "flags": 32,
                            "start": 136,
                            "end": 143
                        },
                        "flags": 32,
                        "start": 136,
                        "end": 144
                    },
                    "operatorToken": {
                        "kind": 134251849,
                        "flags": 96,
                        "start": 144,
                        "end": 146
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 146,
                        "end": 148
                    },
                    "flags": 32,
                    "start": 136,
                    "end": 148
                },
                "flags": 32,
                "start": 132,
                "end": 148
            },
            "flags": 16,
            "start": 132,
            "end": 149
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 149,
                    "end": 151
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 151,
                    "end": 153
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 201392131,
                            "text": "a",
                            "rawText": "\"a\"",
                            "flags": 96,
                            "start": 153,
                            "end": 157
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 157,
                            "end": 159
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 161,
                                    "end": 162
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 162,
                                    "end": 164
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 164,
                                    "end": 166
                                },
                                "flags": 32,
                                "start": 161,
                                "end": 166
                            },
                            "flags": 32,
                            "start": 159,
                            "end": 167
                        },
                        "flags": 32,
                        "start": 153,
                        "end": 167
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 167,
                        "end": 169
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "b",
                        "rawText": "\"b\"",
                        "flags": 96,
                        "start": 169,
                        "end": 178
                    },
                    "flags": 32,
                    "start": 153,
                    "end": 178
                },
                "flags": 32,
                "start": 149,
                "end": 178
            },
            "flags": 16,
            "start": 149,
            "end": 179
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 179,
                    "end": 181
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 181,
                    "end": 183
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 201392131,
                            "text": "a",
                            "rawText": "\"a\"",
                            "flags": 96,
                            "start": 183,
                            "end": 187
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 187,
                            "end": 189
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 191,
                                    "end": 192
                                },
                                "operatorToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 192,
                                    "end": 194
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 194,
                                    "end": 196
                                },
                                "flags": 32,
                                "start": 191,
                                "end": 196
                            },
                            "flags": 32,
                            "start": 189,
                            "end": 197
                        },
                        "flags": 32,
                        "start": 183,
                        "end": 197
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 197,
                        "end": 199
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "b",
                        "rawText": "\"b\"",
                        "flags": 96,
                        "start": 199,
                        "end": 203
                    },
                    "flags": 32,
                    "start": 183,
                    "end": 203
                },
                "flags": 32,
                "start": 179,
                "end": 203
            },
            "flags": 16,
            "start": 179,
            "end": 204
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 204,
                    "end": 206
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 206,
                    "end": 208
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 24752947,
                        "flags": 96,
                        "start": 208,
                        "end": 213
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 213,
                        "end": 221
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 205586437,
                            "flags": 96,
                            "start": 221,
                            "end": 232
                        },
                        "operatorToken": {
                            "kind": 33594,
                            "flags": 96,
                            "start": 232,
                            "end": 235
                        },
                        "right": {
                            "kind": 138477575,
                            "flags": 96,
                            "start": 235,
                            "end": 240
                        },
                        "flags": 32,
                        "start": 232,
                        "end": 240
                    },
                    "flags": 32,
                    "start": 208,
                    "end": 240
                },
                "flags": 32,
                "start": 204,
                "end": 240
            },
            "flags": 16,
            "start": 204,
            "end": 241
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 241,
                    "end": 243
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 243,
                    "end": 245
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 245,
                            "end": 247
                        },
                        "operatorToken": {
                            "kind": 34622,
                            "flags": 96,
                            "start": 247,
                            "end": 250
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 250,
                            "end": 252
                        },
                        "flags": 32,
                        "start": 245,
                        "end": 252
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 252,
                        "end": 255
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "start": 255,
                            "end": 257
                        },
                        "operatorToken": {
                            "kind": 34623,
                            "flags": 96,
                            "start": 257,
                            "end": 260
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 260,
                            "end": 262
                        },
                        "flags": 32,
                        "start": 257,
                        "end": 262
                    },
                    "flags": 32,
                    "start": 245,
                    "end": 262
                },
                "flags": 32,
                "start": 241,
                "end": 262
            },
            "flags": 16,
            "start": 241,
            "end": 263
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 263,
                    "end": 265
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 265,
                    "end": 267
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 267,
                            "end": 269
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 96,
                            "start": 269,
                            "end": 280
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 280,
                            "end": 282
                        },
                        "flags": 32,
                        "start": 267,
                        "end": 282
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "start": 282,
                        "end": 285
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 285,
                            "end": 287
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 96,
                            "start": 287,
                            "end": 298
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 298,
                            "end": 300
                        },
                        "flags": 32,
                        "start": 287,
                        "end": 300
                    },
                    "flags": 32,
                    "start": 267,
                    "end": 300
                },
                "flags": 32,
                "start": 263,
                "end": 300
            },
            "flags": 16,
            "start": 263,
            "end": 301
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 301,
                    "end": 303
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 303,
                    "end": 305
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 305,
                            "end": 307
                        },
                        "operatorToken": {
                            "kind": 34622,
                            "flags": 96,
                            "start": 307,
                            "end": 310
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 310,
                            "end": 312
                        },
                        "flags": 32,
                        "start": 305,
                        "end": 312
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 312,
                        "end": 315
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 315,
                            "end": 317
                        },
                        "operatorToken": {
                            "kind": 34623,
                            "flags": 96,
                            "start": 317,
                            "end": 320
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 320,
                            "end": 322
                        },
                        "flags": 32,
                        "start": 317,
                        "end": 322
                    },
                    "flags": 32,
                    "start": 305,
                    "end": 322
                },
                "flags": 32,
                "start": 301,
                "end": 322
            },
            "flags": 16,
            "start": 301,
            "end": 323
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 323,
                    "end": 325
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 325,
                    "end": 327
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 96,
                        "start": 327,
                        "end": 329
                    },
                    "operand": {
                        "kind": 205586437,
                        "flags": 96,
                        "start": 329,
                        "end": 334
                    },
                    "flags": 32,
                    "start": 327,
                    "end": 334
                },
                "flags": 32,
                "start": 323,
                "end": 334
            },
            "flags": 16,
            "start": 323,
            "end": 335
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 335,
                    "end": 342
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 342,
                    "end": 344
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 96,
                            "start": 344,
                            "end": 346
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 346,
                            "end": 347
                        },
                        "flags": 32,
                        "start": 344,
                        "end": 347
                    },
                    "operatorToken": {
                        "kind": 4229173,
                        "flags": 96,
                        "start": 347,
                        "end": 358
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "Number",
                        "rawText": "Number",
                        "flags": 96,
                        "start": 358,
                        "end": 365
                    },
                    "flags": 32,
                    "start": 344,
                    "end": 365
                },
                "flags": 32,
                "start": 335,
                "end": 365
            },
            "flags": 16,
            "start": 335,
            "end": 366
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 366,
                    "end": 368
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 368,
                    "end": 370
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 96,
                        "start": 370,
                        "end": 372
                    },
                    "operand": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 373,
                                "end": 374
                            },
                            "operatorToken": {
                                "kind": 4229173,
                                "flags": 96,
                                "start": 374,
                                "end": 385
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "Number",
                                "rawText": "Number",
                                "flags": 96,
                                "start": 385,
                                "end": 398
                            },
                            "flags": 32,
                            "start": 372,
                            "end": 398
                        },
                        "flags": 32,
                        "start": 372,
                        "end": 399
                    },
                    "flags": 32,
                    "start": 370,
                    "end": 399
                },
                "flags": 32,
                "start": 366,
                "end": 399
            },
            "flags": 16,
            "start": 366,
            "end": 400
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 400,
                    "end": 402
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 402,
                    "end": 404
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 138477613,
                            "flags": 96,
                            "start": 404,
                            "end": 411
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 411,
                            "end": 413
                        },
                        "flags": 32,
                        "start": 404,
                        "end": 413
                    },
                    "operatorToken": {
                        "kind": 34620,
                        "flags": 96,
                        "start": 413,
                        "end": 417
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "boolean",
                        "rawText": "'boolean'",
                        "flags": 4194400,
                        "start": 417,
                        "end": 427
                    },
                    "flags": 32,
                    "start": 404,
                    "end": 427
                },
                "flags": 32,
                "start": 400,
                "end": 427
            },
            "flags": 16,
            "start": 400,
            "end": 428
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 428,
                    "end": 430
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 430,
                    "end": 432
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 96,
                            "start": 432,
                            "end": 434
                        },
                        "operand": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 138477613,
                                "flags": 96,
                                "start": 434,
                                "end": 440
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 440,
                                "end": 442
                            },
                            "flags": 32,
                            "start": 434,
                            "end": 442
                        },
                        "flags": 32,
                        "start": 432,
                        "end": 442
                    },
                    "operatorToken": {
                        "kind": 34620,
                        "flags": 96,
                        "start": 442,
                        "end": 446
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "boolean",
                        "rawText": "'boolean'",
                        "flags": 4194400,
                        "start": 446,
                        "end": 456
                    },
                    "flags": 32,
                    "start": 432,
                    "end": 456
                },
                "flags": 32,
                "start": 428,
                "end": 456
            },
            "flags": 16,
            "start": 428,
            "end": 457
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 457,
                    "end": 459
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 459,
                    "end": 461
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 96,
                        "start": 461,
                        "end": 463
                    },
                    "operand": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 138477613,
                                    "flags": 96,
                                    "start": 464,
                                    "end": 470
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 470,
                                    "end": 472
                                },
                                "flags": 32,
                                "start": 464,
                                "end": 472
                            },
                            "operatorToken": {
                                "kind": 34620,
                                "flags": 96,
                                "start": 472,
                                "end": 476
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "boolean",
                                "rawText": "'boolean'",
                                "flags": 4194400,
                                "start": 476,
                                "end": 486
                            },
                            "flags": 32,
                            "start": 464,
                            "end": 486
                        },
                        "flags": 32,
                        "start": 463,
                        "end": 487
                    },
                    "flags": 32,
                    "start": 461,
                    "end": 487
                },
                "flags": 32,
                "start": 457,
                "end": 487
            },
            "flags": 16,
            "start": 457,
            "end": 488
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 488,
                    "end": 490
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 490,
                    "end": 492
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477613,
                        "flags": 96,
                        "start": 492,
                        "end": 499
                    },
                    "operand": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 502,
                                "end": 502
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 509,
                                "end": 512
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 514,
                                    "end": 514
                                },
                                "flags": 32,
                                "start": 512,
                                "end": 521
                            },
                            "flags": 32,
                            "start": 501,
                            "end": 521
                        },
                        "flags": 32,
                        "start": 499,
                        "end": 522
                    },
                    "flags": 32,
                    "start": 492,
                    "end": 522
                },
                "flags": 32,
                "start": 488,
                "end": 522
            },
            "flags": 16,
            "start": 488,
            "end": 523
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 523,
                    "end": 525
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 525,
                    "end": 527
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 121,
                            "expression": {
                                "kind": 201392130,
                                "text": 1.1,
                                "rawText": "1.1",
                                "flags": 32864,
                                "start": 529,
                                "end": 532
                            },
                            "flags": 32,
                            "start": 527,
                            "end": 533
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "toString",
                            "rawText": "toString",
                            "flags": 96,
                            "start": 534,
                            "end": 542
                        },
                        "flags": 32,
                        "start": 527,
                        "end": 542
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 543,
                        "end": 543
                    },
                    "flags": 268435488,
                    "start": 527,
                    "end": 544
                },
                "flags": 32,
                "start": 523,
                "end": 544
            },
            "flags": 16,
            "start": 523,
            "end": 545
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 545,
                    "end": 547
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 547,
                    "end": 549
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 96,
                                "start": 549,
                                "end": 553
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "A",
                                "rawText": "A",
                                "flags": 96,
                                "start": 553,
                                "end": 555
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 562,
                                "end": 562
                            },
                            "flags": 96,
                            "start": 549,
                            "end": 569
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "toString",
                            "rawText": "toString",
                            "flags": 96,
                            "start": 570,
                            "end": 578
                        },
                        "flags": 96,
                        "start": 549,
                        "end": 578
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 579,
                        "end": 579
                    },
                    "flags": 268435488,
                    "start": 549,
                    "end": 580
                },
                "flags": 32,
                "start": 545,
                "end": 580
            },
            "flags": 16,
            "start": 545,
            "end": 581
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 581,
                    "end": 583
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 583,
                    "end": 585
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 210,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 96,
                                        "start": 585,
                                        "end": 589
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 589,
                                        "end": 591
                                    },
                                    "argumentList": null,
                                    "flags": 96,
                                    "start": 585,
                                    "end": 591
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 592,
                                    "end": 593
                                },
                                "flags": 96,
                                "start": 585,
                                "end": 593
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 594,
                                "end": 594
                            },
                            "flags": 268435488,
                            "start": 585,
                            "end": 595
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "toString",
                            "rawText": "toString",
                            "flags": 96,
                            "start": 596,
                            "end": 604
                        },
                        "flags": 268435488,
                        "start": 585,
                        "end": 604
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 605,
                        "end": 605
                    },
                    "flags": 268435488,
                    "start": 585,
                    "end": 606
                },
                "flags": 32,
                "start": 581,
                "end": 606
            },
            "flags": 16,
            "start": 581,
            "end": 607
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 607,
                    "end": 609
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 609,
                    "end": 611
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 210,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 96,
                                        "start": 611,
                                        "end": 615
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 615,
                                        "end": 617
                                    },
                                    "argumentList": null,
                                    "flags": 96,
                                    "start": 611,
                                    "end": 617
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 618,
                                    "end": 619
                                },
                                "flags": 96,
                                "start": 611,
                                "end": 619
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 620,
                                "end": 620
                            },
                            "flags": 268435488,
                            "start": 611,
                            "end": 621
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 622,
                            "end": 623
                        },
                        "flags": 268435488,
                        "start": 611,
                        "end": 623
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 624,
                        "end": 624
                    },
                    "flags": 268435488,
                    "start": 611,
                    "end": 631
                },
                "flags": 32,
                "start": 607,
                "end": 631
            },
            "flags": 16,
            "start": 607,
            "end": 632
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 632,
                "end": 636
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "r",
                            "rawText": "r",
                            "flags": 96,
                            "start": 636,
                            "end": 638
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 371,
                                        "text": "/ab+c/i",
                                        "flags": 96,
                                        "start": 642,
                                        "end": 649
                                    },
                                    "flags": 32,
                                    "start": 640,
                                    "end": 650
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "exec",
                                    "rawText": "exec",
                                    "flags": 96,
                                    "start": 651,
                                    "end": 655
                                },
                                "flags": 32,
                                "start": 640,
                                "end": 655
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "abc",
                                        "rawText": "'abc'",
                                        "flags": 4194400,
                                        "start": 656,
                                        "end": 661
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 656,
                                "end": 661
                            },
                            "flags": 268435488,
                            "start": 640,
                            "end": 662
                        },
                        "flags": 16,
                        "start": 636,
                        "end": 662
                    }
                ],
                "flags": 16,
                "start": 636,
                "end": 662
            },
            "flags": 16,
            "start": 632,
            "end": 663
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 663,
                    "end": 665
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 665,
                    "end": 667
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 667,
                            "end": 669
                        },
                        "operatorToken": {
                            "kind": 35897,
                            "flags": 96,
                            "start": 669,
                            "end": 672
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 672,
                            "end": 674
                        },
                        "flags": 32,
                        "start": 667,
                        "end": 674
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 96,
                        "start": 674,
                        "end": 676
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 3,
                        "rawText": "3",
                        "flags": 96,
                        "start": 676,
                        "end": 684
                    },
                    "flags": 32,
                    "start": 667,
                    "end": 684
                },
                "flags": 32,
                "start": 663,
                "end": 684
            },
            "flags": 16,
            "start": 663,
            "end": 685
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 685,
                    "end": 687
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 687,
                    "end": 689
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 691,
                                "end": 692
                            },
                            "operatorToken": {
                                "kind": 35897,
                                "flags": 96,
                                "start": 692,
                                "end": 695
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 695,
                                "end": 697
                            },
                            "flags": 32,
                            "start": 689,
                            "end": 697
                        },
                        "flags": 32,
                        "start": 689,
                        "end": 698
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "start": 698,
                        "end": 701
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 3,
                        "rawText": "3",
                        "flags": 96,
                        "start": 701,
                        "end": 703
                    },
                    "flags": 32,
                    "start": 689,
                    "end": 703
                },
                "flags": 32,
                "start": 685,
                "end": 703
            },
            "flags": 16,
            "start": 685,
            "end": 704
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 704,
                    "end": 706
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 706,
                    "end": 708
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 708,
                        "end": 710
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "start": 710,
                        "end": 713
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 713,
                            "end": 715
                        },
                        "operatorToken": {
                            "kind": 35897,
                            "flags": 96,
                            "start": 715,
                            "end": 718
                        },
                        "right": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 718,
                            "end": 720
                        },
                        "flags": 32,
                        "start": 715,
                        "end": 720
                    },
                    "flags": 32,
                    "start": 708,
                    "end": 720
                },
                "flags": 32,
                "start": 704,
                "end": 720
            },
            "flags": 16,
            "start": 704,
            "end": 721
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 721,
                    "end": 723
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 723,
                    "end": 725
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 727,
                                "end": 728
                            },
                            "operand": {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 728,
                                "end": 729
                            },
                            "flags": 32,
                            "start": 727,
                            "end": 729
                        },
                        "flags": 32,
                        "start": 725,
                        "end": 730
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "start": 730,
                        "end": 733
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 3,
                        "rawText": "3",
                        "flags": 96,
                        "start": 733,
                        "end": 735
                    },
                    "flags": 32,
                    "start": 725,
                    "end": 735
                },
                "flags": 32,
                "start": 721,
                "end": 735
            },
            "flags": 16,
            "start": 721,
            "end": 736
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 736,
                    "end": 738
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 738,
                    "end": 740
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 96,
                        "start": 740,
                        "end": 742
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 96,
                        "start": 742,
                        "end": 745
                    },
                    "right": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 745,
                            "end": 747
                        },
                        "operand": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 747,
                            "end": 748
                        },
                        "flags": 32,
                        "start": 745,
                        "end": 748
                    },
                    "flags": 32,
                    "start": 740,
                    "end": 748
                },
                "flags": 32,
                "start": 736,
                "end": 748
            },
            "flags": 16,
            "start": 736,
            "end": 749
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 749,
                    "end": 751
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 751,
                    "end": 753
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 753,
                        "end": 755
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 755,
                        "end": 757
                    },
                    "right": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 759,
                                "end": 760
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 760,
                                "end": 762
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 3,
                                "rawText": "3",
                                "flags": 96,
                                "start": 762,
                                "end": 764
                            },
                            "flags": 32,
                            "start": 757,
                            "end": 764
                        },
                        "flags": 32,
                        "start": 757,
                        "end": 765
                    },
                    "flags": 32,
                    "start": 753,
                    "end": 765
                },
                "flags": 32,
                "start": 749,
                "end": 765
            },
            "flags": 16,
            "start": 749,
            "end": 766
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 766,
                    "end": 768
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 768,
                    "end": 770
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 770,
                        "end": 772
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 772,
                        "end": 775
                    },
                    "right": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 778,
                                "end": 778
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 779,
                                "end": 782
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 784,
                                    "end": 784
                                },
                                "flags": 32,
                                "start": 782,
                                "end": 785
                            },
                            "flags": 32,
                            "start": 777,
                            "end": 785
                        },
                        "flags": 32,
                        "start": 775,
                        "end": 786
                    },
                    "flags": 32,
                    "start": 770,
                    "end": 786
                },
                "flags": 32,
                "start": 766,
                "end": 786
            },
            "flags": 16,
            "start": 766,
            "end": 787
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 787,
                    "end": 789
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 789,
                    "end": 791
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 794,
                                "end": 794
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 795,
                                "end": 798
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 800,
                                    "end": 800
                                },
                                "flags": 32,
                                "start": 798,
                                "end": 801
                            },
                            "flags": 32,
                            "start": 793,
                            "end": 801
                        },
                        "flags": 32,
                        "start": 791,
                        "end": 802
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "start": 802,
                        "end": 805
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 805,
                        "end": 807
                    },
                    "flags": 32,
                    "start": 791,
                    "end": 807
                },
                "flags": 32,
                "start": 787,
                "end": 807
            },
            "flags": 16,
            "start": 787,
            "end": 808
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 808,
                    "end": 810
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 810,
                    "end": 812
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 814,
                                "end": 815
                            },
                            {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 816,
                                    "end": 824
                                },
                                "operand": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 824,
                                        "end": 832
                                    },
                                    "operand": {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "start": 832,
                                        "end": 833
                                    },
                                    "flags": 32,
                                    "start": 824,
                                    "end": 833
                                },
                                "flags": 32,
                                "start": 816,
                                "end": 833
                            }
                        ],
                        "flags": 32,
                        "start": 812,
                        "end": 833
                    },
                    "flags": 32,
                    "start": 812,
                    "end": 834
                },
                "flags": 32,
                "start": 808,
                "end": 834
            },
            "flags": 16,
            "start": 808,
            "end": 835
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 835,
                    "end": 837
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 837,
                    "end": 839
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 841,
                                "end": 842
                            },
                            {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 843,
                                    "end": 845
                                },
                                "operand": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 845,
                                        "end": 847
                                    },
                                    "operand": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 848,
                                                "end": 849
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "start": 849,
                                                "end": 851
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 96,
                                                "start": 851,
                                                "end": 853
                                            },
                                            "flags": 32,
                                            "start": 848,
                                            "end": 853
                                        },
                                        "flags": 32,
                                        "start": 847,
                                        "end": 854
                                    },
                                    "flags": 32,
                                    "start": 845,
                                    "end": 854
                                },
                                "flags": 32,
                                "start": 843,
                                "end": 854
                            }
                        ],
                        "flags": 32,
                        "start": 839,
                        "end": 854
                    },
                    "flags": 32,
                    "start": 839,
                    "end": 855
                },
                "flags": 32,
                "start": 835,
                "end": 855
            },
            "flags": 16,
            "start": 835,
            "end": 856
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 856,
                    "end": 858
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 858,
                    "end": 860
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "start": 860,
                        "end": 862
                    },
                    "operand": {
                        "kind": 128,
                        "operandToken": {
                            "kind": 196636,
                            "flags": 96,
                            "start": 862,
                            "end": 871
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 871,
                            "end": 872
                        },
                        "flags": 32,
                        "start": 862,
                        "end": 872
                    },
                    "flags": 32,
                    "start": 860,
                    "end": 872
                },
                "flags": 32,
                "start": 856,
                "end": 872
            },
            "flags": 16,
            "start": 856,
            "end": 873
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 873,
                    "end": 875
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 875,
                    "end": 877
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "start": 877,
                        "end": 879
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 134318643,
                            "flags": 96,
                            "start": 879,
                            "end": 881
                        },
                        "operand": {
                            "kind": 128,
                            "operandToken": {
                                "kind": 196636,
                                "flags": 96,
                                "start": 881,
                                "end": 884
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 96,
                                "start": 884,
                                "end": 885
                            },
                            "flags": 32,
                            "start": 881,
                            "end": 885
                        },
                        "flags": 32,
                        "start": 879,
                        "end": 885
                    },
                    "flags": 32,
                    "start": 877,
                    "end": 885
                },
                "flags": 32,
                "start": 873,
                "end": 885
            },
            "flags": 16,
            "start": 873,
            "end": 886
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 886,
                    "end": 888
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 888,
                    "end": 890
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 890,
                        "end": 892
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 892,
                            "end": 894
                        },
                        "operand": {
                            "kind": 128,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 96,
                                "start": 894,
                                "end": 897
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "j",
                                "rawText": "j",
                                "flags": 96,
                                "start": 897,
                                "end": 898
                            },
                            "flags": 32,
                            "start": 894,
                            "end": 898
                        },
                        "flags": 32,
                        "start": 892,
                        "end": 898
                    },
                    "flags": 32,
                    "start": 890,
                    "end": 898
                },
                "flags": 32,
                "start": 886,
                "end": 898
            },
            "flags": 16,
            "start": 886,
            "end": 899
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 899,
                    "end": 907
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 907,
                    "end": 909
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 96,
                        "start": 909,
                        "end": 911
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 96,
                            "start": 911,
                            "end": 912
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 912,
                            "end": 913
                        },
                        "flags": 32,
                        "start": 911,
                        "end": 913
                    },
                    "flags": 32,
                    "start": 909,
                    "end": 913
                },
                "flags": 32,
                "start": 899,
                "end": 913
            },
            "flags": 16,
            "start": 899,
            "end": 914
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 914,
                    "end": 916
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 916,
                    "end": 918
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 96,
                        "start": 918,
                        "end": 920
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 920,
                            "end": 921
                        },
                        "operand": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 134318643,
                                "flags": 96,
                                "start": 921,
                                "end": 922
                            },
                            "operand": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 922,
                                    "end": 923
                                },
                                "operand": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 96,
                                        "start": 923,
                                        "end": 924
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 924,
                                        "end": 925
                                    },
                                    "flags": 32,
                                    "start": 923,
                                    "end": 925
                                },
                                "flags": 32,
                                "start": 922,
                                "end": 925
                            },
                            "flags": 32,
                            "start": 921,
                            "end": 925
                        },
                        "flags": 32,
                        "start": 920,
                        "end": 925
                    },
                    "flags": 32,
                    "start": 918,
                    "end": 925
                },
                "flags": 32,
                "start": 914,
                "end": 925
            },
            "flags": 16,
            "start": 914,
            "end": 926
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 926,
                    "end": 928
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 928,
                    "end": 930
                },
                "right": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 134318643,
                        "flags": 96,
                        "start": 930,
                        "end": 932
                    },
                    "operand": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 932,
                            "end": 933
                        },
                        "operand": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 134318643,
                                "flags": 96,
                                "start": 933,
                                "end": 934
                            },
                            "operand": {
                                "kind": 127,
                                "operandToken": {
                                    "kind": 196635,
                                    "flags": 96,
                                    "start": 935,
                                    "end": 937
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 934,
                                    "end": 935
                                },
                                "flags": 32,
                                "start": 934,
                                "end": 937
                            },
                            "flags": 32,
                            "start": 933,
                            "end": 937
                        },
                        "flags": 32,
                        "start": 932,
                        "end": 937
                    },
                    "flags": 32,
                    "start": 930,
                    "end": 937
                },
                "flags": 32,
                "start": 926,
                "end": 937
            },
            "flags": 16,
            "start": 926,
            "end": 938
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 938,
                    "end": 940
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 940,
                    "end": 942
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 942,
                        "end": 944
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 944,
                        "end": 946
                    },
                    "right": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 134318643,
                            "flags": 96,
                            "start": 946,
                            "end": 948
                        },
                        "operand": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 948,
                                "end": 949
                            },
                            "operand": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "start": 949,
                                    "end": 950
                                },
                                "operand": {
                                    "kind": 127,
                                    "operandToken": {
                                        "kind": 196635,
                                        "flags": 96,
                                        "start": 951,
                                        "end": 953
                                    },
                                    "operand": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 950,
                                        "end": 951
                                    },
                                    "flags": 32,
                                    "start": 950,
                                    "end": 953
                                },
                                "flags": 32,
                                "start": 949,
                                "end": 953
                            },
                            "flags": 32,
                            "start": 948,
                            "end": 953
                        },
                        "flags": 32,
                        "start": 946,
                        "end": 953
                    },
                    "flags": 32,
                    "start": 942,
                    "end": 953
                },
                "flags": 32,
                "start": 938,
                "end": 953
            },
            "flags": 16,
            "start": 938,
            "end": 954
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 956,
                        "end": 961
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 961,
                        "end": 970
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 970,
                        "end": 971
                    },
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 973,
                        "end": 973
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 65,
                                                "start": 976,
                                                "end": 990
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 990,
                                                "end": 992
                                            },
                                            "flags": 32,
                                            "start": 976,
                                            "end": 992
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "start": 992,
                                            "end": 994
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 994,
                                            "end": 996
                                        },
                                        "flags": 32,
                                        "start": 976,
                                        "end": 996
                                    },
                                    "flags": 16,
                                    "start": 976,
                                    "end": 997
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 65,
                                                "start": 997,
                                                "end": 1005
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 1005,
                                                "end": 1007
                                            },
                                            "flags": 32,
                                            "start": 997,
                                            "end": 1007
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "start": 1007,
                                            "end": 1009
                                        },
                                        "right": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "start": 1009,
                                                "end": 1015
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 1015,
                                                "end": 1017
                                            },
                                            "flags": 32,
                                            "start": 1009,
                                            "end": 1017
                                        },
                                        "flags": 32,
                                        "start": 997,
                                        "end": 1017
                                    },
                                    "flags": 16,
                                    "start": 997,
                                    "end": 1018
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 65,
                                            "start": 1018,
                                            "end": 1026
                                        },
                                        "expression": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 1028,
                                                    "end": 1029
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 1029,
                                                    "end": 1031
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 1031,
                                                    "end": 1039
                                                },
                                                "flags": 32,
                                                "start": 1026,
                                                "end": 1039
                                            },
                                            "flags": 32,
                                            "start": 1026,
                                            "end": 1040
                                        },
                                        "flags": 32,
                                        "start": 1018,
                                        "end": 1040
                                    },
                                    "flags": 16,
                                    "start": 1018,
                                    "end": 1041
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 64,
                                                    "start": 1045,
                                                    "end": 1050
                                                },
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 96,
                                                        "start": 1050,
                                                        "end": 1052
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 1053,
                                                        "end": 1053
                                                    },
                                                    "flags": 268435488,
                                                    "start": 1050,
                                                    "end": 1060
                                                },
                                                "flags": 32,
                                                "start": 1045,
                                                "end": 1060
                                            },
                                            "flags": 32,
                                            "start": 1041,
                                            "end": 1061
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 1062,
                                            "end": 1063
                                        },
                                        "flags": 32,
                                        "start": 1041,
                                        "end": 1063
                                    },
                                    "flags": 16,
                                    "start": 1041,
                                    "end": 1064
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 208,
                                        "awaitKeyword": {
                                            "kind": 82196,
                                            "flags": 65,
                                            "start": 1064,
                                            "end": 1072
                                        },
                                        "expression": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 1072,
                                                    "end": 1074
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 1075,
                                                    "end": 1075
                                                },
                                                "flags": 268435488,
                                                "start": 1072,
                                                "end": 1082
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 1083,
                                                "end": 1084
                                            },
                                            "flags": 268435488,
                                            "start": 1072,
                                            "end": 1084
                                        },
                                        "flags": 32,
                                        "start": 1064,
                                        "end": 1084
                                    },
                                    "flags": 16,
                                    "start": 1064,
                                    "end": 1085
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 65,
                                            "start": 1085,
                                            "end": 1093
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 1093,
                                            "end": 1095
                                        },
                                        "flags": 32,
                                        "start": 1085,
                                        "end": 1095
                                    },
                                    "flags": 16,
                                    "start": 1085,
                                    "end": 1096
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 65,
                                            "start": 1096,
                                            "end": 1110
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 1110,
                                                "end": 1112
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "start": 1112,
                                                "end": 1114
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 1114,
                                                "end": 1116
                                            },
                                            "flags": 32,
                                            "start": 1110,
                                            "end": 1116
                                        },
                                        "flags": 32,
                                        "start": 1096,
                                        "end": 1116
                                    },
                                    "flags": 16,
                                    "start": 1096,
                                    "end": 1117
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 1121,
                                                    "end": 1126
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 1126,
                                                    "end": 1128
                                                },
                                                "flags": 32,
                                                "start": 1121,
                                                "end": 1128
                                            },
                                            "flags": 32,
                                            "start": 1117,
                                            "end": 1129
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "start": 1129,
                                            "end": 1131
                                        },
                                        "right": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 1139,
                                                    "end": 1144
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 96,
                                                    "start": 1144,
                                                    "end": 1146
                                                },
                                                "flags": 32,
                                                "start": 1139,
                                                "end": 1146
                                            },
                                            "flags": 32,
                                            "start": 1131,
                                            "end": 1147
                                        },
                                        "flags": 32,
                                        "start": 1117,
                                        "end": 1147
                                    },
                                    "flags": 16,
                                    "start": 1117,
                                    "end": 1148
                                },
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 65,
                                            "start": 1148,
                                            "end": 1156
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 1156,
                                                "end": 1158
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 1158,
                                                "end": 1160
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 1160,
                                                "end": 1162
                                            },
                                            "flags": 32,
                                            "start": 1156,
                                            "end": 1162
                                        },
                                        "flags": 32,
                                        "start": 1148,
                                        "end": 1162
                                    },
                                    "flags": 16,
                                    "start": 1148,
                                    "end": 1163
                                },
                                {
                                    "kind": 162,
                                    "lexicalKeyword": {
                                        "kind": 37757004,
                                        "flags": 81,
                                        "start": 1163,
                                        "end": 1171
                                    },
                                    "binding": {
                                        "kind": 151,
                                        "bindingList": [
                                            {
                                                "kind": 190,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 1171,
                                                    "end": 1173
                                                },
                                                "type": null,
                                                "initializer": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "start": 1175,
                                                        "end": 1181
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 96,
                                                        "start": 1181,
                                                        "end": 1183
                                                    },
                                                    "flags": 32,
                                                    "start": 1175,
                                                    "end": 1183
                                                },
                                                "flags": 16,
                                                "start": 1171,
                                                "end": 1183
                                            }
                                        ],
                                        "flags": 16777232,
                                        "start": 1171,
                                        "end": 1183
                                    },
                                    "flags": 33554448,
                                    "start": 1163,
                                    "end": 1184
                                }
                            ],
                            "flags": 33,
                            "start": 976,
                            "end": 1184
                        },
                        "flags": 32,
                        "start": 974,
                        "end": 1186
                    },
                    "returnType": null,
                    "flags": 416,
                    "start": 956,
                    "end": 1186
                },
                "flags": 32,
                "start": 954,
                "end": 1187
            },
            "flags": 16,
            "start": 954,
            "end": 1188
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 1190,
                        "end": 1198
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 1198,
                        "end": 1199
                    },
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1201,
                        "end": 1201
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 65584,
                                            "flags": 97,
                                            "start": 1204,
                                            "end": 1208
                                        },
                                        "operand": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 64,
                                                    "start": 1209,
                                                    "end": 1214
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 1214,
                                                    "end": 1216
                                                },
                                                "flags": 32,
                                                "start": 1209,
                                                "end": 1216
                                            },
                                            "flags": 32,
                                            "start": 1208,
                                            "end": 1217
                                        },
                                        "flags": 32,
                                        "start": 1204,
                                        "end": 1217
                                    },
                                    "flags": 16,
                                    "start": 1204,
                                    "end": 1218
                                }
                            ],
                            "flags": 33,
                            "start": 1204,
                            "end": 1218
                        },
                        "flags": 32,
                        "start": 1202,
                        "end": 1220
                    },
                    "returnType": null,
                    "flags": 288,
                    "start": 1190,
                    "end": 1220
                },
                "flags": 32,
                "start": 1188,
                "end": 1221
            },
            "flags": 16,
            "start": 1188,
            "end": 1222
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 97,
                    "start": 1222,
                    "end": 1230
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 0,
                            "start": 1232,
                            "end": 1232
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 1233,
                            "end": 1236
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 1238,
                                "end": 1238
                            },
                            "flags": 32,
                            "start": 1236,
                            "end": 1239
                        },
                        "flags": 32,
                        "start": 1231,
                        "end": 1239
                    },
                    "flags": 32,
                    "start": 1230,
                    "end": 1240
                },
                "flags": 32,
                "start": 1222,
                "end": 1240
            },
            "flags": 16,
            "start": 1222,
            "end": 1241
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 0,
                            "start": 1244,
                            "end": 1244
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 1245,
                            "end": 1248
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 1250,
                                "end": 1250
                            },
                            "flags": 32,
                            "start": 1248,
                            "end": 1251
                        },
                        "flags": 32,
                        "start": 1243,
                        "end": 1251
                    },
                    "flags": 32,
                    "start": 1241,
                    "end": 1252
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1252,
                    "end": 1254
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1254,
                    "end": 1256
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 1256,
                    "end": 1258
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 1258,
                    "end": 1260
                },
                "flags": 32,
                "start": 1241,
                "end": 1260
            },
            "flags": 16,
            "start": 1241,
            "end": 1261
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 1264,
                            "end": 1264
                        },
                        "flags": 48,
                        "start": 1263,
                        "end": 1265
                    },
                    "flags": 32,
                    "start": 1261,
                    "end": 1266
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1266,
                    "end": 1268
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1268,
                    "end": 1276
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 1276,
                    "end": 1284
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 1284,
                    "end": 1292
                },
                "flags": 32,
                "start": 1261,
                "end": 1292
            },
            "flags": 16,
            "start": 1261,
            "end": 1293
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 121,
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 1297,
                                    "end": 1297
                                },
                                "flags": 48,
                                "start": 1296,
                                "end": 1298
                            },
                            "flags": 32,
                            "start": 1295,
                            "end": 1299
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 1299,
                            "end": 1301
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1301,
                            "end": 1303
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 1303,
                            "end": 1305
                        },
                        "alternate": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 1305,
                            "end": 1307
                        },
                        "flags": 32,
                        "start": 1295,
                        "end": 1307
                    },
                    "flags": 32,
                    "start": 1293,
                    "end": 1308
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1308,
                    "end": 1310
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 1310,
                    "end": 1312
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 1312,
                    "end": 1314
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 1314,
                    "end": 1316
                },
                "flags": 32,
                "start": 1293,
                "end": 1316
            },
            "flags": 16,
            "start": 1293,
            "end": 1317
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 1319,
                            "end": 1327
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1329,
                            "end": 1329
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 1338,
                                "end": 1338
                            },
                            "flags": 32,
                            "start": 1330,
                            "end": 1345
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 1319,
                        "end": 1345
                    },
                    "flags": 32,
                    "start": 1317,
                    "end": 1346
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1346,
                    "end": 1348
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1348,
                    "end": 1350
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 1350,
                    "end": 1352
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 1352,
                    "end": 1354
                },
                "flags": 32,
                "start": 1317,
                "end": 1354
            },
            "flags": 16,
            "start": 1317,
            "end": 1355
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 121,
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "start": 1357,
                            "end": 1362
                        },
                        "name": null,
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "start": 1364,
                                "end": 1364
                            },
                            "flags": 1362,
                            "start": 32,
                            "end": 1365
                        },
                        "flags": 32,
                        "start": 1357,
                        "end": 1365
                    },
                    "flags": 32,
                    "start": 1355,
                    "end": 1366
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1366,
                    "end": 1368
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1368,
                    "end": 1370
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 1370,
                    "end": 1372
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 1372,
                    "end": 1380
                },
                "flags": 32,
                "start": 1355,
                "end": 1380
            },
            "flags": 16,
            "start": 1355,
            "end": 1381
        }
    ],
    "isModule": false,
    "source": "var a, b, c, d, e, f, g, x, y, z;\na = 1 + 2 /*1*/ * 3 / 5;\nb = (1 + 2/*2*/) * 3 / 5;\nc = (1 + 2) * (3 - 5);\nd = x | y /*3*/^ /*4*/z;\ne = (x | y) ^ z;\nf = \"a\" + (1 + 2) + /*5*/\"b\";\ng = \"a\" + (1 - 2) + \"b\";\na = true /*6*/|| /*7*/false && null;\nb = c == d || e != f;\nc = x instanceof y || x instanceof z;\nd = x == y && y != z;\na = !false;/*8*/\nb = !x instanceof Number;\nc = !(x instanceof /*9*/ Number);\nd = typeof a === 'boolean';\ne = !typeof a === 'boolean';\nf = !(typeof a === 'boolean');\nf = typeof ((/*10*/) => {/*11*/});\na = (1.1).toString();\nb = new A/*12*/(/*13*/).toString();\nc = new x.A().toString();\nd = new x.y().z(/*14*/);\nvar r = (/ab+c/i).exec('abc');\na = b ** 2 */*15*/ 3;\nc = (d ** 2) ** 3;\ne = f ** 2 ** 3;\ne = (+2) ** 3;\ne = 2 ** +3;\nf = a + (b = 3);\ng = 1 && (() => {});\ng = (() => {}) && 1;\ng = (1,/*16*/ +/*17*/ +2);\ng = (1, + +(2 + 3));\na = -/*18*/ --i;\nb = - - --i;\nc = + + ++j;/*19*/\nd = !!a;\ne = !+-+!a;\nf = -+-a++;\ng = b + -+-a++;\n(async function* () {/*20*/\n  await a + b;\n  await a + await b;\n  await (a =/*21*/ b);\n  (await f(/*22*/)).a;\n  await f(/*23*/).a;\n  yield 1;/*24*/\n  yield 1 + 2;\n  (yield 1) +/*25*/ (yield 2);\n  yield a = b;\n  const c = yield 3;\n});\n(function* () {\n  !(yield 1);\n});/*27*/\n!(() => {});\n(() => {}) ? a : b;\n({}) ?/*28*/ a /*29*/:/*30*/ b;\n(({}) ? a : b) ? c : d;\n(function ()/*31*/ {/*32*/}) ? a : b;\n(class {}) ? a :/*32*/ b;/*33*/\n/*34*/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 1394
}
```

### Printed

```javascript

var a, b, c, d, e, f, g, x, y, z;
a = 1 + 2 /*1*/ * 3 / 5;
b = (1 + 2 /*2*/) * 3 / 5;
c = (1 + 2) * (3 - 5);
d = x | y /*3*/ ^ z;
e = (x | y) ^ z;
f = "\"a\"" + (1 + 2) + "\"b\"";
g = "\"a\"" + (1 - 2) + "\"b\"";
a = true /*6*/ || false && null;
b = c == d || e != f;
c = x instanceof y || x instanceof z;
d = x == y && y != z;
a = !false; /*8*/
b = !x instanceof Number;
c = !(x instanceof Number);
d = typeof a === "'boolean'";
e = !typeof a === "'boolean'";
f = !(typeof a === "'boolean'");
f = typeof (() =>  {});
a = (1.1).toString();
b = new  A /*12*/().toString();
c = new  x().A().toString();
d = new  x().y().z();
var r = (/ab+c/i).exec("'abc'");
a = b ** 2 * 3;
c = (d ** 2) ** 3;
e = f ** 2 ** 3;
e = (+2) ** 3;
e = 2 ** +3;
f = a + (b = 3);
g = 1 && (() =>  {});
g = (() =>  {}) && 1;
g = (1, /*16*/ +/*17*/ +2);
g = (1, ++(2 + 3));
a = -/*18*/ --i;
b = ----i;
c = ++++j; /*19*/
d = !!a;
e = !+-+!a;
f = -+-a++;
g = b + -+-a++;
(async function * () {
    await a + b;
    await a + await b;
    await (a = b);
    (await f()).a;
    await f().a;
    yield 1; /*24*/
    yield 1 + 2;
    (yield 1) + (yield 2);
    yield a = b;
    const c = yield 3;
  });
(function * () {
    !(yield 1);
  }); /*27*/
!(() =>  {});
(() =>  {}) ? a : b;
({}) ? a /*29*/ : b;
(({}) ? a : b) ? c : d;
(function () {}) ? a : b;
(class  {}) ? a : b; /*33*/
```

### Diagnostics

```javascript
✔ No errors
```

