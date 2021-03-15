# Kataw parser test case

## Input

`````js
async <T>() => await null;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "async <T>() => await null;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 81936,
                "typeParameters": null,
                "arrowParameters": {
                    "kind": 81929,
                    "elements": [],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 9
                },
                "contents": {
                    "kind": 65559,
                    "expression": {
                        "kind": 4260512,
                        "text": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 25
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 32780,
                    "start": 14,
                    "end": 25
                },
                "flags": 1073741824,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 25
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

