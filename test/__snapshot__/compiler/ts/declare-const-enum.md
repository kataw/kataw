# Kataw parser test case

## Input

`````js
declare const enum E {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare const enum E {}",
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
                "start": 13,
                "end": 18
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
                            "start": 18,
                            "end": 20
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 18,
                        "end": 20
                    }
                ],
                "flags": 1,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 18,
                "end": 20
            },
            "isConst": true,
            "flags": 402653185,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 7,
            "end": 20
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
                "start": 22,
                "end": 22
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 20,
            "end": 23
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 19,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "An enum member name must be followed by a ',', '=', or '}'.",
            "start": 21,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

