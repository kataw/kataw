# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_generator
> :: test: function generator
> :: case: yield * \n { yield: 12 }
## Input

`````js
function * gen() { function not_gen() { yield * \n { yield: 12 } }}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function * gen() { function not_gen() { yield * \\n { yield: 12 } }}",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "gen",
                "rawText": "gen",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 15,
                "end": 16
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 37
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65563,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 45
                                                },
                                                "operator": "*",
                                                "right": {
                                                    "kind": 131322,
                                                    "text": "",
                                                    "flags": 3,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 47,
                                                    "end": 47
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 47
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 47
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 47
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 47
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 256,
                            "start": 18,
                            "end": 47
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 47
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 16,
                "end": 47
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 384,
            "start": 0,
            "end": 47
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "n",
                "rawText": "n",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 49,
                "end": 50
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 49,
            "end": 50
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097292,
                        "label": {
                            "kind": 196712,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 58
                        },
                        "statement": {
                            "kind": 2097233,
                            "expression": {
                                "kind": 4261540,
                                "text": 12,
                                "rawText": "12",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 62
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 59,
                            "end": 62
                        },
                        "isWebCompat": true,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 52,
                        "end": 62
                    }
                ],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 52,
                "end": 62
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 50,
            "end": 64
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 48,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 51,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 65,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 66,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 67
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

