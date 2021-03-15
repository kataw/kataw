# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\new_arg
> :: test: new arg
> :: case: super.foo
## Input

`````js
new super.foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "new super.foo",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66204,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 4260561,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 9
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 13
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 13,
                    "period": {
                        "kind": 255,
                        "pos": 9,
                        "end": 10
                    }
                },
                "typeArguments": null,
                "argumentList": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
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
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

