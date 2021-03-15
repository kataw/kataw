# Kataw parser test case

## Input

`````js
"\u{0fail}"
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\"\\u{0fail}\"",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "il}",
                "rawText": "il}",
                "flags": 4194304,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 11
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
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated Unicode escape sequence",
            "start": 7,
            "length": 1
        }
    ],
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

