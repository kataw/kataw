# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/yield/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\yield\gen\with_strict_dirctive
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
    "kind": 196,
    "source": "'use strict'; yield * 1; return 37; yield * 'dead';",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "use strict",
                    "rawText": "use strict",
                    "flags": 16777216,
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
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "yield",
                        "rawText": "yield",
                        "flags": 0,
                        "intersects": false,
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
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 23
                },
                "flags": 0,
                "intersects": false,
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
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 34
                },
                "flags": 0,
                "intersects": false,
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
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 41
                    },
                    "operator": "*",
                    "right": {
                        "kind": 4261583,
                        "text": "dead",
                        "rawText": "dead",
                        "flags": 16777216,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 50
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 50
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 35,
                "end": 51
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 51
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

