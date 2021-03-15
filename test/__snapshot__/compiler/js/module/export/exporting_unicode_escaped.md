# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var \u0061bc = 5;
export { abc }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var \\u0061bc = 5;\nexport { abc }",
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
                            "text": "abc",
                            "rawText": " \\u0061bc",
                            "flags": 8388608,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 12
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261540,
                            "text": 5,
                            "rawText": "5",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 3,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 16
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 16
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 76,
            "declaration": null,
            "namedExports": {
                "kind": 152,
                "exportsList": {
                    "kind": 80,
                    "specifiers": [
                        {
                            "kind": 79,
                            "moduleExportName": null,
                            "name": {
                                "kind": 196711,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 30
                            },
                            "binding": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 30
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 30
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 24,
                "end": 32
            },
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32769,
            "intersects": false,
            "transformFlags": 0,
            "start": 17,
            "end": 32
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 18,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

