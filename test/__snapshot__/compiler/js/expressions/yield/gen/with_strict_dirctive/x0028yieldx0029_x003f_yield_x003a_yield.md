# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: (yield) ? yield : yield
## Input

`````js
'use strict'; (yield) ? yield : yield
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "'use strict'; (yield) ? yield : yield",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 66224,
                    "expression": {
                        "kind": 196712,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 20
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 21
                },
                "consequent": {
                    "kind": 196712,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 29
                },
                "alternate": {
                    "kind": 196712,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 37
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 37
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 13,
            "end": 37
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
    "end": 37
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

