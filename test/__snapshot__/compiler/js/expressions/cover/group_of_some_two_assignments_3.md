# Kataw parser test case

## Input

`````js
(a = 1, b = 2);
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(a = 1, b = 2);",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 65590,
                        "expressions": [
                            {
                                "kind": 65550,
                                "left": {
                                    "kind": 196712,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 2
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 4261540,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 6
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 6
                            },
                            {
                                "kind": 65550,
                                "left": {
                                    "kind": 196712,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 9
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 4261540,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 13
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 13
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 13
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 15
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 15
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
