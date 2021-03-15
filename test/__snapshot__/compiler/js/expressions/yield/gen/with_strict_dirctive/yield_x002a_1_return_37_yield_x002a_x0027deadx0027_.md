# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
'use strict'; yield * 1; return 37; yield * 'dead';
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "'use strict'; yield * 1; return 37; yield * 'dead';",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "use strict",
                "rawText": "use strict",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 19
                },
                "operator": "*",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 23
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 23
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 24
        },
        {
            "kind": 2097346,
            "expression": {
                "kind": 4261540,
                "text": 37,
                "rawText": "37",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 31,
                "end": 34
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 35
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65563,
                "left": {
                    "kind": 196712,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 41
                },
                "operator": "*",
                "right": {
                    "kind": 4261583,
                    "text": "dead",
                    "rawText": "dead",
                    "flags": 33554432,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 50
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 35,
                "end": 50
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 35,
            "end": 51
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
    "end": 51
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

