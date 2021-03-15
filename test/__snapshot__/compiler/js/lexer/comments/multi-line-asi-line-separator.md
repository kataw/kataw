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
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "",
                "rawText": "",
                "flags": 33554432,
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
                "flags": 33587200,
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

