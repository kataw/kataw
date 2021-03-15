# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
[foo, [[[[[[[[[[[[[x,y,z]]]]]]]]]]]]], bar = B] = arr;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "[foo, [[[[[[[[[[[[[x,y,z]]]]]]]]]]]]], bar = B] = arr;",
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
                                "kind": 196712,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 4
                            },
                            {
                                "kind": 98822,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 98822,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 98822,
                                                        "elementList": {
                                                            "kind": 65605,
                                                            "elements": [
                                                                {
                                                                    "kind": 98822,
                                                                    "elementList": {
                                                                        "kind": 65605,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 98822,
                                                                                "elementList": {
                                                                                    "kind": 65605,
                                                                                    "elements": [
                                                                                        {
                                                                                            "kind": 98822,
                                                                                            "elementList": {
                                                                                                "kind": 65605,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 98822,
                                                                                                        "elementList": {
                                                                                                            "kind": 65605,
                                                                                                            "elements": [
                                                                                                                {
                                                                                                                    "kind": 98822,
                                                                                                                    "elementList": {
                                                                                                                        "kind": 65605,
                                                                                                                        "elements": [
                                                                                                                            {
                                                                                                                                "kind": 98822,
                                                                                                                                "elementList": {
                                                                                                                                    "kind": 65605,
                                                                                                                                    "elements": [
                                                                                                                                        {
                                                                                                                                            "kind": 98822,
                                                                                                                                            "elementList": {
                                                                                                                                                "kind": 65605,
                                                                                                                                                "elements": [
                                                                                                                                                    {
                                                                                                                                                        "kind": 98822,
                                                                                                                                                        "elementList": {
                                                                                                                                                            "kind": 65605,
                                                                                                                                                            "elements": [
                                                                                                                                                                {
                                                                                                                                                                    "kind": 98822,
                                                                                                                                                                    "elementList": {
                                                                                                                                                                        "kind": 65605,
                                                                                                                                                                        "elements": [
                                                                                                                                                                            {
                                                                                                                                                                                "kind": 98822,
                                                                                                                                                                                "elementList": {
                                                                                                                                                                                    "kind": 65605,
                                                                                                                                                                                    "elements": [
                                                                                                                                                                                        {
                                                                                                                                                                                            "kind": 196712,
                                                                                                                                                                                            "text": "x",
                                                                                                                                                                                            "rawText": "x",
                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                            "intersects": false,
                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                            "start": 19,
                                                                                                                                                                                            "end": 20
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "kind": 196712,
                                                                                                                                                                                            "text": "y",
                                                                                                                                                                                            "rawText": "y",
                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                            "intersects": false,
                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                            "start": 21,
                                                                                                                                                                                            "end": 22
                                                                                                                                                                                        },
                                                                                                                                                                                        {
                                                                                                                                                                                            "kind": 196712,
                                                                                                                                                                                            "text": "z",
                                                                                                                                                                                            "rawText": "z",
                                                                                                                                                                                            "flags": 0,
                                                                                                                                                                                            "intersects": false,
                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                            "start": 23,
                                                                                                                                                                                            "end": 24
                                                                                                                                                                                        }
                                                                                                                                                                                    ],
                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                    "multiline": false,
                                                                                                                                                                                    "flags": 0,
                                                                                                                                                                                    "intersects": false,
                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                    "start": 19,
                                                                                                                                                                                    "end": 24
                                                                                                                                                                                },
                                                                                                                                                                                "flags": 0,
                                                                                                                                                                                "intersects": false,
                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                "start": 18,
                                                                                                                                                                                "end": 25
                                                                                                                                                                            }
                                                                                                                                                                        ],
                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                        "multiline": false,
                                                                                                                                                                        "flags": 0,
                                                                                                                                                                        "intersects": false,
                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                        "start": 18,
                                                                                                                                                                        "end": 25
                                                                                                                                                                    },
                                                                                                                                                                    "flags": 0,
                                                                                                                                                                    "intersects": false,
                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                    "start": 17,
                                                                                                                                                                    "end": 26
                                                                                                                                                                }
                                                                                                                                                            ],
                                                                                                                                                            "trailingComma": false,
                                                                                                                                                            "multiline": false,
                                                                                                                                                            "flags": 0,
                                                                                                                                                            "intersects": false,
                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                            "start": 17,
                                                                                                                                                            "end": 26
                                                                                                                                                        },
                                                                                                                                                        "flags": 0,
                                                                                                                                                        "intersects": false,
                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                        "start": 16,
                                                                                                                                                        "end": 27
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "trailingComma": false,
                                                                                                                                                "multiline": false,
                                                                                                                                                "flags": 0,
                                                                                                                                                "intersects": false,
                                                                                                                                                "transformFlags": 0,
                                                                                                                                                "start": 16,
                                                                                                                                                "end": 27
                                                                                                                                            },
                                                                                                                                            "flags": 0,
                                                                                                                                            "intersects": false,
                                                                                                                                            "transformFlags": 0,
                                                                                                                                            "start": 15,
                                                                                                                                            "end": 28
                                                                                                                                        }
                                                                                                                                    ],
                                                                                                                                    "trailingComma": false,
                                                                                                                                    "multiline": false,
                                                                                                                                    "flags": 0,
                                                                                                                                    "intersects": false,
                                                                                                                                    "transformFlags": 0,
                                                                                                                                    "start": 15,
                                                                                                                                    "end": 28
                                                                                                                                },
                                                                                                                                "flags": 0,
                                                                                                                                "intersects": false,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 14,
                                                                                                                                "end": 29
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "trailingComma": false,
                                                                                                                        "multiline": false,
                                                                                                                        "flags": 0,
                                                                                                                        "intersects": false,
                                                                                                                        "transformFlags": 0,
                                                                                                                        "start": 14,
                                                                                                                        "end": 29
                                                                                                                    },
                                                                                                                    "flags": 0,
                                                                                                                    "intersects": false,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 13,
                                                                                                                    "end": 30
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "multiline": false,
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 13,
                                                                                                            "end": 30
                                                                                                        },
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 12,
                                                                                                        "end": 31
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "multiline": false,
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 0,
                                                                                                "start": 12,
                                                                                                "end": 31
                                                                                            },
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 11,
                                                                                            "end": 32
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "multiline": false,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 11,
                                                                                    "end": 32
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 10,
                                                                                "end": 33
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "multiline": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 10,
                                                                        "end": 33
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 9,
                                                                    "end": 34
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 9,
                                                            "end": 34
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 8,
                                                        "end": 35
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 35
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 36
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 36
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 37
                            },
                            {
                                "kind": 65550,
                                "left": {
                                    "kind": 196712,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 42
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 196712,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 46
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 46
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 46
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 47
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "arr",
                    "rawText": "arr",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 53
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 53
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 54
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
    "end": 54
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

