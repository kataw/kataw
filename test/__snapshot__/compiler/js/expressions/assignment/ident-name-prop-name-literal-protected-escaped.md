# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
var y = { prot\u0065cted: x } = { protected: 42 };
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "var y = { prot\\u0065cted: x } = { protected: 42 };",
    "filename": "",
    "moduleBody": {
        "kind": 150,
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
                                "flags": 65536,
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
                                                    "text": "protected",
                                                    "rawText": "prot\\u0065cted",
                                                    "flags": 37814272,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 9,
                                                    "end": 24
                                                },
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 27
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 27
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 27
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 29
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
                                                    "text": "protected",
                                                    "rawText": "protected",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 43
                                                },
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 42,
                                                    "rawText": "42",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 44,
                                                    "end": 47
                                                },
                                                "accessModifier": null,
                                                "decorators": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 47
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 47
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 49
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 49
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 65536,
                            "end": 49
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 49
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 50
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 50
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

