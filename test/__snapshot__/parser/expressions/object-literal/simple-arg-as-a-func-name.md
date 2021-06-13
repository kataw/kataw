# Kataw parser test case

## Input

`````js
o = {f(x) { function x() {} }}
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
                    "text": "o",
                    "rawText": "o",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 7,
                                                "end": 8
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 96,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 176,
                                                    "declareKeyword": null,
                                                    "asyncKeyword": null,
                                                    "functionKeyword": {
                                                        "kind": 37822554,
                                                        "flags": 64,
                                                        "start": 11,
                                                        "end": 20
                                                    },
                                                    "generatorToken": null,
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 20,
                                                        "end": 22
                                                    },
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 22,
                                                        "end": 24
                                                    },
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "flags": 32,
                                                            "start": 26,
                                                            "end": 26
                                                        },
                                                        "flags": 32,
                                                        "start": 24,
                                                        "end": 27
                                                    },
                                                    "typeParameters": null,
                                                    "returnType": null,
                                                    "flags": 16,
                                                    "start": 11,
                                                    "end": 27
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 11,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 29
                    },
                    "flags": 48,
                    "start": 3,
                    "end": 30
                },
                "flags": 32,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "o = {f(x) { function x() {} }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

o = { f(x) {
    function x() {}
  } };
```

### Diagnostics

```javascript
✔ No errors
```

