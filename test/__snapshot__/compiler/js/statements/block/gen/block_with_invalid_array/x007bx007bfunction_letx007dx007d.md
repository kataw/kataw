# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/block/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\block\gen\block_with_invalid_array
> :: test: block with invalid array
> :: case: {{function let}}
## Input

`````js
{ [catch] {{function let}}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{ [catch] {{function let}}",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097233,
                        "expression": {
                            "kind": 98822,
                            "elementList": {
                                "kind": 65605,
                                "elements": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 3
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
                                "start": 3,
                                "end": 3
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 3
                        },
                        "catchClause": {
                            "kind": 2095,
                            "catchParameter": null,
                            "block": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 8
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 16,
                            "start": 3,
                            "end": 8
                        },
                        "finallyBlock": null,
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 16,
                        "start": 3,
                        "end": 8
                    }
                ],
                "multiline": false,
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 1,
                "end": 8
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2099237,
                        "block": {
                            "kind": 2084,
                            "statements": [
                                {
                                    "kind": 264284,
                                    "name": {
                                        "kind": 131102,
                                        "text": "let",
                                        "rawText": "let",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 20,
                                        "end": 24
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 1,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 24
                                    },
                                    "type": null,
                                    "contents": null,
                                    "typeParameters": null,
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 12,
                                    "end": 24
                                }
                            ],
                            "multiline": false,
                            "flags": 1,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 24
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 25
                    }
                ],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 25
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 9,
            "end": 26
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "']' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 24,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

