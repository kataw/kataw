# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\new_arg
> :: test: new arg
> :: case: async
## Input

`````js
new async
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "new async",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66204,
                "expression": {
                    "kind": 196712,
                    "text": "async",
                    "rawText": "async",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 9
                },
                "typeArguments": null,
                "argumentList": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

