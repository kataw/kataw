# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
var x;

var result;
var vals = [[1]];

result = [[x]] = vals;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var x;\n\nvar result;\nvar vals = [[1]];\n\nresult = [[x]] = vals;",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 5
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 5
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 5
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "result",
                            "rawText": "result",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 11,
                            "end": 18
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 11,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 18
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 11,
                "end": 18
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 6,
            "end": 19
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "vals",
                            "rawText": "vals",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 23,
                            "end": 28
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
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
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 34
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 34
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 35
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 36
                        },
                        "flags": 23,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 36
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 23,
                "end": 36
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 19,
            "end": 37
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "result",
                    "rawText": "result",
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 45
                },
                "operator": "=",
                "right": {
                    "kind": 65550,
                    "left": {
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
                                                "start": 50,
                                                "end": 51
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 50,
                                        "end": 51
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 52
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 52
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 53
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 55,
                        "end": 60
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 60
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 37,
                "end": 60
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 37,
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

