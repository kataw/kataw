# Kataw parser test case

## Input

`````js
for (a?.b of c);

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
                "kind": 205,
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 5,
                    "end": 6
                },
                "chain": {
                    "kind": 202,
                    "chain": {
                        "kind": 206,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 9
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "of",
                        "rawText": "of",
                        "flags": 768,
                        "start": 9,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 9,
                    "end": 12
                },
                "flags": 256,
                "start": 5,
                "end": 12
            },
            "condition": null,
            "incrementor": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 768,
                "start": 12,
                "end": 14
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 15,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "for (a?.b of c);\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 14,
            "end": 15
        }
    ],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

