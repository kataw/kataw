# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
const str = `${__dirname}/test/*.js`;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const str = `${__dirname}/test/*.js`;",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "lexicals": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "str",
                            "rawText": "str",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 9
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66261,
                            "spans": [
                                {
                                    "kind": 66263,
                                    "rawText": "",
                                    "text": "",
                                    "expression": {
                                        "kind": 196712,
                                        "text": "__dirname",
                                        "rawText": "__dirname",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 24
                                    },
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 1,
                                    "start": 11,
                                    "end": 24
                                }
                            ],
                            "tail": {
                                "kind": 4260568,
                                "rawText": "/test/*.js",
                                "text": "/test/*.js",
                                "literal": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 24,
                                "end": 36
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 11,
                            "end": 36
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 36
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 36
            },
            "flags": 8,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 37
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
    "end": 37
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

