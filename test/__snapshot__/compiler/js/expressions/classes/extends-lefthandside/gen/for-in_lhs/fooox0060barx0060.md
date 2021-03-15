# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/gen/for-in_lhs
> :: test: for-in lhs
> :: case: fooo`bar`
## Input

`````js
for (fooo`bar` in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for (fooo`bar` in x) ;",
    "filename": "",
    "statements": [
        {
            "kind": 2099286,
            "initializer": {
                "kind": 66260,
                "member": {
                    "kind": 196712,
                    "text": "fooo",
                    "rawText": "fooo",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 9
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
                    "start": 9,
                    "end": 14
                },
                "optional": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 14
            },
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "statement": {
                "kind": 6291526,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 20,
                "end": 22
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 22
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
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

