# Kataw parser test case

## Input

`````js
switch (true) { default: const x; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "start": 15,
                            "end": 23
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 37757004,
                                    "flags": 80,
                                    "start": 24,
                                    "end": 30
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
                                                "start": 30,
                                                "end": 32
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 30,
                                            "end": 32
                                        }
                                    ],
                                    "flags": 16777232,
                                    "start": 30,
                                    "end": 32
                                },
                                "flags": 33554448,
                                "start": 24,
                                "end": 33
                            }
                        ],
                        "flags": 16,
                        "start": 15,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 13,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "switch (true) { default: const x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in const declaration - start: 32, end: 33

```

