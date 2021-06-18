# Kataw parser test case

## Input

`````js
function *g() {x={     ...yield x,    };}
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
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
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 16
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 16,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 224,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 64,
                                                    "start": 18,
                                                    "end": 26
                                                },
                                                "argument": {
                                                    "kind": 229,
                                                    "yieldKeyword": {
                                                        "kind": 8454253,
                                                        "flags": 64,
                                                        "start": 26,
                                                        "end": 31
                                                    },
                                                    "delegate": false,
                                                    "asteriskToken": null,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 31,
                                                        "end": 33
                                                    },
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 33
                                                },
                                                "flags": 32,
                                                "start": 18,
                                                "end": 33
                                            }
                                        ],
                                        "trailingComma": true,
                                        "flags": 16,
                                        "start": 18,
                                        "end": 34
                                    },
                                    "flags": 48,
                                    "start": 17,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 40
                },
                "flags": 32,
                "start": 13,
                "end": 41
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "function *g() {x={     ...yield x,    };}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

function * g() {
  x = { ...yield x };
}
```

### Diagnostics

```javascript
✔ No errors
```

