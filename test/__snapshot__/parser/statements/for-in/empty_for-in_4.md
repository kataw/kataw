# Kataw parser test case

## Input

`````js
for (const a in b);
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 12,
                "end": 15
            },
            "kind": 166,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "original": "a",
                            "text": "a",
                            "rawText": " a",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 10,
                        "end": 12
                    }
                ],
                "flags": 16777232,
                "start": 10,
                "end": 12
            },
            "expression": {
                "kind": 134299649,
                "original": "b",
                "text": "b",
                "rawText": " b",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 18,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "for (const a in b);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

