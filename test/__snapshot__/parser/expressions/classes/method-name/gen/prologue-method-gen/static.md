# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/method-name/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/method-name/gen/prologue-method-gen
> :: test: prologue-method-gen
> :: case: static
## Options

`````js
{}
`````
## Input

`````js
'use strict'; ({*static(x, y) {}});
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
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": {
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
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 25
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 26,
                                                "end": 28
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 224,
                                        "start": 24,
                                        "end": 29
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 31,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "start": 29,
                                        "end": 32
                                    },
                                    "flags": 160,
                                    "start": 23,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 32
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 16,
                        "end": 32
                    },
                    "flags": 48,
                    "start": 15,
                    "end": 33
                },
                "flags": 32,
                "start": 13,
                "end": 34
            },
            "flags": 16,
            "start": 13,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "'use strict'; ({*static(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

({ * static {} });
```

### Diagnostics

```javascript
✔ No errors
```

