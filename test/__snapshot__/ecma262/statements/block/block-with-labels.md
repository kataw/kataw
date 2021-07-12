# Kataw parser test case

## Input

`````js
{x: 42};
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
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 2,
                            "end": 3
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 3,
                                "end": 6
                            },
                            "flags": 16,
                            "start": 3,
                            "end": 6
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 6
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 7,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "{x: 42};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

  {
    x: 42;
  }
  ;

```

### Diagnostics

```javascript
✔ No errors
```

