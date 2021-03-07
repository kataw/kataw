# Kataw parser test case

## Input

`````js
"\11
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\11",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "11",
                    "rawText": "\"\\11",
                    "flags": 524288,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 4
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 4
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated string literal",
            "start": 4,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 4
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

