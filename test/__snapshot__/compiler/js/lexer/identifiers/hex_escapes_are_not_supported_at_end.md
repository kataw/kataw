# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
xxx\x61
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "xxx\\x61",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "xxx",
                    "rawText": "xxx",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "x61",
                    "rawText": "x61",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 7
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 7
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 7
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 3,
            "length": 0
        }
    ],
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

