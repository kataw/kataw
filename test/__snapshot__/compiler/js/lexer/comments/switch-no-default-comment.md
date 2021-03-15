# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
switch (a) {
    case 1:
        break;
    //no default
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "switch (a) {\n    case 1:\n        break;\n    //no default\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2097362,
            "expression": {
                "kind": 196712,
                "text": "a",
                "rawText": "a",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 2093,
                "clauses": [
                    {
                        "kind": 46,
                        "expression": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 23
                        },
                        "statements": [
                            {
                                "kind": 2097193,
                                "label": null,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 39
                            }
                        ],
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 39
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 58
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 58
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
    "end": 58
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

