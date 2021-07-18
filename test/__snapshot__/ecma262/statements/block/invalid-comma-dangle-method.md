# Kataw parser test case

## Input

`````js
{ foo(a, b,) {} };
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 5
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 7
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 11
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 12
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 14
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 15
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 17,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "{ foo(a, b,) {} };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '{' is not allowed here. Did you mean ';'? - start: 12, end: 14

```

