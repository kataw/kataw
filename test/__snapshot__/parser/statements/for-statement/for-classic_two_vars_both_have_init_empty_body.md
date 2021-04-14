# Kataw parser test case

## Input

`````js
for (var a=1, b=2;;);
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
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 8,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 11,
                            "end": 12
                        },
                        "flags": 128,
                        "start": 8,
                        "end": 12
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 13,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "text": 2,
                            "rawText": "2",
                            "flags": 768,
                            "start": 16,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 13,
                        "end": 17
                    }
                ],
                "flags": 128,
                "start": 8,
                "end": 17
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 20,
                "end": 21
            },
            "flags": 128,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "for (var a=1, b=2;;);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

