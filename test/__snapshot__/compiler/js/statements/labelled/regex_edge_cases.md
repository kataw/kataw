# Kataw parser test case

## Input

`````js
debugger
/bar
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "debugger\n/bar",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 6291518,
                "flags": 540672,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4260544,
                    "text": "/bar",
                    "flags": 540672,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 13
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 13
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 13
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 13,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

