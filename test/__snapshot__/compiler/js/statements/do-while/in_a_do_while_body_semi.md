# Kataw parser test case

## Input

`````js
do x, y; while (z)
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do x, y; while (z)",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097218,
                "expression": {
                    "kind": 196712,
                    "text": "z",
                    "rawText": "z",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 17
                },
                "statement": {
                    "kind": 2097233,
                    "expression": {
                        "kind": 65590,
                        "expressions": [
                            {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 4
                            },
                            {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 7
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 7
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 8
                },
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

