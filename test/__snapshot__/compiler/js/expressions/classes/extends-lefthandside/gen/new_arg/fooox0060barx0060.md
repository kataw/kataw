# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/gen/new_arg
> :: test: new arg
> :: case: fooo`bar`
## Input

`````js
new fooo`bar`
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "new fooo`bar`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66204,
                "expression": {
                    "kind": 66260,
                    "member": {
                        "kind": 196712,
                        "text": "fooo",
                        "rawText": "fooo",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 8
                    },
                    "typeArguments": null,
                    "template": {
                        "kind": 4260568,
                        "rawText": "bar",
                        "text": "bar",
                        "literal": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 8,
                        "end": 13
                    },
                    "optional": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1,
                    "start": 8,
                    "end": 13
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

