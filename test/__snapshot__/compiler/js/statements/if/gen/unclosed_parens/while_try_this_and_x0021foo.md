# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\if\gen\unclosed_parens
> :: test: unclosed parens
> :: case: while try this and !foo
## Input

`````js
if( while try this and !foo
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "if( while try this and !foo",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097257,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 3
                },
                "consequent": {
                    "kind": 2097399,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 9
                    },
                    "statement": {
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
                                "start": 13,
                                "end": 13
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 13
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
                                "start": 13,
                                "end": 13
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 13
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 13
                },
                "alternate": null,
                "isWebCompat": true,
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4260571,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 18
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 74398,
                    "expression": {
                        "kind": 196712,
                        "text": "and",
                        "rawText": "and",
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 22
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 22,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 18,
                "end": 24
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 27
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 24,
                "end": 27
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 27
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 4,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 24,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

