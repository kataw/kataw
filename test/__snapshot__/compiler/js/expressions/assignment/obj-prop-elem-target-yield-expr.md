# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
var vals = { x: 23 };

result = { x: x[yield] } = vals;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var vals = { x: 23 };\n\nresult = { x: x[yield] } = vals;",
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
                            "text": "vals",
                            "rawText": "vals",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 8
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "right": {
                                            "kind": 4261540,
                                            "text": 23,
                                            "rawText": "23",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 18
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 18
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 20
                        },
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 20
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 20
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 21
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
                    "start": 21,
                    "end": 29
                },
                "operator": "=",
                "right": {
                    "kind": 65550,
                    "left": {
                        "kind": 98984,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 65721,
                                    "left": {
                                        "kind": 196711,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "right": {
                                        "kind": 67174980,
                                        "member": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "expression": {
                                            "kind": 196712,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 44
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 45
                                    },
                                    "accessModifier": null,
                                    "decorators": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 45
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 47
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 49,
                        "end": 54
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 54
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 21,
                "end": 54
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 21,
            "end": 55
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
    "end": 55
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

