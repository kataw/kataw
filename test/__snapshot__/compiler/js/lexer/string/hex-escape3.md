# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true, module: true }
`````


## Input

`````js
"\x8"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "\"\\x8\"",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4261583,
                    "text": "",
                    "rawText": "",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 5
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Hexadecimal digit expected",
            "start": 4,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 5
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

