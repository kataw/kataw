# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/failing-cases/gen/function_body
> :: test: function body
> :: case: { x: import.meta }
## Options

`````js
{}
`````
## Input

`````js
function x() {{ x: import.meta }}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 163,
                                        "label": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "statement": {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 299,
                                                "importKeyword": {
                                                    "kind": 37814364,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 18,
                                                    "end": 25
                                                },
                                                "metaIdentifier": {
                                                    "kind": 16595,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 30
                                                },
                                                "flags": 25,
                                                "transformFlags": 0,
                                                "start": 96,
                                                "end": 30
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 18,
                                            "end": 30
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 30
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 30
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 32
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 33
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "function x() {{ x: import.meta }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 25, end: 32

```

