# Kataw parser test case

## Input

`````js
/*1*/ if /*1*/(x) {}

/*2*/ if /*3*/(x) {}

/*2*/ if /*3*/(/*4*/x/*5*/) {}

/*2*/ if /*3*/(/*4*/x/*5*/) {} else /* 6*/ {}

if (x) // aaa
{

}

if (x) // aaa
/*1*/
{

}

if (x) // aaa
/*1*/
{

} else /* 2*/ {} /* 3 */


if
/* 1*/
(x) {

}

// Hello!

if (x) {

while (/*1*/x/*2*/) {}

}

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 15,
                "end": 16
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 19
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 20
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 20,
                "end": 30
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 37,
                "end": 38
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 41
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 39,
                "end": 42
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 20,
            "end": 42
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 42,
                "end": 52
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 59,
                "end": 65
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 73,
                    "end": 73
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 71,
                "end": 74
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 42,
            "end": 74
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 74,
                "end": 84
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 91,
                "end": 97
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 105,
                    "end": 105
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 103,
                "end": 106
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 106,
                "end": 111
            },
            "alternate": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 120,
                    "end": 120
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 111,
                "end": 121
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 74,
            "end": 121
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 121,
                "end": 125
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 127,
                "end": 128
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 138,
                    "end": 138
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 129,
                "end": 141
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 121,
            "end": 141
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 141,
                "end": 145
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 147,
                "end": 148
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 164,
                    "end": 164
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 149,
                "end": 167
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 141,
            "end": 167
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 167,
                "end": 171
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 173,
                "end": 174
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 190,
                    "end": 190
                },
                "flags": 17,
                "transformFlags": 0,
                "start": 175,
                "end": 193
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 193,
                "end": 198
            },
            "alternate": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 207,
                    "end": 207
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 198,
                "end": 208
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 167,
            "end": 208
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 208,
                "end": 221
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 230,
                "end": 231
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 234,
                    "end": 234
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 232,
                "end": 237
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 208,
            "end": 237
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 237,
                "end": 252
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 254,
                "end": 255
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 258,
                                "end": 265
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 267,
                                "end": 273
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 281,
                                    "end": 281
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 279,
                                "end": 282
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 258,
                            "end": 282
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 258,
                    "end": 282
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 256,
                "end": 285
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 81,
            "transformFlags": 0,
            "start": 237,
            "end": 285
        }
    ],
    "isModule": false,
    "source": "/*1*/ if /*1*/(x) {}\n\n/*2*/ if /*3*/(x) {}\n\n/*2*/ if /*3*/(/*4*/x/*5*/) {}\n\n/*2*/ if /*3*/(/*4*/x/*5*/) {} else /* 6*/ {}\n\nif (x) // aaa\n{\n\n}\n\nif (x) // aaa\n/*1*/\n{\n\n}\n\nif (x) // aaa\n/*1*/\n{\n\n} else /* 2*/ {} /* 3 */\n\n\nif\n/* 1*/\n(x) {\n\n}\n\n// Hello!\n\nif (x) {\n\nwhile (/*1*/x/*2*/) {}\n\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 286
}
```

### Printed

```javascript
/*1*/ /*1*/ if (x) {}
/*2*/ if (x) {}

/*2*/ if (/*4*/ x /*5*/) {}

/*2*/ if (/*4*/ x /*5*/) {}
else /* 6*/  {}

if (x)// aaa
 {}

if (x)// aaa
 /*1*/ {}

if (x)// aaa
 /*1*/ {}
else /* 2*/  {} /* 3 */

if /* 1*/ (x) {}

// Hello!
if (x) {
    while (/*1*/ x /*2*/) {}
  }

```

### Diagnostics

```javascript
✔ No errors
```

