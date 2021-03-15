# Kataw parser test case

## Input

`````js
switch(x) { default: break; case y: break; case z: break; default: break; }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch(x) { default: break; case y: break; case z: break; default: break; }",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 7,
                "end": 8
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 65,
                        "statements": [
                            {
                                "kind": 2097193,
                                "label": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 27
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 27
                    },
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 196712,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 34
                        },
                        "statements": [
                            {
                                "kind": 2097193,
                                "label": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 42
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 42
                    },
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 196712,
                            "text": "z",
                            "rawText": "z",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 49
                        },
                        "statements": [
                            {
                                "kind": 2097193,
                                "label": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 57
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 57
                    },
                    {
                        "kind": 65,
                        "statements": [
                            {
                                "kind": 2097193,
                                "label": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 73
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 73
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 75
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 75
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
    "end": 75
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

