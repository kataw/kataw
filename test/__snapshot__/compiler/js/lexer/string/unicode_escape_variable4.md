# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true, module: true }
`````

## Input

`````js
"\u{a"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "\"\\u{a\"",
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
                    "flags": 2162688,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 6
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 6
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated Unicode escape sequence",
            "start": 5,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

