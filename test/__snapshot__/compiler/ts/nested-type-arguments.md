# Kataw parser test case

## Input

`````js
var nestedArray: Array<Array<Array<string>>>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var nestedArray: Array<Array<Array<string>>>",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "nestedArray",
                                "rawText": "nestedArray",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 15
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 22
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "Array",
                                                "rawText": "Array",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 28
                                            },
                                            "typeArguments": {
                                                "kind": 8419,
                                                "typeArgumentsList": [
                                                    {
                                                        "kind": 8428,
                                                        "typeName": {
                                                            "kind": 196711,
                                                            "text": "Array",
                                                            "rawText": "Array",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 29,
                                                            "end": 34
                                                        },
                                                        "typeArguments": {
                                                            "kind": 8419,
                                                            "typeArgumentsList": [
                                                                {
                                                                    "kind": 4202702,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 2097152,
                                                                    "start": 35,
                                                                    "end": 41
                                                                }
                                                            ],
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 35,
                                                            "end": 41
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 2097152,
                                                        "start": 29,
                                                        "end": 43
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 29,
                                                "end": 42
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 23,
                                            "end": 44
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 23,
                                    "end": 43
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 16,
                                "end": 44
                            },
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 44
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 44
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 44
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 44
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

