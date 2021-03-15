# Kataw parser test case

## Input

`````js
(!3 ** 2)
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(!3 ** 2)",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 65563,
                    "left": {
                        "kind": 65774,
                        "operator": "!",
                        "operand": {
                            "kind": 4261540,
                            "text": 3,
                            "rawText": "3",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 3
                        },
                        "flags": 1,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 3
                    },
                    "operator": "**",
                    "right": {
                        "kind": 4261540,
                        "text": 2,
                        "rawText": "2",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 8
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2,
                    "start": 1,
                    "end": 8
                },
                "flags": 0,
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
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "An unary expression with the '**' operator is not allowed in the left hand side of an exponentiation expression",
            "start": 4,
            "length": 0
        }
    ],
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

