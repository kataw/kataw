# Kataw parser test case

## Input

`````js
result = [...x[yield]] = vals;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "result = [...x[yield]] = vals;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "result",
                        "rawText": "result",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 6
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 67207686,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 65740,
                                        "argument": {
                                            "kind": 66116,
                                            "member": {
                                                "kind": 196712,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 14
                                            },
                                            "expression": {
                                                "kind": 196712,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 20
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 21
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2,
                                        "start": 10,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 21
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 22
                        },
                        "operator": "=",
                        "right": {
                            "kind": 196712,
                            "text": "vals",
                            "rawText": "vals",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 29
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 29
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 29
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 30
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 30
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

