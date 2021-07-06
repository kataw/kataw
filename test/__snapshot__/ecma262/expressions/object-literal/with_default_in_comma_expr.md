# Kataw parser test case

## Input

`````js
x, {foo = y, bar} = doo
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 301,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 7
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 11
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 16
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 2,
                            "end": 17
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "doo",
                            "rawText": "doo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 23
                        },
                        "flags": 32,
                        "transformFlags": 128,
                        "start": 2,
                        "end": 23
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "x, {foo = y, bar} = doo",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

x, {foo = y, bar} = doo;
```

### Diagnostics

```javascript
✔ No errors
```

