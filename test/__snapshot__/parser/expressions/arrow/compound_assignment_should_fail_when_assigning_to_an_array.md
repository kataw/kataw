# Kataw parser test case

## Input

`````js
({ident: [foo, bar] += x})
`````

## Output

### Hybrid CST

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
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 10,
                                                    "end": 13
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 768,
                                                    "start": 14,
                                                    "end": 18
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 10,
                                            "end": 18
                                        },
                                        "flags": 256,
                                        "start": 8,
                                        "end": 19
                                    },
                                    "operatorToken": {
                                        "kind": 4130,
                                        "flags": 19,
                                        "start": 512,
                                        "end": 22
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "flags": 256,
                                    "start": 8,
                                    "end": 24
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "ident",
                                    "rawText": "ident",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 7
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 24
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "({ident: [foo, bar] += x})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an array literal - start: 19, end: 22

```

