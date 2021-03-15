# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/unicode-escape/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\unicode-escape\gen\simple
> :: test: simple
> :: case: var foob\\u123r = 0;
## Input

`````js
var foob\\u123r = 0;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var foob\\\\u123r = 0;",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "foob",
                            "rawText": "foob",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 8
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 8
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 8
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "u123r",
                    "rawText": "u123r",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 15
                },
                "operator": "=",
                "right": {
                    "kind": 4261540,
                    "text": 0,
                    "rawText": "0",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 19
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 10,
            "end": 20
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 8,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 9,
            "length": 0
        }
    ],
    "intersects": false,
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

