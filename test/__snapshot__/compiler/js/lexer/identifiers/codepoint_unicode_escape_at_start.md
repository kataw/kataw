# Kataw parser test case

## Input

`````js
\u{65}xxx
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\\u{65}xxx",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "exxx",
                "rawText": "\\u{65}xxx",
                "flags": 4194304,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 9
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

