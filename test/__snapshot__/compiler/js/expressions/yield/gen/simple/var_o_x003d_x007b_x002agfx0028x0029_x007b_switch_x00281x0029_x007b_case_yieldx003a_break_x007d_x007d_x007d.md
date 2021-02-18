# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\expressions\yield\gen\simple
> :: test: simple
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Input

`````js
var o = { *gf() { switch (1) { case yield: break; } } }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var o = { *gf() { switch (1) { case yield: break; } } }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "o",
                                "rawText": "o",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 17303650,
                                            "name": {
                                                "kind": 196711,
                                                "text": "gf",
                                                "rawText": "gf",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 11,
                                                "end": 13
                                            },
                                            "propertySetParameterList": null,
                                            "uniqueFormalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 14,
                                                "end": 15
                                            },
                                            "isSetter": false,
                                            "isGetter": false,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [
                                                        {
                                                            "kind": 2097362,
                                                            "expression": {
                                                                "kind": 4261540,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 26,
                                                                "end": 27
                                                            },
                                                            "caseBlock": {
                                                                "kind": 2093,
                                                                "clauses": [
                                                                    {
                                                                        "kind": 46,
                                                                        "expression": {
                                                                            "kind": 65785,
                                                                            "delegate": false,
                                                                            "expression": null,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 16393,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 35,
                                                                            "end": 41
                                                                        },
                                                                        "statements": [
                                                                            {
                                                                                "kind": 2097193,
                                                                                "label": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 42,
                                                                                "end": 49
                                                                            }
                                                                        ],
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 30,
                                                                        "end": 49
                                                                    }
                                                                ],
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 28,
                                                                "end": 51
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 17,
                                                            "end": 51
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 17,
                                                    "end": 51
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 15,
                                                "end": 53
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 13,
                                            "end": 53
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 9,
                                    "end": 53
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 7,
                                "end": 55
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 55
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 3,
                    "end": 55
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 55
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 55
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

