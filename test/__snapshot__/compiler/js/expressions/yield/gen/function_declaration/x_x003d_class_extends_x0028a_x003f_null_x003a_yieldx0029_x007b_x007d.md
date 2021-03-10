# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\function_declaration
> :: test: function declaration
> :: case: x = class extends (a ? null : yield) { }
## Input

`````js
function not_gen() { x = class extends (a ? null : yield) { } }}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function not_gen() { x = class extends (a ? null : yield) { } }}",
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
                                    "kind": 65550,
                                    "left": {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "operator": "=",
                                    "right": {
                                        "kind": 82483,
                                        "name": null,
                                        "typeParameters": null,
                                        "classHeritage": {
                                            "kind": 52,
                                            "expression": {
                                                "kind": 66224,
                                                "expression": {
                                                    "kind": 65592,
                                                    "shortCircuit": {
                                                        "kind": 196712,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 40,
                                                        "end": 41
                                                    },
                                                    "consequent": {
                                                        "kind": 4260512,
                                                        "text": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 48
                                                    },
                                                    "alternate": {
                                                        "kind": 196712,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 50,
                                                        "end": 56
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 56
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 57
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 57
                                        },
                                        "implementClauses": null,
                                        "members": {
                                            "kind": 50,
                                            "elements": [],
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 59,
                                            "end": 61
                                        },
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 24,
                                        "end": 61
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 61
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 61
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 61
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 63
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 63
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 64
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 63,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 64
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
