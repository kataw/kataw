# Kataw parser test case

## Input

`````js
function *g(){ async (x = {[yield y]: 1}) }
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
            "asteriskToken": {
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
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 14,
                                "end": 20
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 23
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "start": 28,
                                                                    "end": 33
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 33,
                                                                    "end": 35
                                                                },
                                                                "flags": 32,
                                                                "start": 28,
                                                                "end": 35
                                                            },
                                                            "flags": 32,
                                                            "start": 27,
                                                            "end": 36
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 37,
                                                            "end": 39
                                                        },
                                                        "flags": 32,
                                                        "start": 27,
                                                        "end": 39
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 27,
                                                "end": 39
                                            },
                                            "flags": 48,
                                            "start": 25,
                                            "end": 40
                                        },
                                        "flags": 32,
                                        "start": 22,
                                        "end": 40
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 268435490,
                            "start": 14,
                            "end": 41
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 41
                },
                "flags": 32,
                "start": 13,
                "end": 43
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "function *g(){ async (x = {[yield y]: 1}) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

function * g() {
  async(
    x = {[yield y]: 1}
  )
}
```

### Diagnostics

```javascript
✔ No errors
```

