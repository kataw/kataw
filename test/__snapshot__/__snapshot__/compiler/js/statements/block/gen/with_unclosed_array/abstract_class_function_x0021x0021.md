# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw_dev\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\statements\block\gen\with_unclosed_array
> :: test: with unclosed array
> :: case: abstract class function !!
## Input

`````js
{[ abstract class function !!
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{[ abstract class function !!",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 196712,
                                            "text": "abstract",
                                            "rawText": "abstract",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 2,
                                            "end": 11
                                        },
                                        {
                                            "kind": 82483,
                                            "name": null,
                                            "typeParameters": null,
                                            "classHeritage": null,
                                            "implementClauses": null,
                                            "members": {
                                                "kind": 50,
                                                "elements": [],
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 11,
                                                "end": 11
                                            },
                                            "decorators": null,
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 11,
                                            "end": 17
                                        },
                                        {
                                            "kind": 66206,
                                            "expression": {
                                                "kind": 66206,
                                                "expression": {
                                                    "kind": 8456285,
                                                    "name": null,
                                                    "formalParameters": {
                                                        "kind": 90,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 2,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 26,
                                                        "end": 26
                                                    },
                                                    "contents": {
                                                        "kind": 91,
                                                        "functionStatementList": {
                                                            "kind": 94,
                                                            "statements": [],
                                                            "multiline": false,
                                                            "flags": 2,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 26,
                                                            "end": 26
                                                        },
                                                        "flags": 2,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 26,
                                                        "end": 26
                                                    },
                                                    "typeParameters": null,
                                                    "type": null,
                                                    "flags": 2,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 17,
                                                    "end": 26
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 26,
                                                "end": 28
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 28,
                                            "end": 29
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 2,
                                    "end": 29
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1,
                                "end": 29
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1,
                            "end": 29
                        }
                    ],
                    "multiline": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1,
                    "end": 29
                },
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 29
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 29
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 18,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 27,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 28,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

