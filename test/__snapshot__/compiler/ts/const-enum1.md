# Kataw parser test case

## Input

`````js
const enum E {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const enum E {}",
    "filename": "",
    "statements": [
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "enum",
                "rawText": "enum",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 10
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "E",
                            "rawText": "E",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 12
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 10,
                        "end": 12
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 10,
                "end": 12
            },
            "isConst": true,
            "flags": 1,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 12
        },
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 12,
            "end": 15
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 11,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An enum member name must be followed by a ',', '=', or '}'.",
            "start": 13,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

