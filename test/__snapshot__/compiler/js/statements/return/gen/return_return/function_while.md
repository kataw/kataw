# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/return/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\return\gen\return_return
> :: test: return return
> :: case: function while
## Input

`````js
return function while return
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "return function while return",
    "filename": "",
    "statements": [
        {
            "kind": 2097346,
            "expression": {
                "kind": 8456285,
                "name": null,
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 15
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 1,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 15
                },
                "typeParameters": null,
                "type": null,
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 15
            },
            "flags": 1,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 2097399,
            "expression": {
                "kind": 131322,
                "text": "",
                "flags": 3,
                "intersects": false,
                "transformFlags": 0,
                "start": 21,
                "end": 21
            },
            "statement": {
                "kind": 2097346,
                "expression": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 21,
                "end": 28
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 15,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 16,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 22,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

