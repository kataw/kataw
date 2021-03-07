# Kataw parser test case

## Input

`````js
`a \4 b`;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "`a \\4 b`;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4260568,
                    "rawText": "a \\4 b",
                    "text": "a 4 b",
                    "literal": true,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 8
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 9
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

