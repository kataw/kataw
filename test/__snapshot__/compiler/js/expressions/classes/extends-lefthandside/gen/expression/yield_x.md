# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\extends-lefthandside\gen\expression
> :: test: expression
> :: case: yield
>          x
## Input

`````js
(class B extends yield
x {})
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class B extends yield\nx {})",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 66099,
                    "name": {
                        "kind": 131102,
                        "text": "B",
                        "rawText": "B",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 52,
                        "expression": {
                            "kind": 196712,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 22
                        },
                        "typeArguments": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 22
                    },
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [],
                        "flags": 32769,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 1
                    },
                    "decorators": null,
                    "flags": 32769,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 22
                },
                "flags": 32769,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 32769,
                "intersects": false,
                "transformFlags": 0,
                "start": 22,
                "end": 24
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 22,
            "end": 24
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 24,
            "end": 27
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 25,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 27,
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

