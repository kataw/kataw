# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
'use strict'; (function * () { x = class extends (a ? null : yield) { } });
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; (function * () { x = class extends (a ? null : yield) { } });",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "use strict",
                    "rawText": "use strict",
                    "flags": 16777216,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 8915041,
                        "name": null,
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 28
                        },
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
                                                "start": 30,
                                                "end": 32
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
                                                                "start": 50,
                                                                "end": 51
                                                            },
                                                            "consequent": {
                                                                "kind": 4260512,
                                                                "text": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 53,
                                                                "end": 58
                                                            },
                                                            "alternate": {
                                                                "kind": 65785,
                                                                "delegate": false,
                                                                "expression": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 16393,
                                                                "start": 60,
                                                                "end": 66
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 48,
                                                            "end": 66
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 48,
                                                        "end": 67
                                                    },
                                                    "typeArguments": null,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 67
                                                },
                                                "implementClauses": null,
                                                "members": {
                                                    "kind": 50,
                                                    "elements": [],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 1,
                                                    "start": 69,
                                                    "end": 71
                                                },
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 34,
                                                "end": 71
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 71
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 71
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 71
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 73
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 128,
                        "start": 15,
                        "end": 73
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 74
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 75
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 75
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

