# Kataw parser test case

## Input

`````js
enum E {
    "foo",
    "bar" = 1
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "enum E {\n    \"foo\",\n    \"bar\" = 1\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "E",
                "rawText": "E",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 4261583,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 18
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 8,
                        "end": 18
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 4261583,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 29
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 33
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 19,
                        "end": 33
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 8,
                "end": 33
            },
            "isConst": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 35
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
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

