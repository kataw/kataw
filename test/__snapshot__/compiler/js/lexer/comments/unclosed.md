# Kataw parser test case

## Input

`````js
/*CHECK#1/
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "/*CHECK#1/",
    "filename": "",
    "statements": [],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated comment",
            "start": 10,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

