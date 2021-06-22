# Kataw parser test case

## Input

`````js

{  /*1*/ x }

{  /*1*/ x /*2*/}

{
async /*1*/ function /*2*/ x /*3*/() {}

}

// 1
{} // 2
// 3

{  /*1*/


x /*2*/}

{  /*1*/


x /*2*/
}


{


/* 1*/
/* 2*/
/* 3*/
/* 4*/


/* 5 */ {} /* 6 */

/* 7 */
/* 8 */
/* 9 */
/* 10 */


 /*1*/ x /*2*/}

// No duplicate comments #1

{ let /*1*/ x }

// No duplicate comments #2

{ var /*1*/ x }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 2,
                            "end": 11
                        },
                        "flags": 16,
                        "start": 2,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 2,
                "end": 11
            },
            "flags": 17,
            "start": 0,
            "end": 13
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 16,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 16,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 16,
                "end": 25
            },
            "flags": 17,
            "start": 13,
            "end": 32
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 65,
                            "start": 35,
                            "end": 41
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 41,
                            "end": 56
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 56,
                            "end": 64
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 64,
                            "end": 72
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 74,
                                "end": 74
                            },
                            "flags": 32,
                            "start": 72,
                            "end": 75
                        },
                        "returnType": null,
                        "flags": 144,
                        "start": 35,
                        "end": 75
                    }
                ],
                "flags": 17,
                "start": 35,
                "end": 75
            },
            "flags": 17,
            "start": 32,
            "end": 78
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 86,
                "end": 86
            },
            "flags": 17,
            "start": 78,
            "end": 87
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 100,
                            "end": 111
                        },
                        "flags": 16,
                        "start": 100,
                        "end": 111
                    }
                ],
                "flags": 17,
                "start": 100,
                "end": 111
            },
            "flags": 17,
            "start": 87,
            "end": 118
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 121,
                            "end": 132
                        },
                        "flags": 16,
                        "start": 121,
                        "end": 132
                    }
                ],
                "flags": 17,
                "start": 121,
                "end": 132
            },
            "flags": 17,
            "start": 118,
            "end": 140
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 186,
                            "end": 186
                        },
                        "flags": 17,
                        "start": 144,
                        "end": 187
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 187,
                            "end": 240
                        },
                        "flags": 16,
                        "start": 187,
                        "end": 240
                    }
                ],
                "flags": 17,
                "start": 144,
                "end": 240
            },
            "flags": 17,
            "start": 140,
            "end": 247
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 80,
                            "start": 279,
                            "end": 283
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 283,
                                        "end": 291
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 283,
                                    "end": 291
                                }
                            ],
                            "flags": 16,
                            "start": 283,
                            "end": 291
                        },
                        "flags": 33554448,
                        "start": 279,
                        "end": 291
                    }
                ],
                "flags": 16,
                "start": 279,
                "end": 291
            },
            "flags": 17,
            "start": 247,
            "end": 293
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 80,
                            "start": 325,
                            "end": 329
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 329,
                                        "end": 337
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "start": 329,
                                    "end": 337
                                }
                            ],
                            "flags": 16,
                            "start": 329,
                            "end": 337
                        },
                        "flags": 16,
                        "start": 325,
                        "end": 337
                    }
                ],
                "flags": 16,
                "start": 325,
                "end": 337
            },
            "flags": 17,
            "start": 293,
            "end": 339
        }
    ],
    "isModule": false,
    "source": "\n{  /*1*/ x }\n\n{  /*1*/ x /*2*/}\n\n{\nasync /*1*/ function /*2*/ x /*3*/() {}\n\n}\n\n// 1\n{} // 2\n// 3\n\n{  /*1*/\n\n\nx /*2*/}\n\n{  /*1*/\n\n\nx /*2*/\n}\n\n\n{\n\n\n/* 1*/\n/* 2*/\n/* 3*/\n/* 4*/\n\n\n/* 5 */ {} /* 6 */\n\n/* 7 */\n/* 8 */\n/* 9 */\n/* 10 */\n\n\n /*1*/ x /*2*/}\n\n// No duplicate comments #1\n\n{ let /*1*/ x }\n\n// No duplicate comments #2\n\n{ var /*1*/ x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 339
}
```

### Printed

```javascript

{
  x;
}
{
  x; /*2*/
}
{
  async /*1*/ function x /*3*/() {}
}
// 1
{
} // 2

// 3
{
  x; /*2*/
}
{
  x; /*2*/
}
{
  /* 1*/
  /* 2*/
  /* 3*/
  /* 4*/
  /* 5 */ {
  } /* 6 */
  /* 7 */
  /* 8 */
  /* 9 */
  /* 10 */
  /*1*/ x; /*2*/
}
// No duplicate comments #1
{
  let /*1*/ /*1*/ x;
}
// No duplicate comments #2
{
  var /*1*/ /*1*/ x;
}
```

### Diagnostics

```javascript
✔ No errors
```

