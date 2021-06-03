# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/classes/method-name/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\method-name\gen\prologue-method-gen
> :: test: prologue-method-gen
> :: case: await
## Input

`````js
'use strict'; ({*await(x, y) {}});
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
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 22
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
                                                "start": 23,
                                                "end": 24
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 27
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 224,
                                        "start": 23,
                                        "end": 28
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 30,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "start": 28,
                                        "end": 31
                                    },
                                    "flags": 160,
                                    "start": 22,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 16,
                        "end": 31
                    },
                    "flags": 48,
                    "start": 15,
                    "end": 32
                },
                "flags": 32,
                "start": 13,
                "end": 33
            },
            "flags": 16,
            "start": 13,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "'use strict'; ({*await(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

({ * await(x, y) {} });
```

### Diagnostics

```javascript
✔ No errors
```

