# Kataw parser test case

## Input

`````js
{ a(); bt(); }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 3
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 5
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "bt",
                                "rawText": "bt",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 9
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 6,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 12
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "{ a(); bt(); }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

{
  a();
  bt();
}
```

### Diagnostics

```javascript
✔ No errors
```

