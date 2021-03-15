# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\for-in_lhs
> :: test: for-in lhs
> :: case: yield
>          x
## Input

`````js
for (yield
x in x) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "for (yield\nx in x) ;",
    "filename": "",
    "statements": [
        {
            "kind": 2099288,
            "initializer": {
                "kind": 196712,
                "text": "yield",
                "rawText": "yield",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 10
            },
            "condition": null,
            "incrementor": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 32769,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "operator": "in",
                "right": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 17
            },
            "isVariableDeclarationList": false,
            "statement": {
                "kind": 6291526,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 18,
                "end": 20
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 17,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

