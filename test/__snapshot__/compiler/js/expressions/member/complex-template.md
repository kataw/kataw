# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
[`a${5}b`.length] = x
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "[`a${5}b`.length] = x",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 98822,
                    "elementList": {
                        "kind": 65605,
                        "elements": [
                            {
                                "kind": 67175096,
                                "member": {
                                    "kind": 66261,
                                    "spans": [
                                        {
                                            "kind": 66263,
                                            "rawText": "a",
                                            "text": "a",
                                            "expression": {
                                                "kind": 4261540,
                                                "text": 5,
                                                "rawText": "5",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 1,
                                            "end": 6
                                        }
                                    ],
                                    "tail": {
                                        "kind": 4260568,
                                        "rawText": "b",
                                        "text": "b",
                                        "literal": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 6,
                                        "end": 9
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 1,
                                    "end": 9
                                },
                                "expression": {
                                    "kind": 196711,
                                    "text": "length",
                                    "rawText": "length",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 16
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 16,
                                "period": {
                                    "kind": 255,
                                    "pos": 9,
                                    "end": 10
                                }
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 16
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 17
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 21
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
    "end": 21
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

