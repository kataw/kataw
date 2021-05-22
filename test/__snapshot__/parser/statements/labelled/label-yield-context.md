# Kataw parser test case

## Input

`````js
function * x () {
    y: yield;
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 10,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 17,
                                "end": 23
                            },
                            "labels": [
                                {
                                    "kind": 256,
                                    "label": "y",
                                    "iterationStatement": false,
                                    "flags": 17,
                                    "start": 17,
                                    "end": 23
                                }
                            ],
                            "colonToken": {
                                "kind": 21,
                                "flags": 0,
                                "start": 23,
                                "end": 24
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 0,
                                        "start": 24,
                                        "end": 30
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 24,
                                    "end": 30
                                },
                                "flags": 16,
                                "start": 24,
                                "end": 31
                            },
                            "flags": 17,
                            "start": 17,
                            "end": 31
                        }
                    ],
                    "flags": 33,
                    "start": 17,
                    "end": 31
                },
                "flags": 32,
                "start": 15,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "function * x () {\n    y: yield;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

function * x() {
  y:  ;
}
```

### Diagnostics

```javascript
✔ No errors
```

