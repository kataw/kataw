# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\simple
> :: test: simple
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Input

`````js
let foo = function*() { try {yield 42} finally {yield 43; return 13} };
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "let foo = function*() { try {yield 42} finally {yield 43; return 13} };",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": false,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 8915041,
                            "name": null,
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 21
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097375,
                                            "block": {
                                                "kind": 2099237,
                                                "block": {
                                                    "kind": 2084,
                                                    "statements": [
                                                        {
                                                            "kind": 2097233,
                                                            "expression": {
                                                                "kind": 65785,
                                                                "delegate": false,
                                                                "expression": {
                                                                    "kind": 4261540,
                                                                    "text": 42,
                                                                    "rawText": "42",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 34,
                                                                    "end": 37
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 16393,
                                                                "start": 29,
                                                                "end": 37
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 29,
                                                            "end": 37
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 37
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 38
                                            },
                                            "catchClause": null,
                                            "finallyBlock": {
                                                "kind": 2099237,
                                                "block": {
                                                    "kind": 2084,
                                                    "statements": [
                                                        {
                                                            "kind": 2097233,
                                                            "expression": {
                                                                "kind": 65785,
                                                                "delegate": false,
                                                                "expression": {
                                                                    "kind": 4261540,
                                                                    "text": 43,
                                                                    "rawText": "43",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 53,
                                                                    "end": 56
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 16393,
                                                                "start": 48,
                                                                "end": 56
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 48,
                                                            "end": 57
                                                        },
                                                        {
                                                            "kind": 2097346,
                                                            "expression": {
                                                                "kind": 4261540,
                                                                "text": 13,
                                                                "rawText": "13",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 64,
                                                                "end": 67
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 57,
                                                            "end": 67
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 67
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 68
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 68
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 68
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 70
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 70
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 70
                    }
                ],
                "flags": 8,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 70
            },
            "flags": 8,
            "intersects": false,
            "transformFlags": 769,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 71
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

