# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-16
- From: kataw_dev\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\statements\block\gen\with_unclosed_block
> :: test: with unclosed block
> :: case: }} let function const {
## Input

`````js
{ {} finally(x) { }} let function const {
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ {} finally(x) { }} let function const {",
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
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1,
                            "end": 4
                        },
                        {
                            "kind": 2097375,
                            "block": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 4,
                                    "end": 4
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 4,
                                "end": 4
                            },
                            "catchClause": null,
                            "finallyBlock": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 12,
                                    "end": 12
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 4,
                            "end": 12
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 13,
                                    "end": 14
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 12,
                                "end": 15
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 12,
                            "end": 15
                        },
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 15,
                            "end": 19
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 1,
                    "end": 19
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 20
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "let",
                    "rawText": "let",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 20,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 20,
                "end": 24
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "",
                    "rawText": "",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 33,
                    "end": 33
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 33,
                    "end": 33
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 41,
                                    "end": 41
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 39,
                                "end": 41
                            }
                        ],
                        "multiline": false,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 39,
                        "end": 41
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 33,
                    "end": 41
                },
                "typeParameters": null,
                "flags": 2,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 24,
                "end": 41
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 41
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected 'const' is a reserved word that cannot be used here",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 40,
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
    "end": 41
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

