# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/failing-cases/gen/arrow_body
> :: test: arrow body
> :: case: { x: import.meta }
## Options

`````js
{}
`````
## Input

`````js
(x, { x: import.meta }) => { x: import.meta }
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "value": {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 299,
                                                "importKeyword": {
                                                    "kind": 37814364,
                                                    "flags": 64,
                                                    "start": 8,
                                                    "end": 15
                                                },
                                                "metaIdentifier": {
                                                    "kind": 16595,
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 20
                                                },
                                                "flags": 15,
                                                "start": 96,
                                                "end": 20
                                            },
                                            "flags": 16,
                                            "start": 15,
                                            "end": 20
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 20
                            },
                            "flags": 48,
                            "start": 3,
                            "end": 22
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2,
                    "start": 1,
                    "end": 23
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 23,
                    "end": 26
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 163,
                                "label": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 30
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 30,
                                    "end": 31
                                },
                                "statement": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 299,
                                            "importKeyword": {
                                                "kind": 37814364,
                                                "flags": 64,
                                                "start": 31,
                                                "end": 38
                                            },
                                            "metaIdentifier": {
                                                "kind": 16595,
                                                "flags": 96,
                                                "start": 39,
                                                "end": 43
                                            },
                                            "flags": 38,
                                            "start": 96,
                                            "end": 43
                                        },
                                        "flags": 16,
                                        "start": 38,
                                        "end": 43
                                    },
                                    "flags": 16,
                                    "start": 31,
                                    "end": 43
                                },
                                "flags": 16,
                                "start": 28,
                                "end": 43
                            }
                        ],
                        "flags": 32,
                        "start": 28,
                        "end": 43
                    },
                    "flags": 32,
                    "start": 26,
                    "end": 45
                },
                "flags": 34,
                "start": 0,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "(x, { x: import.meta }) => { x: import.meta }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 15, end: 22
✖ The left hand side of the arrow is not destructible  - start: 23, end: 26
✖ Cannot use 'import.meta' outside a module - start: 38, end: 45

```

