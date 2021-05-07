# Kataw parser test case

## Input

`````js
if (x) { "use strict"; with (x) y; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "\"use strict\"",
                                "flags": 96,
                                "start": 8,
                                "end": 21
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 22
                        },
                        {
                            "kind": 153,
                            "withKeyword": {
                                "kind": 37757029,
                                "flags": 0,
                                "start": 22,
                                "end": 27
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 29,
                                "end": 30
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 16,
                                "start": 31,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 22,
                            "end": 34
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 34
                },
                "flags": 16,
                "start": 6,
                "end": 36
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "if (x) { \"use strict\"; with (x) y; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

if (x) {
  "\"use strict\"";
  with (x y;
}
```

### Diagnostics

```javascript
✔ No errors
```

