# Kataw parser test case

## Input

`````js
function getSecurity(level) {
    switch(level){
        case 0: // Zero
        case 1: // one
        case 2: // two
            // Leading comments
            return "Hi";
        case 3: // three
        case 4: // four
            return "hello";
        case 5: // five
        default: // default
            return "world";
        // Comment After
    } /*Comment 1*/ // Comment After 1
    // Comment After 2
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "getSecurity",
                "rawText": "getSecurity",
                "flags": 96,
                "start": 8,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "level",
                        "rawText": "level",
                        "flags": 96,
                        "start": 21,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 21,
                "end": 26
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 160,
                            "switchKeyword": {
                                "kind": 37757024,
                                "flags": 81,
                                "start": 29,
                                "end": 40
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "level",
                                "rawText": "level",
                                "flags": 96,
                                "start": 41,
                                "end": 46
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": {
                                    "kind": 383,
                                    "clauses": [
                                        {
                                            "kind": 175,
                                            "caseKeyword": {
                                                "kind": 4194382,
                                                "flags": 81,
                                                "start": 48,
                                                "end": 61
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 61,
                                                "end": 63
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 63,
                                                "end": 64
                                            },
                                            "statements": [],
                                            "flags": 16,
                                            "start": 48,
                                            "end": 64
                                        },
                                        {
                                            "kind": 175,
                                            "caseKeyword": {
                                                "kind": 4194382,
                                                "flags": 81,
                                                "start": 64,
                                                "end": 85
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 85,
                                                "end": 87
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 87,
                                                "end": 88
                                            },
                                            "statements": [],
                                            "flags": 16,
                                            "start": 64,
                                            "end": 88
                                        },
                                        {
                                            "kind": 175,
                                            "caseKeyword": {
                                                "kind": 4194382,
                                                "flags": 81,
                                                "start": 88,
                                                "end": 108
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 108,
                                                "end": 110
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 110,
                                                "end": 111
                                            },
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 81,
                                                        "start": 111,
                                                        "end": 169
                                                    },
                                                    "expression": {
                                                        "kind": 201392131,
                                                        "text": "Hi",
                                                        "rawText": "\"Hi\"",
                                                        "flags": 96,
                                                        "start": 169,
                                                        "end": 174
                                                    },
                                                    "flags": 81,
                                                    "start": 111,
                                                    "end": 175
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 88,
                                            "end": 175
                                        },
                                        {
                                            "kind": 175,
                                            "caseKeyword": {
                                                "kind": 4194382,
                                                "flags": 81,
                                                "start": 175,
                                                "end": 188
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 96,
                                                "start": 188,
                                                "end": 190
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 190,
                                                "end": 191
                                            },
                                            "statements": [],
                                            "flags": 16,
                                            "start": 175,
                                            "end": 191
                                        },
                                        {
                                            "kind": 175,
                                            "caseKeyword": {
                                                "kind": 4194382,
                                                "flags": 81,
                                                "start": 191,
                                                "end": 213
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 4,
                                                "rawText": "4",
                                                "flags": 96,
                                                "start": 213,
                                                "end": 215
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 215,
                                                "end": 216
                                            },
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 81,
                                                        "start": 216,
                                                        "end": 243
                                                    },
                                                    "expression": {
                                                        "kind": 201392131,
                                                        "text": "hello",
                                                        "rawText": "\"hello\"",
                                                        "flags": 96,
                                                        "start": 243,
                                                        "end": 251
                                                    },
                                                    "flags": 81,
                                                    "start": 216,
                                                    "end": 252
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 191,
                                            "end": 252
                                        },
                                        {
                                            "kind": 175,
                                            "caseKeyword": {
                                                "kind": 4194382,
                                                "flags": 81,
                                                "start": 252,
                                                "end": 265
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 96,
                                                "start": 265,
                                                "end": 267
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 267,
                                                "end": 268
                                            },
                                            "statements": [],
                                            "flags": 16,
                                            "start": 252,
                                            "end": 268
                                        },
                                        {
                                            "kind": 170,
                                            "defaultKeyword": {
                                                "kind": 4194387,
                                                "flags": 81,
                                                "start": 268,
                                                "end": 292
                                            },
                                            "colonToken": {
                                                "kind": 21,
                                                "flags": 64,
                                                "start": 292,
                                                "end": 293
                                            },
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 81,
                                                        "start": 293,
                                                        "end": 323
                                                    },
                                                    "expression": {
                                                        "kind": 201392131,
                                                        "text": "world",
                                                        "rawText": "\"world\"",
                                                        "flags": 96,
                                                        "start": 323,
                                                        "end": 331
                                                    },
                                                    "flags": 81,
                                                    "start": 293,
                                                    "end": 332
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 268,
                                            "end": 332
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 48,
                                    "end": 332
                                },
                                "flags": 16,
                                "start": 47,
                                "end": 363
                            },
                            "flags": 81,
                            "start": 29,
                            "end": 363
                        }
                    ],
                    "flags": 33,
                    "start": 29,
                    "end": 363
                },
                "flags": 32,
                "start": 27,
                "end": 421
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 421
        }
    ],
    "isModule": false,
    "source": "function getSecurity(level) {\n    switch(level){\n        case 0: // Zero\n        case 1: // one\n        case 2: // two\n            // Leading comments\n            return \"Hi\";\n        case 3: // three\n        case 4: // four\n            return \"hello\";\n        case 5: // five\n        default: // default\n            return \"world\";\n        // Comment After\n    } /*Comment 1*/ // Comment After 1\n    // Comment After 2\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 421
}
```

### Printed

```javascript

function getSecurity(level) {
  switch (level) {
    case 0: 
    // Zero
    case 1: 
    // one
    case 2: 
       // Leading comments
      return '"Hi"';
    case 3: 
    // three
    case 4: 
      return '"hello"';
    case 5: 
    // five
    default: 
      return '"world"';
  }/*Comment 1*/ // Comment After 1
 // Comment After 2
}

```

### Diagnostics

```javascript
✔ No errors
```

