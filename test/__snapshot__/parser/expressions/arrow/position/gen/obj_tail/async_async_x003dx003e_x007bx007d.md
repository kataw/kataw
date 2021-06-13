# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/position/gen/obj_tail
> :: test: obj tail
> :: case: async async => {}
## Options

`````js
{}
`````
## Input

`````js
x = {arrow: async async => {}}.y
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
                    "text": "x",
                    "rawText": "x",
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
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "arrow",
                                        "rawText": "arrow",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "right": {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 23,
                                            "end": 26
                                        },
                                        "typeParameters": null,
                                        "parameters": {
                                            "kind": 134299649,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 28,
                                                "end": 28
                                            },
                                            "flags": 32,
                                            "start": 26,
                                            "end": 29
                                        },
                                        "flags": 288,
                                        "start": 11,
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
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 31,
                        "end": 32
                    },
                    "flags": 536870944,
                    "start": 3,
                    "end": 32
                },
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "x = {arrow: async async => {}}.y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

x = { arrow: async async =>  {} }.y;
```

### Diagnostics

```javascript
✔ No errors
```

