# Kataw parser test case

## Input

`````js
function *g(){ return x + f(yield f); }
`````

## Output

### Hybrid CST

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
            "generatorToken": {
                "kind": 67143222,
                "flags": 8,
                "start": 512,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 14,
                                "start": 0,
                                "end": 21
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 21,
                                    "end": 23
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 512,
                                    "start": 23,
                                    "end": 25
                                },
                                "right": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 768,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 229,
                                                "yieldKeyword": {
                                                    "kind": 8454253,
                                                    "flags": 28,
                                                    "start": 0,
                                                    "end": 33
                                                },
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 768,
                                                    "start": 33,
                                                    "end": 35
                                                },
                                                "flags": 256,
                                                "start": 28,
                                                "end": 35
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 28,
                                        "end": 35
                                    },
                                    "flags": 256,
                                    "start": 25,
                                    "end": 36
                                },
                                "flags": 256,
                                "start": 21,
                                "end": 36
                            },
                            "flags": 128,
                            "start": 0,
                            "end": 14
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 14,
                    "end": 37
                },
                "flags": 256,
                "start": 13,
                "end": 39
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "function *g(){ return x + f(yield f); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

