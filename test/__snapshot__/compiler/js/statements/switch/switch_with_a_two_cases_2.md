# Kataw parser test case

## Input

`````js
switch (A) {case B: C; break; case D: E; break;}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch (A) {case B: C; break; case D: E; break;}",
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
                        "kind": 46,
                        "expression": {
                            "kind": 196712,
                            "text": "B",
                            "rawText": "B",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
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
                                    "start": 19,
                                    "end": 21
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 22
                            },
                            {
                                "kind": 2097193,
                                "label": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 29
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 29
                    },
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 196712,
                            "text": "D",
                            "rawText": "D",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 36
                        },
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 196712,
                                    "text": "E",
                                    "rawText": "E",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 40
                            },
                            {
                                "kind": 2097193,
                                "label": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 47
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 47
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 10,
                "end": 48
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 48
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
    "end": 48
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

