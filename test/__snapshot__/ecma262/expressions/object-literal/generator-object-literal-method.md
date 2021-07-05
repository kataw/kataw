# Kataw parser test case

## Input

`````js
var x = { *test () { yield *v } };
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
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
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "test",
                                                "rawText": "test",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 15
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "start": 17,
                                                "end": 18
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "start": 20,
                                                                    "end": 26
                                                                },
                                                                "delegate": true,
                                                                "asteriskToken": {
                                                                    "kind": 67143222,
                                                                    "flags": 64,
                                                                    "start": 26,
                                                                    "end": 28
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "v",
                                                                    "rawText": "v",
                                                                    "flags": 96,
                                                                    "start": 28,
                                                                    "end": 29
                                                                },
                                                                "flags": 32,
                                                                "start": 20,
                                                                "end": 29
                                                            },
                                                            "flags": 16,
                                                            "start": 20,
                                                            "end": 29
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 20,
                                                    "end": 29
                                                },
                                                "flags": 32,
                                                "start": 18,
                                                "end": 31
                                            },
                                            "flags": 160,
                                            "start": 15,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "start": 9,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 9,
                                "end": 31
                            },
                            "flags": 48,
                            "start": 7,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "var x = { *test () { yield *v } };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

var x = {* test() {
      yield * v;
    }};
```

### Diagnostics

```javascript
✔ No errors
```

