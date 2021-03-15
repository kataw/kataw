# Kataw parser test case

## Input

`````js
switch (A) {default: D; case B: C; }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch (A) {default: D; case B: C; }",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 65,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 196712,
                                    "text": "D",
                                    "rawText": "D",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 22
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 23
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 23
                    },
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 196712,
                            "text": "B",
                            "rawText": "B",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 30
                        },
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 196712,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 34
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 34
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 36
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 36
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
    "end": 36
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

