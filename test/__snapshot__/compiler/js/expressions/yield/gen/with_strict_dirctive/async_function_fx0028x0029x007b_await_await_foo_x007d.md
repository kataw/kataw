# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function f(){ await await foo; }
## Input

`````js
'use strict'; async function f(){ await await foo; }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; async function f(){ await await foo; }",
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
                "kind": 1312785,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 28,
                    "end": 30
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 32
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
                                    "kind": 65559,
                                    "expression": {
                                        "kind": 65559,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 49
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 32780,
                                        "start": 39,
                                        "end": 49
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 32780,
                                    "start": 33,
                                    "end": 49
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 50
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 50
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 52
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 260,
                "start": 13,
                "end": 52
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 52
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
