# Kataw parser test case

## Input

`````js
function getSecurity(level) {
    switch(level){
        case 0: /*Zero*/
        case 1: /*One*/
        case 2: /*two*/
            // Leading comments
            return "Hi";
        case 3: /*three*/
        case 4: /*four*/
            return "hello";
        case 5: /*five*/
        default:  /*six*/
            return "world";
    }

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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "getSecurity",
                "rawText": "getSecurity",
                "flags": 96,
                "start": 8,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
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
                "start": 20,
                "end": 27
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
                                            "end": 86
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 86,
                                            "end": 88
                                        },
                                        "statements": [],
                                        "flags": 16,
                                        "start": 64,
                                        "end": 89
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "start": 89,
                                            "end": 110
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 110,
                                            "end": 112
                                        },
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 113,
                                                    "end": 172
                                                },
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "Hi",
                                                    "rawText": "\"Hi\"",
                                                    "flags": 96,
                                                    "start": 172,
                                                    "end": 177
                                                },
                                                "flags": 81,
                                                "start": 113,
                                                "end": 178
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 89,
                                        "end": 178
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "start": 178,
                                            "end": 191
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 191,
                                            "end": 193
                                        },
                                        "statements": [],
                                        "flags": 16,
                                        "start": 178,
                                        "end": 194
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "start": 194,
                                            "end": 217
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 96,
                                            "start": 217,
                                            "end": 219
                                        },
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 220,
                                                    "end": 248
                                                },
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "hello",
                                                    "rawText": "\"hello\"",
                                                    "flags": 96,
                                                    "start": 248,
                                                    "end": 256
                                                },
                                                "flags": 81,
                                                "start": 220,
                                                "end": 257
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 194,
                                        "end": 257
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "start": 257,
                                            "end": 270
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 5,
                                            "rawText": "5",
                                            "flags": 96,
                                            "start": 270,
                                            "end": 272
                                        },
                                        "statements": [],
                                        "flags": 16,
                                        "start": 257,
                                        "end": 273
                                    },
                                    {
                                        "kind": 170,
                                        "defaultKeyword": {
                                            "kind": 4194387,
                                            "flags": 81,
                                            "start": 273,
                                            "end": 298
                                        },
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "start": 299,
                                                    "end": 327
                                                },
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "world",
                                                    "rawText": "\"world\"",
                                                    "flags": 96,
                                                    "start": 327,
                                                    "end": 335
                                                },
                                                "flags": 81,
                                                "start": 299,
                                                "end": 336
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 273,
                                        "end": 336
                                    }
                                ],
                                "flags": 16,
                                "start": 47,
                                "end": 342
                            },
                            "flags": 81,
                            "start": 29,
                            "end": 342
                        }
                    ],
                    "flags": 33,
                    "start": 29,
                    "end": 342
                },
                "flags": 32,
                "start": 27,
                "end": 345
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 345
        }
    ],
    "isModule": false,
    "source": "function getSecurity(level) {\n    switch(level){\n        case 0: /*Zero*/\n        case 1: /*One*/\n        case 2: /*two*/\n            // Leading comments\n            return \"Hi\";\n        case 3: /*three*/\n        case 4: /*four*/\n            return \"hello\";\n        case 5: /*five*/\n        default:  /*six*/\n            return \"world\";\n    }\n\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 345
}
```

### Printed

```javascript

function getSecurity(level) {
  switch(level) {
    case 0:
       /*Zero*/
    /*Zero*/ case 1:
       /*One*/
    /*One*/ case 2:
      // Leading comments
      return  "\"Hi\"";
    case 3:
       /*three*/
    /*three*/ case 4:
      return  "\"hello\"";
    case 5:
       /*five*/
    /*five*/ default
      return  "\"world\"";
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

