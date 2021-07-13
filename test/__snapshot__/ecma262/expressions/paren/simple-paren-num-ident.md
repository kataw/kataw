# Kataw parser test case

## Input

`````js
(0, a);

(0, (0, a));
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
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 5
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 11
                        },
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 15
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 18
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 12,
                                "end": 18
                            },
                            "flags": 12,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 7,
                    "end": 19
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 33,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 7,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "(0, a);\n\n(0, (0, a));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
(0, a);
(0, (0, a));

```

### Diagnostics

```javascript
✔ No errors
```

