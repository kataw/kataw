# Kataw parser test case

## Input

`````js
{`foo ${a} and ${b} and ${`w ${d} x ${e} y ${f} z`} baz`}
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
                            "kind": 227,
                            "spans": [
                                {
                                    "kind": 65764,
                                    "rawText": "foo ",
                                    "text": "foo ",
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 9
                                },
                                {
                                    "kind": 65764,
                                    "rawText": " and ",
                                    "text": " and ",
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 18
                                },
                                {
                                    "kind": 65764,
                                    "rawText": " and ",
                                    "text": " and ",
                                    "expression": {
                                        "kind": 227,
                                        "spans": [
                                            {
                                                "kind": 65764,
                                                "rawText": "w ",
                                                "text": "w ",
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 32
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 32
                                            },
                                            {
                                                "kind": 65764,
                                                "rawText": " x ",
                                                "text": " x ",
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "e",
                                                    "rawText": "e",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 39
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 39
                                            },
                                            {
                                                "kind": 65764,
                                                "rawText": " y ",
                                                "text": " y ",
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 45,
                                                    "end": 46
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 46
                                            }
                                        ],
                                        "tail": {
                                            "kind": 458761,
                                            "text": " z",
                                            "rawText": " z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 46,
                                            "end": 50
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 50
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 50
                                }
                            ],
                            "tail": {
                                "kind": 458761,
                                "text": " baz",
                                "rawText": " baz",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 56
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 56
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 56
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 56
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "{`foo ${a} and ${b} and ${`w ${d} x ${e} y ${f} z`} baz`}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
{
  `foo ${a},
   and ${b},
   and ${`w ${d},  x ${e},  y ${f} z`} baz`;
}
```

### Diagnostics

```javascript
✔ No errors
```

