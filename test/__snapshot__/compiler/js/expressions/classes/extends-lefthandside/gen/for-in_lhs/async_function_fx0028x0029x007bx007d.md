# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-17
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\for-in_lhs
> :: test: for-in lhs
> :: case: async function f(){}
## Input

`````js
for (async function f(){} in x) ;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "for (async function f(){} in x) ;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2099286,
                "initializer": {
                    "kind": 9439250,
                    "name": {
                        "kind": 131102,
                        "text": "f",
                        "rawText": "f",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1025,
                        "parent": null,
                        "emitNode": null,
                        "start": 19,
                        "end": 21
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
                        "start": 22,
                        "end": 23
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 24,
                            "end": 24
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 23,
                        "end": 25
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 4,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 25
                },
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 28,
                    "end": 30
                },
                "statement": {
                    "kind": 6291526,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 31,
                    "end": 33
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 33
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 33
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
    "end": 33
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

