# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/binary/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\binary\gen\if_header
> :: test: if header
> :: case: a + b / c
## Input

`````js
if ( a + b / c ) ;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "if ( a + b / c ) ;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097257,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "operator": "+",
                    "right": {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 10
                        },
                        "operator": "/",
                        "right": {
                            "kind": 196712,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 14
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 14
                },
                "consequent": {
                    "kind": 6291526,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 18
                },
                "alternate": null,
                "isWebCompat": true,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 18
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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
