# Kataw parser test case

## Input

`````js
fnNumber =
  // Comment
  3;

fnNumber =

  // Comment

  3;

fnNumber =
  // Comment0
  // Comment1
  3;

fnNumber = /* comment */
  3;

fnNumber = /* comments0 */
  /* comments1 */
  3;

fnNumber =
  // Comment
  3;

var fnNumber =

  // Comment

  3;

var fnNumber =
  // Comment0
  // Comment1
  3;

var fnNumber = /* comment */
  3;

var fnNumber = /* comments0 */
  /* comments1 */
  3;

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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnNumber",
                    "rawText": "fnNumber",
                    "flags": 96,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "right": {
                    "kind": 201392130,
                    "text": 3,
                    "rawText": "3",
                    "flags": 97,
                    "start": 10,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnNumber",
                    "rawText": "fnNumber",
                    "flags": 97,
                    "start": 28,
                    "end": 38
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 38,
                    "end": 40
                },
                "right": {
                    "kind": 201392130,
                    "text": 3,
                    "rawText": "3",
                    "flags": 97,
                    "start": 40,
                    "end": 59
                },
                "flags": 32,
                "start": 28,
                "end": 59
            },
            "flags": 16,
            "start": 28,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnNumber",
                    "rawText": "fnNumber",
                    "flags": 97,
                    "start": 60,
                    "end": 70
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 70,
                    "end": 72
                },
                "right": {
                    "kind": 201392130,
                    "text": 3,
                    "rawText": "3",
                    "flags": 97,
                    "start": 72,
                    "end": 104
                },
                "flags": 32,
                "start": 60,
                "end": 104
            },
            "flags": 16,
            "start": 60,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnNumber",
                    "rawText": "fnNumber",
                    "flags": 97,
                    "start": 105,
                    "end": 115
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 115,
                    "end": 117
                },
                "right": {
                    "kind": 201392130,
                    "text": 3,
                    "rawText": "3",
                    "flags": 97,
                    "start": 117,
                    "end": 135
                },
                "flags": 32,
                "start": 105,
                "end": 135
            },
            "flags": 16,
            "start": 105,
            "end": 136
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnNumber",
                    "rawText": "fnNumber",
                    "flags": 97,
                    "start": 136,
                    "end": 146
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 146,
                    "end": 148
                },
                "right": {
                    "kind": 201392130,
                    "text": 3,
                    "rawText": "3",
                    "flags": 97,
                    "start": 148,
                    "end": 186
                },
                "flags": 32,
                "start": 136,
                "end": 186
            },
            "flags": 16,
            "start": 136,
            "end": 187
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fnNumber",
                    "rawText": "fnNumber",
                    "flags": 97,
                    "start": 187,
                    "end": 197
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 197,
                    "end": 199
                },
                "right": {
                    "kind": 201392130,
                    "text": 3,
                    "rawText": "3",
                    "flags": 97,
                    "start": 199,
                    "end": 216
                },
                "flags": 32,
                "start": 187,
                "end": 216
            },
            "flags": 16,
            "start": 187,
            "end": 217
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 217,
                "end": 222
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fnNumber",
                            "rawText": "fnNumber",
                            "flags": 96,
                            "start": 222,
                            "end": 231
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 97,
                            "start": 233,
                            "end": 252
                        },
                        "flags": 16,
                        "start": 222,
                        "end": 252
                    }
                ],
                "flags": 16,
                "start": 222,
                "end": 252
            },
            "flags": 16,
            "start": 217,
            "end": 253
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 253,
                "end": 258
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fnNumber",
                            "rawText": "fnNumber",
                            "flags": 96,
                            "start": 258,
                            "end": 267
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 97,
                            "start": 269,
                            "end": 301
                        },
                        "flags": 16,
                        "start": 258,
                        "end": 301
                    }
                ],
                "flags": 16,
                "start": 258,
                "end": 301
            },
            "flags": 16,
            "start": 253,
            "end": 302
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 302,
                "end": 307
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fnNumber",
                            "rawText": "fnNumber",
                            "flags": 96,
                            "start": 307,
                            "end": 316
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 97,
                            "start": 318,
                            "end": 336
                        },
                        "flags": 16,
                        "start": 307,
                        "end": 336
                    }
                ],
                "flags": 16,
                "start": 307,
                "end": 336
            },
            "flags": 16,
            "start": 302,
            "end": 337
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 337,
                "end": 342
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fnNumber",
                            "rawText": "fnNumber",
                            "flags": 96,
                            "start": 342,
                            "end": 351
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 97,
                            "start": 353,
                            "end": 391
                        },
                        "flags": 16,
                        "start": 342,
                        "end": 391
                    }
                ],
                "flags": 16,
                "start": 342,
                "end": 391
            },
            "flags": 16,
            "start": 337,
            "end": 392
        }
    ],
    "isModule": false,
    "source": "fnNumber =\n  // Comment\n  3;\n\nfnNumber =\n\n  // Comment\n\n  3;\n\nfnNumber =\n  // Comment0\n  // Comment1\n  3;\n\nfnNumber = /* comment */\n  3;\n\nfnNumber = /* comments0 */\n  /* comments1 */\n  3;\n\nfnNumber =\n  // Comment\n  3;\n\nvar fnNumber =\n\n  // Comment\n\n  3;\n\nvar fnNumber =\n  // Comment0\n  // Comment1\n  3;\n\nvar fnNumber = /* comment */\n  3;\n\nvar fnNumber = /* comments0 */\n  /* comments1 */\n  3;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 393
}
```

### Printed

```javascript

fnNumber = 
 // Comment
3;
fnNumber = 
 // Comment
3;
fnNumber = 
 // Comment0
// Comment1
3;
fnNumber =/* comment */ 3;
fnNumber =/* comments0 */ 
 /* comments1 */
3;
fnNumber = 
 // Comment
3;
var  fnNumber = 
 // Comment
3 ;
var  fnNumber = 
 // Comment0
// Comment1
3 ;
var  fnNumber =/* comment */ 3 ;
var  fnNumber =/* comments0 */ 
 /* comments1 */
3 ;

```

### Diagnostics

```javascript
✔ No errors
```

