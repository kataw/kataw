# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
## Input

`````js
'use strict'; var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; var gfe = function* rgfe() { switch (1) { case yield* 'foo': break; } }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "use strict",
                    "rawText": "use strict",
                    "flags": 16777216,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 13
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "gfe",
                                "rawText": "gfe",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 17,
                                "end": 21
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 8915041,
                                "name": {
                                    "kind": 131102,
                                    "text": "rgfe",
                                    "rawText": "rgfe",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 33,
                                    "end": 38
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 39,
                                    "end": 40
                                },
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
                                                    "start": 51,
                                                    "end": 52
                                                },
                                                "caseBlock": {
                                                    "kind": 2093,
                                                    "clauses": [
                                                        {
                                                            "kind": 46,
                                                            "expression": {
                                                                "kind": 65785,
                                                                "delegate": true,
                                                                "expression": {
                                                                    "kind": 67279,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 16777216,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 67,
                                                                    "end": 73
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 16393,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 60,
                                                                "end": 73
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
                                                                    "start": 74,
                                                                    "end": 81
                                                                }
                                                            ],
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 55,
                                                            "end": 81
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 53,
                                                    "end": 83
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 42,
                                                "end": 83
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 42,
                                        "end": 83
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 40,
                                    "end": 85
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 128,
                                "parent": null,
                                "emitNode": null,
                                "start": 23,
                                "end": 85
                            },
                            "flags": 17,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 0,
                            "end": 85
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 17,
                    "end": 85
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 13,
                "end": 85
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 85
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
    "end": 85
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

