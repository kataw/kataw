# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/compiler/js/expressions/classes/extends-lefthandside/gen/for-in_lhs
> :: test: for-in lhs
> :: case: new x
## Input

`````js
for (new x in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for (new x in x) ;",
    "filename": "",
    "statements": [
        {
            "kind": 2099286,
            "initializer": {
                "kind": 66204,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
                },
                "typeArguments": null,
                "argumentList": null,
                "flags": 5,
                "symbol": null,
                "transformFlags": 32,
                "start": 0,
                "end": 10
            },
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 15
            },
            "statement": {
                "kind": 6291526,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
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
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

