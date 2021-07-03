# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/gen/parenthized_arrow
> :: test: parenthized arrow
> :: case: { __proto__: x, __proto__: y}
## Options

`````js
{}
`````
## Input

`````js
var f = ({ __proto__: x, __proto__: y}) => {};
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "__proto__",
                                                        "rawText": "__proto__",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 20
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 21,
                                                        "end": 23
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 10,
                                                    "end": 23
                                                },
                                                {
                                                    "kind": 329,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "__proto__",
                                                        "rawText": "__proto__",
                                                        "flags": 96,
                                                        "start": 24,
                                                        "end": 34
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 35,
                                                        "end": 37
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 24,
                                                    "end": 37
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 10,
                                            "end": 37
                                        },
                                        "flags": 52,
                                        "start": 9,
                                        "end": 38
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2,
                                "start": 9,
                                "end": 39
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 39,
                                "end": 42
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 42,
                                "end": 45
                            },
                            "flags": 34,
                            "start": 7,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 45
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "var f = ({ __proto__: x, __proto__: y}) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 38, end: 39

```

