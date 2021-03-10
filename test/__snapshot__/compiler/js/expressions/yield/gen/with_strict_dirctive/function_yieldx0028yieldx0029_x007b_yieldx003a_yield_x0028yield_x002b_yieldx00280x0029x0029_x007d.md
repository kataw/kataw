# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: function yield(yield) { yield: yield (yield + yield(0)); }
## Input

`````js
'use strict'; function yield(yield) { yield: yield (yield + yield(0)); }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; function yield(yield) { yield: yield (yield + yield(0)); }",
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
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 22,
                    "end": 28
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 29,
                                "end": 34
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 29,
                            "end": 34
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 35
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
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
                                    "start": 37,
                                    "end": 43
                                },
                                "statement": {
                                    "kind": 2097233,
                                    "expression": {
                                        "kind": 66091,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 50
                                        },
                                        "typeArguments": null,
                                        "argumentList": {
                                            "kind": 3,
                                            "elements": [
                                                {
                                                    "kind": 65563,
                                                    "left": {
                                                        "kind": 196712,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 52,
                                                        "end": 57
                                                    },
                                                    "operator": "+",
                                                    "right": {
                                                        "kind": 66091,
                                                        "expression": {
                                                            "kind": 196712,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 59,
                                                            "end": 65
                                                        },
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 3,
                                                            "elements": [
                                                                {
                                                                    "kind": 4261540,
                                                                    "text": 0,
                                                                    "rawText": "0",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 66,
                                                                    "end": 67
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "transformFlags": 0,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "start": 67,
                                                            "end": 68
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 65,
                                                        "end": 68
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 52,
                                                    "end": 68
                                                }
                                            ],
                                            "trailingComma": false,
                                            "transformFlags": 0,
                                            "flags": 0,
                                            "intersects": false,
                                            "start": 57,
                                            "end": 69
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 50,
                                        "end": 69
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 70
                                },
                                "isWebCompat": true,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 70
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 70
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 72
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 13,
                "end": 72
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 72
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 72
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
