# Kataw parser test case

## Input

`````js
var y = { \u0066inally: x } = { finally: 42 };
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var y = { \\u0066inally: x } = { finally: 42 };",
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
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65550,
                                "left": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "finally",
                                                    "rawText": " \\u0066inally",
                                                    "flags": 4194304,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 9,
                                                    "end": 22
                                                },
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 23,
                                                    "end": 25
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 25
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 25
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 27
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 67224232,
                                    "propertyList": {
                                        "kind": 65722,
                                        "properties": [
                                            {
                                                "kind": 65721,
                                                "left": {
                                                    "kind": 196711,
                                                    "text": "finally",
                                                    "rawText": "finally",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 39
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 42,
                                                    "rawText": "42",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 40,
                                                    "end": 43
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 43
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 43
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 45
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 45
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 45
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 45
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 46
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 46
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

