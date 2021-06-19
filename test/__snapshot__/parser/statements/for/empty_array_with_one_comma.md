# Kataw parser test case

## Input

`````js
for (let [,] = x);
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
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "start": 10,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 0,
                                "start": 10,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 16
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 16
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 16,
                "end": 16
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 17,
                "end": 18
            },
            "flags": 80,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for (let [,] = x);",
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
✖ ',' expected - start: 16, end: 17
✖ Identifier expected - start: 16, end: 17

```

