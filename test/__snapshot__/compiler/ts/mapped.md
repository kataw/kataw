# Kataw parser test case

## Input

`````js
 let map: { [P in string]: number; };
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": " let map: { [P in string]: number; };",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "map",
                                "rawText": "map",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 4,
                                "end": 8
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8335,
                                "typeParameter": {
                                    "kind": 8424,
                                    "name": {
                                        "kind": 196711,
                                        "text": "P",
                                        "rawText": "P",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "constraint": {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 17,
                                        "end": 24
                                    },
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 13,
                                    "end": 24
                                },
                                "nameType": null,
                                "isReadOnly": false,
                                "plus": false,
                                "minus": false,
                                "isOptional": false,
                                "type": {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 26,
                                    "end": 33
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 9,
                                "end": 36
                            },
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 36
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 36
                },
                "flags": 16,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 37
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 37
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

