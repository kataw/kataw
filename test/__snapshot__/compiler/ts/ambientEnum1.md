# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
declare enum E1 {
  y = 4.23
}

// Ambient enum with computer member
declare enum E2 {
  x = 'foo'.length
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare enum E1 {\n  y = 4.23\n}\n\n// Ambient enum with computer member\ndeclare enum E2 {\n  x = 'foo'.length\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "E1",
                "rawText": "E1",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 15
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 21
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 4.23,
                            "rawText": "4.23",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 28
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 17,
                        "end": 28
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 17,
                "end": 28
            },
            "isConst": false,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 7,
            "end": 30
        },
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "E2",
                "rawText": "E2",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 81,
                "end": 84
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 86,
                            "end": 90
                        },
                        "initializer": {
                            "kind": 67175096,
                            "member": {
                                "kind": 4261583,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 33554432,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 98
                            },
                            "expression": {
                                "kind": 196711,
                                "text": "length",
                                "rawText": "length",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 99,
                                "end": 105
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 98,
                            "end": 105,
                            "period": {
                                "kind": 255,
                                "pos": 98,
                                "end": 99
                            }
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 86,
                        "end": 105
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 86,
                "end": 105
            },
            "isConst": false,
            "flags": 402653184,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 76,
            "end": 107
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 107
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

