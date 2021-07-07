# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/gen/arrow_body
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
                            "transformFlags": 0,
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
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "value": {
                                            "kind": 299,
                                            "importKeyword": {
                                                "kind": 37814364,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 15
                                            },
                                            "metaIdentifier": {
                                                "kind": 16595,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 20
                                            },
                                            "flags": 15,
                                            "transformFlags": 0,
                                            "start": 96,
                                            "end": 20
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 20
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 22
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 23
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
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
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 30
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 31
                                },
                                "statement": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 299,
                                        "importKeyword": {
                                            "kind": 37814364,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 38
                                        },
                                        "metaIdentifier": {
                                            "kind": 16595,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 43
                                        },
                                        "flags": 38,
                                        "transformFlags": 0,
                                        "start": 96,
                                        "end": 43
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 31,
                                    "end": 43
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 43
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 43
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 45
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "(x, { x: import.meta }) => { x: import.meta }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

