# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
(1) = x
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(1) = x",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 66224,
                        "expression": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 3
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 7
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 7
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 7
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 7
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

