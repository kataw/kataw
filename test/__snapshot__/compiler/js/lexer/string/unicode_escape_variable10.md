# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"\u{00000000000000000000110000}"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\u{00000000000000000000110000}\"",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "0}",
                    "rawText": "0}",
                    "flags": 2097152,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 32
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 32
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 32
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "An extended Unicode escape value must be between 0x0 and 0x10FFFF inclusive",
            "start": 30,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

