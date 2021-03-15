# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\gen\in_default
> :: test: in default
> :: case: async function f(){}
## Input

`````js
switch (x) {
  default:
    async function f(){}
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch (x) {\n  default:\n    async function f(){}\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 65,
                        "statements": [
                            {
                                "kind": 1312785,
                                "name": {
                                    "kind": 131102,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 42,
                                    "end": 44
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 46
                                },
                                "type": null,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 47,
                                        "end": 47
                                    },
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 48
                                },
                                "typeParameters": null,
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 260,
                                "start": 23,
                                "end": 48
                            }
                        ],
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 48
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 50
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 50
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
    "end": 50
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

