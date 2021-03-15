# Kataw parser test case

## Input

`````js
switch(x) { default: default: case y: break; case z: break; }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch(x) { default: default: case y: break; case z: break; }",
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
                        "statements": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 20
                    },
                    {
                        "kind": 65,
                        "statements": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 29
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
                            "start": 34,
                            "end": 36
                        },
                        "statements": [
                            {
                                "kind": 2097193,
                                "label": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 44
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 44
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
                            "start": 49,
                            "end": 51
                        },
                        "statements": [
                            {
                                "kind": 2097193,
                                "label": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 59
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 44,
                        "end": 59
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 61
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 61
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
    "end": 61
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

