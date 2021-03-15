# Kataw parser test case

## Input

`````js
a = (
  b,
  c
)
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "a = (\n  b,\n  c\n)",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 66224,
                    "expression": {
                        "kind": 65590,
                        "expressions": [
                            {
                                "kind": 196712,
                                "text": "b",
                                "rawText": "b",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 9
                            },
                            {
                                "kind": 196712,
                                "text": "c",
                                "rawText": "c",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 14
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 14
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 16
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 16
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 16
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
    "end": 16
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

