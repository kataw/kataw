# Kataw parser test case

## Input

`````js
({ "__proto__": null, __proto__: null })
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({ \"__proto__\": null, __proto__: null })",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 4261583,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 14
                                    },
                                    "right": {
                                        "kind": 4260512,
                                        "text": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 20
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 20
                                },
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196711,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 31
                                    },
                                    "right": {
                                        "kind": 4260512,
                                        "text": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 37
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 37
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 37
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 39
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 40
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 40
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 40
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

