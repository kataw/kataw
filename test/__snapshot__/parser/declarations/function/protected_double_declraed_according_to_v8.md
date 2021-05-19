# Kataw parser test case

## Input

`````js
function protected(){
  for(;;)
    switch(x){
      default:
    }
}

const protected = x, function arguments(){}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "protected",
                "rawText": "protected",
                "flags": 96,
                "start": 8,
                "end": 18
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 1,
                                "start": 21,
                                "end": 27
                            },
                            "initializer": null,
                            "condition": null,
                            "incrementor": null,
                            "statement": {
                                "kind": 160,
                                "switchKeyword": {
                                    "kind": 37757024,
                                    "flags": 1,
                                    "start": 31,
                                    "end": 42
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 43,
                                    "end": 44
                                },
                                "caseBlock": {
                                    "kind": 152,
                                    "clauses": [
                                        {
                                            "kind": 170,
                                            "defaultKeyword": {
                                                "kind": 4194387,
                                                "flags": 1,
                                                "start": 46,
                                                "end": 60
                                            },
                                            "statements": [],
                                            "flags": 16,
                                            "start": 46,
                                            "end": 61
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 45,
                                    "end": 67
                                },
                                "flags": 16,
                                "start": 31,
                                "end": 67
                            },
                            "flags": 16,
                            "start": 21,
                            "end": 67
                        }
                    ],
                    "flags": 33,
                    "start": 21,
                    "end": 67
                },
                "flags": 32,
                "start": 20,
                "end": 69
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 69
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 1,
                "start": 69,
                "end": 76
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "protected",
                            "rawText": "protected",
                            "flags": 96,
                            "start": 76,
                            "end": 86
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 88,
                            "end": 90
                        },
                        "flags": 16,
                        "start": 76,
                        "end": 90
                    }
                ],
                "flags": 16777232,
                "start": 76,
                "end": 91
            },
            "flags": 33554448,
            "start": 69,
            "end": 91
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 91,
                "end": 100
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "arguments",
                "rawText": "arguments",
                "flags": 96,
                "start": 100,
                "end": 110
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 110,
                "end": 112
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 113,
                    "end": 113
                },
                "flags": 32,
                "start": 112,
                "end": 114
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 91,
            "end": 114
        }
    ],
    "isModule": false,
    "source": "function protected(){\n  for(;;)\n    switch(x){\n      default:\n    }\n}\n\nconst protected = x, function arguments(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 114
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Trailing comma not allowed. - start: 91, end: 100

```

