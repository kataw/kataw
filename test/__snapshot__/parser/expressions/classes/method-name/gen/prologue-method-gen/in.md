# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: prologue-method-gen
> :: case: in
## Input

`````js
'use strict'; ({*in(x, y) {}});
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 17
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "in",
                                        "rawText": "in",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 21
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 20,
                                                "end": 21
                                            },
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 24
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 22,
                                                "end": 24
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "start": 20,
                                        "end": 25
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 25,
                                        "end": 28
                                    },
                                    "flags": 160,
                                    "start": 19,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 16,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 29
                },
                "flags": 32,
                "start": 13,
                "end": 30
            },
            "flags": 16,
            "start": 13,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "'use strict'; ({*in(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

({  });
```

### Diagnostics

```javascript
✔ No errors
```

