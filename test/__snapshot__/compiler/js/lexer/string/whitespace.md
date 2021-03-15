# Kataw parser test case

## Input

`````js
"\u0009str\u0009ing\u0009"
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\u0009str\\u0009ing\\u0009\"",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "\tstr\ting\t",
                "rawText": "\tstr\ting\t",
                "flags": 8388608,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 26
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 26
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
    "end": 26
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

