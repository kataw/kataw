# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
var obj = {};

obj.c\u0061se = 42;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var obj = {};\n\nobj.c\\u0061se = 42;",
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
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 11
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 12
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 12
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 12
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 18
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "case",
                        "rawText": "c\\u0061se",
                        "flags": 75497472,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 28
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 28,
                    "period": {
                        "kind": 255,
                        "pos": 18,
                        "end": 19
                    }
                },
                "operator": "=",
                "right": {
                    "kind": 4261540,
                    "text": 42,
                    "rawText": "42",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 33
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 13,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 13,
            "end": 34
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

