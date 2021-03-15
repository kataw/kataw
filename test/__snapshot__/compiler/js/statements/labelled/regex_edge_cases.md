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
    "statements": [
        {
            "kind": 6291518,
            "flags": 1081344,
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
                "flags": 1081344,
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
    "isModule": false,
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
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
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

