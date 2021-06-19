# Kataw parser test case

## Input

`````js
 \u0063onst x = y;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 16464,
                "start": 0,
                "end": 11
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 11,
                        "end": 17
                    }
                ],
                "flags": 16777232,
                "start": 11,
                "end": 17
            },
            "flags": 33554448,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": " \\u0063onst x = y;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 0, end: 11

```

