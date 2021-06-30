# Kataw parser test case

## Input

`````js
({ident: [foo, bar].join("")})
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "ident",
                                    "rawText": "ident",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 7
                                },
                                "right": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 13
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "start": 14,
                                                        "end": 18
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 10,
                                                "end": 18
                                            },
                                            "flags": 32,
                                            "start": 8,
                                            "end": 19
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "join",
                                            "rawText": "join",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 2,
                                        "end": 24
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 201392131,
                                                "text": "",
                                                "rawText": "\"\"",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 27
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 268435488,
                                    "start": 2,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 28
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "({ident: [foo, bar].join(\"\")})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

({ ident : [foo, bar,].join("\"\"") });

```

### Diagnostics

```javascript
✔ No errors
```

