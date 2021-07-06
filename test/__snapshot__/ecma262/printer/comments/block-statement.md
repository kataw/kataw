# Kataw parser test case

## Input

`````js

   {{{{
/*1*/
   }}}}


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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
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
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 8,
                                                    "end": 8
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 7,
                                                "end": 19
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 19
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 20
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 20
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 21
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 5,
                "end": 21
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 22
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
                            "transformFlags": 0,
                            "start": 26,
                            "end": 35
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 35
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 26,
                "end": 35
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 22,
            "end": 37
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
                            "transformFlags": 0,
                            "start": 40,
                            "end": 49
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 49
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 40,
                "end": 49
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 37,
            "end": 56
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
                            "transformFlags": 0,
                            "start": 59,
                            "end": 65
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 80
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 80,
                            "end": 88
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 95,
                            "end": 95
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 98,
                                "end": 98
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 96,
                            "end": 99
                        },
                        "returnType": null,
                        "flags": 144,
                        "transformFlags": 0,
                        "start": 59,
                        "end": 99
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 59,
                "end": 99
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 56,
            "end": 102
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 110,
                "end": 110
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 102,
            "end": 111
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
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 124,
                            "end": 135
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 124,
                        "end": 135
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 124,
                "end": 135
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 111,
            "end": 142
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
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 145,
                            "end": 156
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 145,
                        "end": 156
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 145,
                "end": 156
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 142,
            "end": 164
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
                            "transformFlags": 0,
                            "start": 210,
                            "end": 210
                        },
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 168,
                        "end": 211
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 211,
                            "end": 264
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 211,
                        "end": 264
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 168,
                "end": 264
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 164,
            "end": 271
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
                            "transformFlags": 0,
                            "start": 303,
                            "end": 307
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
                                        "transformFlags": 0,
                                        "start": 307,
                                        "end": 315
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "transformFlags": 128,
                                    "start": 307,
                                    "end": 315
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 307,
                            "end": 315
                        },
                        "flags": 33554448,
                        "transformFlags": 0,
                        "start": 303,
                        "end": 315
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 303,
                "end": 315
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 271,
            "end": 317
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
                            "transformFlags": 0,
                            "start": 349,
                            "end": 353
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
                                        "transformFlags": 0,
                                        "start": 353,
                                        "end": 361
                                    },
                                    "type": null,
                                    "initializer": null,
                                    "flags": 16,
                                    "transformFlags": 128,
                                    "start": 353,
                                    "end": 361
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 353,
                            "end": 361
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 349,
                        "end": 361
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 349,
                "end": 361
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 317,
            "end": 363
        }
    ],
    "isModule": false,
    "source": "\n   {{{{\n/*1*/\n   }}}}\n\n\n{  /*1*/ x }\n\n{  /*1*/ x /*2*/}\n\n{\nasync /*1*/ function /*2*/ x /*3*/() {}\n\n}\n\n// 1\n{} // 2\n// 3\n\n{  /*1*/\n\n\nx /*2*/}\n\n{  /*1*/\n\n\nx /*2*/\n}\n\n\n{\n\n\n/* 1*/\n/* 2*/\n/* 3*/\n/* 4*/\n\n\n/* 5 */ {} /* 6 */\n\n/* 7 */\n/* 8 */\n/* 9 */\n/* 10 */\n\n\n /*1*/ x /*2*/}\n\n// No duplicate comments #1\n\n{ let /*1*/ x }\n\n// No duplicate comments #2\n\n{ var /*1*/ x }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 363
}
```

### Printed

```javascript

{
  {
    {
      {}
    }
  }
}
{
  x;
}

{
  x;
}

{
  async function x() {}
}

{}

{
  x;
}

{
  x;
}

{
  {}
  x;
}

{
  let x;
}

{
  var x;
}

```

### Diagnostics

```javascript
✔ No errors
```

