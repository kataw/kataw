# Kataw parser test case

## Input

`````js
for (let a;;) { let a; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 10
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 15,
                                "end": 19
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 19,
                                        "end": 21
                                    }
                                ],
                                "flags": 16,
                                "start": 19,
                                "end": 21
                            },
                            "flags": 33554448,
                            "start": 15,
                            "end": 22
                        }
                    ],
                    "flags": 16,
                    "start": 15,
                    "end": 22
                },
                "flags": 16,
                "start": 13,
                "end": 24
            },
            "flags": 80,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "for (let a;;) { let a; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

for (let; ; )
  {}
```

### Diagnostics

```javascript
✔ No errors
```

