# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/method-name/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/method-name/gen/method-gen
> :: test: method-gen
> :: case: do
## Options

`````js
{}
`````
## Input

`````js
({*do(x, y) {}});
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
                                    "start": 2,
                                    "end": 3
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "do",
                                        "rawText": "do",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 5
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
                                                "start": 6,
                                                "end": 7
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 8,
                                                "end": 10
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 224,
                                        "start": 6,
                                        "end": 11
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 13,
                                            "end": 13
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 14
                                    },
                                    "flags": 160,
                                    "start": 5,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 14
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "({*do(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

({ * do {} });
```

### Diagnostics

```javascript
✔ No errors
```

