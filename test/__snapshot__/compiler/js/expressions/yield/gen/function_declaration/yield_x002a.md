# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: yield *
## Input

`````js
function not_gen() { yield * }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function not_gen() { yield * }}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                    "start": 8,
                    "end": 16
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 18
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
                                        "start": 20,
                                        "end": 26
                                    },
                                    "operator": "*",
                                    "right": {
                                        "kind": 131322,
                                        "text": "",
                                        "flags": 6,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 28
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 28
                            }
                        ],
                        "multiline": false,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 28
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 30
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 30
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 31
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 29,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 30,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

