# Kataw parser test case

## Input

`````js
var x = { *test () { yield *v } };
`````

## Output

### Hybrid CST

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
                "flags": 768,
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
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "test",
                                            "rawText": "test",
                                            "flags": 768,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 1280,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "type": null,
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
                                                                "flags": 768,
                                                                "start": 20,
                                                                "end": 26
                                                            },
                                                            "delegate": true,
                                                            "asteriskToken": {
                                                                "kind": 67143222,
                                                                "flags": 768,
                                                                "start": 26,
                                                                "end": 28
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "v",
                                                                "rawText": "v",
                                                                "flags": 768,
                                                                "start": 28,
                                                                "end": 29
                                                            },
                                                            "flags": 256,
                                                            "start": 20,
                                                            "end": 29
                                                        },
                                                        "flags": 128,
                                                        "start": 20,
                                                        "end": 29
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 20,
                                                "end": 29
                                            },
                                            "flags": 256,
                                            "start": 18,
                                            "end": 31
                                        },
                                        "flags": 1280,
                                        "start": 15,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 9,
                                "end": 31
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 33
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 33
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "var x = { *test () { yield *v } };",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

