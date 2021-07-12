# Kataw parser test case

## Input

`````js
/*========= All on same line =========*/
a;
/*1*//*2*//*3*/
b;

a;/*1*//*2*//*3*/
b;

a;
/*1*//*2*//*3*/b;

a;
/*
1*//*2*//*3
*/
b;

a;/*
1*//*2*//*3
*/
b;

a;/*
1*//*2*//*3
*/b;

/*========= First two on same line =========*/
a;
/*1*//*2*/
/*3*/
b;

a;/*1*//*2*/
/*3*/
b;

a;
/*1*//*2*/
/*3*/b;

a;
/*
1*//*2*/
/*3
*/
b;

a;/*
1*//*2*/
/*3
*/
b;

a;/*
1*//*2*/
/*3
*/b;

/*========= Last two on same line =========*/
a;
/*1*/
/*2*//*3*/
b;

a;/*1*/
/*2*//*3*/
b;

a;
/*1*/
/*2*//*3*/b;

a;
/*
1*/
/*2*//*3
*/
b;

a;/*
1*/
/*2*//*3
*/
b;

a;/*
1*/
/*2*//*3
*/b;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 43,
                "end": 61
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 43,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 62,
                "end": 65
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 62,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 66,
                "end": 83
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 66,
            "end": 84
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 84,
                "end": 87
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 84,
            "end": 88
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 88,
                "end": 105
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 88,
            "end": 106
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 106,
                "end": 109
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 106,
            "end": 110
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 110,
                "end": 130
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 110,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 131,
                "end": 134
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 131,
            "end": 135
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 135,
                "end": 154
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 135,
            "end": 155
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 155,
                "end": 158
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 155,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 159,
                "end": 177
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 159,
            "end": 178
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 178,
                "end": 228
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 178,
            "end": 229
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 229,
                "end": 248
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 229,
            "end": 249
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 249,
                "end": 252
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 249,
            "end": 253
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 253,
                "end": 271
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 253,
            "end": 272
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 272,
                "end": 275
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 272,
            "end": 276
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 276,
                "end": 294
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 276,
            "end": 295
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 295,
                "end": 298
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 295,
            "end": 299
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 299,
                "end": 320
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 299,
            "end": 321
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 321,
                "end": 324
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 321,
            "end": 325
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 325,
                "end": 345
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 325,
            "end": 346
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 346,
                "end": 349
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 346,
            "end": 350
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 350,
                "end": 369
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 350,
            "end": 370
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 370,
                "end": 419
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 370,
            "end": 420
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 420,
                "end": 439
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 420,
            "end": 440
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 440,
                "end": 443
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 440,
            "end": 444
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 444,
                "end": 462
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 444,
            "end": 463
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 463,
                "end": 466
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 463,
            "end": 467
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 467,
                "end": 485
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 467,
            "end": 486
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 486,
                "end": 489
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 486,
            "end": 490
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 490,
                "end": 511
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 490,
            "end": 512
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 512,
                "end": 515
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 512,
            "end": 516
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 516,
                "end": 536
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 516,
            "end": 537
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 537,
                "end": 540
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 537,
            "end": 541
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 541,
                "end": 560
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 541,
            "end": 561
        }
    ],
    "isModule": false,
    "source": "/*========= All on same line =========*/\na;\n/*1*//*2*//*3*/\nb;\n\na;/*1*//*2*//*3*/\nb;\n\na;\n/*1*//*2*//*3*/b;\n\na;\n/*\n1*//*2*//*3\n*/\nb;\n\na;/*\n1*//*2*//*3\n*/\nb;\n\na;/*\n1*//*2*//*3\n*/b;\n\n/*========= First two on same line =========*/\na;\n/*1*//*2*/\n/*3*/\nb;\n\na;/*1*//*2*/\n/*3*/\nb;\n\na;\n/*1*//*2*/\n/*3*/b;\n\na;\n/*\n1*//*2*/\n/*3\n*/\nb;\n\na;/*\n1*//*2*/\n/*3\n*/\nb;\n\na;/*\n1*//*2*/\n/*3\n*/b;\n\n/*========= Last two on same line =========*/\na;\n/*1*/\n/*2*//*3*/\nb;\n\na;/*1*/\n/*2*//*3*/\nb;\n\na;\n/*1*/\n/*2*//*3*/b;\n\na;\n/*\n1*/\n/*2*//*3\n*/\nb;\n\na;/*\n1*/\n/*2*//*3\n*/\nb;\n\na;/*\n1*/\n/*2*//*3\n*/b;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 561
}
```

### Printed

```javascript
/*========= All on same line =========*/
a;
/*1*/ /*2*/ /*3*/
b;

a; /*1*/ /*2*/ /*3*/

b;

a;

/*1*/ /*2*/ /*3*/ b;

a;

/*
1*/ /*2*/ /*3
*/
b;

a; /*
1*/ /*2*/ /*3
*/

b;

a; /*
1*/ /*2*/ /*3
*/

b;

/*========= First two on same line =========*/
a;

/*1*/ /*2*/
/*3*/
b;

a; /*1*/ /*2*/

/*3*/
b;

a;

/*1*/ /*2*/
/*3*/ b;

a;

/*
1*/ /*2*/
/*3
*/
b;

a; /*
1*/ /*2*/

/*3
*/
b;

a; /*
1*/ /*2*/

/*3
*/ b;

/*========= Last two on same line =========*/
a;

/*1*/
/*2*/ /*3*/
b;

a; /*1*/

/*2*/ /*3*/
b;

a;

/*1*/
/*2*/ /*3*/ b;

a;

/*
1*/
/*2*/ /*3
*/
b;

a; /*
1*/

/*2*/ /*3
*/
b;

a; /*
1*/

/*2*/ /*3
*/ b;

```

### Diagnostics

```javascript
✔ No errors
```

