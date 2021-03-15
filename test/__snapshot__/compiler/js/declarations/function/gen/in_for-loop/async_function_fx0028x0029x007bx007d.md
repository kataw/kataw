# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw_dev\test\__snapshot__/compiler/js/declarations/function/autogen.md
- Path: kataw_dev\test\__snapshot__\compiler\js\declarations\function\gen\in_for-loop
> :: test: in for-loop
> :: case: async function f(){}
## Input

`````js
for (;;) async function f(){}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "for (;;) async function f(){}",
    "filename": "",
    "statements": [
        {
            "kind": 2099288,
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "isVariableDeclarationList": false,
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 9439250,
                    "name": {
                        "kind": 131102,
                        "text": "f",
                        "rawText": "f",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 23,
                        "end": 25
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 27
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
                            "start": 28,
                            "end": 28
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 4,
                    "start": 8,
                    "end": 29
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 29
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 29
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
    "end": 29
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

