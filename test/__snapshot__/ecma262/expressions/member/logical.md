# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
(veryLongVeryLongVeryLong || e).prop;

(veryLongVeryLongVeryLong || anotherVeryLongVeryLongVeryLong || veryVeryVeryLongError).prop;
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
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "veryLongVeryLongVeryLong",
                            "rawText": "veryLongVeryLongVeryLong",
                            "flags": 96,
                            "start": 1,
                            "end": 25
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "start": 25,
                            "end": 28
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "start": 28,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 30
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 31
                },
                "expression": {
                    "kind": 134299649,
                    "text": "prop",
                    "rawText": "prop",
                    "flags": 96,
                    "start": 32,
                    "end": 36
                },
                "flags": 536870944,
                "start": 0,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "veryLongVeryLongVeryLong",
                                "rawText": "veryLongVeryLongVeryLong",
                                "flags": 96,
                                "start": 40,
                                "end": 64
                            },
                            "operatorToken": {
                                "kind": 33339,
                                "flags": 96,
                                "start": 64,
                                "end": 67
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "anotherVeryLongVeryLongVeryLong",
                                "rawText": "anotherVeryLongVeryLongVeryLong",
                                "flags": 96,
                                "start": 67,
                                "end": 99
                            },
                            "flags": 32,
                            "start": 37,
                            "end": 99
                        },
                        "operatorToken": {
                            "kind": 33339,
                            "flags": 96,
                            "start": 99,
                            "end": 102
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "veryVeryVeryLongError",
                            "rawText": "veryVeryVeryLongError",
                            "flags": 96,
                            "start": 102,
                            "end": 124
                        },
                        "flags": 32,
                        "start": 37,
                        "end": 124
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 125
                },
                "expression": {
                    "kind": 134299649,
                    "text": "prop",
                    "rawText": "prop",
                    "flags": 96,
                    "start": 126,
                    "end": 130
                },
                "flags": 536870944,
                "start": 37,
                "end": 130
            },
            "flags": 16,
            "start": 37,
            "end": 131
        }
    ],
    "isModule": false,
    "source": "(veryLongVeryLongVeryLong || e).prop;\n\n(veryLongVeryLongVeryLong || anotherVeryLongVeryLongVeryLong || veryVeryVeryLongError).prop;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 131
}
```

### Printed

```javascript

(veryLongVeryLongVeryLong || e).prop;
(
  veryLongVeryLongVeryLong ||
  anotherVeryLongVeryLongVeryLong ||
  veryVeryVeryLongError
).prop;
```

### Diagnostics

```javascript
✔ No errors
```

