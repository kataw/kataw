# Kataw parser test case

## Input

`````js
(b, ...a) + 1
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 281,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 7
                                },
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 8
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": null,
                                "flags": 34,
                                "transformFlags": 4096,
                                "start": 3,
                                "end": 8
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 0,
                        "end": 9
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "transformFlags": 5120,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "(b, ...a) + 1",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
(b, ...a) + 1;
```

### Diagnostics

```javascript
✔ No errors
```

