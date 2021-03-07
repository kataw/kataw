# Kataw parser test case

## Input

`````js
''/*@{x2028}@*/''
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "''/*@{x2028}@*/''",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "",
                    "rawText": "",
                    "flags": 16777216,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 2
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "",
                    "rawText": "",
                    "flags": 16793600,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 9
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 2,
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

