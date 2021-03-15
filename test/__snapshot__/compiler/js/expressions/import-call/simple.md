# Kataw parser test case

## Input

`````js
import.call
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "import.call",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 67175096,
                "member": {
                    "kind": 4194416,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 32,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 196711,
                    "text": "call",
                    "rawText": "call",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 11
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 11,
                "period": {
                    "kind": 255,
                    "pos": 6,
                    "end": 7
                }
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

