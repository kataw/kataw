# Kataw parser test case

## Input

`````js
x: for(;;) continue x
/y
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x: for(;;) continue x\n/y",
    "filename": "",
    "statements": [
        {
            "kind": 2097292,
            "label": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 1
            },
            "statement": {
                "kind": 2099288,
                "initializer": null,
                "condition": null,
                "incrementor": null,
                "isVariableDeclarationList": false,
                "statement": {
                    "kind": 2097212,
                    "label": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    },
                    "flags": 1081344,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 21
                },
                "flags": 1081344,
                "intersects": false,
                "transformFlags": 0,
                "start": 2,
                "end": 21
            },
            "isWebCompat": true,
            "flags": 1081344,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260544,
                "text": "/y",
                "flags": 1081344,
                "intersects": false,
                "transformFlags": 0,
                "start": 21,
                "end": 24
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 21,
            "end": 24
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 24,
            "length": 1
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

