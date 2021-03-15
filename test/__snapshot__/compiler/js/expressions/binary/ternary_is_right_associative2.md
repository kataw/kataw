# Kataw parser test case

## Input

`````js
a ? b : c ** x ? d : e
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "a ? b : c ** x ? d : e",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65592,
                "shortCircuit": {
                    "kind": 196712,
                    "text": "a",
                    "rawText": "a",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "consequent": {
                    "kind": 196712,
                    "text": "b",
                    "rawText": "b",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "alternate": {
                    "kind": 65592,
                    "shortCircuit": {
                        "kind": 65563,
                        "left": {
                            "kind": 196712,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 9
                        },
                        "operator": "**",
                        "right": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2,
                        "start": 7,
                        "end": 14
                    },
                    "consequent": {
                        "kind": 196712,
                        "text": "d",
                        "rawText": "d",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    },
                    "alternate": {
                        "kind": 196712,
                        "text": "e",
                        "rawText": "e",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 22
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 22
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
    "end": 22
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

